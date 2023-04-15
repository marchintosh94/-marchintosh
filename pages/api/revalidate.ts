import { NextApiRequest, NextApiResponse } from "next"
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const availablePaths = new Set([
    '/',
    '/resume',
    '/resume/en',
    '/projects',
    '/about-me',
  ])
  const path = req.query.path as string
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token', secret:  req.query.secret })
  }
  if (!availablePaths.has(path)){
    return res.status(400).json({ message: 'Invalid path', path })
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(path)
    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}