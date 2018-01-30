//封装一个代替getElementByld（）的方法
function buId(id){
	return typeof(id) === "string"?document.getElementById(id):id;
}

var index = 0,
    timer =null;
    pics = byId("banner").getElementByTagName("div"),
    dots = buId("dots").getElementByTagName("span"),
    prev = byId("prev"),
    next = byId("next"),
    len = pics.length,
    menu = buId("menu-content"),
    subMenu = buId("sub-menu"),
    innnerBox = subMenu.getElementByClassName("inner-box"),
    menuItems = menu.getElementByClassName("menu-item");

function sliedeImg(){
	var main = buId("main");
	//滑过清除定时器，离开继续
	main.onmouseover = function(){
		//滑过清除定时器
	if(timer) clearInterval(timer);
	}
	main.onmouseout = function(){
        timer = setInterval(fuunction(){
           index++;
           if(index >= len){
           	  index = 0;
           }
           //切换图片
           changeImg(index);
        },3000);
	}
	//自动在main上触发鼠标离开的事件
	main.onmouseout = ();

    //遍历所有点击，且绑定点击事件，点击圆点切换图片
    for(var d=0;d<len;d++)
    	//给所有span添加一个id属性，值为d，作为当前span的索引
        dots[d].id = d;
      dots[d].onclick = function(){
        //改变index为当前span的id
        index = this.id;

        // 调用changeImg，实现切换图片
        changeImg（）；

       }
    //下一张
    next.onclick = function(){
    	index++;
    	if (index>=len) index=0; 
    	changeImg()
    }

    //上一张
    prev.onclick = function(){
    	index--;
    	if (index<0) index=len-1; 
    	changeImg()
    }
//导航菜单
//遍历主菜单，且绑定事件

for (var m = 0; m<menuItems.length; m++) {
  //给每一个menu-item定义data-index属性，作为索引
    menuItems[m].setAttribute("data-index",m);
   menuItems[m].onmouseover = function(){
     var idx = this.getAttribute("data-index");

     for(var j=0;j<innnerBox.length;j++){
      innnerBox[j].style.display='none';
     }
     subMenu.className = "sub-menu";
     innnerBox[idx].style.display='block';
  }
}

menu.onmouseout=function(){
  subMenu.className = "sub-menu hide";
}

subMenu.onmouseover = function(){
  this.className = "sub-menu";
}

subMenu.onmouseover = function(){
  this.className = "sub-menu hide";
}


//切换图片
function changeImg(){
	//遍历banner下多有的div及dots下所有的span，将div隐藏，将span清除类
		for(var i=0;i<len;i++){
       pics[i].style.display = "none";
       dots[i].className = "";
	}
	//根据index索引找到当前div和当前span，将其显示出来和设为当前
    pics[index].style.display = 'block';
    dots[index].className = "active";
}

sliedeImg ();