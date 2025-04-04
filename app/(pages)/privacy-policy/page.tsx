import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gray-50 border-b border-gray-200 py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-4">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-gray-600">Last updated: April 4, 2024</p>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <article className="prose prose-slate max-w-none">
          <h2>Introduction</h2>
          <p>
            Welcome to Hidden File Cleaner. This Privacy Policy explains how we collect, use, and protect your information when you use our application.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect minimal information necessary to provide our service:</p>
          <ul>
            <li>System information required to identify and clean hidden files</li>
            <li>Usage statistics to improve our application</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide the core functionality of cleaning hidden files</li>
            <li>Improve our application&apos;s performance and user experience</li>
            <li>Send important updates about the application</li>
          </ul>

          <h2>Data Storage</h2>
          <p>
            All file operations are performed locally on your device. We do not store or transmit your files to any external servers.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of usage statistics collection</li>
          </ul>

          <h2>Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <ul>
            <li>Email: support@hiddenfilecleaner.com</li>
            <li>Website: https://hiddenfilecleaner.com</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>
        </article>
      </div>
    </div>
  )
}
