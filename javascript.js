 
let textarea=document.querySelector("textarea");
let editor_event=document.querySelector(".plus")
editor_event.addEventListener("click",add);
 
let updateLSdata=()=>{
    let text=document.querySelectorAll(".text");
     var notes_arr=[];
    text.forEach((element) => {
         return notes_arr.push(element.innerHTML);
    });
    localStorage.setItem("notes",JSON.stringify(notes_arr));
   
 
 }
  var notes_arr=[]
 var j=0;
function add(store_val=""){
     let value=textarea.value;
      if(j<notes_arr.length)
      {
     if(store_val!="")
     value=store_val;
     j++;
     }
    if(value.trim()==""){
        document.querySelector("textarea").placeholder="Please enter text !!!"
    }
    else {
      document.querySelector("textarea").placeholder="Enter your text"
 
    let add_text=document.querySelector(".add_text");
    add_text.innerHTML+=`<div class="showval">
    <div class="text">${value}</div>
    <span class="delete"><i class="fa-solid fa-trash-can"></i></span>
    <span class="edit"><i class="fa-solid fa-pencil"></i></i></span>
    </div>`
    document.querySelector("textarea").value="";
    updateLSdata();
    
    let del=document.querySelectorAll('.delete');
    for(i=0;i<del.length;i++){
        del[i].onclick=function(){
            this.parentNode.remove();
            updateLSdata();
        }
    }
    let edit=document.querySelectorAll('.edit');
     
    for(i=0;i<edit.length;i++){
         edit[i].onclick=function(){
            
            let text=this.parentNode.querySelector(".text").innerHTML;
            
            textarea.value=text;
            editor_event.classList.add("show");
            pencil=editor_event.nextElementSibling;
            pencil.classList.remove("pencil");

            pencil.onclick=()=>{
                let trim_val=textarea.value.trim();
                 j=1;
                if(trim_val=="" )
                {
                    document.querySelector("textarea").placeholder="Please enter text !!!"
                }
                else{ 
                this.parentNode.querySelector(".text").innerHTML=textarea.value;
                editor_event.classList.remove("show");
                pencil.classList.add("pencil");
                document.querySelector("textarea").value="";
                updateLSdata();
                
                }
            }

             }
        }
    }
}
 if(localStorage.getItem("notes")!=null)
 {
 var notes_arr=JSON.parse(localStorage.getItem("notes"));
if(notes_arr)
{
    notes_arr.forEach((element)=>{
        
        add(element);
        
    })
}
 }
else{
    localStorage.setItem("notes",JSON.stringify([]));
}


