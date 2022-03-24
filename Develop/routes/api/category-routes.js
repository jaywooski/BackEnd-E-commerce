const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    // be sure to include its associated Products
    include: [{
      model: Product,
      // where: {
      //   id: category_id
      // }
    }] 
  })
  .then(foundCategories => res.json(foundCategories))
  .catch((err) => {
    console.log(err);
    res.json(err);
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    }, 
    // be sure to include its associated Products
    include: [{
      model: Product,
      where: {
        id: category_id
      }
    }]
  })
  .then(foundCategories => res.json(foundCategories))
  .catch(err => console.log(err));
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(madeCategories => res.json(madeCategories))
  .catch(err => console.log(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(categoryInfo => res.json(categoryInfo))
  .catch((err) => {
    console.log(err);
    res.json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(
    {
      where: {
        id: req.params.id
      }
    }
  )
  .then(categoryInfo => res.json(categoryInfo))
  .catch((err) => {
    console.log(err);
    res.json(err);
  })
});

module.exports = router;
