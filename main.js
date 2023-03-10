const drumImageBtn = document.querySelectorAll('.drum__image-btn')
const drumInstruction = document.querySelector('.drum__instruction')
const drumImage = document.getElementsByClassName('.drum__image')
let audio

const soundsObj = [
	{
		name: 'Crash',
		keyTrigger: 'q',
		keyCode: 81,
		url: './sounds/crash.wav',
		classNames: 'drum__image-btn btn crash',
	},
	{
		name: 'Ride',
		keyTrigger: 'w',
		keyCode: 87,
		url: './sounds/ride.wav',
		classNames: 'drum__image-btn btn ride',
	},
	{
		name: 'Hi Hat Closed',
		keyTrigger: 'e',
		keyCode: 69,
		url: './sounds/hh-close.wav',
		classNames: 'drum__image-btn btn hh-close',
	},
	{
		name: 'Hi Hat Open',
		keyTrigger: 'r',
		keyCode: 82,
		url: './sounds/hh-open.wav',
		classNames: 'drum__image-btn btn hh-open',
	},
	{
		name: 'Mid Tom',
		keyTrigger: 't',
		keyCode: 84,
		url: './sounds/mid-tom.mp3',
		classNames: 'drum__image-btn btn mid-tom',
	},
	{
		name: 'High Tom',
		keyTrigger: 'a',
		keyCode: 65,
		url: './sounds/high-tom.mp3',
		classNames: 'drum__image-btn btn high-tom',
	},
	{
		name: 'Floor Tom',
		keyTrigger: 's',
		keyCode: 83,
		url: './sounds/floor-tom.wav',
		classNames: 'drum__image-btn btn floor-tom',
	},
	{
		name: 'Snare',
		keyTrigger: 'd',
		keyCode: 68,
		url: './sounds/snare.wav',
		classNames: 'drum__image-btn btn snare',
	},
	{
		name: 'Kick',
		keyTrigger: 'f',
		keyCode: 70,
		url: './sounds/kick.wav',
		classNames: 'drum__image-btn btn kick',
	},
]

// const drumSound = e => {

// 	console.log(e.target)
// 	const audio = document.createElement('audio')
// 	audio.setAttribute('src', './sounds/snare.wav')
// 	drumImageBtn.forEach(item => {
// 		item.appendChild(audio)
// 	})
// 	audio.play()
// }

// console.log(soundsObj.forEach(item => console.log(item)))

const showInstruction = () => {
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
showInstruction()

const addAudio = e => {
    for (let i = 0; i < soundsObj.length; i++){

        let audio = document.createElement('audio')
        audio.setAttribute('src', soundsObj[i].url)
        e.target.appendChild(audio)
    }
	// let i = 0
	// i++
	// audio.play()
	console.log(e.target)
}

const playSound = () => {}

drumImageBtn.forEach(item => {
	item.addEventListener('click', addAudio)
})

function showLetter(event) {
	let keyt = event.key
	console.log(keyt)
	//     console.log(soundsObj[2].key)
	soundsObj.forEach(item => {
		if (item.keyTrigger === keyt) {
			console.log('oki')
		} else {
			console.log('nieoki')
		}
	})
}

window.addEventListener('keyup', showLetter)

// const [name, second] = soundsObj
// console.log(name)
// const okok = () => {
// 	soundsObj.forEach(item => {
// 		const { keyTrigger } = item
// 		newArr = [keyTrigger]
// 		console.log(newArr)
// 	})
// 	const otherArr = newArr.push('jkot')
// 	console.log(otherArr)
// }
// okok()
