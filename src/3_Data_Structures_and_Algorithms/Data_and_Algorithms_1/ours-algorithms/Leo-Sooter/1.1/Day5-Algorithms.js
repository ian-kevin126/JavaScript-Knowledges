/////Shuffle
randArray = [11,8,-7,3,33,12,17,-10,15];

function shuffle(array) {
	for (var i = 0; i < array.length; i++) {
		rand1 = Math.floor((Math.random() * (array.length)) + 0);
		rand2 = Math.floor((Math.random() * (array.length)) + 0);
		value = array[rand1]
		array[rand1] = array[rand2];
		array[rand2] = value;
	}
	console.log(array);
	return array;
}

shuffle(randArray);

///Remove Range
numArray = [0,1,2,3,4,5,6,7,8,9,10]

function removeRange(array, start, end){
	range = (end - start) + 1;
	for (var i = start; i < array.length; i++) {
		array[i] = array[i+range];
	}
	for (var i = 0; i < range; i++) {
		array.pop();
	}
	console.log(array);
}

//removeRange(numArray, 3, 9);

/////Intermediate Sums

sumArray = [1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2];

function sums(array){
	for (var i = 0; i < array.length; i+=10) {
		var sum = 0;
		var endCount;
		if(i+10 < array.length){
			for (var k = i; k < i + 10; k++) {
				sum += array[k];
			}
			endCount = 10
		}
		else{
			for (var k = i; k < array.length; k++) {
				sum += array[k];
			}
			endCount = array.length - i;
		}
		array[array.length] = 0;
		for (var k = array.length-1; k > i+endCount; k--) {
			array[k] = array[k-1];
		}
		array[i+endCount] = sum;
		i += 1;
	}
	console.log(array);
	return array;
}

//sums(sumArray);


/////Double Trouble
dubArray = [0,1,2,3,4,5,6];

function doubleValues(array){
	for (var i = 0; i < array.length; i++) {
		array.push(0);;
		for (var k = array.length-1; k > i; k--) {
			array[k] = array[k-1];
		}
		i += 1;
	}
	console.log(array);
}

//doubleValues(dubArray);

/////Zip It

zipArray1 = [0,2,4,6,8,10];
zipArray2 = [1,3,5,7,9,11,12,13,14,15];

//zipArray1 = [0,2,4,6,8,10];
//zipArray2 = [1,3,5,7,9,11];

//zipArray1 = [0,2,4,6,8,10,12,13,14,15];
//zipArray2 = [1,3,5,7,9,11]

function zip(array1, array2){
	var arr2Length = array2.length;
	if(array2.length > array1.length){
		console.log("Shifting array2 to array1");
		for (var i = array1.length-1; i < array2.length; i++) {
			array1.push(array2[i]);
			arr2Length -= 1;
		}
	}
	var j = 0;
	for (var i = 0; i < arr2Length * 2; i+=2) {
		array1.push(0);
		for (var k = array1.length-1; k > i; k--) {
			array1[k] = array1[k-1];
		}
		array1[i+1] = array2[j];
		j += 1;
	}
	console.log(array1);
	return array1;
}

//zip(zipArray1, zipArray2);
