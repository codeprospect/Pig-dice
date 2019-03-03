$(document).ready(function() {

function team(players, results, total) {
  this.players = players;
}

var score = 0;

var playerOnes = [];
var totalOne = 0;
var playerTwos = [];
var totalTwo = 0;

//this is the one pig section

    $("#onedii").click(function() {
      $("#form").fadeIn();
    });

    $("#play").click(function(event) {
      event.preventDefault();
      var firstPlayer = new team($("input#firstPlayerName").val());
      var secondPlayer = new team($("input#secondPlayerName").val());
      var first = firstPlayer.players.toUpperCase();
      var second = secondPlayer.players.toUpperCase();
      $("#kichwa").append(first);
      $("#kichwa2").append(second);
      $(".choices").hide();
      $(".onedice").fadeIn();
      $("#form").hide();
    });


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
        $("#messageA").show();
        $("#message").hide();
        $("#message2").hide();
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
          $("#messageB").show();
          $("#message").hide();
          $("#message2").hide();
          totalOne += score;


          document.getElementById('scorer1').innerHTML = totalOne;

          if (totalOne >= 100) {
            $(".onedice").hide();
            document.getElementById('ouput').innerHTML = first + "HAS WON THE GAME" ;
            $(".result").show();
          }

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
            $("#message").show();
            $("#messageA").hide();
            $("#messageB").hide();
            document.getElementById('score2').innerHTML = score;
          } else {
            playerTwos.push(result2);
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
          $("#message2").show();
          $("#messageA").hide();
          $("#messageB").hide();

          document.getElementById('scorer2').innerHTML = totalTwo;

          if (totalTwo >= 100) {
            $(".onedice").hide();
            document.getElementById('ouput').innerHTML = second + "HAS WON THE GAME" ;
            $(".result").show();
          }
        });



});
