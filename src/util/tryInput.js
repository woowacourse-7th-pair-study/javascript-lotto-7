import OutputView from '../view/OutputView.js';

const tryInput = async (inputFn) => {
  try {
    return await inputFn();
  } catch (error) {
    OutputView.printError(error.message);
    return await tryInput(inputFn);
  }
};

export default tryInput;
