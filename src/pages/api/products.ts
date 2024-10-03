// Outputs: /builtwith.json

import products from "../../../data/products.json"

export function GET(
	
) {
	return new Response(
		JSON.stringify(products)
	)
}
