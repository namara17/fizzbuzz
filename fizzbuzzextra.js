// Fizz Buzz
function fizzbuzz () {
 $('#outputDiv').text("");
var printNum = [];
 var maxn = document.getElementById('maxinput').value;
	 
 if ( maxn === "exit") {
 	maxinput.value = "";
    end;
    }
 if (maxn === null || maxn==="" || isNaN(maxn) || maxn < 1) {
	maxn = prompt("Please type in a number from 1 to 100... with no spaces, or type \'exit\' to exit the game.");
      }

maxn = Math.floor(parseInt(maxn));
(maxn > 100)? maxn = 100: true;
 
for(i=1; i <= maxn; i++) {
   var testVal = 0;     // track if BOTH fizz & buzz
   printNum[i-1] = i;
  
   if (i%3 ===  0)
   {printNum [i-1] = "Fizz";
	 var testVal = 1;
	}           // End %3 loop

	if (i%5 === 0)
	   {
		if (testVal === 1)
		   {  printNum[i-1] = "Fizz Buzz"; 
		   }
	       else {
			   printNum[i-1] = "Buzz";
		        }
	   }    // End true %5 loop
   testVal = 0;
 //  document.write	(printNum[i-1]+"<br />");
    $('#outputDiv').append("<br /> "+ printNum[i-1]);
 
  }     //  End outer For Loop
   
 maxinput.value = "";

}      //  End function fizzbuzz