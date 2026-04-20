import { useState, useEffect } from "react";

const EditForm = ({ contact, onUpdate }) => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    useEffect(() => {
        if (contact) {
            setFormData({
                firstName: contact.firstName || '',
                lastName: contact.lastName || '',
                email: contact.email || ''
            });
        }
    }, [contact]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
    };

    return (
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
                <input type= "text"
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

            <button type="submit">
                Update Contact
            </button>
        </form>
    );
};

export default EditForm;
