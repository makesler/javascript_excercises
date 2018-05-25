function calculateBillTotal(preTaxAndTipAmount) {
	var sales_tax = 9.5; var tip = 15;
	// converts percent sales tax to a decimal number
  var sales_tax_decimal = sales_tax * 0.01;
  var tip_decimal = tip * 0.01;
  
  // calculate bill after tip and add it to preTaxAndTipAmount
  var find_tip_amount = preTaxAndTipAmount * tip_decimal;
  //calculate bill after sales tax and add it to preTaxAndTipAmount
  var find_sales_tax_amount = preTaxAndTipAmount * sales_tax_decimal;
  
  return (preTaxAndTipAmount + find_tip_amount + find_sales_tax_amount);
}

calculateBillTotal(20);
