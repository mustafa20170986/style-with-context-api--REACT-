import { useContext } from "react";
import { Store } from "./context";

function Button(){
    //here we have store the props in the context store 
    // as like prop drilling we pass the porps in the function argument 
    //here we will send it to the store (contedxt api)
    const{className,text,onClick}=useContext(Store)
//also allow this to consume the context
    return(
        <button className={className}  onClick={onClick}>
            {text} </button>
    )
}
export default Button
