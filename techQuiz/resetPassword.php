<?php
require('config.php');
session_start();

$error = "";

// Check if user_id is passed in the URL
if (isset($_GET['user_id'])) {
    $user_id = $_GET['user_id'];
} else {
    echo "Invalid request.";
    exit();
}


// Handle password reset
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['new-password'])) {
    $new_password = trim($_POST['new-password']);

    // Validate new password

    if (empty($new_password)) {
        $error = "Please input the password.";
    } elseif (strlen($new_password) < 8) {
        $error = "Password must be at least 8 characters.";
    } else {
        // Update the password in the database
        $query = "UPDATE users SET password = :password WHERE id = :user_id";
        $stmt = $conn->prepare($query);
        $stmt->bindValue(':password', $new_password);
        $stmt->bindValue(':user_id', $user_id);
        $stmt->execute();

        echo "
        <script>
            window.onload = function() {
                var successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show();
            };
        </script>";
        // header("Location: login.php");
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
        rel="stylesheet"
        href="node_modules/bootstrap/dist/css/bootstrap.min.css" />
    <link
        href="node_modules/bootstrap-icons/font/bootstrap-icons.css"
        rel="stylesheet" />
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer" />
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="main.css" />
    <link rel="shortcut icon" href="images/TechQUiz.png" type="image/x-icon">
    <title>TechQuiz</title>
    <style>
        .set-new_text {
            background: #48cae4;
            background: linear-gradient(to right, rgb(55, 185, 211) 0%, #1457CF 100%);
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .toggle-password {
            right: 13px;
            top: 20px;
        }
    </style>
</head>

<body class=" primary-font aboutUs-section1">

    <div class="wrapper">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg sticky-top bg-white px-4" id="header">
            <div class="container-fluid justify-content-center">
                <a class="navbar-brand me-auto me-sm-auto nav-responsive " href="index.php"><img src="images/TechQUiz.png" alt="" width="50" class="my-0">TECH<span style="color: #48cae4">Quiz</span></a>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">ITPEC<span style="color: #48cae4">Quiz</span></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li class="nav-item"><a class="nav-link mx-lg-2" href="index.php">Home</a></li>
                            <li class="nav-item"><a class="nav-link mx-lg-2" href="aboutUs.php">About</a></li>
                            <li class="nav-item"><a class="nav-link mx-lg-2" href="contact.php">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <a href="register.php" class="login-button">Login</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
        <section class=" d-flex align-items-center flex-grow-1 ">
            <div class="container animate__animated animate__flipInX">
                <div class="row justify-content-center align-items-center">
                    <div class="col-sm-12 col-md-9 col-lg-7 ">
                        <form action="" method="post">
                            <div class="bg-white text-center p-5 pb-3 rounded-4 shadow-lg my-5">
                                <h2 class="display-6 fw-bold set-new_text">Set New Password</h2>
                                <p class="lead mt-2 text-black-50">Your new password must be different to previously used passwords</p>
                                <div class=" position-relative">
                                    <input
                                        type="password"
                                        class="form-control me-2 <?php echo !empty($error) ? 'is-invalid' : ''; ?>"
                                        placeholder="Enter your new password"
                                        id="new-password"
                                        name="new-password" />
                                    <button type="button" onclick="togglePassword()" class="toggle-password position-absolute translate-middle-y me-3 border border-0 bg-transparent"><i class="fa fa-eye-slash" id="togglePasswordIcon"></i></button>
                                    <small id="password-strength" class="text-muted position-relative"></small>
                                    <div class="invalid-feedback">
                                        <?php echo $error; ?>
                                    </div>
                                </div>
                                <button class="btn btn-primary text-nowrap text-white  w-100 mt-1" name="reset-password" type="submit">Reset</button><br>
                                <a href="login.php" class="text-decoration-none pt-2 d-inline-block" style="color:#2babc5;"><- Back to Login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer -->
        <footer class="py-2 footer-shadow bg-white">
            <div class="container">
                <div class="row align-items-center border-2">
                    <div
                        class="col-12 col-lg-3 text-center text-lg-start d-flex align-items-center justify-content-center pb-3 pb-sm-2 pb-lg-0 pb-xl-0">
                        <img
                            alt="JKT Logo"
                            class="img-fluid rounded-circle"
                            height=""
                            src="images/JKT-logo.jpg"
                            width="50" />
                        <h6 class="fw-bolder ms-2 mb-0">
                            <span class="fw-light fs-6">Organized by</span><br />
                            JKT Digital Institute
                        </h6>
                    </div>
                    <div class="col-12 col-lg-6 navbar-expand text-center text-black-50 pb-4 pb-sm-4 pb-lg-0 pb-xl-0">
                        &copy; <?php echo date("Y"); ?> TECH Quiz. All rights reserved
                    </div>
                    <div class="col-12 col-lg-3 text-center text-lg-end pb-2 pb-sm-2 pb-lg-0 pb-xl-0">
                        <a class="me-2" href="https://www.facebook.com/jktdigital" target="_blank"><i class="fa-brands fa-facebook fs-3 text-info"></i></a>
                        <a class="me-2" href="http://jktmyanmarint.com/index.html" target="_blank"><i class="fa-brands fa-google fs-3 text-info"></i></a>
                    </div>
                </div>
            </div>
        </footer>

        <!-- Success Modal -->
        <div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="successModalLabel">Password Updated Successfully</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Your password has been updated successfully! You can now log in with your new password.
                    </div>
                    <div class="modal-footer">
                        <a href="login.php" class="btn btn-primary">Go to Login</a>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script>
          document.addEventListener("DOMContentLoaded", function() {
            const togglePasswordIcon = document.getElementById("togglePasswordIcon");
            const passwordInput = document.getElementById("new-password");

            togglePasswordIcon.addEventListener("click", function() {
                const isPasswordHidden = passwordInput.type === "password";
                passwordInput.type = isPasswordHidden ? "text" : "password";
                togglePasswordIcon.classList.toggle("fa-eye-slash", !isPasswordHidden);
                togglePasswordIcon.classList.toggle("fa-eye", isPasswordHidden);
            });
        });

        //password weak,medium,strong
        document.addEventListener("DOMContentLoaded", function() {
            const passwordInput = document.getElementById("new-password");
            const passwordStrengthText = document.getElementById("password-strength");

            passwordInput.addEventListener("input", function() {
                const value = passwordInput.value;
                if (value.length < 6) {
                    passwordStrengthText.textContent = "Weak";
                    passwordStrengthText.setAttribute("style", "color: red !important;");
                } else if (value.length < 10) {
                    passwordStrengthText.textContent = "Medium";
                    passwordStrengthText.setAttribute("style", "color: orange !important;");
                } else {
                    passwordStrengthText.textContent = "Strong";
                    passwordStrengthText.setAttribute("style", "color: green !important;");
                }
            });
        });
    </script>
</body>

</html>