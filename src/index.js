import "./styles.css";
//Get Elements
const player = document.querySelector(".player");
const video = player.querySelector(".viever");

const progress = player.querySelector(".progress");
const progressbar = player.querySelector(".progress__filled");

const toggle = player.querySelector(".toggle");

const skipButtons = player.querySelector("[data-skip]");
const range = player.querySelector(".player__slider");

//Build out functions
//Add the event listeners
