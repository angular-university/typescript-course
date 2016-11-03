
enum LoggingLevel {
    INFO,
    WARN,
    DEBUG,
    TRACE
}

const loggingLevel = LoggingLevel.INFO;


function LogMethod(level: LoggingLevel):Function {
    return (target: any, propertyKey: string,
            descriptor: PropertyDescriptor) => {

        const originalFunction:Function = descriptor.value;

        descriptor.value = function(...args:any[]) {
            if (level <= loggingLevel) {
                console.log(">> " + propertyKey + " " +  JSON.stringify(args));
            }
            originalFunction.apply(this,args);
        };


    }

}

class Database {

    name = 'CTCDB';

    @LogMethod(LoggingLevel.DEBUG)
    saveData(data:any) {
        console.log(`saving data in the database ${this.name} ${JSON.stringify(data)}`);
    }

}

const db = new Database();

//db.saveData({message: 'Hello World !!'});







function registerOrmModel(model: Function) {
    //console.log("registering ORM models ",  model);
}


function Entity(tableName:string) {
    return (target:Function) => {
        registerOrmModel(target);
    }
}

function Column(columnName:string) {
    return (target:any, propertyKey:string) => {
        console.log(propertyKey);
    }
}


@Entity("TODOS")
class Todo {

    @Column("DESCR")
    description:string;
    done = false;
}




































