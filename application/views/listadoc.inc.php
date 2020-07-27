<h3 class="tipografia_1">Listado de documentos:</h3>

<p>
<?php 
     if(gettype($doc) == 'string'){
         echo "No hay ningun estudiante seleccionado";
     }
     else{
        if (count($doc->result())) {
            echo "- CI : ". $doc->result()[0]->ci ."<br>
            - Nombre : ". $doc->result()[0]->nombre ."<br>
            - Apellidos : ". $doc->result()[0]->apellido ."<br>
            - Matricula  <br>
            - Pago actual del certificado notas<br>
            ";
        } else {
            echo "El estudiante ingresado no se encuentra en las listas";
        }
        
        
     }
?>

</p>