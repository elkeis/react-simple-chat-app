const LOCK_ERROR_MESSAGE = "Trying to access state that is already locked";
export default function createStore(reducer) {
    if(!reducer || typeof reducer !== 'function') {
        throw new Error('cant create store without reducer');
    }

    let state;
    const lock = createLock();
    const listeners = [];

    const dispatch = action => {
        if (typeof action === 'function') {
            action(dispatch);
            return;
        }
        lock(() => {
            state = reducer(state, action);
        }, LOCK_ERROR_MESSAGE);
        listeners.slice().forEach(l => l());
    }
    
    lock(() => {
        state = reducer();
    }, LOCK_ERROR_MESSAGE);

    return {
        getState() {
            return lock(() => state, LOCK_ERROR_MESSAGE);
        },

        dispatch,

        subscribe(listener) {
            const wrap = () => listener();
            listeners.push(wrap);
            return () => {
                const i = listeners.indexOf(wrap);
                if (i>=0) listeners.splice(i, 1);
            };
        }
    }
}


function createLock() {
    let locked = false;
    return (fn, error = 'lock error') => {
        if(locked) throw new Error(error)
        
        let result;
        try {
            locked = true;
            result = fn();
        } finally {
            locked = false;
        }
        return result;
    }
}