# lab-3-TAYOWORLD
lab-3-TAYOWORLD created by GitHub Classroom

In lab 3 we worked on using the comand mouseX in p5.js 

I had to creat a sprite that I called " CartoonT " 
- function CartoonT (){
  rect(50,50,100)
  fill("white")
  ellipse(80,80,100)
  fill ("black")
  ellipse(80,80,40)
}

In first part of the lab I made CartoonT change in size and color when the mouse moves around the canvas 
- if (mouseX > 100){
  scale(2);
} else if (mouseY > 300){
  fill("gold"); 
}else mouseX >= 100 && mouseX < 200
  scale(2);
  
 The second part I turned my if statement into a function which was called " IFS " 
 - function IFS (){ 
  if (mouseX > 100){
  scale(2);
} else if (mouseY > 300){
  fill("gold"); 
}else mouseX >= 100 && mouseX < 200
  scale(2);
}

The last part I added "scaleKnob" to my prevest function "IFS" 
- function IFS (scaleKnob){ 
  scale(scaleKnob)
  if (mouseX > 100){
  scale(2);
} else if (mouseY > 300){
  fill("gold"); 
}else mouseX >= 100 && mouseX < 200
  scale(2);
}

