import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';


@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel:Model<Product>){}

    async getProducts(): Promise <Product[]>{
        return await this.productModel.find();
    }
    
    async getProductById(id: string) : Promise <Product>{
        return await this.productModel.findOne({_id :id})
    }

    async createProduct(product: CreateProductDto) : Promise<Product>{
        const newProduct = new this.productModel(product);
        return await newProduct.save();
    }

    async updateProduct(id:string ,product: CreateProductDto) : Promise<Product>{
        return await this.productModel.findByIdAndUpdate(id, product, {new:true});
    }

    async deleteProduct(id:string) : Promise<Product>{
        return await this.productModel.findByIdAndRemove(id);
    }
 
}
