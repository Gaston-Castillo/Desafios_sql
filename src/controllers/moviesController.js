const { where } = require("sequelize");
const db = require("../database/models")
const {Op} = db.Sequelize
// const Movies = db.Movie;
module.exports = {
  list: (req,res) => {

    db.Movie.findAll()
    .then((movies) => {

      res.render("moviesList",{
        movies
      })

    })
    .catch((err) => {
      res.send(err.message)
    }) 
  },

  detail: (req,res) => {
    const {id} = req.params
    db.Movie.findByPk(id)
    .then((movie) => {
      res.render("moviesDetail", {
        movie
      })
    })
    .catch((err) => {
      res.send(err.message)
    }) 
  },

  new: (req,res) => {
    db.Movie.findAll({
      order: [
        ["release_date","desc"]
      ]
    })
    .then((movies) => {
      res.render("newestMovies", {
        movies
      })
    })
    .catch((err) => {
      res.send(err.message)
    }) 
  },

  recommended: (req,res) => {
    db.Movie.findAll({
      where: {
        [Op.and] : [
          {
            rating: {
              [Op.gte] : 8
            }
          },
          {
            awards: {
              [Op.gte] : 2
            }
          }
        ]
      },
      order:[
        ["release_date","desc"],
        ["rating","desc"],
        ["title","desc"]
      ]
    })
    .then((movies) => {
      res.render("recommendedMovies",{ movies })
    })
    .catch((err) => {
      res.send(err.message)
    }) 
  },
  

  
  //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
  add: (req, res) => {
    res.render('admin/moviesAdd');
},
create: (req, res)=> {
        db.Movie.create({
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        length: req.body.length
    })

    res.redirect('movies');
    
},
edit: (req, res) =>{
    db.Movie.findByPk(req.params.id)
    .then(Movie => {
        res.render('admin/moviesEdit', {Movie:Movie});
    })
},
update: (req,res)=> {
   db.Movie.update({
    title: req.body.title,
    rating: req.body.rating,
    awards: req.body.awards,
    release_date: req.body.release_date,
    length: req.body.length

  },
  {
  where:{
  id:req.params.id}
  }
)

res.redirect('/movies/edit/' + req.params.id);
},
delete:  (req, res)=> {
    db.Movie.destroy({
      where: {
        id: req.params.id
      }
    })
    res.redirect('/movies' );
},


}


