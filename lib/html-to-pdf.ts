import { LowerCasePaperFormat, PDFOptions } from 'puppeteer';
import { Promise as PromiseBluebird } from 'bluebird';
import hb from 'handlebars';
import chromium from 'chrome-aws-lambda';

type CallBackType = (pdf: any) => void;

interface OptionsProps extends PDFOptions {
  args?: string[];
}

interface FileWithUrl {
  url: string;
  content?: never;
}

interface FileWithContent {
  url?: never;
  content: string;
}

type FileType = FileWithUrl | FileWithContent;

export async function generatePdf(file: FileType, opt?: OptionsProps, callback?: CallBackType) {
  const {args = [], ...options} = opt || {}
  const browser = await chromium.puppeteer.launch({
    args: [...chromium.args, "--hide-scrollbars", "--disable-web-security", '--no-sandbox', '--disable-setuid-sandbox', ...args],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  })


  const page = await browser.newPage();

  if(file.content) {
    const template = hb.compile(file.content, { strict: true });
    const result = template(file.content);
    const html = result;

    await page.setContent(html);
  } else {
    await page.goto(file.url as string, {
      waitUntil: 'networkidle0',
    });
  }

  if(file.content) {}

  return PromiseBluebird.props(page.pdf({
    ...options,
    format: options.format?.toLocaleLowerCase() as LowerCasePaperFormat
  }))
    .then(async function(data) {
       await browser.close();

       return Buffer.from(Object.values(data));
    }).asCallback(callback);
}

export async function generatePdfs(files: FileType[], opt?: OptionsProps, callback?: CallBackType) {
  const {args = [], ...options} = opt || {}

  const browser = await chromium.puppeteer.launch({
    args: [...chromium.args, "--hide-scrollbars", "--disable-web-security", '--no-sandbox', '--disable-setuid-sandbox', ...args],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  })

  let pdfs = [];

  const page = await browser.newPage();

  for(let file of files) {
    if(file.content) {
      const template = hb.compile(file.content, { strict: true });
      const result = template(file.content);
      const html = result;

      await page.setContent(html);
    } else {
      await page.goto(file.url as string, {
        waitUntil: 'networkidle0',
      });
    }
    let pdfObj = JSON.parse(JSON.stringify(file));
    delete pdfObj['content'];
    pdfObj['buffer'] = Buffer.from(Object.values(await page.pdf({
      ...options,
      format: options.format?.toLocaleLowerCase() as LowerCasePaperFormat
    })));
    pdfs.push(pdfObj);
  }

  return PromiseBluebird.resolve(pdfs)
    .then(async function(data) {
       await browser.close();
       return data;
    }).asCallback(callback);
}

