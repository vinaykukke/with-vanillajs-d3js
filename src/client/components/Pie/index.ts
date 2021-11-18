import * as d3 from 'd3/dist/d3.min.js';
import numberToString from '../../helpers/number';

export default class Pie {
  private pie: any;
  private w: number;
  private h: number;
  private outerRadius: number;
  private innerRadius: number;
  private arc: any;
  private dataset: any[];
  private name: string;
  private total: number;
  private symbol: string;

  constructor(name: string, data: any[], total: number, symbol?: string) {
    this.w = 200;
    this.h = 200;
    this.dataset = data;
    this.name = name;
    this.total = total;
    this.symbol = symbol ? symbol : '';

    this.pie = d3.pie()
      .value(function (d) { return d.value })
      .sort(d3.descending);

    this.outerRadius = this.w / 2;
    this.innerRadius = this.outerRadius - 10;

    this.arc = d3.arc()
      .outerRadius(this.outerRadius)
      .innerRadius(this.innerRadius)
  }

  public render(containerName: string) {
    const color = d3.scaleOrdinal(d3.schemeCategory10);
    const svg = d3.select(`#${containerName}`)
      .append("svg")
      .attr('width', this.w)
      .attr('height', this.h)
      .attr('class', 'svg-element')
      .append('g')
      .attr('transform', 'translate(' + this.w / 2 + ',' + this.h / 2 + ')');

    svg.append('text')
      .text(this.name)
      .attr('style', 'text-transform: uppercase; font-size: 20px;')
      .attr('x', '0')
      .attr('y', '-20')
      .attr('alignment-baseline', 'middle')
      .attr('text-anchor', 'middle')
      .attr('fill', 'lightgrey');

    svg.append("text")
      .text(numberToString(this.total) + ` ${this.symbol}`)
      .attr('style', 'font-size: 25px;')
      .attr('x', '0')
      .attr('y', '10')
      .attr('alignment-baseline', 'middle')
      .attr('text-anchor', 'middle')

    const path = svg.selectAll('path')
      .data(this.pie(this.dataset))
      .enter()
      .append('path')
      .attr('d', this.arc)
      .attr('fill', function (d, i) {
        return d.data.color;
      });
    
    const arc = this.arc;
    path.transition()
      .duration(1000)
      .attrTween('d', function (d) {
        var interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function (t) {
          return arc(interpolate(t));
        };
      });
  }
}