//To call a person's specific groups of which they are a member, and excluding any Parent Groups that they are not a member of, but may be inheriting permissions from, use the following script in a Script Include:
function getMySpecificGroups(){  
  var gr = new GlideRecord('sys_user_grmember');  
  gr.addQuery("user", gs.getUserID());  
  gr.addQuery("group.active", true);  
  gr.query();  
  var array = [];  
  while (gr.next()) {  
      array.push(gr.getValue('group'));  
  }  
  return array;  
}  
 
//Then when building conditions to display items, use the following logic:
//Assignment Group - is - javascript:getMySpecificGroups()
