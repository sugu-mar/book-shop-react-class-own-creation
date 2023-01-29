import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import InfoIcon from '@mui/icons-material/Info'

export function Book({ book, id }) {
  const navigate = useNavigate()

  // useEffect(() => {
  //   fetch('https://63bf128ae348cb07622060bf.mockapi.io/book')
  //     .then((res) => res.json())
  //     .then((bookData) => {
  //       setBookList(bookData)
  //       console.log(bookData)
  //     })
  // }, [])

  // const [bookList, setBookList] = useState([])

  // const ratingColor = book.rating > 8 ? 'red' : 'blue'
  const styles = {
    color: book.rating >= 8 ? 'blue' : 'red',
  }
  const [show, setShow] = useState(true)
  // const summaryStyle={
  //   display:show == true?"block":"none"
  // }
  return (
    <div className="book-container">
      <img className="book-poster" src={book.poster} alt={book.name}></img>
      <div className="book-spec">
        <h2 className="book-name">
          {book.name} - {id}
        </h2>

        <p style={styles} className="book-rating">
          ⭐{book.rating}
        </p>
      </div>

      <IconButton
        color="primary"
        aria-label="toggle Description"
        onClick={() => setShow(!show)}
      >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>

      {/* <button onClick={() => (setShow(!show))}>Toggle summary</button> */}

      {/* Info button */}

      <IconButton
        color="primary"
        aria-label="Info"
        onClick={() => navigate('/book/' + id)}
      >
        <InfoIcon />
      </IconButton>

      {/* <button onClick={() => navigate("/book/" + id)}>Info</button> */}

      {/* <p style={summaryStyle} className="book-summary">{book.summary}</p> */}

      {show ? <p className="book-summary">{book.summary}</p> : ''}

      <LikeDislikeButton />
    </div>
  )

  function LikeDislikeButton() {
    const [like, setLike] = useState(0)

    const [dislike, setDislike] = useState(0)

    return (
      <div className="like-dislike-button">
        <IconButton
          color="primary"
          aria-label="Like button"
          onClick={() => setLike(like + 1)}
        >
          {/* 👍{like} */}

          <Badge badgeContent={like} color="primary">
            👍
          </Badge>
        </IconButton>

        {/* <button onClick={()=>setLike(like + 1)} >👍{like} </button> */}

        <IconButton
          color="error"
          aria-label="dislike button"
          onClick={() => setDislike(dislike + 1)}
        >
          {/* 👎{dislike} */}

          <Badge badgeContent={dislike} color="error">
            👎
          </Badge>
        </IconButton>

        {/* <button onClick={()=>setDislike(dislike + 1)}>👎{dislike}</button>  */}
      </div>
    )
  }
}
