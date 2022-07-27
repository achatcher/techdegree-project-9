//------- Get form input and autopopulate email ---------------//

var subject = document.getElementById("subject").value;
var body = document.getElementById("comment").value;

function createMail(subject, body) {
    var mailTo = `mailto:subject=${subject}&body=${body}`;
    document.getElementById('btn').addEventListener('click', function() {
        window.location.href = mailTo;
        document.getElementById("form").reset();
      });
}



