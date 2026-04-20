import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import db from './utils/db';

const Add = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email:  ''
    });

    const handleChange = (e) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            };
        });
    }

const handleSubmit = (e) => {
    e.preventDefault();

    const c = collection(db, "contacts");
    addDoc(c, formData);

    setFormData({
        firstName:'',
        lastName: '',
        email: ''
    });

    navigate('/');

}

return (
    <>
    <h1>Add Contact</h1>
    
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            />
        </div>

        <div>
            <input type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            />
        </div>
        
        <div>
            <input type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>
    
    <button type="submit">Add Contact</button>

    </form>

    </>
);

}

export default Add;