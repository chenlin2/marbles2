/**
 * http://usejsdoc.org/
 */
var express = require('express');
var router = express.Router();

module.exports = function(part1){
	
	router.route('/marbles')
		.get(function(req, res) {
			part1.getAllMarbles(function(err, result) {
				res.send(result);
			});
		})
		
		.post(function(req, res) {
			var formData = {
				name: req.body.name,
				color: req.body.color,
				size: req.body.size,
				user: req.body.user
			};
			part1.createMarble(formData, function(err, result) {
				res.send(result);
			});
		});
	
	router.post('/marbles/transfer', function(req, res) {
		var formData = {
				name: req.body.name,
				user: req.body.user
		};
		
		part1.transferMarble(formData, function(err, result){
			res.send(result);
		});
	});
	
	
	return router;
};