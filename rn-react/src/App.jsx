import './App.css'
import Navbar from './components/navbar'
import Text from './components/h-one'
import Textin from './components/infotext'
import Shoe from './components/shoe-img'
import Cards from './components/card'
import Cart from './components/cart'
import { useState } from 'react'

function App(){
  //using state for mananging the shoping cart data 
const[cart,setCarrt]=useState([]) //by default it is empty 

     const products = [ // we have defined them as props now we are dynamically editing this 
    {
      id: 1,
      text: "Air jordan dummy",
      price: 350,
      des: "nice and elegant",
      src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png"
    },
    {
      id: 2,
      text: "TIGER JORDAN",
      price: 400,
      des: "OFFROAD CAPABLE",
      src: "https://m.media-amazon.com/images/I/61Lu3rc97UL._UY900_.jpg"
    },
    {
      id: 3,
      text: "RED JORDAN",
      price: 410,
      des: "FASTER THAN YOU THINK",
      src: "https://releases.flatspot.com/cdn/shop/files/nike-sb-dunk-low-pro-shoes-varsity-red-black-white-varsity-red-1_55c1d044-6f7c-42de-a08d-b26bc7294f69_grande.jpg?v=1714471354"
    }
  ]

  const addTocart=(product)=>{ //this is function which handle adding to cart operation 
    // we have set setCart value [] empty previus so it is default value 
    //it will work like if we add new product it will make  the copy of old products + the new one 
    //...cart get the all old porducts and product will ad dthe newly added one 
    //when new product is added 
    // all the previous product added by ...cart
    //-product is the new item being added 
    //together it creates old +new item 
   setCarrt([...cart,product])
  }
  return (
   <>
   <section className="flex flex-col md:flex-row items-center justify-center md:p-10">
<div className="flex flex-col md:w-1/2">
   <Navbar/>
   
   
    <Text/>
    <Textin/>
     </div>
     <div className=" flex justify-center md:w-1/2">
    <Shoe/>
    </div>
     </section>

     <section className="flex flex-col gap-12">

      {/*iterating through the array with map for 
      rendering card component for each item */}

{products.map((item)=>(
  
<Cards
key= {item.id} //adding key a  unique uuid for efficint rendering 
{...item} //tKES ALL THE properties of product object {name id price des etc } pass them into the cards compo
addTocart={addTocart}

/>
   
))}
 
   </section>
   <Cart cart={cart}/>
   </>
  )
}
export default App