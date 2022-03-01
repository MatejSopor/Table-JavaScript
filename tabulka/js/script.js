const form = $('form');
const tbody = $('tbody');
const table = $('table');

document.getElementById("paginated").style.visibility = "hidden";

		function onAddMeno(event) {

			event.preventDefault();
		const meno = document.getElementById('meno').value;
		const priezvisko = document.getElementById('priezvisko').value;

		document.getElementById("paginated").style.visibility = "visible";
		
		tbody.append('<tr><td>'+meno+'</td><td>'+priezvisko+'</td><td><button class = "deleteBtn">Delete</button></td></tr>');
		
	
		$('input#meno').val('' , "\r\n" );
		$('input#priezvisko').val('' , "\r\n" );
}

	function onDeleteRow() {
		$('.deleteBtn').on('click', function () {
		$(this).parents('tr').first().remove();
		

	});
	}
	
	form.on('submit', onAddMeno); 
	table.on('click', onDeleteRow); 


	






