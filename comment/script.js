let cmt =document.getElementById('inp')
let commentsectin=document.getElementsByClassName('commentsection')[0]
let button=document.getElementById('commentbutton')

button.hidden=true;



cmt.addEventListener('input',function(){
if(cmt.value.trim()!=='' ){
    button.hidden=false
}else{
    button.hidden=true;
}
})

button.addEventListener('click',function(){
    let tht=document.createElement('h4')
    tht.textContent=cmt.value
    tht.style.brderRadius='10px solid white'
    tht.style.textAlign='center'
    tht.style.border='1px solid white'
    tht.style.width='fit-content'
    commentsectin.appendChild(tht)
})


