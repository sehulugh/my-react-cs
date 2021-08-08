import logo from "./logo.svg";
import "./App.css";
import ContactManager from "./components/contactMgr/contactManager";

function App() {
  const contacts = ["Sesugh Hulugh", "Paul Bija"];
  return (
    <div>
      <ContactManager data={contacts} />
    </div>
  );
}

export default App;
