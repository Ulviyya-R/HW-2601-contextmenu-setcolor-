let lastContext;
window.oncontextmenu = function (event) {
  event.preventDefault();
  let div = document.createElement("div");
  lastContext ? lastContext.remove() : "null";
  div.style.width = "400px";
  //   div.style.height = "400px";
  div.style.backgroundColor = "white";
  div.style.borderRadius ="10px";
  div.style.boxShadow = "0 12px 35px rgba (0,0,0,0.1)";
  div.style.position = "fixed";
  div.style.top = `${event.clientY}px`;
  div.style.left = `${event.clientX}px`;
  document.body.prepend(div);
  lastContext = div;
  let ul = document.createElement("ul");
  div.prepend(ul);
  let text = [
    "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-download'></i>Download <hr style = 'margin-top:7px;'>",
      "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-regular fa-folder'></i>Show file location",
      "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-regular fa-thumbs-down'></i>Not a helpful suggestion",
      "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-trash-can'></i>Move a Trush",
      "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-circle-exclamation'></i>Report abuse",
      "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-copy'></i>Make a copy",
      "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-clock-rotate-left'></i>Manage version",
      "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-closed-captioning'></i>View caption tracks",
      "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-pen-to-square'></i>Rename <hr style = 'margin-top:7px;'>",
      "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-star'></i>Add to Started",
      "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-file-export'></i>Move to",
      "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-brands fa-google-drive'></i>Add shortcut to Drive",
      "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-sharp fa-solid fa-plus'></i>Add to workspace <i class='fa-solid fa-chevron-right' style='float:right; margin-right:15px;'></i>",
      "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-link'></i>Get Link",
      "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-user-plus'></i>Share",
      "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-maximize'></i>Open with <i class='fa-solid fa-chevron-right' style='float:right; margin-right:15px;'></i> <hr style = 'margin-top:7px;'> ",
      "<i style='margin-right:25px;margin-left:25px;font-size:18px;' class='fa-solid fa-eye' ></i>Setcolor",
      
    ];
    for (let i = 0; i < text.length; i++) {
      
      let li = document.createElement("li");
      li.className = "context";
      li.style.listStyle = "none";
      li.style.cursor ="pointer";
      li.innerHTML = text[i];
      document.body.append(li);
      let z =text.indexOff
      ul.prepend(li);
    }
    
    let div2 = document.createElement("div");
    div2.className="forinput";
    let inp = document.createElement("input");
    inp.type ="text";
    inp.borderRadius ="10px"
    div2.prepend(inp);
    
    
    
    let box;
    ul.firstChild.onclick = function(event){
      document.body.append(div2);
      div2.style.width ="250px";
      div2.style.height ="200px";
      div2.style.backgroundColor = "white";
      div2.style.borderRadius = "20px";
      div2.style.display = "flex";
      div2.style.justifyContent = "center";
      div2.style.alignItems = "center";
      div2.style.position = "fixed";
      div2.style.top = `${event.clientY}px`;
    div2.style.left = `${event.clientX}px`;
    box = div2; 
  }

  
  window.onclick = function () {
      lastContext ? lastContext.remove() : "null";
      
    };


    inp.onkeydown = function (event) {
      let color = inp.value;
      if (event.keyCode === 13) {
        document.body.style.backgroundColor = color;
        inp.value = " ";
      }
    };
   
};


