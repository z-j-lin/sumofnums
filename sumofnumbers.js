const testlist = [1, 2, 3, 4];

function sumfor(list){
  let sum = 0;
  for (const num of list){
    sum += num;
  }
  return sum;
}

console.log(sumfor(testlist))

function sumwhile(list){
  let sum = 0;
  let i = 0;
  while (i < list.length){
    sum += list[i];
    i++;
  }
  return sum;
}

console.log(sumwhile(testlist));

function sumrecurs(list){
  if (list.length === 0){
    return 0;
  }

  return list[0] + sumrecurs(list.slice(1,list.length));
}

console.log(sumrecurs(testlist));

function sumTheSimpleWay(list){
 return _.reduce(list, function(memo, num){return memo + num;}, 0);
}
console.log(sumTheSimpleWay(testlist));