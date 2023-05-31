import './ListItem.css';
import React,{useState} from 'react';
const ListItem=(props)=>{
    const [checked,setChecked]=useState(props.state)
    
    const handleCheckBoxChange=()=>{
        setChecked(!checked)
    }
    
    return  <tr>
                <td><p className='title'>{props.name}</p></td>
                <td><input type="checkbox" checked={checked} onChange={handleCheckBoxChange}></input></td>
            </tr>
}

export default ListItem;