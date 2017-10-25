function getResults() {
	console.log("in getResults");
	var currentPrincipal = parseFloat($("#principal-input").val().trim());
    var label = $("#label-input").val().trim();
    var monthlyPayment = $("#payment-input").val().trim();
    var interestRate = parseFloat($("#rate-input").val().trim());
    var additional   = parseFloat($("#additional-input").val().trim());
    var args = {
    	label: label,
    	mpayment: monthlyPayment,
    	interestrate: interestRate,
    	additional: additional
    }
    $.ajax({
           type: "POST",
           url: "/calculate",
           dataType: "json",
           success: function (msg) {
               if (msg) {
                   console.log(msg);
               } else {
                   console.log("failure");
               }
           },

           data: args
       });
	console.log(currentPrincipal);
	console.log(args);
}