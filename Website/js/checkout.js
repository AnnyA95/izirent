
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
    document.getElementById("km").innerHTML = km;




  

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
  var element = document.getElementById("6");
  element.classList.remove("lang");
}
  

 
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

  document.getElementById("totaldays").innerHTML = totaldays;
  document.getElementById("km").innerHTML = km;
}



addComment();




function sendMail() {
  var form = $('form');
  var checkit =  form.hasClass("needs-validation was-validated")

 
 
  var valid = this.validateForm( form)
  
  if(valid ){
   
    sendEmails()
    event.preventDefault()
  
    
 
    
  }else{
  event.preventDefault()

    
  }

};


function validateForm(form){
  var agreement =  document.getElementById("check");
  var elments = []
  var filledin = new Array
  elements = form[0].elements
  for(var i = 0; i < elements.length; i++)
  {
    if(elements[i].value){
      filledin.push(elements[i].value)
       
    }
 
    
  }
 

 if(filledin.length == 14 && agreement.checked) {
   
    return true
  } 

  return false
  
}


function sendEmails() {
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

  var birthdate = $('#birthdate').val();
  var country = $('#country').val();
  var street = $('#street').val();
  var zipcode = $('#zipcode').val();
  var city = $('#city').val();
  var phone = $('#phone').val();
  var payment =  $("input[name='payment']:checked").val()
  var salutation =  $("input[name='salutation']:checked").val()
  var messages = $('#info').val();
  var agreement = $('#agrement').val();
  body = 
  "<h3>Requested car</h3>" +
  productname + ' (' + email + ')' +
  "<h4> Personal info </h4>" +
 "<span style=font-weight:bold>Name</span>" + ":" + ' ' + salutation + " " + name + 
 '<br/>' +
 "<span style=font-weight:bold>Lastname</span>" + ":" + ' '  + lastname + 
 '<br/>' +
 "<span style=font-weight:bold>Email</span>" + ":" + ' '  + email + 
 '<br/>' +
 "<span style=font-weight:bold>Birthdate</span>" + ":" + ' '  + birthdate + 
 '<br/>' +
 "<span style=font-weight:bold>Phone</span>" + ":" + ' '  + phone + 
 "<h4> Adress info </h4>" +
 "<span style=font-weight:bold>Country</span>" + ":" + ' '  + country + 
 '<br/>' +
 "<span style=font-weight:bold>City</span>" + ":" + ' '  + city + 
 '<br/>' +
 "<span style=font-weight:bold>street</span>" + ":" + ' '  + street + 
 '<br/>' +
 "<span style=font-weight:bold>Zipcode</span>" + ":" + ' '  + zipcode + 
 "<h4> Car info </h4>" +

 "<span style=font-weight:bold>Pickup Date</span>" + ":" + ' '  + pickupdatestart + 
 '<br/>' +
 "<span style=font-weight:bold>Pickup Time</span>" + ":" + ' '  + pickupdatestarttime + 
 '<br/>' +
 "<span style=font-weight:bold>Return Date</span>" + ":" + ' '  +  pickupdateend + 
 '<br/>' +
 "<span style=font-weight:bold>Return Time</span>" + ":" + ' '  +  pickupdateendtime + 
 '<br/>' +
 "<span style=font-weight:bold>KM</span>" + ":" + ' '  + km + 
 '<br/>' +
 "<span style=font-weight:bold>Price</span>" + ":" + ' '  + price + 
 '<br/>' +
 "<span style=font-weight:bold>Days</span>" + ":" + ' '  + days + 
 '<br/>' +
 "<span style=font-weight:bold>Payment</span>" + ":" + ' '  + payment + 
 
 "<h4> Car options </h4>" +
 "<span style=font-weight:bold>Help</span>" + ":" + ' '  + anwb + 
 '<br/>' +
 "<span style=font-weight:bold>Insurance 1</span>" + ":" + ' '  + insure1 + 
 '<br/>' +
 "<span style=font-weight:bold>Insurance 2</span>" + ":" + ' '  + insure2 + 
 '<br/>' +
 "<span style=font-weight:bold>Driver</span>" + ":" + ' '  + driver + 
 '<br/>' +
 "<span style=font-weight:bold>Wheels</span>" + ":" + ' '  + wheels + 
 '<br/>' +
 "<span style=font-weight:bold>Navigation</span>" + ":" + ' '  + nav + 
 '<br/>' +
 "<span style=font-weight:bold>Extra info</span>" + ":" + ' '  + messages + 
 "",

  
  
    Email.send({
      Host : "smtp.gmail.com",
      Username : "izirentr@gmail.com",
      Password : "vmkfvC6M3DCNpXYFur44",
      To : 'izirentr@gmail.com',
      From : email,
      Subject : "Requested car" + ": " + productname,
      Body :  body
  }).then(
    message => console.log(message),
    setTimeout(function(){ 
      Email.send({
        Host : "smtp.gmail.com",
        Username : "izirentr@gmail.com",
        Password : "vmkfvC6M3DCNpXYFur44",
        To : email,
        From : 'izirentr@gmail.com"',
        Subject : "Order recieved",
        Body : 'Thank you for your order '
    })
    location.replace("./confirmation.html")}, 1100)
  );
 


 
}


