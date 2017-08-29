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

class NewsMain extends Component {
  render() {
    return (
      <div>
        <p>Just some fillers; lorem ipsum</p>
        <p>Just some fillers; lorem ipsum</p>
        <p>Just some fillers; lorem ipsum</p>
      </div>
    );
  }
}
class ContactMain extends Component {
  render() {
    return (
      <div>
        <p>ContactMain</p>
        <p>Just some fillers; lorem ipsum</p>
      </div>
    );
  }
}
class PromoMain extends Component {
  render() {
    return (
      <div>
        PromoMainPromoMainPromoMainPromoMain
        <p>Just some fillers; lorem ipsum</p>
        <p>Just some fillers; lorem ipsum</p>
      </div>
    );
  }
}
class CalendarMain extends Component {
  render() {
    return (
      <div>
        <p>CalendarMain</p>
      </div>
    );
  }
}
class GalleryMain extends Component {
  render() {
    return (
      <div>
        <p>GalleryMain</p>
      </div>
    );
  }
}
class MusicMain extends Component {
  render() {
    return (
      <div>
        <p>MusicMain</p>
      </div>
    );
  }
}
class SongbookMain extends Component {
  render() {
    return <div> SongbookMain </div>;
  }
}

class Footer extends Component {
  render() {
    const year = new Date();
    return (
      <div className="footer">
        <div>Some sort of thing here</div>
        <div className="year">
          <h3>©{year.getFullYear()}</h3>
        </div>
        <div>
          <a href="mailto: kingbaron@gmail.com" className="email">
            kingbaron@gmail.com
          </a>
        </div>
      </div>
    );
  }
}

class Button extends Component {
  render() {
    return (
      <div className="navButton" onClick={this.props.onClick}>
        {" "}
        {this.props.name}{" "}
      </div>
    );
  }
}

class Viewer extends Component {
  render() {
    return <div className="viewer">{this.props.view}</div>;
  }
}
const componentArray = [
  { name: "news", content: <NewsMain /> },
  { name: "contact", content: <ContactMain /> },
  { name: "promo", content: <PromoMain /> },
  { name: "calendar", content: <CalendarMain /> },
  { name: "gallery", content: <GalleryMain /> },
  { name: "music", content: <MusicMain /> },
  { name: "songbook", content: <SongbookMain /> }
];
class NavBar extends Component {
  handleClick() {
    if (this.props.name === componentArray.name) {
      const filteredComponent = componentArray.filter(
        content => this.props.content
      );
      return this.setState({ filteredComponent });
    }
  }
  render() {
    return (
      <div className="navBar">
        <Button name="news" onClick={this.handleClick} />
        <Button name="contact" onClick={this.handleClick} />
        <Button name="promo" onClick={this.handleClick} />
        <Button name="calendar" onClick={this.handleClick} />
        <Button name="gallery" onClick={this.handleClick} />
        <Button name="music" onClick={this.handleClick} />
        <Button name="songbook" onClick={this.handleClick} />
      </div>
    );
  }
}
class MainWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = <NewsMain />;
  }

  render() {
    return (
      <div className="mainWrapper">
        <NavBar />
        <Viewer view={this.state} />
      </div>
    );
  }
}

/* TODO
  set state in MainWrapper; make function to handleClick
  set state in NavBar to keep current button state highlighted; style held down click to look different than button:hover
  Have component MainWrapper call all of it's children content
*/

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainWrapper />
        <Footer />
      </div>
    );
  }
}

export default App;
