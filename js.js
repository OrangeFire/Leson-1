"use strict"



function e(){
	var name=document.getElementById("name").value;
    var day=document.getElementById("day").value;
	var month=document.getElementById("month").value;
	var year=document.getElementById("year").value;
	if (day==0 && month==0 && year==0 && day==0 && month==0 || name=='' || day>31 || month>12 || year>=2016){
		alert("Неверние данные");
	}else {
	var age=2016-year;
	month=12*age;
	var week=age*52;
	day=(365*age)+(age/4);
	day=day-(day%1);
	var hour=day*24;
	var min=hour*60;
	document.getElementById("t1").innerHTML=name;	
	document.getElementById("t2").innerHTML=age;	
	document.getElementById("t3").innerHTML=month;	
	document.getElementById("t4").innerHTML=week;
    document.getElementById("t5").innerHTML=day;	
    document.getElementById("t6").innerHTML=hour;	
	document.getElementById("t7").innerHTML=min;	
	}
}
