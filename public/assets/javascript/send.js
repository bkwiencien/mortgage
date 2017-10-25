function getResults() {
	console.log("in getResults");
	var currentPrincipal = parseFloat($("#principal-input").val().trim());
    var label = $("#label-input").val().trim();
    var monthlyPayment = $("#payment-input").val().trim();
    var interestRate = parseFloat($("#rate-input").val().trim());
    var additional   = parseFloat($("#additional-input").val().trim());
	console.log(currentPrincipal);
}