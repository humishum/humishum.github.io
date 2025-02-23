import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

const monthEmojis = {
  'January': '❄️',
  'February': '🚀',
  'March': '🌱',
  'April': '🌧️',
  'May': '🌺',
  'June': '☀️',
  'July': '☀️',
  'August': '🌊',
  'September': '🍂',
  'October': '⛰️',
  'November': '🏔️',
  'December': '⛄'
}

export function BlogPosts({ directory, groupByMonth = false }: { directory: string, groupByMonth?: boolean }) {
  let allBlogs = getBlogPosts(directory)
  
  if (!groupByMonth) {
    return (
      <div>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1
            }
            return 1
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/${directory}/${post.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-inherit w-[100px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="text-inherit tracking-tight">
                  {post.metadata.title}
                </p>
              </div>
            </Link>
          ))}
      </div>
    )
  }

  const groupedByMonth = allBlogs.reduce((groups, post) => {
    const date = new Date(post.metadata.publishedAt)
    const monthYear = date.toLocaleString('default', { month: 'long', year: 'numeric' })
    if (!groups[monthYear]) groups[monthYear] = []
    groups[monthYear].push(post)
    return groups
  }, {})

  return (
    <div>
      {Object.entries(groupedByMonth).map(([monthYear, posts]) => (
        <div key={monthYear}>
          <h2 className="text-xl font-bold mt-8 mb-4">
            {monthEmojis[monthYear.split(' ')[0]] || '📅'} {monthYear}
          </h2>
          {posts.map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/${directory}/${post.slug}`}
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-inherit w-[100px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="text-inherit tracking-tight">
                  {post.metadata.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}
