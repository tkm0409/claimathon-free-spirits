import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "./hero-section";

export function LandingPage() {
  return (<>
    <header
      className="sticky top-0 z-50 flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-gray-900 text-white">
      <Link className="flex items-center gap-2 font-semibold" href="#">
        <CarIcon className="h-6 w-6" />
        <span className="">Auto Insurance</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <div className="relative group">
          <Button
            className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
            size="sm"
            variant="ghost">
            Claims
            <ChevronDownIcon className="w-4 h-4" />
          </Button>
          <div
            className="absolute right-0 mt-2 hidden w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 group-hover:block">
            <div className="py-1">
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                href="#">
                View Claims
              </Link>
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                href="#">
                File a Claim
              </Link>
            </div>
          </div>
        </div>
        <div className="relative group">
          <Button
            className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
            size="sm"
            variant="ghost">
            Coverage
            <ChevronDownIcon className="w-4 h-4" />
          </Button>
          <div
            className="absolute right-0 mt-2 hidden w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 group-hover:block">
            <div className="py-1">
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                href="#">
                Auto Coverage
              </Link>
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                href="#">
                Home Coverage
              </Link>
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                href="#">
                Life Coverage
              </Link>
            </div>
          </div>
        </div>
        <div className="relative group lg:hidden">
          <Button
            className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
            size="sm"
            variant="ghost">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div
            className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 hidden group-hover:block">
            <div className="py-1">
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                href="#">
                Pricing
              </Link>
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                href="#">
                Contact
              </Link>
            </div>
          </div>
        </div>
        <Link
          className="hidden text-sm font-medium hover:underline underline-offset-4 lg:block"
          href="#">
          Pricing
        </Link>
        <Link
          className="hidden text-sm font-medium hover:underline underline-offset-4 lg:block"
          href="#">
          Contact
        </Link>
        <div className="relative group">
          <Button
            className="flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
            size="sm"
            variant="ghost">
            <UserIcon className="w-6 h-6" />
            <span className="sr-only">User Menu</span>
          </Button>
          <div
            className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 hidden group-hover:block">
            <div className="py-1">
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                href="#">
                Login
              </Link>
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                href="#">
                Register
              </Link>
            </div>
          </div>
        </div>

      </nav>
    </header>
    <HeroSection />
    <HeroSection />

    <footer
      className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-white">
      <p className="text-xs">© 2024 Auto Insurance. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  </>);
}

function CarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>)
  );
}


function ChevronDownIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function UserIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}
