function on_menu_item(item_id)
{
  var itm = document.getElementById(item_id);
  var itm_bk = document.getElementById(item_id + "_bk");

  itm.style.color="#ffffff";
  itm_bk.style.backgroundImage = "url('/images/menuki.png')";
}

function off_menu_item(item_id)
{
  var itm = document.getElementById(item_id);
  var itm_bk = document.getElementById(item_id + "_bk");
  
  itm.style.color="#0000ff";
  itm_bk.style.backgroundImage = "";
}
