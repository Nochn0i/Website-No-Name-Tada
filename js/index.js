import { LNkey, LPcs } from "./load.module.js";

const pictures = {
  // home page
  "36a7fdd86760d448d12f": "./image/picture_7.jpg",
  d67006ee23a378c5067e: "./image/picture_11.jpg",
  e922bd65d725e4e6b911: "./image/picture_9.jpg",
  "7cdd58b031df4005033d": "./image/picture_10.jpg",

  // home page 3
  "3f3140fa6a027d09b669": "./image/picture_7.jpg",
  e120f7c581fe6479d5c4: "./image/picture_27.jpg",
  "7226e817d2de55410143": "./image/picture_6.jpg",
  d6de385bf194a2579018: "./image/picture_15.jpg",
  e8597d57b7492b0d1dad: "./image/picture_13.jpg",

  // about page
  f193e2700edf891e9986: "./image/picture_22.jpg",
  "79c153ddcac9c78d8c78": "./image/picture_32.jpg",
  "716623cdc84018d4babe": "./image/picture_20.jpg",

  // service page
  e4008dd5f13ddd1f888c: "./image/picture_23.jpg",
  af1e004b38ba400b5e03: "./image/picture_25.jpg",
  "0ec6166587e07883e3b7": "./image/picture_30.jpg",
  "1caa5fecd9d3ffc36408": "./image/picture_37.jpg",
};

window.onload = () => {
  LNkey()
    .then(() => console.log("Nav key loaded"))
    .catch((e) => console.log("Error Occured"));
  LPcs(pictures, Object.keys(pictures))
    .then(() => console.log("Pictures were loaded"))
    .catch((e) => console.log("Error Occured, ERR:", e));
};

let current_time_of_music_play_back =
  localStorage.getItem("play_back_time") || 0;

console.log(current_time_of_music_play_back);
let audio_track_element = document.getElementById("audio_track");

audio_track_element.currentTime = current_time_of_music_play_back;

setInterval(
  () => localStorage.setItem("play_back_time", audio_track_element.currentTime),
  1,
);
