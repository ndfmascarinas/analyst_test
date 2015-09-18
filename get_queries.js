function get_queries(URL_string){
/*
	Task 1
	
	This function get_queries() accepts the variable "URL_string"
	and splits them first by the "?" giving the (1) main webpage 
	and (2) query string. The query string will be split by
	the character "=". The assumption here is that only the non-empty
	query and those not equal to "purl" will be returned as object
	key values using the object "datalayer_temp".
*/
	var url_temp = URL_string.split('?')[1];
	var split_url = url_temp.split('&');
	var num_queries = split_url.length;
	var datalayer_temp = {};
	for(i=0; i< num_queries; i++){
		var query_item = split_url[i].split("=");
		if(query_item[1]!="" && query_item[1]!="purl"){
			datalayer_temp[query_item[0]] = query_item[1];
		}
	}
	return datalayer_temp
}