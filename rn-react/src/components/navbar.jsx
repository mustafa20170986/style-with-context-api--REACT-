//we will make a navbar with dynamic text for chnage any time

function Navbar({txtone,txttwo,txtthree,txtfour}){
    return(
        //nav bar
    <nav className="flex items-center justify-center rounded-lg">
        <ul className="flex text-black items-center justify-center gap-4">
            <li><h1 className="text-bolder text-indigo-400 text-2xl">
            {txtone} {/*we can add more items as we want*/}
            </h1>
            </li>
              <li>{txttwo}</li>
                <li>{txtthree}</li>
                  <li>{txtfour}</li>
        </ul>
    </nav>
    )
}
export default Navbar