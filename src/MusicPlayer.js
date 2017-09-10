import React, { Component } from "react";

const songRepo = [
  {
    title: "The Silver Swan",
    songLength: "0:15",
    path: "./songs/thesilverswan.mp3"
  },
  {
    title: "The Silver Swan2",
    songLength: "0:15",
    path: "./songs/thesilverswan.mp3"
  },
  {
    title: "The Silver Swan3",
    songLength: "0:15",
    path: "./songs/thesilverswan.mp3"
  },
  {
    title: "The Silver Swan4",
    songLength: "0:15",
    path: "./songs/thesilverswan.mp3"
  },
  {
    title: "The Silver Swan5",
    songLength: "0:15",
    path: ""
  }
];

export default class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  // handleClick(passInTitleofClickedElement) {}

  playerClick(type) {
    if (type === "next_song" && this.state.count < songRepo.length - 1) {
      return this.setState({ count: this.state.count + 1 });
    } else if (type === "prev_song" && this.state.count > 0) {
      return this.setState({ count: this.state.count - 1 });
    }
  }
  render() {
    return (
      <div className="player viewer_center">
        <div className="player_nav">
          <div className="player_title">
            {songRepo[this.state.count].title}
            {songRepo[this.state.count].songLength}
          </div>
          <audio className="waveform" controls="controls">
            <source src={songRepo[this.state.count].path} type="audio/mp3" />
          </audio>
          <div className="player_buttons">
            <div
              className="prev_song"
              onClick={this.playerClick.bind(this, "prev_song")}
            >
              &lsaquo;&lsaquo;&nbsp;
            </div>
            <div
              className="next_song"
              onClick={this.playerClick.bind(this, "next_song")}
            >
              &nbsp;&rsaquo;&rsaquo;
            </div>
          </div>
        </div>
      </div>
    );
  }
}
