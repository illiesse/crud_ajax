<?php
include ('templates/header.php');
?>

<div id="beer">
	<h1 id="les_bieres">LES BIERES</h1>
	<div>
		<button type="button" class="btn btn-dark button_beer_creation">Créer</button>
		<button type="button" class="btn btn-dark button_beer_filter">Filtrer</button>
		<button type="button" class="btn btn-dark return">Annuler le filtre</button>
	</div>
	<table class="table table-striped">
		<thead>
		    <tr>
		    	<th scope="col">ID</th>
		    	<th scope="col">Nom</th>
		    	<th scope="col"></th>
		    </tr>
		</thead>
		<tbody id="list_beers">
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
	        	<form action="http://jihane.fr/dwmg2/api/biere/bieres.php" method="GET">
	        		<div class="cache">
	        			ID:<br>
	        			<input type="text" name="ID" id="ID">
	        		</div>
	        		<div>
	        			Nom:<br>
							<input type="text" name="nom" id="nom">
						</div>
	        		<div>
	        			Couleur:<br>
							<input type="text" name="couleur" id="couleur">
						</div>
						<div>
							Pays:<br>
							<input type="text" name="pays" id="pays">
						</div>
						<div>
							Prix:<br>
							<input type="text" name="prix" id="prix" class="prix">
						</div>
						<div>
							Degrés:<br>
							<input type="text" name="degres" id="degres" class="degres">
						</div>
						<div>
	        			Amertume:<br>
							<input type="text" name="amertume" id="amertume" class="amertume">
						</div>
	        	</form>
	      	</div>
	      	<div class="modal-footer">
	        	<button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
	        	<button type="button" class="btn btn-success modif">Modifier</button>
	        	<button type="button" class="btn btn-danger delet">Supprimer</button>
	        	<button type="button" class="btn btn-primary add">Ajouter</button>
	        	<button type="button" class="btn btn-primary filtre">Filtrer</button>
	      	</div>
	    </div>
	</div>
</div>

<?php
$s_path  = "js/biere.js";
include ('templates/footer.php');


