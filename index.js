
let myLeads = []
let saved = document.getElementById("ull")
let listItems=""
const inputEl = document.getElementById("text-el")
const saveBtn = document.getElementById("input-btn")

saveBtn.addEventListener('click', function() {
  myLeads.push(inputEl.value)
  console.log(myLeads)
  inputEl.value=""
  
sadata()
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
localStorage.setItem("myleads"+myLeads[i])