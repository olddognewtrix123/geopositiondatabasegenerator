
   function getKey(){
       
    var src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcP1rzlNRaAyz4e8vCv1XFS8MiGKjzzpc";
    return src;
   }
   

document.getElementById('getthekey').addEventListener('click', function() {
        console.log("got key")	
	    getKey();
        });