
import Button from "./button" 
function Cards({id,text,price,des,src,addTocart}){ //making function passing them as props for dynamic editing
const product={id,text,price,des,src} 


    return(
        <div className=" flex flex-col justify-center items-center border border-indigo-500 rounded-xl">
            <h2 className="text-black">{id} {text}</h2>
            <div className="flex h-[350px] w-full  justify-center items-center">
                <img src={src} alt="bgi" 
                className=" flex h-full w-full justify-center items-center object-cover md:w-auto relative rounded-xl"/>
            </div>
            <h5 className="text-black">{des}</h5>
            <h1 className="text-black">{price}</h1>
        <Button className="rounded-lg bg-indigo-500 text-white py-4 px-2" text="add to cart"
                    onClick={()=>addTocart(product)} //still we are passing the props . (prop drilling)
                    />
        </div>
    )
}
export  default Cards