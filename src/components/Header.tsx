import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">C</div>
          <div className="font-semibold text-lg">Coursekiya Clone</div>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/courses">Courses</Link>
          <Link href="/webinars">Webinars</Link>
          <Link href="/digital">Digital Products</Link>
          <Link href="/login" className="px-3 py-1 border rounded">Login</Link>
        </nav>
      </div>
    </header>
  )
}
