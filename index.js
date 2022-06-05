console.log("Hello, I am Here");

let toggle = document.createElement("div");
toggle.setAttribute("class" , "addtoggle");

let ele = document.getElementById("toggle");
toggle.innerHTML = `<ul>
<li><a href="#">Products</a></li>
<li><a href="#">Pricing</a></li>
<li><a href="#">documentation</a></li>
</ul>`;

let search = true;

ele.addEventListener('click' , function(){
    if(search){
        ele.appendChild(toggle);
        search = false;
    }
    else{
        toggle.remove();
        search = true;
    }
})