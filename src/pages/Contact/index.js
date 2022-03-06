import { useEffect, useState } from 'react';
import axios from 'axios'
import './styles.css'


const Contact = ({ editForm, updateContact }) => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    useEffect(() => {
        fetchContacts()
    }, [])

    const fetchContacts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/allcontact')

            console.log(response)
            // fetchContacts(response.data)

        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newContact = {
            fullname: fullName,
            email: email,
            message: message
        }
        try {
            if(editForm) {
                // EDIT - UPDATING
                const response = await axios.put(`http://localhost:8080/api/v1/allcontact/${updateContact.id}`, newContact)
                console.log(response)
            } else {
                // ADDING CONTACT
                const response = await axios.post('http://localhost:8080/api/v1/addcontact', newContact)

                if(response.status === 200) {
                    setFullName('')
                    setEmail('')
                    setMessage('')
                }    
            }
            
      
            fetchContacts()
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="contact-form-container">
            <h1>Contact</h1>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label htmlFor="email">E-mail Address: </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="E-mail Address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                         />
                </div>

                <div className="field">
                    <label htmlFor="message">Message: </label>
                    <textarea htmlFor="message-text" placeholder='Your message here'
                    value={message}
                    onChange={e => setMessage(e.target.value)}></textarea>
                </div>

                <button className="ui primary button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
