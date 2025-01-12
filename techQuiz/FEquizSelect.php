<?php
session_start();
// Check if the user is logged in
$isLoggedIn = isset($_SESSION['user_id']);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>TechQuiz</title>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet" />
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="main.css" />
    <link rel="shortcut icon" href="images/TechQUiz.png" type="image/x-icon">
    <style>
        footer {
            margin-top: auto;
            text-align: center;
            padding: 1rem;
            background-color: #f8f9fa;
        }
    </style>
</head>

<body class="primary-font">
    <div class="wrapper">
        <!-- Navbar -->
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
                <!-- <a href="login.php" class="login-button">Login</a> -->
                <?php if ($isLoggedIn): ?>
                    <div class=""><a href="user_profile.php" class=" ms-2 btn btn-info me-1 border border-3 border-info rounded-circle text-white"><i class="fa-solid fa-user-graduate"></i></a>
                        <a href="logout.php" class="login-button ms-1">Logout</a>
                    </div>
                <?php else: ?>
                    <a href="login.php" class="login-button ms-1">Login</a>
                <?php endif; ?>
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
        <!-- Content -->
        <div class="container text-center my-5">
            <h1 class="mb-4 fw-bold text-success">FE</h1>
            <p class="mb-5">Since 2024 the Question Criteria for FE Evening Changed,we've decided to not add the PM questions from 2023 to 2021. You can still access to AM Questions And 2024 Questions.
                Be ready and prepared for the Exam by testing your skill on our website.<br><span class=" text-danger">Warning:You are not able to continue answer the test when the timer gets 00:00:00</span></p>


            <div
                class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 my-4">
                <div class="col">
                    <div class="card quiz-card border m-auto">
                        <div class="card-body box-shadow_FEcolor">
                            <p class="card-text font-weight_700">2024</p>
                            <div class="dropdown">
                                <button class="dropbtn w-100 rounded">
                                    &nbsp;&nbsp;April&nbsp;&nbsp;
                                </button>
                                <div class="dropdown-content">
                                    <a href="FEQuiz/FEQuiz2024/April/AM/FEQuiz.php" class="w-100 prevent-select">AM</a>
                                    <a href="FEQuiz/FEQuiz2024/April/PM/FEQuiz.php" class="w-100 prevent-select">PM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card quiz-card border m-auto">
                        <div class="card-body box-shadow_FEcolor">
                            <p class="card-text font-weight_700">2024</p>
                            <div class="dropdown">
                                <button class="dropbtn w-100 rounded">
                                    October
                                </button>
                                <div class="dropdown-content">
                                    <a href="#" class="w-100 prevent-select">AM</a>
                                    <a href="#" class="w-100 prevent-select">PM</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card quiz-card border m-auto">
                        <div class="card-body box-shadow_FEcolor">
                            <p class="card-text font-weight_700">2023</p>
                            <div class="dropdown">
                                <button class="dropbtn w-100 rounded">
                                    &nbsp;&nbsp;April&nbsp;&nbsp;
                                </button>
                                <div class="dropdown-content">
                                    <a href="FEQuiz/FEQuiz2023/April/AM/FEQuiz.php" class="w-100 prevent-select">&nbsp;&nbsp;&nbsp;AM&nbsp;&nbsp;&nbsp;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card quiz-card border m-auto">
                        <div class="card-body box-shadow_FEcolor">
                            <p class="card-text font-weight_700">2023</p>
                            <div class="dropdown">
                                <button class="dropbtn w-100 rounded">
                                    October
                                </button>
                                <div class="dropdown-content">
                                    <a href="FEQuiz/FEQuiz2023/October/AM/FEQuiz.php" class="w-100 prevent-select">&nbsp;&nbsp;&nbsp;&nbsp;AM&nbsp;&nbsp;&nbsp;&nbsp;</a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card quiz-card border m-auto">
                        <div class="card-body box-shadow_FEcolor">
                            <p class="card-text font-weight_700">2022</p>
                            <div class="dropdown">
                                <button class="dropbtn w-100 rounded">
                                    &nbsp;&nbsp;April&nbsp;&nbsp;
                                </button>
                                <div class="dropdown-content">
                                    <a href="FEQuiz/FEQuiz2022/April/AM/FEQuiz.php" class="w-100 prevent-select">&nbsp;&nbsp;&nbsp;AM&nbsp;&nbsp;&nbsp;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card quiz-card border m-auto">
                        <div class="card-body box-shadow_FEcolor">
                            <p class="card-text font-weight_700">2022</p>
                            <div class="dropdown">
                                <button class="dropbtn w-100 rounded">
                                    October
                                </button>
                                <div class="dropdown-content">
                                    <a href="FEQuiz/FEQuiz2022/October/AM/FEQuiz.php" class="w-100 prevent-select">&nbsp;&nbsp;&nbsp;&nbsp;AM&nbsp;&nbsp;&nbsp;&nbsp;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card quiz-card border m-auto">
                        <div class="card-body box-shadow_FEcolor">
                            <p class="card-text font-weight_700">2021</p>
                            <div class="dropdown">
                                <button class="dropbtn w-100 rounded">
                                    &nbsp;&nbsp;April&nbsp;&nbsp;
                                </button>
                                <div class="dropdown-content">
                                    <a href="FEQuiz/FEQuiz2021/April/AM/FEQuiz.php" class="w-100 prevent-select">&nbsp;&nbsp;&nbsp;AM&nbsp;&nbsp;&nbsp;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card quiz-card border m-auto">
                        <div class="card-body box-shadow_FEcolor">
                            <p class="card-text font-weight_700">2021</p>
                            <div class="dropdown">
                                <button class="dropbtn w-100 rounded">
                                    October
                                </button>
                                <div class="dropdown-content">
                                    <a href="FEQuiz/FEQuiz2021/October/AM/FEQuiz.php" class="w-100 prevent-select">&nbsp;&nbsp;&nbsp;&nbsp;AM&nbsp;&nbsp;&nbsp;&nbsp;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="login.js"></script>
</body>

</html>