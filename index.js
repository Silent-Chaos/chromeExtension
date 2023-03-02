
let myLeads = []
let saved = document.getElementById("ull")
let listItems=""
const inputEl = document.getElementById("text-el")
const saveBtn = document.getElementById("input-btn")
const delEl=document.getElementById("del-btn")
const tabBtn=document.getElementById("tab-btn")
let leadsFromLocalStorage=JSON.parse(localStorage.getItem("MyLeads"))
if(leadsFromLocalStorage){
  myLeads=leadsFromLocalStorage
  sadata(myLeads)
}

const tabs = [
  {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]


tabBtn.addEventListener('click',function(){
    console.log(tabs[0].url)
})




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
