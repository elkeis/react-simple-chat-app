import createStore from './store';

describe('Store', () => {
    let store, initialState, state1, action;

    beforeEach(() => {
        initialState = {id: 'initial state'};
        state1 = {id: 'state1'};
        action = {type: 'test-action'};
    });

    afterEach(() => {
        store = null, initialState = null, state1 = null, action = null;
    });

    it('should throw error if trying to create store without initial reducer', () => {
        expect(() => {
            createStore();
        }).toThrow();

        expect(() => {
            createStore({});
        }).toThrow();
    });

    describe('Store.getState()', () => {
        beforeEach(() => {
            store = createStore(() => initialState);
        });
        
        it('should return initial state which is specified in the reducer', () => {
            expect(store.getState()).toEqual(initialState);
        });

        it('should throw error if reducer try to access state', () => {
            expect(() => {
                let store;
                store = createStore(() => {
                    if (store) store.getState()
                });
                store.dispatch({});
            }).toThrow();
        });
    })


    describe('Store.dispatch()', () => {

        it('should call reducer-function with given action and update state', () => {
            const reducer = jest.fn()
                .mockReturnValueOnce(initialState)
                .mockReturnValueOnce(state1);
            store = createStore(reducer);
            store.dispatch(action);
            expect(store.getState()).toEqual(state1);
            expect(reducer.mock.calls[1]).toEqual([initialState, action]);
        });

        describe('When called with function', () => {
            it('should call that function with dispatch function as argument', () => {
                const reducer = jest.fn()
                    .mockReturnValueOnce(initialState)
                    .mockReturnValueOnce(state1);
                store = createStore(reducer);
                const fn = dispatch => dispatch(action);
                store.dispatch(fn);
                expect(store.getState()).toEqual(state1);
                expect(reducer.mock.calls[1]).toEqual([initialState, action]);
            });
        });
    });

    describe('Store.subscribe()', ()=> {
        it('should subscribe on state-change', () => {
            const store = createStore(() => initialState);
            const handler = jest.fn();
            store.subscribe(handler);
            store.dispatch(action);
            expect(handler.mock.calls.length).toEqual(1);
        });

        it('should call all handlers when state is changed', () => {
            const store = createStore(() => initialState);
            const handler = jest.fn();
            const handler2 = jest.fn();
            store.subscribe(handler);
            store.subscribe(handler2);
            store.dispatch(action);
            expect(handler.mock.calls.length).toEqual(1);
            expect(handler2.mock.calls.length).toEqual(1);
            store.dispatch(action);
            expect(handler.mock.calls.length).toEqual(2);
            expect(handler2.mock.calls.length).toEqual(2);
        });

        it('should make each subscription unique, regardless of handler function', () => {
            const store = createStore(() => initialState);
            const handler = jest.fn();
            store.subscribe(handler);
            store.subscribe(handler);
            store.dispatch(action);
            expect(handler.mock.calls.length).toEqual(2);
            store.dispatch(action);
            expect(handler.mock.calls.length).toEqual(4);
        });

        describe('When unsubscribe()', () => {
            it('should remove subscription', () => {
                const store = createStore(() => initialState);
                const handler = jest.fn();
                const handler2 = jest.fn();
                const unsubscribe = store.subscribe(handler);
                const unsubscribe2 = store.subscribe(handler2);
                store.dispatch(action);
                expect(handler.mock.calls.length).toEqual(1);
                expect(handler2.mock.calls.length).toEqual(1);
                unsubscribe();
                store.dispatch(action);
                expect(handler.mock.calls.length).toEqual(1);
                expect(handler2.mock.calls.length).toEqual(2);
            });
        });
    });
});