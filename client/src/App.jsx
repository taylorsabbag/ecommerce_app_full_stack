import "./mvp.css";

function App() {
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
      <h1>How are you <i>feeling</i> <u>today?</u></h1>
      <p>Let's go ahead and have fun</p>
      <br />
      <p>
        <a href="#">
          <i>Italic</i>
        </a>
        <a href="#">
          <b>Bold</b>
        </a>
      </p>
    </header>
  );
}

export default App;
