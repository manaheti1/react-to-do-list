import React,{useState} from 'react'
import axios from 'axios'
import {Form,Button} from 'react-bootstrap'
const AddForm=()=>{
    const [inputValue,setInputValue]=useState('')
    // const [formData,setFormData]=useState({data:"string"})
    // const [data,setDate]=useState(null)
    // const [error,setError]=useState(null)
    // const [loading,setLoading]=useState(false)

    const handleInputValueChange=(evt)=>{
        setInputValue(evt.target.value)
    }

    const handleBtnSaveClick=()=>{

        // setLoading(true)
        // setError(null)

        // axios.get('https://api.apis.guru/v2/providers.json',formData)
        // .then((response)=>{
        //     console.log(response.data)
        //     document.getElementById("Data").setHTML(response.data)
        //     setLoading(false)
        // }).catch((error)=>{
        //     alert(error)
        //     setError(error);
        //     setLoading(false);
        // })
    }
    return <div>
        <input placeholder="Enter text" value={inputValue} onChange={handleInputValueChange}></input>
        <button onClick={handleBtnSaveClick}>Save</button>
        <p id="Data"></p>
    </div>
}

export default AddForm