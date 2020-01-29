function load() {
	fetch('http://jihane.fr/dwmg2/api/voiture/liste.php')
	.then(
		response => response.json()
		)
	.then(
		data=>{
			// console.log(data[0].marque)
			var list_cars = document.getElementById("list_cars")
			list_cars.innerText=""
			for (let i = 0; i < data.length; i++) {
				var lign_car = document.createElement("tr")
				list_cars.appendChild(lign_car)
				lign_car.innerHTML+="<td>"+data[i].id+"</td><td>"+data[i].marque+"</td><td>"+data[i].model+"</td><td><button type=\"button\" class='btn btn-dark "+data[i].id+"' onclick='detail("+data[i].id+")'>Voir</button></td>"
 			}
		}
	)
}

var button_car_creation = document.getElementById("button_car_creation")
button_car_creation.addEventListener("click",function (){button_creation()})

var add_car = document.getElementById("add_car")
add_car.addEventListener("click",function(){creation()})

var change_car = document.getElementById("change_car")
change_car.addEventListener("click",function (){modification_car()});

var delete_car = document.getElementById("delete_car")
delete_car.addEventListener("click",function (){suppression_car()});

var button_car_filter = document.getElementById("button_car_filter")
button_car_filter.addEventListener("click",function (){button_filter()})

var filter_car = document.getElementById("filter_car")
filter_car.addEventListener("click",function(){filter()})

var reload = document.getElementById("return")
reload.addEventListener("click",function(){load()})

load()

function detail(x) {
	fetch("http://jihane.fr/dwmg2/api/voiture/read.php?id="+x+"")
	.then(
		response => response.json()
		)
	.then(
		data=>{
			// console.log(data.marque)
			var hide_add_button = document.getElementById("add_car")
			hide_add_button.style.display = "none"
			var hide_filter_button = document.getElementById("filter_car")
			hide_filter_button.style.display = "none"
			var show_change_button = document.getElementById("change_car")
			show_change_button.style.display = "inherit"
			var show_delete_button = document.getElementById("delete_car")
			show_delete_button.style.display = "inherit"
			var hide_id = document.getElementById("cache")
			hide_id.style.display = "none"
			$('.modal').modal('show')
			var data_id = document.getElementById("ID")
			data_id.value = data.id
			var data_marque = document.getElementById("marque")
			data_marque.value = data.marque
			var data_model = document.getElementById("model")
			data_model.value = data.model
			var data_gamme = document.getElementById("gamme")
			data_gamme.value = data.gamme
			var data_prix = document.getElementById("prix")
			data_prix.value = data.prix
		}
	)
}

function modification_car() {
	fetch("http://jihane.fr/dwmg2/api/voiture/update.php?id="+document.getElementById('ID').value+"&marque="+document.getElementById('marque').value+"&model="+document.getElementById('model').value+"&gamme="+document.getElementById('gamme').value+"&prix="+document.getElementById('prix').value+"")
	.then(
		response => response.text()
	)
	.then(
		data=>{
			$('.modal').modal('hide')
			load()
		}
	)
}

function suppression_car() {
	fetch("http://jihane.fr/dwmg2/api/voiture/delete.php?id="+document.getElementById('ID').value+"")
	.then(
		response => response.text()
	)
	.then(
		data=>{
			$('.modal').modal('hide')
			load()
		}
	)
}

function button_filter() {
	var hide_add_button = document.getElementById("add_car")
	hide_add_button.style.display = "none"
	var hide_change_button = document.getElementById("change_car")
	hide_change_button.style.display = "none"
	var hide_delete_button = document.getElementById("delete_car")
	hide_delete_button.style.display = "none"
	var show_filter_button = document.getElementById("filter_car")
	show_filter_button.style.display = "inherit"
	var hide_id = document.getElementById("cache")
	hide_id.style.display = "none"
	var data_input = document.getElementsByTagName("input")
	for (let i = 0; i < data_input.length; i++) {
		data_input[i].value= ""
	}
	$('.modal').modal('show');
}

function filter() {
	fetch("http://jihane.fr/dwmg2/api/voiture/trie.php?marque="+document.getElementById('marque').value+"&model="+document.getElementById('model').value+"&gamme="+document.getElementById('gamme').value+"&prix="+document.getElementById('prix').value+"")
	.then(
		response => response.json()
	)
	.then(
		data=>{
			$('.modal').modal('hide')
			// console.log(data)
			var list_cars = document.getElementById("list_cars")
			list_cars.innerText=""
			for (let i = 0; i < data.length; i++) {
				var lign_car = document.createElement("tr")
				list_cars.appendChild(lign_car)
				lign_car.innerHTML+="<td>"+data[i].id+"</td><td>"+data[i].marque+"</td><td>"+data[i].model+"</td>"
 			}
		}
	)
}

function button_creation() {
	var show_add_button = document.getElementById("add_car")
	show_add_button.style.display = "inherit"
	var hide_change_button = document.getElementById("change_car")
	hide_change_button.style.display = "none"
	var hide_delete_button = document.getElementById("delete_car")
	hide_delete_button.style.display = "none"
	var hide_filter_button = document.getElementById("filter_car")
	hide_filter_button.style.display = "none"
	var hide_id = document.getElementById("cache")
	hide_id.style.display = "none"
	var data_input = document.getElementsByTagName("input")
	for (let i = 0; i < data_input.length; i++) {
		data_input[i].value= ""
	}
	$('.modal').modal('show');
}

function creation() {
	// var data_id = document.getElementById("ID")
	// var data_mark = document.getElementById("mark")
	// var data_model = document.getElementById("model")
	// var data_range = document.getElementById("range")
	// var data_price = document.getElementById("price")
	// var newload = {
	// 	marque: data_mark.value, 0: data_mark.value, model: data_model.value, 1: data_model.value, gamme: data_range.value, 2: data_range.value, prix: data_price.value, 3: data_price.value
	// };

	var data = new FormData(document.getElementById("formu"));
	// data.append("json",JSON.stringify(newload));
	 

	fetch('http://jihane.fr/dwmg2/api/voiture/create.php', {  
    	method: 'POST',  
    	// headers: {
     //    // 'Accept': 'application/json, text/plain, */*',
     //    'Content-Type': 'application/json' x-www-form-urlencoded;charset=UTF-8'
    	// },
 //    	body: "marque= data_mark.value&model=data_model.value&gamme=data_range.value&prix=data_price.value"
		body: data
	})
	.then(
		data=>{
		alert(JSON.stringify(data) )
  		console.log('Request success: ',data);
	})
	.catch( 
	  	error=>{
	  	console.log('Request failure: ',error);
	})
	$('.modal').modal('hide');
	load();	
}
