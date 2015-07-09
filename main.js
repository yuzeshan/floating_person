//刷新页面时浮动小人从天缓缓而降
animate(document.getElementById('float_asuna'),{
    attr:'y',
    speed:50,
    target:180

});

//窗口大小发生变化，使小人浮在中间
$(window).bind('resize',function(){
    var el=document.getElementById('float_asuna');
    center(el,85,152);

});
//滑动滚动条时，浮动小人的动画效果，就是有速度的往下走
if(BrowserDetect.browser=='Chrome' || BrowserDetect.browser=='Safari'){
    $('#float_asuna').css('position','fixed');
    $('#float_asuna').css('z-index','999');
    $('#float_asuna').css('top','300');
    $('#float_asuna').css('right','200');
}else{
    $(window).bind('scroll',function(){
    var el=document.getElementById('float_asuna');
    animate(el,{
			attr:'y',
			target:$(window).scrollTop()+($(window).height()-parseInt(getStyle(el,'height')))/2
		});
    });
}

var mytext;
//点击显示菜单
$('#getmenu').click(function(){
    $(this).hide();
    $('#food_list').hide();
    $('#play_widget').hide();
//    $('#tempsaying').show().text('准备干什么呢?');

    //字体逐个显示
//    mytext = '准备干什么呢？';
//    $("#tempsaying").text('').show();
//    typeit();
    mytext = '准备干什么呢？';
    typeit($("#tempsaying"),mytext);
    //字体逐个显示end
    setTimeout(function () {
        $('#showmenu').fadeIn();
    },100);
    $("#tempsaying").show();

    //点击显示公告
    $('#shownotice').click(function(){
//        $('#tempsaying').text('欢迎来到shanyuze的小站,我是您的小导游哦!');
        mytext = '欢迎来到shanyuze的小站,我是您的小导游哦!';
        typeit($("#tempsaying"),mytext);
        $('#showmenu').hide();
        $('#getmenu').show();
    });
    //点击打开音乐
    $('#playmusic').click(function(){
        $('#showmenu').hide();
        $('#tempsaying').hide();
        $('#getmenu').show();
        $('#play_widget').show();

    });
    //点击查看Asuna生存时间
    $('#lifetime').click(function(){
        var dateStart=new Date('2015','03','06','17','30','30');
        var dateEnd=new Date();
        //下面计算日期相差的天时分秒数
        var date3=dateEnd.getTime()-dateStart.getTime(); //时间差的毫秒数
        //计算出相差天数
        var days=Math.floor(date3/(24*3600*1000)) ;

        //计算出小时数
        var leave1=date3%(24*3600*1000);    //计算天数后剩余的毫秒数
        var hours=Math.floor(leave1/(3600*1000)) ;
        //计算相差分钟数
        var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
        var minutes=Math.floor(leave2/(60*1000));
        //计算相差秒数
        var leave3=leave2%(60*1000) ;     //计算分钟数后剩余的毫秒数
        var seconds=Math.round(leave3/1000);

//        $('#tempsaying').html('我已经和主人度过了'+"<span style='color:red;'>"+days+"</span>"+'天'+"<span style='color:red;'>"+hours+"</span>"+'时'+"<span style='color:red;'>"+minutes+"</span>"+'分'+"<span style='color:red;'>"+seconds+"</span>"+'秒咯,么么哒...');
        mytext = '我已经和主人度过了'+"<span style='color:red;'>"+days+"</span>"+'天'+"<span style='color:red;'>"+hours+"</span>"+'时'+"<span style='color:red;'>"+minutes+"</span>"+'分'+"<span style='color:red;'>"+seconds+"</span>"+'秒咯,么么哒...';
        typeit($("#tempsaying"),mytext);
        $('#showmenu').hide();
        $('#getmenu').show();
    });
    //点击网站导航
    $('#wccguide').click(function(){
//        $('#tempsaying').text('主人还没设置该功能哦!');
        mytext = '<ul>' +
            '<li><a href="/" style="letter-space:2px;">Home</a></li><li><a href="/index/" style="letter-space:2px;">Blog</a></li>' +
            '<li><a href="/wiki/" style="letter-space:2px;">Wiki</a></li><li><a href="/pic/" style="letter-space:2px;">Picture</a></li>' +
            '<li><a href="/about/" style="letter-space:2px;">About</a></li><li><a href="/info/" style="letter-space:2px;">Internet News</a></li>' +
            '</ul>';
        typeit($("#tempsaying"),mytext);
        $('#showmenu').hide();
        $('#getmenu').show();
    });
    //点击技术搜索
    $('#search_chat').click(function(){
//        $('#tempsaying').text('主人还没设置该功能哦!');
        mytext = '主人还没设置该功能哦!';
        typeit($("#tempsaying"),mytext);
        $('#showmenu').hide();
        $('#getmenu').show();
    });
    //点击吃点零食
    $('#foods').click(function(){
        mytext = '准备干什么呢？';
        typeit($("#tempsaying"),mytext);
        $('#food_list').show();
        //下面为了实现食物列表一列列逐个显示
        var food=null;
        for(var i=1;i<=4;i++){
            food=$('#food'+i);
            mytext=food.html();
            typeit(food,mytext);
        }
        $('#food_list li').show();
        $('#showmenu').hide();
        $('#getmenu').show();
        $('#food1').click(function () {
//            $('#tempsaying').text('梅子神马的，最好吃咯!');
            mytext = '梅子神马的，最好吃咯!';
            typeit($("#tempsaying"),mytext);
            $('#food_list').hide();
        });
        $('#food2').click(function () {
//            $('#tempsaying').text('吃了金坷垃，一刀能秒一万八!');
            mytext = '吃了金坷垃，一刀能秒一万八!';
            typeit($("#tempsaying"),mytext);
            $('#food_list').hide();
        });
        $('#food3').click(function () {
//            $('#tempsaying').text('这TM能喝???');
            mytext = '这TM能喝???';
            typeit($("#tempsaying"),mytext);
            $('#food_list').hide();
        });
        $('#food4').click(function () {
//            $('#tempsaying').text('好辣啊，你这个魂淡...');
            mytext = '好辣啊，你这个魂淡...';
            typeit($("#tempsaying"),mytext);
            $('#food_list').hide();
        });
    });
    //点击关闭Asuna
    $('#closeasuna').click(function(){
        $('#showmenu').hide();
//        $('#tempsaying').text('记得再叫我出来哦!');
        mytext = '记得再叫我出来时，请点击左上方<code>召唤Asuna</code>哦！';
        typeit($("#tempsaying"),mytext);
        setTimeout(function(){
            $('#float_asuna').fadeOut(2000);
            $('#callasuna').show();
//            clearInterval(circuTime);
        },1000);

    });


});
//放在上面会隐身，拿开重新现身
$('#asuna_pic').mouseover(function(){
    $(this).css('opacity','0.3');
//    $('#tempsaying').text('我会隐身哦!!!嘿嘿...');
    mytext = '我会隐身哦!!!嘿嘿...';
    typeit($("#tempsaying"),mytext);
    $(this).mouseout(function () {
        $(this).css('opacity','1.0');
//        $('#tempsaying').text('鼠标拿开我就现身咯!');
        mytext = '鼠标拿开我就现身咯!';
        typeit($("#tempsaying"),mytext);
    });
});
//右键阻止默认行为，且提示信息
$('#asuna_pic').bind('contextmenu',function(evt){
    evt.preventDefault();
    typeit($("#tempsaying"),'点我，伦家也不会高兴的啦!');
});
//点击打开Asuna
$('#callasuna').click(function(){
    $('#callasuna').hide();
    $('#float_asuna').fadeIn(1500);
//    $('#tempsaying').text('我又回来咯!');
    mytext = '我又回来咯!';
    typeit($("#tempsaying"),mytext);
    $('#getmenu').show();
});
//间隔15秒显示一个首页text
var show_text=['好久没有休息啦，注意休息哦！','咳咳，有什么可以帮您的吗？','好好学习，天天向上哦!','累了？进入menu，听点音乐哦!','>>.......'];
var i=0;
var circuTime=setInterval(function () {
//    $('#tempsaying').text(show_text[i]);
    typeit($("#tempsaying"),show_text[i]);
    $('#showmenu').hide();
    $('#food_list').hide();
    $('#getmenu').show();
    i++;
    if(i==show_text.length){
        i=0;
    }
},15000);

