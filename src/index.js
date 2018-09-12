class Sorter {
  constructor() {
    // your implementation
    this.arr=[];
    this.typeCompare = (a, b) => a - b;
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
    indices = indices.sort((a, b) => a - b);
    var tempArr = [];
    var i = 0;
    for(i=0; i<indices.length; i++){
      tempArr.push(this.arr[indices[i]]);
    }
    tempArr = tempArr.sort(this.typeCompare);
    for(i=0; i<indices.length;i++){
      this.arr[indices[i]] = tempArr[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.typeCompare = compareFunction;
  }
}

module.exports = Sorter;