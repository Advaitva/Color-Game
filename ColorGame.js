var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var n=6;
easy.addEventListener("click",function(){
	n=3;
	btn1.textContent="New Colors";
	easy.classList.add("selected");
	hard.classList.remove("selected");
	messageDisplay.textContent="";
	for (var i = 3; i < 6; i++) {
		squares[i].style.display="none";
	}
	colors=getColors(n);
	h1.style.background='steelblue';
	selectedColor=selectColor();
	colorDisplay.textContent=selectedColor;
	for (var i = 2 ;i >= 0; i--) {
		squares[i].style.backgroundColor=colors[i];
	}
})
hard.addEventListener("click",function(){
	n=6;
	btn1.textContent="New Colors";
	hard.classList.add("selected");
	easy.classList.remove("selected");
	messageDisplay.textContent="";
	for (var i = 3; i < 6; i++) 
		squares[i].style.display="block";
	colors=getColors(n);
	h1.style.background='steelblue';
	selectedColor=selectColor();
	colorDisplay.textContent=selectedColor;
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor=colors[i];
	}
})
var colors=getColors(n);
var squares=document.querySelectorAll(".square");
var success=document.getElementById("success");
var selectedColor=selectColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.getElementById("messageDisplay");
var h1=document.querySelector("h1");
var btn1=document.getElementById("wish");
colorDisplay.textContent=selectedColor;


btn1.addEventListener("click",function tempEvent(){
	btn1.textContent="New Colors";
	colors=getColors(n);
	h1.style.background='steelblue';
	selectedColor=selectColor();
	colorDisplay.textContent=selectedColor;
	messageDisplay.textContent="";
	for (var i = squares.length - 1; i >= 0; i--) {
		squares[i].style.backgroundColor=colors[i];
	}
})



for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		if(this.style.backgroundColor===selectedColor)
		{
			messageDisplay.textContent="Correct :)";
			h1.style.background=selectedColor;
			btn1.textContent="Play Again?";
			for (var j = squares.length - 1; j >= 0; j--) {
				squares[j].style.backgroundColor=selectedColor;
			}
		}
		else
		{
			this.style.background='#232323';
			messageDisplay.textContent="Try Again :(";
		}

		})	;
}

function selectColor()
{
	var colIndex=Math.floor(Math.random()*colors.length);
	return colors[colIndex];
}

function getColors(colNum)
{
	var colorList=[];
	for(var i=0;i<colNum;i++)
	{
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		var tempCol="rgb("+r+", "+g+", "+b+")";
		colorList.push(tempCol);
	}
	return colorList;
}