export const debounce = (cf, delay = 800) => {
  let timmer;
  return (...args) => {
    if (timmer) clearTimeout(timmer);
    timmer = setTimeout(() => {
      cf(...args);
    }, delay);
  };
};
