import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-10 mt-auto border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">
              © {currentYear} Hidden File Cleaner
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-sm text-gray-500">
              All rights reserved
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
