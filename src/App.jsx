import React from "react";
import './App.css';
import StickyNote from "./components/StickyNote";
import Nav from "./components/Nav";

function App() {
  return (
    <div >
      <Nav />
      <div className="sticky-notes-main">
        <StickyNote />
      </div>
    </div>
  );
}

export default App;
