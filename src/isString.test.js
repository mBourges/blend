import { expect } from 'chai';
import isString from './isString';

describe('isString', () => {
  it('String should be a String', () => {
    const actual = isString('Hello World!');

    expect(actual).to.be.true;
  });

  it('Array should not be a String', () => {
    const actualEmpty = isString([]);
    const actual = isString([1, 2, 3]);

    expect(actualEmpty).to.be.false;
    expect(actual).to.be.false;
  });

  it('Number should not be a String', () => {
    const actual = isString(1);

    expect(actual).to.be.false;
  });

  it('Object should not be a String', () => {
    const actualEmpty = isString({});
    const actual = isString({ name: 'test' });

    expect(actualEmpty).to.be.false;
    expect(actual).to.be.false;
  });

  it('Boolean should not be a String', () => {
    const actual = isString(true);

    expect(actual).to.be.false;
  });
})