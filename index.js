
let myLeads = []
let saved = document.getElementById("ull")
let listItems=""
const inputEl = document.getElementById("text-el")
const saveBtn = document.getElementById("input-btn")
localStorage.clear()

let leadsFromLocalStorage=JSON.parse(localStorage.getItem("MyLeads"))
console.log(leadsFromLocalStorage)
saveBtn.addEventListener('click', function() {
  myLeads.push(inputEl.value)
  inputEl.value=""
localStorage.setItem("MyLeads",JSON.stringify(myLeads))
  
sadata()
console.log(localStorage.getItem("MyLeads"))
})
function sadata(){ 
  let listItems="" 
for (let i = 0; i < myLeads.length; i++) {
    listItems+= `<li>
    <a target='_blank' href='${myLeads[i]}'>${myLeads[i]} </a>
    </li> `
}
saved.innerHTML=listItems
}
