import { getBlogPosts, postSections } from 'app/blog/utils'
import { baseUrl } from 'app/site'

export default async function sitemap() {
  let posts = postSections.flatMap((section) =>
    getBlogPosts(section).map((post) => ({
      url: `${baseUrl}/${section}/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }))
  )

  let routes = ['', ...postSections.map((section) => `/${section}`)].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}
