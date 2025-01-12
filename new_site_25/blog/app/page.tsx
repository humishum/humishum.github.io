import { BlogPosts } from 'app/components/posts'
import styles from '../styles/Home.module.css';

export default function Home() {   // should this be page() ? 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans">
      <h1 className="text-4xl font-bold">humdaan's internet garage</h1>
      <nav className="flex space-x-4 mt-4">
        <a href="/blog" className="text-blue-500 hover:text-blue-700">blog</a>
        <a href="/apps" className="text-green-500 hover:text-green-700">apps</a>
        <a href="/shots" className="text-orange-500 hover:text-orange-700">shots</a>
      </nav>
      <section className="mt-8 text-lg">
        <p>
          
        </p>
      </section>
    </div>
  );
}
