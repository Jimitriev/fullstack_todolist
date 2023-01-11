import { Sequelize } from 'sequelize'
//  db:define merndb: basename root:username '':pass 

const db = new Sequelize ('mern_db', 'root', '' ,{
    host: 'localhost',
    dialect: 'mysql'
});
export default db ;