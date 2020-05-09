import { shape, arrayOf, string, number } from 'prop-types';
import { ArrayWithLengthAndType } from './utils';

export const PriceDataItem = shape({
  date: string.isRequired,
  open: number.isRequired,
  high: number.isRequired,
  low: number.isRequired,
  close: number.isRequired,
  adjClose: number.isRequired,
  volume: number.isRequired,
  symbol: string.isRequired
});

const Point = ArrayWithLengthAndType(2, Number);

export const TechAnalysisLineItem = shape({
  start: Point,
  end: Point,
  importance: number
});

export const ChartType = shape({
  priceData: arrayOf(PriceDataItem),
  techAnalysis: shape({
    lines: arrayOf(TechAnalysisLineItem)
  })
});
