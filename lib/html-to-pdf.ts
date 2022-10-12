import { chromium, Page} from "playwright"
import { Promise as PromiseBluebird } from 'bluebird';
import hb from 'handlebars';

type CallBackType = (pdf: any) => void;
interface PdfPlaywrightOptions {
  displayHeaderFooter?: boolean;
  footerTemplate?: string;
  format?: `Letter` | `Legal` | `Tabloid` | `Ledger` | `A0` | `A1` | `A2` | `A3` | `A4` | `A5` | `A6`;
  headerTemplate?: 'date' | 'title' | 'url' | 'pageNumber' | 'totalPages';
  height?: string|number;
  landscape?: boolean;
  margin?: {
    top?: string|number;
    right?: string|number;
    bottom?: string|number;
    left?: string|number;
  };
  pageRanges?: string;
  path?: string;
  preferCSSPageSize?: boolean;
  printBackground?: boolean;
  scale?: number;
  width?: string|number;
}
interface OptionsProps extends PdfPlaywrightOptions{
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
  const browser = await chromium.launch({
    args: ["--hide-scrollbars", "--disable-web-security", '--no-sandbox', '--disable-setuid-sandbox', ...args],
    headless: true
  })


  const page = await browser.newPage();

  if(file.content) {
    const template = hb.compile(file.content, { strict: true });
    const result = template(file.content);
    const html = result;

    await page.setContent(html);
  } else {
    await page.goto(file.url as string, {waitUntil: 'networkidle'});
  }

  if(file.content) {}

  return PromiseBluebird.props(page.pdf(options)).then(async function(data) {
       await browser.close();

       return Buffer.from(Object.values(data));
    }).asCallback(callback);
}

