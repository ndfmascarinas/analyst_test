function save_queries(datalayer){
/*
	Task 3
	
	This function saves the contents of the object variable
	'datalayer' to the localStorage.
*/
	var datalayer_keys = Object.keys(datalayer);
	var datalayer_length = datalayer_keys.length;
	for(i=0; i<datalayer_length; i++){
		localStorage[datalayer_keys[i]] = datalayer[datalayer_keys[i]];
	}			
}
