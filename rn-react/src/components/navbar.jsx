import Button from "./button";

function Navbar(){
    return (
        <div className="flex flex-col md:flex-row md:justify-between items-center p-4 md:p-6 bg-white shadow-md">
            
            <div className="flex justify-between items-center w-full md:w-auto">
                {/* Logo wrapper */}
                <div className="h-[70px] w-auto relative mr-4">
                    <img src="https://e7.pngegg.com/pngimages/713/1000/png-clipart-logo-brand-nike-swoosh-kiev-nike-text-logo.png" alt="logo"
                        className="h-full w-full object-cover" 
                    />
                </div>
              
                <Button className="rounded-lg bg-red-500 text-white px-4 py-2" text="Login" />
            </div>

          
            <nav className=" md:flex items-center">
                <ul className="flex text-black gap-2 justify-between">
                    <li>Menu</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            
        </div>
    );
}

export default Navbar;
