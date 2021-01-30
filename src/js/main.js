const data = {
    data1: {
        firstName: "",
        lastName: "",
        country: "",
        city: "",
        address: "",
        postal: "",
        countryShip: "",
        cityShip: "",
        addressShip: "",
        postalShip: ""
    },
    data2: {
        email: "",
        password: "",
        rPassword: ""
    },
    data3: {
        visa: "",
        fullName: "",
        cardCVC: "",
        cardDate: ""
    }
}





// buttons events
const form1BtnN = document.querySelector(".form1__btn-next");
const form2BtnN = document.querySelector(".form2__btn-next");
const form3BtnN = document.querySelector(".form3__btn-next");
const form2BtnP = document.querySelector(".form2__btn-prev");
const form3BtnP = document.querySelector(".form3__btn-prev");
const forms = document.querySelectorAll(".form__cont");

form1BtnN.addEventListener("click", (e) => {
    forms[0].style.display = "none";
    forms[1].style.display = "block";
    forms[2].style.display = "none";
})
form2BtnN.addEventListener("click", (e) => {
    forms[0].style.display = "none";
    forms[1].style.display = "none";
    forms[2].style.display = "block";
})
form3BtnN.addEventListener("click", (e) => {
    forms[0].style.display = "none";
    forms[1].style.display = "none";
    alert("data is in the console and registration was successful ☺");
    console.log(data)
})
form2BtnP.addEventListener("click", (e) => {
    forms[0].style.display = "block";
    forms[1].style.display = "none";
    forms[2].style.display = "none";
})
form3BtnP.addEventListener("click", (e) => {
    forms[0].style.display = "none";
    forms[1].style.display = "block";
    forms[2].style.display = "none";
})

const form = document.querySelectorAll(".form")
form.forEach((item) => {
    item.addEventListener("submit", (e) => {
        e.preventDefault()
    })
})








// inputs validation form 1 ------------------------------------------------------------------------------------------------------------

// name validation
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const JustToBeInps = document.querySelectorAll(".JustToBe");

function JustToBe(e, input) {
    if (!e.target.value) {
        input.classList.remove("input-good")
        input.classList.add("input-wrong")
    }
    else {
        input.classList.remove("input-wrong")
        input.classList.add("input-good")
    }
}
JustToBeInps.forEach((item) => {
    item.addEventListener("input", (e) => { JustToBe(e, item) })
})







// country validation
const formSelect = document.querySelectorAll(".form__select");

formSelect.forEach((item) => {
    item.addEventListener("change", () => {
        if (!item.value) {
            item.classList.remove("input-good")
            item.classList.add("input-wrong")
        }
        else {
            item.classList.remove("input-wrong")
            item.classList.add("input-good")
        }
    })
})








// Use filled data for shipping
const form1UseShip = document.querySelector(".form__cont1_check");
const formCitys = document.querySelectorAll(".form__city");
const formAddresses = document.querySelectorAll(".form__address");
const formPostals = document.querySelectorAll(".form__postal");
let form1UseShipBool = true;
const allInps = document.querySelector(".form__cont_1").querySelectorAll(".input");
let allInpsValid = false;

