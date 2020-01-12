function addComment()
{


  var parameters = location.search.substring(1).split("&");

  
  var begin = parameters[0].split("=");
  var eindd = parameters[2].split("=")
  let price =localStorage.getItem('price');
  let totaldays =localStorage.getItem('totaldays');
  let anwb =localStorage.getItem('anwb');
  let insure1 = localStorage.getItem('insure1');
  let insure2 = localStorage.getItem('insure2');
  let driver = localStorage.getItem('driver');
  let wheels = localStorage.getItem('wheels');
  let navi = localStorage.getItem('nav');
  
  l = decodeURIComponent(begin[1]);

  var s = l.replace(/\+/g, '');

  let begindate = moment(new Date(s)).format("DD/MM/YYYY");
   

  begintijd = parameters[1].split("=");
  begintijdt = decodeURIComponent(begintijd[1]);

    
  
  inleverdatum = decodeURIComponent(eindd[1]);

  var datum = inleverdatum.replace(/\+/g, '');

  let datumformateind = moment(new Date(datum)).format("DD/MM/YYYY");
   
  inlevertijd = parameters[3].split("=");
  tijdein = decodeURIComponent(inlevertijd[1]);

  

  temp3 = parameters[4].split("=");
  km = decodeURIComponent(temp3[1]);


  

if(anwb ==  null){
    var element = document.getElementById("1");
    element.classList.remove("lang");
}


if(insure1 ==  null){
  var element = document.getElementById("2");
  element.classList.remove("lang");
}

if(insure2 ==  null){
  var element = document.getElementById("3");
  element.classList.remove("lang");
}

if(driver ==  null){
  var element = document.getElementById("4");
  element.classList.remove("lang");
}

if(wheels ==  null){
  var element = document.getElementById("5");
  element.classList.remove("lang");
}


if(navi ==  null){
  debugger
  var element = document.getElementById("6");
  element.classList.remove("lang");
}
  

  // setting the values
  document.getElementById("begind").innerHTML = begindate;
  document.getElementById("begint").innerHTML = begintijdt;
  document.getElementById("eindd").innerHTML = datumformateind;
  document.getElementById("eindt").innerHTML = tijdein;
  document.getElementById("1").innerHTML = anwb;
  document.getElementById("2").innerHTML = insure1;
  document.getElementById("3").innerHTML = insure2;
  document.getElementById("4").innerHTML = driver ;
  document.getElementById("5").innerHTML = wheels;
  document.getElementById("6").innerHTML = navi;

  document.getElementById("price").innerHTML = price;
  document.getElementById("sub").innerHTML = price;
  document.getElementById("totaldays").innerHTML = totaldays;
  document.getElementById("km").innerHTML = km;
}



addComment();


function sendMail() {
  debugger
  var productname = $('#current').html();
  var email = $('#email').val();
  var name = $('#name').val();
  var lastname = $('#lastname').val();
  var street = $('#street').val();
  var zipcode = $('#zipcode').val();
  var city = $('#city').val();
  var phone = $('#phone').val();
  var pickup = $('#pickup').val();
  var returndate = $('#returndate').val();
  var payment =   $('#payment').val();
  var message = $('#info').val();
  var valid = this.emailValidate(email)
  if(valid){
    window.location.href = 'mailto:anni032@hotmail.com?subject=The subject - ' + productname + ' (' + email + ')' + '&body=' + "Naam" + "%3A%20" + name + message + pickup + "test" +  city; 
    $('#myModal').modal('hide');
    this.redirect()
    alert(payment)
  }else{
    alert("email is fout")
  }

};

function redirect() {
location.replace("/Users/annyaidinian/Desktop/GitHub/izirent/Website/confirmation.html")
}


function emailValidate(email){
var check = "" + email;
if((check.search('@')>=0)&&(check.search(/\./)>=0))
    if(check.search('@')<check.split('@')[1].search(/\./)+check.search('@')) return true;
    else return false;
else return false;
}
