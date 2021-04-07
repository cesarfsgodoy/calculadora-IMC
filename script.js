const calcButton = document.getElementById('calcular')

function classificacao(valorImc){
	const parametroMasculino = [20, 24.9, 29.9, 39.9]
	const parametroFeminino = [19, 23.9, 28.9, 38.9]

	const gender = document.querySelector('input[name="gender"]:checked').value
	switch (gender){
		case 'm':
			console.log('m')
			var parametroImc = [...parametroMasculino]
			break

		case 'f':
			console.log('f')
			var parametroImc = [...parametroFeminino]
			break
	}

	if (valorImc < parametroImc[0]){
		return 'abaixo do peso.'
	}
	
	if (valorImc < parametroImc[1]){
		return 'com o peso adequado'
	}

	if (valorImc < parametroImc[2]){
		return 'levemente acima do peso'
	}

	if (valorImc < parametroImc[3]){
		return 'com obesidade grau I'
	}

	if (valorImc < parametroImc[4]){
		return 'com obesidade grau II (severa)'
	}

	return 'com obesidade grau III (mórbida)'
}

function imc(){
	const altura = document.getElementById('altura').value
	const peso = document.getElementById('peso').value
	const resultado = document.getElementById('resultado')

	if(altura === '' || peso ===''){
		alert('Preencha todos os campos')
		return
	}

	if(altura <= 0 || peso <= 0){
		alert('Preencha os campos com valores válidos')
		return
	}



	let imc = peso/(altura*altura)
	let situacao = classificacao(imc)
	resultado.style.padding = '10px'
	resultado.textContent = 'Seu IMC é ' + imc.toFixed(1) +'. Portanto você está ' + situacao
}

calcButton.addEventListener('click', imc)


