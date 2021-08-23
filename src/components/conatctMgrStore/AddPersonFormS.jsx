import React, { useState } from "react";
import { addPerson } from "../../redux/contactMgrStore/contactMgrStore.actions";
import { connect } from "react-redux";

const AddPersonFormS = (props) => {
    const [person, setPerson] = useState("");

    function handleChange(e) {
        setPerson(e.target.value);
    }

    function handleSubmit(e) {
        if (person !== '') {
            props.addPerson(person);
            setPerson('');
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Add new contact" 
            onChange={handleChange} 
            value={person} />
            <button type="submit">Add</button>
        </form>
       );

       
}

const mapDispatchToProps = {
    addPerson
}
 
export default connect(null,mapDispatchToProps) (AddPersonFormS);