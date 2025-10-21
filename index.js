(async () => {
    const db = require("./db");
    console.log('Começou!');
    
    console.log('INSERT INTO CLIENTES');
    const result = await db.insertCustomer({nome: "Zé", idade: 18, uf: "SP"});
    console.log(result);
 
    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);

    console.log('UPDATE CLIENTES');
    const result2 = await db.updateCustomer(6, {nome: "Zé José", idade: 19, uf: "SP"});
    console.log(result2);

    console.log('DELETE FROM CLIENTES');
    const result3 = await db.deleteCustomer(7);
    console.log(result3);
 
})();

(async () => {
    const db = require("./db");
    console.log('iNSERIR PACIENTES!');
    
    console.log('INSERT INTO PACIENTES');
    const result = await db.insertCustomer({nome: "Zé", idade: 18, uf: "SP"});
    console.log(result);
 
    console.log('SELECT * FROM PACIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);

    console.log('UPDATE PACIENTES');
    const result2 = await db.updateCustomer(6, {nome: "Zé José", idade: 19, uf: "SP"});
    console.log(result2);

    console.log('DELETE FROM PACIENTES');
    const result3 = await db.deleteCustomer(7);
    console.log(result3);
 
})();

(async () => {
    const db = require("./db");
    console.log('iNSERIR ALIMENTO!');
    
    console.log('INSERT INTO ALIMENTO');
    const result = await db.insertFood ({nome: "arroz", quantidade: 18,9g});
    console.log(result);
 
    console.log('SELECT * FROM ALIMENTO');
    const clientes = await db.selectFood();
    console.log(clientes);

    console.log('UPDATE ALIMENTO');
    const result2 = await db.updateFood();6, {nome: "arroz", quantidade: 19.6g });
    console.log(result2);

    console.log('DELETE FROM ALIMENTO');
    const result3 = await db.deleteFood(7);
    console.log(result3);
 
})();
