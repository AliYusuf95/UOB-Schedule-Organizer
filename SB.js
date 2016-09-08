// Load script function needed to make sure that script is loaded before execute the code
function loadScript(url, callback){

    var script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

loadScript('https://code.jquery.com/jquery-2.2.4.min.js', function(){
    $.extend({
        getManyCss: function(urls, callback, nocache){
            if (typeof nocache=='undefined') nocache=false; // default don't refresh
            $.when(
                $.each(urls, function(i, url){
                    if (nocache) url += '?_ts=' + new Date().getTime(); // refresh? 
                    $.get(url, function(){
                        $('<link>', {rel:'stylesheet', type:'text/css', 'href':url}).appendTo('head');
                    });
                })
            ).then(function(){
                if (typeof callback=='function') callback();
            });
        },
    });
    $.getMultiScripts = function(arr, path) {
        var _arr = $.map(arr, function(scr) {
            return $.getScript( (path||"") + scr );
        });
    
        _arr.push($.Deferred(function( deferred ){
            $( deferred.resolve );
        }));
    
        return $.when.apply($, _arr);
    }
    var cssfiles=[
        'https://aliyusuf95.github.io/UOB-Schedule-Organizer/sweetalert.css'
    ];
    var scriptfiles = [
        'https://aliyusuf95.github.io/UOB-Schedule-Organizer/sweetalert.min.js'
    ];

    $.getMultiScripts(scriptfiles, '').done(function() {
        console.log('all js loaded');
        $.getManyCss(cssfiles, function(){
            console.log('all css loaded');
            ScheduleBuilder();
        });
    });
    
});

function ScheduleBuilder (){
  swal({
    title: "HTML <small>Title</small>!",
    text: "A custom <span style='color:#F8BB86'>html<span> message.",
    html: true
  });
}
