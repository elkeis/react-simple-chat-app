import wrap from 'view/wrap';
import ItemList from './ItemList';
import ItemListLoader from './ItemListLoader';
import createItemList from './createItemList';
import './ItemList.scss';



export default function _ItemList({items, onChooseItem}) {
    return wrap(createItemList({
        items,
        onChooseItem,
        ItemList,
        ItemListLoader
    }));
}

