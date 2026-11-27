import { ImageResponse } from 'next/og'
import { getBlogPosts, postSections } from 'app/blog/utils'

export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  return postSections.flatMap((section) =>
    getBlogPosts(section).map(({ slug }) => ({ section, filename: `${slug}.png` }))
  )
}

export function GET(
  _request: Request,
  { params }: { params: { section: string; filename: string } }
) {
  const { section, filename } = params
  if (!postSections.some((postSection) => postSection === section)) {
    return new Response(null, { status: 404 })
  }

  const post = getBlogPosts(section).find(({ slug }) => filename === `${slug}.png`)
  if (!post) {
    return new Response(null, { status: 404 })
  }

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
        <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left">
            {post.metadata.title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
