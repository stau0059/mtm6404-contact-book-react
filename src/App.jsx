import './styles/index.css';
import { useState, useEffect } from 'react'
import db from './utils/db';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';

const App = () => {

    const [contacts, setContacts] = useState([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchContacts = async () => { setLoading(true);

        const docSnapshot = await getDocs(collection(db, "contacts"));
        const data = docSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
        }));

        data.sort((a, b) => a.lastName.localeCompare(b.lastName));
        
        setContacts(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchContacts();
    }, []);


    return (

        <div>

         <h1>Contact Book</h1>

        
        <input type="text" className="search-bar" 
        placeholder="Search contacts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}

        />

        {loading ? ( <p>Loading your contacts...</p> ) : (

        <div>

         <ul>
            {contacts.filter(contact => 
            contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(search.toLowerCase())
            )

            .map((contact) => (

            <li key={contact.id} className="contact">
            <Link to={`/contact/${contact.id}`}>
                 {contact.firstName} {contact.lastName}
             </Link>
            </li>

            ))
        }

        </ul>
        
        <button>
            <Link to="/add" className="add-btn">Add Contact</Link>
        </button>
        </div>

)}

</div>

    );
};

export default App;