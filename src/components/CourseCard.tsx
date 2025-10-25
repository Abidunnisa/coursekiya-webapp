import React from 'react'

type Props = {
  course: {
    id: number
    title: string
    summary: string
    price: number
    image?: string
  }
}

export default function CourseCard({ course }: Props) {
  return (
    <div className="bg-white rounded shadow p-4">
      <div className="h-40 bg-gray-100 rounded-md flex items-center justify-center">{course.image ? <img src={course.image} alt={course.title} /> : <div className="text-gray-400">Image</div>}</div>
      <h3 className="mt-3 font-semibold">{course.title}</h3>
      <p className="mt-1 text-sm text-gray-600">{course.summary}</p>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-lg font-bold">₹{course.price}</div>
        <button className="px-3 py-1 bg-indigo-600 text-white rounded">Add to cart</button>
      </div>
    </div>
  )
}
