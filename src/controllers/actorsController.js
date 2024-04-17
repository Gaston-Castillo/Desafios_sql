const db = require("../database/models");
const {Op} = db.Sequelize
module.exports = {
  list:(req,res) => {
    
    db.Actor.findAll()
    .then((actors) => {

      res.render("actorList",{
        actors
      })

    })

  .catch((err) => {
    res.send(err.message)
  }) 
  
},
  detail: (req,res) => {
  const{id} = req.params
  db.Actor.findByPk(id)
  .then((actor) => { res.render("actorsDetail",{
    actor
  })
})
  .catch((err) => {
    res.send(err.message)
  }) 
},
// add: function (req, res) {
//   res.render('admin/actorsAdd');
// },
// create: function (req, res) {
//  Actor.create({
//   first_name: req.body.first_name,
//   last_name: req.body.last_name,
//   rating: req.body.rating,
 
// })

// res.redirect('/actors');
}



