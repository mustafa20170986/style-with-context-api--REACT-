import { useContext } from "react";
import { Store } from "./context";
function Image(){

    const{Heroimg,className}=useContext(Store)
    return(
          <div className="h-80 w-full">
                <img src={Heroimg} alt="logo"
                className={className}/> 
            </div>
    )
}export default Image