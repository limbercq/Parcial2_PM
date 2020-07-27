<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="asset/css/bootstrap.min.css">
	<link rel="stylesheet" href="asset/css/style.css">
    <style type="text/css" media="screen, print">
     @font-face {font-family: Lobster-Regular; src: url(asset/font/Lobster-Regular.ttf);}
    </style>
	<title>1er Pregunta</title>
</head>
<body>

<div class="container-fluid">
	<?php 
		$this->load->view('menu');
	?>
	 <form action="" method="post" class="row was-validated">
		<div class="col-12">
		<h1 class="tipografia_1">Motor Workfow</h1>
		<?php  if	(isset($archivo->result()[0]->codFlujo)){?>
			<h5 class="text-info">Flujo: <?php echo $archivo->result()[0]->codFlujo?>  &
			Proceso: <?php echo $archivo->result()[0]->codProceso?> </h5>
		<?php } ?>
		</div>
		
		<div class="col-6">
			<?php			
				
				 if	(isset($archivo->result()[0]->codFlujo)){
					$this->load->view($archivo->result()[0]->pantalla);

				 }else
				 {
					 echo 'No hay proceso anterior';
				 }
			?>
			<?php  if	(isset($archivo->result()[0]->codFlujo)){?>
			<input type="hidden" value="<?php echo $archivo->result()[0]->codFlujo?>" name="codFlujo"/>
			<input type="hidden" value="<?php echo $archivo->result()[0]->codProceso?>" name="codProceso"/>
			<input type="hidden" value="<?php echo $archivo->result()[0]->codProcesoSiguiente?>" name="codprocesosiguiente"/>
			<div class="btn-group col-12">
			<input type="submit" class="btn btn-outline-secondary btn-block " value="Anterior" name="Anterior"/>
			<?php } ?>
			<?php 
			if	(isset($archivo->result()[0]->codFlujo)){
				 if ($archivo->result()[0]->codProcesoSiguiente) {
					echo "<input type='submit' class='btn btn-outline-success btn-block m-0' value='Siguiente' name='Siguiente'/>";
				 }
			}
			else{
				echo "<input type='submit' class='btn btn-outline-success btn-block m-0' value='Siguiente' name='Siguiente'/>";
			}
			?>
			</div>
			
		</div>
	</form>
	<?php 
		$this->load->view('footer');
	?>
  
	</div>
  <script src="asset/js/jquery-3.2.1.min.js"></script>
  <script src="asset/js/bootstrap.min.js"></script>
	
</body>
</html>