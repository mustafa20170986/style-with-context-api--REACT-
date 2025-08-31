import Button from "./button"
function Textin(){
    return( 
       
        <div className="mt-4 mr-20 ">
        <h2 className="text-black"> 
            YOUR FEET DESERVE THE BEST AND WE ARE HERE TO 
            <br/>
            HELP YOU WITH OUR SHOES 
            <br/>
            TAKE YOUR STEP TO THE NEXT LEVEL 
        </h2>

        <div className="flex gap-20 items-center mt-10">
<Button className="bg-red-500 rounded-lg text-white px-4 py-2 " text="Shop Now" />
<Button className="bg-white text-black  border border-indigo-600 px-4 py-2 rounded-lg " text="Category" />
        
        </div>
       </div>
    )
}
 export default Textin