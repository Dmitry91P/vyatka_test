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
arr.forEach(el => el.addEventListener("click", function(){
  create_shadow(document.querySelector("body"), "shadow_window");
  create_shadow(document.querySelector(".shadow_window"),"place");
  create_shadow(document.querySelector(".shadow_window"), "shadow");
  create_shadow(document.querySelector(".place"),"place_text");
  create_shadow(document.querySelector(".place"),"place_img");
  create_shadow(document.querySelector(".place"),"close");
  add_place(el.id);
  document.querySelector(".shadow_window").style.display = "flex";
  document.querySelector(".close").addEventListener("click", function(){
   document.querySelector(".shadow_window").remove()
  })
})) 
function create_shadow(parent, param){
   new_tag = document.createElement("div");
   new_tag.classList.add(param)
   parent.prepend(new_tag)
   if(param == "close"){
     new_tag.innerHTML = "&#10006;"
   }
  }
  function add_place(id_place){
    document.querySelector(".place_img").style.backgroundImage = places_img[id_place];
    document.querySelector(".place_text").innerHTML = places[id_place]
    if( id_place == "pigemsky"){
      document.querySelector(".place_text").style.overflowY = "scroll"
    }
  }
  function slider_header(step = 1){
  setTimeout(change_header, 8000, step)
  }
   function change_header(step){
   
  
  document.querySelector(".photo").style.backgroundImage = head[step];
   step++ 
   if(step == 6){
      step = 0;
    }
    
    slider_header(step)
   }