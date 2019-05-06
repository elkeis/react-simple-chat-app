import wrap from './wrap';
import React from 'react';

describe('wrap function', () => {
    it('should not wrap functions', () => {
        const f = () => {};
        expect(wrap(f)).toEqual(f);
    });

    it('should wrap element with properties', () => {
        const Test = () => null;
        const obj = [Test, {id: 1}];
        const wrapper = wrap(obj);
        expect(wrapper()).toEqual(<Test id={1}></Test>);
    });

    it('should throw exception if renderObject is malformed', () => {
        expect(() => {
            wrap({})
        }).toThrow();
        
        expect(() => {
            wrap([])
        }).toThrow();

        expect(() => {
            wrap([{}, {}])
        }).toThrow();

        expect(() => {
            wrap([()=>{}, ()=>{}])
        }).toThrow();
    });
});