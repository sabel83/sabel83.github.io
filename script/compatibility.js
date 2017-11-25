/* Backward compatibility with the old site */

function redirect_old_urls()
{
  var mods = {
    'nyitolap':'index',
    'oneletrajz':'cv',
    'ref':'references',
    'ref/m3d':'m3d',
    'ref/ergo':'ergo',
    'ref/solariumcenter':'solariumcenter',
    'ref/bol':'bol',
    'ref/kabel':'kabel',
    'ref/galaxis':'galaxis',
    'kutat':'publications',
    'pda':'pda',
    'pda/nevnap':'nevnap',
    'letoltes':'download',
    'kapcsolat':'contact',
    'info/nevnap':'nevnap_info',
  };
  
  var mod = get_variable('mod');
  
  if (mod in mods && mods[mod] != "{{ page.content_id }}")
  {
    var target = '/' + mods[mod];
    if (get_variable('lng'))
    {
      target = target + '?lng=' + encodeURI(get_variable('lng'));
    }
    window.location.replace(target);
  }
}

function redirect_old_download_url()
{
  window.location.replace('/download/' + encodeURI(get_variable('fn')));
}
