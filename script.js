function compute()
{
    amount= document.getElementById("principal").value;
	interest= document.getElementById("rate").value;
	noofyrs=document.getElementById("years").value;
	total=((interest * amount)/100)* noofyrs;
	
	year=2020 + parseInt(noofyrs);
	document.getElementById("demo").innerHTML = "If you deposit "  +  amount+ "<br>" +
	"at an interest rate of " + interest + "<br>" + "You will receive an amount of " + total +"<br>"+"in the year " + year;
    
}
      