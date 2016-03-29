(function() {
  jQuery(function() {
    var showModal;
    showModal = function(image, title, desc, att1, att2, price) {
      return vex.dialog.open({
        message: "<h3>" + title + "</h3>\n<img class='pure-img' src=\"" + image + "\" />\n<h4>Použití</h4>\n<p>" + att1 + "</p>\n<h4>Náročnost</h4>\n<p>" + att2 + "</p>\n<h4>Popis</h4>\n<p>" + desc + "<p>\n<p><strong>" + price + "</strong></p>",
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
      args = ['image', 'title', 'desc', 'att1', 'att2', 'price'].map((function(_this) {
        return function(d) {
          return item.data(d);
        };
      })(this));
      return showModal.apply(null, args);
    });
  });

}).call(this);
