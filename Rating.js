  
// <!DOCTYPE html>
// <html>
// <head>

// <style>
// .active{
//   background-color: aqua;
// }

// </style>
//   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
//   <script lang="javascript" >  
//     $(document).ready(function(){
//       setup();
//     });
    function setup() 
    {
      // Write your code here.
      var id=0;
      var span=$("span");
      for(var i=0; i<span.length;i++)
      {
        span[i].setAttribute("id",(i+1).toString());
      }
      $("span").click(function()
      {
        id= parseInt($(this).attr("id"));
        for(var i=0; i<span.length;i++)
        {
          span[i].removeAttribute("class",(i+1).toString());
        }
         for(var k=1; k<=id;k++)
         {
          $("#"+k.toString()).attr("class","active");
         }
        });
      } 

//   </script>
// </head>
// <body>
//   <div id='rating'>
//     <span>*</span>
//     <span>*</span>
//     <span>*</span>
//     <span>*</span>
//     <span>*</span>
//   </div>
// </body>
// </html>
