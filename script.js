let arreglo_funda = new Array ();
let gen_id = 1 ;
alert("Bienvenidos al sistemas de compra y venta de fundas para Celulares");

let flag = true ;

while (flag){

    let mensaje = "Indique lo que desea hacer: ";
    mensaje +=    "\n1) Cargar nueva funda ";
    mensaje +=    "\n2) Eliminar funda ";
    mensaje +=    "\n3) Mostrar fundas en stock " ;
    mensaje +=    "\n4) Salir " ;

    let resp = prompt(mensaje) ;
    switch (resp){

        case "1" : 
                ingresar_nueva_funda();
                break;
        case "2" :          
                eliminar_funda();
                break;
        case "3" :
                mostrar_fundas();
                break;
        case "4"  : 
                alert("Gracias por utilizar nuestra pagina :) ");
                flag=false;
                break;        
        case null : 
                alert("Gracias por utilizar nuestra pagina :) ");
                flag=false;
                break;
        default : 
                alert ("No ingreso una opcion valida") ;                     
    }
}

function ingresar_nuevo_funda(){

    let funda = solicitar_datos_funda ();

    if (funda) {

        funda.set_id(gen_id);
        gen_id ++ ;
        arreglo_funda.push(funda);

    }

}

function solicitar_datos_funda(){

    let check = true ;

    while (check){

        let msj = "" ;
        let marca = prompt("Ingrese marca").trim();
        let modelo = prompt ("ingrese modelo").trim();
        let precio = parseFloat(prompt ("Ingrese precio")); 

        if (!marca){
            msj += "\nDebe ingresar marca";
        }

        if (!modelo){
            msj += "\nDebe ingresar modelo" ;
        }

        if (isNaN(precio)){
            msj += "\nDebe ingresar un valor numerico en precio";
        }

        if (msj != ""){
            alert(msj);
            check = confirm ("Desea cargar de nuevo los datos");
        }else {

            return new Articulo (marca,modelo,precio);

        }

    }

    return false ;

}

function eliminar_funda (){

    if (existen_fundas()){

        mostrar_fundas();

        let id_ingresado = prompt("Ingrese el id de la funda a eliminar");

        if (id_ingresado){

            let funda_encontrada = arreglo_funda.find((a)=> a.id == id_ingresado);

            if (funda_encontrada){

                let resp = confirm ("Esta seguro de que desea eliminar la funda "+funda_encontrada.mostrar_descripcion() + " ?");
                if (resp) {

                    arreglo_funda =arreglo_funda.filter ((a) => a.id != id_ingresado) ;
                    alert("Funda eliminada con exito");

                }
            }
        }
    }
}

function existen_fundas(){

    if (arreglo_funda.length == 0) {

        alert("No hay funda en stock");

        return false ;
    }

    return true ;

}

function mostrar_fundas(){

    if (existen_fundas()) {

        let resp = prompt("La info se mostrara ordenada por precio.\n Desea verla en forma Ascendente (A) o Desendente (D)").toUpperCase() ;
        if (resp == "A") {

            arreglo_carrito.sort((a,b) =>{
                
                if (a.precio > b.precio) {
                    return 1;
                }
                if (a.precio < b.precio) {
                    return -1;
                }
                
                return 0;
            })
        }

        if (resp == "D"){

            arreglo_carrito.sort((a,b) =>{
                
                if (a.precio > b.precio) {
                    return -1;
                }
                if (a.precio < b.precio) {
                    return 1;
                }
                
                return 0;
            })
        }

        mostrar_arreglo();
    
    }

}

