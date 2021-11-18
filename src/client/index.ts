import Pie from './components/Pie';
import Info from './components/Info';
import generateDataFromResponse from './helpers/data';

function get(endPointName: string) {
  fetch(`/${endPointName}`).then(res => res.json()).then(res => {
    const root = document.getElementById('root')
    const div = document.createElement('div');
    div.setAttribute('id', `container-${endPointName}`)
    root.appendChild(div);

    const data = generateDataFromResponse(res, endPointName);
    const { total, symbol } = res.data[endPointName];
    const chart = new Pie(endPointName, data, total, symbol);
    const infoElement = new Info(res.data[endPointName]);

    chart.render(`container-${endPointName}`);
    infoElement.render(`container-${endPointName}`);
  });
}

get('revenue');
get('impresions');
get('visits');