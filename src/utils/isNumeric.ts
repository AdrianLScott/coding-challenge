function isNumeric(value: string | number): boolean {
  return !isNaN(Number(value))
}

export default isNumeric;