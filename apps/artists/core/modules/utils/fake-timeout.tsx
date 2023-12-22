// eslint-disable-next-line @typescript-eslint/explicit-function-return-type -- ^^
function fakeTimeout(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default fakeTimeout;
