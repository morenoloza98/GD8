const assert = require('assert');
const VectorCalculator = require('../app/VectorCalculator');

describe('VectorCalc', () => {
    describe('#sum', () => {
        let v1 = { x: 4, y: 3 }
        let v2 = { x: 1, y: 3 }
        it('Should add vectors', () => {
            assert.deepEqual({ x: 5, y: 6 }, VectorCalculator.sum(v1, v2));
        })
    })

    describe('#substract', () => {
        let v1 = { x: 4, y: 3 }
        let v2 = { x: 1, y: 3 }
        it('Should substract the vectors', () => {
            assert.deepEqual({ x: 3, y: 0 }, VectorCalculator.sub(v1, v2));
        });
    });

    describe('#scalar', () => {
        let v1 = { x: 4, y: 3 }
        let scalar = 4;
        it('Should multiply the scalar times the vector', () => {
            assert.deepEqual({ x: 16, y: 12 }, VectorCalculator.scalar(v1,scalar));
        });
        
    });
    
    describe('#dot', () => {
        let v1 = { x: 4, y: 3 }
        let v2 = { x: 1, y: 3 }
        it('Should make the dot product of the vectors', () => {
            assert.deepEqual(13, VectorCalculator.dot(v1,v2));
        });
        
    });
    

})