const stringToNumber = (string) => {
  return Number(string);
};

const stringToNumArray = (string) => {
  return string.split(",").map((val) => Number(val.trim()));
};

const parser = {
  stringToNumber,
  stringToNumArray,
};

export default parser;
