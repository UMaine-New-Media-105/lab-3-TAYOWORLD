function setup() {
  createCanvas(800,800);
}

function draw() {
  background(220);
  
 //if (mouseX > 100){
  //scale(2);
 //} else if (mouseY > 300){
  //fill("gold"); 
 //}else mouseX >= 100 && mouseX < 200
  //scale(2);
  
  IFS(1.1)
  CartoonT()
  
  
  // rect(50,50,100)
  //fill("white")
 // ellipse(80,80,100)
 // fill ("black")
  //ellipse(80,80,40)
   
  
}
function CartoonT (){
  rect(50,50,100)
  fill("white")
  ellipse(80,80,100)
  fill ("black")
  ellipse(80,80,40)
  
}

function IFS (scaleKnob){ 
  scale(scaleKnob)
  if (mouseX > 100){
  scale(2);
} else if (mouseY > 300){
  fill("gold"); 
}else mouseX >= 100 && mouseX < 200
  scale(2);
}
