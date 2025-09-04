import './App.css'
import Input from './components/caption'
import Image from './components/image'
import Button from './components/button'
import { useState } from 'react'


function App(){
 //we are definig the states here 
const [image,setImage]=useState(null)
const [text,setText]=useState("")
//additionally we are making a state for post 
//to store text and image as an object in the post array
const [post,setPost]=useState([])


//and here is the handlwe post funciton 
const handlepost=()=>{
  if(!text && !image){ //if no image and no text are inputed the 
    //return nothing 
    return
  } //else 
  const newpost={ //make a new object with 
    id:Date.now(), //for unique id 
    text, //store text as an object 
    image, // same for image
  }
  setPost([newpost,...post]) //spread out operator for 
  // having copy of the post and the last will appear in the first 

  setText("")// after get post clear the input and 
  setImage(null) //also clear the image

}
    
  
  return (
//this is the main parent div outer mist div

    <div className="flex flex-col items-cenetr justify-center">
{/*prop drilling*/}
      <Input text={text} setText={setText} />
{/*prop drilling*/}
   <Image setImage={setImage} image={image}/>
   {/*prop drilling*/}
   <Button className="bg-teal-400 text-white px-4 py-3 rounded-lg mt-6 font-bold text-2xl"
   handlepost={handlepost} //dont set it onClick={handlepost} it wont work 
   //you are passing the props handle psot is alreadey in 
   //onClick event
   text="Post"
   />
{/*this one out put div*/}
   <div className='w-full  flex flex-col mt-4 border-white'>

    {/*now we are iterating over post array */}
    {post.map((ele)=>(
      <div key={ele.id}  //init key
      className=" font-bold">
        {/*conditional rendering*/}
        {ele.text &&( //plzz commnet outn properly this section
          <p className="text-white">{ele.text}</p> //accessing thr text object
        )}
        {/*conditional rendering*/}
        {ele.image &&(
          <img 
          src={ele.image} //accessing the image object
          alt="laod"
          className='w-full'
          />
        )}
        </div>
    ))}
   </div>

    </div>
 
  
  )
}

export default App