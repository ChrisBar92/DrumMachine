const drumImageBtn = document.getElementsByClassName('drum__image-btn')
const drumInstruction = document.querySelector('.drum__instruction')
const drumImage = document.querySelector('.drum__image')

const soundsObj = [
	{
		name: 'Crash',
		keyTrigger: 'q',
		keyCode: 81,
		url: './sounds/crash.wav',
	},
	{
		name: 'Ride',
		keyTrigger: 'w',
		keyCode: 87,
		url: './sounds/ride.wav',
	},
	{
		name: 'HiHat-Closed',
		keyTrigger: 'e',
		keyCode: 69,
		url: './sounds/hh-close.wav',
	},
	{
		name: 'HiHat-Opened',
		keyTrigger: 'r',
		keyCode: 82,
		url: './sounds/hh-open.wav',
	},
	{
		name: 'Mid-Tom',
		keyTrigger: 't',
		keyCode: 84,
		url: './sounds/mid-tom.mp3',
	},
	{
		name: 'High-Tom',
		keyTrigger: 'a',
		keyCode: 65,
		url: './sounds/high-tom.mp3',
	},
	{
		name: 'Floor-Tom',
		keyTrigger: 's',
		keyCode: 83,
		url: './sounds/floor-tom.wav',
	},
	{
		name: 'Snare',
		keyTrigger: 'd',
		keyCode: 68,
		url: './sounds/snare.wav',
	},
	{
		name: 'Kick',
		keyTrigger: 'f',
		keyCode: 70,
		url: './sounds/kick.wav',
	},
]

const createInstruction = () => {
	for (let i = 0; i < soundsObj.length; i++) {
		const p = document.createElement('p')
		p.classList.add('drum__item')
		p.textContent = soundsObj[i].name
		const button = document.createElement('button')
		button.classList.add('btn')
		button.textContent = soundsObj[i].keyTrigger.toUpperCase()
		p.appendChild(button)
		drumInstruction.appendChild(p)
	}
}
createInstruction()

const createButtons = () => {
	for (let i = 0; i < soundsObj.length; i++) {
		const button = document.createElement('button')
		button.classList.add('drum__image-btn', 'btn', soundsObj[i].name.toLowerCase())
		button.textContent = soundsObj[i].keyTrigger.toUpperCase()
		const audio = document.createElement('audio')
		audio.setAttribute('src', soundsObj[i].url)
		button.appendChild(audio)
		drumImage.appendChild(button)
	}
}
createButtons()

let newDrumImageBtn = Array.from(drumImageBtn)

function playSound(e) {
	e.target.lastChild.currentTime = 0 // continue playing from the beginning
	e.target.lastChild.play()

	e.target.classList.add('activeButton')
	setTimeout(() => {
		e.target.classList.remove('activeButton')
	}, 80)
}

const pressLetter = e => {
	let letter = e.key

	soundsObj.filter(function (el) {
		if (el.keyTrigger === letter) {
			let audio = document.createElement('audio')
			audio.setAttribute('src', el.url)
			audio.currentTime = 0
			audio.play()

			newDrumImageBtn.filter(button => {
				if (button.textContent.toLowerCase() === el.keyTrigger) {
					button.classList.add('activeButton')
					setTimeout(() => {
						button.classList.remove('activeButton')
					}, 80)
				} else {
					return
				}
			})
		}
	})
}

// event listeners
newDrumImageBtn.forEach(button => {
	button.addEventListener('click', playSound)
})

window.addEventListener('keyup', pressLetter)
