const mongoose=require('mongoose')

const CreateRecipe=mongoose.Schema({
    Name:{type:String,require:true},
    Description:{type:String,require:true},
    Ingredients:{type:String,require:true},
    Instructions:{type:String,require:true},
    ImageURL:{type:String,require:true},
    CookingTime:{type:Number,require:true},
})