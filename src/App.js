import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  Navigate,
} from 'react-router-dom'
import { ColorAdd } from './ColorAdd'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import InfoIcon from '@mui/icons-material/Info'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

const INITIAL_BOOK_LIST = [
  {
    name: "Charlotte's web",
    poster:
      'https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg',
    rating: 8.8,
    summary:
      'The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.',
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TgsD-xdJdoM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    name: 'The power of your subconscious mind',
    poster:
      'https://kbimages1-a.akamaihd.net/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg',
    rating: 7,
    summary:
      'Your subconscious mind is a powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories',
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Solb9uA-tgQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    name: 'Attitude is everything ',
    poster: 'https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg',
    rating: 8.1,
    summary:
      'Attitude, In psychology, a mental position with regard to a fact or state. Attitudes reflect a tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses a person makes.',
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/375BfMyAiII"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    name: 'The Secret',
    poster: 'https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg',
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from a catalogue",
    rating: 8.8,
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/j0HB7QTVxRU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    name: 'Discover Your Destiny',
    rating: 6,
    summary:
      "'Discover Your Destiny' is a story about enlightenment of Dar SanderSon, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    poster: 'https://m.media-amazon.com/images/I/61t18yWH5qL.jpg',
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/CONVgElpP1U"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    name: 'The 5 AM Club',
    poster: 'https://m.media-amazon.com/images/I/71zytzrg6lL.jpg',
    rating: 8.6,
    summary:
      'In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses a fictitious story about a billionaire mentor teaching a struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.',
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wn7Qlj_0-2Y"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; cliimport { light } from '@mui/material/styles/createPalette';
pboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    name: 'Atomic Habits',
    poster: 'https://m.media-amazon.com/images/I/91bYsX41DVL.jpg',
    rating: 8,
    summary:
      'Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.',
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/p2WmaYti5JA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
  {
    name: 'I Can Do It',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg',
    rating: 8,
    summary:
      'Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is a stream of affirmations.',
    trailer: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/y62qewQ5qsQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    ),
  },
]

fetch('https://63bf128ae348cb07622060bf.mockapi.io/book')
  .then((res) => res.json()).then((bookData) => console.log(bookData))

export default function App() {
  const navigate = useNavigate()
  const [mode, setMode] = useState('light')
  const Theme = createTheme({
    palette: {
      mode: mode,
    },
  })

  const [bookList, setBookList] = useState(INITIAL_BOOK_LIST)

  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate('/')}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate('/book')}>
              Book
            </Button>
            <Button color="inherit" onClick={() => navigate('/AddBook')}>
              Add Book
            </Button>
            <Button color="inherit" onClick={() => navigate('/color-game')}>
              color game
            </Button>
            <Button
              color="inherit"
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              startIcon={
                mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />
              }
            >
              {mode === 'light' ? 'dark' : 'light'} mode
            </Button>

            {/* <ul>
    <li> <Link to='/'>Home</Link></li>
    <li><Link to='/book'>Book</Link></li>
    <li><Link to='/color-game'>color game</Link></li>
    
  </ul> */}
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />}>
            {' '}
          </Route>

          <Route
            path="/book"
            element={<BookList bookList={bookList} setBookList={setBookList} />}
          >
            {' '}
          </Route>

          <Route
            path="/novel"
            element={<Navigate replace to="/book"></Navigate>}
          >
            {' '}
          </Route>

          <Route
            path="/AddBook"
            element={<AddBook bookList={bookList} setBookList={setBookList} />}
          >
            {' '}
          </Route>

          <Route
            path="/book/:bookid"
            element={<BookDetail bookList={bookList} />}
          ></Route>

          <Route path="/color-game" element={<ColorAdd />}>
            {' '}
          </Route>

          <Route path="/404" element={<NotFound />}></Route>

          <Route
            path="*"
            element={<Navigate replace to="/404"></Navigate>}
          ></Route>
        </Routes>
      </div>
    </ThemeProvider>
  )
}

function BookDetail({ bookList }) {
  const { bookid } = useParams()
  const book = bookList[bookid]

  console.log(bookList)

  return (
    <div className="book-container">
      <div className="Info-Book-trailer">{book.trailer}</div>

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

function BackButton() {
  const navigate = useNavigate()

  return (
    <Button
      onClick={() => navigate(-1)}
      variant="contained"
      startIcon={<ArrowBackIosNewIcon />}
    >
      Back
    </Button>
  )
}

function Home() {
  return <h2>Welcome to Book app</h2>
}

// function BookDetail(){

//  const{bookid} = useParams();

//   return(

//     <div>
//       Book Detail Page {bookid}
//     </div>

//   )

// }

function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="page_404">
      <div className="bg_image"></div>.
      <div className="content_box_404">
        <h3 className="h2">Look like you're lost</h3>

        <p>the page you are looking for not avaible!</p>

        <Button variant="contained" onClick={() => navigate('/')}>
          Go to Home
        </Button>

        <a href="" className="link_404"></a>
      </div>
    </div>
  )
}

function BookList({ bookList }) {
  // const bookList = INITIAL_BOOK_LIST;

  return (
    <div className="book-list">
      {bookList.map((bk, index) => (
        <Book key={index} book={bk} id={index} />
      ))}
    </div>
  )
}

function AddBook({ bookList, setBookList }) {
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

function Book({ book, id }) {
  const navigate = useNavigate()

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

// function AddBook(){

//   const [bookName,setBookName] = useState("")

//   const [bookPoster,setBookPoster] = useState("")

//   const [bookRating,setBookRating] = useState("")

//   const [bookSummary,setBookSummary] = useState("")

// const [addBookList,setAddBookList] = useState(INITIAL_BOOK_LIST)

//   return(
//     <div className='addBookForm'>

// <input type="text" onChange={(event) => setBookName(event.target.value)} placeholder='enter book name' ></input>

//   <input type="text" onChange={(event) => setBookPoster(event.target.value)} placeholder='add poster'></input>

// <input type="text"onChange={(event) => setBookRating(event.target.value)} placeholder='enter book rating' ></input>

// <input type="text" onChange={(event) => setBookSummary(event.target.value)} placeholder='enter book summary' ></input>

//   <button onClick={() => {

//     const newBook =  {
//     name: bookName,
//     poster:bookPoster,
//     rating:bookRating ,
//     summary:bookSummary,
//   };

//     setAddBookList([...addBookList,newBook])}} >click to add book</button>

//     </div>

//   );
// }
