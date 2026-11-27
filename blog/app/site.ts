export const baseUrl = 'https://www.humdaan.com'

export function getPostImageUrl(section: string, slug: string, image?: string) {
  return new URL(image || `/og/${section}/${encodeURIComponent(slug)}.png`, baseUrl).href
}
