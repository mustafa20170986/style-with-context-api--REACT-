import { useState } from "react";
import B_garage from "./biceps-garage";
import C_garage from './chest_garage';
import L_garage from './leg_garage';
import A_garage from './abs_garage';
import T_garage from './triceps_garage';
import {Store} from './context'

function Tab() {
    //using stat eto track the active tab
const [activeTab, setActivetab] = useState('Biceps');
//using state to track the tab name 
 const tabs = ['Biceps', 'Triceps', 'Chest', 'Abs', 'Legs'];
{/* this section has never used */ }
 const[myTasks, setMytasks] = useState([])
 const handleAddTask = (workout)=>{
 setMytasks((prev)=>([...prev,workout]))
 }
 {/* this section has never used */ }
 return (
 <Store.Provider value={{myTasks, handleAddTask}}>

    {/*from here the tab layout sturctur begin*/}
 <div className="flex justify-between gap-12 flex-col items-center h-full w-full">

 <div className="flex top-0 sticky justify-between gap-12">
    {/*abov one for button section styling */}
    {/*we are running a map over tabs array*/}
 {tabs.map((tabName) => (
 <button
 key={tabName} //set tabname as the key

 //this part is conditional rendering 
 className={`tab-btn ${activeTab === tabName ? "active" : ""}`}
 //activeTab ===tabName -> set the active to the tab name
 // ?"active :"" ->if it is already actived then deactive it by ""
onClick={() => setActivetab(tabName)}
//set the actvetab on button click to the name of hte tab
 >
 {tabName} {/*display the tabname*/}
</button>
))}
</div>
<div className="h-full w-full">
{activeTab === 'Biceps' && <div className="h-full w-full"><B_garage /></div>}
{/*if Biceps tab got activated then show the B_gargae compo in thdiv with full h and full w*/}
{activeTab === 'Triceps' && <div className="h-full w-full"><T_garage /></div>}
{activeTab === 'Chest' && <div className="h-full w-full"><C_garage /></div>}
 {activeTab === 'Abs' && <div className="h-full w-full"><A_garage /></div>}
{activeTab === 'Legs' && <div className="h-full w-full"><L_garage /></div>}
</div>
 </div>
</Store.Provider>);
}
export default Tab;