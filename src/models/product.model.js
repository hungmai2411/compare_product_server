const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  productId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  prices: {
    type: Array,
    /*
        [
            {
                'date':ISODate
                'price':decimal

            }
        ]
         */
  },
});

module.exports = mongoose.model("products", ProductSchema);
