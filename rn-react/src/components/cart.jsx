import { useMemo } from "react"

function Cart({cart}){

    const totobill=useMemo(()=>{ //using memo hook for prevent re-rendering calculation 
        return cart.reduce((sum,item)=>sum+Number(item.price),0)
    },[cart])

    return(
        <div className="p-5 border border-indigo-400 mt-5 rounded-xl">
            <h1 className="text-black">My-Cart</h1>
            <h2 className="text-xl font-bold text-black">
                Cart
            </h2>
            {cart.length===0 ? ( //conditonal rendering with ternary operator 
            //if no item seleted display  this p 
                <p className="text-black">No items selected</p>
            ): //else display the selected items
            <ul className="text-black  items-center">
               {cart.map((item,index)=>( //using map for iteration over cart and render a list for each
               //position where item is the element and (current) and index is the position  
              
                <li
                
                calssName="flex text-center items-center text-black border border-indigo-400" 
                key={index}> {/*we are using index to prevent reder the whole list if any change made */}
                  
<img src={item.src} //accessing the image object 
//item is not defined okay well .but it is used as like i for every itetration 
//so i stand for the current element

className= "flex items-center w-16 h-16 object-cover rounded-md"/>

<div>
     <h2 className="text-black font-bolder"> {item.text}-${item.price}</h2> //dispaly the image and price 
</div>
</li>
               ))} 
               </ul>
              
               }
                <div className="mt-4 tetx-black font-semibold">
                   <h1 className="text-black">Total:${totobill}</h1> 
                </div>
        </div>
    )
   
}
 export default Cart