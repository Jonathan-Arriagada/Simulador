let continuar = true
let opcion
let eleccion
let precio
let total = 0
const IVA = 1.21
while(continuar){
    do{
    opcion= parseInt(prompt("Ingrese la opcion deseada (1. Accesorios celulares 2. Accesorios PC)"));
    if(isNaN(opcion)){
        alert("Ingrese una opción válida")
        }   
    }while (isNaN(opcion))

    switch (opcion) { 
    case 1:
        do{
        eleccion=parseInt(prompt("1.Cargador Inalambrico $1000 2.Cable USB $500"));
        if(isNaN(eleccion)){
            alert("Ingrese una opción válida")
            }       
        }while (isNaN(eleccion))

        switch (eleccion){
        case 1:     
            alert("Cargador Inalambrico $1000") 
            precio = 1000;  
            precioConIva(precio);

        break;
        case 2: 
            alert("Cable USB $500")
            precio = 500; 
            precioConIva(precio);     
        break;
     
    }
    break;
    case 2:
        do{
        eleccion=parseInt(prompt("1.Auriculares Inalambricos $5000 2.Teclado Gamer $3500"));
        if(isNaN(eleccion)){
            alert("Ingrese una opción válida")
            }       
        }while (isNaN(eleccion))
        switch (eleccion){
            case 1: 
                alert("Auriculares Inalambrico $5000")
                precio = 5000;
                precioConIva(precio);                                            
            break;
            case 2: 
                alert("Teclado Gamer $3500")
                precio = 3500;  
                precioConIva(precio);    
            break;
            default:
                alert("Ingrese una opción válida")
                break;
        }
     break;

    default:
        alert("Ingrese una opción válida")
        break;
    }   
    let condicion= prompt("¿Desea seguir comprando?").toLowerCase()
    if (condicion=="no") {
        continuar=false
    }
   
}
function precioConIva(precio) {
    total += (precio*IVA); 
        return total
}

alert (`TOTAL: ${total}`)