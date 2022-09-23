import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav>
        <a href="#">
          <img src="https://via.placeholder.com/200x70?text=WHATTTTT" alt="WHATTTTT" height="70" />
        </a>
        <ul>
          <li>Home</li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Store</a>
            <ul>
              <li><a href="#">My First Shoes</a></li>
              <li><a href="#">My Second Shoes</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar