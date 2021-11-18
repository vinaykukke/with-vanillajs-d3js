import Pie from '../index';
import generateDataFromResponse from '../../../helpers/data';
import { isExportDeclaration } from 'typescript';

let res;

beforeEach(() => {
  res = {
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
});

describe('Pie Component', () => {
  it('should make sure that the component is constructed properly', () => {
    const generatedData = generateDataFromResponse(res, 'revenue');
    const component = new Pie('revenue', generatedData, res.data.revenue.total, '€');
    expect(component).toBeInstanceOf(Pie);
    expect(component).toHaveProperty('render');
  });
});