var animals=[
    {
        "name":"Cat",
        "id":"Cat",
        "src":"url('images/cat.jpg')",
        
    },
    {
        "name":"Dog",
        "id":"Dog",
        "src":"url('images/dog.jpg')",
    },
    {
        "name":"Hamster",
        "id":"Hamster",
        "src":"url('images/hamster.jpg')",
    },
    

]

var petList = document.querySelector(".pets__list");
 // Adds an animals to the list
    for(var i = 0; i < animals.length; i++){
        
            var newPet = document.createElement("div");
            newPet.setAttribute('class',animals[i].name);
            newPet.setAttribute('id', animals[i].id);
            petList.appendChild(newPet);

            var pet_div=document.getElementById(animals[i].id);
            var newButton = document.createElement("BUTTON");
            newButton.setAttribute('class',"btn-left");
            newButton.setAttribute('onclick', 'displayImage(this)');
           
            var text1 = document.createTextNode(animals[i].name); 
            newButton.appendChild(text1); 
            pet_div.appendChild(newButton);
        
    }


    var imagedisplayed =false;

// Display image on righht side after clicking the button
    function displayImage(clickedElement) {

        imagedisplayed=true;
        var index = animals.findIndex(x => x.id ==clickedElement.parentElement.id);
        document.getElementById("image").style.backgroundImage = animals[index].src; 
        document.getElementById("image").style.backgroundSize = "cover";   
        document.getElementById("image").style.backgroundRepeat = "no-repeat"; 
        document.getElementById("image").setAttribute('class',animals[index].name);

        document.querySelector('.success').style.display = "none";
        
    }

    

    var textdiv=document.querySelector('.text');
// Display description on hover of the image
    function displayDescription() {
        if(imagedisplayed){
           
            textdiv.textContent=textdiv.parentElement.previousElementSibling.className;
           // console.log(textdiv.parentElement.previousElementSibling.className);
            document.querySelector('.middle').style.display='block';

        }
        else{
            document.querySelector('.middle').style.display='none';
        }
    }


   function popup(){

    let nameOfPet=textdiv.parentElement.previousElementSibling.className;
	document.querySelector('#modal').style.display = "grid";
	document.querySelector('.modal-contents').style.display = "grid";
    var b = document.getElementById("buy");
    b.innerHTML="Are you ready to be a pet parent to the hunter, the "+nameOfPet;


    // close popup on buy and update petlist
    document.querySelector('.submit-btn').addEventListener("click", function() {
        document.querySelector('#modal').style.display = "none";
       
        var myobj = document.getElementById(textdiv.parentElement.previousElementSibling.className);
        myobj.remove();

        document.querySelector('.success').style.display = "block";
  
        document.getElementById("image").style.backgroundImage = "none"; 
        document.querySelector('.middle').style.display = "none";
        imagedisplayed=false;//apply mouseover only if a image is displayed
        
       
    });
    }
    

    // close popup on "Need more time" and  X
    function closeModal()
    {
        document.querySelector('#modal').style.display = "none";
    }
