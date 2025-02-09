export default function Home() {
  const linkClasses =
    'block w-full bg-white text-gray-900 text-center py-3 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200 ease-in-out'
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="">NextJS Forms</h1>
      <div className="w-full max-w-md space-y-4">
        <a href="/forms/basic" className={linkClasses}>
          Basic Form
        </a>
        <a href="/forms/react-hook-form" className={linkClasses}>
          React Hook Form
        </a>
        <a href="/forms/multi-step" className={linkClasses}>
          Multi-Step Form
        </a>
        <a href="/forms/file-upload" className={linkClasses}>
          File Upload
        </a>
      </div>
    </main>
  )
}
