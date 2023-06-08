function getArrayNestingLevel(arr, level = 0) {
    let maxLevel = level;
  
    for (const item of arr) {
      if (Array.isArray(item)) {
        const nestedLevel = getArrayNestingLevel(item, level + 1);
        maxLevel = Math.max(maxLevel, nestedLevel);
      }
    }
  
    return maxLevel;
  }
  

  function flattenArray(arr) {
    const nestingLevel = getArrayNestingLevel(arr);
    return arr.flat(nestingLevel);
  }