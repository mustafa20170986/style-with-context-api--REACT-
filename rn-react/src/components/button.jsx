//reuseable button with dynamic inner text and style option

function Button({text,onClick,className}){ //passing the porps 
return(
    <button className={className} onClick={onClick}>{text}</button>
)
}
export default Button