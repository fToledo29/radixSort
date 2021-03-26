
const countingSort = (inpArr, size, pos) => {
	
	const outputArr = Array.from({length: size}, () => 0);
	const range = 10;
	let countArr = Array.from({length: range}, () => 0);
	let i = 0;
	while(i < size) {

		const position = parseInt((inpArr[i] / pos) % 10, 10);

		countArr[position] = countArr[position] + 1;

		i++;
	}
	i = 1;
	while(i < range) {
		
		countArr[i] = countArr[i] + countArr[i - 1];

		i++;

	}
	i = size - 1;
	while(i >= 0) {

		let countPoss = parseInt((inpArr[i] / pos) % 10);

		let outputPos = --countArr[countPoss];

		outputArr[outputPos] = inpArr[i];

		i--;
	}
	return outputArr;
}

const radixSort = (arr) => {

	/**
	 * Getting the size of the given array, will help us to create 
	 * our output array also to loop through the values to be sorted.
	 */
	const n = arr.length;

	/**
	 * Getting the maximum value inside the given array.
	 * Helps us to loop through the position of the digit to be sorted.
	 */
	const maxValue = arr.reduce((acc, val, ind) => acc > val ? acc : val, 0);

	// Start the initial position (1/10/100/1000...n)
	// (expo/pos/div)
	let pos = 1;

	/**
	 * The loop depends mostly on the maximum value of the given array.
	 * If mmax value is 11 it will loop only 2 times, if it's 111 will
	 * loop 3 times 1111 4 times and so on.
	 */
	while(parseInt(maxValue / pos, 10) > 0) {

		/**
		 * Given array will get a sorted from the least significant digit
		 * to the most significant digit. Ex. 111 will start from rigth
		 * to left:  1 <- 1 <- 1
		 * 
		 * So "pos" will help with it
		 */
		arr = countingSort(arr, n, pos);

		/**
		 * As "pos" will be helping, it will increase its value 10 times each loop.
		 */
		pos = parseInt((pos * 10), 10);
	}

	return arr;
	
}


const inputArr = [170, 45, 75, 90, 802, 24, 2, 66];

const res = radixSort(inputArr);

console.log(res);