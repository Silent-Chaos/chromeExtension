
let myLeads = ["Asdasdasd","asdasdasd","asdasd"]
let saved = document.getElementById("ull")
let listItems=""
const inputEl = document.getElementById("text-el")
const saveBtn = document.getElementById("input-btn")

saveBtn.addEventListener('click', function() {
  myLeads.push(inputEl.value)
  console.log(myLeads)
  
  saved.innerHTML = "" // clear previous content
})
  for (let i = 0; i < myLeads.length; i++) {
    listItems+= "<li>" + myLeads[i] + "</li>" 
}
saved.innerHTML=listItems
