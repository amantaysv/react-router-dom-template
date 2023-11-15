import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

interface IEditPost {
  title?: string
  body?: string
  userId?: number
}

export const EditPost = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [post, setPost] = useState<null | IEditPost>(null)

  const goBackHandle = () => {
    navigate(-1)
  }

  const inputHandle = (event: ChangeEvent<HTMLInputElement>) => {
    setPost({
      ...post,
      [event.currentTarget.name]: event.target.value,
    })
  }

  const createHandle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const post = data
        delete post.id
        setPost(post)
      })
  }, [id])

  return (
    <div>
      <button onClick={goBackHandle}>go back</button>
      <h1>Edit {id}</h1>
      <form onSubmit={createHandle}>
        <label>
          <p>title</p>
          <input
            className='edit-input'
            value={post?.title}
            type='text'
            name='title'
            placeholder='title'
            onChange={inputHandle}
          />
        </label>
        <label>
          <p>body</p>
          <input
            className='edit-input'
            value={post?.body}
            type='text'
            name='body'
            placeholder='body'
            onChange={inputHandle}
          />
        </label>
        <label>
          <p>user id</p>
          <input
            className='edit-input'
            value={post?.userId}
            type='text'
            name='userId'
            placeholder='userId'
            onChange={inputHandle}
          />
        </label>
        <button type='submit'>save</button>
      </form>
    </div>
  )
}
