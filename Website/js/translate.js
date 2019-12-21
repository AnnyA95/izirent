
$(function() {
let lang =localStorage.getItem('language');
if(lang == null) {
  lang = "fr"
}
if(lang == 'eng') {
  $("i#test").addClass("flag-icon flag-icon-gb");
 } else if (lang == 'nl'){

  $("i#test").addClass("flag-icon flag-icon-nl");
 } else if (lang == 'fr') {

  $("i#test").addClass("flag-icon flag-icon-fr");

 }

changeLanguage(lang);

$('.translate').click(function(){
 lang = $(this).attr('id');
 localStorage.setItem('language', lang);

 var linklang =   $("i#test"); 


 if(lang == 'eng') {
  $(linklang).removeClass("flag-icon flag-icon-fr")
  $(linklang).removeClass("flag-icon flag-icon-nl")
  $(linklang).addClass("flag-icon flag-icon-gb");
 } else if (lang == 'nl'){
  $(linklang).removeClass("flag-icon flag-icon-gb")
  $(linklang).removeClass("flag-icon flag-icon-fr")
  $(linklang).addClass("flag-icon flag-icon-nl");
 } else if (lang == 'fr') {
  $(linklang).removeClass("flag-icon flag-icon-nl")
  $(linklang).removeClass("flag-icon flag-icon-gb")
  $(linklang).addClass("flag-icon flag-icon-fr");

 }


 
 chanegicon(lang)
 changeLanguage(lang);
});

function changeLanguage(lang){
$('.lang').each(function(){
     $(this).text(arrLang[lang][$(this).attr('key')]);
    

 }); 
}
})

function chanegicon(lang){
 

}



function getLanguage() {
  document.getElementById("myDropdown").classList.toggle("show");
}



/* Translatio of items use key en lang as classname  */
let arrLang = {
    eng: {
        'home' : 'Home',
        'about' : 'About Us',
        'contact' : 'Contact US',
        'com' : 'Comming soon',
    },

    fr: {
        'home' : 'Massion',
        'about' : 'need text',
        'contact' : 'need text',
        'com' : 'need text',
    },
    nl: {
      'home' : 'Thuis',
      'about' : 'Over ons',
      'contact' : 'Contact',
      'com' : 'Binnen kort beschikbaar',
  }
}