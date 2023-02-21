let myLeads=[]
const inputEl=document.getElementById("text-el")

const saveBtn=document.getElementById("input-btn")


saveBtn.addEventListener('click',function(){
myLeads.push(inputEl.value)
console.log(myLeads)
})
for(let i=0;i<myLeads.length;i++)
{
    console.log(myLeads[i].value)
}