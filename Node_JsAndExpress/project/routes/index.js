// Full Documentation - https://docs.turbo360.co
const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID })
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const router = vertex.router()

/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res) => {
	res.render('index', { text: 'This is the dynamic data. Open index.js from the routes directory to see.' })
})


const profiles = {
	dkwon: {
		name: 'Huuo',
		company: 'Rimac Seguros',
		image:'/images/turbo.png',
		languages: [
			'javascript', 'java', 'C#'
		]
	},
	sjobs: {
		name: 'Steve Jobs',
		company: 'apple',
		languages: [
			'objective-c', 'java', 'C#'
		]
	},
	bgates: {
		name: 'Bill Gates',
		company: 'microsoft',
		languages: [
			'V.B', 'c', 'C#'
		]
	}
}


router.post('/post', (req, res) => {

	const body = req.body;

	res.json({
		conformation: 'success',
		data: body
	})

})

router.get('/query', (req, res) => {

	const name = req.query.name;
	const ocupation = req.query.ocupation;
	//http://127.0.0.1:3000/query?name=dan&ocupation=doctor
	const data = {
		name: name,
		ocupation: ocupation
	}
	res.render('perfil', data)
})




router.get('/:profil/:username', (req, res) => {

	const profile = req.params.profil
	const username = req.params.username
	const currentProfile = profiles[username]

	if (currentProfile == null) {
		res.json({
			conformation: 'fail',
			message: 'profile' + username + ' not found'
		});
		return;
	}

	res.render('perfil',currentProfile)

/* 	res.json({
		conformation: 'success',
		perfil: currentProfile
	}) */
})

/*  This route render json data */
router.get('/json', (req, res) => {
	res.json({
		confirmation: 'success',
		app: process.env.TURBO_APP_ID,
		data: 'this is a sample json route.'
	})
})

/*  This route sends text back as plain text. */
router.get('/send', (req, res) => {
	res.send('This is the Send Route')
})

/*  This route redirects requests to Turbo360. */
router.get('/redirect', (req, res) => {
	res.redirect('https://www.turbo360.co/landing')
})


module.exports = router
