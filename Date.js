function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  var sArray=userDate.split("/");
  if(sArray[0].length <2)
  {
    sArray[0]="0"+sArray[0];
  }
  if(sArray[1].length<2)
  {
    sArray[1]="0"+sArray[1];
  }
  var str=sArray[2]+sArray[0]+sArray[1];
  return str.toString();
}