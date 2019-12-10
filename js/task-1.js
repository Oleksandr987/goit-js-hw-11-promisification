/* eslint-disable no-new */
/* eslint-disable linebreak-style */
const delay = (ms) => {
  const promis = new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
  return promis;
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
