
const initialState = {
    contacts:["Will Smith","Orlando Bloom"]
};

export function personApp(state = initialState, action){
    switch (action.type) {
        case "ADD_PERSON":
            return [...state.contacts, action.data];                
        default:
            return state;
    }
}