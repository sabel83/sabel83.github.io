function select_lang(lng)
{
  {% for item in site.data.lang %}
    if (lng == "{{ item.id }}")
    {
      var display = 'inline-block';
    }
    else
    {
      var display = 'none';
    }
    $(".lang_{{ item.id }}").css('display', display);
  {% endfor %}

  Cookies.set("lng", lng);
}

function get_variable(name)
{
  var vars = window.location.search.substring(1).split("&");
  for (var i = 0; i < vars.length; i++)
  {
    var name_value = vars[i].split("=");
    if (name_value[0] == name)
    {
      return name_value[1];
    }
  }
  return "";
}

function default_lang()
{
  var preferred = get_variable("lng") || Cookies.get("lng");
  if (preferred == "")
  {
    if (document.cookie == "")
    {
      preferred = navigator.language || navigator.userLanguage; 
    }
    else
    {
      preferred = document.cookie;
    }
  }

  if (preferred == "hu")
  {
    return "hu";
  }
  else if (preferred == "de" || preferred.startsWith("de-"))
  {
    return "de";
  }
  else
  {
    return "en";
  }
}
