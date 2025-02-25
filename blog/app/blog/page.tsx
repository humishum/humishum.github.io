import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'blog posts',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">writings</h1>
      <BlogPosts directory="blog" />
    </section>
  )
}
