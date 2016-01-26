var mapString = '0...0\n0...0\n00000';
countIslands(mapString);

function countIslands (mapStr) {
  var b = mapStr.split('\n').map(r => r.split('').map( p => p === "0" ? 1 : 0)),
      isles = [];
  b.forEach((r, rI) => r.forEach( (p, cI) => { if(p) genIsle(rI, cI)  }));
  return isles.length;
    
  function genIsle(r, c){
    var found = false;
    for(var i = 0; i < isles.length; i++){
      if(isles[i][[r, c]]) return;
      if(hasNear(r, c, isles[i])){ isles[i][[r, c]] = true; found = true; }
    }
    if(!found) { var map = {}; map[[r, c]] = true;  isles.push(map); }
    genNear(r, c).forEach( near => genIsle(near[0], near[1]));
  }
  function hasNear(r, c, i){
    return  i[ [r - 1, c] ] || i[ [r + 1, c] ] ||
            i[ [r, c - 1] ] || i[ [r, c + 1] ];
  }
  function genNear(r, c){
    var near = [];
    if(b[r - 1] && b[r - 1][c]) near.push([r - 1, c]);
    if(b[r + 1] && b[r + 1][c]) near.push([r + 1, c]);
    if(b[r][c - 1])             near.push([r, c - 1]);     
    if(b[r][c + 1])             near.push([r, c + 1]);
    return near;
  }
}
