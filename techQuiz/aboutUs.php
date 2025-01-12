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
                            <a class="nav-link mx-lg-2 active" href="aboutUs.php">About</a>
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
    <section class="py-5 about-wallpaper about-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="text-center">
                        <h2 class="display-5 fw-bold text-white">
                            Purpose
                        </h2>
                        <p class="lead text-white">
                            Our Mission is to provide you with quizzes on
                            various topics to expand your knowledge base. To
                            make you guys more easier in practicing for your
                            exam.Provide detailed performance analysis to
                            help the students identify their strengths and
                            weaknesses. Track progress over time to keep you
                            motivated and focused.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="py-5 px-4 about-section">
        <div class="container">
            <div class="row align-items-center gx-4 justify-content-center">
                <div class="col-12 col-md-8 col-lg-8 col-xl-6 order-2">
                    <div class="ms-lg-5 text-center text-lg-start">
                        <img
                            class="img-fluid rounded-3"
                            src="images/Study-Time-8211-Boy-at-Desk.svg"
                            alt="Study Time" />
                    </div>
                </div>
                <div class="col-12 col-lg-11 col-xl-6 order-1">
                    <div class="ms-lg-5">
                        <h2 class="display-7 fw-bold">About Us</h2>
                        <p class="lh-lg">
                            We are a team of four passionate young software
                            developers on an exciting journey to create our
                            first web application. Inspired by our shared
                            vision of making a meaningful contribution to
                            the ITPEC community and the broader IT
                            ecosystem, we embarked on this project with
                            dedication and innovation at heart. We believe
                            in the power of collaboration, and through this
                            project, we hope to inspire others to take bold
                            steps toward their dreams. Let's build a better
                            future for the IT world, together.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5 px-4 aboutUs-section1 about-section">
        <div class="container">
            <div class="row align-items-center justify-content-center gx-4">
                <div
                    class="col-12 col-md-8 col-lg-8 col-xl-6 order-2 text-center text-lg-start">
                    <div class="ms-lg-5">
                        <img
                            class="img-fluid rounded-3"
                            src="./images/Boy-and-Girl-getting-graduation-congratulation.svg"
                            alt="Graduation" />
                    </div>
                </div>
                <div
                    class="col-12 col-lg-11 col-xl-6 order-1">
                    <div class="ms-lg-5">
                        <h2 class="display-7 fw-bold">About ITPEC Exam</h2>
                        <p class="lh-lg">
                            The Information Technology Professional
                            Examination Council (ITPEC) is a renowned
                            organization dedicated to developing and
                            promoting global standards for IT professionals.
                            It facilitates a range of certification exams
                            that test and enhance the skills of individuals
                            in various IT fields, ensuring they meet the
                            highest industry standards. ITPEC serves as a
                            gateway for IT enthusiasts and professionals to
                            advance their careers, offering recognition and
                            credibility through its well-structured
                            examination framework. The certifications
                            provided by ITPEC are widely recognized across
                            Asia and beyond, making it an integral part of
                            the IT professional community.
                        </p>
                        <a href="https://itpec.org/about/itpec-common-exam.html" target="_blank">
                            <button class="details-btn mb-2">
                                <span class="circle">
                                    <span class="arrow-icon"> </span>
                                    <span class="details-para">For&nbsp;More&nbsp;Details</span>
                                </span>
                            </button>
                        </a>
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
    <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="login.js"></script>
</body>

</html>