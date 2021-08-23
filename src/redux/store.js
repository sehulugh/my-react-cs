import { personApp } from "./contactMgrStore/contactMgrStore.reducer";
import { createStore } from "redux";

const store = createStore(personApp);

export default store;