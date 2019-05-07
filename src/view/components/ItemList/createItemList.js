export default function createItemList({
    items,
    onChooseItem,
    ItemListLoader,
    ItemList,
}) {
    if(items && !items.isFetching) {
        return [ItemList, {items: items.data, onChooseItem}];
    } else {
        return ItemListLoader;
    }
}