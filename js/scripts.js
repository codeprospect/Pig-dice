$(document).ready(function() {
  $("#onedii").click(function() {
    $(".onedice").show();
    $("#rules").hide();
  });

var score = 0;
var playerones = [];
var playerones2 = [];
var res1 = [];
var res2 = [];
var total1 = 0;
var total2 = 0;

//this is the one pig section
    $("#roll1").click(function playOne () {
      var result = Math.floor(Math.random() * 6 + 1);
      document.getElementById('dice1').innerHTML =  result;

      if (result == 1) {
        score = 0;
        playerones = [];
        total1 += result;
        document.getElementById('score1').innerHTML = score;
        $("#buttons").hide();
        $("#button").show();

      } else {
        playerones.push(result);
      }
  });


        $('#hold1').click(function() {
          playerones.forEach(function(playerone) {
             score += playerone;
          });
          document.getElementById('score1').innerHTML = score;

          total1 += score;
          score = 0;
          playerones = [];
          $("#buttons").hide();
          $("#button").show();
          total1 += score;


          document.getElementById('scorer1').innerHTML = total1;
        });

        $("#roll2").click(function() {
          var result2 = Math.floor(Math.random() * 6 + 1);
          document.getElementById('dice2').innerHTML = result2;

          if (result2 == 1) {
            score = 0;
            playerones2 = [];
            total2 + score;
            $("#buttons").show();
            $("#button").hide();
            document.getElementById('score2').innerHTML = score;
          } else {
            playerones2.push(result2);
            res2.push(result2);
          }
        });

        $('#hold2').click(function() {
          playerones2.forEach(function(playerone) {
             score += playerone;
          });
          document.getElementById('score2').innerHTML = score;
          total2 += score;
          score = 0;
          playerones2 = [];
          $("#buttons").show();
          $("#button").hide();

          document.getElementById('scorer2').innerHTML = total2;
        });



});
