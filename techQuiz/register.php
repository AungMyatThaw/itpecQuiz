<?php
require('config.php');
session_start();

// Initialize variables
$username_error = "";
$email_error = "";
$password_error = "";
$confirm_password_error = "";
$register_username = "";
$register_email = "";
$register_password = "";


if (isset($_POST['register'])) {
    $register_username = isset($_POST['register-username']) ? trim($_POST['register-username']) : "";
    $register_email = isset($_POST['register-email']) ? trim($_POST['register-email']) : "";
    $register_password = isset($_POST['register-password']) ? trim($_POST['register-password']) : "";

    // Validate username
    if (empty($register_username)) {
        $username_error = "Please input a username.";
    }

    // Validate email
    if (empty($register_email)) {
        $email_error = "Please input an email.";
    } else {
        // Check if the email format is valid
        if (!filter_var($register_email, FILTER_VALIDATE_EMAIL)) {
            $email_error = "Please enter a valid email address.";
        } else {
            // Check if the email already exists
            $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
            $stmt->execute([$register_email]);
            $user = $stmt->fetch();

            if ($user) {
                $email_error = "An account with this email already exists.";
            }
        }
    }

    // Validate password
    if (empty($register_password)) {
        $password_error = "Please input a password.";
    } elseif (strlen($register_password) < 8) {
        $password_error = "Password must be at least 8 characters.";
    }


    // If there are no errors, register the user
    if (empty($username_error) && empty($email_error) && empty($password_error)) {
        // Insert user into the database
        $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        $stmt->execute([$register_username, $register_email, $register_password]);

        // Redirect to a success page
        $_SESSION['user'] = $conn->lastInsertId(); // Example: Store user ID in session
        echo "
        <script>
            window.onload = function() {
                var successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show();
            };
        </script>";
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechQuiz</title>
    <link
        rel="stylesheet"
        href="node_modules/bootstrap/dist/css/bootstrap.min.css" />
    <link
        href="node_modules/bootstrap-icons/font/bootstrap-icons.css"
        rel="stylesheet" />
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="main.css" />
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer" />
    <link rel="shortcut icon" href="images/TechQUiz.png" type="image/x-icon">
</head>

<body style="background-color:aliceblue;" class="primary-font">
    <div class="wrapper">
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg sticky-top bg-white px-4" id="header">
            <div class="container-fluid justify-content-center">
                <a class="navbar-brand me-auto me-sm-auto nav-responsive " href="index.php"><img src="images/TechQUiz.png" alt="" width="50" class="my-0">TECH<span style="color: #48cae4">Quiz</span></a>
                <div
                    class="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                            ITPEC<span style="color: #48cae4">Quiz</span>
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul
                            class="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a
                                    class="nav-link mx-lg-2"
                                    aria-current="page"
                                    href="index.php">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link mx-lg-2" href="aboutUs.php">About</a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link mx-lg-2"
                                    href="contact.php">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <a href="login.php" class="login-button">Login</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
        <section class="py-5 flex-grow-1 d-flex justify-content-center align-items-center">
            <div class="container">
                <div class="row align-items-center gx-4 justify-content-center">
                    <div class="col-11 col-sm-11 col-md-6 col-xl-5 col-xxl-6 animate__animated animate__bounceIn">
                        <div class="ms-md-2 ms-lg-5"><img class="img-fluid rounded-3" src="images/Sign up-amico.svg"></div>
                    </div>
                    <div class="col-11 col-sm-11 col-md-6 col-xl-5 col-xxl-6 animate__animated animate__bounceIn">
                        <div class="ms-md-2 ms-lg-5">
                            <form method="POST" action="" id="register-form" class="w-100 needs-validation <?php echo !empty($username_error) || !empty($email_error) || !empty($password_error) ? 'was-validated' : ''; ?>" novalidate autocomplete="off">
                                <h1 class="mb-4 font-weight_700 text-info">Sign Up</h1>

                                <!-- Username -->
                                <div class="mb-3">
                                    <!-- <label for="register-username" class="form-label">Username</label> -->
                                    <h6 class="ms-1 fw-bold text-info">Username</h6>
                                    <input
                                        type="text"
                                        class="form-control <?php echo !empty($username_error) ? 'is-invalid' : ''; ?>"
                                        name="register-username"
                                        id="register-username"
                                        placeholder="Enter username"
                                        value="<?php echo htmlspecialchars($register_username); ?>"
                                        required />
                                    <div class="invalid-feedback">
                                        <?php echo $username_error; ?>
                                    </div>
                                </div>

                                <!-- Email -->
                                <div class="mb-3">
                                    <h6 class="ms-1 fw-bold text-info">Email</h6>
                                    <input
                                        type="email"
                                        class="form-control <?php echo !empty($email_error) ? 'is-invalid' : ''; ?>"
                                        name="register-email"
                                        id="register-email"
                                        placeholder="Enter email"
                                        value="<?php echo htmlspecialchars($register_email); ?>"
                                        required />
                                    <div class="invalid-feedback">
                                        <?php echo $email_error; ?>
                                    </div>
                                </div>

                                <!-- Password -->
                                <div class="mb-3 position-relative">
                                    <h6 class="ms-1 fw-bold text-info">Password</h6>
                                    <input
                                        type="password"
                                        class="form-control <?php echo !empty($password_error) ? 'is-invalid' : ''; ?>"
                                        name="register-password"
                                        id="register-password"
                                        placeholder="Enter password"
                                        minlength="8"
                                        required />
                                    <button type="button" onclick="togglePassword()" class="toggle-password position-absolute translate-middle-y me-3 border border-0 bg-transparent">
                                        <i class="fa fa-eye-slash" id="togglePasswordIcon"></i>
                                    </button>

                                    <div class="invalid-feedback">
                                        <?php echo $password_error; ?>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    name="register"
                                    class="btn  btn-info text-white w-100 mt-1 fw-bold shadow fs-5">
                                    Register
                                </button>
                                <!-- Forgot Password Link -->
                                <div class="mt-3 text-center">
                                    <a href="login.php"><button
                                            type="button"
                                            class="border-0  text-black-50 hover-forgot-text bg-transparent"
                                            data-bs-toggle="modal"
                                            data-bs-target="#staticBackdrop">
                                            Already have an account? <strong>Login</strong>
                                        </button></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer -->
        <footer class="py-2 footer-shadow">
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
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="successModalLabel">Registration Successful</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Your registration was successful! You can now go to the home page or login.
                    </div>
                    <div class="modal-footer">
                        <a href="index.php" class="btn btn-primary">Go to Home</a>
                        <a href="login.php" class="btn btn-info">Go to Login</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <script>
        document.getElementById("register-form").addEventListener("submit", function(event) {
            const emailInput = document.getElementById("register-email");
            const emailValue = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(emailValue)) {
                event.preventDefault(); // Prevent form submission
                emailInput.classList.add("is-invalid");
                emailInput.nextElementSibling.textContent = "Please enter a valid email address.";
            } else {
                emailInput.classList.remove("is-invalid");
            }
        });
    </script> -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const togglePasswordIcon = document.getElementById("togglePasswordIcon");
            const passwordInput = document.getElementById("register-password");

            togglePasswordIcon.addEventListener("click", function() {
                const isPasswordHidden = passwordInput.type === "password";
                passwordInput.type = isPasswordHidden ? "text" : "password";
                togglePasswordIcon.classList.toggle("fa-eye-slash", !isPasswordHidden);
                togglePasswordIcon.classList.toggle("fa-eye", isPasswordHidden);
            });
        });
    </script>



    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="login.js"></script>

</body>

</html>