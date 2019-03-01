$(document).ready(function() {
  $("#onedii").click(function() {
    $(".onedice").show();
    $("#rules").hide();
  });

  $("#twodii").click(function() {
    $(".twodice").show();
    $("#rules").hide();
  });

  $("#bigpig").click(function() {
    $(".pibig").show();
    $("#rules").hide();
  });

    $("#roll1").click(function() {
      document.getElementById('dice1').innerHTML = Math.floor(Math.random() * 6 + 1);
    });
    $("#roll2").click(function() {
      document.getElementById('dice2').innerHTML = Math.floor(Math.random() * 6 + 1);
    });

    $("#rolla1").click(function() {
      document.getElementById('dicea1').innerHTML = Math.floor(Math.random() * 6 + 1);
      document.getElementById('dicea2').innerHTML = Math.floor(Math.random() * 6 + 1);
    });
    $("#rolla2").click(function() {
      document.getElementById('diceb1').innerHTML = Math.floor(Math.random() * 6 + 1);
      document.getElementById('diceb2').innerHTML = Math.floor(Math.random() * 6 + 1);
    });

    $("#rollx1").click(function() {
      document.getElementById('diceo1').innerHTML = Math.floor(Math.random() * 6 + 1);
      document.getElementById('diceo2').innerHTML = Math.floor(Math.random() * 6 + 1);
    });
    $("#rollx2").click(function() {
      document.getElementById('dicep1').innerHTML = Math.floor(Math.random() * 6 + 1);
      document.getElementById('dicep2').innerHTML = Math.floor(Math.random() * 6 + 1);
    });

});
