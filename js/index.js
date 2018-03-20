loading = {
    step: 0,
    progress: function (a) {
        var b = this,
        c = setInterval(function () {
            b.step >= a ? clearInterval(c) : (b.step++, b.step = 100 < b.step ? 100 : b.step, $("#loadnum").text(b.step ));
            100 <= b.step && (clearInterval(c), $("#loadbtn").fadeIn(0.2))
        },
        3)
    },
    init: function () {
        var a = 0,
        b = 0,
        c = this,
        d = function (a, b) {
            var c = new Image,
            d = a.attr("lazysrc");
            c.src = d;
            c.complete ? (a.prop("src", d), b(a)) : (c.onload = function () {
                a.prop("src", d);
                b(a)
            },
            c.onerror = function () {
                a.prop("src", d);
                b(a)
            })
        },
        f = function () {
            a++;
            b = parseInt(a);
            c.progress(8 * b)
        };
        $("img").each(function () {
            d($(this), f)
        });
        var e = 0;
        $("video").each(function () {
            $(this).one("canplaythrough",
            function () {
                e++;
                5 <= e && c.progress(100)
            })
        });
        window.onload = function () {
            c.progress(100)
        }
    }
};
loading.init();

var vp = document.getElementById('v1');
var hand = document.getElementById('hand');
var tit = document.getElementsByClassName('tit')[0];
var v2 = document.getElementById('v2');
var v3 = document.getElementById('v3');
var v2click = document.getElementById("v2click");

$("#begin").click(function () {
    vp.play();
    $("#begin").hide();
    $(".v1bg").show();
});
vp.addEventListener('ended', function () {
    $(".v1bg .overlay").show();
})
tit.addEventListener('touchstart', function () {
    v2.play();
    $(".v2bg").show();    
})
v2click.addEventListener('touchstart', function () {
    v3.play();
    $(".v3bg").show();   
});
window.onload = function () {
    
    $("#v4").hide();
    $(".overlay").hide();
};
v2.addEventListener('ended', function () {
    $(".v2bg .overlay").show();
});
v3.addEventListener('ended', function () {   
       aud.play();  
      $(".overlay").show();    
      $("#v4").show(); 
      //$("video").css({"display":"none"});
});




