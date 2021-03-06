
                
  
     function findrover() {
        "use strict";
    
        var form = $("#myform");
        
        form.validate();
        
        if (form.valid()) {
            
            var PictureDate = document.getElementById("PictureDate").value;
            var apiKey = "XNwUQGfBfGyQkC0IIVo5382UP7JJJKNvzkhrUaEx";

            var Rover;
            if (document.getElementById("Curiosity").checked) {
                Rover = document.getElementById("Curiosity").value;
            }
            if (document.getElementById("Opportunity").checked) {
                Rover = document.getElementById("Opportunity").value;
            }
            if (document.getElementById("Spirit").checked) {
                Rover = document.getElementById("Spirit").value;
            }
           
            var myURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + Rover + "/photos?earth_date=" + PictureDate + "&page=1&api_key=" + apiKey;
    
            var myMethod = "GET";
    
            $(document).ready(function() { 
    
                $.ajax({
                  method: myMethod,
                  url: myURL
                })
                
                .done(function( msg ) {
    
                    var numpictures = msg.photos.length;
                    if (numpictures > 0) {
                        for (var i = 0; i < 25; i++) {
                            if (i < numpictures) {
                            // Note how we construct the name for image1, image2, etc...this sets the image source
                                document.getElementById("image" + i).src = msg.photos[i].img_src;
                                document.getElementById("anchor" + i).href = msg.photos[i].img_src;
                            //do something to set the tool tip = msg.photos[i].camera.full_name;
                                document.getElementById("image" + i).title = msg.photos[i].camera.full_name;
                                document.getElementById("text1").innerHTML = msg.photos.length + " photos found";
                                document.getElementById("text2").innerHTML = "Click a photo to display full size";
                            }
                            
                            else
                            {
                                document.getElementById("image" + i).src = "#";
                                document.getElementById("anchor" + i).href = "#";
                                document.getElementById("image" + i).style.display = "none";
                            }
                        }
                    }
                })
                
                .fail(function( msg ) {
                    alert("Rover Not Found - Status: " + msg.status);
                });
            });
        }
    }
    
    function clearform() {
        for (var i = 0; i < 25; i++) {
        document.getElementById("Curiosity").checked = false;
        document.getElementById("Opportunity").checked = false;
        document.getElementById("Spirit").checked = false;
        document.getElementById("PictureDate").value = "";
        document.getElementById("RoverError").innerHTML = "";
        document.getElementById("PictureDateError").innerHTML = "";
        document.getElementById("image" + i).src = "#";
        document.getElementById("anchor" + i).href = "";
        document.getElementById("image" + i).title = "";
        document.getElementById("text1").innerHTML = "";
        document.getElementById("text2").innerHTML = "";
        }
    }
    
    function getCuriosity() {
        document.getElementById("PictureDate").value = "2012-08-06";
    }
    
    function getOpportunity() {
        document.getElementById("PictureDate").value = "2004-01-26";
    }
    
    function getSpirit() {
        document.getElementById("PictureDate").value = "2004-01-05";
    }