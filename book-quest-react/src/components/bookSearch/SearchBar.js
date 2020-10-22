import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

const SearchBar = (props) => {
    
    const [bookTitle, changeBookTitle] = useState("")

    return(
        <div style={{marginTop:'30px'}}>
            <form onSubmit={(e) => props.handleSearch(e, bookTitle)}>
                <Form.Group as={Row}>
                    <Form.Label column sm="1" style={{color: 'white', fontSize:"16px"}}>Book Title: </Form.Label>
                    <Col sm="2" style={{marginLeft: '10px'}}>
                        <Form.Control type="text" onChange={(e) => changeBookTitle(e.target.value)}/><br />
                    </Col><br />
                    <Button variant="light" type="submit" style={{height: '40px'}}>Search</Button>
                </Form.Group>
            </form>
        </div>
    )
}

export default SearchBar