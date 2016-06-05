---
---

jQuery ->
  showModal = (title, title2, desc, att1, att2, att3, price) ->
    vex.dialog.open
      message: """
        <h3>#{title} / #{title2}</h3>
        <img class='pure-img' src="/images/#{title}.png" />
        <h4>Použití</h4>
        <p>#{att1}</p>
        <h4>Náročnost</h4>
        <p>#{att2}</p>
        <h4>Výška</h4>
        <p>#{att3}</p>
        <h4>Popis</h4>
        <p>#{desc}<p>
        <p><strong>#{price} Kč</strong></p>
      """
      buttons: [
        $.extend({}, vex.dialog.buttons.NO, text: 'Zavřít')
      ]

  $('.item a').on 'click', (e) ->
    e.preventDefault()
    item = $(this).parents('.item')
    args = ['title', 'title2', 'desc', 'att1', 'att2', 'att3', 'price'].map((d) => item.data(d))
    showModal(args...)
