array = [38, 2, 17, 77, 7, 0, -29, 9, 1, 57, 11, 95, 12, -7, 33]
function quickSort(array, left, right) {
	var centr = array[Math.floor((right + left)/2)];
	var i = left;
	var k = right;
	while (i < k) {
		while (array[i] < centr) {
			i++;
		};
		while (array[k] > centr) {
			k--;
		};
		if (i <= k) {
			var tmp = array[i];
			array[i] = array[k];
			array[k] = tmp;
			i++;
			k--;
		};
	};
	if (left < k) {
		quickSort(array, left, k);
		
	};
	if (i < right){
		quickSort(array, i, right);
	};
	return array;
};
var res = quickSort(array, 0, array.length-1);
console.log(res);
   