import React, { useState, useEffect } from 'react';

const AddPersonForm = () => {
    const [person, setPerson] = useState("");

    function handleChange(e) {
        setPerson(e.target.value);
    }

    function handleSubmit(e) {
        console.log("submit button clicked");
        e.preventDefault();
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Add new contact" 
                onChange = {handleChange} 
                value = {person} 
            />
            <button type="submit">Add</button>
        </form>
    );
}
 
export default AddPersonForm;