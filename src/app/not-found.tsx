import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[50vh] py-12 space-y-4 md:min-h-[60vh] lg:py-24 xl:space-y-6">
      <Image
        src="undraw_page_not_found.svg"
        alt="Page Not Found Background Image"
        width={200}
        height={200}
      />
      <div className="flex flex-col items-center space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl">
          Page Not Found
        </h1>
        <p className="max-w-[600px] text-center text-gray-500 md:text-xl/relaxed dark:text-gray-400">
          Oops! The page you are looking for could not be found. Please check
          the URL or go back to the homepage.
        </p>
      </div>
      <Link
        className="inline-flex h-10 items-center rounded-md border border-gray-200 px-8 text-sm font-medium shadow-sm transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500"
        href="/"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
