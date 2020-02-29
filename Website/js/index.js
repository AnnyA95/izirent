
  window.onscroll = function() {scrollFunction()};

  window.onload = function() {
    var elements = document.getElementsByClassName("lang btn btn-secondary s");
  
    for (i = 0; i < elements.length; i++) {
      elements[i].classList.remove("active");
    }
  
    
  };
  
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
    body.animate({ scrollTop: $("#gohere").offset().top - 15  }, "slow");
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

  

 



