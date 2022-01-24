function setup() {
	createCanvas(1200, 485);
	
  }
  
  function draw() {
	  background(245, 234, 118);
	  
	  var h = hour()
	  var m = minute()
	  var s = second()
  
	  var y = 242;
	  var x = 970;
	  for(var total=0; total<s; total= total+1){
		  var diameter = (s-total) * 8;
		  strokeWeight(3);
		  stroke(150, total * 11,150);
		  ellipse(x,y, diameter, diameter);
		if (s==59){
		  print(m+1)
		}
	  }    
	x = 440;
	  for (total=0; total<m; total=total+1){
		var d = (m-total) * 8
		stroke(total * 11,150,100)
		strokeWeight(3);
		ellipse(x,y,d,d)
	  }
  
	x=100;
		for(total=0; total<h; total=total+1){
		var d = (h-total) * 8
		stroke(150,150, total * 10)
		strokeWeight(3);
		ellipse(x,y,d,d)
	  }
  }