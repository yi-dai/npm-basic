import {trans} from '../src/romanizer'

describe('transform', function(){
  it('should return x when input 10', () => {
    const result = trans(10);
    expect(result).toEqual('X');
  });
});