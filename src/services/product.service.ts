import { Product } from "../interfaces/product.interface";
import ProductModel from "../models/products.model";

const insertProduct = async ( product: Product ) => {
    const response =  await ProductModel.create( product );

    return response
}

const getAllProducts = async () => {
    return await ProductModel.find({});
}

const getProductbyId = async ( productId: string ) => {
    return await ProductModel.findOne({ _id: productId });
}

const removeProductByid = async ( productId: string ) => {
    return await ProductModel.findOneAndRemove ({ _id: productId })
}
const updateProductById = async ( productId: string, updateProduct: Product) => {
    return await ProductModel.findOneAndUpdate(
        { _id: productId},     //ide del documento que deseamos actualizar
        updateProduct,          // el docuemnto por el que vamos a actualizar
    { new: true }             // configuracion para el comando Update                       

    );
}

export {
    insertProduct,
    getAllProducts,
    getProductbyId,
    removeProductByid,
    updateProductById

}