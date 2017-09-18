import React, { Component } from "react";

const songRepo = [
  {
    title: "The Silver Swan",
    songLength: "0:13",
    path: require("./songs/thesilverswan.mp3")
  },
  {
    title: "Miracle Cure",
    songLength: "0:12",
    path: require("./songs/miraclecure.mp3")
  },
  {
    title: "Itchy and Scratchy",
    songLength: "0:17",
    path: require("./songs/itchy.mp3")
  },
  {
    title: "Funk bass",
    songLength: "0:14",
    path: require("./songs/funkbass.mp3")
  }
];

/*TODO
  - ask Matt about spread operator in this function
  */

export default class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  songBuilder() {
    return songRepo.map((song, index) => (
      <li
        key={index + 1}
        className={index % 2 === 0 ? "even song_wrapper" : "odd song_wrapper"}
        onClick={this.selectSong.bind(this, index)}
      >
        <span className="song_number">{index + 1}</span>
        <span className="song_title">{song.title}</span>
        <span className="song_length">{song.songLength}</span>
      </li>
    ));
  }

  selectSong(key) {
    this.setState({ count: key });
  }

  playerClick(type) {
    if (type === "next_song" && this.state.count < songRepo.length - 1) {
      this.setState({ count: this.state.count + 1 });
    } else if (type === "prev_song" && this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  render() {
    return (
      <div className="player">
        <div className="player_title">
          <span className="song_number">{this.state.count + 1}</span>
          <span className="song_title">{songRepo[this.state.count].title}</span>
          <span className="song_length">
            {songRepo[this.state.count].songLength}
          </span>
        </div>
        <audio className="waveform" preload="auto" controls>
          <source src={songRepo[this.state.count].path} type="audio/mp3" />
        </audio>
        <div className="player_buttons">
          <span
            className="prev_song"
            onClick={this.playerClick.bind(this, "prev_song")}
          >
            &lsaquo;&lsaquo;
          </span>
          <span> </span>
          <span
            className="next_song"
            onClick={this.playerClick.bind(this, "next_song")}
          >
            &rsaquo;&rsaquo;
          </span>
        </div>
        <div>
          <ul className="song_list">{this.songBuilder()}</ul>
        </div>
      </div>
    );
  }
}
