import { Store } from "./context"
import Button from "./button"
import Image from "./image"
import Card from "./card"

function B_garage(){

  //button data object with necessary feild
  const Buttondata = {
    className: "bg-indigo-500 font-bold px-2 py-4 text-white rounded-md",
    text: "Add Workout",
    
  }
//same as above
  const Heroimg = {
    Heroimg: "https://www.dmoose.com/cdn/shop/articles/1_2_81b97039-0312-4f01-9f42-98986006dd5a.png?v=1646660510",
    className: "h-full w-full relative object-cover rounded-3xl"
  }

//cards inner text and images 
  const HammerCurl = {
    src: "https://www.muscleandstrength.com/sites/default/files/hammer_curl.jpg",
    innertext: "HAMMER CURL"
  }
  const SpiderCurl = {
    src: "https://www.muscleandstrength.com/sites/default/files/spider_curl.jpg",
    innertext: "SPIDER CURL"
  }
  const BicepPushup = {
    src: "https://www.bodybuilding.com/images/2020/xdb/originals/xdb-10-push-ups-header.jpg",
    innertext: "BICEP PUSHUPS"
  }
  const ConcentrationCurl = {
    src: "https://www.muscleandstrength.com/sites/default/files/concentration_curl.jpg",
    innertext: "CONCENTRATION CURL"
  }
  const BarbellCurl = {
    src: "https://www.muscleandstrength.com/sites/default/files/barbell_curl.jpg",
    innertext: "BARBELL CURL"
  }
  const CableCurl = {
    src: "https://www.muscleandstrength.com/sites/default/files/cable_curl.jpg",
    innertext: "CABLE CURL"
  }
  const ZottmanCurl = {
    src: "https://www.muscleandstrength.com/sites/default/files/zottman_curl.jpg",
    innertext: "ZOTTMAN CURL"
  }
  const InclineCurl = {
    src: "https://www.muscleandstrength.com/sites/default/files/incline_dumbbell_curl.jpg",
    innertext: "INCLINE DUMBBELL CURL"
  }
  const PreacherCurl = {
    src: "https://www.muscleandstrength.com/sites/default/files/preacher_curl.jpg",
    innertext: "PREACHER CURL"
  }
  const ChinUps = {
    src: "https://www.muscleandstrength.com/sites/default/files/chin-up.jpg",

    innertext: "CHIN UPS (BICEPS FOCUS)"
  }

  // we can pass them using a single variable also 
  // like const Rn=({...Chinups,...InclineCurl,...PreachereCurl})
  // then pass it throuogh <Store.Provider value={{Rn}}


  //making array with all objects 
  const Workouts = [
    HammerCurl,
    SpiderCurl,
    BicepPushup,
    ConcentrationCurl,
    BarbellCurl,
    CableCurl,
    ZottmanCurl,
    InclineCurl,
    PreacherCurl,
    ChinUps
  ]

  return (
    <div className="flex-row  justify-between items-center w-full">
      {/* Hero Section */}
      {/*this Image component will only consume the HeroImage*/}
      <Store.Provider value={Heroimg}>
        <Image/>
      </Store.Provider>

      {/* Render all workouts */}
      {Workouts.map((workout, index) => ( //variable name was Workouts
        <Store.Provider key={index} value={{...workout, ...Buttondata}}>
          <Card />
        </Store.Provider>
      ))}
    </div>
  )
}

export default B_garage
