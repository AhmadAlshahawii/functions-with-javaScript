

var userItems = [];


var userItemInp = document.getElementById("add-inp");

var inps = document.getElementsByTagName("input");


function addItem()
{
    
    if(validateInp() == true){
    
    var items = {item: userItemInp.value};
    
    userItems.push(items);
    
    displayData();
    
    clearData();
    
    console.log(userItems);

    }
    else
    {
        alert("Please add a task");
    }    
    
}


function validateInp()
{
    var regex = /^[a-zA-Z ]+$/;
    if(regex.test(userItemInp.value) == true)
    {
        return true;
    }
    else
    {
        return false;
    }
}






function displayData()
{
     
    var temp = "";
    for(var i=0 ; i<userItems.length ; i++)
        {
            temp += '<div class="new-jum">'+
                    '<p>'+userItems[i].item+
                    ' <a id="delBtn" onclick="deleteItem(\''+userItems[i].item+'\')" class=" float-right" href="#"><i class="fas fa-minus-circle"></i></a> ' +
                    '</p>'+
                    '</div>';
        }
    
    document.getElementById("saved").innerHTML = temp;
}

displayData();



var itemDel = userItems.item;

function deleteItem(itemDel)
{
    
    
    for(i=0 ; i<userItems.length ; i++)
    {
        if(userItems[i].item == itemDel)
        {
            userItems.splice(i, 1);
        }
    }
 
    console.log(userItems)
    
    displayData();
    
}


function clearData()
{
    
    for(var i=0 ; i<inps.length ; i++)
    {
        inps[i].value = "";
    }
}







$('.word').mouseenter(function(){
    document.getElementById('playSong').play();
    
})

$('.word').mouseleave(function(){
    document.getElementById('playSong').pause();
})


$('.word').mouseenter(function(){
    var div = document.getElementById("screen");

    function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }

    function changeColor(){
    div.style.backgroundColor= getRandomColor();
    }

    setInterval(changeColor,200);
    
    $('.word').mouseleave(function(){
        $('.music-bg').css('backgroundColor' , 'black')
    });
    
})




var countDownDate = new Date("Oct 27, 2019 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML = "<h1>"+days+"</h1>" + "<p>Days</p> ";
  document.getElementById("hours").innerHTML = "<h1>"+hours+"</h1>" + "<p>Hours</p> ";
  document.getElementById("minutes").innerHTML = "<h1>"+minutes+"</h1>" + "<p>Minutes</p> ";
  document.getElementById("seconds").innerHTML = "<h1>"+seconds+"</h1>" + "<p>Seconds</p> ";


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "EXPIRED";
  }
}, 1000);







var userNameInp = document.getElementById("userName");
var userMailInp = document.getElementById("userMail");
var userPhoneInp = document.getElementById("userPhone");
var userMessageInp = document.getElementById("usermessage");
var inps  = document.getElementsByTagName("input");




function addContact()
{
    
    if(validateUserName() == true && validateEmail() == true && validatePhone() == true){
        
    
    
    clearData();

       
        
    }
    else
    {
        alert("please fill in the form");
    }
    
    
    
}


function validateUserName()
{
	var regex = /^[A-Z][a-zA-Z]{2,8}$/;
	if(regex.test(userNameInp.value) == true)
		{
            document.getElementById("userNameAlert").style.display="none";
		    return true;

		}
	else
		{
            document.getElementById("userNameAlert").style.display="block";
			return false;
		}
	
}

function validateEmail()
{
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(regex.test(userMailInp.value) == true)
    {
        document.getElementById("userMailAlert").style.display="none";
        return true;
    }
    else
    {
        document.getElementById("userMailAlert").style.display="block";
        return false;
    }
}


function validatePhone()
{
    var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if(regex.test(userPhoneInp.value) == true)
    {
        document.getElementById("userPhoneAlert").style.display="none";
        return true;
    }
    else
    {
        document.getElementById("userPhoneAlert").style.display="block";
        return false;
    }
}





function clearData()
{
    for(var i=0; i<inps.length; i++)
    {
        inps[i].value="";
    }
}

clearData();


$(document).ready(function remaining() 
{
  var len = 0;
  var maxchar = 80;

  $( '#userMessage' ).keyup(function(){
    len = this.value.length
    if(len > maxchar){
        return false;
    }
    else if (len > 0) {
        $( "#remain" ).html( "Remaining characters: " +( maxchar - len ) );
    }
    else {
        $( "#remain" ).html( "Remaining characters: " +( maxchar ) );
    }
  })
})









$('#letterR').mouseenter(function(){
    
    $('.RGB').css('backgroundColor' , 'red')
    $('#R-fill').attr('class' , 'black')
    $('#G-fill').attr('class' , 'black')
    $('#B-fill').attr('class' , 'black')
})

$('#letterG').mouseenter(function(){
    
    $('.RGB').css('backgroundColor' , 'rgb(0, 255, 0)')
    $('#R-fill').attr('class' , 'black')
    $('#G-fill').attr('class' , 'black')
    $('#B-fill').attr('class' , 'black')
})

$('#letterB').mouseenter(function(){
    
    $('.RGB').css('backgroundColor' , 'blue')
    $('#R-fill').attr('class' , 'black')
    $('#G-fill').attr('class' , 'black')
    $('#B-fill').attr('class' , 'black')
})



$('#letterR').mouseleave(function(){
    
    $('.RGB').css('backgroundColor' , '')
    $('#R-fill').attr('class' , '')
    $('#G-fill').attr('class' , '')
    $('#B-fill').attr('class' , '')
})

$('#letterG').mouseleave(function(){
    
    $('.RGB').css('backgroundColor' , '')
    $('#R-fill').attr('class' , '')
    $('#G-fill').attr('class' , '')
    $('#B-fill').attr('class' , '')
})

$('#letterB').mouseleave(function(){
    
    $('.RGB').css('backgroundColor' , '')
    $('#R-fill').attr('class' , '')
    $('#G-fill').attr('class' , '')
    $('#B-fill').attr('class' , '')
})