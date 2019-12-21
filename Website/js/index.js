
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("upButton").style.display = "block";
      } else {
          document.getElementById("upButton").style.display = "none";
      }
     
  }
  var body = $('html, body');
  function topFunction() {
       body.animate({scrollTop:0, }, 'slow');
  }

  var body = $('html, body');
  function go() {
    body.animate({ scrollTop: $("#gohere").offset().top - 370  }, "slow");
  }


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
 
  $(document).ready(function(){
    $("#myBtn").click(function(){
      var x = document.getElementById("myVar");
      x = $('#productName').html();
      var mymodal = $('#myModal');
       mymodal.find('.modal-title').text(x);
      $("#myModal").modal({backdrop: true});
    });
  });

  $(document).ready(function(){
    $("a[href*='" + location.pathname + "']").addClass("active");
});
  function changeCollor() {
    document.getElementById("footer").style.color = "red";
  }

  

  function sendMail() {
    var productname = $('#productName').html();
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






function checkImageForCriticality(){
  pagespeed.CriticalImages.checkImageForCriticality(this);
}

