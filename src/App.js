import React, { Component } from "react";
import "./App.css";

const NewsMain;
const ContactMain;
const
const
const
const
const

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="clarinet" />
        <h1>King Baron Hot Club</h1>
        <div className="guitar" />
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

/* TODO
  set state in MainContent; make function to handleClick
  set state in NavBar to keep current button state highlighted; style held down click to look different than button:hover
*/


class MainContent extends Component {

  render() {
    return (
      <div className="mainContent">A bunch of hardcoded bio text and shizz</div>
    );
  }
}

class Space extends Component {
  render() {
    return <div className="space" />;
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
        </div>
      </div>
    );
  }
}

export default App;
