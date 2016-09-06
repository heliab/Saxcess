function getText(control){
	var typeInputAttribute=controlName.charAt(0);
	try
	{
		if(typeInputAttribute=="#"){
			return document.getElementById(control).value;
		}
		else
		{
		return document.getElementsByName(control)[0].value;	
		}
	}
	catch(e)
	{
		alert(e);
		console.log(e);
	}
}

function setText(control, outputString){
	var typeInputAttribute=controlName.charAt(0);
	try
	{

		if(typeInputAttribute=='#')
		{
			controlName=controlName.substr(1);
			document.getElementById(control).value=outputString;
		}
		else{
			return document.getElementsByName(control).value=outputString;
		}

	}	
	catch(e)
	{
		alert("Error found: "+ e);
		console.log(e);
	}
	
}

function checkSelection(control){
	var typeInputAttribute=controlName.charAt(0);
		if(typeInputAttribute=='#')
		{
			controlName=controlName.substr(1);
			return document.getElementById(control).checked;
		}
		else{
			return document.getElemntsByName(control).checked;
		}

}
//Checking value selected from radiobuttons
function radioGroupSelection(groupName){

	try{
		return document.querySelector('input[name='+groupName+']:checked').value;//Si el HTML no tiene value retorna ON
		}
	catch(e){
			alert(e);
			console.log(e);
	}
}