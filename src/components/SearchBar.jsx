import React,{useState} from 'react'
const SearchBar=()=>{
    const [searchText,setSearchText]=useState('')

    const handleSearchTextChange=event=>{
        setSearchText(event.target.value)
    }
    return (
        <div>
            <input type="text" value={searchText} onChange={handleSearchTextChange} placeholder="Search"></input>
            <button type="button">Search</button>
        </div>
    )
}
export default SearchBar