import { BlogPosts } from 'app/components/posts'
import styles from '../styles/Home.module.css';

export default function Home() { 
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans">
      <h1 className="text-5xl font-bold">humdaan's internet garage</h1>
      <nav className="flex space-x-6 mt-10 mb-4">
        <a href="/blog" className="text-4xl text-blue-500 hover:text-blue-700">blog</a>
        <a href="/thought-stream" className="text-4xl text-green-500 hover:text-green-700">thought stream</a>
        {/* <a href="/apps" className="text-4xl text-green-500 hover:text-green-700">apps</a> */}
        {/* <a href="/shots" className="text-4xl text-orange-500 hover:text-orange-700">shots</a> */}
      </nav>
      <section className="mt-4 text-lg">
        <p>
        welcome to my internet real estate. 
        </p>
      </section>
      <br></br><br></br>
      <div className="flex space-x-4 items-center">
        <a href="https://x.com/humishum" target="_blank" rel="noopener noreferrer">
          <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 512 512">
              <path
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </span>
        </a>
        <a href="https://github.com/humishum" target="_blank" rel="noopener noreferrer">
          <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.398 3-.403 1.02.005 2.043.137 3 .403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.795 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
 
}
