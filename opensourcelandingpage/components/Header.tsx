import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-opacity-90 backdrop-blur supports-backdrop-blur:bg-opacity-70 dark:bg-opacity-90 dark:supports-backdrop-blur:bg-opacity-70">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="text-lg font-bold text-gray-800 hover:text-gray-600 dark:text-gray-200 dark:hover:text-gray-400">
          Web Open Source Projects
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
