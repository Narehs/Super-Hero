


  $(document).ready(function(){
    $("#tabs").tabs();
});


 $(document).ready(function(){
  $("#SliderSingle").slider({ 
    from: 40, 
    to: 260, 
    step: 10, 
    round: 1, 
    format: { format: '##.0', locale: 'de' }, 
    dimension: '&nbsp;sq.m', 
    skin: "round" });
  });


  $(document).ready(function () {
            $('.fancybox-thumbs').fancybox({
//                prevEffect: 'none',
//                nextEffect: 'none',
                closeBtn: false,
                arrows: false,
                nextClick: true,

                helpers: {
                    thumbs: {
                        width: 50,
                        height: 50
                    }
                }
            });
        });