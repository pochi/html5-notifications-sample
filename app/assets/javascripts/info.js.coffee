$(document).ready ->
  $("#notification").desktopify({
    remove: false
    callback: ->
    unsupported: ->
      alert("unsupported")
  }).trigger("click")


  window.webkitNotifications.createNotification("mail.png", "hoge", "Moge").show()
