  
// <!DOCTYPE html>
// <html>
// <head>
//   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
//   <script lang="javascript" >  
//     $(document).ready(function(){
//       validateInput();
//     });
    function validateInput()
    {
      var signal1=false;
      var signal2=false;
      var result=true;
      // Write your code here.
      var delighted=document.getElementById("delighted");
      var donate=document.getElementById("donate");
      var notDelighted=document.getElementById("not-delighted");
      var box=document.getElementById("reason").value;
      
      if(!delighted.checked&&donate.checked)
      {
          signal1=true;
      }
      if(notDelighted.checked)
      {
        console.log(box.value);
        box=document.getElementById("reason").value;
        if(box.value.length!=0)
        {
          signal2=true;
        }
        else{
        signal2=false;
        }
        if(document.getElementById("donate").checked)
        {
          signal2=false;
        }
      }
      if(signal1&&signal2)
      {
        $(".error-message").text(" BOTH RULES BROKEN");
        result=false;
      }
      else if(signal1)
      {
        $(".error-message").text("RULE 1 BROKEN");
        result=false;
      }
      else if(signal2)
      {
        $(".error-message").text("RULE 2 BROKEN");
        result=false;
      }
      return result;
    }
    
  {/* </script>
</head>
<body>
  <div class="error-message">
    <!-- Display error message here -->
  </div>
  
  <form id="feedback" onsubmit="return validateInput()">
    <input type="radio" id="delighted" name="delighted" checked="checked" required /> Delighted
    <input type="checkbox" id="donate" name="donate" /> Donate<br />
    <input type="radio" id="not-delighted" name="delighted" required /> Not delighted
    <input type="text" id="reason" name="reason" /> Reason<br />
    <input type="submit" value="Submit" />
  </form>
</body>
</html> */}
