'use client' // error components must be client components

import { useEffect } from 'react'

export default function Error({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // log the error to a error reporting service
    console.log(error)
  }, [error])

  return (
    <div>
      <h2>Something went wrong</h2>
      <button
        onClick={
          // attempt to recover by trying to re-render the segment
          () => reset
        }
      >
        Try Again
      </button>
    </div>
  )
}
