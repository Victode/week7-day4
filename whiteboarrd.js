/* 
Given an array of strings words, return the words that can be typed using letters of the 
alphabet on only one row of American keyboard like the image below.
In the American keyboard:
the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".
Example 1:
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Example 2:
Input: words = ["omk"]
Output: []
Example 3:
Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"] 
*/

var findWords = function (words) {
    row_1 = ['qwertyuiop']
    row_2 = ['asdfghjkl']
    row_3 = ['zxcvbnm']

    
    for (i in words) {
        let word = i.split("")
        for (x in word) 
    }
    
    console.log(findWords(["Hello","Alaska","Dad","Peace"]))
    console.log(findWords(["omk"]))
    console.log(findWords(["adsdf","sfd"]))