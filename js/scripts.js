$(document).ready(function() {
    $("#roll1").click(function() {
      document.getElementById('dice1').innerHTML = Math.floor(Math.random() * 6 + 1);
    });
    $("#roll2").click(function() {
      document.getElementById('dice2').innerHTML = Math.floor(Math.random() * 6 + 1);
    });
});
