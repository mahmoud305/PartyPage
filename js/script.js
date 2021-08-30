

let navWidth=$("#sideNav").innerWidth();
console.log(navWidth);
$("#sideNav").css("left", `-${navWidth}`);
$("#openSideNav").click(function () { 
    navWidth=$("#sideNav").innerWidth();
    $(".homeDetails").css("left", `${navWidth}px`);
    $("#sideNav").css("left", `0px`);
    

});

$("#exitIcon").click(function () { 
    navWidth=$("#sideNav").innerWidth();
    $("#sideNav").css("left", `-${navWidth}`);
    $(".homeDetails").css("left", `0px`);
});


$("#singers h3").click(function(){// TWO WAYS 1)WITH SIBLINGS METHOD 2)THE DIV Idnetifier .
//    alert($(this).next().css("display") );
$(this).next().siblings().not("h3").slideUp(500);
$(this).next().css("display")=="none"? $(this).next().slideDown(500):  $(this).next().slideUp(500);
    // if( $(this).next().css("display")=="none" ){ 
    //     $("#singers div").slideUp(500);
    //     $(this).next().slideDown(500);
    //     // alert("hello");
    // }
    // else  {   
    //     $("#singers div").slideUp(500);
    //      }
    
    
});


var currentDate=new Date();
// alert(currentDate);
var currentYear=currentDate.getFullYear();
var month = currentDate.getMonth();
var day = currentDate.getDate();
var eventDate= new Date(currentYear+1,month,day);
// alert(eventDate);
console.log(currentDate+"\n"+eventDate.getTime()); 

var x=setInterval(function(){
    // console.log(currentDate.getTime()+"\n"+eventDate.getTime()+"wdwd"); 
    // eventDate=eventDate.getTime();
    // console.log(currentDate+"\n"+eventDate.getTime()+"pppp"); 
    // currentDate=currentDate.getTime();
    var currentDate=new Date();
    var remainingTime= eventDate.getTime()-currentDate.getTime();
    // alert(remainingTime);

    // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
// console.log(days+" "+hours+" "+" "+minutes+" "+seconds);
  $("#days h3").html(days+" D");
  $("#hours h3").html(hours+" H");
  $("#minutes h3").html(minutes+" M");
  $("#seconds h3").html(seconds+" S");
  
},1000);

 $("#textArea").keyup(function(){
    
    let textLimits=100;
    let remainingCharecters=textLimits- $(this).val().length;
    if(remainingCharecters<=0){
        $("#textStatus").html("your available character finished");
        $("#textStatus").css("color","red");
    }
    else{ 
        // alert(remainingCharecters);
    // $("#textStatus span").html(remainingTime).clone();
    $("#textStatus").html(`<span class="text-danger" id="whatt">${remainingCharecters}</span> Character Remaining `);
    $("#textStatus").css("color","black");
     
    }
 });