$(function(){
    /*图片展开关闭*/
    $('#guanbi').click(function(){
        $('#zhankai').show();
        $('.top').hide();
    })
    $('#zhankai').click(function(){
        $('#zhankai').hide();
        $('.top').show();
    })
    /*下拉显示隐藏*/
    $('.link-list').hover(function(){
        var id=$(this).attr('hide');
        $('#'+id).show();
        $($('.jiaotou')[$(this).index('.link-list')]).css('-webkit-transform','rotateZ(-180deg)');
        $(this).css('background','#fff');
    },function(){
        var id=$(this).attr('hide');
        $('#'+id).hide();
        $($('.jiaotou')[$(this).index('.link-list')]).css('-webkit-transform','rotateZ(0deg)')
        $(this).css('background','#F5F5F5');
    })
    /*关闭隐藏*/
    function bianhua(obj){
        obj.hover(function(){
            $(this).css({'color':'#ff6600','-webkit-transform':'rotatez(-180deg)'});
        },function(){
            $(this).css({'color':'#666','-webkit-transform':'rotatez(180deg)'});
        })
    }
    bianhua($('.x'));
    $('.x').click(function(){
        $($('.yincang')[$(this).index('.x')]).hide();
    })
    //购物车 关闭
    $('.car').hover(function(){
        $('.mycar-box').stop();
        $('.mycar-box').animate({right:0},700);
    })
    bianhua($('.xxx'));
    $('.xxx').click(function(){
        $('.mycar-box').stop();
        $('.mycar-box').animate({right:-380+'px'},700);
    })
    /*nav left 出现隐藏*/
    $('.ng-list').hover(function(){
        $($('.nav-sort-detail')[$(this).index()]).show();
        $(this).css('background','#299AEF');
    },function(){
        $($('.nav-sort-detail')[$(this).index()]).hide();
        $(this).css('background','#41A8F7');
    })
    /*nav 隐藏关闭*/
    $('.x1').click(function(){
        $($('.nav-sort-detail')[$(this).index('.x1')]).hide();
    })
    //banner轮播
    //放图片的大容器
    var box=$('.banner-pic');
    //放图片的小容器
    var imgbox = $('.img-box');
    //所有的图片
    var imgs = $('.banner-pic li');
    //详情按钮跟文字
    var infodel=$('.title-list p')
    //颜色
    var color=['#D3164E','#4AA809','#FE6700','#6C08A6','#DB0C38','#BC1B2D','#E41211','#06A4E5','#FFE401','#FBBE03','#FEC00B','#5F0098','#FBFBF9','#6CC9F4','#EAEAEA','#FCFF00','#56F8E9','#ED1441','#E6FBFE','#FFF701','#F0E8DD','#E80D47','#BC1B2D','#0052B8','#00ADEF','#FE6016','#BC1B2D','#50C4AF','#FFE9F3','#FEF1DE','#DED0C7','#E80A3D','#E30035','#2CCCFF','#FFE8E4','#FFE5F0','#FFBA03','#FDEBE1','#F10A40'];
    //将图片的顺序保存起来
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].index = i;
    }
    var num = 0;
    function move(type){
        if (type == "r") {
            num++;
            if (num == imgs.length) {
                num = 0;
            }
        } else if (type == "l") {
            num--;
            if (num == -1) {
                num = imgs.length - 1;
            }
        }
        //让图片变化
        imgs.css('opacity',0);
        imgs.stop(true);
        $(imgs[num]).animate({opacity:1});
        //让小按钮变化
        $('.smallbtn').css('background','#fff');
        $($('.smallbtn')[num]).css('background','red');
        //大按钮变化
        $(".bg").css({height:0});
        $('.ctrl-dot').css({opacity:0});
        var parent=$($('.smallbtn')[num]).parent().parent()[0];
        $($(parent).children()[0]).css({height:50});
        $($(parent).children()[1]).css({opacity:1});
        //所有的详情隐藏
        $('.title-item').hide();
        //颜色
        $('.nav').css('background',color[num]);
    }
        var t=setInterval(function(){
            move("r");
        },2000);
        //鼠标over 停止执行
        $('#banner').hover(function(){
            clearInterval(t);
            $('.btn-left').show();
        },function(){
            t=setInterval(function(){
                move("r")
            },2000);
            $('.btn-left').hide();
        })
        //给大按钮添加事件
        $($('.big-btn').children()[2]).hide();
        $(".big-btn").hover(function () {
            $('.big-btn').finish();
            $(".bg").css({height:0});
            $('.ctrl-dot').css({opacity:0});
            $($(this).children()[2]).show();
            imgs.css('opacity',0);
            var obj=$(imgbox[$(this).index('.big-btn')]).children()[0];
            $(obj).animate({opacity:1});
            $('.info-btn').css('background','#fff');
            $($('.info-btn')[obj.index]).css('background','red');
            $('.nav').css('background',color[obj.index]);
            num=obj.index;
        },function(){
            $(".bg").css({height:0});
            $('.ctrl-dot').css({opacity:0});
            $($(this).children()[2]).hide();
            $($(".bg")[$(this).index()]).css({height:50});
            $($('.ctrl-dot')[$(this).index()]).css({opacity:1});
            $('.smallbtn').css('background','#fff');
            $($('.smallbtn')[num]).css('background','red');
        })
        //关于列表
        infodel.hover(function(){
            $('.info-btn').css('background','#fff');
            $($('.info-btn')[$(this).index('.title-list p')]).css('background','red');
            imgs.css('opacity',0);
            $(this).css('color','#FF6600');
            $(imgs[$(this).index('.title-list p')]).css('opacity',1);
            $('.nav').css('background',color[$(this).index('.title-list p')]);
            num=$(this).index('.title-list p');
        },function(){})
        //左右箭头
        $('.btn-left').click(function(){
            move('l');
        });
        $('.btn-right').click(function(){
            move('r');
        })
    //聚优品 聚生活
    //左右移动图片
    var numlist1=$($('.pager1')[0]).children();
    var num1 = 0;
    function wheel(leftB, rightB,list,box,obj,color1,color2,main,shuzi,ml){
        var leftB = leftB;
        var rightB = rightB;
        var box = box;
        var list=box.children(list);
        var winW = $(list[0]).outerWidth();
        var len = list.length;
        box.css('width',len * winW + "px");
        function move() {
            box.stop();
            num1--;
            if (num1 == -(len - 1)) {
                box.animate({marginLeft: num1 * winW}, function () {
                    box.css('marginLeft',0);
                })
                num1 = 0;
            } else {
                box.animate({marginLeft: num1* winW});
            }
            obj.css({'background':color1,'color':color2});
            $(obj[-num1]).css({'background':color2,'color':color1});
        }
        function move1() {
            box.stop();
            num1++;
            if (num1 == 1) {
                box.css('marginLeft',-(len - 1) * winW + "px");
                num1 = -(len - 2);
                box.animate({marginLeft: num1 * winW});
            } else {
                box.animate({marginLeft: num1 * winW});
            }
            obj.css({'background':color1,'color':color2});
            $(obj[-num1]).css({'background':color2,'color':color1});
        }
        leftB.click(function(){move1()});
        rightB.click(function(){move()});
        //出现左箭头
        main.hover(function(){
            $($(".switch-prev")[shuzi]).show();
        },function(){
            $($(".switch-prev")[shuzi]).hide();
        })
        //一一对应
        obj.hover(function(){
            obj.css({'background':color1,'color':color2});
            $(this).css({'background':color2,'color':color1});
            box.animate({marginLeft:($(this).index())*-ml});
            num1=-$(this).index();
        },function(){})
    }
    wheel($($(".switch-prev")[0]),$($(".switch-next")[0]),'.proms-items-list',$($(".proms-items")[0]),numlist1,'#fff','#ff4545',$('.column-proms'),0,600);
    //楼层
    function luocenglunbo(obj,color1){
        var win=$('.floor-items',obj);
        var link=$('.item',obj);
        var floatdiv=$('.float',obj);
        var itemlists=$('.floor-item',obj);
        var leftB=$('.switch-prev',obj);
        var rightB=$('.switch-next',obj);
        var num1=0,num2=0;
        link.hover(function(){
            //滑块运动
            floatdiv.stop();
            itemlists.finish();
            var that=$(this);
            var lefts=$(this).position().left;
            link.css('color',color1);
            floatdiv.animate({left:lefts},function(){
                that.css('color','#fff');
            })
            //内容运动
            var index=$(this).index(obj .item);
            num2=index;//将要移动到哪个
            if(num1==num2){
                return;
            }else if(num1<num2){
                itemlists.eq(num2).css('left',1190).animate({left:0});
                itemlists.eq(num1).animate({left:-1190});
            }else if(num1>num2){
                itemlists.eq(num2).css('left',-1190).animate({left:0});
                itemlists.eq(num1).animate({left:1190});
            }
            num1=num2;
            num2='';
        },function(){});
        win.hover(function(){
            leftB.show();
        },function(){
            leftB.hide();
        })
        leftB.click(function(){
            floatdiv.stop();
            itemlists.finish();
            var temp=num1;
            num1--;
            if(num1==-1){
                num1=5
            }
            itemlists.eq(num1).css('left',1190).animate({left:0});
            itemlists.eq(temp).animate({left:-1190});
            link.css('color',color1);
            floatdiv.animate({left:link.eq(num1).position().left},function(){
                link.eq(num1).css('color','#fff');
            });

        });
        rightB.click(function(){
            floatdiv.stop();
            itemlists.finish();
            var temp=num1;
            num1++;
            if(num1==6){
                num1=0
            }
            itemlists.eq(num1).css('left',-1190).animate({left:0});
            itemlists.eq(temp).animate({left:1190});
            link.css('color',color1);
            floatdiv.animate({left:link.eq(num1).position().left},function(){
                link.eq(num1).css('color','#fff');
            });
        })
    }
    luocenglunbo($($('.floors1')[0]),'#ff5500');
    luocenglunbo($($('.floors1')[1]),'#2E82FF');
    luocenglunbo($($('.floors1')[2]),'#E87499');
    luocenglunbo($($('.floors1')[3]),'#83602A');
    //苏宁社区
    var numlist2=$($('.pager')[0]).children();
    wheel($($(".switch-prev")[5]),$($(".switch-next")[5]),'.hots-and-share-item',$($(".hots-and-share-main")[0]),numlist2,'#fff','#ff4545',$('.floor-zone-main'),5,1000);
    //滚轮事件
    var search=$('.ng-fix-bar');
    var footitem=$('.ng-slide-box');
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        if(scrollTop>700){
            search.show();
        }else if(scrollTop<400){
            search.hide();
        }
        var flag=true;
        var flag1=true;
        if(scrollTop>4500){
            footitem.animate({bottom:30},100);
            flag=false;
            flag1=true;
        }else{
            footitem.animate({bottom:-494},100);
            flag1=false;
            flag=true;
        }
    })
    //关闭留言
    $('.gzclose').click(function(){
        footitem.animate({bottom:-494},100);
    })
    //返回顶部
    var rtn;
    $('.return').click(function(){
            rtn=$(window).scrollTop();
            var tmp=rtn/10;
            var rt=setInterval(function(){
                rtn=rtn-tmp;
                $(window).scrollTop(rtn);
                if(rtn<0){
                    clearInterval(rt);
                }
            },10);
    })
    //搜索框
    $('.search-inner').focus(function(){
        $('.search-inner').val('');
        $('.hide').show();
    })
    $('.search-inner').blur(function(){
        $('.search-inner').val('红孩子11周年 亿元红包抢先领');
        $('.hide').hide();
    })
    //倒计时
    function aa(){
        var arr=[];
        var now=new Date();
        var end=new Date();
        end.setHours(24);
        end.setMinutes(0);
        end.setSeconds(0);
        var time=(end.getTime()-now.getTime())/1000;
        var hour=parseInt(time/(60*60));
        time%=(60*60);
        arr.push(hour);
        var min=parseInt(time/60);
        time%=60;
        arr.push(min);
        var second=time;
        arr.push(second);
        return arr;
    }
    var times=$('.time');
    var arr=aa();
    times.each(function(index,obj){
        $(obj).html(arr[index])
    })
    setInterval(function(){
        var arr=aa();
        times.each(function(index,obj){
            $(obj).html(arr[index])
        })
    },1000)
})
