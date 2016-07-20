Date.prototype.format =function(format)
{
    var o = {
            "M+" : this.getMonth()+1, //month
            "d+" : this.getDate(), //day
            "h+" : this.getHours(), //hour
            "m+" : this.getMinutes(), //minute
            "s+" : this.getSeconds(), //second
            
    };
	var day=this.getDay();  
    var arr=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];  
    if(format=="week"){
	  return arr[day];
	} 
	/*
	var a = RegExp.$1,
	b = this.getFullYear()+"";
	c = format.replace(a,b);
    d = c.substr(4- RegExp.$1.length);
	*/
    if(/(y+)/.test(format))
    {   
        format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4- RegExp.$1.length));
    }
    for(var k in o)
    {
        if(new RegExp("("+ k +")").test(format))
        {
            format = format.replace(RegExp.$1,RegExp.$1.length==1? o[k] :("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
};

setInterval(function(){
    var time = new Date().format("hh:mm:ss");
    var date = new Date().format("yyyy-MM-dd");
	var week = new Date().format("week");
    document.getElementById("Time").innerHTML=time;
    document.getElementById("Date").innerHTML=date;
	document.getElementById("week").innerHTML=week;
},1000);

