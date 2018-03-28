var count = 0;
var $overlay = $('.overlay');
var $links = $overlay.find('lista') // ul

$links.velocity({ 
  opacity: 0.4,
  translateY: '-75%',
  translateX: '-50%',
  rotateX: '35deg'
}, 0);

$('.ocultar').click(function()
                  {
  if ( ++count % 2 === 1 )
  {
    // Show
    $overlay
      .velocity('stop')
      .velocity('fadeIn', 300);

    $links
      .velocity('stop')
      .velocity({ 
        opacity: 1,
        translateY: '-50%',
        translateX: '-50%',
        rotateX: '0deg'
      }, 500);
  }
  else
  {
    // Hide
    $links
      .velocity('stop')
      .velocity({ 
        opacity: 0.4,
        translateY: '-25%',
        rotateX: '-35deg'
      },
      {
        duration: 250,
        complete: function(elements)
        {
          $links.velocity({ 
            translateY: '-75%',
            rotateX: '35deg'
          }, 0);
        }
      });

    $overlay
      .velocity('stop')
      .velocity('fadeOut', {
        duration: 200
      });
  }

  return false;
});

/*
setTimeout(function(){
  $('.toggler').trigger('click');
}, 500);

<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })(); */
