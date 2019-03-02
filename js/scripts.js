$(document).ready(function() {

function team(players, results, total) {
  this.players = players;
  this.results = results;
  this.total = total;
}

var score = 0;

var playerOnes = [];
var totalOne = 0;
var playerTwos = [];
var totalTwo = 0;

//this is the one pig section
    $("#roll1").click(function playOne () {
      var result = Math.floor(Math.random() * 6 + 1);
      document.getElementById('dice1').innerHTML =  result;

      if (result == 1) {
        score = 0;
        playerOnes = [];
        totalOne += result;
        document.getElementById('score1').innerHTML = score;
        $("#buttons").hide();
        $("#button").show();

      } else {
        playerOnes.push(result);
      }
  });


        $('#hold1').click(function() {
          playerOnes.forEach(function(playerone) {
             score += playerone;
          });
          document.getElementById('score1').innerHTML = score;

          totalOne += score;
          score = 0;
          playerOnes = [];
          $("#buttons").hide();
          $("#button").show();
          totalOne += score;


          document.getElementById('scorer1').innerHTML = totalOne;
        });

        $("#roll2").click(function() {
          var result2 = Math.floor(Math.random() * 6 + 1);
          document.getElementById('dice2').innerHTML = result2;

          if (result2 == 1) {
            score = 0;
            playerTwos = [];
            totalTwo + score;
            $("#buttons").show();
            $("#button").hide();
            document.getElementById('score2').innerHTML = score;
          } else {
            playerTwos.push(result2);
            res2.push(result2);
          }
        });

        $('#hold2').click(function() {
          playerTwos.forEach(function(playerone) {
             score += playerone;
          });
          document.getElementById('score2').innerHTML = score;
          totalTwo += score;
          score = 0;
          playerTwos = [];
          $("#buttons").show();
          $("#button").hide();

          document.getElementById('scorer2').innerHTML = totalTwo;
        });



});
