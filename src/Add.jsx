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

const handleSubmit = async (e) => {
    e.preventDefault();

    const c = collection(db, "contacts");
    await addDoc(c, formData);

    setFormData({
        firstName:'',
        lastName: '',
        email: ''
    });

    navigate('/');

}

return (
<div className="container">
<h1 className="title">Add Contact</h1>
    
    <form onSubmit={handleSubmit} className="form">

            <input type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            />

            <input type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            />
    
            <input type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            />
    
    <button type="submit" className="submit-btn">Add Contact</button>

    </form>

    </div>
);

}

export default Add;