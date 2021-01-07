import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideo from './RecommendedVideo'
import "../src/styles/App.css";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_page">
        <Sidebar />
        <RecommendedVideo />
      </div>
    </div>
  );
}

export default App;
