// Brie’s Drawing teacher asks her class to open their books to a page number. Brie can either start turning pages from the front of the book or from the back of the book. She always turns pages one at a time. When she opens the book, page  is always on the right side:

// When she flips page 1, she sees pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and she wants to turn to page p, what is the minimum number of pages she will turn? She can start at the beginning or the end of the book.

// Given n and p, find and print the minimum number of pages Brie must turn in order to arrive at page p.

// Function Description
// Complete the pageCount function in the editor below. It should return the minimum number of pages Brie must turn.

// pageCount has the following parameter(s):
// n: the number of pages in the book
// p: the page number to turn to

// Input Format
// The first line contains an integer n, the number of pages in the book.
// The second line contains an integer, p, the page that Brie's teacher wants her to turn to.

// Print an integer denoting the minimum number of pages Brie must turn to get to page .

// Sample Input
// 6
// 2

// Sample Output
// 1

// Explanation 
// If Brie starts turning from page 1, she only needs to turn  1page
// If Brie starts turning from page 6, she needs to turn 2 pages
// Because we want to print the minumum number of page turns, we print 1 as our answer.

// Sample Input 2
// 5
// 4

// Sample Output 2
// 0

// Explanation 2
// If Brie starts turning from page 1, she needs to turn 2 pages
// If Brie starts turning from page 5, she doesn't need to turn any pages
// Because we want to print the minimum number of page turns, we print 0 as our answer.

let pagesOfBook = 2;
let pageNeeded = 1;


function pageCount(n, p) {
    let firstPage = 1;
    let answer1 = Math.ceil((p - firstPage) / 2);
    let answer2 = Math.floor((n - p) / 2);
    console.log(answer1,answer2)

    if(n%2 == 0 && n - p == 1) {console.log(1)}

    return (n == 2 && p == 1) ? 0
    : (n%2 == 0 && n - p == 1) ? 1
    : (p == firstPage || p == n || n - p == 1) ? 0 
    : (answer1 < answer2) ? answer1 
    : (answer1 > answer2) ? answer2
    : (answer1 == answer2) ? answer1
    : answer2;
}

pageCount(pagesOfBook, pageNeeded);
