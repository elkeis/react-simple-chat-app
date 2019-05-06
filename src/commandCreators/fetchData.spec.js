import createFetchDataCommand from './fetchData';

describe('Fetch Data Command', () => {

    let fetchDataCommand, 
        store,
        createRequestDataAction,
        createReceiveDataAction,
        fetchDataFunction;
    
    beforeEach(() => {
        fetchDataFunction = jest.fn(() => new Promise(resolve => resolve([
            {id: 3},
            {id: 6}
        ])));
        store = {dispatch: jest.fn()};
        createRequestDataAction = jest.fn(() => ({type: 'request-action'}));
        createReceiveDataAction = jest.fn(() => ({type: 'receive-action'}));
        fetchDataCommand = createFetchDataCommand({
            store,
            createRequestDataAction,
            createReceiveDataAction,
            fetchDataFunction,
        });
    });

    afterEach(() => {
        fetchDataCommand = null;
        store = null;
        createRequestDataAction = null;
        createReceiveDataAction = null;
        fetchDataFunction = null;
    });

    it('It should dispatch request data action, then fetch data, then dispatch receive data action', () => {
        const param1 = 'param1';
        const param2 = 'param2';
        const promise = fetchDataCommand(param1, param2);
        expect.assertions(6);
        expect(store.dispatch.mock.calls).toEqual([
            [{ type: 'request-action' }]
        ]);
        fetchDataFunction.mock.results[0].value.then(() => {
            expect(store.dispatch.mock.calls[1]).toEqual([{type: 'receive-action'}]);
            expect(createReceiveDataAction.mock.calls[0]).toEqual([
                [{ id: 3 }, 
                 { id: 6 }]
            ]);

            expect(createRequestDataAction.mock.calls[0]).toEqual([param1, param2]);
        })
        expect(fetchDataFunction.mock.calls[0]).toEqual([param1, param2]);

        promise.then(result => {
            expect(result).toEqual([{ id: 3 }, { id: 6 }]);
        });
    });
});