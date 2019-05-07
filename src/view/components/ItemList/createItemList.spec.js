import createItemList from './createItemList';

describe('Create Item List function', () => {
    it('should return ItemListLoader component if items undefined', () => {
        const loader = 'loader';
        expect(createItemList({
            items: undefined,
            ItemListLoader: loader
        })).toEqual(loader);
    });

    it('should return ItemListLoader component if Items is fetching', () => {
        const loader = 'loader';
        expect(createItemList({
            items: {isFetching: true},
            ItemListLoader: loader
        })).toEqual(loader);
    });

    it('should return ItemList component if items exists', () => {
        const loader = 'loader';
        const list = 'list';
        const onChooseItem = () => {};
        expect(createItemList({
            items: {
                isFetching: false,
                data: [{id: 1, name: 'test'}]
            },
            onChooseItem: onChooseItem,
            ItemListLoader: loader,
            ItemList: list
        })).toEqual([list, {items: [{id: 1, name: 'test'}], onChooseItem}]);
    });
});