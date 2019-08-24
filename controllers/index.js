const nItem = require('../models').nItem

const index = (req, res) => {
  nItem.findAll()
    .then(nitem => {
      res.render('index', {nitem: nitem});
  });
}

const details = (req, res) => {
  nItem.findOne({where: { id: parseInt(req.params.id) }})
    .then(nitem => {
      res.render('detail', { nitem: nitem })
    })
    .catch(err => console.error(err))
}

const add = (req, res) => {
  res.render('add')
}

const save = (req, res) => {
  nItem.create(req.body)
    .then((nitem) => {
      // res.redirect(`/detail/${nitem.id}`)
      res.redirect(`/`)
    })
    .catch(err => console.error(err))
}

// const edit = (req, res) => {
//   nItem.findOne({ where: { id: parseInt(req.params.id) } })
//     .then((nitem) => {
//       res.render('edit', { nitem: nitem })
//     })
//     .catch(err => console.error(err))
// }

// const update = (req, res) => {
//   // Update data here
//   console.log(req.body)
//   nItem.update({
//     image: req.body.image,
//     description: req.body.description
//   }, {
//     where: {
//       id: req.body.id
//     }
//   })
//     .then(() => {
//       res.redirect('/')
//     })
//     .catch(err => console.error(err))
// }

// const remove = (req, res) => {
//   nItem.findOne({where: {
//     id: parseInt(req.params.id)
//   }})
//     .then(nitem => {
//       nitem.destroy()
//       res.redirect('/')
//     })
//     .catch(err => console.error(err))
// }

module.exports = {
  index: index,
  details: details,
  add: add,
  save: save,
//   edit: edit,
//   update: update,
//   remove: remove
}
