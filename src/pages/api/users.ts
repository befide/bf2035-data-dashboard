// Outputs: /builtwith.json

import users from "../../../data/users.json"

export function GET(
	
) {
	return new Response(
		JSON.stringify(users)
	)
}
