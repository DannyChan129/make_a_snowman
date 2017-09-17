/*window.onload = function(){
	hengshuping();
}*/
;(function (desw) {
    var winW = document.documentElement.clientWidth;
    radio = winW / desw;
    document.documentElement.style.fontSize = radio * 100 + 'px';
})(750);

//屏幕方向监测
function hengshuping() {
    if (window.orientation == 180 || window.orientation == 0) {
        // alert("please hengping");
    }
    if (window.orientation == 90 || window.orientation == -90) {
        // alert("hengping");
    }
}

window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
var v_h = null,
    direction = 1,
    e, e1, e2,
    pageno = 0,
    out,
    newM = null;
var isok = true;

function init_pageH() {
    var fn_h = function () {
        if (document.compatMode == "BackCompat")
            var Node = document.body;
        else
            var Node = document.documentElement;
        return Math.max(Node.scrollHeight, Node.clientHeight);
    }
    var page_h = fn_h();
    var m_h = $(".m-page").height();
    page_h <= m_h ? v_h = page_h : v_h = m_h;
    $(".m-page").height(v_h);
    $(".p-index").height(v_h);
}

init_pageH();

//audio
var audio1 = document.getElementById("audio1");
var audio4 = document.getElementById("audio4");

function audioPlay() {
    var currentTime = Date.now();
    var protectTime = 100;
    if ((currentTime - lastRunTime) < protectTime) {
        return;
    }
    if (playStatus) {
        audio1.pause();
    } else {
        audio1.play();
    }
    playStatus = !playStatus;
    lastRunTime = Date.now();
}

window.onload = function () {
    home();
    audio4Play();
}
document.addEventListener("WeixinJSBridgeReady", function () {
    audio4Play();
}, false);

//audio

function audio1Play() {
    audio1.play();
}

function audio1Pause() {
    audio1.pause();
}

function audio4Play() {
    audio4.play();
}

//雨
// function run() {
//     var image = document.getElementById('background');
//         var engine = new RainyDay({
//             image: image,
//             gravityAngle: Math.PI / 9
//         });
//     console.log(1);
//         engine.trail = engine.TRAIL_SMUDGE;
//     engine.rain([ [1, 0, 1000], [3, 3, 1] ], 100);
//
//     image.crossOrigin = 'anonymous';
//     image.src = '';
//
//
// }

setTimeout(function () {
    $('.wuqi').css("opacity", "1");
    $('.movewuqi').css("opacity", "1");

}, 3000)
setTimeout(function () {
    $('.titlesnow').addClass('duijisnow').show();
}, 500)
setTimeout(function () {
    $('.titlesnow').addClass('shakesnow')
    $('.test').addClass('shakesnow')
}, 7000)
setTimeout(function () {
    $("#audio1").attr("src", "audio/caboli.mp3");
    audio1Play();
    $('.movewuqi').css("top", "99%")
    $('.titlesnow').css("top", "97%")
}, 9000)
setTimeout(function () {
    $('.startbut').fadeIn();
}, 11500)
$(".startbut").bind("click", function () {
    $(".start").hide();
    $(".rule").show();
});
$(".rule p").bind("click", function () {
    $(".rule").hide();
    $(".part1").show();
    audio4Play();
    part3();
});


