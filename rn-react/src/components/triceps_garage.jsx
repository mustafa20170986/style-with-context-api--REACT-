import { Store } from "./context"
import Button from "./button"
import Image from "./image"
import Card from "./card"

function T_garage(){

  const Buttondata = {
    className: "bg-indigo-500 font-bold px-2 py-4 text-white rounded-md",
    text: "Add Workout",
  }
//hero image object
  const Heroimg = {
    Heroimg:"https://www.kettlebellkings.com/cdn/shop/articles/9ef303d8aa70a7750d93df68c947b645_6ad0537f-1b04-42d1-8131-a630f2cd5dc6.jpg?v=1739267183",
    className: "h-full w-full relative object-cover rounded-3xl"
  }

  //  Triceps Workouts objects
  const Dips = { src: "https://www.muscleandstrength.com/sites/default/files/dip.jpg", innertext: "TRICEP DIPS" }
  const Kickbacks = { src: "https://www.muscleandstrength.com/sites/default/files/tricep_kickback.jpg", innertext: "KICKBACKS" }
  const SkullCrusher = { src: "https://www.muscleandstrength.com/sites/default/files/skullcrusher.jpg", innertext: "SKULL CRUSHERS" }
  const CloseGripBench = { src: "https://www.muscleandstrength.com/sites/default/files/close-grip-bench.jpg", innertext: "CLOSE GRIP BENCH" }
  const OverheadExtension = { src: "https://www.muscleandstrength.com/sites/default/files/overhead_extension.jpg", innertext: "OVERHEAD EXTENSION" }

  //taking them in to array
  const Workouts = [Dips, Kickbacks, SkullCrusher, CloseGripBench, OverheadExtension]

  return (
    <div className="flex-row justify-between items-center w-full">
      <Store.Provider value={Heroimg}>
        <Image/>
        </Store.Provider>
        {/*map over the array*/}
      {Workouts.map((workout, i) => ( //elements-workout index-i
        <Store.Provider key={i} 
        value={{...workout, ...Buttondata}}> 
          <Card/>
        </Store.Provider>
      ))}
    </div>
  )
}

export default T_garage
