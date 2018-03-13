addLoadEvent(addExportXLButton);

function addExportXLButton(){
	
if($('export_pdf_button') && (gel('sysparm_type').value == 'list') ){
//Creates element type
var sp1 = document.createElement('a');
//Assigns id
sp1.id = 'export_excel_button';
//Names the button
sp1.innerHTML = 'Export to Excel';
//Button attribute value
sp1.setAttribute('value', 'Export to Excel');
//Executes the function "runContextAction()" when the button is clicked
sp1.setAttribute('onclick','runContextAction()');
//Sets element title
sp1.setAttribute('title', 'Export this report to Excel');
//Sets element type
sp1.setAttribute('type', 'li');
//obtains element value
var sp2 = document.getElementById('export_pdf_button');
//Parents the export to PDF button
var parentDiv = sp2.parentNode;
//Inserts our button next to its parent "Export to PDF"
parentDiv.insertBefore(sp1, sp2.nextSibling);
}//End of If statement
}//End of addExportXLButton() function

function runContextAction() {
//Obtains the rows number of the current report
var sysparm_rows1 =$$('.list_row_number_input span')[1].innerHTML;
//Parses string value into an integer value
var num_rows = parseInt(sysparm_rows1);
//Gets report query
var sysparm_query = gel('sysparm_query').value;
//Get view name needed to export
var sysparm_view="rpt-temp"+gel('sysparm_report_id').value+g_user.userName;
//Creates export file if rows is less than limit value
if (num_rows < g_export_warn_threshold) {
var dialog = new GwtPollDialog(gel('sysparm_table').value, sysparm_query, sysparm_rows1, sysparm_view,
'unload_excel');
dialog.execute();
return;
}//End of IF statement
//Else Asks user to mail report or wait for it
var dialog = new GwtExportScheduleDialog(gel('sysparm_table').value, sysparm_query, sysparm_rows1,
sysparm_view, 'unload_excel');
dialog.execute();
}//End of runContextAction() function
