// Full Documentation - https://docs.turbo360.co
const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID })
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const router = vertex.router()
const Profile = require('../models/Profile');

/*  This is a sample API route. */
router.get('/profile', (req, res) => {

	let filter = req.query

	if (req.query.age != null) {
		filter = {
			age: { $gt: req.query.age }
		}
	}

	Profile.find(filter)
		.then(profiles => {
			res.json({
				confirmation: 'success',
				data: profiles
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: err.message
			})
		});
})


router.get('/profile/:id', (req, res) => {

	const id = req.params.id;

	Profile.findById(id)
		.then(data => {


			res.json({
				confirmation: 'success',
				query: id,
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				message: `Profile ${id} not found`
			})
		})
});


router.get('/profile/remove/:id', (req, res) => {

	const id = req.params.id;
	Profile.findByIdAndRemove(id)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				mesaage: err.mesaage
			})
		})
});

router.post('/profile', (req, res) => {


	Profile.create(req.body)
		.then(data => {
			res.json({
				confirmation: 'success',
				data: data
			})
		})
		.catch(err => {
			res.json({
				confirmation: 'fail',
				mesaage: err.mesaage
			})
		})
});






module.exports = router
