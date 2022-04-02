const input = document.querySelector('#input')
const output = document.querySelector('#output')
const convert = document.querySelector('#convert')
const copy = document.querySelector('#copy')

const checkboxWrapper = document.querySelector('.open')

const check = document.querySelector('#checkbox')

if(check.checked)
{
	checkboxWrapper.style.display = 'flex'
}

check.addEventListener('change', () =>{
	if(check.checked)
	{
		checkboxWrapper.style.display = 'flex'
	}
	else{
		checkboxWrapper.style.display = 'none'
	}
})

