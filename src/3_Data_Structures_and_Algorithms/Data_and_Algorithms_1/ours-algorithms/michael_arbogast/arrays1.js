var arr = [1,2,3,4];

function pushFront(array, value) {
	for (var i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
		array[i+1] = array[i];
	}
	array[0] = value;
	return array;
}
console.log(pushFront(arr, 5))
