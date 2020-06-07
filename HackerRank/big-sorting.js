// https://www.hackerrank.com/challenges/big-sorting/problem

let startArray = [31415926535897932384626433832795, 1, "3", 10, 3, 5];

 function bigSorting(unsorted) {
    unsorted.sort(function(a,b){
        if(a.length == b.length){
            return a > b ? 1 : -1;
        }
        return a.length - b.length; 
    });
    return unsorted;
}

bigSorting(startArray);
