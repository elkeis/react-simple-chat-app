import {fetchUsers} from 'services';
import {store} from 'model';
import {
    receiveUsers,
    requestUsers,
    setActiveView
} from '../model/actionCreators';
import {
    LOGIN_VIEW
} from '../view/constants';
import createOpenMockLoginViewCommand from './openMockLoginView'


export const openMockLoginView = createOpenMockLoginViewCommand({
    fetchUsers,
    store,
    requestUsers,
    receiveUsers,
    setMockLoginViewAsActive: () => setActiveView(LOGIN_VIEW)
});