function part1() {
    setTimeout(function () {
        $('.dialogue1').show();
        $("#audio1").attr("src", "audio/S0pile of snow, pile of snow, Big and small, body and head.mp3");
        audio1Play();
        $('.dialogue1').bind('click',function () {
            $("#audio1").attr("src", "audio/S0pile of snow, pile of snow, Big and small, body and head.mp3");
            audio1Play();
        });


        $("#audio1").bind("ended", function () {
            $('.dropstar').show();
            setTimeout(function () {
                $('.dropstar').fadeOut();
            },4000)
            $("#audio1").unbind("ended");
            $('.snowballleft').bind('click', function () {
                setTimeout(function () {
                    $("#audio1").attr("src", "audio/snowballflow.mp3");
                    audio1.play();
                },3000);
                $('.snowballleft').addClass('rollsnowballleft');
                $('.snowballleft').animate({"left":"38%","top":"80%","width":"11%","height":"11%"},3000);
                setTimeout(function () {
                    var w = -(document.documentElement.clientWidth);
                    var a = $('.part1').css("left");
                    var timer = setInterval(function () {
                        a = parseInt(a) - 2
                        if (a > w) {
                            $('.part1').css("left", a + 'px');
                        } else {
                            clearInterval(timer);
                        }
                    }, 20);
                    setTimeout(function () {
                        $('.snowballright').fadeIn();
                        $('.snowballright').bind('click', function () {
                            setTimeout(function () {
                                $("#audio1").attr("src", "audio/snowballflow.mp3");
                                audio1.play();
                            },3000);
                            $('.snowballright').addClass('rollsnowballright');
                            $('.snowballright').animate({"right":"37%","top":"80%","width":"14%","height":"14%"},3000);
                            setTimeout(function () {
                                $('.dialogue1').hide();
                                var w = -(document.documentElement.clientWidth);
                                var a = $('.part1').css("left");
                                var timer = setInterval(function () {
                                    a = parseInt(a) + 2
                                    if (a < w / 2) {
                                        $('.part1').css("left", a + 'px');
                                    } else {
                                        clearInterval(timer);
                                    }
                                }, 20);
                                setTimeout(function () {
                                    $('.arrow').fadeIn();
                                    movesnowball();
                                }, 3000)
                            }, 4000);
                        });
                    }, 5000)
                }, 5000)
            })
        });
    }, 1000)
}
var hWidth = document.documentElement.clientWidth;
// 绑定拖拽函数
function drag(obj1, obj2, success, error) {
    obj1.addEventListener("touchstart", function (e) {
        setTimeout(function () {
            $('.arrow').hide();
        }, 300);
        var touches = e.touches[0];
        window.disX = touches.clientX - obj1.offsetLeft;
        window.disY = touches.clientY - obj1.offsetTop;
        console.log(obj1.offsetLeft);
        console.log(disX);
        //阻止页面的滑动默认事件
        document.addEventListener("touchmove", defaultEvent, false);
    }, false)

    obj1.addEventListener("touchmove", function (e) {
        var touches = e.touches[0];
        var oLeft = touches.clientX - disX;
        console.log(oLeft);
        var oTop = touches.clientY - disY;

        obj1.style.left = oLeft+'px';
        obj1.style.top = oTop +'px';
    }, false);

    obj1.addEventListener("touchend", function () {
        document.removeEventListener("touchmove", defaultEvent, false);
        var l1 = obj1.offsetLeft;
        var r1 = l1 + obj1.offsetWidth;
        var t1 = obj1.offsetTop;
        var b1 = t1 + obj1.offsetHeight;

        var l2 = obj2.offsetLeft;
        var r2 = l2 + obj2.offsetWidth;
        var t2 = obj2.offsetTop;
        var b2 = t2 + obj2.offsetHeight;

        if (l2 > r1 || l1 > r2 || t1 > b2 || t2 > b1) {
            error && error()
        } else {
            success && success()
        }
    }, false);

    function defaultEvent(e) {
        e.preventDefault();
    }
}

var snowleft = document.getElementsByClassName('snowballleft')[0];
var snowright = document.getElementsByClassName('snowballright')[0];
function movesnowball() {
    $('.snowballleft').unbind();
    drag(snowleft,snowright,function () {
        setTimeout(function () {
            $(".bingo1").show();
            $(".right1").show();
            $(".flower1").show();
            $(".star1").show();
            $("#audio1").attr("src", "audio/cheer.mp3");
            audio1.play();
            $('.next0').show().bind("click",function () {
                $('.part1').hide();
                part2();
            })
        },2000);
    },function () {
        $('.snowballleft').animate({"left":"38%","top":"80%"},1000);
        setTimeout(function () {
            $("#audio1").attr("src", "audio/snowballflow.mp3");
            audio1.play();
        },1000);
    });
}


