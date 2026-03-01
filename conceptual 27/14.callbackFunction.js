const greet = (name, message, callback) => {
    console.log(`Hi, ${name}`);
    callback(message);
};
const sayGreeting = (message) => {
    console.log(message)
}
greet("Utsho", "Good Night", sayGreeting);