<?php 

class Motor extends CI_Controller{

    public function __construct() {
        parent::__construct();

        $this->load->database();
    }

    public function index() {
        if(!isset($_POST["codFlujo"]) & !isset($_POST["codprocesosiguiente"]) ){
            $codFlujo = 'F1';
            $codProceso = 'P1';
            $sql="select * from proceso where codFlujo='$codFlujo' and codproceso='$codProceso'";
        }else{
                $codFlujo=$_POST["codFlujo"];
                $codProcesoSiguiente=$_POST["codprocesosiguiente"];
                $codProceso=$_POST["codProceso"];
                if (isset($_POST["Anterior"])) {
                    $sql="select * from proceso where codFlujo='$codFlujo' and codProcesoSiguiente='$codProceso'";
                }
                if (isset($_POST["Siguiente"])) {
                    $sql="select * from proceso where codFlujo='$codFlujo' and codproceso='$codProcesoSiguiente'";
                }
        }
        
        $data['archivo']  =  $this->db->query($sql);
        if	(isset($data['archivo']->result()[0]->codFlujo)){
        $direccion = str_replace(".","_",$data['archivo']->result()[0]->pantalla);
        $data['doc']  =  $this-> $direccion();
        }
        $this->load->view("motor",$data);
    }

    public function averigua_inc_php()
    {
        
    }
    public function listadoc_inc_php()
    {   
        if(isset($_POST["ci"]) & isset($_POST["nombre"]) & isset($_POST["apellido"])){
            $ci=$_POST["ci"];
            $nombre=$_POST["nombre"];
            $apellido=$_POST["apellido"];
            $sql="select * from alumno where ci='$ci' and nombre='$nombre'  and apellido='$apellido'";
            return $this->db->query($sql);
        }
        else {
            return 'No se encontro ese estudiante';
        }
        
    }
    public function presentar_inc_php()
    {
        
    }
    public function docdia_inc_php()
    {
        
    }
}
     
?>