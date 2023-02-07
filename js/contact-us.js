function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

$(document).ready(function () {
    "use strict";
    /*
     * Form Validation
     */

    // Fetch all the forms we want to apply custom validation styles to
    const form = document.getElementById("form");
    const result = document.getElementById("result");
    // Loop over them and prevent submission
    form.addEventListener(
        "submit",
        function (event) {
            form.querySelectorAll('textarea')[0]?.setCustomValidity('');
            var inputs = form.querySelectorAll('input');
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].setCustomValidity('');
            }
            result.classList.remove('alert-warning');
            result.classList.remove('alert-danger');
            result.classList.remove('alert-success');
            result.classList.remove('alert-primary');
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();

                result.classList.add('alert-warning');
                result.innerHTML = 'Please fill all the details!'
                form.querySelectorAll(":invalid")[0].focus();
            } else {

                const formData = new FormData(form);
                event.preventDefault();
                event.stopPropagation();
                const object = {};
                let isValid = true;
                formData.forEach((value, key) => {
                    if (value != null && value != undefined && value.trim() != '') {
                        object[key] = value.trim();
                    } else {
                        form.querySelectorAll('input[name="' + key + '"]')[0]?.setCustomValidity("Invalid field.");;
                        form.querySelectorAll('input[name="' + key + '"]')[0]?.focus();

                        if (key == 'message') {
                            form.querySelectorAll('textarea[name="' + key + '"]')[0]?.setCustomValidity("Invalid field.");;
                            form.querySelectorAll('textarea[name="' + key + '"]')[0]?.focus();
                        }
                        isValid = false;
                    }
                });

                if (isValid) {
                    object['access_key'] = 'YOUR_ACCESS_KEY_HERE';
                    object['subject'] = 'Dax health care inquiry';
                    object['from_name'] = 'Dax Health Care';
                    form.classList.add('submitting');
                    const json = JSON.stringify(object);

                    result.classList.add('alert-primary')
                    result.innerHTML = "Please wait...";

                    fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json"
                        },
                        body: json
                    })
                        .then(async (response) => {
                            let json = await response.json();
                            console.log(json)
                            if (response.status == 200) {
                                console.log(result);
                                result.innerHTML = json.message;
                                result.classList.add('alert-success');
                            } else {
                                console.log(response);
                                result.classList.add('alert-danger');
                                result.innerHTML = 'Something went wrong!';
                            }
                        })
                        .catch((error) => {
                            result.classList.add('alert-danger');
                            result.innerHTML = 'Something went wrong!';
                        })
                        .then(function () {
                            form.classList.remove('submitting');
                            form.reset();
                            form.classList.remove("was-validated");
                            setTimeout(() => {
                                result.style.display = "none";
                            }, 5000);
                        });
                } else {
                    result.classList.add('alert-warning');
                    result.innerHTML = 'Please fill all the details!'
                }
            }
            form.classList.add("was-validated");
        },
        false
    );
});




// $(document).ready(function () {
//     const form = document.getElementById("form");
//     const result = document.getElementById("result");


//     form.addEventListener("submit", function (e) {
//         const formData = new FormData(form);
//         console.log(formData);
//         e.preventDefault();
//         var object = {};
//         formData.forEach((value, key) => {
//             object[key] = value;
//         });
//         var json = JSON.stringify(object);
//         result.innerHTML = "Please wait...";

//         fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json"
//             },
//             body: json
//         })
//             .then(async (response) => {
//                 let json = await response.json();
//                 console.log(json)
//                 if (response.status == 200) {
//                     result.innerHTML = json.message;
//                     result.classList.remove("text-gray-500");
//                     result.classList.add("text-green-500");
//                 } else {
//                     console.log(response);
//                     result.innerHTML = json.message;
//                     result.classList.remove("text-gray-500");
//                     result.classList.add("text-red-500");
//                 }
//             })
//             .catch((error) => {
//                 console.log(error);
//                 result.innerHTML = "Something went wrong!";
//             })
//             .then(function () {
//                 form.reset();
//                 setTimeout(() => {
//                     result.style.display = "none";
//                 }, 5000);
//             });
//     });

// })
