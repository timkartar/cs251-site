function displayOutput() {
            var student= document.getElementById("studentname").value;
            var area= document.getElementById("areaname").value;
            var faculty= document.getElementById("facultyname").value;

            if (student.length === 0 || area.length === 0 || faculty.length === 0) {
                alert("Please enter a valid input");
                return;
            }
           var text, parser, xmlDoc;
           document.getElementById("name").innerHTML = faculty;
           text = document.getElementById("textxml").value;
           parser = new DOMParser();
           xmlDoc = parser.parseFromString(text,"text/xml");
           //document.getElementById("demo").innerHTML = xmlDoc.getElementsByTagName("student")[0].childNodes[0].nodeValue;
           
           /*var xmlText = new XMLSerializer().serializeToString(xmlDoc);
           var cjeck = "aaefe";
           document.getElementById("textxml").value  = xmlText;*/
           
           var areas = xmlDoc.getElementsByTagName("area");
           var interests = xmlDoc.getElementsByTagName("interests");
           var charea = 0;
           for (var i = 0; i < areas.length; i++) {
           	    var str = areas[i].getAttribute('category');

           	    if(str === area){
           	    	var facs = areas[i].getElementsByTagName("faculty");	
           	    	//alert(str);
           	    	var chfac = 0;
           	    	for (var j = 0; j < facs.length; j++) {
           	    		var facname = facs[j].getAttribute('name');
           	    		if(facname === faculty){ 
           	    			var stus = facs[j].getElementsByTagName("student");
           	    			//alert(facname);
           	    			var ch = 0;
           	    			for (var k = 0; k < stus.length; k++) {
           	    				
           	    				var name = stus[k].childNodes[0].nodeValue;
           	    			
           	    				if(name === student) {
           	    					//alert(name);
           	    					ch = 1;
           	    					break;
           	    			    }
           	    			}
                            
                            if(ch === 0){
                            	var newEle = xmlDoc.createElement("student");
                            	var newText=xmlDoc.createTextNode(student);
                            	newEle.appendChild(newText);
                            	facs[j].appendChild(newEle);
                            }
           	    		    chfac = 1;
           	    		    break;

           	    	    }
           	        }
           	        
           	        if(chfac === 0){
           	        	var newfac = xmlDoc.createElement("faculty");
           	        	newfac.setAttribute("name",faculty);
                        var newstu = xmlDoc.createElement("student");
                        var newtext = xmlDoc.createTextNode(student);
                        newstu.appendChild(newtext);
                        newfac.appendChild(newstu);
                        areas[i].appendChild(newfac);
           	        }
           	        
           	        charea = 1;
           	        break;
                }
            }
            
            if(charea === 0){
            	        var newar = xmlDoc.createElement("area");
            	        newar.setAttribute('category',area);
            	        var newfacu = xmlDoc.createElement("faculty");
           	        	newfacu.setAttribute("name",faculty);
                        var newstud = xmlDoc.createElement("student");
                        var newtexty = xmlDoc.createTextNode(student);
                        newstud.appendChild(newtexty);
                        newfacu.appendChild(newstud);
                        newar.appendChild(newfacu);
                        xmlDoc.getElementsByTagName("interests")[0].appendChild(newar);
            }
            var xmlText = new XMLSerializer().serializeToString(xmlDoc);
            document.getElementById("textxml").value  = xmlText;
        }