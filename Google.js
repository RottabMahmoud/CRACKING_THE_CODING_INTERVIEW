// how to go back in time 5 consecutive times using settimeout() in JS ?

function goBackInTime(step) {
  console.log(`Going back in time, step ${step}`);
}

// Schedule 5 consecutive steps to go back in time
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    goBackInTime(i);
  }, i * 1000); // 1 second delay between each step
}
