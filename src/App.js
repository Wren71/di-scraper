import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <nav
          class="navbar navbar-expand-lg  fixed-top navbar-light"
          id="mainNav"
          style={{ backgroundColor: "#8A31FF" }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <img style={{ maxWidth: "100px", maxHeight: "100px" }} alt="" />
            </div>

            <div
              class="collapse navbar-collapse"
              id="navbarResponsive"
              style={{ width: "100%", "flex-grow": "0" }}
            >
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="/Settings/2"
                    title="Settings/2"
                    style={{
                      color: "white",
                      fontWeight: 700,
                    }}
                  >
                    SEARCH
                  </a>
                </li>

                <li style={{ cursor: "pointer" }} class="nav-item">
                  <a
                    style={{
                      cursor: "pointer",
                      color: "white",
                      fontWeight: 700,
                    }}
                    class="nav-link"
                  >
                    PINNED
                  </a>
                </li>
              </ul>
            </div>
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default App;
