import "./styles.css";
//Get Elements
const player = document.querySelector(".player");

const video = player.querySelector(".viewer");

const progress = player.querySelector(".progress");
const progressbar = player.querySelector(".progress__filled");

const toggle = player.querySelector(".toggle");

const skipButtons = player.querySelectorAll("[data-skip]");

const range = player.querySelectorAll(".player__slider");

/** Build out functions*/
//play video
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}
//update toggle button text
function updateButton() {
  const toggleIcon = this.paused ? "►" : "❚❚";
  toggle.textContent = toggleIcon;
}
//skip video
function skip() {
  video.currentTime += parseInt(this.dataset.skip, 10);
}
//adjust volume and play back speed
function handleRangeUpdate() {
  //volume and playbackRate are properties of video
  //name and value will give the actual prop name & value of the slider
  video[this.name] = this.value;
}

//handle video's progress bar
function handleProgressBar() {
  //calculate the % with video's currenttime and duration
  const progress_percentage = (video.currentTime / video.duration) * 100;
  //update the flex-basis option
  progressbar.style.flexBasis = `${progress_percentage}%`;
}

//handle progress bar click

function progressScrub(e) {
  //event gives the offset values of the click on the bar
  //offsetwidth gives the complete value of the bar
  //and the whole ops gives the % duration of video
  const annonymousTime = (e.offsetX / progress.offsetWidth) * video.duration;

  //update the video time
  video.currentTime = annonymousTime;
}

/**Add the event listeners */
//play/pause video
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);

//update button upon play/pause
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

//listen for skip buttons
skipButtons.forEach(btn => btn.addEventListener("click", skip));

//listen to slider i.e. volume and playBackSpeed
range.forEach(range => range.addEventListener("change", handleRangeUpdate));

//listen to the timechange event of video and update the progressBar
video.addEventListener("timeupdate", handleProgressBar);

//listem to click on progree bar and update time
progress.addEventListener("click", progressScrub);
