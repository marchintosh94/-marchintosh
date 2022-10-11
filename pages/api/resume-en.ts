import type { NextApiRequest, NextApiResponse } from "next";
const htmlPdf = require("html-pdf-node")

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const file = {url: `${process.env.FE_BASE_URL}/resume/en`}

  htmlPdf.generatePdf(file, {format: 'A4', printBackground: true, scale: 0.58}).then((pdfBuffer: Buffer) => {
    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename=marcobaratto-resume.pdf')
    res.setHeader('Content-Length', pdfBuffer.length)
    res.end(pdfBuffer)
  })
}

export default handler