//Create an array object by splitting the IDs in the watch list comma seperated string into array elements
//Get the sys_id of the user selected in the Approver field
//Create a new object to use the ArrayUtil function

var arr = current.watch_list.split(',');  
var contact = current.u_approver;  
var arrayUtil = new ArrayUtil(); 
//Use the ArrayUtil object to check if the sys_id of the contact is among the sys_ids in the watch list
//If it is not in the watch list we add the sys_id to the array
if (!arrayUtil.contains(arr, contact)) {  
 arr.push(contact);  
} 

//Update the watch list field with the sys_ids now in the array. The join() funtion converts the array to a comma seperated string again

current.watch_list = arr.join();
