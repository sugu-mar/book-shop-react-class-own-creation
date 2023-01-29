import React, { useState, useEffect } from 'react'
import { Book } from './Book'
import { API } from './global'

export function BookList() {
  // const bookList = INITIAL_BOOK_LIST

  useEffect(() => {
    fetch(`${API}/book`)
      .then((res) => res.json())
      .then((bookData) => {
        setBookList(bookData)
        // console.log(bookData)
      })
  }, [])

  const [bookList, setBookList] = useState([])

  return (
    <div className="book-list">
      {bookList.map((bk, index) => (
        <Book key={bk.id} book={bk} id={bk.id} />
      ))}
    </div>
  )
}
