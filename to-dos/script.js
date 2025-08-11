let addnew = document.querySelector('.addnew');//select the add new bar
let tasksection = document.querySelector('.tasksection');// select the task section 
// we are gonna add there information

addnew.addEventListener('click', () => { // if get click on ad new 
    let txtsec = document.createElement('textarea'); //create a new text area 
    let savebtn = document.createElement('button');// and crreate save button 

    savebtn.textContent = "save"; // name the button by text content
    txtsec.classList.add('tasks'); //add the task class(css ) instant for styling 
savebtn.classList.add('svbtn') //same as above 
    // Add the textarea to the DOM immediately.
    tasksection.appendChild(txtsec); 

    // Add the event listener to the newly created textarea.
    txtsec.addEventListener('input', () => {
        const value = txtsec.value.trim(); //extract the value 

        if (value.length > 0) {
            // If the textarea has content, add the save button if it doesn't already exist.
            if (!tasksection.contains(savebtn)) {
                tasksection.appendChild(savebtn);
               
    
            }
        } else {
            // If the textarea is empty and the button exists, remove it.
            if (tasksection.contains(savebtn)) {
                tasksection.removeChild(savebtn);
            }
        }
    });

    // Add a click listener for the save button.
    savebtn.addEventListener('click', () => {
        const value = txtsec.value.trim(); // get the value form the text area 
        if (value.length > 0) { // re-validate 
            console.log("Note saved:", value); //for inspection
            // if everything is okay then create a div dynamically 
const Newnote=document.createElement('div')

//adding some style for practice 
// we can also do this by classlist.add()
Newnote.textContent=value
Newnote.style.border='1px solid white';
Newnote.style.marginTop='2%'
Newnote.style.fontSize='25px'
Newnote.style.textAlign='center'
Newnote.style.backgroundColor='rgba(233,233,233,0.3)'
Newnote.style. transition='transform 0.2s ease'
Newnote.style.borderRadius='10px'
Newnote.style.color='white'


//adding  class for css styling 
tasksection.classList.add('customsec')

//append the new note in the task section
            tasksection.appendChild(Newnote)
            
            // After saving, remove the textarea and button.
            tasksection.removeChild(txtsec);
            tasksection.removeChild(savebtn);

//atv the same time create 2 button ak as done and delete 
            let donebtn=document.createElement('button') //done button
             let delbtn=document.createElement('button') // delete button 

donebtn.innerHTML="Mark As done" //inner content written
delbtn.innerHTML="Delete" // inner contenet 

donebtn.classList.add('donebtn')// add for styling 
delbtn.classList.add('delbtn')// add for styling 

tasksection.appendChild(donebtn)// add the button in the task section
tasksection.appendChild(delbtn)// add the button in the task section

let dbtn=document.querySelector('.donebtn') //select the done button

dbtn.addEventListener('click',()=>{ //if get clicked 

    //mark the task as done by changing its color
    Newnote.style.backgroundColor="rgb(81, 224, 205)" 
})

//selcet the delete button
let dltn=document.querySelector('.delbtn')

dltn.addEventListener('click',()=>{// if got clicked 
    tasksection.remove(Newnote) // remove the task from task section
})
        } else {
            console.log("No value found.");
        }
    });
});