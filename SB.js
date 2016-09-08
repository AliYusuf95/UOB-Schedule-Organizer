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

loadScript('https://code.jquery.com/jquery-1.12.0.min.js', function(){
  loadScript('https://aliyusuf95.github.io/UOB-Schedule-Organizer/sweetalert.min.js', function(){
    ScheduleBuilder ();
  });
});

function ScheduleBuilder (){
  swal({
    title: "HTML <small>Title</small>!",
    text: "A custom <span style="color:#F8BB86">html<span> message.",
    html: true
  });
}
