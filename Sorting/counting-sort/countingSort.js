const countingSort = (arr = []) => {
   const max = Math.max(...arr);
   const counts = new Array(max + 1);
   counts.fill(0);
   arr.forEach(value => counts[value]++);
   const res = [];
   let resultIndex = 0;
   counts.forEach((count, index) => {
      for (let i = 0; i < count; i++) {
         res[resultIndex] = index;
         resultIndex++;
      };
   });
   return res;
};
