export default (router) => {
	router.get('/test', (req, res)=> res.send({success:'server'}))
	return router
}