
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
        widgetPositioning: {
          horizontal: 'left',
          vertical: 'bottom'
      }
       
    
      });

          
      $('#datetimepicker10').datetimepicker({
        useCurrent: true,
        format: 'LL',
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
   carKm_prices["125km"]=55;
   carKm_prices["300km"]=75;
   carKm_prices["Onbeperkt"]=85;
  
   
  
       
       
  function getCarKMPrice()
  {  
    
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
  



 function ExtraAnwb()
 {
 
   
     var extraPricein0=0;
     var theForm = document.forms["carform"];
     var includeExtra = theForm.elements["includeExtra"];

     if(includeExtra.checked==true){
       extraPricein0=0;
       localStorage.setItem('anwb', includeExtra.value);
     }else{
      localStorage.removeItem('anwb', includeExtra.value);
     }
    
     return extraPricein0;
 }


  function ExtraPriceInsurance1()
  {
  
    
      var extraPricein1=0;
      var theForm = document.forms["carform"];
      var includeExtra = theForm.elements["includeExtraInsurance1"];

      if(includeExtra.checked==true){
        extraPricein1=17.00;
        localStorage.setItem('insure1', includeExtra.value);
      }else{
        extraPricein1 = 1
        localStorage.removeItem('insure1', includeExtra.value);
      }
     
      return extraPricein1;
  }


  function ExtraPriceInsurance2()
  {
  
      var extraPricein2=0;
      var theForm = document.forms["carform"];
      var includeExtra = theForm.elements["includeExtraInsurance2"];
      if(includeExtra.checked==true){
        extraPricein2=7.50;
        localStorage.setItem('insure2', includeExtra.value);
      }else {
        extraPricein2 = 1
        localStorage.removeItem('insure2', includeExtra.value);
      }
      return extraPricein2;
  }

  function ExtraPriceDriver()
  {
  
      var extraPriceD=0;
      var theForm = document.forms["carform"];
      var includeExtra = theForm.elements["includeExtraDriver"];
      if(includeExtra.checked==true){
        extraPriceD= 3.50;
        localStorage.setItem('driver', includeExtra.value);
      }else{
        extraPriceD = 1
        localStorage.removeItem('driver', includeExtra.value);
      }
      return extraPriceD;
  }

    function ExtraPriceWheels()
  {
  
      var extraPriceW=0;
      var theForm = document.forms["carform"];
      var includeExtra = theForm.elements["includeExtraWheels"];
      if(includeExtra.checked==true){
        extraPriceW=5.50;
        localStorage.setItem('wheels', includeExtra.value);
      }else{
        extraPriceW=1
        localStorage.removeItem('wheels', includeExtra.value);
      }
      return extraPriceW;
  }

  function ExtraNav()
  {

      var extraPricein=0;
      var theForm = document.forms["carform"];
      var includeExtra = theForm.elements["includeExtraNavi"];
    
      if(includeExtra.checked==true){
        extraPricein0=0;
        localStorage.setItem('nav', includeExtra.value);
      }else{
       
       localStorage.removeItem('nav', includeExtra.value);
       
      }
     
      return extraPricein;
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

      var first =  document.getElementById("first");
      var four = document.getElementById("four");
      var kmsecond =  document.getElementById("kmsecond");
      var km3days300 = document.getElementById("km3days300")
      var kmthird = document.getElementById("kmthird")
      var km3dayson = document.getElementById("km3dayson")

      switch (KM) {
        case 55:
          if(Difference_In_Days < 4){
            first.style.display ='none'
            four.style.display =  'inline'
            kmsecond.style.display = 'none'
            km3days300.style.display = 'inline'
            kmthird.style.display = 'none'
            km3dayson.style.display = 'inline'

            carPrice = 85
          }else{
            first.style.display ='inline'
            four.style.display =  'none'
            kmsecond.style.display = 'inline'
            km3days300.style.display = 'none'
            kmthird.style.display = 'inline'
            km3dayson.style.display = 'none'

            carPrice = 55
          }
     
          break;
        case 75:
          if(Difference_In_Days < 4){
            kmsecond.style.display = 'none'
            km3days300.style.display = 'inline'
            first.style.display ='none'
            four.style.display =  'inline'
            kmthird.style.display = 'none'
            km3dayson.style.display = 'inline'



            carPrice = 105
          }else{

            kmsecond.style.display = 'inline'
            km3days300.style.display = 'nonde'
            kmthird.style.display = 'inline'
            km3dayson.style.display = 'none'
            first.style.display ='inline'
            four.style.display =  'none'

            carPrice = 75
          }
          break;
        case 85:
          if(Difference_In_Days < 4){
            kmthird.style.display = 'none'
            km3dayson.style.display = 'inline'
            kmsecond.style.display = 'none'
            first.style.display ='none'
            four.style.display =  'inline'
            km3days300.style.display = 'inline'

   
            carPrice = 115
          }else{

            kmsecond.style.display = 'inline'
            km3days300.style.display = 'nonde'
            kmthird.style.display = 'inline'
            km3dayson.style.display = 'none'
            first.style.display ='inline'
            four.style.display =  'none'

            carPrice = 85
          }
          break;
        default:
          break;
      }
    
         
      var totalDaysStartEnd =  carPrice * Difference_In_Days
      
      var special  = ''
       
       var extraanv =  ExtraAnwb()
       var extra = ExtraPriceInsurance1() 
       var extrain = ExtraPriceInsurance2()
       var etrad = ExtraPriceDriver()
       var etrawheel  = ExtraPriceWheels()
       var extranav  = ExtraNav()


        
        if(extra !=1 ){
        var a  =  Difference_In_Days  * extra
        } else{
          a = 0
        }
        if(extrain != 1){
         var b = Difference_In_Days *  extrain 
         
        }
        else{
          b = 0
        }if(etrad != 1) {
        var c = Difference_In_Days * etrad 
        }
        else{
          c = 0
        } if (etrawheel != 1){
          var d = Difference_In_Days * etrawheel
        }
        else{
          d = 0
        }
       
        special = a + b + c + d + extraanv + extranav
     

      if(special == Difference_In_Days){
        
        var eraf =  special + Difference_In_Days
        var carPrice = totalDaysStartEnd  + special - eraf 
      }else{
        var carPrice = totalDaysStartEnd  + special 
      }
  

      
      var divobj = document.getElementById('totalPrice');
      divobj.style.display='block';
      divobj.innerHTML = "€ " + carPrice;
      localStorage.setItem('price', carPrice);
      localStorage.setItem('totaldays', Difference_In_Days);
  
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
  
  
 