/**
 * Para un censo municipal debemos cargar los datos de <b>TODAS</b> las mascotas de nuestra veterinaria:</p>
            <p> necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos) </br>
                el tipo de pelaje (corto, largo , sin pelo),</br>
                la edad de la mascota (edad validada);</br>
                el nombre (una palabra) </br>
                la raza  (una palabra) </br>
                el peso (peso validado) </br>
                el estadoClinico (enfermo,internado o adopcion)</br>
                la temperaruta corporal</br></br>
                
                y nos piden informar solo si existe</br>
                a)El perro mas pesado</br>
                b)El porcentaje de enfermos sobre el total de mascotas</br>
                c)El nombre de la ultima mascota de tipo "otra cosa"</br>
                d)El animal sin pelo con menor temperatura corporal</br>
                e)Que tipo de mascota(gato o un perro u "otra cosa") que tiene el mayor promedio de temperatura corporal</br>
                f)Sumando gatos y perros que porcentaje del total de mascotas son?</br>
                g)Que estado clinico tiene la menor cantidad de mascotas       </br>
                H)Cual es el promedio de kilos de peso de tomando todas las mascotas </br>
                i)El nombre y raza del gato sin pelos mas liviano
 */
function probarEjercicio(){
	
	let tipoMascota
	let pelajeMascota
	let nombreMascota
	let edadMascota
	let razaMascota
	let pesoMascota
	let estadoClinico
	let tempCorporal
	let flag1
	let flag2
	let flag3
	let contadorMascotas =0
	let contadorOtros = 0
	let contadorPerro = 0
	let contadorGato= 0
	let perroMaxPesado= 0
	let acumPerroYGato=0
	let contadorEnfermos = 0
	let ultMascotaTipoOtro;
	let nombreSinPeloMenorTemp;
	let menorTempSinPelo;
	let pYgSobreTotal;
	let estClinicoMenorCant;
	let acumuladorPeso=0;
	let acumuladorTemp=0;

	let mayorPromTempGato;
	let mayorPromTempOtro;
	let mayorPromTempPerro;
	let promDePeso;

	let razaGatoLiviano;
	let nombreGatoLiviano;
	let pesoGatoLiviano;
	
	let respuesta

	do {
		tipoMascota=prompt("Que tipo de mascota tiene usted de los siguientes animalitos: (gato; perro; otro)")
		while (tipoMascota != "gato" && tipoMascota != "perro" && tipoMascota != "otro")
		{
			tipoMascota = prompt("Animal no encontrado, escriba nuevamente")
			console.log(tipoMascota)
		}

		pelajeMascota= prompt("que tipo de pelaje tiene de los siguientes: (corto; largo; sin pelo)")
		while (pelajeMascota != "corto" && pelajeMascota != "largo" && pelajeMascota != "sin pelo") {
			pelajeMascota = prompt("Pelaje invalido, vuelva a escribir")
			console.log(pelajeMascota)
		}

		edadMascota = parseInt(prompt("ingrese la edad de su mascota"))
		while (isNaN(edadMascota)== true) {
		edadMascota=parseInt(prompt("Edad Invalida, vuelva a ingresar una edad valida"))	
		console.log(edadMascota)
		}

		nombreMascota = prompt("Ingrese el nombre de su mascota.")
		while (isNaN(nombreMascota)==false) {
			nombreMascota=prompt("Error, ingrese un nombre valido para su mascota")
			console.log(nombreMascota)
		}

		razaMascota = prompt("Ingrese la raza de su mascota.")
		while (isNaN(razaMascota)==false) {
			razaMascota=prompt("Error, ingrese una raza valida")
			console.log(razaMascota)
		}
		
		pesoMascota = parseInt(prompt("ingrese el peso de su mascota"))
		while (isNaN(pesoMascota)== true) {
		pesoMascota=parseInt(prompt("Peso Invalido, vuelva a ingresar un peso valido"))	
		
		}
		
		//el estadoClinico (enfermo,internado o adopcion)</br>
		//la temperaruta corporal

		estadoClinico = prompt("En que estado se encuentra su mascota: enfermo; internado o en adopcion")
		while (estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion") {
			estadoClinico=prompt("Error, estado clinico invalido, vuelva a escribir el estado clinico correcto")
			
		}

		tempCorporal= parseInt(prompt("ingrese la temperatura corporal de su mascota"))
		while (isNaN(tempCorporal)==true) {
			tempCorporal=parseInt(prompt("Error, ingrese una temperatura corporal correcta"))
			
		}
		
		contadorMascotas++
		acumuladorTemp = acumuladorTemp + tempCorporal
		acumuladorPeso = acumuladorPeso + pesoMascota

/**
a)El perro mas pesado</br>
b)El porcentaje de enfermos sobre el total de mascotas</br>
c)El nombre de la ultima mascota de tipo "otra cosa"</br>
d)El animal sin pelo con menor temperatura corporal</br>
e)Que tipo de mascota(gato o un perro u "otra cosa") que tiene el mayor promedio de temperatura corporal</br>
f)Sumando gatos y perros que porcentaje del total de mascotas son?</br>
g)Que estado clinico tiene la menor cantidad de mascotas       </br>
H)Cual es el promedio de kilos de peso de tomando todas las mascotas </br>
i)El nombre y raza del gato sin pelos mas liviano */	

	switch (tipoMascota) {
		case "perro":
			contadorPerro++
			mayorPromTempGato = acumuladorTemp / contadorGato;	
			break;
		case "perro":
			contadorPerro++;	
			mayorPromTempPerro = acumuladorTemp / contadorPerro;		
			break;
		case "otro":
			ultMascotaTipoOtro = nombreMascota;
			contadorOtros++;
			mayorPromTempOtro = acumuladorTemp / contadorOtros;
			break;
	}

	if(estadoClinico == "enfermo"){
		contadorEnfermos++;
	}
	
	if (flag1 == 0) {			
		perroMaxPesado = pesoMascota;
		menorTempSinPelo = tempCorporal;
		nombreSinPeloMenorTemp = nombreMascota;
		flag1++;
	}
	else if(pesoMascota > perroMaxPesado){			
		perroMaxPesado = pesoMascota;
	}
	else if (tempCorporal < menorTempSinPelo && tipoPelaje == "sin pelo"){
		menorTempSinPelo = tempCorporal;
		nombreSinPeloMenorTemp = nombreMascota;
	}
	if(flag2==0){
		estClinicoMenorCant = estadoClinico;
	}
		if(contadorGato > contadorPerro && contadorGato > contadorOtros){
			estClinicoMenorCant = estadoClinico;
		}
		else if (contadorPerro > contadorGato && contadorPerro > contadorOtros){
			estClinicoMenorCant = estadoClinico;
		}
		else if(contadorOtros > contadorPerro && contadorOtros > contadorGato){
			estClinicoMenorCant = estadoClinico;
		}

	if(flag3==0 && mascota == "gato" && tipoPelaje == "sin pelo"){
		nombreGatoLiviano = nombreMascota;
		razaGatoLiviano = razaMascota;
		pesoGatoLiviano = pesoMascota;
		flag3++;
	}
	else if(pesoMascota < pesoGatoLiviano && mascota == "gato" && tipoPelaje == "sin pelo"){
		nombreGatoLiviano = nombreMascota;
		razaGatoLiviano = razaMascota;
		pesoGatoLiviano = pesoMascota;
	}

	
} while (respuesta=confirm("Desea ingresar datos de otra mascota?"));
//ACA TERMINO EL BUCLE
acumPerroYGato = contadorPerro + contadorGato;
promDePeso = acumuladorPeso / contadorMascotas;

if (flag1 != 0) {
	document.write("El perro mas pesado pesa :"+perroMaxPesado+"<br>");
}
if(contadorEnfermos != 0){
	porcentajeEnfermos =  contadorMascotas / contadorEnfermos;
	document.write("El porcentaje de enfermos sobre el total de mascotas es :"+porcentajeEnfermos+"<br>");
}
if(contadorOtros != 0){
	document.write("El nombre de la ultima mascota del tipo [otro] es :"+ultMascotaTipoOtro+"<br>");
}
if(flag1 != 0){
	document.write("El animal sin pelo con menor temperatura corporal se llama :"+nombreSinPeloMenorTemp+"<br>");
}

if(mayorPromTempGato > mayorPromTempPerro && mayorPromTempGato > mayorPromTempOtro){
	document.write("El mayor promedio de temperatura corporal es del tipo de mascota: GATO <br>");
}
else if (mayorPromTempPerro > mayorPromTempGato && mayorPromTempPerro > mayorPromTempOtro){
	document.write("El mayor promedio de temperatura corporal es del tipo de mascota: PERRO <br>");
}
else if(mayorPromTempOtro > mayorPromTempPerro && mayorPromTempOtro > mayorPromTempGato){
	document.write("El mayor promedio de temperatura corporal es del tipo de mascota: OTRO <br>");
}

if(contadorGato != 0 && contadorPerro != 0){
	pYgSobreTotal = acumPerroYGato / contadorMascotas;
	("El porcentaje de gatos y perros sobre el total de mascotas es :"+pYgSobreTotal+"<br>");
}

document.write("El estado clinico de la menor cantidad de mascotas es :"+estClinicoMenorCant+"<br>");
document.write("El promedio de peso de todas las mascotas es :"+promDePeso+"<br>");

if(flag3 != 0){
	document.write("El gato sin pelos mas liviano se llama :"+nombreGatoLiviano+" y es de la raza :"+razaGatoLiviano)
	}
}