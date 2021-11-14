import numberToOrdinal from './index';

it("Number to ordinal conversion", () => {
  expect(numberToOrdinal(1)).toBe("1st");
  expect(numberToOrdinal(2)).toBe("2nd");
  expect(numberToOrdinal(3)).toBe("3rd");
  expect(numberToOrdinal(10)).toBe("10th");
  expect(numberToOrdinal(11)).toBe("11th");
  expect(numberToOrdinal(12)).toBe("12th");
  expect(numberToOrdinal(21)).toBe("21st");
  expect(numberToOrdinal(27)).toBe("27th");
  expect(numberToOrdinal(111)).toBe("111th");
})