'use client'

import { SubmitButton } from '@/components/SubmitButton'

export default function BasicForm() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="card">
        <h1 className="mb-6 text-center text-2xl font-bold">Basic Form</h1>
        <form className="flex flex-col space-y-4">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <div className="flex">
            <span className="rounded-e-0 inline-flex items-center rounded-s-md border border-e-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </span>
            <input
              type="text"
              name="name"
              id="name"
              aria-label="Name"
              placeholder="Enter your name"
              className="input"
            />
          </div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <div className="flex">
            <span className="rounded-e-0 inline-flex items-center rounded-s-md border border-e-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </span>
            <input
              type="text"
              name="email"
              id="email"
              aria-label="Email"
              placeholder="Enter your email address"
              className="input"
            />
          </div>
          <label htmlFor="feedbackType" className="sr-only">
            Feedback Type
          </label>
          <select
            name="feedbackType"
            id="feedbackType"
            className="input bg-white p-3 shadow-sm transition"
          >
            <option value="">Select a type...</option>
            <option value="bug">Bug Report</option>
            <option value="feature">Feature Request</option>
            <option value="general">General Feedback</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="comment" className="sr-only">
            Comment
          </label>
          <textarea
            name="comment"
            rows={4}
            required
            placeholder="Write a comment..."
            id="comment"
            aria-label="Comment"
            className="input"
          />
          <SubmitButton />
        </form>
      </div>
    </main>
  )
}
