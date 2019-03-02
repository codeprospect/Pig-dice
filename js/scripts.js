$(document).ready(function() {
  $("#onedii").click(function() {
    $(".onedice").show();
    $("#rules").hide();
  });

var score = 0;
var playerones = [];
var playerones2 = [];

//this is the one pig section
    $("#roll1").click(function playOne () {
      var result = Math.floor(Math.random() * 6 + 1);
      document.getElementById('dice1').innerHTML =  result;

      if (result == 1) {
        score = 0;
        playerones = [];
        document.getElementById('score1').innerHTML = score;
      } else {
        playerones.push(result);
      }
  });


        $('#hold').click(function() {
          playerones.forEach(function(playerone) {
             score += playerone;
          });
          document.getElementById('score1').innerHTML = score;
          score = 0;
          playerones = [];
        });
});
