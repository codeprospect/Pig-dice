$(document).ready(function() {
  $("#onedii").click(function() {
    $(".onedice").show();
    $("#rules").hide();
  });

var score = 0;
//this is the one pig section
    $("#roll1").click(function() {
      var result = Math.floor(Math.random() * 6 + 1);
      document.getElementById('dice1').innerHTML =  result;
      var playerones = [];

      if (result == 1) {
        score = 0;
      } else {
        playerones.push(result);
      }
        $('#hold').click(function() {
          playerones.forEach(function(playerone) {
             score += playerone;
          });
        });
    });
    $("#roll2").click(function() {
      var result2 = Math.floor(Math.random() * 6 + 1);
      document.getElementById('dice2').innerHTML = result2;
    });

//this is thr two dice pig section
    // $("#rolla1").click(function() {
    //   var dicea1 = Math.floor(Math.random() * 6 + 1);
    //   var dicea2 = Math.floor(Math.random() * 6 + 1);
    //   document.getElementById('dicea1').innerHTML = dicea1;
    //   document.getElementById('dicea2').innerHTML = dicea2;
    //   $("#score").append(dicea1 + dicea2);
    // });
    // $("#rolla2").click(function() {
    //   var diceb1 = Math.floor(Math.random() * 6 + 1);
    //   var diceb2 = Math.floor(Math.random() * 6 + 1);
    //   document.getElementById('diceb1').innerHTML = diceb1;
    //   document.getElementById('diceb2').innerHTML = diceb2;
    //   $("#score2").append(diceb1 + diceb2);
    // });

//this is the big pig section
    // $("#rollx1").click(function() {
    //   var diceo1 = Math.floor(Math.random() * 6 + 1);
    //   var diceo2 = Math.floor(Math.random() * 6 + 1);
    //   document.getElementById('diceo1').innerHTML = diceo1;
    //   document.getElementById('diceo2').innerHTML = diceo2;
    // });
    // $("#rollx2").click(function() {
    //   var dicep1 = Math.floor(Math.random() * 6 + 1);
    //   var dicep2 =  Math.floor(Math.random() * 6 + 1);
    //   document.getElementById('dicep1').innerHTML = dicep1;
    //   document.getElementById('dicep2').innerHTML = dicep2;
    // });

});
