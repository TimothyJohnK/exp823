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

class Button extends Component {
  render() {
    return <div className="navButton" onClick={this.props.onClick} />;
  }
}

const NavBar = ({ onClickNavButton }) => (
  <div className="navBar">
    <button name="news" onClick={() => onClickNavButton("news")}>
      {this.props.name}
    </button>
    <button name="contact" onClick={() => onClickNavButton("contact")}>
      {this.props.name}
    </button>
    <button name="bio" onClick={() => onClickNavButton("bio")}>
      {this.props.name}
    </button>
    <button name="gallery" onClick={() => onClickNavButton("gallery")}>
      {this.props.name}
    </button>
    <button name="calendar" onClick={() => onClickNavButton("calendar")}>
      {this.props.name}
    </button>
    <button name="music" onClick={() => onClickNavButton("music")}>
      {this.props.name}
    </button>
    <button name="songbook" onClick={() => onClickNavButton("songbook")}>
      {this.props.name}
    </button>
  </div>
);

const Viewer = ({ pageName }) => {
  const renderPage = () => {
    if (name === "news") {
      return <NewsMain />;
    } else if (name === "contact") {
      return <ContactMain />;
    } else if (name === "bio") {
      return <BioMain />;
    } else if (name === "gallery") {
      return <GalleryMain />;
    } else if (name === "calendar") {
      return <CalendarMain />;
    } else if (name === "music") {
      return <MusicMain />;
    } else if (name === "songbook") {
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
        <Navbar onClickNavButton={this.onClickNavButton.bind(this)} />
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
