import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HymnSearch from "./views/hymnSearch";

function App() {
  const [hymn, setHymn] = useState({
    book: "",
    chapter: "",
  });
  return (
    <div className="App">
      <Routes>
        <Route
          element={<HymnSearch hymn={hymn} setHymn={setHymn} />}
          path="/"
        />
      </Routes>
    </div>
  );
}

export default App;
