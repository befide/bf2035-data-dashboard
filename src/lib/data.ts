// NOTE: This is where you could wire up your own data providers:
// GraphQL, Databases, REST APIs, CDNs, proxies, S3, Matrix, IPFS, you name it…

import { API_URL, REMOTE_ASSETS_BASE_URL } from '../app/constants.js';
import { getUsers, getProducts } from '../services/index.js';
import type { Endpoint, EndpointsToOperations } from '../types/entities.js';






export async function fetchData<Selected extends Endpoint>(endpoint: Selected) {

	console.info(`Fetching data ${endpoint}…`);

	if (endpoint === "products") {return getProducts()
		
	}
	return getUsers()

}

// NOTE: These helpers are useful for unifying paths, app-wide
export function url(path = '') {
	return `${import.meta.env.SITE}${import.meta.env.BASE_URL}${path}`;
}

// TODO: Remove old local assets from git history (to make cloning snappier).
export function asset(path: string) {
	// NOTE: Fetching remote assets from the Hugo admin dashboard Vercel dist.
	return `${REMOTE_ASSETS_BASE_URL}/${path}`;
}
