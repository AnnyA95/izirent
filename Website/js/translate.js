
$(function() {
let lang =localStorage.getItem('language');
changeLanguage(lang);



$('.translate').click(function(){
 lang = $(this).attr('id');
 localStorage.setItem('language', lang);
 changeLanguage(lang);
});

function changeLanguage(lang){
$('.lang').each(function(){
     $(this).text(arrLang[lang][$(this).attr('key')]);
 }); 
}
})


function getLanguage() {
  document.getElementById("myDropdown").classList.toggle("show");
}



/* Translatio of items use key en lang as classname  */
let arrLang = {
    en: {
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