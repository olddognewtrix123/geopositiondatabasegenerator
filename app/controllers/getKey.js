
   
   
        
        function getKey(){
    var customerKey = document.getElementById("key").innerHTML;  
    var customerKeyS = customerKey.toString();
    var src="https://maps.googleapis.com/maps/api/js?key=" + customerKeyS;
    //
    console.log("the type of source is " + typeof src);
    return src;
   }
   
   //getKey();