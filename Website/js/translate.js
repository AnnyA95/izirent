
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


 

 changeLanguage(lang);
});

function changeLanguage(lang){
$('.lang').each(function(){
     $(this).text(arrLang[lang][$(this).attr('key')]);
     console.log(arrLang)

 }); 
}
})





function getLanguage() {
  document.getElementById("myDropdown").classList.toggle("show");
}



/* Translatio of items use key en lang as classname  */
let arrLang = {
    eng: {
     
    },

    fr: {
        'home' : 'Réservez maintenant',
        'contact' : 'need text',
        'pech' :  'Assistance routière en Belgique et en Europe (€0.00 - Par jour)',
        'insure1' : 'Protection vol et collision - Réduction de franchise 1900€ à 550€ (€7.50 - Par jour)',
        'insure2' : 'Protection vol et collision - Réduction de franchise 1900€ à 1200 (€17.00 - Par jour)',
        'driver' : 'Conducteur supplémentaire (€3.50 - Par jour)',
        'wheels' : 'Protection pneus et vitres (€5.50 - Par jour)',
        'navi' : 'Navigation (€0.00 - Par jour) '
    },
    nl: {
      'home' : 'Reserveer nu',
      'contact' : 'Contact',
      'com' : 'Binnen kort beschikbaar',
      'pech' : 'ANWB Pechhulp door heel Europa (€0.00 - Per Dag)',
      'insure1': 'Verlagen eigen risico van €1900,- naar €550 (€7.50 - Per Dag)' ,
      'insure2': 'Verlagen eigen risico van €1900,- naar 1200 (€17.0 - Per Dag) ',
      'driver' : 'Extra bestuurder (€3.50 - Per Dag)',
      'wheels' : 'Ruiten en banden (€5.50 - Per Dag)',
      'navi' : 'Navigatie (€0.00 - Per Dag)'
  }
}