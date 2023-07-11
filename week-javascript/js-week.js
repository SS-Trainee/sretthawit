const showmodal = document.getElementById("form-data");
const showbutton = document.getElementById("form-btn");
const Btncancel = showmodal.querySelector("#cancel-btn");
const inputrequired = showmodal.querySelectorAll("input[required]");


    Btncancel.addEventListener("click", () => {
        inputrequired.forEach((input) => {
            input.removeAttribute("required");
            showmodal.close();
            document.getElementById("form").reset();
        });
    });

    showbutton.addEventListener("click", () => {
        showmodal.showModal();
    });

    