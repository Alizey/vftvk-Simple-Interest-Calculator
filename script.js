function compute()
{
    amount= document.getElementById("principal").value;
	interest= document.getElementById("rate").value;
	noofyrs=document.getElementById("years").value;
	total=((interest * amount)/100)* noofyrs;
	
	year=2020 + parseInt(noofyrs);
	if(amount===""){
			alert("Please enter positive number")
		document.getElementById("principal").focus();
	}
	else if (amount==0){
		alert("Please enter positive number")
		document.getElementById("principal").focus();
	}
	else if(amount<0)
	{
		alert("Please enter positive number")
		document.getElementById("principal").focus();
	}
	else{
	document.getElementById("demo").innerHTML = "If you deposit "  + "<mark> "+ amount + "</mark>" +"<br>" +
	"at an interest rate of " +" <mark>"+ interest +"%"+ "</mark>" + "<br>" + "You will receive an amount of "+ "<mark>"+ total +"</mark>" +"<br>"+"in the year " +"<mark>"+ year+
	"</mark>";
	}
       
	  }
      