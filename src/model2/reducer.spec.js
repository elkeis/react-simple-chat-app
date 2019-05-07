import reducer from './reducer';
describe('reducer', () => {

    it('should return same state if executed without any action', () => {
        expect(reducer({})).toEqual({});
    });


    it('should throw an error if reducer for  the action is not found', () => {
        expect(() => reducer({}, {type: 'test456'})).toThrow();
    });

    
});