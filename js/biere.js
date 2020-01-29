function load() {
	$.ajax({
		url: "http://jihane.fr/dwmg2/api/biere/bieres.php",
		type: "GET",
		// data:
		success: function(beers){ 
			$("#list_beers").html("");
			for (let i = 0; i < beers.length; i++) {
				$("#list_beers").append("<tr><td>"+beers[i].id+"</td><td>"+beers[i].nom+"</td><td><button type=\"button\" class='btn btn-dark "+beers[i].id+"' onclick='detail("+beers[i].id+")'>Voir</button></td></tr>")
			};
		},
		dataType: "json"
	})
}

$(".button_beer_creation").on("click", function(){
bouton_creer()
})
$(".add").on("click", function(){
creation()
})
$(".modif").on("click", function(){
	modification()
})
$(".delet").on("click", function(){
	suppression()
})
$(".button_beer_filter").on("click", function(){
	button_filter()
})
$(".filtre").on("click", function(){
	filtrer()
})
$(".return").on("click", function(){
	load()
})

load();

function detail(x) {
	$.ajax({
	url: 'http://jihane.fr/dwmg2/api/biere/unebiere.php',
	type: "GET",
	data: {id : x},
	success: function(one_beer){
		// console.log(une_biere)
		$('.add,.filtre,.cache').hide()
		$('.modif,.delet').show()
		$('#amertume,#nom,#prix').parent().show()
		$('.modal').modal('show')
		$("#ID").val(one_beer.id)
		$("#nom").val(one_beer.nom)
		$("#couleur").val(one_beer.couleur)
		$("#pays").val(one_beer.pays)
		$("#prix").val(one_beer.prix)
		$("#degres").val(one_beer.degres)
		$("#amertume").val(one_beer.amertume)
	},
	dataType: "json"
	})
}

function modification() {
	$.ajax({
	url: 'http://jihane.fr/dwmg2/api/biere/update.php',
	type: "GET",
	data: {id : $("#ID").val(),
		   nom : $("#nom").val(),
		   couleur : $("#couleur").val(),
		   pays : $("#pays").val(),
		   prix : $("#prix").val(),
		   degres : $("#degres").val(),
		   amertume : $("#amertume").val()
	},
	success: function(delete_biere){
		// console.log(modif_biere)
		$('.modal').modal('hide');
		load();
	},
	dataType: "text"
	})
}

function suppression() {
	$.ajax({
	url: 'http://jihane.fr/dwmg2/api/biere/deletebiere.php',
	type: "GET",
	data: {id : $("#ID").val()
	},
	success: function(suppr_biere){
		$('.modal').modal('hide');
		load();
	},
	dataType: "text"
	})
}

function bouton_creer() {
	$('.modif,.delet,.filtre,.cache').hide()
	$('.add').show()
	$('form').find(":text").val("")
	$('#amertume,#nom,#prix').parent().show()
	$('.modal').modal('show');
}

function creation() {
	$.ajax({
	url: 'http://jihane.fr/dwmg2/api/biere/newbeer.php',
	type: "POST",
	data: {
		   nom : $("#nom").val(),
		   couleur : $("#couleur").val(),
		   pays : $("#pays").val(),
		   prix : $("#prix").val(),
		   degres : $("#degres").val(),
		   amertume : $("#amertume").val()
	},
	success: function(create_beer){
		$('.modal').modal('hide');
		load();
	},
	dataType: "text"
	})
}

function button_filter() {
	$('.modif,.delet,.add,.cache').hide()
	$('.filtre').show()
	$('#amertume,#nom,#prix').parent().hide()
	$('form').find(":text").val("")
	$('.modal').modal('show');
}

function filtrer() {
	$.ajax({
	url: 'http://jihane.fr/dwmg2/api/biere/tri.php',
	type: "GET",
	data: {
		   couleur : $("#couleur").val(),
		   pays : $("#pays").val(),
		   degres : $("#degres").val(),
	},
	success: function(filter_beers){
		// console.log(filtre_biere[0].nom)
		$('.modal').modal('hide');
		$("#list_beers").html("");
			for (let i = 0; i < filter_beers.length; i++) {
				$("#list_beers").append("<tr><td>"+filter_beers[i].id+"</td><td>"+filter_beers[i].nom+"</td></tr>")
			};
	},
	dataType: "json"
	})
}



