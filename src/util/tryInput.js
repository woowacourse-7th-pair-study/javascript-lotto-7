const tryInput = async (inputFn) => {
  try {
    return await inputFn;
  } catch (e) {
    // pintError
    return await tryInput(inputFn);
  }
};

export default tryInput;
