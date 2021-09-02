//-----------------------------------------------------------------------
function shuffle(arr){
	var top_index=arr.length;
	var swap=0;
	for (i=0; i<=top_index; i++){
		index1=Math.floor((Math.random() * top_index) + 0);
		index2=Math.floor((Math.random() * top_index) + 0);
		swap=arr[index2];
		arr[index2]=arr[index1];
		arr[index1]=swap;
	}
	return arr;
}
//-----------------------------------------------------------------------
