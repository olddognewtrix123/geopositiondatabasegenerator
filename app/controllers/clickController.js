//https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple
	//https://developers.google.com/maps/documentation/javascript/geocoding
	


function initMap() {

        var geocoder = new google.maps.Geocoder();

        document.getElementById('submit').addEventListener('click', function() {
        	
	    geocodeAddress(geocoder);
        });
	
      }

	var addresses = [
"7301 Buttercup Rd,Sykesville Maryland",
"7555 Waterloo Rd,Jessup Maryland",
"2020 Toulson Road,Jessup Maryland",
"30420 Revells Neck Rd,Westover Maryland",
"30420 Revells Neck Rd,Westover Maryland",
"700 Flat Iron Square Rd,Church Hill Maryland",
];
	var addressesL = addresses.length; 

	var coordinates = [];
	
			var i = 0;
			
			var display = "";

	function geocodeAddress(geocoder) {

		setTimeout(function () {    //  call a 3s setTimeout when the loop is called\
			var currentaddress = addresses[i];
      			geocoder.geocode({'address': currentaddress}, function(results, status) {
          			if (status === 'OK') {
	  		 	var target = results[0].geometry.location;
	  	 		var targetStr = target.toString() 
	  	 		var targetStrT = targetStr.replace(/[()]/g,"");
				console.log(targetStrT);
				display = display + " " + targetStrT;
				document.getElementById('display').innerHTML = display;
	 	  		coordinates.push(targetStrT)
         	 		} else {
         	 		  alert('Geocode was not successful for the following reason: ' + status);
         	 		}
         		});
				i++;
				if(i<addressesL)
				{geocodeAddress(geocoder);}
		}, 3000)

//	    for(var i = 0; i< addressesL; i++){
//				var currentaddress = addresses[i];
//      			geocoder.geocode({'address': currentaddress}, function(results, status) {
//          			if (status === 'OK') {
//	  		 	var target = results[0].geometry.location;
//	  	 		var targetStr = target.toString() 
//	  	 		var targetStrT = targetStr.replace(/[()]/g,"");
//				console.log(targetStrT);
//				display = display + " " + targetStrT;
//				document.getElementById('display').innerHTML = display;
//	 	  		coordinates.push(targetStrT)
//         	 		} else {
//         	 		  alert('Geocode was not successful for the following reason: ' + status);
//         	 		}
//         		}); 
//	    } 
	     


 	} // ****end of initMap ******


	     //// ************* working code for click event listener for one value at a time ************************
//	     var targetAddress = document.getElementById('address').value;
//    	    
//    	    geocoder.geocode({'address': targetAddress}, function(results, status) {
//    	    	var target = results[0].geometry.location;
//	  			var targetStr = target.toString() 
//	  			var targetStrT = targetStr.replace(/\(|\)/g,'');
//				console.log(targetStrT);
//    	    });



