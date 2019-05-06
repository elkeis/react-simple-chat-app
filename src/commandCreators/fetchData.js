export default function createFetchDataCommand({
    store,
    createRequestDataAction,
    createReceiveDataAction,
    fetchDataFunction,
}) {
    return function fetchData() {
        const args = [...arguments];
        store.dispatch(createRequestDataAction(...args));
        return fetchDataFunction(...args).then(data => {
            store.dispatch(createReceiveDataAction(data));
            return data;
        });
    }
}