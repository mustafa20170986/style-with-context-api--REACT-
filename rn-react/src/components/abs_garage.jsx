import { Store } from "./context"
import Button from "./button"
import Image from "./image"
import Card from "./card"

function A_garage(){

  const Buttondata = {
    className: "bg-yellow-500 font-bold px-2 py-4 text-white rounded-md",
    text: "Add Abs Workout",
  }

  const Heroimg = {
    Heroimg: "https://fitliferegime.com/wp-content/uploads/2022/12/Dumbbell-Abs-Exercises.jpg",
    className: "h-full w-full relative object-cover rounded-3xl"
  }

  // 🏋️ Abs Workouts
  const Workouts = [
    { src: "https://www.muscleandstrength.com/sites/default/files/crunch.jpg", innertext: "CRUNCHES" },
    { src: "https://www.muscleandstrength.com/sites/default/files/plank.jpg", innertext: "PLANK" },
    { src: "https://www.muscleandstrength.com/sites/default/files/leg_raise.jpg", innertext: "LEG RAISES" },
    { src: "https://www.muscleandstrength.com/sites/default/files/russian_twist.jpg", innertext: "RUSSIAN TWISTS" },
    { src: "https://www.muscleandstrength.com/sites/default/files/bicycle_crunch.jpg", innertext: "BICYCLE CRUNCH" }
  ]

  return (
    <div className="flex-row justify-between items-center w-full">
      <Store.Provider value={Heroimg}>
        <Image/>
      </Store.Provider>

      {Workouts.map((workout, index) => (
        <Store.Provider key={index} value={{...workout, ...Buttondata}}>
          <Card />
        </Store.Provider>
      ))}
    </div>
  )
}

export default A_garage
