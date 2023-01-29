import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export function AddBook({ bookList, setBookList }) {
  const [bookName, setBookName] = useState('')

  const [bookPoster, setBookPoster] = useState('')

  const [bookRating, setBookRating] = useState('')

  const [bookSummary, setBookSummary] = useState('')

  const [bookTrailer, setBookTrailer] = useState('')

  const navigate = useNavigate()

  return (
    <div className="addBookForm">
      <TextField
        label="Name"
        variant="outlined"
        type="text"
        onChange={(event) => setBookName(event.target.value)}
        placeholder="Enter book name"
      ></TextField>

      <TextField
        label="Poster"
        variant="outlined"
        type="text"
        onChange={(event) => setBookPoster(event.target.value)}
        placeholder="Add poster"
      ></TextField>

      <TextField
        label="Rating"
        variant="outlined"
        type="text"
        onChange={(event) => setBookRating(event.target.value)}
        placeholder="Enter book rating"
      ></TextField>

      <TextField
        label="Summary"
        variant="outlined"
        type="text"
        onChange={(event) => setBookSummary(event.target.value)}
        placeholder="Enter book summary"
      ></TextField>

      <TextField
        label="Trailer"
        variant="outlined"
        type="text"
        onChange={(event) => setBookTrailer(event.target.value)}
        placeholder="Enter book Trailer"
      ></TextField>

      <Button
        variant="contained"
        onClick={() => {
          const newBook = {
            name: bookName,
            poster: bookPoster,
            rating: bookRating,
            summary: bookSummary,
            trailer: bookTrailer,
          }

          setBookList([...bookList, newBook])

          // navigate('/book')
        }}
      >
        click to add book
      </Button>
    </div>
  )
}
