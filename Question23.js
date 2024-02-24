const { connectToProductDB } = require('./utils/connectToMongoDB');
const { productWithCategory } = require("./models/product.model")
const { Category } = require('./models/category.model');
async function getProductsPopulatedWithCategory() {
    try {
        const isConnectedToDatabase = await connectToProductDB();

        if (isConnectedToDatabase) {
            const populatedResponse = await productWithCategory.find().populate("category").select("name quantity category -_id");
            console.log(populatedResponse);
        } else {
            console.log("Could not find Product With Category from Database because of some error!");
        }
    } catch (error) {
        console.log(error.message);
    }
}

getProductsPopulatedWithCategory();

async function createCategory(category) {
    // Your implementation here
    try {
        const isConnectedToDatabase = await connectToProductDB();

        if (isConnectedToDatabase) {
            const newCategory = new Category(category);
            await newCategory.save();
            console.log("Category Added to Database");
        } else {
            console.log("Could not add Category to Database because of some error!");
        }
    } catch (error) {
        console.log(error.message);
    }
}

const category = {
    name: "Test 3",
    type: "Three Type",
}
