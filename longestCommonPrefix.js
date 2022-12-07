/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  let firstLett = "";
  for ( var i = 0; i < strs.length; i++ ) {
    let firstChar = strs[i][0];
      if ( firstLett === "" ) {
          firstLett = firstChar;
      } else if ( firstChar !== firstLett ) {
          return "";
      }
  }
  const newStrs = strs.map( ele => ele.substring( 1 ) );
  return firstLett + longestCommonPrefix( newStrs );
};