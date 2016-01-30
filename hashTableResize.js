/*

Hash Table Resizing
makeHashTable should exist
makeHashTable should be a function
makeHashTable should return a hash table
makeHashTable should return different instances of hash tables each time
hashTable #insert should exist as a method of hashtable instances
hashTable #insert should take exactly two arguments. a key and a value
hashTable #insert should allow keys to be reinserted with new values
hashTable #retrieve should be a method of hashTable instances
hashTable #retrieve should be a function
hashTable #retrieve should take exactly one argument
hashTable #retrieve should return values previously inserted
hashTable #retrieve should return undefined for unknown keys
hashTable #insert should allow valus to be updated
hashTable #remove should exist as a method of the hashTable instance
hashTable #remove should be a function
hashTable #remove should take exactly one argument
hashTable #remove should allow values to be removed
hashTable #insert should handle collisions
hashTable should be able to resize
Define a resize function in the following hash table implementation.

Your Code Should Pass:

var should = chai.should();

describe('makeHashTable', function(){
  it('should exist', function(){
    should.exist(makeHashTable);
  });
  it('should be a function', function(){
    makeHashTable.should.be.a.Function;
  });
  it('should return a hash table', function(){
    var hashTable = makeHashTable();
    should.exist(hashTable);
    hashTable.should.be.an.Object;
  });
  it('should return different instances of hash tables each time', function(){
    var hashTable1 = makeHashTable();
    should.exist(hashTable1);

    var hashTable2 = makeHashTable();
    should.exist(hashTable2);
    hashTable1.should.not.be.equal(hashTable2);
    // `makehashTable()` should create a new hash table object instance
    // everytime but it's not!
  });
});

describe('hashTable', function(){
  describe('#insert', function(){
    it('should exist as a method of hashtable instances', function(){
      var hashTable = makeHashTable();
      should.exist(hashTable.insert);
    })
    it('should take exactly two arguments. a key and a value', function(){
      var hashTable = makeHashTable();
      hashTable.insert.length.should.equal(2);
      /**
        a hashtable gets its awesomeness from associating data. it wouldn't be
        very useful if you just gave it data without any association.
        ie, bad hash table:
        you: hey hashtable, can you please remember "sarah" (key)?
        hashtable: um... okay?
        ... sometime later...
        you: hey hastable, when's "sarah"'s (key) birthday?
        hashtable: "sarah"
        you: Um.. this is awkward...
        ie, good hashtable:
        you: hey hashtable, please remember that "sarah"s (key) birthday is
        "January 23rd" (value)
        hashtable: okay, friend. you got it!
        ... sometime later ...
        you: hey hashtable, when's "sarah"'s (key) birthday?
        hashtable: "January 23rd"
        you: thanks hashtable, you're awesome!
        hashtable: i know
      */
    });
