import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductController {

    constructor(private readonly productService:ProductService){}

    @Get()
    getProducts(): Promise <Product[]>{
        return this.productService.getProducts();
    }

    @Get(':id')
    getProductById(@Param('id') id ): Promise <Product>{
        return this.productService.getProductById(id);
    }

    @Post()
    createProduct(@Body() createProductDto : CreateProductDto): Promise<Product>{
        return this.productService.createProduct(createProductDto);
    }

    @Put(':id')
    updateProduct(@Body() updateProductDto : CreateProductDto, @Param('id') id): Promise<Product>{
        return this.productService.updateProduct(id,updateProductDto);
    }

    @Delete(':id')
    deleteProduct(@Param('id') id): Promise<Product>{
        return this.productService.deleteProduct(id);
    }
}
