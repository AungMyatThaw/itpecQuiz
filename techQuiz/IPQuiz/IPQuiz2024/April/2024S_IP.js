const quizData = [
    {
        question: "Sound signals are digitized. Sampling is performed at Time 1 through Time 5 in the figure below, and four-level quantization is performed; in other words, the levels closest to the sampling point are selected. After that, two-bit encoding is performed. The result is “11 01 00 10 11”. When digitization is performed in the same way, which of the following figures represents the sound signal that results in “01 00 10 11 01”?",
        image: "img/Q(1).png",
        options: ["img/Q(1)_a.png", "img/Q(1)_b.png", "img/Q(1)_c.png", "img/Q(1)_d.png"],
        answer: "img/Q(1)_b.png"
    },
    {
        question: "Which of the following is the logical operation that is equivalent to the truth table below?",
        image: "img/Q(2).png",
        options: ["a) AND", "b) NOT 0", "c) OR", "d) XOR "],
        answer: "a) AND"
    },
    {
        question: "Which of the following is a standard encoding system that is widely used for handling multilingual text and symbols around the world as a single character set?",
        options: ["a) ASCII", "b) EBCDIC", "c) EUC", "d) Unicode"],
        answer: "d) Unicode"
    },
    {
        question: " When a chairperson and a secretary are selected from three (3) candidates with a method that allows dual roles, there are three (3) ways for the selection of a single chairperson and three (3) ways for the selection of a secretary, so in total, there are nine (9) combinations for the selection of a chairperson and a secretary. When a chairperson and a secretary are selected from five (5) candidates with a method that allows dual roles, how many combinations for the selection are there? ",
        options: ["a) 5", "b) 10", "c) 20", "d) 25"],
        answer: "d) 25"
    },
    {
        question: "The function calGrade receives the student’s score and returns the grade. The score is an integer. If the score is greater than or equal to 80, the function calGrade returns “A”; if the score is between 65 and 79, it returns “B”; between 50 and 64, it returns “C”; and otherwise, it returns “Fail.” Which of the following is an appropriate piece of code to be inserted in _______ in the program?",
        image: "img/Q(5).png",
        options: ["a) score ≥ 65","b) score ≥ 65 or score ≤ 79","c) score ≤ 65 and score ≥ 79","d) score ≤ 79"],
        answer: "a) score ≥ 65",
    },
    {
        question: "The procedure described below is sequentially performed for two (2) variables x and y, starting with step (1). When the procedure is completed, what is the resulting value of x?",
        image: "img/Q(6).png",
        options: ["a) 4", "b) 5", "c) 7", "d) 8"],
        answer: "b) 5"
    },
    {
        question: "There exist four (4) states numbered 1 through 4. The four (4) states are connected as shown in the figure below, and the state transition occurs in a clockwise or counter-clockwise direction. ",
        image: "img/Q(7).png",
        options: ["a) 1", "b) 2", "c) 3", "d) 4"],
        answer: "d) 4"
    },
    {
        question: "There is a device that stacks products from the bottom to the top, and removes the products sequentially from the top. There are only two (2) operations for this device.",
        image: "img/Q(8).png",
        options: ["a) A, B, C ", "b) B, A, C ", "c) C, A, B ", "d) C, B, A"],
        answer: "c) C, A, B "
    },
    {
        question: "The program performs circular left shifting on the array elements. For example, after circular left shifting, the initial array {1, 2, 3, 4, 5} becomes {2, 3, 4, 5, 1}. Which of the following is an appropriate combination of pieces of code to be inserted in ___A___ and ___B___ in the program?",
        image: "img/Q(9).png",
        options: ["a)", "b)", "c)", "d)"],
        answer: "d)"
    },
    {
        question: " Which of the following is the unique value that is sequentially assigned to a memory location in order to identify the location of instructions or data stored in the main memory of a computer?",
        options: ["a) Address", "b) Counter", "c) Index ", "d) Pointer "],
        answer: "a) Address"
    },
    {
        question: "Which of the following is an appropriate explanation of HDMI?",
        options: [
            "a) It is an interface for an AV device that handles the input and output of video, audio, and control signals through a single cable.", 
            "b) It is an interface that makes use of the infrared rays used in the exchange of information between cell phones.", 
            "c) It is a serial interface that connects an external hard disk or such other devices through a cable.", 
            "d) It is a wireless interface that makes use of radio waves and can perform communication even when there is a slight shielding."
        ],
        answer: "a) It is an interface for an AV device that handles the input and output of video, audio, and control signals through a single cable."
    },
    {
        question: "Which of the following is an appropriate explanation of GPU? ",
        options: [
            "a) It is an index that shows the throughput of a CPU in terms of how many billions of instructions it can execute per second. ", 
            "b) It is a frequency signal that synchronizes the arithmetic processing of CPUs.", 
            "c) It is a storage unit that is placed between a CPU and a main memory, and has a higher reading and writing speed than the main memory.", 
            "d) It is a processing unit that is used instead of a CPU to accelerate processing such as image processing for 3D graphics."],
        answer: "d) It is a processing unit that is used instead of a CPU to accelerate processing such as image processing for 3D graphics."
    },
    {
        question: " If a process from when a PC is powered on to when it becomes ready to use is divided into four (4) stages, which of the following is the stage that is performed first? ",
        options: ["a) Loading a BIOS" , "b) Loading an OS ", "c) Loading resident application software such as antivirus software", "d) Loading device drivers"],
        answer: "a) Loading a BIOS"
    },
    {
        question: "Which of the following is an appropriate description concerning the reliability of a system or a device? ",
        options: [
            "a) Controlling a system in a safe state in order to minimize damage when a fault occurs in a device is called foolproof. ", 
            "b) Reducing the probability of occurrence of a fault in a device by using high-quality and high-reliability parts and elements is called fail-safe. ", 
            "c) Enabling continuation of system processing when a fault occurs in a system due to an error is called fault tolerance.", 
            "d) Taking measures in the design stage so that humans do not make mistakes in system operation, or no faults or failures occur even if they make mistakes is called fail soft."],
        answer: "c) Enabling continuation of system processing when a fault occurs in a system due to an error is called fault tolerance."
    },
    {
        question: "Among the costs below concerning a sales management system, which of the following is the list that contains all costs that are included in TCO? ",
        image: "img/Q(15).png",
        options: ["a) (i), (ii) ", "b) (i), (iv) ", "c) (ii), (iii) ", "d) (iii), (iv) "],
        answer: "d) (iii), (iv) "
    },
    {
        question: "In a web service and other services, in order to increase reliability and process a large volume of accesses from users, which of the following is a technique that links multiple computers and makes them work as if they were a single computer?",
        options: ["a) Clustering ", "b) Spooling ", "c) Buffering", "d) Mirroring "],
        answer: "a) Clustering "
    },
    {
        question: "In a file system with the hierarchy structure shown in the Figure, when “..\..\DIRB\Fn.txt” is specified from the directory marked with an * (the current directory), which of the following is the file that is referenced? Here, in the Figure show the directory name, and the reference method for a file is as below",
        image: "img/Q(17).png",
        options: ["a) Fn.txt at (1) ", "b) Fn.txt at (2)", "c) Fn.txt at (3)", "d) Fn.txt at (4)"],
        answer: "d) Fn.txt at (4)"
    },
    {
        question: " Which of the following is an appropriate description concerning OSS (Open Source Software)? ",
        options: [
            "a) Use in industries that require high quality, such as the medical industry, is prohibited.", 
            "b) Various types of license exist, and the terms of license must be observed when the software is used. ", 
            "c) If the source code is released on the Internet, the software can be called OSS even if redistribution is prohibited. ", 
            "d) The software must not be sold for a fee. "
        ],
        answer: "b) Various types of license exist, and the terms of license must be observed when the software is used. "
    },
    {
        question: "Which of the following is a term that means the validation of a software license by using the product ID and the user’s hardware information, in order to prevent unauthorized use of the software? ",
        options: [
            "a) Activation ", 
            "b) Cloud computing ", 
            "c) Streaming ", 
            "d) Fragmentation "],
        answer: "a) Activation "
    },
    {
        question: " Sales data by month for each branch is evaluated. In the “Evaluation” field for each branch by month, if the amount of sales at the branch is below the average sales amount of branches A through C for the month, the symbol “X” is to be displayed, and if the amount is above or equal to the average, the symbol “O” is to be displayed. Which of the following is an appropriate expression to be entered in cell C3? Here, the expression that is entered in cell C3 is copied and used in cell D3, cell E3, cells C5 through E5, and cells C7 through E7.",
        image: "img/Q(20).png",
        options: [
            "a) IF($C2 < AVERAGE(C2 : E2) , 'O' , 'X') ", 
            "b) IF($C2 < AVERAGE(C2 : E2) , 'X' , 'O') ", 
            "c) IF(C2 < AVERAGE($C2 : $E2) , 'O' , 'X') ", 
            "d) IF(C2 < AVERAGE($C2 : $E2) , 'X' , 'O') "],
        answer: "d) IF(C2 < AVERAGE($C2 : $E2) , 'X' , 'O') "
    },
    {
        question: "Which of the following is an appropriate description about the function keys of a PC? ",
        options: [
            "a) They are the keys where specific functions are assigned for each application and OS.", 
            "b) They display a keyboard shape on a screen and enable input processing with software", 
            "c) They have a security role and are keys for performing encryption and decryption.", 
            "d) They are information to identify specific lines uniquely in a database. "],
        answer: "a) They are the keys where specific functions are assigned for each application and OS."
    },
    {
        question: " Which of the following is a technology that is also used in measures against tampering of software in IoT devices and verifies the digital signature of the OS, firmware, or other such software when it is started, and only executes the software if the verification is successful?",
        options: ["a) GPU ", "b) RAID ", "c) Secure boot ", "d) Reboot"],
        answer: "c) Secure boot "
    },
    {
        question: " Which of the following is the appropriate description concerning a smart meter that is an IoT device?",
        options: [
            "a) It is embedded in a car navigation system or a game controller, and measures the extent of change in speed.", 
            "b) It is installed in a house or other such place and automatically measures consumption of electricity and gas, and sends the data to the supplier by using a cellular network, etc. ", 
            "c) It deletes the data that is stored on a mobile terminal such as a smartphone or mobile PC from a remote location via a network. ", 
            "d) In addition to counting the number of steps, it identifies the walking route, detects the walking speed and height variations in the route, and calculates the energy consumed."],
        answer: "b) It is installed in a house or other such place and automatically measures consumption of electricity and gas, and sends the data to the supplier by using a cellular network, etc. "
    },
    {
        question: "Which of the following is the appropriate reason for using a style sheet in the creation of a website?",
        options: [
            "a) The data between the web server and the web browser can be exchanged in a safe manner.", 
            "b) The users can be notified of update to the website.", 
            "c) 192.168.10.511c) The users of the website can be identified.",
            "d) The appearance of multiple web pages can be easily unified."
        ],
        answer: "d) The appearance of multiple web pages can be easily unified."
    },
    {
        question: "A technique that represents a figure with pixels is considered. In the case of Fig. 1, when each row of the figure of 3×3 pixels is read on a pixel-by-pixel basis from upper left to right and B and W are respectively written for black and white, the result is “BWBBBBBWB” (9 characters). Then, when a succession of n characters of “B”s or “W”s is represented as “Bn” or “Wn” respectively (where n is an integer of 2 or greater), Fig. 1 can be represented as “BWB5WB” (6 characters) and the compression ratio in this case is defined as 6/9 or 66.7%. When the figure of 5 × 5 pixels in Fig. 2 is represented by using the same technique, what is the compression ratio in percentage?",
        image: "img/Q(25).png",
        options: ["a) 48.0", "b) 52.0 ", "c) 76.0", "d) 88.0 "],
        answer: "b) 52.0 "
    },
    {
        question: "There are “Sales”, “Customer” and “Product” tables in a relational database. Among lists A through C, which of the following contains all and only the lists that can be created from the data in these tables? Here, a solid underlined part represents a primary key, and a dashed underlined column represents a foreign key. ",
        image: "img/Q(26).png",
        options: ["a) A, B ", "b) A, B, C ", "c) A, C ", "d) B, C "],
        answer: "c) A, C "
    },
    {
        question: "In the description below concerning the design process of a relational database, which of the following is an appropriate combination of terms to be inserted into blanks A through C? ",
        image: "img/Q(27).png",
        options: ["a)", "b)", "c)", "d)"],
        answer: "c)"
    },
    {
        question: "Which of the following is an appropriate combination of relational database manipulations I through III and relational operations?",
        image: "img/Q(28).png",
        options: ["a)", "b)", "c)", "d)"],
        answer: "c)"
    },
    {
        question: "Which of the following is the appropriate explanation of commit in transaction processing?",
        options: [
            "a) When a transaction attempts to update shared data, other transactions are blocked from updating this data", 
            "b) The update is confirmed in the database. It is used when a transaction is processed normally.", 
            "c) The database is returned to the status prior to the start of a transaction. It is used when the transaction is not processed normally for some reason. ", 
            "d) Multiple tables are made into one (1) table by using the columns as keys that relate the tables to each other"
        ],
        answer: "b) The update is confirmed in the database. It is used when a transaction is processed normally."
    },
    {
        question: " When an e-mail is sent to multiple recipients, there are cases that no recipient of the e-mail should know the e-mail addresses of other recipients. In such cases, which of the following is an appropriate place where the e-mail addresses of the multiple recipients are entered?",
        options: ["a) Bcc ", "b) Cc ", "c) To ", "d) Both To and Bcc"],
        answer: "a) Bcc "
    },
    {
        question: "Which of the following is <u>not an appropriate</u> description of online storage? ",
        options: [
            "a) It can be used not only from a computer, but also from a smartphone or a tablet, if the device is connected to the Internet.",
            "b) There is a free service that can be used with limited capacity and functionalities.",
            "c) There is a service that allows multiple registered users to share and edit the same file.",
            "d) If the capacity of the auxiliary storage unit built into the user’s computer or tablet is increased, the capacity of online storage will also increase automatically."
        ],
        answer: "d) If the capacity of the auxiliary storage unit built into the user’s computer or tablet is increased, the capacity of online storage will also increase automatically."
    },
    {
        question: "Which of the following is an example of damage incurred by the theft of cookies by a cross-site scripting attack or other attack? ",
        options: ["a) The PC becomes infected by a virus.", "b) The files on the PC are sent to an outside destination.", "c) Web service accounts are hijacked.","d) Intrusion into the network takes place over the wireless LAN."],
        answer: "c) Web service accounts are hijacked."
    },
    {
        question: " When a web page with URL “http://srv01.itpec.org/abc.html” is accessed on the Internet, what does “srv01” in the URL stand for? ",
        options: ["a) The fact that “itpec.org” is a web service", "b) The file name of the web page where an access is requested", "c) The fact that HTTP or HTTPS can be specified as a communication protocol", "d) The host name of a computer that belongs to the domain name “itpec.org” "],
        answer: "d) The host name of a computer that belongs to the domain name “itpec.org” "
    },
    {
        question: "A large number of IP addresses are required in order to connect a massive number of IoT devices to the Internet, so the decision was made to use the Internet Protocol with IP addresses that have a length of 128 bits. Which of the following is this protocol?",
        options: ["a) IPv4", "b) IPv5 ", "c) IPv6 ", "d) IPv8 "],
        answer: "c) IPv6 "
    },
    {
        question: "Which of the following is a definition of a zero-day attack that is a threat to information security? ",
        options: [
            "a) It stops the target system of the attack within 24 hours from the start of the attack.", 
            "b) It causes the onset immediately after the infection by using a virus without an incubation period.", 
            "c) It exploits vulnerability before any countermeasure against the software vulnerability is made public.", 
            "d) It immediately obtains confidential information from a third party through social engineering or eavesdropping"],
        answer: "c) It exploits vulnerability before any countermeasure against the software vulnerability is made public."
    },
    {
        question: "Which of the following is an appropriate action for the secure use of a smartphone?",
        options: [
            "a) Using it without updating OS and using the same version of the OS as at the time of purchase", 
            "b) Enhancing the functions by making alterations such as jailbreak", 
            "c) Setting up a feature that locks the screen with a password ", 
            "d) Downloading applications that are considered to be useful from any web site"
        ],
        answer: "c) Setting up a feature that locks the screen with a password "
    },
    {
        question: " Security risk treatment in ISMS includes risk transfer, risk avoidance, risk acceptance, and risk reduction. Which of the following is an example of risk avoidance? ",  
        options: [
            "a) A security measure was taken, which lowered the possibility of problems arising", 
            "b) The company took out insurance in case a problem arises and causes damage. ", 
            "c) The risk was confirmed to be small, and it was decided that damage would be borne by the company when a problem arises. ", 
            "d) The company withdrew from the services that carried high risk. "],
        answer: "d) The company withdrew from the services that carried high risk. "
    },
    {
        question: " Which of the following is an appropriate description of the beginning of a URL indicating that TLS is used for communication between a web browser and a web server? ",  
        options: ["a) http:// ", "b) https:// ", "c) shttp:// ", "d) ssl://"],
        answer: "b) https:// "
    },
    {
        question: "Which of the following is a technique that is used to detect that the received data has been tampered with?",  
        options: ["a) Compression ", "b) Digital signature ", "c) Password authentication ", "d) Filtering "],
        answer: "b) Digital signature "
    },
    {
        question: "Among I through III below, which of the following lists all and only the appropriate measures for preventing a PC from getting infected with viruses? ",  
        image: "img/Q(40).png",
        options: ["a) I ", "b) I, II", "c) I, III ", "d) II, III"],
        answer: "c) I, III "
    },
    {
        question: "Which of the following is an appropriate example of phishing?",  
        options: [
            "a) An attacker’s act of sending a command via network to a virus-infected PC and having it execute an illegal program", 
            "b) Sending an e-mail that pretends to be from a financial institution, directing a user to a false web site, and acquiring a password ", 
            "c) Identifying a password by using a dictionary data that enumerates strings that are likely to be used as a password ", 
            "d) Sending a large number of packets from multiple computers to a target server and disabling the function of the server "
        ],
        answer: "b) Sending an e-mail that pretends to be from a financial institution, directing a user to a false web site, and acquiring a password "
    },
    {
        question: " Which of the following is an appropriate description concerning behavioral detection technology for protecting systems from unknown threats such as zero-day attacks?",  
        options: [
            "a) It detects that a PC has not been used for a certain period of time, darkens the screen automatically, and displays a changing image.", 
            "b) It suspends use of an account when it detects that an incorrect password is entered on a web site more than a set number of times. ", 
            "c) It continually monitors the activity of programs and stops any program with any suspicious activity, such as unusual communication to an outside destination. ", 
            "d) It changes users’ input on a web site into safe character strings when it detects any harmful character string that could cause malfunction."],
        answer: "c) It continually monitors the activity of programs and stops any program with any suspicious activity, such as unusual communication to an outside destination. "
    },
    {
        question: "Which of the following is appropriate as the characteristic of single sign-on?",  
        options: [
            "a) It is an effective countermeasure for information leakage because data is processed and stored on a server side, and data does not remain on devices. ",
            "b) It implements high availability because when the data is saved, it is automatically distributed and stored on multiple disks. ", 
            "c) It implements high confidentiality because it employs authentication that uses fingerprint and iris in addition to a password. ", 
            "d) It implements high convenience because once a user is authenticated, he or she is allowed to use multiple services without any more authentication. "
            ],
        answer: "d) It implements high convenience because once a user is authenticated, he or she is allowed to use multiple services without any more authentication. "
    },
    {
        question: " Among the descriptions from A through C, which of the following is the list that contains all and only appropriate features of VPN?",  
        image: "img/Q(44).png",
        options: ["a) A", "b) A, C", "c) B", "d) C"],
        answer: "c) B"
    },
    {
        question: "When an attacker makes an unauthorized intrusion into a computer, the attacker sometimes changes a program or settings in the computer in order to make further intrusions into the computer easier. Which of the following is the most appropriate term to express the method used by the attacker for further intrusions into the computer?",  
        options: ["a) Tapping ", "b) Backdoor", "c) Phishing ", "d) Port scan "],
        answer: "b) Backdoor"
    },
    {
        question: "In order to achieve a non-stop system, which of the following is an appropriate item to be considered during the design of the system architecture? ",  
        options: ["a) Partitioning of software into components", "b) Encryption of data", "c) Reduction in power consumption of hardware", "d) Dual redundancy of hardware "],
        answer: "d) Dual redundancy of hardware "
    },
    {
        question: "A detailed design document of software is created as an output of software detailed design. Which of the following is the person who takes charge of the next process of development upon receipt of this output? ",  
        options: ["a) System auditor ", "b) System operator in-charge", "c) System user ", "d) Programmer "],
        answer: "d) Programmer "
    },
    {
        question: "Mr. A, a developer, is analyzing and verifying the internal structure of a program in order to determine whether input data is processed as intended. Which of the following is the test that Mr. A is currently conducting? ",  
        options: ["a) System test ", "b) Top-down test", "c) Black box test ", "d) White box test"],
        answer: "d) White box test"
    },
    {
        question: " Among the descriptions A through D concerning software installation, which of the following lists all and only the appropriate descriptions? ",  
        image: "img/Q(49).png",
        options: ["a) A, C ", "b) B, C, D ", "c) B, D", "d) D"],
        answer: "d) D"
    },
    {
        question: " Which of the following is the most appropriate term expressing initiatives to improve the services where the development side and the operations side of the system cooperate to proactively automate operations of the system and transition to the new production system, and release new functions? ",  
        options: ["a) DevOps ", "b) RAD", "c) Object-oriented development ", "d) Test-driven development "],
        answer: "a) DevOps "
    },
    {
        question: "Which of the following is an appropriate description concerning project scope management? ",  
        options: [
            "a) It defines and manages deliverables such as the products and services to be created by a project, as well as the activities necessary for their completion. ", 
            "b) It manages the activity path that requires the longest time through the entire project.", 
            "c) It manages the events that may be advantageous or disadvantageous for the results of the project", 
            "d) It coordinates the stakeholders of the implementation and results of the project."],
        answer: "a) It defines and manages deliverables such as the products and services to be created by a project, as well as the activities necessary for their completion. "
    },
    {
        question: "Which of the following is an appropriate description concerning the water fall model known as one of software development models? ",  
        options: [
            "a) It is a technique in object-oriented development for making improvements through trial and error by repeatedly going back and forth between design and programming. ", 
            "b) It is a technique for making improvements by repeating the development process for each subsystem while responding to requests from users.", 
            "c) It is a technique that divides the processes of system development into stages, and based upon the output of previous processes, performs later processes in order.", 
            "d) It is a technique that creates a prototype at an early stage of system development, and defines requirements and specifications with input from user comments."],
        answer: "c) It is a technique that divides the processes of system development into stages, and based upon the output of previous processes, performs later processes in order."
    },
    {
        question: "Which of the following is an appropriate metrics for program quality in a software development project? ",  
        options: ["a) Budget at planning", "b) Return on investment ", "c) Delivery date", "d) Number of identified bugs "],
        answer: "d) Number of identified bugs "
    },
    {
        question: "When the outsourced development project of a system has passed beyond its halfway mark, there is a request from the outsourcer for adding a function to the system. Which of the following is the most appropriate action of the project manager? ",  
        options: [
            "a) Accepting the request and securing the budget and staff members", 
            "b) Declining the request by explaining that changes after halfway mark are generally not accepted", 
            "c) Taking into account the impact on the cost and schedule, and following the procedure of change management ", 
            "d) Quickly updating the baseline of scope since only the project scope will be affected "
        ],
        answer: "c) Taking into account the impact on the cost and schedule, and following the procedure of change management "
    },
    {
        question: "Which of the following is the appropriate explanation of a master schedule in a system development project where processes from requirements definition to installation are performed? ",  
        options: [
            "a) A schedule that describes in detail the activities of one (1) week ", 
            "b) A schedule that describes the activities of one (1) day, the start and end time of the activities, and the persons in charge ", 
            "c) A schedule that describes in detail the activities of the main processes", 
            "d) A schedule that aggregates the main deliverables and activities of the entire project"],
        answer: "d) A schedule that aggregates the main deliverables and activities of the entire project"
    },
    {
        question: "Which of the following is the appropriate description concerning WBS created in a project?",  
        options: [
            "a) A WBS defines the details of activities to be implemented in a project and the deliverables, and can therefore be used as a basis for estimating the number of person-days. ", 
            "b) Activities outside the scope of the project are also examined and included in the WBS. ", 
            "c) The WBS breaks down the deliverables and the details of activities up to the same hierarchy in all projects.", 
            "d) When a project member performs similar activities within the scope, the activities need not be described in the WBS."],
        answer: "a) A WBS defines the details of activities to be implemented in a project and the deliverables, and can therefore be used as a basis for estimating the number of person-days. "
    },
    {
        question: " Company A orders the development of a system to Company B and starts a system development project. Among (i) through (iv) below who are concerned with the project, which of the following lists all and only the stakeholders of the project? ",  
        image: "img/Q(57).png",
        options: ["a) (i), (ii), (iv) ", "b) (i), (ii), (iii), (iv)", "c) (ii), (iii), (iv)", "d) (ii), (iv) "],
        answer: "b) (i), (ii), (iii), (iv)"
    },
    {    
        question: "Which of the following is an appropriate description concerning the IT service management activity? ",  
        options: [
            "a) It defines the maturity level of a process in a system development organization on a level of one (1) to five (5), and supports improvement.", 
            "b) It defines roles and responsibilities and creates a procurement plan for staff members in order to complete a system development project. ", 
            "c) It defines an index concerning system availability, acquires the availability record, and performs planning, measurements, and improvement in order to achieve an objective. ", 
            "d) It clarifies the deliverables that are required for a new system to be developed and the activities that are required for the creation of the deliverables. "],
        answer:  "c) It defines an index concerning system availability, acquires the availability record, and performs planning, measurements, and improvement in order to achieve an objective. "
    },
    {    
        question: "Which of the following activities aims at the maintenance and improvement of the service level through monitoring and reviewing the service status in order to implement the terms of agreement of an SLA? ",  
        options: ["a) CSR ", "b) ERP", "c) SLM", "d) SWOT"],
        answer: "c) SLM"
    },
    {    
        question: "Which of the following is an appropriate measure of facility management that maintains and protects facilities and equipment of information systems? ",  
        options: [
            "a) Reviewing the fuel replenishment plan in order to maintain the appropriate duration that power can be generated with a private power generation system", 
            "b) Introducing asset management software in order to manage all the company’s software centrally ", 
            "c) Standardizing how to set a screen saver in order to prevent unauthorized use of the PCs", 
            "d) Reviewing the network firewall settings in order to enhance the prevention of unauthorized network access to the information systems"
        ],
        answer: "a) Reviewing the fuel replenishment plan in order to maintain the appropriate duration that power can be generated with a private power generation system"
    },
    {    
        question: "Which of the following is the most appropriate example concerning a chatbot that uses AI?",  
        options: [
            "a) By connecting everything over the Internet, the switch of the air conditioner in one’s house can be turned on by a smart device from the outside of the house.", 
            "b) By recognizing and learning a large number of images of various animals, a computer can differentiate between the images of a dog and a cat.", 
            "c) If questions on how to use a product are entered, a person who has detailed knowledge submits a reply or advise.", 
            "d) If a user enters the desired functions of a product on a sales site of products, the computer introduces recommended products in an interactive manner. "
        ],
        answer: "d) If a user enters the desired functions of a product on a sales site of products, the computer introduces recommended products in an interactive manner. "
    },
    {    
        question: "In order to improve the value of an IT service to be provided, it is necessary to consider the balance of three (3) items, namely the offer price of the service, the functions of the service, that is, what the service can offer, and a guarantee of the service with maintained availability. Which of the following is a description that corresponds to guarantee of the service of an instant messenger?",  
        options: [
            "a) The service is usable for 24 hours a day, 365 days a year. ", 
            "b) The service is linkable with other software such as games.", 
            "c) The service is usable for free.", 
            "d) The service is usable with icons created by one’s own self rather than characters."
        ],
        answer:"a) The service is usable for 24 hours a day, 365 days a year. "
    },
    {    
        question: " Which of the following is an appropriate description of the targets of a system audit? ",  
        options: [
            "a) Information systems used in private companies are not targeted.", 
            "b) Information systems that do not make use of the Internet are not targeted. ", 
            "c) Activities other than accounting activities are not targeted.", 
            "d) Activities that do not make use of information systems are not targeted. "
        ],
        answer:"d) Activities that do not make use of information systems are not targeted. "
    },
    {    
        question: "  Which of the following is the term for the assignment of employees’ role that applies mutual checks among employees for the purpose of reducing the risk of misconduct or errors in work from the standpoint of internal control?  ",  
        options: [
            "a) Delegation of authority", 
            "b) Segregation of duties", 
            "c) Monitoring ", 
            "d) Diversification of risk "
        ],
        answer:"b) Segregation of duties"
    },
    {    
        question: "  The information system department implements the development and operation of the order entry system and the accounting system. The user of the order entry system is the sales department and the user of the accounting system is the accounting department. Which of the following is the appropriate description concerning internal control of financial reports? ",  
        options: [
            "a) Internal control is a matter of the accounting system, and therefore, the sales department does not participate in internal control, but the accounting department and the information system department do. ", 
            "b) Internal control is a matter concerning accounting activities, and therefore, only the accounting department participates in internal control.", 
            "c) Internal control is a matter concerning activities that impact external reports such as financial statements, and therefore, the sales department, the accounting department and the information system department participate in internal control.", 
            "d) Internal control is a matter concerning activities that involve manual operation, and therefore, the information system department does not participate in internal control, but the sales department and the accounting department do."
        ],
        answer:"c) Internal control is a matter concerning activities that impact external reports such as financial statements, and therefore, the sales department, the accounting department and the information system department participate in internal control."
    },
    {    
        question: "  Which of the following is the scope that the CFO, one of the positions involved in corporate management, bears responsibility for?",  
        options: [
            "a) Technology", 
            "b) Finance ", 
            "c) Information", 
            "d) Personnel"
        ],
        answer:"b) Finance "
    },
    {    
        question: " There are activities A, B, and C that use machines X and Y, and it is required in each activity that the machines are used in the sequence of machine X, machine Y. When the use times of machines X and Y in each activity are as shown in the table below, which of the following is the sequence of the activities where the total time required to complete the three (3) activities becomes minimum? Here, machines X and Y can be used in parallel as shown in the figure below, but two (2) or more tasks cannot be performed simultaneously with any machine and the sequence of activities must be the same for both machines. ",  
        image:"img/Q(67).png",
        options: [
            "a) A → B → C", 
            "b) A → C → B", 
            "c) C → A → B", 
            "d) C → B → A"
        ],
        answer:"c) C → A → B"
    },
    {    
        question: "The table below is a part of the ingredients table of a steamed meat dumplings lunch box. How many grams of meat is necessary to prepare 100 steamed meat dumplings lunch boxes? Here, the steamed meat dumplings lunch boxes do not contain any dish that uses meat other than the steamed meat dumplings, and there is no loss of ingredients in the preparing process. ",  
        image:"img/Q(68).png",
        options: [
            "a) 1,200", 
            "b) 3,000 ", 
            "c) 6,000 ", 
            "d) 30,000 "
        ],
        answer:"c) 6,000 "
    },
    {    
        question: "  Which of the following represents the “E” in ROE that is an index for the measurement of a company’s profitability?",  
        options: [
            "a) Earnings", 
            "b) Employee", 
            "c) Enterprise ", 
            "d) Equity"
        ],
        answer:"d) Equity"
    },
    {    
        question: "  Which of the following is the most appropriate terminology for referring to a method that uses AI, IoT, and other such IT for personnel-related work such as personnel evaluations and recruitment with aims including the improvement of a company’s personnel functions and achieving reform in working styles?",  
        options: [
            "a) e-Learning", 
            "b) Fintech ", 
            "c) HR Tech ", 
            "d) Competency "
        ],
        answer:"c) HR Tech "
    },
    {    
        question: " Which of the following is most appropriate as the person with responsibility for an information systems strategy that is created on the basis of a business strategy? ",  
        options: [
            "a) The CIO ", 
            "b) The head of the user department of mission-critical systems ", 
            "c) The project manager for system development ", 
            "d) The head of system planning "
        ],
        answer:"a) The CIO "
    },
    {    
        question:" Which of the following is an index that indicates the efficiency of capital utilization?",  
        options: [
            "a) Ratio of operating profit to net sales", 
            "b) Equity to total assets", 
            "c) Total capital turnover ", 
            "d) Break-even point ratio"
        ],
        answer:"c) Total capital turnover "
    },
    {    
        question:" Which of the following is an example of a Non-Disclosure Agreement (NDA)?",  
        options: [
            "a) A contract specifying the service content to be provided, which is agreed between the service provider and the customer before the provision of the IT service", 
            "b) A contract specifying that the vendor of computer equipment bears the responsibility of transferring the property right, and that the buyer bears the responsibility of paying the charges", 
            "c) A contract specifying the obligation of the outsourcer and outsourcee to maintain confidentiality of the secret information of a party that becomes known to the other party during system development", 
            "d) A contract specifying that an outsourcee to whom the installation of a general-purpose software package has been outsourced performs the task at the outsourcee’s own discretion and responsibility, and receives payment upon the completion of the task"
        ],
        answer:"c) A contract specifying the obligation of the outsourcer and outsourcee to maintain confidentiality of the secret information of a party that becomes known to the other party during system development"
    },
    {    
        question:"  From the viewpoint of corporate governance, which of the following is the most appropriate method of strengthening the functions of monitoring and supervising the decision-making process of the management? ",  
        options: [
            "a) Installing a camera for monitoring the entry and exit of the president’s office ", 
            "b) Periodically requesting a private detective to investigate the conduct of the management ", 
            "c) Appointing some outside directors ", 
            "d) Employing law school graduates as members of the internal audit department"
        ],
        answer:"c) Appointing some outside directors "
    },
    {    
        question:" Which of the following is an international standard for environmental management systems developed by ISO?",  
        options: [
            "a) ISO 9000", 
            "b) ISO 14001 ", 
            "c) ISO/IEC 20000 ", 
            "d) ISO/IEC 27000"
        ],
        answer:"b) ISO 14001 "
    },
    {    
        question:" Which of the following examples of the sending of e-mail is <u>inappropriate</u> from the standpoint of the protection of personal information? ",  
        options: [
            "a) In responding to an e-mail asking questions about a product, you placed the e-mail addresses of multiple customers in the “CC” field as you want these customers to read the response. ", 
            "b) You created one (1) e-mail message for each of your top 10 customers with the largest amount of mail-order purchases, in order to inform each customer of a corresponding prize. ", 
            "c) You sent an e-mail message with information on an alumni meeting, and addressed the message to the e-mail addresses of all members listed in the alumni association directory that is distributed to all members. ", 
            "d) When you were arranging a special spring exhibition, you placed the e-mail addresses of selected members in the “BCC” field of an e-mail message and sent the message soliciting exhibits."
        ],
        answer: "a) In responding to an e-mail asking questions about a product, you placed the e-mail addresses of multiple customers in the “CC” field as you want these customers to read the response. "
    },
    {    
        question:"  Which of the following is the most appropriate as an example of an enhancement activity for compliance?",  
        options: [
            "a) Expansion of a program to support the community service activities of employees ", 
            "b) Education for employees concerning laws and rules that must be followed", 
            "c) Acquisition of another company’s business for swift business deployment", 
            "d) Withdrawal from businesses where it is difficult to make profit "
        ],
        answer:"b) Education for employees concerning laws and rules that must be followed"
    },
    {    
        question:"  Which of the following is the appropriate description concerning an international organization for standardization?",  
        options: [
            "a) ICANN is an international organization for standardization in the fields of industry, science, and technology. ", 
            "b) IEC is an international organization for standardization in the field of e-commerce.", 
            "c) IEEE is an international organization for standardization in the field of accounting.", 
            "d) ITU is an international organization for standardization in the field of telecommunications."
        ],
        answer:"d) ITU is an international organization for standardization in the field of telecommunications."
    },
    {    
        question:" In product portfolio management, where products and business to be analyzed are classified into cash cows, stars, dogs, and question marks, which of the following is the appropriate combination of indexes used in the vertical axis and horizontal axis? ",  
        image: "img/Q(79).png",
        options: [
            "a) A, B ", 
            "b) A, C ", 
            "c) B, D", 
            "d) C, D"
        ],
        answer:"d) C, D"
    },
    {    
        question:" In Company X, the experience and know-how of employees who have managed drainage treatment in the facility over a long period of time is documented and accumulated, and the accumulated experience and know-how is utilized on daily drainage treatment activities and design of new processing equipment. Which of the following is appropriate as a concept of this example? ",  
        options: [
            "a) ERP", 
            "b) SFA ", 
            "c) Supply chain management ", 
            "d) Knowledge management"
        ],
        answer:"d) Knowledge management"
    },
    {    
        question:"Which of the following information is necessary for CRM?",  
        options: [
            "a) Customer data and customer purchasing history", 
            "b) Blueprint data", 
            "c) Data of experts' knowledge ", 
            "d) Day and time of sales, shop, product sold, and quantity sold"
        ],
        answer:"a) Customer data and customer purchasing history"
    },
    {    
        question:"Which of the following is a technique that analyzes the value of a product or service through the relationship between functionality and cost, and enhances that value through reduction in cost and increase in functionality and quality?",  
        options: [
            "a) Supply chain management ", 
            "b) Knowledge management", 
            "c) Value engineering ", 
            "d) Reverse engineering"
        ],
        answer:"c) Value engineering "
    },
    {    
        question:"Which of the following is the appropriate explanation of benchmarking used for corporate management? ",  
        options: [
            "a) It refers to the promotion of continual improvement of business processes by applying the PDCA cycle.", 
            "b) It refers to the best case study for comparison and analysis when improvements are to be made.", 
            "c) It refers to the unique skills and technologies for securing superiority over competitors.", 
            "d) It refers to the measurement of the products and services of one’s company, and their comparison with other superior competitors. "
        ],
        answer:"d) It refers to the measurement of the products and services of one’s company, and their comparison with other superior competitors. "
    },
    {    
        question:" With the purpose of increasing the number of contracts concluded, salespersons in Company A’s sales department began an activity to make proposals for plans to customers. A key goal indicator (KGI) and key performance indicator (KPI) are to be set as indexes for achievement of sales activities. Which of the following is the most appropriate combination of KGI and KPI in this activity? ",  
        image: "img/Q(84).png",
        options: [
            "a)", 
            "b)", 
            "c)", 
            "d)"
        ],
        answer:"b)"
    },
    {    
        question:" Which of the following is an appropriate description of a “patent portfolio” that is important for establishing the patent strategy? ",  
        options: [
            "a) It is a compilation of patents owned and filed by a company to analyze their contribution to business, the synergy among them, and the expected fields of their applications. ", 
            "b) At the beginning of a technological innovation, patent applications tend to increase, but because of the emergence of dominant products in the market, there is a shift to process innovation, and patent applications decrease.", 
            "c) It is a matrix with the share of the products of one’s company and the growth rate of the market as the axes, showing the positioning of the company and its competitors in the market. ", 
            "d) Multiple patent holders mutually grant their patent licenses."
        ],
        answer:"a) It is a compilation of patents owned and filed by a company to analyze their contribution to business, the synergy among them, and the expected fields of their applications. "
    },
    {    
        question:" Which of the following is the situation where an improvement can be expected by installing an MRP (Material Requirements Planning) system? ",  
        options: [
            "a) Drawing information is managed using electronic files and hard copies, so the design change history cannot be accurately known.", 
            "b) Information concerning materials necessary for manufacturing and their required quantities is insufficient or incorrect, so production is adversely affected.", 
            "c) There are too many design change requests, so production efficiency does not increase. ", 
            "d) High-mix, low-volume production is adopted, so the cost of installing production equipment is increasing. "
        ],
        answer:"b) Information concerning materials necessary for manufacturing and their required quantities is insufficient or incorrect, so production is adversely affected."
    },
    {    
        question:" Which of the following is an appropriate explanation of a banner advertisement that is a form of Internet advertisement?",  
        options: [
            "a) When a website is being browsed, an advertisement from an advertiser is displayed in another new window.", 
            "b) When a web page is accessed from another page, a page with an advertisement is briefly shown before the accessed page is displayed.", 
            "c) When an advertisement image that is placed on part of a web page is clicked, an advertiser page is displayed.", 
            "d) When keywords are entered into a search site, an advertisement related to the keywords is displayed on the page showing the search results."
        ],
        answer:"c) When an advertisement image that is placed on part of a web page is clicked, an advertiser page is displayed."
    },
    {    
        question:" A company wishes to create digital files from paper documents and paper blueprints, and make these available company-wide. Which of the following is appropriate equipment to be used? ",  
        options: [
            "a) GPS receiver ", 
            "b) Scanner", 
            "c) Digitizer", 
            "d) Plotter"
        ],
        answer:"b) Scanner"
    },
    {    
        question:" Which of the following is an appropriate explanation of CAD? ",  
        options: [
            "a) It is a circuit that converts an analog signal into a digital signal.", 
            "b) It refers to the use of computers in the design of buildings and industrial products. ", 
            "c) It is an imaging element that converts light to an electrical signal.", 
            "d) It refers to the creation of a single piece of content by combining characters, images, audio, and other data. "
        ],
        answer:"b) It refers to the use of computers in the design of buildings and industrial products. "
    },
    {    
        question:" Which of the following is the most appropriate example of a use of a wearable device? ",  
        options: [
            "a) Using a PC or tablet computer, and receiving diagnosis from a doctor over a network", 
            "b) Acquiring blood pressure, body temperature, and other such measurement data with a smartwatch, and detecting abnormalities at an early stage ", 
            "c) Managing and sharing the computerized data of patient records from multiple hospitals in a cloud service", 
            "d) Installing a human presence sensor in a bed, and sending a notification if the sensor does not respond for a certain length of time"
        ],
        answer:"b) Acquiring blood pressure, body temperature, and other such measurement data with a smartwatch, and detecting abnormalities at an early stage "
    },
    {    
        question:"An EC site handles a wide range of user inquiries via chat with a mechanism where operators provide a response. It decides to use a new mechanism where software learns from the content of users’ past chats, infers an appropriate response from the flow of the conversation and provides an automatic response. Which of the following is the most appropriate technology that is used in the new mechanism? ",  
        options: [
            "a) AI", 
            "b) AR", 
            "c) CRM", 
            "d) ERP"
        ],
        answer:"a) AI"
    },
    {    
        question:" Which of the following is the most appropriate term to express the initiatives that are implemented by a financial institution or other such institution in order to prevent acts where funds obtained illegally are disguised as being obtained by legitimate means?",  
        options: [
            "a) Anti-money laundering (AML)", 
            "b) Insider trading regulations", 
            "c) Skimming ", 
            "d) Phishing "
        ],
        answer:"a) Anti-money laundering (AML)"
    },
    {    
        question:" Which of the following is an appropriate description concerning groupware?",  
        options: [
            "a) It is software that has an animation or audio function and is useful when making presentations effective by incorporating the output of spreadsheet software or database software. ", 
            "b) It is software that has functions, such as setting print layout or changing and editing texts, and is used for creating documents.", 
            "c) It is software that has functions, such as communication via e-mail and electronic bulletin boards, data sharing, and schedule management, and supports collaborative work. ", 
            "d) It is software that is used to enter data into cells of a worksheet, create tables, and tabulate data. "
        ],
        answer:"c) It is software that has functions, such as communication via e-mail and electronic bulletin boards, data sharing, and schedule management, and supports collaborative work. "
    },
    {    
        question:" Which of the following is a modeling technique that is used for analyzing business operations and system from the viewpoint of the flow of data which is exchanged between processes? ",  
        options: [
            "a) BPR ", 
            "b) DFD", 
            "c) MRP", 
            "d) WBS"
        ],
        answer:"b) DFD"
    },
    {    
        question:" Training on how to use a sales forecast system is planned for the persons in charge of business across the country. Which of the following is a merit that is obtained by using e-learning in training? ",  
        options: [
            "a) The person in charge of business can be directly lectured about the system from the person in charge of design, and raise questions then and there.", 
            "b) The person in charge of business can use his/her own free time and undergo training at any suitable time.", 
            "c) Several persons in charge of business can participate together and exchange their opinions on how to use the system.", 
            "d) The persons in charge of business can be asked to assemble together in a room and training can be given simultaneously."
        ],
        answer:"b) The person in charge of business can use his/her own free time and undergo training at any suitable time."
    },
    {    
        question:" Attempts are being made to streamline the functions and services of cities and regions and make them more advanced with the use of ICT in order to solve regional problems, and vitalize regions. Which of the following is the most appropriate term to describe such a solution for community development?",  
        options: [
            "a) Capacity", 
            "b) Smart city", 
            "c) Diversity ", 
            "d) University "
        ],
        answer:"b) Smart city"
    },
    {    
        question:" In system development, which of the following is a process that clarifies the business functions to be newly constructed or reconstructed, and on the basis of the business functions, specifies the scope of computerization and the functions?",  
        options: [
            "a) External design ", 
            "b) Internal design", 
            "c) Programming ", 
            "d) Requirements definition"
        ],
        answer:"d) Requirements definition"
    },
    {    
        question:" Which of the following is the most appropriate description of IoT? ",  
        options: [
            "a) It is a learning mechanism in artificial intelligence.", 
            "b) It is a mechanism where devices or control units equipped with a sensor connect to the Internet and exchange a variety of information via the Internet. ", 
            "c) It is a group of functions and procedures that are made public in order to enable some of the features of a piece of software to be used by other programs.", 
            "d) It is a tool that uses a software robot to streamline routine work."
        ],
        answer:"b) It is a mechanism where devices or control units equipped with a sensor connect to the Internet and exchange a variety of information via the Internet. "
    },
    {    
        question:" Which of the following is the most appropriate word to indicate the use of IoT, AI, and other IT in order to strategically overhaul a business model and produce new added value? ",  
        options: [
            "a) Digital signage", 
            "b) Digital divide", 
            "c) Digital transformation", 
            "d) Digital native"
        ],
        answer:"c) Digital transformation"
    },
    {    
        question:"Which of the following is the most appropriate explanation of an RFP that is created by a company, government organization, or other such organization that is planning the introduction of a new system? ",  
        options: [
            "a) It is a document created for collecting information from vendors and determining a system’s technical issues and feasibility. ", 
            "b) It is a definition of matters such as the performance requirements for a new system by the vendor and the ordering party.", 
            "c) It sets out the agreed matters concerning the level of service quality between the vendor and the ordering party.", 
            "d) It provides vendors with the objective of introduction and a functional overview of the system, and solicit a bid"
        ],
        answer:"d) It provides vendors with the objective of introduction and a functional overview of the system, and solicit a bid"
    }

];
    

