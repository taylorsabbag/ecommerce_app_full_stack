import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <a href="#">
          <img
            src="https://via.placeholder.com/200x70?text=Shoes!"
            alt="WHATTTTT"
            height="70"
          />
        </a>
        <form action="search">
            <input type="text" placeholder="Search TODO with button" name="search" />
            <button type="submit">Search</button>
        </form>
        <ul>
          <li>
            <a href="#">Account</a>
            <ul>
              <li>
                <a href="#">Register</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Wishlist</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
