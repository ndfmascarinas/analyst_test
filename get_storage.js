function get_storage(){
/*
	Task 3
	
	This function retrieves the contents in the localStorage.
	The assumption here is that only the key names used in Task 1
	will be retrieved, if in case the localStorage contains
	values that were not from the query string in Task 1.
*/
	var storage_key = Object.keys(localStorage);
	var datalayer_length = storage_key.length;
	var key_query = ['pia.ca', 'pie.de', 'in.gn', 'pin.fn', 'pip.de',
					'oi.na', 'ps.na', 'pl.ci', 'pl.re', 'pl.co'];
	var data_val = {};
	
	for(var x in key_query){
		if(storage_key.indexOf(key_query[x]) > -1){
			data_val[key_query[x]] = localStorage[key_query[x]];
		}
	}
	return data_val;
}