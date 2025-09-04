function Input({text,setText}){ //pasisng them as props 
    return(
        <textarea rows="3" //defining the text area
        placeholder="whats in yoour mind "
        value ={text}
        onChange={(e)=>{ //running the function to set the text value 
            setText(e.target.value)

        }}
        className="border-none text-3xl font-bold "
        />
    )
}
export default Input