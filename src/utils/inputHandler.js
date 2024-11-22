export const inputHandler = async (inputFn) => {
  try {
    return await inputFn();
  } catch (e) {
    console.log(e.message);
    return await inputHandler(() => inputFn());
  }
};
