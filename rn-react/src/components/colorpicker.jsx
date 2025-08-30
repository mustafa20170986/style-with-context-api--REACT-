import { useState } from "react";
import Slider from "./useState.jsx"; //we have importedthe slider here
function Mn(){
const [red,setred]=useState(0) //using state for colors by default the value is 0
const [green,setgreen]=useState(0)
const [blue,setblue]=useState(0)

const color=`rgb(${red},${green},${blue})` //placeholder for rgb colors 
// they will adjust and dsipaly the color code 

return(
    <>
    <div className="flex flex-col items-center  gap-2 bg-white rounded-3xl">
        <h1 class="text-black  text-[34px]"> React color picker</h1>
 <h1 class="text-black"> {color}</h1> {/*here we are displaying the color code */}
        <div className="h-[200px] w-[200px] rounded-lg"


style={{backgroundColor:color}} > 
        </div>

        <Slider
        label="Red"
        value={red}
        onValueChange={setred}
        />

        <Slider
        label="Green"
        value={green}
        onValueChange={setgreen}
        />

        <Slider
        label="Blue"
        value={blue}
        onValueChange={setblue}
        />
       
    </div>
    </>
)}
export default Mn