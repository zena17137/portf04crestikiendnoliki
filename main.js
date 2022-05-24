let arrData = document.querySelectorAll('[data-num]');

let arr = [null, null, null, null, null, null, null, null, null];

let stop = false;

function concat(a, b, c) {
	let result = arr[a] + arr[b] + arr[c];

	if (result === 'xxx' || result === 'ooo') {
		return result;
	}

	switch (result) {
		case 'xxnull':
			return ['x', c];
		case 'xnullx':
			return ['x', b];
		case 'nullxx':
			return ['x', a];

		case 'oonull':
			return ['o', c];
		case 'onullo':
			return ['o', b];
		case 'nulloo':
			return ['o', a];
	}
}

function checkWin() {
	for (let i = 0; i < 3; i++) {
		let result = concat(i, i + 3, i + 6);

		if (result === 'xxx' || result === 'xxx') {
			changeColorAndStop(i, i + 3, i + 6);
		}
	}

	for (let i = 0; i < 9; i += 3) {
		let result = concat(i, i + 1, i + 2);

		if (result === 'xxx' || result === 'xxx') {
			changeColorAndStop(i, i + 1, i + 2);
		}
	}

	let result = concat(0, 4, 8);
	if (result === 'xxx' || result === 'xxx') {
		changeColorAndStop(0, 4, 8);
	}

	result = concat(2, 4, 6);
	if (result === 'xxx' || result === 'xxx') {
		changeColorAndStop(2, 4, 6);
	}
}

function botZero() {
	for (let i = 0; i < 3; i++) {
		let result = concat(i, i + 3, i + 6);

		if (typeof result === 'object' && result[0] === 'o') {
			arrData[result[1]].innerHTML = 'o';
			arr[result[1]] = 'o';
			return;
		}
	}

	for (let i = 0; i < 9; i += 3) {
		let result = concat(i, i + 1, i + 2);

		if (typeof result === 'object' && result[0] === 'o') {
			arrData[result[1]].innerHTML = 'o';
			arr[result[1]] = 'o';
			return;
		}
	}

	let result = concat(0, 4, 8);
	if (typeof result === 'object' && result[0] === 'o') {
		arrData[result[1]].innerHTML = 'o';
		arr[result[1]] = 'o';
		return;
	}

	result = concat(2, 4, 6);
	if (typeof result === 'object' && result[0] === 'o') {
		arrData[result[1]].innerHTML = 'o';
		arr[result[1]] = 'o';
		return;
	}

	// % ==============================================

	for (let i = 0; i < 3; i++) {
		let result = concat(i, i + 3, i + 6);

		if (typeof result === 'object' && result[0] === 'x') {
			arrData[result[1]].innerHTML = 'o';
			arr[result[1]] = 'o';
			return;
		}
	}

	for (let i = 0; i < 9; i += 3) {
		let result = concat(i, i + 1, i + 2);

		if (typeof result === 'object' && result[0] === 'x') {
			arrData[result[1]].innerHTML = 'o';
			arr[result[1]] = 'o';
			return;
		}
	}

	result = concat(0, 4, 8);
	if (typeof result === 'object' && result[0] === 'x') {
		arrData[result[1]].innerHTML = 'o';
		arr[result[1]] = 'o';
		return;
	}

	result = concat(2, 4, 6);
	if (typeof result === 'object' && result[0] === 'x') {
		arrData[result[1]].innerHTML = 'o';
		arr[result[1]] = 'o';
		return;
	}

	let tempArr = [];
	for (let i = 0; i < 9; i++) {
		if (arr[i] === null) {
			tempArr.push(i);
		}
	}

	let randIndexTempArr = Math.floor(Math.random() * tempArr.length);

	let randIndex = tempArr[randIndexTempArr];

	arrData[randIndex].innerHTML = 'o';
	arr[randNull];
}

function changeColorAndStop(a, b, c) {
	arrData[a].style.color = 'red';
	arrData[b].style.color = 'red';
	arrData[c].style.color = 'red';

	stop = false;
}

document.addEventListener('click', function (e) {
	if (stop === true) {
		return;
	}

	if (e.target.className === 'cell' && e.target.textContent === '') {
		e.target.style.color = 'blue';
		arrData[e.target.dataset.num].innerHTML = 'x';
		arr[e.target.dataset.num] = 'x';
	} else {
		return;
	}

	checkWin();

	if ((stop = false)) {
		return;
	}

	botZero();

	checkWin();
});
