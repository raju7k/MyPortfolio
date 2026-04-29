// contact.js



document.getElementById("contactForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const data = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try{

        const response = await fetch("http://localhost:8080/send-email",{

            method: "POST",

            headers:{
                "Content-Type":"application/json"
            },

            body: JSON.stringify(data)

        });

        const result = await response.text();

        alert(result);

        document.getElementById("contactForm").reset();

    }catch(error){

        alert("Error sending message");

        console.log(error);

    }

});