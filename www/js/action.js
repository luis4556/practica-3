document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
$('#sig1').click(function(){
		navigator.notification.beep(1);
		var nombre_usuario = document.getElementsByName('nombre')[0].value;
		localStorage.setItem("nombre", nombre_usuario);
        navigator.notification.alert("hola "+nombre_usuario,null,"bienvenido","ok");
});

$('#dis1').click(function(){
 var arr = [];
    arr['modelo'] = device.model;
    arr['phonegap'] = device.cordova;
    arr['plataforma'] = device.platform;
    arr['id'] = device.uuid;
    arr['version'] = device.version;
    arr['nombre'] = device.name;
   
     $('#data').append('<p>'+device.model+'</p>');
    $('#data').append('<p>'+arr['phonegap']+'</p>');
     $('#data').append('<p>'+arr['plataforma']+'</p>');
     $('#data').append('<p>'+arr['id']+'</p>');
     $('#data').append('<p>'+arr['version']+'</p>');
     $('#data').append('<p>'+arr['nombre']+'</p>');
		
});

$('#red1').click(function(){
	 var conn = navigator.connection.type;
        if(conn != Connection.NONE)
            navigator.notification.alert("Conectado",null,"bienvenido","ok");
        else
            navigator.notification.alert("Desconectado",null,"bienvenido","ok");
		
});

$('#calc').click(function(){
		var peso_persona= document.getElementsByName('number-1')[0].value;//$('#peso').val();
		var altura_persona = document.getElementsByName('number-2')[0].value;//$('#altura').val();
        //calcular IMC
        var imc=parseFloat(peso_persona)/((parseFloat(altura_persona)/100)*(parseFloat(altura_persona)/100));
        //obtener valor de localstorage del nombre
        var nombre = localStorage.getItem('nombre');
		//almacenar el valor enn unn localStorage
        localStorage.setItem("imc",imc);
		//fn.vibrar_sonar();      
		navigator.notification.alert(" hola "+nombre+" tu imc="+imc,null,"bienvenido","ok");
	 
		
});

$('#enviar').click(function(){

	var peso = $('#peso').val();
         var altura = $('#altura').val();
         var nombre = localStorage.getItem('nombre');
         var imc = localStorage.getItem('imc');
         //alert(nombre+" "+imc);

         //ajax enviar los datos de arriba
         if(peso !='' && altura != '' && nombre !='' && imc !='' )
           {
 		$.ajax({
        type: "POST",
        url: "http://uprrimc.azurewebsites.net/test2.php", // data: { nom: nom, mail: mail,tel:tel }
        data: "peso="+peso+"&altura="+altura+"&nombre="+nombre+"&imc="+imc
                      }).done(function(msg){
                        if(msg==1){
                               
                        navigator.notification.alert("Datos eviados y recibidos"+msg,null,"Éxito","Aceptar");
                        
                        }else{
                            navigator.notification.alert("Hubo un error en el registro"+msg,null,"Error","Aceptar");
                        }
                    });
            
           }
           
	 
		
});






	}