form1UseShip.addEventListener("click", () => {
    if (form1UseShipBool) {
        if (formSelect[0].value) {
            formSelect[1].value = formSelect[0].value;
            formSelect[1].classList.remove("input-wrong");
            formSelect[1].classList.add("input-good");
            data.data1[formSelect[1].name] = formSelect[0].value;
        }
        if (formCitys[0].value) {
            formCitys[1].value = formCitys[0].value;
            formCitys[1].classList.remove("input-wrong");
            formCitys[1].classList.add("input-good");
            data.data1[formCitys[1].name] = formCitys[0].value;
        }
        if (formAddresses[0].value) {
            formAddresses[1].value = formAddresses[0].value;
            formAddresses[1].classList.remove("input-wrong");
            formAddresses[1].classList.add("input-good");
            data.data1[formAddresses[1].name] = formAddresses[0].value;
        }
        if (formPostals[0].value) {
            formPostals[1].value = formPostals[0].value;
            formPostals[1].classList.remove("input-wrong");
            formPostals[1].classList.add("input-good");
            data.data1[formPostals[1].name] = formPostals[0].value;
        }
        let bool = Object.keys(data.data1).every(key => data.data1[key].length);
        if (bool) {
            if (form1BtnN.classList.contains("btn-disabled")) {
                form1BtnN.classList.remove("btn-disabled")
            }
        }
        else {
            if (!form1BtnN.classList.contains("btn-disabled")) {
                form1BtnN.classList.add("btn-disabled")
            }
        }
    }
    else {
        formSelect[1].value = "";
        formSelect[1].classList.remove("input-good")
        formSelect[1].classList.add("input-wrong")
        data.data1[formSelect[1].name] = "";

        formCitys[1].value = "";
        formCitys[1].classList.remove("input-good")
        formCitys[1].classList.add("input-wrong")
        data.data1[formCitys[1].name] = "";

        formAddresses[1].value = "";
        formAddresses[1].classList.remove("input-good")
        formAddresses[1].classList.add("input-wrong")
        data.data1[formAddresses[1].name] = "";

        formPostals[1].value = "";
        formPostals[1].classList.remove("input-good")
        formPostals[1].classList.add("input-wrong")
        data.data1[formPostals[1].name] = "";

        let bool = Object.keys(data.data1).every(key => data.data1[key].length);
        if (bool) {
            if (form1BtnN.classList.contains("btn-disabled")) {
                form1BtnN.classList.remove("btn-disabled")
            }
        }
        else {
            if (!form1BtnN.classList.contains("btn-disabled")) {
                form1BtnN.classList.add("btn-disabled")
            }
        }
    }
    form1UseShipBool = !form1UseShipBool;
})







// form data
allInps.forEach(item => {
    item.addEventListener('input', change);
})
function change(e) {
    const { name, value } = e.target;
    data.data1[name] = value;
    let bool = Object.keys(data.data1).every(key => data.data1[key].length);
    if (bool) {
        if (form1BtnN.classList.contains("btn-disabled")) {
            form1BtnN.classList.remove("btn-disabled")
        }
    }
    else {
        if (!form1BtnN.classList.contains("btn-disabled")) {
            form1BtnN.classList.add("btn-disabled")
        }
    }
}











// inputs validation form 2 ------------------------------------------------------------------------------------------------------------

const form2Inps = document.querySelector(".form__cont_2").querySelectorAll("input");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const rPassword = document.querySelector(".rPassword");
const form2RadioInps = document.querySelectorAll(".form__radio_inp");
const form2RadioLabels = document.querySelectorAll(".form__radio_inp_label");

function validete(field) {
    switch (field.name) {
        case "email":
            return validateEmail(field.value);
        case "password":
            return (field.value == rPassword.value) && (field.value.length !== 0);
        case "rPassword":
            if (field.value == password.value && field.value.length !== 0) {
                password.classList.remove("input-wrong")
                password.classList.add("input-good")
            }
            else {
                password.classList.remove("input-good")
                password.classList.add("input-wrong")
            }
            return (field.value == password.value) && (field.value.length !== 0);
    }
}

form2Inps.forEach((field) => {
    field.addEventListener('input', (e) => {
        data.data2[e.target.name] = e.target.value;
        if (validete(e.target)) {
            e.target.classList.remove("input-wrong");
            e.target.classList.add("input-good");
        }
        else {
            e.target.classList.remove("input-good");
            e.target.classList.add("input-wrong");
        }
    });
});




// email regexp
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


