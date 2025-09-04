function Image({setImage}){ //passing the props 
    const handleimage=(e)=>{ 
const file=e.target.files[0] //locking the files for input image

if(file){
    //an instance of file reader appi to read the file 
    const reader=new FileReader()
reader.onloadend=()=>{ // whenreadin is done 
    setImage(reader.result) //set the data of setImage to the imaeg data
} ;
reader.readAsDataURL(file)//convert base 64

    }
}
return(
<input type="file" accpect="image/*"
onChange={handleimage} 
className="border-white bg-white text-teal-500 rounded-xl "
/>
)}

export  default Image