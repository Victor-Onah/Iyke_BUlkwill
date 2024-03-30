const fs = require("fs/promises");
const path = require("path");

const generateFile = async () => {
	const filepath = path.resolve(__dirname, "./lib/shuffledProducts.json");

	const file = await fs.readFile(filepath, "utf-8");
	const paths = [];

	for (let product of JSON.parse(file)) {
		paths.push({ params: { id: product.product_id, product } });
	}

	await fs.writeFile(
		path.resolve(__dirname, "./lib/paths.json"),
		JSON.stringify(paths),
		"utf-8"
	);
};

generateFile();
