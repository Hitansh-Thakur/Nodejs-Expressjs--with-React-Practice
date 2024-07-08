const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

// Database

let con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "nodeexpressdb",
});

// perform all db operations inside con.connect
con.connect((err) => {
	if (!err) {
		console.log("Connected to db");
	} else {
		console.error("\n\nERROR : Failed to connect to db!!!\n\n");
		throw err.name;
	}
});

// TODO: .env not working
const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());

app.listen(PORT, () => {
	console.log("Listening on Port ", PORT);
});

app.use(express.static("dist"));


// app.get("/api/products", (req, res) => {
// 	res.send([
// 		{
// 			Name: "Laptop",
// 			price: 40000,
// 		},
// 		{
// 			Name: "T.V",
// 			price: 50000,
// 		},
// 		{
// 			Name: "A.C",
// 			price: 30000,
// 		},
// 	]);
// });

app.get("/api/products",(req,res)=>{
	let sql = "SELECT * FROM products"

	con.query(sql,(err,result)=>{
		if (err) throw err
		res.send(result)
	})
})


app.use(express.json())
app.post("/api/insert", (req, res) => {
	// let product = {
	// 	p_name: "Samsung",
	// 	p_price: 40000,
	// 	p_desc: "Samsung mobile 6gb",
	// };
	let product = req.body
	console.log(req.body);

	// USE EXPRESS.JSON() MIDDLEWARE FOR PASSING JSON WITH POST REQ

	let sql = `INSERT INTO products SET ?`; // Alvays use SET instead of VALUES b'cos p_id is autoincrement so VALUES will show error
	con.query(sql, product, (err, result) => {
		if (err) throw err;
		console.log(result);
		res.send(result);
	});
});

