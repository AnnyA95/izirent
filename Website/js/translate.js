
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
  
   }); 
  }
  })
  
  
  
  
  
  function getLanguage() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  

  let arrLang = {
      eng: {
      },
  
      fr: {
          'home' : 'Réservez maintenant',
          'contact' : 'Contact',
          "products": 'Véhicules',
          'homel' : '-Réservez maintenant',
          'contactl' : '-Contact',
          "productsl": '-Véhicules',
          "reserver" : 'Réservez ici',
          "vans": "Minibus",
          'cars': 'Voitures',
          'buses' : 'Utilitaires',
          'textF': 'Vous partez en vacances ? Il vous faut un moyen de déplacement pour vos évènements ? Vous êtes une société et avez besoin d’un véhicule pour votre personnel.',
          'textF2' : ' Disponibles et flexibles, nous sommes là pour répondre à vos besoins en vous proposant des solutions à des prix compétitifs. Tous nos véhicules sont équipés de la dernière technologie afin de vous proposer une conduite des plus confortables. Roulez l’esprit tranquille; avec nous, vous bénéficiez gratuitement de l’assistance routière en Belgique et en Europe.',
          'textF3': '   Réservez votre véhicule en toute sécurité en quelques clics seulement. Nous vous répondrons dans les meilleurs délais.',
         
        
          'details' : 'Voir notre sélection',
          'sit': 'Personnes 9',
          'airco': 'Climatisation',
          'bagage': 'Valises 5',
          'gear': 'Manuel',
          'doors': 'Portes 4',
          'advertise': 'Le meilleur tarif, à partir de:',
          'day': "par jour",
          'total': 'Total 55.00 € ',
          "reservP" : " RÉSERVEZ MAINTENANT",
          "extras" : "Choisissez les extras",
          "priceday55" : '€ 55.00, Par Jour',
          'dates': "Date de départ",
          'times': "Lieu de départ",
          'dater': "Date de retour",
          'timer': "Lieu de retour",
          'totaleprice': "Coût total",
          'km' : "Forfait kilométrique",
          'extrakm' : "(forfait additionnel 0,23€ par km)",
          'kmfirst': "125 km par jour = € 55, p/j",
          'km3days': "125 km par jour = € 85, p/j",
          'kmsecond': "300 km par jour = € 75, p/j",
          'km3days300': "300 km par jour = € 105, p/j",
          'kmthird': "illimité km par jour  = € 85, p/j",
          'km3dayson': "illimité km par jour  = € 115, p/j",
          'daylist': " - Par jour",


          'pech' :  'Assistance routière en Belgique et en Europe (€0.00 - Par jour)',
          'insure1' : 'Protection vol et collision - Réduction de franchise 1900€ à 550€ (€7.50 - Par jour)',
          'insure2' : 'Protection vol et collision - Réduction de franchise 1900€ à 1200 (€17.00 - Par jour)',
          'driver' : 'Conducteur supplémentaire (€3.50 - Par jour)',
          'wheels' : 'Protection pneus et vitres (€5.50 - Par jour)',
          'navi' : 'Navigation (€0.00 - Par jour) ',
          
          'pech2' :  'Assistance routière en Belgique et en Europe',
          'insure12' : 'Protection vol et collision - Réduction de franchise 1900€ à 550€',
          'insure22' : 'Protection vol et collision - Réduction de franchise 1900€ à 1200€ ',
          'driver2' : 'Conducteur supplémentaire',
          'wheels2' : 'Protection pneus et vitres',
          'navi2' : 'Navigation',
          'book': 'Réserver',
          'chosenProduct' : " Voiture sélectionnée",
          'takedatetime' : 'Date de départ en lieu:',
          'retourdatetime' : 'Date de retour en Lieu:',
          'timeprefix' : 'à',
          'totaldaysc' : 'Nombre total de jours:',
          'totalkmc' : 'Kilomètres par jour :',
          'subtotal' : 'Total',
          'total' : 'Total', 
          'civility' : 'Civilité',
          'men' : 'M.',
          'woman' : 'Mme.',
          'firstname': "Prénom",
          'lastname' : "Nom",
          'birthdate' : "Date de naissance",
          'country': 'Pays',
          'city': 'Lieu de résidence',
          'streetnum': 'Adresse',
          'zipcode': 'Code postal',
          'mail' : 'Adresse email',
          'phone' : 'Numéro de téléphone ',
          'payment' : 'Moyen de paiement ',
          'cash' : 'Cash',
          'card' : 'Virement bancaire ',
          'extrainfo': 'Informations supplémentaires',
          'thankyou': 'Votre réservation est reçue!',
          'infoprocess' : '',
          'infoprocess2' : 'Nous vous contacterons dans les plus brefs délais',
          'gohome': "Continuez vers la page d'accueil",
          'ctext': 'CONTACTEZ-NOUS',
          'ctextbody': 'Veuillez contacter use en remplissant ce formulaire',
          'be' : 'Belgique',
          'send' : 'expédier',
          'agrement': 'J’ai lu et j’accepte les conditions générales de location ',
          'contactadver' : 'Vous partez en vacances ? Il vous faut un moyen de déplacement pour vos évènements ? Vous êtes une société et avez besoin d’un véhicule pour votre personnel.'
      }, 
    
      nl: {
        'home' : 'Reserveer nu',
        'contact' : 'Contact',
        "products": 'Voertuigen',
        'homel' : '-Reserveer nu',
        'contactl' : '-Contact',
        "productsl": '-Voertuigen',
        "reserver" : 'Reserveer hier',
        "vans": "Personenbus",
        'cars': 'Auto',
        'buses' : 'Bestelbus',
        'com' : 'Binnen kort beschikbaar',
        'textF' :'Ga je op vakantie Heeft u transport nodig voor uw evenementen? U heeft een bedrijf en hebt een voertuig nodig voor uw personeel.',
        'textF2' : 'Wij van Izirent zijn beschikbaar en flexibel, wij zijn er om aan uw behoeften te voldoen door oplossingen aan te bieden tegen concurrerende prijzen. Al onze voertuigen comfortabele uitgerust met de nieuwste technologie om u het beste rijcomfort te bieden. Rijd met gemoedsrust; bij ons profiteert u van gratis pechhulp in België en in Europa.',
        'textF3': 'Boek uw voertuig veilig in slechts een paar klikken. We nemen zo snel mogelijk contact met u op.',
        'details' : 'Bekijk ons aanbod',
        'sit' : " Zitplaatsen 9",
        'airco': 'Met airco',
        'bagage': 'Koffers 5',
        'gear': 'Schakelen',
        'doors': 'Deuren 4',
        'advertise': 'Het beste tarief, vanaf:',
        'day': "per dag",
        'total': 'Totaal 55.00 €',
        "reservP" : "RESERVEER NU",
        "extras" : "Extra's Kiezen",
        "priceday55" : '€ 55.00, Per Dag',
        'dates': "Ophaaldatum",
        'times': "Ophaaltijd",
        'dater': "Inleverdatum",
        'timer': "Inlevertijd",
        'daycar' : "-Per dag",
        'totaleprice': "Totale prijs",
        'km' : "Kies kilometer",
        'extrakm' : "(extra km  € 0,23 per km)",
        'kmfirst': "125 km vrij per dag = € 55, p/d",
        'km3days': "125 km vrij per dag = € 85, p/d",
        'kmsecond': "300 km vrij per dag = € 75, p/d",
        'km3days300': "300 km vrij per dag = € 105, p/d",
        'kmthird': "Onbeperkt km per dag = € 85, p/d",
        'km3dayson': "Onbeperkt km per dag = € 115, p/d",
        'daylist': " - Per Dag",
        'pech' : 'ANWB Pechhulp door heel Europa (€0.00 - Per Dag)',
        'insure1': 'Verlagen eigen risico van €1900,- naar €550 (€7.50 - Per Dag)' ,
        'insure2': 'Verlagen eigen risico van €1900,- naar 1200 (€17.0 - Per Dag) ',
        'driver' : 'Extra bestuurder (€3.50 - Per Dag)',
        'wheels' : 'Ruiten en banden (€5.50 - Per Dag)',
        'navi' : 'Navigatie (€0.00 - Per Dag)',

        'pech2' : 'ANWB Pechhulp door heel Europa',
        'insure12': 'Verlagen eigen risico van €1900,- naar €550' ,
        'insure22': 'Verlagen eigen risico van €1900,- naar €1200 ',
        'driver2' : 'Extra bestuurder',
        'wheels2' : 'Ruiten en banden',
        'navi2' : 'Navigatie',

        'book': 'Rerserveren',
        'chosenProduct' : "Gekozen auto",
        'takedatetime' : 'Ophaal datum en tijd:',
        'retourdatetime' : 'Inleverdatum en Tijd:',
        'timeprefix' : 'om',
        'totaldaysc' : 'Totaal aantal dagen:',
        'totalkmc': 'Totaal aantal kilometers per dag:',
        'total' : 'Totaal',
        'civility' : 'Aanhef',
        'men' : 'Mr',
        'woman' : 'Mev',
        'firstname': "Voornaam",
        'lastname' : "Achternaam",
        'birthdate' : "Geboortedatum",
        'country': 'Land',
        'city': 'Woonplaats',
        'streetnum': 'Straat/nummer ',
        'zipcode': 'Postcode',
        'mail' : 'Email',
        'phone' : 'Telefoonnummer ',
        'payment' : 'Betaalwijze ',
        'cash' : 'Contant betalen',
        'card' : 'Via kaart betalen ',
        'extrainfo': 'Aanvullende informatie',
        'thankyou': 'Dank u!',
        'infoprocess' : 'Uw reservering is goed ontvangen',
        'infoprocess2' : 'Wij nemen zo snel mogelijk contact met u op',
        'gohome': "Verdergaan naar de homepagina ",
        'ctext': 'NEEM CONTACT OP',
        'ctextbody': 'Neem contact op door dit formulier in te vullen',
        'be' : 'België',
        'send' : 'Versturen',
        'agrement': 'Ik heb de algemene voorwaarden gelezen en ga ermee akkoord ',
        'contactadver' : "Wij maken dat mogelijk voor u. Autoverhuur Brussel met iziRent busverhuur. Met iziRent verhuur kunt u kiezen uit een breed scala aan auto's. Een autobus huren vanuit Brussel is nog nooit zo eenvoudig geweest."
        
    }
  }
  
