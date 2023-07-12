import React,{ useState } from "react";
import CreateContext from "./createContext"


const StateContext = ({children})=>{
    const [ProfileOpen, setProfileOpen] = useState("don't see profile")
    
    return (
        <CreateContext.Provider value={{ ProfileOpen , setProfileOpen}}>
            {children}
        </CreateContext.Provider>
    )
}

export default StateContext;