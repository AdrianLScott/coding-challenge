import maskCreditCard from '.';

it('Evaluar credit card masking', () => {
    expect(maskCreditCard('5234123412349876')).toBe('5xxxxxxxxxxx9876');
    expect(maskCreditCard('123456')).toBe('123456');
    expect(maskCreditCard('12345678')).toBe('1xxx5678');
})
