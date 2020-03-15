<!DOCTYPE html>
<html>
<body>

<script>
function endangeredSpecies(continent, species) {
  // Implement the function here.
  var par=document.getElementsByTagName("ul");
  for(var i=0; i<par.length; i++)
    {
      if(par[i].getAttribute('data-continent')==continent)
        {
          var spe=par[i].children;
          for(var i=0; i<spe.length;i++)
            {
              if(spe[i].getAttribute('data-species')==species)
                {
                  return spe[i].innerHTML;
                }
            }
        }
    }
}

</script>
<div>
  <ul data-continent="North America">
    <li data-species="California condor">Critically Endangered</li>
    <li data-species="American bison">Near Threatened</li>
  </ul>
  <ul data-continent="Europe">
    <li data-species="Cave bear">Extinct</li>
  </ul>
  <button onclick="endangeredSpecies('Europe','Cave bear');"></button>
</div>
</body>
</html>

