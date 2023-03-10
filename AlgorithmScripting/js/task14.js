function getStatus(isBusy) {
   var msg = (isBusy ? "busy" : "available");
   var obj = {
      status: msg
    };
    return obj.status;
  }

  console.log(getStatus(true));