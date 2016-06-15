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
    $('.item a').on('click', function(e) {
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
    return $('.reference-img').on('click', function(e) {
      var gallery, img, items, n, num, options, pswpElement, slug;
      pswpElement = document.querySelectorAll('.pswp')[0];
      img = $(e.target);
      n = img.data('n');
      slug = img.data('slug');
      items = (function() {
        var i, ref, results;
        results = [];
        for (num = i = 1, ref = n - 1; 1 <= ref ? i <= ref : i >= ref; num = 1 <= ref ? ++i : --i) {
          results.push({
            src: "/images/" + slug + "/Foto " + num + ".png",
            w: 472,
            h: 315
          });
        }
        return results;
      })();
      options = {
        index: 0
      };
      gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      return gallery.init();
    });
  });

}).call(this);
