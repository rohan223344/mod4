(function (window) {
var helloDude = {};
var speakName = "Hello";
helloDude.speak = function (name) {
  console.log(speakName + " " + name);
}

window.helloDude = helloDude;

})(window);
