import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ProductDocument } from "./product.schema";

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product')
  private readonly productModel:Model<ProductDocument>
  ){}

  async create(name:string,price:number,description:string):Promise<ProductDocument>{
    const newProduct = new this.productModel({name,price,description})
    return newProduct.save()
  }
}