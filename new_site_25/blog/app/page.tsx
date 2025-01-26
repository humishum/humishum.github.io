import { BlogPosts } from 'app/components/posts'
import styles from '../styles/Home.module.css';

export default function Home() { 
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans">
      <h1 className="text-5xl font-bold">humdaan's internet garage</h1>
      <nav className="flex space-x-6 mt-10 mb-4">
        <a href="/blog" className="text-4xl text-blue-500 hover:text-blue-700">blog</a>
        <a href="/apps" className="text-4xl text-green-500 hover:text-green-700">apps</a>
        <a href="/shots" className="text-4xl text-orange-500 hover:text-orange-700">shots</a>
      </nav>
      <section className="mt-4 text-lg">
        <p>
        welcome to my internet real estate. 
        </p>
      </section>
      <br></br><br></br>
      <a href="https://x.com/humishum" target="_blank" rel="noopener noreferrer">
        <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512">
            <path
              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </span>
      </a>
    </div>
  );
 
}
