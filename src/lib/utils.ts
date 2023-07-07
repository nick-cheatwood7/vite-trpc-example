/**
 * @description simulates an asynchronous action
 * @param ms the number of milliseconds in which the callback will be delayed
 * @returns Promise
 */
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));