/*

Linked List Cycles
hasCycle should be exist
hasCycle should be a function
hasCycle should take at least one argument
hasCycle should return something
hasCycle should return a boolean
hasCycle should return false for a linked list with only 1 node that ponits to null
hasCycle should return true for a linked list with only 1 node that points to itself
hasCycle should return false for a non-cyclical linked list of size 2
hasCycle should return true for a cyclical linked list of size 2
hasCycle should return false for a non-cyclical linked list of size 3
hasCycle should return true for a cyclical linked list of size 3
hasCycle should return false for a medium sized non-cyclical linked list
hasCycle should return true for a medium sized cyclical linked list
hasCycle should return false for a large sized non-cyclical linked list
hasCycle should return true for a large sized cyclical linked list
Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

Explanation:

Generally, we assume that a linked list will terminate in a null next pointer, as follows:

 A -> B -> C -> D -> E -> null
A ‘cycle’ in a linked list is when traversing the list would result in visiting the same nodes over and over.

This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:

 A -> B -> C
      ^    |
      |    v
      E <- D
'Constraint 1: Do this in linear time'

'Constraint 2: Do this in constant space'

'Constraint 3: Do not mutate the original nodes in any way'

*/

var hasCycle = function(linkedList){
  var hare = linkedList, tortoise = linkedList, time = 0;
  while(hare = hare.next){
    if (hare.value === tortoise.value) return true;
    if(time % 2) tortoise = tortoise.next;    
  }
  return false;
};