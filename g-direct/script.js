const input = document.querySelector('#input')
const output = document.querySelector('#output')
const convert = document.querySelector('#convert')
const copy = document.querySelector('#copy')

// function shake(id) {

// 	if(id === 'convert')
// 	{
// 		topContent.classList.toggle('shake');
// 		setTimeout(function(){topContent.classList.toggle('shake');}, 300)
// 	}
// 	else if(id === 'copy')
// 	{
// 		botContent.classList.toggle('shake');
// 		setTimeout(function(){topContent.classList.toggle('shake');}, 300)
// 	}
// 	;
// }

	// if(check.checked)
	// 	checkboxWrapper.style.display = 'flex';

	// check.addEventListener('change', () =>{
	// 	if(check.checked)
	// 		checkboxWrapper.style.display = 'flex';
	// 	else
	// 		checkboxWrapper.style.display = 'none';
	// })

	convert.addEventListener('click', () => {
		if(!input.value) return;
		if(input.value.includes('file/d/', '/view?usp=sharing'))
		{
			const value = input.value.toString().replace('file/d/', 'uc?id=').replace('/view?usp=sharing', '&export=download&confirm=t')
			output.value = value;
			input.value = '';
		}
	})

	copy.addEventListener('click', () => {
		if(!output.value || output.value == 'copied')return;
					
			navigator.clipboard.writeText(output.value)
			output.value = 'copied';
	})
	
//'https://drive.google.com/file/d/12WNxyUkx4oAzgHH72H8zoglKCPwO0jYq/view?usp=sharing

const buttons = document.querySelectorAll('button')

buttons.forEach((button)  => {
	button.addEventListener('click', () => {
			document.querySelector(`#${button.id}div`).classList.toggle('shake')
			setTimeout(function(){
				document.querySelector(`#${button.id}div`).classList.toggle('shake')
			}, 300)
	})
})