import React,{useState} from 'react'
const SideButton=()=>{
    const [showPopup,setShowPopup]=useState(false)
    const addScreen=()=>{
        setShowPopup(true)
    }
    return (<div>
        <button onClick={addScreen}>Add</button>
        <button>Delete</button>
    </div>)
}
export default SideButton