		let result = document.getElementById("time");
//         let result = document.getElementById("content");

		function changeColor(color) {
			document.body.style.background = color;
		}

		function myFunc() {
			changeColor('#006437');
			result.innerHTML = "Palmeiras";
			document.getElementById("myImage").src="https://logodownload.org/wp-content/uploads/2015/05/palmeiras-logo-4.png";
			document.getElementById("modalidade").innerHTML = "Modalidade: Futebol";
            document.getElementById("jogadores").innerHTML = "Quantidade de jogadores: 11";

		}
        function myFunc1() {
			changeColor('#9b601f');
			result.innerHTML = "Bauru Basket";
            document.getElementById("myImage").src="https://upload.wikimedia.org/wikipedia/ru/6/63/Bauru_Basket_logo.png";
			document.getElementById("modalidade").innerHTML = "Modalidade: Basquete";
            document.getElementById("jogadores").innerHTML = "Quantidade de jogadores: 10";
		}
        function myFunc2() {
			changeColor('#0a3782');
			result.innerHTML = "Esporte Clube Pinheiros";
			document.getElementById("myImage").src="https://volleybox.net/media/upload/teams/big_1680891118k7nXQ.png";
			document.getElementById("modalidade").innerHTML = "Modalidade: Vôlei";
            document.getElementById("jogadores").innerHTML = "Quantidade de jogadores: 12";
		}
