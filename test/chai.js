const chai = require('chai');

const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;


let a=1, b=2;
//--expect--//    expect(a).to.be.equals(b, "a and b are not equal");
//--should--//    a.should.be.equals(b);
//--assert--//    assert.equal(a,b,'not equal');


function myObj() {
    return{
        a: 100,
        b: 'Hello'
    }
}
x = new myObj(), y = new myObj();
//--expect--//  expect(x).to.be.an('object').and.to.be.deep.equals(y);
//--should--//  x.should.be.an('object').and.to.be.deep.equals(y);
//--assert--//  assert.isObject(x)
            //  assert.deepEqual(x,y);



let numbers = [1,2,3,0];
//--expect--//  expect(numbers).to.be.an('array').that.includes(3);
//--should--//    numbers.should.be.an('array').that.include(3);
//--assert--// assert.isArray(numbers)
            // assert.include(numbers, 5);

