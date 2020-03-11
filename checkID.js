function check(str)
{
  var cArray= str.split('').map(Number);
  var sum=10;
  var sArray="";
  while(sum>9)
  {
    sum=cArray.reduce((a, b) => a + b, 0);
    cArray=sum.toString().split('').map(Number);
  }  
  return sum;
}