(function() {
  jQuery(function() {
    var showModal;
    showModal = function(title, title2, desc, att1, att2, att3, price) {
      return vex.dialog.open({
        message: "<h3>" + title + " / " + title2 + "</h3>\n<img class='pure-img' src=\"/images/" + title + ".png\" />\n<h4>Použití</h4>\n<p>" + att1 + "</p>\n<h4>Náročnost</h4>\n<p>" + att2 + "</p>\n<h4>Výška</h4>\n<p>" + att3 + "</p>\n<h4>Popis</h4>\n<p>" + desc + "<p>\n<p><strong>" + price + " Kč</strong></p>",
        buttons: [
          $.extend({}, vex.dialog.buttons.NO, {
            text: 'Zavřít'
          })
        ]
      });
    };
    return $('.item a').on('click', function(e) {
      var args, item;
      e.preventDefault();
      item = $(this).parents('.item');
      args = ['title', 'title2', 'desc', 'att1', 'att2', 'att3', 'price'].map((function(_this) {
        return function(d) {
          return item.data(d);
        };
      })(this));
      return showModal.apply(null, args);
    });
  });

}).call(this);
