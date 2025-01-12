<?php
require __DIR__ . "../../../../config.php";
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
    <link rel="stylesheet" href="../../../main.css" />
    <link
        rel="stylesheet"
        href="../../../node_modules/bootstrap-icons/font/bootstrap-icons.css" />
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer" />
    <link
        rel="stylesheet"
        href="../../../node_modules/bootstrap/dist/css/bootstrap.min.css" />
    <link rel="shortcut icon" href="../../../images/TechQUiz.png" type="image/x-icon">
    <style>
        .text-danger {
            animation: flash 1s infinite;
        }

        @keyframes flash {

            0%,
            100% {
                color: red;
            }

            50% {
                color: white;
            }
        }

        #timer {
            font-size: 2rem;
            font-weight: bold;
        }
    </style>
</head>

<body class="bg-info primary-font">
    <nav
        class="navbar navbar-expand-lg sticky-top bg-white px-4"
        id="header">
        <div class="container-fluid justify-content-center">
            <a class="navbar-brand me-auto me-sm-auto nav-responsive " href="../../../index.php"><img src="../../../images/TechQUiz.png" alt="" width="50" class="my-0">TECH<span style="color: #48cae4">Quiz</span></a>

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
                                href="../../../index.php">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-lg-2" href="../../../aboutUs.php">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mx-lg-2" href="../../../contact.php">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="timer">03:30:00</div>
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
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-lg-8 ">
                <div id="quiz-container"></div>
                <!-- Hidden form to carry the total score -->
                <form
                    id="scoreForm"
                    action="results.php"
                    method="GET"
                    style="display: none">
                    <input
                        type="hidden"
                        name="totalScore"
                        id="totalScore" />
                </form>
                <div
                    class="d-flex flex-column flex-sm-row justify-content-between align-items-center">
                    <a href="#" id="prev-button" class="quiz-button"><i class="bi bi-arrow-left"></i></a>
                    <div
                        id="pagination"
                        class="pagination d-flex flex-row justify-content-center page-link shadow"></div>
                    <a href="#" id="next-button" class="quiz-button"><i class="bi bi-arrow-right"></i></a>
                </div>
                <button type="button" class="w-100 bg-info shadow border border-3 border-white d-block py-2 rounded text-white mt-3" data-bs-toggle="modal" data-bs-target="#submitQuiz">Submit Quiz</button>
            </div>
        </div>
    </div>
    <!--Submit Quiz Modal -->
    <div class="modal fade" id="submitQuiz" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Confirmation</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Are you sure you want to submit?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger py-2" data-bs-dismiss="modal">Close</button>
                    <button id="submit" class="py-2 px-3 bg-info  border border-3 border-white rounded-2 text-white">Confirm</button>
                </div>
            </div>
        </div>
    </div>
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
                        src="../../../images/JKT-logo.jpg"
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
    <script src="2024S_IP.js"></script>
    <script src="../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../../../login.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const timerDisplay = document.getElementById("timer"); // Timer element
            let totalSeconds = 2.5 * 60 * 60; // 2.5 hours in seconds

            // Function to update the timer display
            function updateTimerDisplay() {
                const hours = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = totalSeconds % 60;

                // Update the timer element
                timerDisplay.textContent = `${hours.toString().padStart(2, "0")}:${minutes
             .toString()
             .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            }

            // Function to trigger the red color and twinkle effect
            function triggerRedTwinkleEffect() {
                // Change the timer color to red
                timerDisplay.style.color = "red";

                // Add twinkling effect
                timerDisplay.classList.add("twinkle");
            }

            // Start the timer
            function startTimer() {
                const timerInterval = setInterval(() => {
                    if (totalSeconds > 0) {
                        totalSeconds--;
                        updateTimerDisplay();

                        // Check if 1/4 of the time has passed (900 seconds)
                        if (totalSeconds === 900) {
                            triggerRedTwinkleEffect();
                        }
                    } else {
                        clearInterval(timerInterval);
                        alert("Time's up! Submitting quiz.");
                        document.getElementById("submit").click(); // Automatically submit quiz
                    }
                }, 1000); // Update every second
            }

            // Initialize the display and start the timer
            updateTimerDisplay();
            startTimer();
        });
    </script>


</body>

</html>