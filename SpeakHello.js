// My solutions
// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// IIFE function
(function (window) {
  var speakWord = "Hello";

  // STEP 3: Create object helloSpeaker
  var helloSpeaker = {};

  // STEP 4: Attach the 'speak' function to the helloSpeaker object
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose the helloSpeaker object to the global scope
  window.helloSpeaker = helloSpeaker;

})(window);
