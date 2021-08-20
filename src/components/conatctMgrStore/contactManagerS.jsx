import React, { useState } from "react";
import { createStore } from "redux";

const initialState = {
  contacts: ["Paul", "Play"],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PERSON":
      return { ...state, contacts: [...state.contacts, action.data] };
    default:
      return state;
  }
}

const store = createStore(reducer);
