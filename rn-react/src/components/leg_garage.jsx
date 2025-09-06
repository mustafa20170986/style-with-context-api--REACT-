import { Store } from "./context"
import Button from "./button"
import Image from "./image"
import Card from "./card"

function L_garage(){

  const Buttondata = {
    className: "bg-green-500 font-bold px-2 py-4 text-white rounded-md",
    text: "Add Leg Workout",
  }

  const Heroimg = {
    Heroimg: "https://hips.hearstapps.com/hmg-prod/images/young-man-training-on-a-leg-machine-in-the-gym-royalty-free-image-1704212901.jpg?crop=0.88847xw:1xh;center,top&resize=1200:*",
    className: "h-full w-full relative object-cover rounded-3xl"
  }

  // 🏋️ Leg Workouts
  const Workouts = [
    { src: "https://www.muscleandstrength.com/sites/default/files/squat.jpg", innertext: "SQUATS" },
    { src: "https://www.muscleandstrength.com/sites/default/files/lunge.jpg", innertext: "LUNGES" },
    { src: "https://www.muscleandstrength.com/sites/default/files/leg_press.jpg", innertext: "LEG PRESS" },
    { src: "https://www.muscleandstrength.com/sites/default/files/deadlift.jpg", innertext: "DEADLIFT" },
    { src: "https://www.muscleandstrength.com/sites/default/files/calf_raise.jpg", innertext: "CALF RAISES" }
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

export default L_garage
