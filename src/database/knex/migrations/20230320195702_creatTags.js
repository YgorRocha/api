
exports.up = knex => knex.schema.createTable("tags", table =>{
    table.increments("id");
    //Aqui estou dizendo que não aceito nulo
    table.text("name").notNullable();
    table.integer("note").references("id").inTable("notes").onDelete("CASCADE");
    table.integer("user_id").references("id").inTable("users");


    

})  

exports.down = knex => knex.schema.dropTable("tags") 
