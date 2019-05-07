
const reducers = {

};

export default function reducer(oldState, action) {
    const newState = {...oldState};
    if (action) {
        const r = reducers[action.type];
        if (r) {
            r(newState, action, oldState);
        } else {
            throw new Error(`can't find reducer for action: ${JSON.stringify(action)}`);
        }
        
    }
    return newState;
}