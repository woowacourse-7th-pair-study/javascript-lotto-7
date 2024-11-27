
const stringToNumber = (string) => {
  return Number(string);
}

const stringToArray = (string) => {
  return string.split(',').map((stringNum) => Number(stringNum.trim()));
}

const parser = {
  stringToNumber,
  stringToArray,
}

export default parser;
