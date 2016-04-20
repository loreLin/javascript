window.onload = initFrom;
var Run = false;//闰年标记

function initFrom() {
	for (var i=0;i<121;i++){
		document.getElementById("years").options[i+1]=new Option(i+1900);//从1900年开始，有121个年份，即到2020年
	}
	document.getElementById("years").seletedIndex=0;
	document.getElementById("months").seletedIndex=0;
	
	document.getElementById("years").onchange=populateMonths;
	document.getElementById("months").onchange=populateDays;
}

function populateMonths(){
	Run=false;
	var yearStr=this.options[this.selectedIndex].value;
	var theYear=parseInt(yearStr);
    
    //判断闰年
	if (theYear%4==0 && theYear%100!=0 || theYear%400==0) {
		Run=true;
    }
    else {
		Run=false;
    }
    
	populateDays();
}

function populateDays(){
	
	var monthDays=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	var currSquare=document.getElementById("months");
	var monthStr=currSquare.options[currSquare.selectedIndex].value;
	if(monthStr!=""){
		var theMonth=parseInt(monthStr);
	}
	if(Run){
		monthDays[1]=29;//闰年二月29天
	}
    
	document.getElementById("days").options.length=0;
    
	for(var i=0;i<monthDays[theMonth];i++){
		document.getElementById("days").options[i]=new Option(i+1);
	}
}