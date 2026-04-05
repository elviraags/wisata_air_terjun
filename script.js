// $(document).ready(function () {

//     const btn = $("#loginBtn");
//     const modal = $("#loginModal");
//     const usernameInput = $("#username");
//     const passwordInput = $("#password");
//     const errorMsg = $("#errorMsg");

//     // Buka modal
//     btn.click(function (e) {
//         e.preventDefault();
//         modal.addClass("active");
//         clearForm();
//     });

//     // Fungsi Login
//     window.login = function () {
//         if (usernameInput.val() === "elvira" && passwordInput.val() === "109") {
//             modal.removeClass("active");
//             clearForm();
//             alert("Anda Sedang LOGIN!");
//         } else {
//             errorMsg.text("Anda Siapa?");
//         }
//     };

//     // Tutup modal
//     window.closeLogin = function () {
//         modal.removeClass("active");
//         clearForm();
//     };

//     // Reset form
//     function clearForm() {
//         usernameInput.val("");
//         passwordInput.val("");
//         errorMsg.text("");
//     }

// });

// document.addEventListener('DOMContentLoaded', function() {
//     const toast = document.getElementById('toast');
//     if(toast){
//         toast.classList.add('show');

//         // Auto-hide setelah 4 detik
//         setTimeout(() => { toast.classList.remove('show'); }, 4000);

//         // Tombol close manual
//         const closeBtn = toast.querySelector('.close-btn');
//         closeBtn.addEventListener('click', () => {
//             toast.classList.remove('show');
//         });
//     }
// });



// $(document).ready(function () {
//     const btn = $("#loginBtn");
//     const modal = $("#loginModal");
//     const usernameInput = $("#username");
//     const passwordInput = $("#password");
//     const errorMsg = $("#errorMsg");

    // // Buka modal
    // btn.click(function (e) {
    //     e.preventDefault();
    //     modal.addClass("active");
    //     clearForm();
    // });

    // // Fungsi Login
    // window.login = function () {
    //     if (usernameInput.val() === "elvira" && passwordInput.val() === "109") {
    //         modal.removeClass("active");
    //         clearForm();
    //         alert("Anda Sedang LOGIN!");
    //     } else {
    //         errorMsg.text("Anda Siapa?");
    //     }
    // };

//     // Tutup modal
//     window.closeLogin = function () {
//         modal.removeClass("active");
//         clearForm();
//     };

//     // Reset form
//     function clearForm() {
//         usernameInput.val("");
//         passwordInput.val("");
//         errorMsg.text("");
//     }
// });

// ===== TOAST =====
document.addEventListener('DOMContentLoaded', function() {
    const toast = document.getElementById('toast');
    if(toast){
        toast.classList.add('show');

        // Auto-hide setelah 4 detik
        setTimeout(() => { toast.classList.remove('show'); }, 4000);

        // Tombol close manual
        const closeBtn = toast.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            toast.classList.remove('show');
        });
    }
});