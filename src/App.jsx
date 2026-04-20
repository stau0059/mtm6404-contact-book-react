import { useState, useEffect } from 'react'
import db from './utils/db';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';

const App = () => {

    const [contacts, setContacts] = useState([]);
    const [search, setSearch] = useState('');

    const fetchContacts = async () => {
        const docSnapshot = await getDocs(collection(db, "contacts"));
        const data = docSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
        }));

        data.sort((a,b) => a.lastName.localeCompare(b.lastName));
        
        console.log(data);
        
        setContacts(data);
    }

    useEffect(() => {
        fetchContacts();
    }, []);


    return (
        <>
        <h1>Contact Book</h1>

        
        <input type="text" placeholder="Search contacts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />

        <ul>
            {contacts.filter(contact => 
            contact.firstName.toLowerCase().includes(search.toLowerCase())
            )
            .map((contact) => (

            <li key={contact.id}>
            <Link to={`/contact/${contact.id}`}>
                 {contact.firstName} {contact.lastName}
                    </Link>
                </li>
            ))
            }

        </ul>
        
        <button>
            <Link to="/add">Add Contact</Link>
        </button>
        </>
    );
}
export default App;