import {flatten,concat} from "lodash";
//转化成下面的方式
// import flatten from "lodash/flatten";
// import concat from "lodash/flatten";
console.log(flatten([1, 2, [3, 4, [5, 6]]]));
console.log(concat([1, 2], [3, 4]));