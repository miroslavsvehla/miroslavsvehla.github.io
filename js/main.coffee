---
---

jQuery ->
  showModal = (image, title, desc, att1, att2, price) ->
    vex.dialog.open
      message: """
        <h3>#{title}</h3>
        <img class='pure-img' src="#{image}" />
        <h4>Použití</h4>
        <p>#{att1}</p>
        <h4>Náročnost</h4>
        <p>#{att2}</p>
        <h4>Popis</h4>
        <p>#{desc}<p>
        <p><strong>#{price}</strong></p>
      """
      buttons: [
        $.extend({}, vex.dialog.buttons.NO, text: 'Zavřít')
      ]

  $('.item a').on 'click', (e) ->
    e.preventDefault()
    item = $(this).parents('.item')
    args = ['image', 'title', 'desc', 'att1', 'att2', 'price'].map((d) => item.data(d))
    showModal(args...)
