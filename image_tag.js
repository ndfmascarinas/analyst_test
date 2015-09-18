function image_tag(datalayer, name_temp){
/*
	Task 2
	
	This function gets the object variable "datalayer", and the 
	string "name_temp" containing the URL to which the keys and
	key values from "datalayer" will be added to. The assumption
	here is that "name_temp" is similar to the example given, 
	including the character "?" before the supposed query string.
	The key and key values will be joined by the character "=", with
	each pair joined by the character "&".
	This function appends an image element to the 'body' which uses
	the source containing the 'name_temp' and the query string added
	to it.
*/
	var datalayer_keys = Object.keys(datalayer);
	var datalayer_length = datalayer_keys.length;
	for(i=0; i<datalayer_length; i++){
		name_temp += (datalayer_keys[i] + '=' + datalayer[datalayer_keys[i]]);
		if((i+1) != datalayer_length){
			name_temp += '&';
		}
	}
	var img_create = document.createElement("IMG");
	img_create.setAttribute("src", name_temp);
	document.body.appendChild(img_create);		
}