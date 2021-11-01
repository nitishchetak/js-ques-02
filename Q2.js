var a = "Scope of variable";
 console.log(a);
 var msg = "This is in Global";
 console.log("Global message : " + msg);


 var x = function ()
 {
     var msg = "This is in local ";
     console.log("x : message = "+msg);
     y();
 }
 function y ()
 {
    console.log("y : message = "+msg);
 }
 x();