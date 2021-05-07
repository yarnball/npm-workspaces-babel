export default (router) => {
	router.get('/test', (req, res)=> res.send({success:true}))
	return router
}