import logo from "./logo.svg";
import "./App.css";
import AddPersonForm from "./components/contactMgr/addPersonForm";
import PeopleList from "./components/contactMgr/peopleList";
import ContactManager from "./components/contactMgr/contactManager";

function App() {
  return (
    <div>
      <ContactManager />
    </div>
  );
}

export default App;
