# npm-workspaces-babel

> More to come soon

## Concept
- Submodules must be consumed in their transpiled form (ie CommonJS- no babel)
- Thus, we need to:
	- `-- --watch` a directory so that when a change happens > builds immediately
	- watch that `build` directory with `nodemon` so that it knows when a change happens too

## Remember:
- Remove all `package-lock.json` files from inner directories
- Do not 'npm install' in the actual package directories

## Sample usage:
- To use `server-main` to wrap `server-1`, while developing `server-1`
	- inside `/server1` run `npm run build -- --watch`
	- inside `/server-main` run `npm start` (normal nodemon watch)

- Configure `nodemon` to watch/ignore the corresponding files 