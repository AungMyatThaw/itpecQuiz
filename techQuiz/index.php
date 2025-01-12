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
        rel="stylesheet"
        href="./node_modules/bootstrap/dist/css/bootstrap.min.css" />
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer" />
    <link
        rel="stylesheet"
        href="./node_modules/bootstrap-icons/font/bootstrap-icons.css" />
    <link rel="stylesheet" href="main.css" />
    <link rel="shortcut icon" href="images/TechQUiz.png" type="image/x-icon">
</head>

<body class="primary-font">
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
                        TECH<span style="color: #48cae4">Quiz</span>
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
                                class="nav-link mx-lg-2 active"
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
    <section
        class="py-5 bg-light d-flex align-items-center justify-content-center">
        <div class="container mx-5">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 mb-4 mb-lg-0">
                    <h1 class="display-6 fw-bold">
                        Welcome to TECH
                        <span style="color: #48cae4">Quiz Zone!</span>
                    </h1>
                    <p class="lead my-4 fw-medium">
                        Test Your IT Knowledge here! Make sure you are ready
                        for your ITPEC Exam.
                    </p>
                    <a
                        class="button-19 text-decoration-none"
                        href="#ip-fe"
                        style="width: 9.375rem">Get Started</a>
                </div>
                <div class="col-lg-5 col-sm-9">
                    <img
                        alt=""
                        class="img-fluid"
                        src="images/Online test-amico.svg" />
                </div>
            </div>
        </div>
    </section>
    <section class="py-5" id="ip-fe">
        <div class="container d-flex justify-content-evenly flex-wrap">
            <div class="mt-5">
                <div
                    class="card mb-3 overflow-hidden ip-shadow rounded-4"
                    style="max-width: 59.375rem">
                    <div class="row g-0">
                        <div class="col-md-4 bg-danger d-flex">
                            <img
                                src="images/ip-book.gif"
                                class="img-fluid rounded-start d-block m-auto py-3"
                                alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h4
                                    class="card-title fw-bold text-danger pb-3 pt-2">
                                    IP
                                </h4>
                                <p class="card-text fw-medium">
                                    The “IP” exam tests basic IT knowledge.
                                    This is the easiest of the 3 tests. This
                                    means that this category is ideal for
                                    job-seekers, students, or people who
                                    want to move into IT.
                                    <br />
                                </p>
                                <?php if ($isLoggedIn): ?>
                                    <a href="IPquizSelect.php" class="btn btn-outline-danger">Take Quiz</a>
                                <?php else: ?>
                                    <button class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#loginModal">Take Quiz</button>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5">
                <div
                    class="card mb-3 overflow-hidden fe-shadow rounded-4"
                    style="max-width: 59.375rem">
                    <div class="row g-0">
                        <div class="col-md-4 bg-success d-flex">
                            <img
                                src="images/fe-book.jpg"
                                class="img-fluid rounded-start d-block m-auto py-4 px-2"
                                alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5
                                    class="card-title fw-bold text-success pb-3 pt-2">
                                    FE
                                </h5>
                                <p class="card-text fw-medium">
                                    The “FE” exam tests whether you have the
                                    knowledge and skills to be an IT
                                    engineer. You need to prove your ability
                                    to work with algorithms, networks,
                                    databases, information security,
                                    practical programming, and more.
                                </p>
                                <?php if ($isLoggedIn): ?>
                                    <a href="FEquizSelect.php" class="btn btn-outline-success">Take Quiz</a>
                                <?php else: ?>
                                    <button class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#loginModal">Take Quiz</button>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Login Modal -->
        <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content ">
                    <div class="modal-header">
                        <h5 class="modal-title" id="loginModalLabel">Login Required</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        Please log in to take the quiz.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
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

    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="login.js"></script>
</body>

</html>