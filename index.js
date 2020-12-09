var box = document.querySelector(".box");
var arr = Array.from(document.querySelectorAll(".row"));
document.querySelector(".right").addEventListener("click", function(){
    arr.forEach(el => {
        el.classList.add("slide_right")
    })
    setTimeout(right, 2000)
})
document.querySelector(".left").addEventListener("click", function(){
  
  
  arr.forEach(el => {
        el.classList.add("slide_left")
       
    })
    setTimeout(left, 2000)
  });
function right (){
  box.append(arr[0]);
  arr.push(arr[0]);
  arr.splice(0,1);
  arr.forEach(el => {
    el.classList.remove("slide_right")
})
}
function left (){
   box.prepend(arr[4]);  
   arr.unshift(arr[4]); 
   arr.splice(5,1);
   arr.forEach(el => {
    el.classList.remove("slide_left")
   
})
}
 
