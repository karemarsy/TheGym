function roundRobin(jobs, slice, index) {
  let totalTime = 0;
  const queue = [];

  for (let i = 0; i < jobs.length; i++) {
    queue.push(i);
  }

  while (queue.length > 0) {
    const currentJob = queue.shift();

    // Calculate the remaining time for the current job
    const remainingTime = Math.max(0, jobs[currentJob] - slice);

    totalTime += Math.min(jobs[currentJob], slice);

    if (remainingTime > 0) {
      queue.push(currentJob);
    } else if (currentJob === index) {
      return totalTime;
    }

    jobs[currentJob] = remainingTime;
  }

  return totalTime;
}
