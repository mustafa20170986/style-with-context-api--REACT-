import { Store } from "./context"
import Button from "./button"
import Image from "./image"
import Card from "./card"

function C_garage(){

  const Buttondata = {
    className: "bg-pink-500 font-bold px-2 py-4 text-white rounded-md",
    text: "Add Chest Workout",
  }

  const Heroimg = {
    Heroimg: "https://thefitnessphantom.com/wp-content/uploads/2022/10/dumbbell-upper-chest-exercises.jpg",
    className: "h-full w-full relative object-cover rounded-3xl"
  }

  // 🏋️ Chest Workouts
  const Workouts = [
    { src: "https://www.muscleandstrength.com/sites/default/files/barbell_bench_press.jpg", innertext: "BENCH PRESS" },
    { src: "https://www.muscleandstrength.com/sites/default/files/push-up.jpg", innertext: "PUSH UPS" },
    { src: "https://www.muscleandstrength.com/sites/default/files/incline_dumbbell_press.jpg", innertext: "INCLINE DUMBBELL PRESS" },
    { src: "https://www.muscleandstrength.com/sites/default/files/chest_dips.jpg", innertext: "CHEST DIPS" },
    { src: "https://www.muscleandstrength.com/sites/default/files/cable_fly.jpg", innertext: "CABLE FLY" }
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

export default C_garage
