import formatEuro from './formatEuro';

describe('useEuroFormat', () => {
  it('should return a string with the euro format when receiving a string with number and comma', () => {
    const result = formatEuro('12,99');

    expect(result.replace(/\s/, ' ')).toMatch('12,99 €');
  });

  it('should return a string with the euro format when receiving a number', () => {
    const result = formatEuro(12.99);

    expect(result.replace(/\s/, ' ')).toMatch('12,99 €');
  });

  it('should return 0 in number properly formatted', () => {
    const result = formatEuro(0);

    expect(result.replace(/\s/, ' ')).toMatch('0,00 €');
  });

  it('should return 0 in string properly formatted', () => {
    const result = formatEuro('0');

    expect(result.replace(/\s/, ' ')).toMatch('0,00 €');
  });

  it('should return 0 when null', () => {
    const result = formatEuro();

    expect(result.replace(/\s/, ' ')).toMatch('0,00 €');
  });
});
