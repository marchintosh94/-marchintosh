import { generatePdf } from "lib/html-to-pdf";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const file = {url: `${process.env.FE_BASE_URL}/resume/en`}

  generatePdf(file, {format: 'A4', printBackground: true, scale: 0.58}).then(pdfBuffer => {
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename=marcobaratto-resume.pdf')
    res.setHeader('Content-Length', pdfBuffer.length)
    res.end(pdfBuffer)
  })
}


export default handler