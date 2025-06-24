import React from 'react'
import '../styles/Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <p>© {year} Pet Profile Cards. Created with React & Vite.</p>
    </footer>
  )
}

export default Footer
