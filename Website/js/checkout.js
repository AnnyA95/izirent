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
  var pickupdatestart = document.getElementById('begind').innerHTML;
  var pickupdatestarttime = document.getElementById('begint').innerHTML;
  var pickupdateend = document.getElementById('eindd').innerHTML;
  var pickupdateendtime = document.getElementById('eindt').innerHTML;
  var days = document.getElementById('totaldays').innerHTML;
  var km = document.getElementById('km').innerHTML;
  var price = document.getElementById('price').innerHTML;
  var anwb = document.getElementById('1').innerHTML;
  var insure1 = document.getElementById('2').innerHTML;
  var insure2 = document.getElementById('3').innerHTML;
  var driver = document.getElementById('4').innerHTML;
  var wheels = document.getElementById('5').innerHTML;
  var nav = document.getElementById('6').innerHTML;
  var productname = $('#product').html();
  var email = $('#email').val();
  var name = $('#name').val();
  var lastname = $('#lastname').val();
  var country = $('#country').val();
  var street = $('#street').val();
  var zipcode = $('#zipcode').val();
  var city = $('#city').val();
  var phone = $('#phone').val();
  var payment =   $('#payment').val();
  var message = $('#info').val();
  var valid = this.emailValidate(email)
  
  if(valid){
    window.location.href = 'mailto:anni032@hotmail.com?subject=The subject - ' + productname + ' (' + email + ')' + '&body=' + 
    "PERSONALINFO" + "%3A%20" + "%0D%0A" +  "Name:" + "%20"  + name  +  "%0D%0A" +  "Lastname:" + "%20" + lastname   +  "%0D%0A" +  "Phone:" + "%20" +  phone + "%0D%0A" + 
    "%0D%0A" + "ADRES" + "%3A%20" +   "%0D%0A" +  "Country:" + "%20"  + country  +  "%0D%0A" +  "City:" + "%20" + city   +  "%0D%0A" +  "Street:" + "%20" +  street +   "%0D%0A" +  "zipcode:" + "%20" +  zipcode +
    
    
   "%0D%0A" +  "%0D%0A" +  "CARINFO:" + "%20" +  "%0D%0A"   + 'Pick-up date:' + "%20"  + pickupdatestart  +  "%0D%0A" +  "Pick-up time:" + "%20" + pickupdatestarttime   +  "%0D%0A" +  "Returndate:" + "%20" +  pickupdateend +   "%0D%0A" +  "Return time:" + "%20" +  pickupdateendtime +
    "%0D%0A" +  "Price:" + "%20" +  price +   "%0D%0A" +  "Days:" + "%20" +  days +  "%0D%0A" +  "Km:" + "%20" +  km +
   

    
    "%0D%0A" + "%0D%0A" + 
    "EXTRAS" +  "%3A%20" + "%0D%0A" +  "-" + anwb  +  "%0D%0A" +  "-" + insure1 + "%0D%0A" +  "-" + insure2 +  "%0D%0A" + "-" + driver  + "%0D%0A" + "-" + wheels + "%0D%0A" + "-" + nav

    event.preventDefault()
    this.redirect()
    
  }else{
    event.preventDefault()
  
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
