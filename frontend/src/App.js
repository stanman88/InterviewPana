import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css";

const URL = 'http://localhost:7000/Customer'

const Table = () => {
    const [guest, setGuest] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        const response = await axios.get(URL)
        setGuest(response.data)
    }

    const removeData = (id) => {

        axios.delete(`${URL}/${id}`).then(res => {
            const del = guest.filter(guest => id !== guest.id)
            setGuest(del)
        })
    }

    const renderHeader = () => {
        let headerElement = ['ID', 'FirstName', 'LastName', 'EmailAddress', 'gender', 'Country', 'Delete']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return guest && guest.map(({ ID, FirstName, LastName, EmailAddress, gender, Country }) => {
            return (
                <tr key={ID}>
                    <td>{ID}</td>
                    <td>{FirstName}</td>
                    <td>{LastName}</td>
                    <td>{EmailAddress}</td>
                    <td>{gender}</td>
                    <td>{Country}</td>
                    <td className='opration'>
                        <button className='button' onClick={() => removeData(ID)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            <h1 ID='title'>Guest Data</h1>
            <table ID='guest'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}


export default Table