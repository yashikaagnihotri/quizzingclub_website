import React from "react";

function Header() {
    return <div className="navbr navbar-dark bg-dark"><nav class="navbar navbar-expand-lg">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <img className="logo-img" src="data:image/png;base64,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" alt="logo"></img>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-comp" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-comp" href="/">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-comp" href="/">Legacy</a>
        </li>
        <li class="nav-item">
          <a class="nav-comp" href="/">Achievements</a>
        </li>
        <li class="nav-item">
          <a class="nav-comp" href="/">Contact Us</a>
        </li>
      </ul>
    </div>
  </nav>
  </div>
}

export default Header;