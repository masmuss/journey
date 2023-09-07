import React from 'react'

export default async function Writingpage({
	params,
}: {
	params: { id: number }
}) {
	const { id } = params
	const writing = await getData(id)

	return <div>{writing.title}</div>
}

export async function getData(id: number) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
	const data = await res.json()

	return data
}
