function display_date()
{
  var mname = {
    'hu':{
      1:"jan.",
      2:"feb.",
      3:"márc.",
      4:"ápr.",
      5:"máj.",
      6:"jún.",
      7:"júl.",
      8:"aug.",
      9:"szept.",
      10:"okt.",
      11:"nov.",
      12:"dec."
    },
    'de':{
      1:"Jan.",
      2:"Feb.",
      3:"Mär.",
      4:"Apr.",
      5:"Mai.",
      6:"Jun.",
      7:"Jul.",
      8:"Aug.",
      9:"Sept.",
      10:"Okt.",
      11:"Nov.",
      12:"Dez."
    },
    'en':{
      1:"Jan.",
      2:"Feb.",
      3:"Mar.",
      4:"Apr.",
      5:"May.",
      6:"Jun.",
      7:"Jul.",
      8:"Aug.",
      9:"Sept.",
      10:"Oct.",
      11:"Nov.",
      12:"Dec."
    }
  };
  wdname = {
    'hu':{
      0:'vasárnap',
      1:'hétfő',
      2:'kedd',
      3:'szerda',
      4:'csütörtök',
      5:'péntek',
      6:'szombat'
    },
    'de':{
      0:'Sonntag',
      1:'Montag',
      2:'Dienstag',
      3:'Mittwoch',
      4:'Donnerstag',
      5:'Freitag',
      6:'Samstag'
    },
    'en':{
      0:'Sunday',
      1:'Monday',
      2:'Tuesday',
      3:'Wednesday',
      4:'Thrusday',
      5:'Friday',
      6:'Saturday'
    }
  };
  var now = new Date();
  document.write(
    "<div id='content_hu' class='lang_hu' style='display: none;width: 100%;'>"
      + now.getFullYear() + '. ' + mname['hu'][now.getMonth() + 1] + ' '
      + now.getDate() + '., ' + wdname['hu'][now.getDay()]
    + "</div>"
  );
  document.write(
    "<div id='content_hu' class='lang_de' style='display: none;width: 100%;'>"
      + wdname['de'][now.getDay()] + ', ' + now.getDate() + '. '
      + mname['de'][now.getMonth() + 1] + ' ' + now.getFullYear()
    + "</div>"
  );
  document.write(
    "<div id='content_hu' class='lang_en' style='display: inline-block;width: 100%;'>"
      + now.getFullYear() + '. ' + mname['en'][now.getMonth() + 1] + ' '
      + now.getDate() + '., ' + wdname['en'][now.getDay()]
    + "</div>"
  );
  select_lang(default_lang());
}

