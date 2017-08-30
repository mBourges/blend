import { expect } from 'chai';
import isArray from './isArray';

describe('isArray', () => {
  it('array should be an array', () => {
    const actualEmpty = isArray([]);
    const actual = isArray([1, 2, 3]);

    expect(actualEmpty).to.be.true;
    expect(actual).to.be.true;
  });

  it('object should not be an array', () => {
    const actualEmpty = isArray({});
    const actual = isArray({ name: 'test' });

    expect(actualEmpty).to.be.false;
    expect(actual).to.be.false;
  });

  it('string should not be an array', () => {
    const actual = isArray('test');

    expect(actual).to.be.false;
  });

  it('number should not be an array', () => {
    const actual = isArray(10);

    expect(actual).to.be.false;
  });

});
