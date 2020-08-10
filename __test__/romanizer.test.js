import transform from 'romanize'

describe('transform', function(){
  it('should return x when input 10', () => {
    const result = transform(10);
    expect(result).toEqual('X')
  });
});