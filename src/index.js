class Sorter {

  constructor() {
		this.arr = new Array();
		this.compar = function(a, b) {
			return a - b;
		}
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
   return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
		let tmpArr = new Array();
		for(let i=0; i < indices.length; i++) {
			tmpArr.push(this.arr[indices[i]]);
		}
		tmpArr.sort(this.compar);
		indices.sort();
		for(let i=0; i < indices.length; i++) {
			this.arr[indices[i]] = tmpArr[i];
		}
		return this.arr;
  }

  setComparator(compareFunction) {
    this.compar = compareFunction;
  }
}

module.exports = Sorter;