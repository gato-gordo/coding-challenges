/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const pathStack = [];
    let pointer = 0;
    while (pointer < path.length) {
        const index = path.indexOf('/', pointer)
        if (index === pointer) {
          if (!pathStack.length) {
            pathStack.push('/')
          }
          pointer++;
          continue;
        }

        if (index === -1) {
          const segment = path.slice(pointer)
          if (segment === '..') {
              if (pathStack.length > 1) {
                pathStack.pop()
              }
          } else if (segment !== '.') {
            pathStack.push(segment)
          }
          break;
        }
        
      const segment = path.slice(pointer, index)
      if (segment === '..') {
          if(pathStack.length > 1) {
            pathStack.pop();
          }
      } else if (segment !== '.') {
        pathStack.push(segment + '/')
      }
      pointer = index + 1;
    }
    if (pathStack.length > 1) {
        let lastIndex = pathStack.length -1;
        let lastVal = pathStack[lastIndex];
        if (lastVal[lastVal.length - 1] === '/') {
          pathStack[lastIndex] = lastVal.slice(0, -1)
        }
    }
    return pathStack.join('')
};