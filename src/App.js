import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideo from "./RecommendedVideo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.css";
import SearchPage from "./SearchPage";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
          <div className="app_page">
            <Sidebar />
            <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideo />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
