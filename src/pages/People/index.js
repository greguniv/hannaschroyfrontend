import { useEffect, useState } from 'react';
import axios from 'axios'


const People = () => {

    const [people, setPeople] = useState([])
    // const [editForm, setEditForm] = useState(false)
    const [studentToEdit, setStudentToEdit] = useState({})

    useEffect(() => {
        fetchContacts()
    }, [])

    const fetchContacts = async () => {
        try{
            const response = await axios.get('http://localhost:8080/api/v1/allcontact')
            console.log(response)
            setPeople(response.data)
        } catch(error){
            console.log(error)
        }
    }

    console.log("This is our state", people)

    return (
        <div>
            THIS IS OUR CONTACT PAGE
        </div>
    );
}

export default People;
