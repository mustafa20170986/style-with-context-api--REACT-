if(location.getItem('islogin')!=="true"){
    window.location.href=index.html
}

const savebtn =document.getElementById("save")
savebtn.addEventListener('click',()=>{
    const text=document.getElementById('txt').value.trim()
    if(text==="") return alert("note cannot be empty")

        const notes =JSON.parse(localStorage.getItem("notes"))||[]
        notes.push(text)
        localStorage.setItem("notes",JSON.stringify(notes))

        alert('notes save')
        window.location.href='notes.html'
})