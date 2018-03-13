//Catalog Client Script to enforce a variable field to insert commas at the correct 3 digit intervals and add a dollar sign to the beginning of the number. Also allows for - to designate negative dollar amounts.
 
function onChange(control, oldValue, newValue, isLoading, isTemplate) {  
  
  if (isLoading || newValue === '') {  
  return;  
  }  
  var result = formatNumber(newValue);  
  if(result == false){  
     alert('Only dollar amounts allowed');  
     return;  
  
  }  
   // To avoid recusrion  
  if(result != newValue){  
    // Change catalog variable field_name to the field on which this onChange script is applied  
    g_form.setValue('u_variance_amount', "$" + formatNumber(newValue));  
  
  }  
}  
 function formatNumber(x) {  
  // Regular expression allowing only numeric values  
  var reg = /^[\d,$.-]+$/;  
  if(!x.match(reg))  
    return false;  
  else  
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  // Insert commas at correct position  
  }  
