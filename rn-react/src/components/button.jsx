// button component we will reuse

function Button({ className,text,onClick}){// passing className  text and onClick eventlistener as a prop to edit 
    // the inner text and style accoridng ot our choice 
    return(
        <button className={className}   onClick={onClick}> 
         {text} 
       
         </button>
    )
}

export default Button