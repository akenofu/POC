exploit = '{"root": {  "email": "Karim", "password": "pass"}}';
user = '{"email": "Karim", "password": "pass"}';



exploit_parsed = JSON.parse(exploit)
user_parsed = JSON.parse(user);

console.log(exploit_parsed);
console.log(user_parsed)


if (user_parsed.email == 'admin' && user_parsed.password == 'password') {
    console.log('logged in')
}


function validate(data) {
    if (!data.includes('email')) {
        console.log("missing input")
        return;
    }
    parsed = JSON.parse(data);

    valid_username = 'admin'
    valid_password = 'P@ssw0rd'
    if (parsed.email && parsed.password) {
        if (data.email != valid_username && data.password != valid_password) {
            console.log('Error')
            return
        }
    }
    console.log('Code continued successfully')

}

validate(exploit)