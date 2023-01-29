import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'

// function BookDetail(){
//  const{bookid} = useParams();
//   return(
//     <div>
//       Book Detail Page {bookid}
//     </div>
//   )
// }
export function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="page_404">
      <div className="bg_image"></div>.
      <div className="content_box_404">
        <h3 className="h2">Look like you're lost</h3>

        <p>the page you are looking was not avaible!</p>

        <Button variant="contained" onClick={() => navigate('/')}>
          Go to Home
        </Button>

        <a href="" className="link_404"></a>
      </div>
    </div>
  )
}
