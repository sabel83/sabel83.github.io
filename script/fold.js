function fold(id)
{
  $("[id=" + id + "]").each(function() {
    if ($(this).css("display") == "block")
    {
      $(this).css("display", "none");
    }
    else
    {
      $(this).css("display", "block");
    }
  });
}

