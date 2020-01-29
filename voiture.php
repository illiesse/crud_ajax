<?php
include ('templates/header.php');
?>

<div id="car">
	<h1 id="les_voitures">LES VOITURES</h1>
	<div>
		<button type="button" class="btn btn-dark" id="button_car_creation">Créer</button>
		<button type="button" class="btn btn-dark" id="button_car_filter">Filtrer</button>
		<button type="button" class="btn btn-dark" id="return">Annuler le filtre</button>
	</div>
	<table class="table table-striped">
		<thead>
		    <tr>
		    	<th scope="col">ID</th>
		    	<th scope="col">Marque</th>
		    	<th scope="col">Modèle</th>
		    	<th scope="col"></th>
		    </tr>
		</thead>
		<tbody id="list_cars">
		</tbody>
	</table>
</div>
<div class="modal" tabindex="-1" role="dialog">
	<div class="modal-dialog" role="document">
	    <div class="modal-content">
	    	<div class="modal-header">
	        	<h5 class="modal-title">Détails</h5>
	        	<button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          	<span aria-hidden="true">&times;</span>
	        	</button>
	      	</div>
	      	<div class="modal-body">
	        	<form id="formu">
	        		<div id="cache">
	        			ID:<br>
	        			<input type="hidden" name="ID" id="ID">
	        		</div>
	        		<div>
	        			Marque:<br>
							<input type="text" name="marque" id="marque">
						</div>
	        		<div>
	        			Modèle:<br>
							<input type="text" name="model" id="model">
						</div>
						<div>
							Gamme:<br>
							<input type="text" name="gamme" id="gamme">
						</div>
						<div>
							Prix:<br>
							<input type="text" name="prix" id="prix">
						</div>
	        	</form>
	      	</div>
	      	<div class="modal-footer">
	        	<button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
	        	<button type="button" class="btn btn-success" id="change_car">Modifier</button>
	        	<button type="button" class="btn btn-danger" id="delete_car">Supprimer</button>
	        	<button type="button" class="btn btn-primary" id="add_car">Ajouter</button>
	        	<button type="button" class="btn btn-primary" id="filter_car">Filtrer</button>
	      	</div>
	    </div>
	</div>
</div>

<?php
$s_path  = 'js/voiture.js';
include ('templates/footer.php');


