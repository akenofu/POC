exploit = '{"root": {  "email": "Karim", "password": "pass"}}';
exploit2 = '{  "val": [{  "email": "Karim", "password": "pass"} ] }';
user = '{"email": "Karim", "password": "pass"}';

function validate(data) {
    if (!data.includes('email')) {
        console.log("missing input")
        return;
    }
    parsed = JSON.parse(data);
    // data.email != data.root.email
    console.log(parsed);

    valid_username = 'admin'
    valid_password = 'P@ssw0rd'
    if (parsed.email && parsed.password) {
        if (data.email != valid_username && data.password != valid_password) {
            console.log('Error')
            return
        }
        // Log in Logic should be here
    }
    console.log('Code continued successfully')

}

console.log('Testing proper input')
validate(user)
console.log('-------------')
console.log('Testing malicious input')
validate(exploit2)