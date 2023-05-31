import React,{useState} from 'react'
import SearchBar from './components/SearchBar'
import List from './components/List'
import SideButton from './components/SideButton'
import AddForm from './components/AddForm'
import 'bootstrap/dist/css/bootstrap.css'
import {Container,Row,Col} from 'react-bootstrap'
import './App.css'

function App() {
    const [showPopup,setShowPopup]=useState(false)

	return (
        <Container>
            <Row className="justify-conent-center align-items-center d-flex">
                <Col md={6} lg={6} xl={6} xs={6}>
                    <div className="App">
                        <SearchBar/>
                        <SideButton/>
                        <AddForm/>
                        <List/>
                        
                    </div>
                </Col>
            </Row>
        </Container>
	)
}

export default App
