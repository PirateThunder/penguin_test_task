import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const pages = [
  {url: '/penguins', name: 'Пингвины'},
  {url: '/deals', name: 'Дела'},
]

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {pages.map(page =>
        <Link className={styles.link} to={page.url}>
          {page.name}
        </Link>
      )}
    </nav>
  )
}

export default Navbar