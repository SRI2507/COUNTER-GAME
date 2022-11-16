let count=0;
let countEl=document.getElementById("c-el");
let saveEl=document.getElementById("save-el");

function increase(){
   count += 1;
   countEl.textContent=count;
}
function save(){
    let countStr= count +  " - " ;
    saveEl.textContent += countStr;
    countEl.textContent=0;
    count=0;

}
console.log("let 's do game");