
let myLeads = []
let saved = document.getElementById("ull")
let listItems=""
const inputEl = document.getElementById("text-el")
const saveBtn = document.getElementById("input-btn")
const delEl=document.getElementById("del-btn")
let leadsFromLocalStorage=JSON.parse(localStorage.getItem("MyLeads"))
if(leadsFromLocalStorage){
  myLeads=leadsFromLocalStorage
  sadata(myLeads)
}
function sadata(leads){ 
  let listItems="" 
for (let i = 0; i < leads.length; i++) {
    listItems+= `<li>
    <a target='_blank' href='${leads[i]}'>${leads[i]} </a>
    </li> `
}
saved.innerHTML=listItems
}

delEl.addEventListener('dblclick',function(){
  localStorage.clear()
  myLeads=[]
  sadata(myLeads) 
})


saveBtn.addEventListener('click', function() {
  myLeads.push(inputEl.value)
  inputEl.value=""
localStorage.setItem("MyLeads",JSON.stringify(myLeads))
  
sadata(myLeads)
console.log(localStorage.getItem("MyLeads"))
})
