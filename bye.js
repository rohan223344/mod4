(function (window) {
var byeDude = {};
var speakName = "Good Bye";
byeDude.speak = function (name) {
  console.log(speakName + " " + name);
}

window.byeDude = byeDude;

})(window);
