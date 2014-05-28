/*
 *  功能：获取某个标签下的类名为 "XXX" 的标签
 *  
 *
 */
function getClass(element, eleClassName){
	var arr = [];
	var ele = element.getElementsByTagName("*");
	var len = ele.length;
	for (var i = 0; i < len; i++){
		if (ele[i].className == eleClassName) {
			arr.push(ele[i]);
		}
	};
	return arr;
}

/*
 *  功能：Tab切换功能
 *  
 *
 */
 function tab1(length){
 	for (var i = 0; i < length; i++){
		btn[i].onclick = function(){
			for (var i = 0; i < len; i++){
				if (this == btn[i]) {
					this.className = "select";
					divs[i].className = "show";
				} else {
					btn[i].className = "";
					divs[i].className = "";
				};
			};
		}
	}
 }
 function tab2(length){
 	for (var i = 0; i < length; i++){
		btn[i].onclick = function(){
			for (var i = 0; i < len; i++){
				if (this == btn[i]) {
					this.className = "select";
					divs[i].className = "show";
				} else {
					btn[i].className = "";
					divs[i].className = "";
				};
			};
		}
	}
 }

/*
 * 功能： 为不足两位的数字添加前导0
 *
 *
 */
 function changeTime(num){
 	if (num < 10) {
 		num = "0" + num;
 	};
 }

/*
 * 功能： 获取属性值
 * 参数： element——为变量名；proName——为属性名
 * 兼容IE浏览器
 */
function getStyle(element, proName){
	var attr;
	if(!document.defaultView){
 		attr = element.currentStyle[proName];
 	}	else {
 		attr = document.defaultView.getComputedStyle(element)[proName];
 	}
 	return attr;
}

/*
 * 功能： 彩票31选7或者其他
 * 参数：total——要生成的随机数总数； num——目标要的随机数的数量
 *
 */
 function ranNum(total, num){
 	var arr = [];
	var arrNum = [];			// 要选取的数在 1-31 之间。 生成的数组为 0-30 ，所有数组arr[i]+1
	for (var i = 0; i < total; i++) {
		arr[i] = i+1;    		 
	};
	for (var i = 0; i < num; i++) {
		// for (var j = 0; j < arr.length; j++) {
		// 	arr[j].index = j
		// };
		var ranNum = Math.floor(Math.random()*arr.length);  // ranNum取到的值为存储数组的下标
		arrNum[i] = arr[ranNum];
		console.log("生成的数组为"+arr);
		console.log("生成的随机下标值为"+ranNum);
		console.log(arrNum);
		arr.splice(ranNum, 1);					//  选出一个数组，删除掉，（splice（选中的数组下标，删除的数量））
	};
	return arrNum;
 }

/*
 * 功能：事件侦听器——兼容FF和IE
 *
 *
 */
function addEventHandler(obj, eventName, handler){
	if (document.attachEvent) {
		obj.attachEvent("on" + eventName, handler);
	} else if (document.addEventListener) {
		obj.addEventListener(eventName, handler, false);
	};
}
/*
 * 功能：事件目标对象检测——兼容FF和IE
 *
 *
 */
function getE(e) {
	var evt = e || window.event;
	return evt;
}

/*
 * 功能：事件目标对象检测——兼容FF和IE
 *
 *
 */
function getTarget(e){
	if (e) {
		var evt = e.target;
	}else if(window.event){
		var evt = window.event.srcElement;
	};
	return evt;
}

/*
 * 功能：判断鼠标滚轮向上或者是向下滚动
 * 兼容 FF 和 IE
 *
 */
var scrollFunc = function(e){
	var event = e || window.event;
	if (event.wheelDelta) {				 // 兼容IE Chrom  opera...
		console.log(event.wheelDelta);		
	} else if (event.detail) {			 // 只兼容 FF
		console.log(event.detail);
	}
}
if(document.addEventListener){ 
    document.addEventListener('DOMMouseScroll',scrollFunc,false); 		// 兼容FF
}
window.onmousewheel= scrollFunc;		// 兼容除FF之外的浏览器





