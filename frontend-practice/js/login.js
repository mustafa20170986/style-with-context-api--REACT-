const btn =document.getElementById('loginbtn') //we select the login button 

const username =document.getElementById('username') //we select the usernmae feild 
const password =document.getElementById('passwordinput') //we select the password feild 

btn.addEventListener('click',()=>{ //we added event listener here 
    const us= username.value.trim() //to remove space 
    const ps=password.value.trim()
    if(us==='emu' && ps==='rrr'){ //fixed the password and username 
        localStorage.setItem('islogin','true') // make the login status true 
        window.location.href='notes.html' // redirect to the notes page 
    }
    else{
        alert('invcalid credentuials')
    }
})