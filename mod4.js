(function (window) {

var names = ["Yaakov", "rohan", "Jenil", "Jay", "rao", "gullu", "srishti", "hari", "ram", "lakhan"];
for (var i in names) {
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();
  if (firstLetter == 'j') {
     window.byeDude.speak(names[i]);
  } else {
     window.helloDude.speak(names[i]);
  }
}
})(window);
