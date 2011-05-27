$.fn.desktopify = function($o) {
  _o = $.extend({
           icon: '',
           title: '',
           remove: true,
           timeout: 15000
       }, $o);

  var _notify = function($icon, $title, $body) {
    if (! $body ) {
      return false;
    }

    var _popup = window.webkitNotifications.createNotification($icon || _o.icon, $title || _o.title, $body);
    _popup.show();

    if(_o.timeout) {
      setTimeout(function() { _popup.cancel(); }, _o.timeout);
    }
  };

    return this.each(function() {
      alert(window.webkitNotifications);

      var _ob = $(this), _check = function() {
                         if(window.webkitNotifications.checkPermission() > 0) {
                           window.webkitNotifications.requestPermission(_check);
                         }
                         if(_o.remove) {
                           _ob.hide();
                         }
                         if($.isFunction(_o.callback)) {
                           _o.callback();
                         }
                         return false;
                       };

    $(this).bind('click notify', function($e, $b, $t, $i){
      if($e.type == 'click') {
        _check();
      } else if ($e.type == 'notify') {
        _notify($b, $t, $i);
      }
      return false;
    });

    return true;
  });
};

