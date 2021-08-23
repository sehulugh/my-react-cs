import { connect } from "react-redux";
import React from "react";

function PeopleListS(props) {
    const arr = props.contacts;
    const lisItems = arr.map((val,index)=><li key={index}>{val}</li>);

    return <ul>{lisItems}</ul>;
}

function mapStateToProps(state){
    return{
        contacts:state.contacts
    }
}

export default connect(mapStateToProps)(PeopleListS);