form2Inps.forEach(item => {
    item.addEventListener('input', change2);
})
function change2(e) {
    const { name, value } = e.target;
    data.data2[name] = value;
    if (email.classList.contains("input-good") && password.value == rPassword.value && form2RadioLabels[0].style.display == "none") {
        if (form2BtnN.classList.contains("btn-disabled")) {
            form2BtnN.classList.remove("btn-disabled")
        }
    }
    else {
        if (!form2BtnN.classList.contains("btn-disabled")) {
            form2BtnN.classList.add("btn-disabled")
        }
    }
}



// form 2 radio inputs
form2RadioInps.forEach((item) => {
    item.addEventListener("click", () => {
        form2RadioLabels.forEach((label) => {
            label.style.display = "none";
        })
    })
})










// inputs validation form 3 ------------------------------------------------------------------------------------------------------------

const form3Inps = document.querySelector(".form__cont_3").querySelectorAll(".input");
const visa = document.querySelector(".visa");
const fullName = document.querySelector(".fullName");
const cardCVC = document.querySelector(".cardCVC");
const cardDate = document.querySelector(".cardDate");

// cardCVC validation
cardCVC.addEventListener("input", (e) => {
    if (e.target.value.length > 4) {
        e.target.value = e.target.value.slice(0, 4);
    }
    else if (e.target.value.length == 4) {
        cardCVC.classList.remove("input-wrong");
        cardCVC.classList.add("input-good");
    }
    else {
        cardCVC.classList.remove("input-good");
        cardCVC.classList.add("input-wrong");
    }
})





// visa validation
let visaValue = 0;
let visaValid = false;
visa.addEventListener("input", (e) => {
    if (+e.data / 2) {
        visaValue++;
        if (visaValue > 3) {
            visa.value = e.target.value + ' ';
            visaValue = 0;
        }
    }
    else if (!+e.data / 2) {
        e.target.value = e.target.value.slice(0, 0);
        visaValue = 0;
    }
    if (e.target.value.length == 20) {
        visaValid = true;
    }
    else {
        visaValid = false;
    }
    if (visaValid) {
        visa.classList.remove("input-wrong");
        visa.classList.add("input-good");
    }
    else {
        visa.classList.remove("input-good");
        visa.classList.add("input-wrong");
    }
})




// card validation
cardDate.addEventListener("input", (e) => {
    let cardDateArr = [];
    const x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,2})(\d{0,4})/);
    e.target.value = x[1] + '/' + x[2] + (x[3] ? '/' + x[3] : '');

    for (let i = 0; i < x[0].length; i++) {
        cardDateArr.push(x[0][i])
    }
    let date = new Date();

    if (x[0].length == 8 && + `${cardDateArr[0]}${cardDateArr[1]}` < 32 && `${cardDateArr[2]}${cardDateArr[3]}` < 13 &&
        +`${cardDateArr[4]}${cardDateArr[5]}${cardDateArr[6]}${cardDateArr[7]}` > date.getFullYear()) {
        cardDate.classList.remove("input-wrong");
        cardDate.classList.add("input-good");
    }
    else {
        cardDate.classList.add("input-wrong");
        cardDate.classList.remove("input-good");
    }
})





// form 3 data
let inpCoun;
form3Inps.forEach(item => {
    item.addEventListener('input', change3);
})
function change3(e) {
    const { name, value } = e.target;
    if (e.target.name == "cardCVC") {
        data.data3[name] = value.slice(0, 4)
    }
    else {
        data.data3[name] = value;
    }

    inpCoun = 0;
    form3Inps.forEach((inp) => {
        if (inp.classList.contains("input-good")) {
            inpCoun++;
        };
    })
    if (inpCoun === 4) {
        if (form3BtnN.classList.contains("btn-disabled")) {
            form3BtnN.classList.remove("btn-disabled")
        }
    }
    else {
        if (!form3BtnN.classList.contains("btn-disabled")) {
            form3BtnN.classList.add("btn-disabled")
        }
    }
}