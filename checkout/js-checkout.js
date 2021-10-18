var dechra = {};

dechra.cartSteps = function () {

  console.log("aqui")
  $('.steps-cart').show();

  $(window).on('hashchange load', function () {
    var hash = window.location.hash;
    if (hash) {
      console.log("hash -> ", hash)
      document.querySelectorAll('.step-item').forEach(function (item) {
        item.classList.remove('active')
      });

      hash = hash.substr(2);
      $(`#${hash}`).addClass('active');
    }
  });

};

ibmec.init = function () {
  dechra.cartSteps();
};


$(window).load(function () {
    dechra.init();
    searchImages = setInterval(function() {
        console.log("searching")
        if (document.querySelectorAll(".product-image img")) {
            setTimeout(function() {
                console.log(document.querySelectorAll(".product-image img"))
                document.querySelectorAll(".product-image img").forEach(function(img) {
                    img.setAttribute("src", img.getAttribute("src").replace("-55-55", "-150-150"));
                });
                stopSearching();
            }, 1000);
        }
    }, 500);
});

function stopSearching() {
	console.log("stop")
	clearInterval(searchImages)
}