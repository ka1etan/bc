var time = 0;
var running = 0;

function buttons()
{
 var buttonStartPause = document.getElementById("startPause")
 buttonStartPause.addEventListener("click", startPause)

 var buttonReset = document.getElementById("reset")
 buttonReset.addEventListener("click", reset)
}

function startPause()
{
    if(running == 0)
    {
		running = 1;
		increment();
		document.getElementById("startPause").innerHTML = "Pause";
    }else
    {
		running = 0;
		document.getElementById("startPause").innerHTML = "Resume";
	}
}

function reset()
{
	running = 0;
	time = 0;
	document.getElementById("output").innerHTML = "00:00:00";
	document.getElementById("startPause").innerHTML = "Start";
}

function increment()
{
	if(running == 1){
		setTimeout(function(){
			time++;
			var mins = Math.floor(time / 10 / 60);
			if(mins <= 9){
				mins = "0" + mins;
			}
			var secs = Math.floor(time / 10 % 60 );
			if(secs <= 9){
				secs = "0" + secs;
				
			}
			var tenths = Math.floor(time % 10);
			if(tenths <= 9){
				tenths = "0" + tenths;
			}
			document.getElementById("output").innerHTML = mins + ":" + secs + ":" + tenths;
			increment();
		}, 100);
	}
};

function main()
{
    buttons()
}

window.addEventListener("load", main)