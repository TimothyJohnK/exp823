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
      <div>
        <p>BioMainBioMainBioMainBioMain</p>
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
class Pictures extends Component {
  render() {
    return (
      <div className="pictures">
        <div className="Tim" />
        <div className="picture_spacer" />
        <div className="Paul" />
        <div className="picture_spacer" />
        <div className="bass" />
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
