import { Body, Controller, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductDocument } from "./product.schema";

@Controller('product')
export class ProductController {
  constructor(private productService:ProductService){}

  @Post()
  createProduct(
    @Body('name') name:string,
    @Body('price') price:number,
    @Body('description') description: string
  ): Promise<ProductDocument>{
    return this.productService.create(name,price,description)
  }
}