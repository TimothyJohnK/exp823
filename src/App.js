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
      <div>
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
      <div>
        <p>ContactMain</p>
        <p>Just some fillers; lorem ipsum</p>
      </div>
    );
  }
}
class BioMain extends Component {
  render() {
    return (
      <div className="viewer_text">
        <p>
          The King Baron Hot Club has been making people feel good since the
          band's inception 4 years ago. They play a diverse catalog of songs
          from a wide variety of influences: gypsy jazz, New Orleans trad jazz,
          tunes from the Great American Songbook, klezmer, and original
          compositions. As a group they have performed throughout Minneapolis,
          St. Paul, and the surrounding areas sharing the stage with such
          notables as: Doc Severinsen. As individuals they have toured the world
          playing an even broader range of styles. King Baron Hot Club garners
          an enthusiastic response wherever they play.
        </p>
      </div>
    );
  }
}
class CalendarMain extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            Oct. 14th - 10am-Noon - Bloomington Farmer's Market with Evan Clark
            on tuba
          </li>
        </ul>
      </div>
    );
  }
}
class GalleryMain extends Component {
  render() {
    return (
      <div className="gallery_main">
        <div className="left">&lsaquo;&lsaquo;</div>
        <div>
          <img
            src={require("./images/cartmusic.jpg")}
            alt="Lowertown C/Art performance"
          />
        </div>
        <div className="right">&rsaquo;&rsaquo;</div>
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
class Pictures extends Component {
  render() {
    return (
      <div className="pictures">
        <div className="Tim all_pictures" />
        <div className="Paul all_pictures" />
        <div className="bass all_pictures" />
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

/* TODO
  set state in MainWrapper; make function to handleClick
  set state in NavBar to keep current button state highlighted; style held down click to look different than button:hover
*/

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

//  Manmoe examples/help

// render () {
// 	return (
// 		<div>
// 			<Foo />
// 			<Bar />
// 			{ this.renderBaz() }
// 		</div>
// 	)
// }

// // obvi this is another method on the component
// renderBaz () {
// 	const { pageName } = this.state

// 	if (pageName === 'asdf') {
// 		return <SomeComponent />
// 	} else if (pageName === 'fljkdflkj') {
// 		return <SomeOtherComponent />
// 	} else if (pageName === 'fdjkeeeeee') {
// 		return <YetAnotherComponent />
// 	}
// }
