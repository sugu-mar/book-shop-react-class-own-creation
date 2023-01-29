import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

export function BackButton() {
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
