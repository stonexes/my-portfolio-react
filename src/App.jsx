import { useState } from "react";
import { NavBar, HeroSection } from "./Components/Home";
function App() {
  const [contactSwitchValue,setContactSwitch] = useState(false);
  let formObject = [];
  const getFormData = (dataObject)=>{
        formObject= [...formObject , dataObject]
        console.log(formObject)
  };
  return (
    <body className="body bg-gradient-to-b from-black via-gray-700 to-gray-400 overflow-hidden ">
     <NavBar setContactSwitch={setContactSwitch} />
     <HeroSection contactSwitchValue={contactSwitchValue} setContactSwitch={setContactSwitch} getFormData={getFormData}/>
    </body>
  );
}

export default App;























//grid-cols-[repeat(auto-fit,minmax(250px,1fr))]
/*
<div id="navbar" className="flex justify-center border-white border-1 w-full p-1">
<div className="flex justify-around space-x-20 border-white border-1 w-min p-1">
<div className=" text-xl border-amber-500 border-1 hover:bg-amber-200">Home</div>
        <div className=" text-xl border-amber-500 border-1 hover:bg-amber-200">Projects</div>
        <div className=" text-xl border-amber-500 border-1 hover:bg-amber-200">Skills</div>
        <div className=" text-xl border-amber-500 border-1 hover:bg-amber-200">Contact</div>
        </div>
        </div>
        */
       