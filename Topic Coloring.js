//using more javascript
function newMessage(topicName) {
  let ele=document.body.getElementsByTagName("p");
  //Write your code here
  for(var i=0; i<ele.length;i++)
    {
      if(ele[i].getAttribute('data-topic-name')==topicName)
        {
         ele[i].style.backgroundColor = "red" ;
        }
    }
   
}


//using Jquery

function newMessage(topicName) {
  //Write your code here
  $("[data-topic-name="+topicName+"]").css("background-color","red");
}