/*    it('should not throw an error with valid input', function(){
      (function(){
        var hashTable = makeHashTable();
        hashTable.insert('keanu reeves best movie', 'The Matrix');
        // calling insert should not throw an error
      }).should.not.throw();
    });*/
    it('should allow keys to be reinserted with new values', function(){
      var hashTable = makeHashTable();
      (function(){
        hashTable.insert('keanu reeves best movie', 'Bill & Ted\'s Excellent Adventure');
        hashTable.insert('keanu reeves best movie', 'The Matrix');
      }).should.not.throw();
    });
    /*it('should throw an error if keys are not strings', function(){
      // not a HUDGE deal but only strings should be keys. regular objects
      // converted to strings are always '[object Object]'
      var hashTable = makeHashTable();
      (function(){
        hashTable.insert({foo:'bar'}, 'oh no!');
      }).should.throw();
    });*/
  });

  describe('#retrieve', function(){
    it('should be a method of hashTable instances', function(){
      var hashTable = makeHashTable();
      should.exist(hashTable.retrieve);
    })
    it('should be a function', function(){
      var hashTable = makeHashTable();
      hashTable.retrieve.should.be.a.Function;
    });
    it('should take exactly one argument', function(){
      var hashTable = makeHashTable();
      // the retrieve function should only take a single `key` argument
      hashTable.retrieve.length.should.equal(1);
    })
    it('should return values previously inserted', function(){
      var hashTable = makeHashTable();
      hashTable.insert('William Shatner\'s most well known role', 'Captain Kirk');
      var value = hashTable.retrieve('William Shatner\'s most well known role');
      should.exist(value);
      value.should.be.equal('Captain Kirk');
    });
    it('should return undefined for unknown keys', function(){
      var hashTable = makeHashTable();
      should.not.exist(hashTable.retrieve('echo?'));
    });
  });

  describe('#insert', function(){
    it('should allow valus to be updated', function(){
      var hashTable = makeHashTable();
      hashTable.insert('Tarantino\'s best movie', 'Jackie Brown');
      hashTable.insert('Tarantino\'s best movie', 'Pulp Fiction');
      var value = hashTable.retrieve('Tarantino\'s best movie');
      should.exist(value);
      value.should.be.equal('Pulp Fiction');
    });
  });

  describe('#remove', function(){
    it('should exist as a method of the hashTable instance', function(){
      var hashTable = makeHashTable();
      should.exist(hashTable.remove);
    });
    it('should be a function', function(){
      var hashTable = makeHashTable();
      hashTable.remove.should.be.a.Function;
    });
    it('should take exactly one argument', function(){
      var hashTable = makeHashTable();
      // the remove function should only take a single `key` argument
      hashTable.remove.length.should.equal(1);
    });
    it('should allow values to be removed', function(){
      var hashTable = makeHashTable();
      hashTable.insert('Spielberg\'s best movie', 'Jaws');
      hashTable.remove('Spielberg\'s best movie');
      var value = hashTable.retrieve('Spielberg\'s best movie');
      should.not.exist(value);
    });
  });

  describe('#insert', function(){
    it('should handle collisions', function(){
      var hashTable = makeHashTable();
      (function(){
        var n = 1000;
        for(var i = 0; i < n; i++){
          hashTable.insert('userid:' + (i++), 'Jamie Hyneman');
        }
      }).should.not.throw();
    });
  });
  it('should be able to resize', function(){
    // if your hashtable isn't resizing, its going to start running more
    // and more slowly with a large number of inserts and retrievals.
    var hashTable = makeHashTable();
    var n = 10, id = 0, diffs = [];
    var endTime, startTime;
    for(var i = 0; i <= n; i++){
      startTime = new Date();
      for(var j = 0; j < 1000; j++){
        hashTable.insert('userid:' + (id++), 'Syd Mead');
      }
      for(j = 0; j < 100; j++){
        hashTable.retrieve('userid:' + Math.floor(Math.random() * i));
      }
      endTime = new Date();
      diffs.push(endTime - startTime);
    }
    var sum = function(arr){
      var total = 0;
      for(var i = 0;i < arr.length; i++) {
        total += arr[i];
      }
      return total;
    }
    // we should expect the first iteration to take up ruffly 1 / n
    // of the total time. we give it some wiggle room by letting it be as
    // low as a 1 / (n*2) of the total duration.
    var ratio = (diffs[0] / sum(diffs));
    ratio.should.be.above( 1 / ( n * 2 ));
  });
});



*/

var makeHashTable = function(){
  var result = {},  storage = [], storageLimit = 4,  size = 0; resize = false;

  var resize = function(newSize){
     var old = storage.slice();
     storageLimit = newSize;
     old.forEach( pot => pot.forEach( keyVal =>
      result.insert(keyVal[0], keyVal[1])
    ));
  }
  
//*************************//  
  
  result.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var pairs = storage[index];
    var pair;
    var replaced = false;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        pair[1] = value;
        replaced = true;
      }
    }

    if (!replaced) {
      pairs.push([key, value]);
      size++;
    }
    if(size >= storageLimit * 0.75){
      // increase the size of the hash table
      resize(storageLimit * 2);
    }
  };

  result.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    if (!pairs) { return; }
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair && pair[0] === key) {
        return pair[1];
      }
    }
  };

  result.remove = function(key){

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var value = pair[1];
        delete pairs[i];
        size--;
        if(size <= storageLimit * 0.25){
          // decrease the size of the hash table
          resize(storageLimit / 2);
        }
        return value;
      }
    }
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};