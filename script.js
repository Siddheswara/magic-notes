//user adds note to local
shownotes()
button=document.getElementById('addBtn')

button.addEventListener('click',()=>{
   let addTxt=document.getElementById('addTxt')
   if(addTxt.textLength==0){
       alert("madarchod")
   }
   else{
    let notes=localStorage.getItem("note")
    if(notes==null){
        notesObj=[]
       
    }
    else{
        notesObj=JSON.parse(notes)
    }
    notesObj.push(addTxt.value)
    localStorage.setItem("note",JSON.stringify(notesObj))
    addTxt.value=""
 shownotes();}
   
    
})
function shownotes(){
    let notes=localStorage.getItem("note")
    if(notes==null){
        notesObj=[]
       
    }
    else{
        notesObj=JSON.parse(notes)
    }
    let html=""
    notesObj.forEach((element,index) => {
        html+=   `
        <div id="notes" class="row container-fluid">
        <div class="card my-2 mx-2 noteCard" style="width: 23rem;">

            <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
                <p class="card-text">${element}</p>
                <button id=${index} onclick="delnote(this.id)"  class="btn btn-primary">Delete note</button>
            </div>
        </div>
    </div>`;
});
let notesElem=document.getElementById('notes')
   if(notesObj.length!=0){
       notesElem.innerHTML=html
   }

}
 function delnote(index){
     console.log("I am deleting node")
     let notes=localStorage.getItem("note")
    if(notes==null){
        notesObj=[]
       
    }
    else{
        notesObj=JSON.parse(notes)
    }
    notesObj.splice(index,1);
    localStorage.setItem("note",JSON.stringify(notesObj));
    shownotes()

 }
 search=document.getElementById("searchTxt")
 search.addEventListener("input",()=>{
     let inputVal=search.value
    //  console.log("fired")
     cards=document.getElementsByClassName("noteCard")
     Array.from(cards).forEach(element => {
         let cardtxt=element.getElementsByTagName("p")[0].innerText.toLowerCase();
         if(cardtxt.includes(inputVal)){
             element.style.display="block"
         }
         else{
            element.style.display="none"
        }
     });
 })
 // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}