$(document).ready ->
  $("#activate").live("click", ->
    window.webkitNotifications.requestPermission()
  )

  $("#confirm").live("click", ->
    alert(window.webkitNotifications.checkPermission())
  )

  $("#notification").live("click", ->
    window.webkitNotifications.createNotification("mail.png", "pochi", "bowbow!").show()
  )

