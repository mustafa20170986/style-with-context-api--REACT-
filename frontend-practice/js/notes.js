if(localStorage.getItem('islogin') !== "true"){ //if the status is fals ethe redirect to the 
window.location.href=index.html
}

const notecontainer=document.getElementById('notecontainer')

const notes=JSON.parsre(localStorage.getItem("note")) || []

if(notes.length===0){
    notecontainer.innerHTML="<p> no notes available </p>"
} else{
    notes.forEach((note,index)=>{
        const div=document.getElementById('div')
div.textContent=`${index+1}-${note}`
notecontainer.appendchild(div)
    })
}

const logoutbutton =document.getElementById('logout')
logoutbutton.addEventListener('click',()=>{
    localStorage.removeItem('islogin')
    window.location.href='index.html'
})
