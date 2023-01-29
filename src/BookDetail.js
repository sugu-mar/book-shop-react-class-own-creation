import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BackButton } from './BackButton'
import {API} from "./global"
export function BookDetail() {
  const { bookid } = useParams()

  const [book, setBook] = useState({})

  useEffect(() => {
    fetch(`${API}/book/${bookid}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((bookData) => {
        setBook(bookData)
        console.log(bookData)
      })
  }, [])

  // console.log(book)

  return (
    <div className="book-container">
      <div className="Info-Book-trailer">
        <iframe
          width="560"
          height="315"
          src={book.trailer}
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // allowfullscreen
        ></iframe>
      </div>

      <div className="book-spec-info">
        <h2 className="book-name">{book.name}</h2>

        <p className="book-rating">⭐{book.rating}</p>
      </div>

      {/* <div className='Info-Book-name-rating' ><p>{book.name}⭐{book.rating}</p> </div> */}
      <div className="Info-Book-summary">{book.summary}</div>

      <BackButton />
    </div>
  )
}
