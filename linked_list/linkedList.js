var LinkedList = function (initialValue) {
  this.head = initialValue !== undefined ?
    new Node(initialValue) : null
  this.tail = this.head
}
LinkedList.prototype.addToTail = function(value){
  var node = new Node(value)
  if (this.head === null) {
    this.head = node
    this.tail = node
  } else {
    this.tail.next = node
    this.tail      = node
  }
}
LinkedList.prototype.removeHead = function(){
  if (!this.head) {
    return 
  } else if (!this.head.next){
    this.tail = null
    this.head = null
  } else {
    this.head = this.head.next
  }
}
LinkedList.prototype.contains = function(value){
  var current = this.head
  while (current !== null) {
     if (current.value === value) return true
     current = current.next
  }
  return false
}
var Node = function(value){ 
  this.value = value !== undefined ? value : null
  this.next  = null
}