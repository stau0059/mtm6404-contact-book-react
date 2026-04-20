import { Routes, Route } from "react-router-dom";
import App from "./App";
import Add from "./Add";
import EditForm from "./components/EditForm";
import ContactDetails from "./ContactDetails";

const Router = () => {

return (
<Routes>
    <Route path="/" element={<App />} />
    <Route path="/add" element={<Add />} />
    <Route path="/edit/:id" element={<EditForm />} />
    <Route path="/contact/:id" element={<ContactDetails />} />
</Routes>


);
};

export default Router;