const quizContainer = document.getElementById("quiz-container");
const paginationContainer = document.getElementById("pagination");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const navigation = document.getElementById("navigation");
const submitButton = document.getElementById("submit");

let userSelections = {};

let score = 0;
const questionsPerPage = 6;
let currentPage = 0;
const maxVisiblePages =6;

// Function to render questions for the current page
function renderQuestions(pageIndex) {
    quizContainer.innerHTML = ""; // Clear previous questions

    const start = pageIndex * questionsPerPage;
    const end = Math.min(start + questionsPerPage, quizData.length);
    const questionsToDisplay = quizData.slice(start, end);

    questionsToDisplay.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question-block");

        // Add question text
        const questionText = document.createElement("h3");
        questionText.innerHTML = `<strong>Q${start + index + 1}.</strong> ${q.question}`;
        questionDiv.appendChild(questionText);

        if (q.image) {
            const questionImage = document.createElement("img");
            questionImage.src = q.image;
            questionImage.alt = "Question image";
            questionImage.style.maxWidth = "100%"; // Style the image for better fit
            questionDiv.appendChild(questionImage);
        }
        // Add options
        q.options.forEach(option => {
            const label = document.createElement("label");
            label.style.display = "block";
        
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question${start + index}`;
            input.value = option;
        
            // Pre-select if user previously chose this option
            if (userSelections[start + index] === option) {
                input.checked = true;
            }
        
            input.addEventListener("change", () => {
                userSelections[start + index] = option; // Update user's selection
            });
        
            if (option.endsWith(".png") || option.endsWith(".jpg")) {
                const optionImage = document.createElement("img");
                optionImage.src = option;
                optionImage.alt = "Option image";
                optionImage.style.maxWidth="70%";
                label.appendChild(input);
                label.appendChild(optionImage);
            } else {
                label.appendChild(input);
                label.append(option);
            }
        
            questionDiv.appendChild(label);
        });
        

        quizContainer.appendChild(questionDiv);
    });
}

// Function to render pagination links
function renderPagination() {
    paginationContainer.innerHTML = ""; // Clear previous pagination links

    const totalPages = Math.ceil(quizData.length / questionsPerPage);
    const startPage = Math.floor(currentPage / maxVisiblePages) * maxVisiblePages;
    const endPage = Math.min(startPage + maxVisiblePages, totalPages);

    for (let i = startPage; i < endPage; i++) {
        const pageLink = document.createElement("a");
        pageLink.innerText = i + 1;
        pageLink.href = "#";
        pageLink.classList.add("page-link");
        if (i === currentPage) pageLink.classList.add("active");

        if ((currentPage + 1) * questionsPerPage >= quizData.length) {
            submitButton.style.display = "block"; // Show submit button on the last page
        } else {
            submitButton.style.display = "block"; // Hide submit button otherwise
        }

        // Add click listener for pagination
        pageLink.onclick = (e) => {
            e.preventDefault(); // Prevent full reload
            currentPage = i;
            updatePaginationAndQuestions();
        };

        paginationContainer.appendChild(pageLink);
    }
}

// Function to update questions and pagination state
function updatePaginationAndQuestions() {
    renderQuestions(currentPage);
    renderPagination();

    prevButton.classList.toggle("disabled", currentPage === 0);
    nextButton.classList.toggle("disabled", currentPage === Math.ceil(quizData.length / questionsPerPage) - 1);
}


// Initial call to render the first page and pagination
updatePaginationAndQuestions();

// Previous button click
prevButton.onclick = (e) => {
    e.preventDefault();
    if (currentPage > 0) {
        currentPage--;
        updatePaginationAndQuestions();
    }
};

// Next button click
nextButton.onclick = (e) => {
    e.preventDefault();
    const totalPages = Math.ceil(quizData.length / questionsPerPage);
    if (currentPage < totalPages - 1) {
        currentPage++;
        updatePaginationAndQuestions();
    }
};

submitButton.onclick = () => {
    // Reset score
    let score = 0;
    let results = []; // Array to store detailed results

    // Calculate the score and collect results
    Object.entries(userSelections).forEach(([questionIndex, selectedOption]) => {
        questionIndex = parseInt(questionIndex); // Ensure the key is a number
        const questionData = quizData[questionIndex]; // Get question data
        const isCorrect = questionData?.answer === selectedOption;

        if (isCorrect) {
            score++;
        } else {
            // Store question, wrong answer, and correct answer for incorrect responses
            results.push({
                question: questionData.question,
                userAnswer: selectedOption,
                correctAnswer: questionData.answer,
                image: questionData.image,
            });
        }
    });

    //data to result.php
    const data = {score};
    // Send data to the server using fetch
    fetch('results.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Convert data to JSON
    })
        .then(response => response.text()) // Handle the response as text
        .then(result => {
            console.log('Response from PHP:', result);
        //    alert(`Server response: ${result}`);
        })
        .catch(error => {
            console.error('Error:', error);
        });


    // Pass data to the results page
    const resultsPage = "results.php";
    const params = new URLSearchParams({
        totalScore: score,
        totalQuestions: quizData.length,
        results: JSON.stringify(results),
    });
    window.location.href = `${resultsPage}?${params.toString()}`;
};


