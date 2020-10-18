const mongoose = require('mongoose')
const Schema=mongoose.Schema
//define data structure
const listSchema=new Schema(
  {id:Number,require:true},
  {name:String,require:true},
  {name_en:String,require:true},
  {category:String,require:true},
  {image:String,require:true},
  {location:String,require:true},
  {phone:String,require:true},
  {google_map:String,require:true},
  {rating:Number,require:true},
  {description:String,require:true},
)

module.exports=mongoose.model('list',listSchema)
