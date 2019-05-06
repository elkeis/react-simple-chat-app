export default function createOpenViewCommand({
    store,
    setActiveView
}) {
    return (viewName) => {
        store.dispatch(setActiveView(viewName));
    };
}