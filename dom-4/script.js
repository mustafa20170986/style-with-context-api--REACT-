const con = document.getElementById('container') //select the container 
const love=document.querySelector('i')// select the love icon 

con.addEventListener('dblclick',()=>{ // add evnt listeneer with double click 
    love.style.transform="translate(-50%,-50%) scale(3)" // update css element 
    // scale up the heart at the middle of the pic  
    love.style.opacity=0.8 // increasee the opacity to make it visible 
love.style.color='red' // chnage the color to red 

setTimeout(function(){ // settime out bcz we also want remove the effect . after 1 sec
love.style.opacity=0 //opacity 0 to become fade 
},1000)


setTimeout(function(){ 
love.style.transform="translate(-50%,-50%) scale(0)" //also fade the  scale effect 
love.style.opacity=0
},3000)

})