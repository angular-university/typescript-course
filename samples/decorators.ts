
enum LoggingLevel {
    INFO,
    WARN,
    DEBUG,
    TRACE
}

const loggingLevel = LoggingLevel.DEBUG;

function LogArguments(level: LoggingLevel) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        if (level >= loggingLevel) {
            console.log(`>>> ${target.arguments}`);
        }
        return target;
    }
}


class Database {

    @LogArguments(LoggingLevel.DEBUG)
    saveData(data:any) {
        console.log('save data in the database ...');
    }

}

const db = new Database();
db.saveData({message: 'Hello World !!'});