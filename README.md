# npm-workspaces-babel

> More to come soon
## Remember:
- Remove all `package-lock.json` files from inner directories

## Usage:
- To use `server-main` to wrap `server-1`, while developing `server-1`
	- inside `/server1` run `npm run build -- --watch`
	- inside `/server-main` run `npm start` (normal nodemon watch)