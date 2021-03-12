
alert("Navrh frontendu")
  
function showTable(tableId)
    {
         var elem=document.getElementsByName(tableId);
         console.log(elem);
         for(var i=0; i < elem.length;i++){
             console.log("som vo forku");
            var hide = elem[i].style.display =="none";
            if (hide) {
                elem[i].style.display="";
           } 
           else {
            elem[i].style.display="none";
           }
         }
      
    }