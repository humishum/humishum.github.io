import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'thought stream',
  description: 'daily unedited thoughts',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-4 tracking-tighter">thought stream</h1>
      <p className="text-sm text-neutral-800 dark:text-neutral-700 mb-2">
        this page is an effort in spraying thoughts onto the web, on a ~daily basis, with minimal effort of cleanliness 
      </p>
      <BlogPosts directory="thought-stream" groupByMonth={true} />

    </section>
  )
}