/*part2*/
function part2() {
    $('.part2').show();
        // snowFlow();
        function snowFlow(left,height,src){
            var container=document.createElement('div');
            var pic=document.createElement('img');
            var snowFlow=document.getElementById('snowFlow');
            pic.className='pic';
            container.className='container';
            snowFlow.appendChild(container);
            container.appendChild(pic);

            container.style.left=left+'px';
            container.style.height=height+100+'px';
            pic.src=src;
            setTimeout(function(){
                snowFlow.removeChild(container);
            },10000);
        }
        var images = [
            'images/snow_scraf.png',
            'images/snow_carrot.png',
            'images/branches_snow.png',
            'images/hat_snow.png',
            'images/stones_snow.png',
            'images/orange_snow.png']
        // var num = [[0,1,2,3,4],[4,3,2,1,0],[1,3,4,2,0],[2,4,1,0,3],[3,4,1,0,2]];
        window.snowtimer = setInterval(makesnow,4000);
        function makesnow() {
        var index = Math.floor(Math.random()*6);
        var left=Math.random()*document.documentElement.clientWidth-40;
        var height=Math.random()*window.innerHeight;
        //  var imageindex = num[index];
        console.log(index);
        var src1 = images[index];
        snowFlow(left,height,src1);
        $('.pic').bind('click',function () {
            if(this.src.indexOf('hat')>0){
                hat();
            }else if(this.src.indexOf('scraf')>0){
                scarf();
            }else if(this.src.indexOf('carrot')>0){
                carrot();
            }else if(this.src.indexOf('branches')>0){
                branches();
            }else if(this.src.indexOf('stones')>0){
                stones();
            }else if(this.src.indexOf('orange')>0){
                orange();
            };
        })
    }
    function hat() {
        $("#audio1").attr("src", "audio/S6put a hat on his head.mp3");
        audio1.play();
            $('.hat').attr("id",1);
        $('.text2').fadeOut();
        $('.text3').fadeOut();
        $('.text4').fadeOut();
        $('.text5').fadeOut();
        $('.text6').fadeOut();
        $('.text1').addClass('cloudcome').show();
        $('.pic').css("animation-play-state","paused");
        clearInterval(snowtimer);
        setTimeout(function () {
            window.snowtimer = setInterval(makesnow,4000);
        },3000);
        $('.part2 .hat').show();
        wan();
    }
    function branches() {
        $("#audio1").attr("src", "audio/S4Two tree branches for his arms.mp3");
        audio1.play();
        $('.hand').attr("id",2);
        $('.text1').fadeOut();
        $('.text3').fadeOut();
        $('.text4').fadeOut();
        $('.text5').fadeOut();
        $('.text6').fadeOut();
        $('.text2').addClass('cloudcome').show();
        $('.pic').css("animation-play-state","paused");
        clearInterval(snowtimer);
        setTimeout(function () {
            window.snowtimer = setInterval(makesnow,4000);
        },3000);
        $('.part2 .hand').show();
        wan();
    }
    function orange() {
        $("#audio1").attr("src", "audio/S3an orange rind for his mouth.mp3");
        audio1.play();
        $('.mouth').attr("id",3);
        $('.text1').fadeOut();
        $('.text2').fadeOut();
        $('.text4').fadeOut();
        $('.text5').fadeOut();
        $('.text6').fadeOut();
        $('.text3').addClass('cloudcome').show();
        $('.pic').css("animation-play-state","paused");
        clearInterval(snowtimer);
        setTimeout(function () {
            window.snowtimer = setInterval(makesnow,4000);
        },3000);
        $('.part2 .mouth').show();
        wan();
    }
    function carrot() {
        $("#audio1").attr("src", "audio/S2Use a carrot as his nose.mp3");
        audio1.play();
        $('.nose').attr("id",4);
        $('.text1').fadeOut();
        $('.text2').fadeOut();
        $('.text3').fadeOut();
        $('.text5').fadeOut();
        $('.text6').fadeOut();
        $('.text4').addClass('cloudcome').show();
        $('.pic').css("animation-play-state","paused");
        clearInterval(snowtimer);
        setTimeout(function () {
            window.snowtimer = setInterval(makesnow,4000);
        },3000);
        $('.part2 .nose').show();
        wan();
    }
    function stones() {
        $("#audio1").attr("src", "audio/S1Use the stones as his eyes.mp3");
        audio1.play();
        $('.eye').attr("id",5);
        $('.text1').fadeOut();
        $('.text3').fadeOut();
        $('.text4').fadeOut();
        $('.text2').fadeOut();
        $('.text6').fadeOut();
        $('.text5').addClass('cloudcome').show();
        $('.pic').css("animation-play-state","paused");
        clearInterval(snowtimer);
        setTimeout(function () {
            window.snowtimer = setInterval(makesnow,4000);
        },3000);
        $('.part2 .eye').show();
        wan();
    }
    function scarf() {
        $("#audio1").attr("src", "audio/S5tie a scarf around his neck.mp3");
        audio1.play();
        $('.scarf').attr("id",6);
        $('.text1').fadeOut();
        $('.text3').fadeOut();
        $('.text4').fadeOut();
        $('.text5').fadeOut();
        $('.text2').fadeOut();
        $('.text6').addClass('cloudcome').show();
        $('.pic').css("animation-play-state","paused");
        clearInterval(snowtimer);
        setTimeout(function () {
            window.snowtimer = setInterval(makesnow,4000);
        },3000);
        $('.part2 .scarf').show();
        wan();
    }
}

