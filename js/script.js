function sendmail() {

    var name = $('#Name').val();
    var email = $('#Email').val();
    // var subject = $('#Subject').val();
    var message = $('#Message').val();

    // var body = $('#body').val();

    var Body = 'Name: ' + name + '<br>Email: ' + email + '<br>Message: ' + message;
    console.log(name, email, message);

    Email.send({
        Host: "smtp.gmail.com",
        Username: "gyanchandanimanan@gmail.com",
        Password: "manan2110",
        To: 'gyanchandanimanan@gmail.com',
        From: "gyanchandanimanan@gmail.com",
        Subject: "New message on contact from " + name,
        Body: Body
    }).then(
        message => {
            //console.log (message);
            if (message == 'OK') {
                alert('Your mail has been send. Thank you for connecting.');
            }
            else {
                console.error(message);
                alert('There is error at sending message. ')

            }

        }
    );



}