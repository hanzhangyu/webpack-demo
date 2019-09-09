const sleep = timeout => new Promise(resolve => setTimeout(resolve, timeout));

export const asyncFN = async () => {
  await sleep(400);
  console.warn("sleep");
  await sleep(400);
  return "1";
};

export const unused = 1;
