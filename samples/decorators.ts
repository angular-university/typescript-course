



class Database {

     name = 'CTCDB';

    saveData(data:any) {
        console.log('saving data in the database ' + this.name);
    }

}

const db = new Database();
db.saveData({message: 'Hello World !!'});