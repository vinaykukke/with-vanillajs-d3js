import Info from '../index';

let data;

beforeEach(() => {
  data = {
    "revenue": {
      "smartphone": 80000,
      "tablet": 120000,
      "total": 200000,
      "colorPhone": "#11630e",
      "colorTablet": "#5dd33f",
      "symbol": "€"
    }
  }
})
describe('Info Component', () => {
  it('should make sure that the component is constructed properly', () => {
    const component = new Info(data.revenue);
    
    expect(component).toBeInstanceOf(Info);
    expect(component).toMatchObject(data.revenue);
    expect(component).toHaveProperty('render');
  });
});