import { ChangeEvent, FormEvent, useState } from 'react'

interface ICreatePost {
  title: string
  body: string
  userId: number
}

export const CreatePost = () => {
  const [post, setPost] = useState<ICreatePost>({
    title: '',
    body: '',
    userId: 1,
  })

  const inputHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setPost({
      ...post,
      [event.currentTarget.name]: event.target.value,
    })
  }

  const createHandle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
  }

  return (
    <div>
      <form onSubmit={createHandle}>
        <input type='text' name='title' placeholder='title' onChange={inputHandle} required />
        <input type='text' name='body' placeholder='body' onChange={inputHandle} required />
        <input type='text' name='userId' placeholder='userId' onChange={inputHandle} required />
        <button type='submit'>create</button>
      </form>
    </div>
  )
}
