function validation()                                    
{ 
    var name = document.forms["RegForm"]["Name"];               
    var email = document.forms["RegForm"]["EMail"];   
    var password = document.forms["RegForm"]["Password"]; 


    var bday = document.forms["RegForm"]["Birthday"];  
    var what =  document.forms["RegForm"]["Preference"];  
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 

     if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

     if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
   
   
    if (bday.value == "")                           
    { 
        window.alert("Please enter your bday."); 
        phone.focus(); 
        return false; 
    } 
   
    if (what.selectedIndex < 1)                  
    { 
        alert("Please select your preferred category."); 
        what.focus(); 
        return false; 
    } 
   
    return true; 
}