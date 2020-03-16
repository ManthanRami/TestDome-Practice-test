function setup()
{
  var t= $("li");
  $(":contains('Up!')").click(function()
  {
    var p=this.parentElement;
    $(p).prev().insertAfter(p);
  
  });
  $(":contains('Down!')").click(function()
  {
    var p=this.parentElement;
    $(p).next().insertBefore(p);
  
  });
}