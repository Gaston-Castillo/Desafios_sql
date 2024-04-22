const db = require("../database/models");
const movie = require("../database/models/actor");
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
add:  (req, res) => {
db.Actor.findAll()
.then(actor=>{
    res.render('actorsAdd',{actor});
  
})
.catch((err) => {
  res.send(err.message)
}) 
},
create: (req, res) => {
 db.Actor.create({
  first_name: req.body.first_name,
  last_name: req.body.last_name,
  rating: req.body.rating,
})

.then(actor=>{
  res.rediret('/actors/add',{actor});
  
})
.catch((err) => {
  res.send(err.message)
}) 
console.log("esto traer req body name----.-----",req.body)
}


}
