
//we have created a  component 
function Slider({onValueChange,value,label}){// ths is a function which have taken onValuechaneg event ,value and label as props

const handler=(e)=>{//a function which will run on event chnage 
    onValueChange(Number(e.target.value))//the value of the target by changing event will get lock
}

return( // we are returing a div component 
    <div className="text-black">

        <label> 
        {label}:{value}
        </label>
        <input type="range" value={value} min="0" max="255" 
        onChange={handler} />
    </div>
)
}
export default Slider