import React from "react";
import HighlightIcon from '@material-ui/icons/Highlight';

function Header() {
  return (
    <header>
      <nav class="navbar">
       <div class="container-fluid">
        <span><h1><HighlightIcon /> Daily Task Manager</h1></span>
       </div>
      </nav>
    </header>
  );
}


export default Header;
