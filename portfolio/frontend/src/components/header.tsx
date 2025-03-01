import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center no-underline">
          <span className="text-xl font-bold">Muhammad Zahid</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "About", "Services", "Projects", "Reviews", "Blog"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-white text-base font-medium transition duration-300 ease-in-out 
                hover:text-gray-300 after:block after:h-[2px] after:w-0 after:bg-gray-300 after:transition-all after:duration-300 
                after:ease-in-out hover:after:w-full"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* Contact Button */}
        <Button
          variant="default"
          asChild
          className="border-white border text-white hover:bg-white hover:text-gray-900 transition-all"
        >
          <Link href="#contact" target="_blank" rel="noopener noreferrer">
            Contact
          </Link>
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="default"
          className="md:hidden bg-gray-700 text-white hover:bg-gray-600 transition-all"
        >
          Menu
        </Button>
      </div>
    </header>
  );
};

export default Header;
