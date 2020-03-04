			const c = document.getElementById("myCanvas").getContext("2d");
			//add another c var (letterJ)
			window.onload = function{
				//firstLetter();
				//shape();
				c.beginPath();
				c.lineWidth = 10;
				c.strokeStyle = 'red';
				c.moveTo(10,10);
				c.lineTo(50,10);
				c.lineTo(50, 5);
				c.lineTo(45, 5);
				c.closePath();				
				
				
			}
			
			//c.fillStyle = "blue";
			firstLetter();
			shape();
			
			function firstLetter(){
				c.beginPath();
				c.lineWidth = 10;
				c.strokeStyle = 'red';
				c.moveTo(10,10);
				c.lineTo(50,10);
				c.lineTo(50, 5);
				c.lineTo(45, 5);
				c.closePath();
				
			}
			
			function shape(){
				c.moveTo(100, 100);
				c.lineTo(80, 100);
				c.lineTo(80, 120);
				c.lineTo(100, 120);
				c.lineTo(100, 100);
				c.fillStyle = "green";
			}
			
			
			firstLetter();
			shape();
		