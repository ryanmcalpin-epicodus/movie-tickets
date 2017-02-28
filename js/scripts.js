function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.calculatePrice = function() {
  return basePrice + this.time + this.age;
}

var basePrice = 10;

$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();

    var movieInput = $("select#movie").val();
    var timeInput = parseInt($("select#time").val());
    var ageInput = parseInt($("select#age").val());

    var newTicket = new Ticket(movieInput, timeInput, ageInput);
    var finalPrice = newTicket.calculatePrice();
    console.log(finalPrice);
  });
});
