window.onload=function() {
    /*图片展开关闭*/
    var guanbi = document.getElementById('guanbi');
    var zhankai = document.getElementById('zhankai');
    var topimg = getClass('top')[0];
    guanbi.onclick = function () {
        zhankai.style.display = 'block';
        topimg.style.display = 'none';
    }
    zhankai.onclick = function () {
        zhankai.style.display = 'none';
        topimg.style.display = 'block';
    }
    /*下拉显示隐藏*/
    var jiaotou = getClass('jiaotou');
    var linklists = getClass('link-list');
    for (var i = 0; i < linklists.length; i++) {
        linklists[i].index = i;
        linklists[i].onmouseover = function () {
            var id = this.getAttribute('hide');
            var $hides = document.getElementById(id);
            $hides.style.display = 'block';
            jiaotou[this.index].style.webkitTransform = 'rotateZ(-180deg)';
            jiaotou[this.index].style.webkitTransition = 'all 0.2s ease 0s';
            this.style.background = '#fff';
        }
        linklists[i].onmouseout = function () {
            var id = this.getAttribute('hide');
            var $hides = document.getElementById(id);
            $hides.style.display = 'none';
            jiaotou[this.index].style.webkitTransform = 'rotateZ(0deg)';
            this.style.background = '#F5F5F5';
        }
    }
    /*关闭隐藏*/
    var xs = getClass('x');
    var yincang = getClass('yincang');
    for (var j = 0; j < xs.length; j++) {
        xs[j].index = j;
        xs[j].onmouseover = function () {
            this.style.color = '#ff6600';
            this.style.webkitTransform = 'rotatez(-180deg)';
            this.style.webkitTransition = 'all 0.5s ease 0s';
        }
        xs[j].onmouseout = function () {
            this.style.color = '#666';
            this.style.webkitTransform = 'rotatez(180deg)';
        }
        xs[j].onclick = function () {
            yincang[this.index].style.display = 'none';
        }
    }
    /*nav left 出现隐藏*/
    var navlists = getClass('ng-list');
    var navdetails = getClass('nav-sort-detail');
    for (var i = 0; i < navlists.length; i++) {
        navlists[i].index = i;
        navlists[i].onmouseover = function () {
            this.style.background = '#299AEF';
            navdetails[this.index].style.display = 'block';
        }
        navlists[i].onmouseout = function () {
            this.style.background = '#41A8F7';
            navdetails[this.index].style.display = 'none';
        }
    }
    /*nav 隐藏关闭*/
    var x1s = getClass('x1');
    for (var i = 0; i < x1s.length; i++) {
        x1s[i].index = i;
        x1s[i].onclick = function () {
            navdetails[this.index].style.display = 'none';
        }
    }

    //聚优品 聚生活
    var left = getClass("switch-prev")[0];
    var right = getClass("switch-next")[0];
    var proi = getClass("proms-items")[0];
    var numlist1=$('li',$('.pager1')[0]);
    //出现左箭头
    var column = getClass('column-proms')[0];
    hover(column,function(){
        left.style.display='block';
    },function(){
        left.style.display='none';
    })
    //左右箭头移动图片
    var num1 = 0;
    function wheel(leftB, rightB, boxlist, box,obj,color){
        var leftB = leftB;
        var rightB = rightB;
        var box = box;
        var list = getClass(boxlist, box);
        var winW = list[0].offsetWidth;
        var len = list.length;
        box.style.width = len * winW + "px";
        function move() {
            num1--;
            if (num1 == -(len - 1)) {
                animate(box, {marginLeft: num1 * winW}, function () {
                    box.style.marginLeft = 0;
                })
                num1 = 0;
            } else {
                animate(box, {marginLeft: num1* winW});
            }
            for(var i=0;i<obj.length;i++){
                obj[i].style.background='#fff';
            }
                obj[-num1].style.background=color;
        }
        function move1() {
            num1++;
            if (num1 == 1) {
                box.style.marginLeft = -(len - 1) * winW + "px";
                num1 = -(len - 2);
                animate(box, {marginLeft: num1 * winW});
            } else {
                animate(box, {marginLeft: num1 * winW});
            }
            for(var i=0;i<obj.length;i++){
                obj[i].style.background='#fff';
            }
            obj[-num1].style.background=color;
        }
        leftB.onclick = function () {
            move1();
        }
        rightB.onclick = function () {
            move();
        }
    }
    wheel(left,right,'proms-items-list',proi,numlist1,'#ff4545')
    for(var i=0;i<numlist1.length;i++){
        numlist1[i].index=i;
        hover(numlist1[i],function(){
            for(var j=0;j<numlist1.length;j++){
                numlist1[j].style.background='#fff';
            }
            numlist1[this.index].style.background='#ff4545';
            animate(proi,{marginLeft:-(this.index)*600});
            num1=-this.index;
        },function(){})
    }
    //banner轮播
    //获取最外层的容器
    var navbox=$('.nav')[0];
    var banner = $('#banner');
    //放图片的大容器
    var box = $('.banner-pic')[0];
    //放图片的小容器
    var imgbox = $('.img-box');
    //所有的图片
    var imgs = $('li', box);
    //将图片的顺序保存起来
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].index = i;
    }
    //大按钮
    var bigBtn = $(".big-btn");
    //小按钮
    var smallBtn = $('.smallbtn');
    //console.log(smallBtn)
    //详情父元素
    var infolist = $('.title-item');
    //详情的按钮
    var infobtn = $('.info-btn');
    //console.log(infobtn.length)
    // 左按钮
    var leftB = $('.btn-left')[0];
    // 右按钮
    var rightB = $('.btn-right')[0];
    //颜色
    var color=['#D3164E','#4AA809','#FE6700','#6C08A6','#DB0C38','#BC1B2D','#E41211','#06A4E5','#FFE401','#FBBE03','#FEC00B','#5F0098','#FBFBF9','#6CC9F4','#EAEAEA','#FCFF00','#56F8E9','#ED1441','#E6FBFE','#FFF701','#F0E8DD','#E80D47','#BC1B2D','#0052B8','#00ADEF','#FE6016','#BC1B2D','#50C4AF','#FFE9F3','#FEF1DE','#DED0C7','#E80A3D','#E30035','#2CCCFF','#FFE8E4','#FFE5F0','#FFBA03','#FDEBE1','#F10A40'];
    var num = 0;
    function move(type) {
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
        for(var i=0;i<imgs.length;i++){
            imgs[i].style.opacity=0;
        }
        animate(imgs[num],{opacity:1});
        //让小按钮变化
        for(var i=0;i<smallBtn.length;i++){
            smallBtn[i].style.background="#fff";
        }
        smallBtn[num].style.background="red";
        //大按钮变化
        for(var i=0;i<bigBtn.length;i++){
            animate(getFirst(bigBtn[i]),{height:0}  );
            animate(getNum(bigBtn[i],1),{opacity:0});
        }
        var parent=smallBtn[num].parentNode.parentNode;
        animate(getFirst(parent),{height:50});
        animate(getNum(parent,1),{opacity:1});
        //所有的详情隐藏
        for(var i=0;i<infolist.length;i++){
            infolist[i].style.display="none";
        }
        //颜色
        navbox.style.background=color[num];
    }
    var t=setInterval(function(){
        move("r");
    },2000);

    //鼠标over 停止执行
    banner.onmouseover=function(){
        clearInterval(t);
        leftB.style.display='block';
    }
    //鼠标out  继续执行
    banner.onmouseout=function(){
        t=setInterval(function(){
            move("r")
        },2000);
        leftB.style.display='none';
    }
    //给大按钮添加事件
    for(var i=0;i<bigBtn.length;i++){
        bigBtn[i].index=i;
        bigBtn[i].onclick=function(){
            for(var j=0;j<bigBtn.length;j++){
                animate(getFirst(bigBtn[j]),{height:0}  );
                animate(getNum(bigBtn[j],1),{opacity:0});
                getNum(bigBtn[j],2).style.display="none";
            }

            getNum(this,2).style.display="block";

            for(var j=0;j<imgs.length;j++){
                imgs[j].style.opacity=0;
            }
            var obj=getFirst(imgbox[this.index])
            animate(obj,{opacity:1})
            for(var j=0;j<infobtn.length;j++){
                infobtn[j].style.background="#fff";
            }
            infobtn[obj.index].style.background="red";
            navbox.style.background=color[obj.index];
            num=obj.index;
        }
    }

    for(var i=0;i<infobtn.length;i++){
        infobtn[i].index=i;
       hover(infobtn[i],function(){
           for(var j=0;j<infobtn.length;j++){
               infobtn[j].style.background="#fff";
               imgs[j].style.opacity=0;
           }
           this.style.background="red";

           animate(imgs[this.index],{opacity:1});
           //颜色
           navbox.style.background=color[this.index];
           num=this.index;
       },function(){
       })
    }
    leftB.onclick=function(){
        move("l");
    }
    rightB.onclick=function(){
        move("r");
    }

    //楼层
    function tablunbo(obj1,color){
        var leftBtn=$(('.switch-prev'),obj1)[0];
        var rightBtn=$(('.switch-next'),obj1)[0];
        var num=0;
        var flooritems=$(('.floor-items'),obj1)[0];
        var linitems=$(('.item'),obj1);
        hover(obj1,function(){
            leftBtn.style.display='block';
        },function(){
            leftBtn.style.display='none';
        })
        function wheel(leftB,rightB,boxlist,box){
            var leftB=leftB;
            var rightB=rightB;
            var box=box;
            var list=getClass(boxlist,box);
            //console.log(list);
            var winW=list[0].offsetWidth;
            var len=list.length;
            box.style.width=len*winW+"px";
            function move(){
                num--;
                if(num==-(len-1)){
                    animate(box,{marginLeft:num*winW},function(){
                        box.style.marginLeft=0;
                    })
                    num=0;
                }else{
                    animate(box,{marginLeft:num*winW});
                }
                for(var i=0;i<linitems.length;i++){
                    linitems[i].style.background='#f1f1f1';
                    linitems[i].style.color=color;
                }
                linitems[-num].style.background=color;
                linitems[-num].style.color='#fff';
            }
            function move1(){
                num++;
                if(num==1){
                    box.style.marginLeft=-(len-1)*winW+"px";
                    num=-(len-2);
                    animate(box,{marginLeft:num*winW});
                }else{
                    animate(box,{marginLeft:num*winW});
                }
                for(var i=0;i<linitems.length;i++){
                    linitems[i].style.background='#f1f1f1';
                    linitems[i].style.color=color;
                }
                linitems[-num].style.background=color;
                linitems[-num].style.color='#fff';
            }
            leftB.onclick=function(){
                move1();
            }
            rightB.onclick=function(){
                move();
            }
        }
        wheel(leftBtn,rightBtn,'floor-item',flooritems);
        for(var i=0;i<linitems.length;i++) {
            linitems[i].index = i;
            hover(linitems[i],function(){
                animate(flooritems, {marginLeft: -1190 * (this.index)})
                for (var j = 0; j < linitems.length; j++) {
                    linitems[j].style.background = '#f1f1f1';
                    linitems[j].style.color = color;
                }
                this.style.background =color;
                this.style.color = '#fff';
                num = -this.index;
            },function(){
            });

        }
    }
    var floors=$('.floors1');
    tablunbo(floors[0],'#ff5500');
    tablunbo(floors[1],'#2E82FF');
    tablunbo(floors[2],'#E87499');
    tablunbo(floors[3],'#83602A');

    //苏宁社区
    var left5 = getClass("switch-prev")[5];
    var right5 = getClass("switch-next")[5];
    var hotmain = getClass("hots-and-share-main")[0];
    var numlist=$('li',$('.pager')[0]);
    var itmes=$('.hots-and-share-item');
    //出现左箭头
    var hotshare = $('.floor-zone-main')[0];
    hover(hotshare,function(){
        left5.style.display = 'block';
    },function(){
        left5.style.display = 'none';
    })
    wheel(left5, right5, 'hots-and-share-item', hotmain,numlist,'#ff4545');
    for(var i=0;i<numlist.length;i++){
        numlist[i].index=i;
        hover(numlist[i],function(){
            for(var j=0;j<numlist.length;j++){
                numlist[j].style.background='#fff';
            }
            numlist[this.index].style.background='#ff4545';
            animate(hotmain,{marginLeft:-(this.index)*1000});
            num1=-this.index;
        },function(){})
    }
}

