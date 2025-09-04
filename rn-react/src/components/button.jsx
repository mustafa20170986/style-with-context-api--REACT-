function Button({text,handlepost,className}){ //passing props
    return(
        <button className={className} 
        onClick={handlepost}> {/* onclick will trigger the hadnlepost event */}
            {text} 
        </button>
    )
}
export default Button