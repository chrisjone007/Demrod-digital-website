(function() {
    var s1 = document.createElement('script');
    s1.async = true;
    s1.onload = function () {
       var s2 = document.createElement('script');
      s2.async = true;
//      s2.src = '//stagelead.moverbase.com/js/lead.js?v22';
      s2.src = '//lead.moverbase.com/js/lead.js?v22';
      var s0 = document.getElementsByTagName('script')[0];
      s0.parentNode.insertBefore(s2, s0);
    };
//    s1.src = '//stagelead.moverbase.com/js/iframeResizer.min.js?v6';
    s1.src = '//lead.moverbase.com/js/iframeResizer.min.js?v6';
    var s0 = document.getElementsByTagName('script')[0];
    s0.parentNode.insertBefore(s1, s0);

})();
