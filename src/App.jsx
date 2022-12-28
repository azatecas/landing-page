import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <img src="https://imgur.com/s15x0d7" className="blueprint" alt="crane" />
      </div>
      <a
        href="https://www.flaticon.com/free-icons/blueprint"
        title="blueprint icons"
        className="attribution"
      >
        Blueprint icons created by monkik - Flaticon
      </a>
      <h1 className="title">REDESIGN IN THE WORKS...</h1>
      <div>
        <figure>
          <blockquote>
            Hey there! Due to Heroku's policy changes regarding free
            non-commercial hosting, my portfolio site, along with some of my
            portfolio showcase projects are down and need to be redeployed. I'm
            taking this opportunity to redesign my Portfolio site and reconsider
            my current projects. I'm excited for what is to come! in the meantime
            feel free to browse my Github.
          </blockquote>
          <figcaption>Luis Pepen</figcaption>
        </figure>
      </div>
      <div>
        <a href="https://github.com/azatecas" target="_blank">
          <img
            src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png"
            className="logo"
            alt="Github logo"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
