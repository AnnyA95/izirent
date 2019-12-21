
$(document).ready(function() {
    $(function() {
      $('#datetimepicker6').datetimepicker({
        locale: 'nl-be',
        format: 'LT',
    
        
        
    });
  
   
    var dateToday = new Date();
  
      $('#datetimepicker7').datetimepicker({
        useCurrent: true,
        format: 'LL',
        locale: 'nl-be',
        widgetPositioning: {
          horizontal: 'left',
          vertical: 'bottom'
      }
      
      });
      
    
      $('#datetimepicker9').datetimepicker({
        locale: 'nl-be',
        format: 'LT',
    
        
        
    });
    
  
      $('#datetimepicker8').datetimepicker({
        useCurrent: true,
        format: 'LL',
        locale: 'nl-be',
        widgetPositioning: {
          horizontal: 'left',
          vertical: 'bottom'
      }
       
    
      });
  
      $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker8').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker8").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").maxDate(e.date);
    });
  
    
    
    });
  });
  
  
  /*
  $(function() {
      $(".checkbox").click(function(){
          $('#disable').prop('disabled',$('input.checkbox:checked').length == 0);
      });
  });
  */
  
  
  $(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })
  
  
  
  
  
  
   var carKm_prices = new Array();
   carKm_prices["0km"]=0;
   carKm_prices["300km"]=105;
   carKm_prices["135km"]=135;
  
   
  
       
       
  function getCarKMPrice()
  {  
    debugger
      var carKmPrice=0;
      var theForm = document.forms["carform"];
      var selectedKM = theForm.elements["selectedKM"];
      for(var i = 0; i < selectedKM.length; i++)
      {
          if(selectedKM[i].checked)
          {
            carKmPrice = carKm_prices[selectedKM[i].value];
              break;
          }
      }
      return carKmPrice;
  }
  
  /*
  function candlesPrice()
  {
      var candlePrice=0;
      var theForm = document.forms["carform"];
      var includeCandles = theForm.elements["includecandles"];
  
      if(includeCandles.checked==true)
      {
          candlePrice=5;
      }
      return candlePrice;
  }
  */
  
  function ExtraPrice()
  {
  
      var extraPrice=0;
      var theForm = document.forms["carform"];
      var includeExtra = theForm.elements["includeExtra"];
      if(includeExtra.checked==true){
        extraPrice=20;
      }
      return extraPrice;
  }
          
  function calculateTotal()
  {
  
      var price = document.getElementById('carPrice').innerHTML
      var element = price.substring(1, 4);
   
      var carPrice = Number(element)
  
      var startdate = document.getElementById('validationCustom01')
      var date1 = $('#validationCustom01').val();
      var date2 = $('#validationCustom02').val();
   
      var date1 = new Date(date1); 
      var date2 = new Date(date2); 
        
  
      var totaldays = date2 - date1
      var Difference_In_Time = date2.getTime() - date1.getTime(); 
        
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
           
      var KM = getCarKMPrice()
      if(KM == 105 ) {
         carPrice = 105
      }else if( KM == 135){
          carPrice = 135
        }
         
      var totalDaysStartEnd =  carPrice * Difference_In_Days
  
       var extra = ExtraPrice()
       var special =  extra * Difference_In_Days 
    
    
      var carPrice = totalDaysStartEnd  + special
      
      var divobj = document.getElementById('totalPrice');
      divobj.style.display='block';
      divobj.innerHTML = "€ " + carPrice;
  
  }
  
  function hideTotal()
  {
      var divobj = document.getElementById('totalPrice');
      divobj.style.display='none';
  }
  
  $(document).ready(function(){
    $("#validationCustom02").blur(function(){
      calculateTotal()
    });
  });
  
  