const hash = function (string, max) {
  let hash = 0;
  for (let i = 0; i < string.length; i ++) {
    hash += string.charCodeAt(i);
  }

  return hash % max;
}


const HashTable = function () {
  let bucket = [];
  const bucketLimit = 4;

  this.print = function () {
    console.log(bucket);
  }

  this.search = function (key) {
    const index = hash(key, bucketLimit);
    if (bucket[index] === undefined) {
      return undefined;
    }

    for (let i = 0; i < bucket[index].length; i++) {
      if (bucket[index][i][0] === key) {
        return bucket[index][i][1];
      }
    }
  }

  this.remove = function (key) {
    const index = hash(key, bucketLimit);

    if (bucket[index].length === 1 && bucket[index][0][0] === key) {
      delete bucket[index];
    } else {
      for (let i = 0; i < bucket[index].length; i++) {
        if (bucket[index][i][0] === key) {
          delete bucket[index][i];
        }
      }
    }
  }

  this.add = function (key, value) {
    const index = hash(key, bucketLimit);

    if (bucket[index] === undefined) {
      bucket[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < bucket[index].length; i++) {
        if (bucket[index][i][0] === key) {
          bucket[index][i][1] = value;
          inserted = true;
        }
      }

      if (inserted === false) {
        bucket[index].push([key, value]);
      }
    }
  }
}

const ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosaur');
ht.add('tux', 'penguin');
ht.remove('beau')

ht.print()

