

let form = document.querySelector("form");
let fullName = document.getElementById("name");
let email = document.getElementById("email");
let tmessage = document.getElementById("message");



function sendEmail(){
    let bodyMessage =`Name : ${fullName.value} <br> Eamil : ${email.value} <br> Message : ${message.value} `;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "210200107018@gecrajkot.ac.in",
        Password : "8FC9E7BDB76AF9C9077E806DEA9DDB82E1FC",
        To : "210200107018@gecrajkot.ac.in",
        From : "210200107018@gecrajkot.ac.in",
        Subject : "Detail",
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    sendEmail();
    form.reset();
})
