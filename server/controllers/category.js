import Category from "../models/category.js";
import slugify from "slugify";
export const createCategory = async (req, res) => {
  const categoryObject = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };
  const cat = new Category(categoryObject);
  await cat.save((error, category) => {
    if (error) return res.status(400).json({ error });
    if (category) return res.status(201).json({ category });
  });
};
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json( categories );
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getCategory = async (req, res) => {
  const {id} = req.params;
  try {
    const category = await Category.findOne({id});
    if (!category) {
      res.status(404).json({ message: "category doesn't exist" });
    }
    res.status(200).json({ category });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateCategory = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const { id } = req.params;
  try {
    const category = await Category.findByIdAndUpdate(id, req.body).then((data) =>{
        if(!data){res.status(404).send({
            message: `Cannot find category `
          });
        }else{
          
            res.status(200).json({ category });
        }
    } )

    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByIdAndDelete(id).then((data) =>{
        if(!data){res.status(404).send({
            message: `Cannot find category `
          });
        }else{
            res.status(200).json({ message: "deleted succesfully" });
        }
    } )

   
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
