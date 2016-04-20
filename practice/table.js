<!DOCTYPE html>
<html>
 <head>
  <title> new document </title>  
  <meta http-equiv="Content-Type" content="text/html; charset=gbk"/>   
  <script type="text/javascript"> 
  
      window.onload = function(){
                  
     // 鼠标移动改变背景,可以通过给每行绑定鼠标移上事件和鼠标移除事件来改变所在行背景色。
	 bgColor();
	 }
     function bgColor(){
        var trs=document.getElementsByTagName("tr");
    	for(var i=0;i<trs.length;i++){
            //鼠标移上事件
    	    trs[i].onmouseover=function(){
             this.style.backgroundColor="#f2f2f2";   
    	    }
            //鼠标移除事件
            trs[i].onmouseout=function(){
             this.style.backgroundColor="#fff";   
            }
		}
     }
      // 编写一个函数，供添加按钮调用，动态在表格的最后一行添加子节点；
     function addOne(){
         var table=document.getElementById("table");
         var tr=document.createElement("tr");
         var xh =document.createElement("td");
         var xm =document.createElement("td");
         var del=document.createElement("td");
         
         xh.innerHTML ="<input type='text' placeholder='请输入学号...'/>";
         xm.innerHTML ="<input type='text' placeholder='请输入学号...'/>";
         del.innerHTML="<a href='javascript:;' onClick='del(this)'>删除</a>";
         
         tr.appendChild(xh);
         tr.appendChild(xm);
         tr.appendChild(del);
         table.appendChild(tr);
         
         bgColor();
     }
    		
   	 
     // 创建删除函数
     function del(obj){
         var tr=obj.parentNode.parentNode;
         tr.parentNode.removeChild(tr);
              
     }


  </script> 
 </head> 
 <body> 
	   <table border="1" width="50%" id="table">
	   <tr>
		<th>学号</th>
		<th>姓名</th>
		<th>操作</th>
	   </tr>  

	   <tr>
		<td>xh001</td>
		<td>王小明</td>
		<td><a href="javascript:;" onClick="del(this)">删除</a></td>   <!--在删除按钮上添加点击事件  -->
	   </tr>

	   <tr>
		<td>xh002</td>
		<td>刘小芳</td>
		<td><a href="javascript:;" onClick="del(this)">删除</a></td>   <!--在删除按钮上添加点击事件  -->
	   </tr>  

	   </table>
	   <input type="button" value="添加一行" onClick="addOne()" />   <!--在添加按钮上添加点击事件  -->
 </body>
</html>