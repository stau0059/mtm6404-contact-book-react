import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, deleteDoc } from 'firebase/firestore';
import db from './utils/db'; 

const ContactDetails = () => {

    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const navigate = useNavigate();

useEffect(() => {
    const fetchContact = async () => {
        const ref = doc(db, "contacts", id);
        const snap = await getDoc(ref);

        if (snap.exists()) {
            setContact(snap.data());
        }
    };

    fetchContact();
}, [id]);

const handleDelete = async () => {
    await deleteDoc(doc(db, "contacts", id));
    navigate("/");
};

if (!contact) return <h2>Loading...</h2>;

return (
    <div>
        <h1>Contact Details</h1>

        <p>First Name: {contact.firstName}</p>
        <p>Last Name: {contact.lastName}</p>
        <p>Email: {contact.email}</p>


    <button onClick={handleDelete}>
     Delete
    </button>

    </div>
);

};

export default ContactDetails;