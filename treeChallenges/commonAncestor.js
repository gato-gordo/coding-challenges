/*

Common Ancestor
Implement the function getClosestCommonAncestor and getAncestorPath in the Tree class

// Valid Child
var grandma = new Tree();
var mom = new Tree();
var uncle = new Tree();
grandma.addChild(mom);
grandma.addChild(uncle);
var me = new Tree();
mom.addChild(me);

grandma.getAncestorPath(me); // => [grandma, mom, me]
mom.getAncestorPath(me)  // => [mom, me]
me.getAncestorPath(me) // => [me]
grandma.getClosestCommonAncestor(me, uncle); // => grandma

// Invalid Child
grandma.getAncestorPath(H R Giger) // => null

*/

var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(tree1, tree2){
  if(tree1 === this || tree2 === this) return this;
  var path1 = this.getAncestorPath(tree1);
  var path2 = this.getAncestorPath(tree2);
  if(!path1 || !path2) return null;
  var anc;
  while(anc = path1.pop()){
    var found = path2.lastIndexOf(anc);
    if(found !== -1) return anc;
  }
}

Tree.prototype.getAncestorPath = function(descendant){
  if(!this.isDescendant(descendant)) return null;
  var path = [this];
  recurse(this, descendant);
  return path;
  
  function recurse(root, descendant){
    if(root.isChild(descendant)) return path.push(descendant);
    for(var i = 0; i < root.children.length; i++){
      var child = root.children[i];
      if(child.isDescendant(descendant)){
        path.push(child) && recurse(child, descendant);
      }
    }
  }
}

Tree.prototype.isChild = function(child){
  return this.children.indexOf(child) !== -1;
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};