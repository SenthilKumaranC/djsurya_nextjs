"use client"

import React, { useState, FormEvent } from 'react'
import "./ContactForm.css"
 
export default function ContactForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
 
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true) // Set loading to true when the request starts
 
    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      })
 
      // Handle response if necessary
      const data = await response.json()
      // ...
    } catch (error) {
      // Handle error if necessary
      console.error(error)
    } finally {
      setIsLoading(false) // Set loading to false when the request completes
    }
  }
 
  return (
    <form onSubmit={onSubmit} className='ContactForm'>
     <span className='ReachMe'>Reach me</span>
     <label>Your Name</label>
      <input type="text" name="name"  />
      <label>Your Phone Number</label>
      <input type="tel" name="phoneNumber" pattern='^\d{10}$'  />
      <label>Event Description</label>
      <textarea  name="description" />
      <label>Event Date and Time</label>
      <input type="datetime-local" />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  )
}