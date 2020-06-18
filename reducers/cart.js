let initialState = {
    count: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state.count + 1;
        default:
            return state;
    }
};

export default cartReducer;