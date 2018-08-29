(function(){
	var imagenes = [
		'img/IMG_8926.jpg',
		//'img/IMG_8928.jpg',
		'img/IMG_8938.JPG'
	];
	var indiceInicial =0;
	$("#btnRecepcion").hide();
	$("#btnColectivo").hide();
	var miImagen = document.getElementById("miImagen");
	miImagen.addEventListener("click", function(){
		//alert("hello");
		indiceInicial++;
		if(indiceInicial>=2) indiceInicial=0;
		//$('#lblTituloModal').text("Mi Matrimonio!!!");
		//document.getElementById("lblCuerpoModal").innerHTML = "Espero tu pronta Confirmación!!!";
		//$('#miModal').modal('show')
		if(indiceInicial==0){
			$("#btnRecepcion").hide();
			$("#btnColectivo").hide();
		}else{
			$("#btnRecepcion").show();
			$("#btnColectivo").show();
		}
		$('#miImagen').attr('src',imagenes[indiceInicial]);
	});

	var miRecepcion = document.getElementById("btnRecepcion");
	miRecepcion.addEventListener("click", function(){
		$('#lblTituloModal').text("Mi Matrimonio!!!");
		document.getElementById("lblCuerpoModal").innerHTML = "Espero tu pronta Confirmación!!!";
		$('#miModal').modal('show')
		$('#miImagenModal').attr('src','img/IMG_8940.JPG');
	});

	var miColectivo = document.getElementById("btnColectivo");
	miColectivo.addEventListener("click", function(){
		$('#lblTituloModal').text("Mi Matrimonio!!!");
		document.getElementById("lblCuerpoModal").innerHTML = "Espero que estés presente en este día especial.";
		$('#miModal').modal('show')
		$('#miImagenModal').attr('src','img/IMG_8939.jpg');
	});
})();