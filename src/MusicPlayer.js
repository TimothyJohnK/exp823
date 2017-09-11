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
    title: "Miracle Cure",
    songLength: "0:12",
    path: require("./songs/miraclecure.mp3")
  },
  {
    title: "Miracle Cure",
    songLength: "0:12",
    path: require("./songs/miraclecure.mp3")
  }
];

class Song extends Component {
  render() {
    return (
      <div
        className={
          this.props.track % 2 === 0 ? "even song_wrapper" : "odd song_wrapper"
        }
      >
        <span className="song_number">{this.props.track}.</span>
        <span className="song_title">
          {songRepo[this.props.track - 1].title}
        </span>
        <span className="song_length">
          {songRepo[this.props.track - 1].songLength}
        </span>
      </div>
    );
  }
}
export default class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, currentSong: 0 };
  }
  buildList() {}
  playerClick(type) {
    if (type === "next_song" && this.state.count < songRepo.length - 1) {
      return this.setState({ count: this.state.count + 1 });
    } else if (type === "prev_song" && this.state.count > 0) {
      return this.setState({ count: this.state.count - 1 });
    }
  }

  render() {
    return (
      <div className="player">
        <div className="player_nav">
          <div className="player_title">
            <span className="song_number">{this.state.count + 1}</span>
            <span className="song_title">
              {songRepo[this.state.count].title}
            </span>
            <span className="song_length">
              {songRepo[this.state.count].songLength}
            </span>
          </div>
          <audio className="waveform" controls="controls">
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
          <div className="song_list">
            <Song track={1} />
            <Song track={2} />
          </div>
        </div>
      </div>
    );
  }
}
