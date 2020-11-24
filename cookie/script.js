var myCookies = {};

function saveCookies()
{
  myCookies["_user"] = document.getElementById("user").value;
  myCookies["_uage"] = document.getElementById("age").value;
  myCookies["_gender"] = document.getElementById("gender").value;
  myCookies["_phone"] = document.getElementById("phone").value;
  myCookies["_email"] = document.getElementById("email").value;
  myCookies["_password"] = document.getElementById("password").value.toString();

  document.cookie = "";
  var expiresAttrib = new Date(Date.now()+60*1000).toString();
  var cookieString = "";
  for (var key in myCookies)
  {
    cookieString = key+"="+myCookies[key]+";"+expiresAttrib+";";
    document.cookie = cookieString;
  }

  document.getElementById("out").innerHTML = document.cookie;
}

function loadCookies()
{
  myCookies = {};
  var kv = document.cookie.split(";");
  for (var id in kv)
  {
    var cookie = kv[id].split("=");
    myCookies[cookie[0].trim()] = cookie[1];
  }
 
  document.getElementById("user").value = myCookies["_user"];
  document.getElementById("age").value = myCookies["_uage"];
  document.getElementById("gender").value = myCookies["_gender"];
  document.getElementById("phone").value = myCookies["_phone"];
  document.getElementById("email").value = myCookies["_email"];
  document.getElementById("password").value = myCookies["_password"];
  document.getElementById("pref").value = myCookies["_pref"];
  

}

function validation()                                    
{
  myCookies["_user"] = document.getElementById("user").value;
  myCookies["_uage"] = document.getElementById("age").value;
  myCookies["_gender"] = document.getElementById("gender").value;
  myCookies["_phone"] = document.getElementById("phone").value;
  myCookies["_email"] = document.getElementById("email").value;
  myCookies["_password"] = document.getElementById("password").value;
   myCookies["_pref"] = document.getElementById("pref").value;

    if (user.value == "")                                  
    {
        window.alert("Please enter your name.");
        user.focus();
        return false;
    }

    if (age.value == "")                                  
    {
        window.alert("Please enter your date of birth");
        age.focus();
        return false;
    }

    if (gender.selectedIndex < 1)                  
    {
        alert("Please choose your gender");
        gender.focus();
        return false;
    }

    if (pref.selectedIndex < 1)                  
    {
        alert("Please select your preference");
        pref.focus();
        return false;
    }

    if (phone.value == "")                          
    {
        window.alert("Please enter your phone number.");
        phone.focus();
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
        window.alert("Please set your password");
        password.focus();
        return false;
    }
    return true;
}