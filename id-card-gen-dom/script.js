//seclet the feilds of the forms
let fnmae=document.querySelector('#name')
let phone=document.querySelector('#phone')
let position=document.querySelector('#blood')
let blood=document.querySelector('#blood')
let pic=document.querySelector('#pic')

let btn =document.querySelector('#sbt')
//select the reference feilds 
let idcard=document.querySelector('.idcard')
let info=document.querySelector('.info')
let uname=document.querySelector('#uname')
let uphone=document.querySelector('#uphone')
let uposition=document.querySelector('#uposition')
let ublood=document.querySelector('#ublood')
let grp=document.querySelector('#grp')
let upic=document.querySelector('#upic')

//now if the submit button clicked the basic form validation will atke place 
// also the id card div  class willl eb added to the current information 
// therefore generate the new id card

btn.addEventListener('click',function(){
    //firts take the values form the feilds 
    // we will use the static form 

    const fnameinfo=fnmae.value.trim()
    const phoneinfo=phone.value.trim()
    const positioninfo=position.value.trim()
    const  bloodinfo=blood.value.trim()
    const picinfo=pic.value.trim()

    //validate the form (basic)

    if(fnameinfo && phoneinfo &&bloodinfo && picinfo && positioninfo){
        //now put the values in the div perfectly 
        // i mean now manipulate the inner html accordingly
        uname.textContent=`Name:${fnameinfo}`
        uphone.textContent=`Phone:${phoneinfo}`
        uposition.textContent=`Position${positioninfo}`//error in this
        ublood.textContent=`Blood:${bloodinfo}`
        upic.src=picinfo

//if everything oaky then jusy append them into the idcard div 
 idcard.classList.add('visible')

    console.log('you are done ')
    }else{
        console.log('all fields must be fill')
    }
})