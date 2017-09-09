import React, { Component } from "react";
import "./App.css";
import Songs from "./songbook";

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
      <div className="viewer_center">
        <p>NewsMain NewsMain NewsMain</p>
        <p>Just some fillers; lorem ipsum</p>
        <p>Just some fillers; lorem ipsum</p>
      </div>
    );
  }
}
class ContactMain extends Component {
  render() {
    return (
      <div className="viewer_center">
        <p>For booking and questions please write us at:</p>
        <div>
          <a href="mailto: kingbaron@gmail.com" className="email">
            KingBaron@gmail.com
          </a>
        </div>
      </div>
    );
  }
}
class BioMain extends Component {
  render() {
    return (
      <div className="viewer_center">
        <p>
          King Baron Hot Club has been making people feel good since the band's
          inception 4 years ago. They play a diverse catalog of songs from a
          wide variety of influences: gypsy jazz, New Orleans trad jazz,
          classics from the Great American Songbook, klezmer, and original
          compositions. As a group they have performed throughout Minneapolis,
          St. Paul, and the surrounding areas sharing the stage with such
          notables as: Doc Severinsen. As individuals they have toured the world
          playing an even broader range of styles. King Baron Hot Club garners
          an enthusiastic response wherever they play.
        </p>
        <br />
        <p>Michael Carvale - bass</p>
        <p>Paul Fonfara - clarinet</p>
        <p>Tim Kirchhof - guitar</p>
      </div>
    );
  }
}
class CalendarMain extends Component {
  render() {
    return (
      <div className="viewer_center">
        <ul className="cal_list">
          <li>
            Oct. 14th &nbsp; &nbsp; 10am-Noon - Bloomington Farmer's Market with
            Evan Clark on tuba
          </li>
        </ul>
      </div>
    );
  }
}
class MusicMain extends Component {
  render() {
    return (
      <div>
        <p>Coming soon</p>
      </div>
    );
  }
}
class SongbookMain extends Component {
  render() {
    return <Songs />;
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
const Pictures = () => (
  <div className="pictures">
    <div className="Tim all_pictures" />
    <div className="Paul all_pictures" />
    <div className="bass all_pictures" />
  </div>
);

const picturesArray = [
  {
    name: require("./images/cartmusic.jpg"),
    description: "Lowertown St. Paul C/Art Performance"
  },
  {
    name: require("./images/clarguitar.jpg"),
    description: "Artful clarinet-guitar"
  },
  { name: require("./images/300.png"), description: "placeholder 3" },
  { name: require("./images/placeholder.jpg"), description: "Placeholder 4" }
];

class GalleryMain extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  galleryClick(type) {
    if (type === "right" && this.state.count < picturesArray.length - 1) {
      return this.setState({ count: this.state.count + 1 });
    } else if (type === "left" && this.state.count > 0) {
      return this.setState({ count: this.state.count - 1 });
    }
  }
  render() {
    return (
      <div className="gallery_main">
        <div className="left" onClick={this.galleryClick.bind(this, "left")}>
          &lsaquo;&lsaquo;&nbsp;
        </div>
        <div className="pic_display">
          <img
            src={picturesArray[this.state.count].name}
            alt={picturesArray[this.state.count].description}
          />
        </div>
        <div className="right" onClick={this.galleryClick.bind(this, "right")}>
          &nbsp;&rsaquo;&rsaquo;
        </div>
      </div>
    );
  }
}
const NavBar = ({ onClickNavButton }) => (
  <div className="navBar">
    <div className="navButton" onClick={() => onClickNavButton("news")}>
      news
    </div>
    <div className="navButton" onClick={() => onClickNavButton("contact")}>
      contact
    </div>
    <div className="navButton" onClick={() => onClickNavButton("bio")}>
      bio
    </div>
    <div className="navButton" onClick={() => onClickNavButton("gallery")}>
      gallery
    </div>
    <div className="navButton" onClick={() => onClickNavButton("calendar")}>
      calendar
    </div>
    <div className="navButton" onClick={() => onClickNavButton("music")}>
      music
    </div>
    <div className="navButton" onClick={() => onClickNavButton("songbook")}>
      songbook
    </div>
  </div>
);

const Viewer = ({ pageName }) => {
  const renderPage = () => {
    if (pageName === "news") {
      return <NewsMain />;
    } else if (pageName === "contact") {
      return <ContactMain />;
    } else if (pageName === "bio") {
      return <BioMain />;
    } else if (pageName === "gallery") {
      return <GalleryMain />;
    } else if (pageName === "calendar") {
      return <CalendarMain />;
    } else if (pageName === "music") {
      return <MusicMain />;
    } else if (pageName === "songbook") {
      return <SongbookMain />;
    } else {
      return <NewsMain />;
    }
  };
  return <div className="viewer">{renderPage()}</div>;
};

class MainWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { pageName: "news" };
  }

  onClickNavButton(pageName) {
    this.setState({ pageName });
  }

  render() {
    return (
      <div className="mainWrapper">
        <NavBar onClickNavButton={this.onClickNavButton.bind(this)} />
        <Viewer pageName={this.state.pageName} />
        <Pictures />
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainWrapper />
        <div className="spacer" />
        <Footer />
      </div>
    );
  }
}
