const btn=document.getElementById('addfriend') //we select the add friend button 
const stats=document.getElementById('stat') //we select the status 
const rmv=document.getElementById('remove') // we select the remove  button 

let v=0; // a var for back or update the status .

btn.addEventListener('click',()=>{ // if user click on add frnd 
    if(v===0){ // chk the vlaue of v if 0 then
 stats.innerHTML='<p>freinds</p>'// updfate the html and make it friends 
 stats.style.color="green" // also change the css property to green 
 v=1 // finally make the var =1 to ignore sending double frnd req 
    } 
    alert("you are already frineds") // set alert for double req
})

rmv.addEventListener('click',()=>{ //backward logic 
    if(v===1){
    stats.innerHTML='<p>unfriends</p>'
    stats.style.color="red"
    v=0
    }
    alert("you are not friends")
})