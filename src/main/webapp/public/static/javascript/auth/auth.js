function make_basic_auth(user, password) {
  var token = user + ':' + password;
  var hash = btoa(token);
//  var hash = $.base64.encode(token);
  return "Basic " + hash;
}

function $_ajaxAuth(url,username,password){
	var auth = make_basic_auth(username,password);
	var $defer = jQuery.Deferred();
	
	// jQuery
	$.ajax({
	    url : url,
	    method : 'GET',
	    beforeSend : function(req) {
	        req.setRequestHeader('Authorization', auth);
	    },
	    success:function(data){
	    	$defer.resolve(data);
	    },
	    error:function(res){
	    	$defer.reject(res);
	    }
	});
	
	return $defer.promise();

	// RAW
	//xml = new XMLHttpRequest();
	//xml.setRequestHeader('Authorization', auth);
	//xml.open('GET',url)

	// ExtJS
	//Ext.Ajax.request({
	//   url : url,
	//	 method : 'GET',
	//   headers : { Authorization : auth }
	//});


}