function wan() {
    var hat = $('.hat').attr('id');
    var hand = $('.hand').attr('id');
    var mouth = $('.mouth').attr('id');
    var nose = $('.nose').attr('id');
    var eye = $('.eye').attr('id');
    var scarf = $('.scarf').attr('id');
    if(hat==1&&hand==2&&mouth==3&&nose==4&&eye==5&&scarf==6){
        clearInterval(window.snowtimer);
        setTimeout(function () {
            $(".bingo2").show();
            $(".right2").show();
            $(".flower2").show();
            $(".star2").show();
            $("#audio1").attr("src", "audio/cheer.mp3");
            audio1.play();
            $('.next2').show().bind("click",function () {
                console.log(1);
                $('.part2').hide();
                part3();
            })
        },2000);
    }
}

//part3
function part3() {
    $('.part3').show();
        $('.part3 .dropstar3').show();
    setTimeout(function () {
        $('.part3 .dropstar3').hide();
    },5000)
    $('.part3 .hat').bind('click',function () {
        $('.part3 .dialogue').hide();
        $('.part3 .dialogue3').show()
        $("#audio1").attr("src", "audio/S6put a hat on his head.mp3");
        audio1.play();
    })
    $('.part3 .eye').bind('click',function () {
        $('.part3 .dialogue').hide();
        $('.part3 .dialogue5').show()
        $("#audio1").attr("src", "audio/S1Use the stones as his eyes.mp3");
        audio1.play();
    }) ;
    $('.part3 .nose').bind('click',function () {
        $('.part3 .dialogue').hide();
        $('.part3 .dialogue1').show()
        $("#audio1").attr("src", "audio/S2Use a carrot as his nose.mp3");
        audio1.play();
    })
     $('.part3 .mouth').bind('click',function () {
        $('.part3 .dialogue').hide();
        $('.part3 .dialogue6').show()
        $("#audio1").attr("src", "audio/S3an orange rind for his mouth.mp3");
        audio1.play();
    })
     $('.part3 .scarf').bind('click',function () {
        $('.part3 .dialogue').hide();
        $('.part3 .dialogue4').show()
        $("#audio1").attr("src", "audio/S5tie a scarf around his neck.mp3");
        audio1.play();
    })
     $('.part3 .hand').bind('click',function () {
        $('.part3 .dialogue').hide();
        $('.part3 .dialogue2').show()
        $("#audio1").attr("src", "audio/S4Two tree branches for his arms.mp3");
        audio1.play();
    })
   $('.part3 .next3').bind('click',function () {
       $('.part3').hide();
       end();
   })

}


// end
function end() {
    $("#audio1").attr("src", "http://live.babyfs.cn/web/H5/common/audio/finish.mp3");
    audio1.play();
    $(".end").show();
}

//再来一次
$(".playangin").click(function () {
    window.location.href = window.location.href + "?id=" + 10000 * Math.random();
});
//预加载
var num = 0;
var the_images = [
    "images/again.png",
    "images/bgImg.jpg",
    "images/bgxing.png",
    "images/btn_go.png",
    "images/end_bg.png",
    "images/end_img.png",
    "images/fail.png",
    "images/hint_hand.png",
    "images/homePage.jpg",
    "images/how.png",
    "images/loading.gif",
    "images/meow.png",
    "images/oink.png",
    "images/quack.png",
    "images/rule.jpg",
    "images/sm_cat.png",
    "images/sm_duck.png",
    "images/sm_pig.png",
    "images/sm_wolf.png",
    "images/starbut.png",
    "images/title.png",
    "images/cryxing.png",
    "images/playagain1.png",
    "audio/cheer.mp3",
    "audio/howlhowl.mp3",
    "audio/meowmeow.mp3",
    "audio/oinkoink.mp3",
    "audio/quackquack.mp3",
];
jQuery.imgpreload(the_images, {
    each: function () {
        var status = $(this).data('loaded') ? 'success' : 'error';
        if (status == "success") {
            ++num;
            $("#lodingnum").html((num / the_images.length * 100).toFixed(0) + "%");
        }
    },
    all: function () {
        $("#lodingnum").html("100%");
        setTimeout(function () {
            document.getElementById('loading').style.display = "none";
            $(".p-index").css("display", "block");
        }, 300)
    }
})