//下面实现html标签中字体的逐个显示
//var t;
//var it=0;
//function typeit() {
//    $("#tempsaying").append(mytext.charAt(it));
//    if (it < mytext.length - 1) {
//        it++;
//        t = setTimeout("typeit()", 50);
//    }else{
//        it=0;
//        clearTimeout(t);
//    }
//
//}

function typeit(obj,mycontent) {
    var progress = 0;
    obj.html('');//将内容清空
    var timer = setInterval(function () {
        var current = mycontent.substr(progress, 1);
        if (current == '<') {
            progress = mycontent.indexOf('>', progress) + 1;
        } else {
            progress++;
        }
        obj.html(mycontent.substring(0, progress));
        if (progress >= mycontent.length) {
            clearInterval(timer);
        }
    }, 50);
}

//下面实现拖拽功能
drag(document.getElementById('float_asuna'));
function drag(element) {

        element.addEventListener('mousedown', function (evt) {

            var _this = this;//其实就是this.elements[i]对象
            var diffX = evt.clientX - _this.offsetLeft;
            var diffY = evt.clientY - _this.offsetTop;
            if (evt.target.tagName == 'DIV') {
                document.addEventListener('mousemove', move, false);
                document.addEventListener('mouseup', up, false);

            } else {
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', up);

            }

            function move(evt) {

                var left = evt.clientX - diffX;
                var top = evt.clientY - diffY;
                if (left < 0) {
                    left = 0
                } else if (left > document.documentElement.clientWidth - _this.offsetWidth) {
                    left = document.documentElement.clientWidth - _this.offsetWidth;
                }
//                if (top < 0) {
//                    top = 0
//                } else if (top > document.documentElement.clientHeight - _this.offsetHeight) {
//                    top = document.documentElement.clientHeight - _this.offsetHeight;
//                }
                _this.style.left = left + 'px';
                _this.style.top = top + 'px';

            }

            function up() {
                this.removeEventListener('mousemove', move);
                this.onmouseup = null;

            }


        }, false);

}
//实现物体居中
function center(element,width,height){
	var top=(document.documentElement.clientHeight-height)/2;
	var left=(document.documentElement.clientWidth-width)/2;
    element.style.top=top+'px';
    element.style.left=left+'px';

}
//获取Style,返回的值为字符串，需要的话，转为需要的类型，如:parseInt()...
function getStyle(element,attr){
	if(typeof window.getComputedStyle!=undefined){
		var value=window.getComputedStyle(element,null)[attr];
	}
	return value;
}
//设置动画
function animate(el,obj){//其中attr是需要获取的style属性，step是移动的步长，t是间隔时间
		var element=el;
		 //可选，'left'和'top'，不传递，默认为left,若为width或height，则是调整css的宽高属性
		var attr=obj['attr']=='x'?'left':obj['attr']=='y'?'top':
		obj['attr']=='w'?'width':obj['attr']=='h'?'height':
		obj['attr']=='o'?'opacity':obj['attr']!=undefined?obj['attr']:'left';
		//可选，开始点，不传，默认为元素css值,若属性值为opacity，则取其浮点值，getStyle返回的是字符串，必须要转化为数字类型
		var start=obj['start']!=undefined?obj['start']:
		attr=='opacity'?parseFloat(getStyle(element,attr))*100:parseInt(getStyle(element,attr));

		var step=obj['step']!=undefined?obj['step']:20;//默认每次执行10像素
		var t=obj['time']!=undefined?obj['time']:10;//可选，不传，默认为每50ms执行一下

		var alter=obj['alter'];
		var target=obj['target'];

		var mul=obj['mul'];

		if(alter!=undefined&&target==undefined){
			target=alter+start;
		}else if(alter==undefined&&target==undefined&&mul==undefined){
			throw new Error('alter and target must have one!!!')
		}

		var speed=obj['speed']!=undefined?obj['speed']:6;//缓冲的速度

		var type=obj['type']==0?'constant':obj['type']==1?'buffer':'buffer';//可选，0表示匀速，1表示缓冲

		if(start>target) step=-step;

		if(attr=='opacity'){
			element.style[attr]=parseInt(start)/100;
		}else{
			element.style[attr]=start+'px';
		}

		if(mul==undefined){
			var mul={};
			mul[attr]=target;
		}


		clearInterval(element.timer);
		element.timer=setInterval(function(){
			//设置所有动画完成标志
			var flag=true;
			for(var i in mul){
				attr=i=='x'?'left':i=='y'?'top':i=='w'?'width':i=='h'?'height':i=='o'?'opacity':i!=undefined?i:'left';
				target=mul[i];
				if(type=='buffer'){
					step=attr=='opacity'?(target-parseFloat(getStyle(element,attr))*100)/speed:(target-parseInt(getStyle(element,attr)))/speed;
					step=step<0?Math.floor(step):Math.ceil(step);
				}
				if(attr=='opacity'){

					if(step==0){
						setOpacity();

					}else if(step>0&&Math.abs(parseFloat(getStyle(element,attr))*100-target)<=step){
						setOpacity();

					}else if(step<0&&parseFloat(getStyle(element,attr))*100-target<Math.abs(step)){
						setOpacity();
					}else{
						var temp=parseFloat(getStyle(element,attr))*100;
						element.style[attr]=parseInt(temp+step)/100;

					}
					if(parseInt(target)!=parseInt(parseFloat(getStyle(element,attr))*100)) flag=false;

				}else{
					if(step==0){
						setTarget();

					}else if(step>0&&Math.abs(parseInt(getStyle(element,attr))-target)<=step){
						setTarget();

					}else if(step<0&&parseInt(getStyle(element,attr))-target<Math.abs(step)){
						setTarget();
					}else{
						element.style[attr]=parseInt(getStyle(element,attr))+step+'px';
					}

					if(parseInt(target)!=parseInt(getStyle(element,attr))) flag=false;
				}
				// alert(i);
				// document.getElementById('test').innerHTML+=i+'---'+parseInt(target)+'---'+parseInt(getStyle(element,attr))+'---'+flag+'<br />';
			}

			//若所有动画都执行完毕，则清理定时器，执行列队动画
			if(flag){
				clearInterval(element.timer);
				if(obj.fn!=undefined){//fn存在的话
					obj.fn();
				}
			}


		},t);
		function setTarget(){
			element.style[attr]=target+'px';

		}
		function setOpacity(){
			element.style.opacity=parseInt(target)/100;
			clearInterval(element.timer);
			if(obj.fn!=undefined){
				obj.fn();
			}

		}

}
