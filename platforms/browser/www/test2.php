<?php
	if(isset($_POST['peso']) && isset($_POST['altura']) && isset($_POST['nombre']) && isset($_POST['imc'])){
		echo 1;
	}else{
		
				echo 'Error 404: Not Found';
	
	}
?>