<?php
require('config.php');
session_start();

// Initialize variables
$email_error = "";
$password_error = "";
$login_email = ""; // Initialize to avoid "Undefined variable" error
$login_password = ""; // Initialize to avoid "Undefined variable" error

// $updateStmt = $conn->prepare("UPDATE users SET last_login = NOW() WHERE id = :id");
// $updateStmt->execute(['id' => $user['id']]);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['login'])) {
    $login_email = isset($_POST['login-email']) ? trim($_POST['login-email']) : "";
    $login_password = isset($_POST['login-password']) ? trim($_POST['login-password']) : "";

    if (empty($login_email)) {
        $email_error = "Please input email.";
    } else {
        // Check if the email exists in the database
        $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$login_email]);
        $user = $stmt->fetch();

        if (!$user) {
            $email_error = "No user exists with this email.";
        }
    }

    if (empty($login_password)) {
        $password_error = "Please input password.";
    } elseif (!empty($login_email) && $user && $login_password !== $user['password']) {
        $password_error = "Sorry, the password is incorrect.";
    }

    // If there are no errors, handle successful login
    if (empty($email_error) && empty($password_error)) {
        // Perform login action
        $_SESSION['user_id'] = $user['id']; // Store user ID in session
        header("Location: index.php"); // Redirect to a success page
        exit();
    }
}

// forget password
// Check if the email exists
$error = ""; // Variable to store error messages
if (isset($_POST['forget-email'])) {
    $email = trim($_POST['forget-email']);

    if (empty($email)) {
        // If email is empty, set the error message
        $error = "Please enter your email.";
        echo json_encode(["success" => false, "error" => $error]);
        exit;
    } else {
        // Check if email exists in the database
        $query = "SELECT * FROM users WHERE email = :email";
        $stmt = $conn->prepare($query);
        $stmt->bindValue(':email', $email);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            // Email exists, redirect to password reset page
            echo json_encode(["success" => true, "user_id" => $user['id']]);
            exit;
        } else {
            // Email does not exist
            $error = "Email does not exist. Unable to reset password.";
            echo json_encode(["success" => false, "error" => $error]);
            exit;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechQuiz</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
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
        <nav
            class="navbar navbar-expand-lg sticky-top bg-white px-4"
            id="header">
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
                                <a class="nav-link mx-lg-2" href="contact.php">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <a href="register.php" class="login-button ms-1">Register</a>
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
                    <div class="col-12 col-sm-11 col-md-6 col-xl-5 col-xxl-6 animate__animated animate__bounceIn">
                        <div class="ms-md-2 ms-lg-4"><img class="img-fluid rounded-3" src="images/Computer login-amico.svg"></div>
                    </div>
                    <div class="col-12 col-sm-11 col-md-5 col-xl-5 col-xxl-6 animate__animated animate__bounceIn">
                        <div class="ms-md-2 ms-lg-5">
                            <form method="POST" action="" id="login-form" class="w-100 needs-validation <?php echo !empty($email_error) || !empty($password_error) ? 'was-validated' : ''; ?>" novalidate autocomplete="off">
                                <h1 class="mb-4 font-weight_700 text-info">Sign In</h1>

                                <!-- Email -->
                                <div class="mb-3">
                                    <h6 class="ms-1 fw-bold text-info">Email</h6>
                                    <input
                                        type="email"
                                        class="form-control <?php echo !empty($email_error) ? 'is-invalid' : ''; ?>"
                                        name="login-email"
                                        id="login-email"
                                        placeholder="Enter email"
                                        value="<?php echo htmlspecialchars($login_email); ?>"
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
                                        name="login-password"
                                        id="login-password"
                                        placeholder="Enter password"
                                        minlength="8"
                                        required />
                                    <button type="button" onclick="togglePassword()" class="toggle-password position-absolute translate-middle-y me-3 border border-0 bg-transparent"><i class="fa fa-eye-slash" id="togglePasswordIcon"></i></button>
                                    <div class="invalid-feedback">
                                        <?php echo $password_error; ?>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    name="login"
                                    class="btn  btn-info text-white w-100 mt-1 fw-bold shadow fs-5">
                                    Login
                                </button>

                                <!-- Forgot Password Link -->
                                <div class="mt-3 text-center d-flex justify-content-between">
                                    <a href="register.php"><button
                                            type="button"
                                            class="border-0  text-black-50 hover-forgot-text bg-transparent">
                                            No Account? <strong>Register</strong>
                                        </button></a>
                                    <button
                                        type="button"
                                        class="border-0  text-black-50 hover-forgot-text bg-transparent"
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop">
                                        Forgot password?
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer -->
        <footer class="py-2 footer-shadow   ">
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
    </div>
    <!-- Forgot Password Modal -->
    <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered d-flex align-content-center justify-content-center dialog-width mx-auto">
            <div class="modal-content">
                <div class="modal-header">
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        id="close-btn"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="emailInput" novalidate>
                        <div
                            class="w-25 h-25 p-5 rounded-circle bg-primary m-auto question-mark"></div>
                        <h5 class="card-title text-center mb-4 mt-3 font-weight_700 text-primary_color">
                            Forgot Password
                        </h5>
                        <p class="text-center text-black-50">
                            Please enter your email address <br />to reset your password
                        </p>
                        <div class="form-floating mb-3">
                            <input
                                type="email"
                                class="form-control"
                                id="floatingInput"
                                name="forget-email"
                                placeholder="name@example.com"
                                required />
                            <label for="floatingInput" class="m-0">Email address</label>
                            <div class="invalid-feedback" id="forget-errorMessage"></div>
                        </div>
                        <div class="modal-footer border border-0 p-0">
                            <button
                                type="button"
                                id="forget-submitBtn"
                                class="px-3 text-white py-2 rounded border border-1 border-info submit_bg-color w-100 bg-info">
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const togglePasswordIcon = document.getElementById("togglePasswordIcon");
            const passwordInput = document.getElementById("login-password");

            togglePasswordIcon.addEventListener("click", function() {
                const isPasswordHidden = passwordInput.type === "password";
                passwordInput.type = isPasswordHidden ? "text" : "password";
                togglePasswordIcon.classList.toggle("fa-eye-slash", !isPasswordHidden);
                togglePasswordIcon.classList.toggle("fa-eye", isPasswordHidden);
            });
        });

        // forget password error message appear
        document.getElementById("forget-submitBtn").addEventListener("click", function(event) {
            event.preventDefault(); // Prevent form from submitting normally

            const emailInput = document.getElementById("floatingInput");
            const errorMessage = document.getElementById("forget-errorMessage");
            const formData = new FormData();
            formData.append("forget-email", emailInput.value);

            fetch("", { // Submitting to the same PHP page
                    method: "POST",
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Successful case: Redirect to the reset password page
                        window.location.href = "resetPassword.php?user_id=" + data.user_id;
                    } else {
                        // Display server-side error
                        errorMessage.textContent = data.error;
                        emailInput.classList.add("is-invalid");
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        });
        // forget password form  "Close" button to reset the form
        document.getElementById("close-btn").addEventListener("click", function() {
            const form = document.getElementById("emailInput");
            const emailInput = document.getElementById("floatingInput");
            const errorMessage = document.getElementById("forget-errorMessage");

            // Reset the form fields and remove validation errors
            form.reset();
            emailInput.classList.remove("is-invalid");
            errorMessage.textContent = ''; // Clear the error message
        });
        // Reset the form when the page is loaded
        window.onload = function() {
            document.getElementById('register-form').reset();
        };
    </script>
    <script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="login.js"></script>
</body>

</html>