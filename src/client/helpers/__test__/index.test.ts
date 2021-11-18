import numberToString from '../number';
import generateData from '../data';

describe('Helper functions', () => {
  it('converts a number to metric string', () => {
    expect(numberToString(2)).toBe('2');
    expect(numberToString(20)).toBe('20');    
    expect(numberToString(2000)).toBe('2.000');
    expect(numberToString(20000)).toBe('20.000');
    expect(numberToString(200000)).toBe('200.000');
    expect(numberToString(2000000)).toBe('2.000.000');
  });
  
  it('generates data in the required format', () => {
    const res = {
      "data": {
        "revenue": {
          "smartphone": 80000,
          "tablet": 120000,
          "total": 200000,
          "colorPhone": "#11630e",
          "colorTablet": "#5dd33f",
          "symbol": "€"
        }
      }
    }

    const generatedData = generateData(res, 'revenue');
    expect(generatedData).toMatchObject([
      { "value": 80000, "color": "#11630e" },
      { "value": 120000, "color": "#5dd33f" }      
    ]);
  });
})