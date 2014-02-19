<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script><script>window.jQuery || document.write('<script src="http://code.jquery.com/jquery-2.0.3.min.js">\x3C/script>')</script>
<script type="text/javascript" src="http://static.tumblr.com/ib6vvvn/h4Rmt3ou9/jquery.infinitescroll.min.js"></script>
<script type="text/javascript" src="http://masonry.desandro.com/masonry.pkgd.min.js"></script>
<script>
$(window).load(function () {
	main_container = $("#content");
	container = document.querySelector('#content');
	entry = ".post";
    var msnry = new Masonry( container, {
    	itemSelector: entry
    });
    main_container.infinitescroll({
        navSelector  : "#pagination",
        nextSelector : "#pagination a#nextPage",
        itemSelector : entry,
        errorCallback: function(){},
    },function(arrayOfNewElems){
        var msnry = new Masonry( container, {
            itemSelector: entry
        });
    });
    $("#content").width(Math.floor(($(window).width()-254) / 310)*310);
});
$(window).resize(function() {
    $("#content").width(Math.floor(($(window).width()-254) / 310)*310);
});
</script>