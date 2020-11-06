// Business Logic
function MovieTicket(orderName) {
  this.orderName = name;
  this.movie = 0;
  this.time = 0;
  this.age = 0; //or does these equal 0?
  this.totalPrice = 0;
}

MovieTicket.prototype.movieType = function (movie) {
  this.movie += movie;
};
MovieTicket.prototype.movieTime = function (time) {
  this.time += time;
};
MovieTicket.prototype.userAge = function (age) {
  this.age += age;
};
MovieTicket.prototype.movieTotal = function () {
  return (this.totalPrice += this.movie + this.time + this.age);
};
// MovieTicket.prototype.showReceipt = function () {
//   return (
//     "Your total is: " +
//     this.totalPrice +
//     "." +
//     "Enjoy " +
//     this.movie +
//     "at " +
//     this.time
//   );
// }; not working because values = numbers

$(document).ready(function () {
  $("form#buy-movie").submit(function (event) {
    event.preventDefault();
    let inputMovieType = parseInt(
      $("input:radio[name=movietype]:checked").val()
    );
    let inputMovieTime = parseInt(
      $("input:radio[name=movietime]:checked").val()
    );
    let inputAge = parseInt($("input:radio[name=age]:checked").val());
    let myMoopie = new MovieTicket(inputMovieType, inputMovieTime, inputAge);
    myMoopie.movieType(inputMovieType);
    myMoopie.movieTime(inputMovieTime);
    myMoopie.userAge(inputAge);

    // let receipt = myMoopie.movieTotal();
    $(".movie-order").text("$" + myMoopie.movieTotal());
    // $(".receipt").text(myMoopie.showReceipt());

    //console.log(receipt);
    console.log(myMoopie);
  });
});
