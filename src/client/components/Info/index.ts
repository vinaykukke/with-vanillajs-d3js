import numberToString from '../../helpers/number';

export default class Info {
  private tablet: number;
  private smartphone: number;
  private total: number;
  private colorPhone: string;
  private colorTablet: string;
  private symbol: string;

  constructor(data) {
    this.tablet = data.tablet;
    this.smartphone = data.smartphone;
    this.total = data.total;
    this.colorPhone = data.colorPhone;
    this.colorTablet = data.colorTablet;
    this.symbol = data.symbol ? data.symbol : '';
  }

  private createElement(props): HTMLElement {
    const { attributes, element } = props;
    const createdElement = document.createElement(element);

    for (let attr in attributes) {
      createdElement.setAttribute(attr, attributes[attr]);
    }

    return createdElement;
  }

  private getElementsObject(containerName) {
    const container = document.getElementById(containerName);
    const divContainer = this.createElement({ element: 'div', attributes: { class: 'info-container' } });
    const divTablet = this.createElement({ element: 'div' });
    const tabletTitle = this.createElement({ element: 'div', attributes: { style: `color: ${this.colorTablet}`, class: 'title' } });
    const phoneTitle = this.createElement({ element: 'div', attributes: { style: `color: ${this.colorPhone}`, class: 'title' } });
    const tabletNumber = this.createElement({ element: 'div', attributes: { class: 'info-numbers' } });
    const divPhone = this.createElement({ element: 'div' });
    const phoneNumber = this.createElement({ element: 'div', attributes: { class: 'info-numbers' } });

    return {
      container,
      divContainer,
      divTablet,
      tabletTitle,
      phoneTitle,
      tabletNumber,
      divPhone,
      phoneNumber
    }
  }

  private calculatePercentage(data: number): string {
    const percentage = (data / this.total) * 100;
    return percentage + '%';
  }

  public render(containerName: string) {
    const elements = this.getElementsObject(containerName);
    const {
      container,
      divContainer,
      divTablet,
      tabletTitle,
      phoneTitle,
      tabletNumber,
      divPhone,
      phoneNumber
    } = elements;

    phoneTitle.innerHTML = 'Smartphones';
    tabletTitle.innerHTML = 'Tablets';
    tabletNumber.innerHTML = 
      `${this.calculatePercentage(this.tablet)} 
        <span> 
        ${numberToString(this.tablet)} ${this.symbol}
        </span>
      `;
    phoneNumber.innerHTML = 
      `${this.calculatePercentage(this.smartphone)} 
        <span> 
        ${numberToString(this.smartphone)} ${this.symbol}
        </span>
      `;

    divTablet.appendChild(tabletTitle);
    divPhone.appendChild(phoneTitle);
    divTablet.appendChild(tabletNumber);
    divPhone.appendChild(phoneNumber);
    divContainer.appendChild(divTablet);
    divContainer.appendChild(divPhone);
    container.appendChild(divContainer);
  }
}