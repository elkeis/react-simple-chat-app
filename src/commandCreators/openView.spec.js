import createOpenViewCommand from './openView';

describe('Open Mock Login View Command', () => {

    let openView,
        store,
        setActiveView;
    
    beforeEach(() => {
        store = {dispatch: jest.fn()};
        setActiveView = jest.fn((activeView) => ({
            type: 'set-active-view',
            data: activeView
        }));
        
        openView = createOpenViewCommand({
            store,
            setActiveView,
        });
    });

    afterEach(() => {
        openView = undefined;
        store = undefined;
        setActiveView = undefined;
    });

    it('should set Login View As Active', () => {
        openView('active-view');
        expect.assertions(1);
        expect(store.dispatch.mock.calls).toEqual([
            [{
                type: 'set-active-view',
                data: 'active-view'
            }],
        ]);
    });
});