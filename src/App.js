import React, { Component } from "react";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>King Baron Hot Club</h1>
      </div>
    );
  }
}
class Button extends Component {
  render() {
    return (
      <div className="navButton">
        {" "}{this.props.name}{" "}
      </div>
    );
  }
}

class MainContent extends Component {
  render() {
    return <div className="mainContent"> </div>;
  }
}

class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <Button name="News" />
        <Button name="Contact" />
        <Button name="Promo/Bio" />
        <Button name="Calendar" />
        <Button name="Gallery" />
        <Button name="Music" />
        <Button name="Songbook" />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="mainWrapper">
          <NavBar />
          <MainContent />
          <div className="picture" />
        </div>
      </div>
    );
  }
}

export default App;
