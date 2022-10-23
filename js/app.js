// Primer entrega Calculadora de iva

while(true){
    var precioProd = parseFloat(prompt("Ingrese el precio del producto"));
    
    if(!isNaN(precioProd) && precioProd != null && precioProd !=""){
        break;
    } 
    else{
        alert ('no es numero');
        continue;
    }
}   
    alert("El precio del producto a calcular es:" +precioProd);
    console.log("El precio del producto a calcular es:" +precioProd);
 
// CALCULAR IVA
function calcularIva(precioProd){
    return (precioProd * 0.22)
}

var iva= calcularIva(precioProd);
alert("El IVA del producto es: "+iva);
console.log("El IVA del producto es: "+iva);

//IVA + PRECIO DEL PRODUCTO 
function sumarIva(precioProd){
    return (precioProd + (precioProd * 0.22));
}

var precioConIva = sumarIva(precioProd);
console.log("El precio del producto con IVA incluído es:" +precioConIva);

let nombre = prompt("Ingrese su nombre para finalizar");
alert("El total de su compra IVA incluido es: $"  +precioConIva);
alert("Muchas gracias! "+nombre);
console.log("Muchas gracias " +nombre); 