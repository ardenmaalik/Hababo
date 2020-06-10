const express = require("express");
const PORT = process.env.PORt || 5000;

express()
	.use(express.static("public"))
	// .get("/", (req, res) => res.render('pages/index')
	.listen(PORT, () => console.log(`Listening on ${PORT} ...`));
