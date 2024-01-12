$(document).ready(function () {
    let count = 1;
    console.log(count);

  $(".next").on("click", function () {
    let currentImg = $(".active");
    let nextImg = currentImg.next();
    let indicate1 = $('.indicator1')


    count = $(this).data("count") || 1;
    $(this).data("count", ++count);
    console.log(count);

    if (count === 4) {
      location.reload();
    }

    if (nextImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    }

    if (count === 1) {
      indicate1.css("opacity", 0);
      console.log("worked");
    }

    // if (count === 2) {
    //     console.log("well");
    // }

    // if (count === 3) {
    // }

    // if (count === 4) {
    // }
  });
});
