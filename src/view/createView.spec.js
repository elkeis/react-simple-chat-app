import createView from './createView';
import {
    LOGIN_VIEW
} from './constants';

describe('Create View', () => {
    it('should return login view for corresponding state', () => {
        const expectedView = 'view-1';
        expect(createView({
            view: LOGIN_VIEW,
            LoginView: expectedView
        })).toEqual(expectedView);
    }); 

    it('should return null view if state does not match', () => {
        const expectedView = 'null-view';
        expect(createView({
            view: null,
            LoginView: 'view-1',
            NullView: expectedView
        })).toEqual(expectedView);
    });
});