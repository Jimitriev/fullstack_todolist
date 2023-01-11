
import { DOUBLE, STRING } from "sequelize";
import db from "../config/database.js";
 
 
export default db.define('myproducts',{
    title:{
        type: STRING
    },
    price:{
        type: DOUBLE
    },
    createdAt: {
        type: Date,
        default: new Date(),
      },
      updatedAt: {
        type: Date,
        default: new Date(),
      },
},{
    freezeTableName: true
});
 
// export default Product;