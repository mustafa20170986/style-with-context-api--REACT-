import { useContext } from "react"
import Button from "./button"
import {Store} from './context'
function Card(){
//for each component we are using card compo 

    const{src,innertext}=useContext(Store)
//src ->component image 
//innertext ->dedicated text  in the block 

// we are storing them in the store (context api )
    //allow them to consume the context
    return( 
        <div className="flex flex-col">
        <div className=" mt-10 flex justify-between gap-4 items-center  border border-indigo-600 rounded-3xl w-full p-2">
            <div className="h-16  rounded-xl w-1/2">
            <img src={src} alt="logo" className=" h-full w-full object-cover relative rounded-xl" />
           </div>
           <h3 className="text-white text-center font-semibold mt-0"> {innertext}</h3> 
           <Button/>
        </div>
        </div>
    )
}
export default Card