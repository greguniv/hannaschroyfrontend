import { useEffect, useState } from 'react';
import axios from 'axios'
import './styles.css'


const Contact = () => {

    const [people, setPeople] = useState([])
    // const [editForm, setEditForm] = useState(false)
    // const [studentToEdit, setStudentToEdit] = useState({})

    useEffect(() => {
        fetchContacts()
    }, [])

    const fetchContacts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/allcontact')
            console.log(response)
            setPeople(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // console.log("This is our state", people)

    return (
        <div className="contact-form-container">
            <h1>Contact</h1>
            <form className="ui form">
                <div className="field">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                    />
                </div>

                <div className="field">
                    <label htmlFor="email">E-mail Address: </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="E-mail Address" />
                </div>

                <div className="field">
                    <label htmlFor="message">Message: </label>
                    <textarea htmlFor="message-text"></textarea>
                </div>

                <button className="ui primary button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
