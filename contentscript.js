console.log("Injecting code into page " + window.location.href + ". Searching for objects...");
disablewindowless();

// Find all objects and change any windowless params to false.
function disablewindowless() {
  slobjects = document.getElementsByTagName('object');
  for(i = 0; i < slobjects.length; i++) {
    var slobject = slobjects[i];
    if ( slobject.type == "application/x-silverlight-2" ) {
      params = slobject.getElementsByTagName("param");
      console.log("Silverlight object found (params:" + params.length + ").");
      var reloadflag = false;
      for(j = 0; j < params.length; j++) {
        if ( params[j].name == "windowless") {
          console.log("Setting windowless to false (current:" + params[j].value + ").");
          params[j].value="false";
          reloadflag=true;
        }
      }
      // Reload object if changed
      if (reloadflag == true) {
        console.log("Reloading of Silverlight object.");
        var slobjectparent=slobject.parentNode;
        slobjectparent.removeChild(slobject);
        slobjectparent.appendChild(slobject);
      } else {
         console.log("No reload of Silverlight object.");
      }
    }
  }
}
