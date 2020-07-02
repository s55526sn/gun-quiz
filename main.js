document.getElementById('result');
let que = document.getElementById("question");
let logo = document.getElementById("logo");
let maru = document.getElementById("maru");
let batsu = document.getElementById("batsu");
var count=10;
var score=0;
var timer = function(){
	if (count>0){
		count=count-1;
		result.textContent = "スコア:"+score+"|時間:"+count+"秒";
	}else{
		result.style.color = "red";
		result.textContent = "スコア:"+score+"|終了";
	}
}
setInterval(timer,1000);
let num = 0;
let max = 10;
let name = new Array(max);
name = ["FN57","P9","P90","M4 GS","M762","C7E","AR33","G36C","F2","AUG A2"];
let seikai = new Array(max);
seikai = [1,1,0,0,0,1,0,1,1,0];
maru.addEventListener("click",()=>{
	console.log("maru");
	num=num+1;
	if (num < max){
		if (seikai[num] == 	0){
			console.log("正解");
			score=score+1;
		}else{
			console.log("不正解");
		}
		question.textContent = "問題"+(num+1)+" "+name[num];
		logo.src = "img/logo"+num+".jpg";
	}
});
batsu.addEventListener("click",()=>{
	console.log("batsu");
	num++;
	if (num < max){
		if (seikai[num] == 1){
			console.log("正解");
			score=score+1;
		}else{
			console.log("不正解");
		}
		question.textContent = "問題"+(num+1)+" "+name[num];
		logo.src = "img/logo"+num+".jpg";
	}
});
if (num==max){
		question.style.color="red";
		question.textContent="終了";
		count=0;
}