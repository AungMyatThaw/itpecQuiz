const quizData = [
    {
        question: "Which of the following histograms has the largest variance? Here, the scale of the vertical axis is the same on each histogram and the scale of the horizontal axis is the same on each histogram",
        options: [
            "img/q(1)_a.png", 
            "img/q(1)_b.png", 
            "img/q(1)_c.png", 
            "img/q(1)_d.png"
        ],
        answer: "img/q(1)_d.png"
    },
    {
        question: "Which of the following is the appropriate meaning of the units that are shown in the specifications given in brochures or catalogs?",
        options: [
            "a) “2-Tbyte hard disk” refers to a capacity of 2× 1012 bytes.", 
            "b) “9600-dpi printer” refers to a printing precision of 9600 dots/cm2.", 
            "c) “CPU operates at a base clock of 3.3 GHz” refers to operation at a frequency of 3.3× 220Hz. ", 
            "d) “Modem with a transmission speed of 56 kbps” refers to a minimum transmission speed of 5.6× 210 bits/second."
        ],
        answer: "a) “2-Tbyte hard disk” refers to a capacity of 2× 1012 bytes."
    },
    {
        question: "When the reward for an improvement proposal concerning business operations is determined based on the decision table below, how much is the reward for an improvement proposal for an improvement of $20,000 and a turnaround time reduction of three days? Here, “Y” in the table means that the condition holds, and “N” means that the condition does not hold. In addition, “√” indicates the reward that applies to a specific combination of these conditions. ",
        image:"img/q(3).png",
        options: [
            "a) $50 ", 
            "b) $100", 
            "c) $150 ", 
            "d) $300 "
        ],
        answer: "b) $100"
    },
    {
        question: "Which of the following is the combination of the mean and median of the data?",
        image: "img/q(4).png",
        options: ["a)", "b)", "c)", "d)"],
        answer: "d)"
    },
    {
        question: "There is a program that displays text in accordance with the specifications below. When the original text described below is displayed, in what point size does the program display the underlined character string? Here, the first character of the original text is displayed in 10 points. ",
        image: "img/q(5).png",
        options: ["a) 10","b) 11","c) 12","d) 13 "],
        answer: "b) 11",
    },
    {
        question: "There is a series of numbered boxes stacked as shown in the figure below. The operations described in the table below are performed in the sequence of operations 1 through 4. When the operation 4 is completed, which of the following shows the status of the stacked boxes?",
        image: "img/q(6).png",
        options: ["img/q(6)_a.png", "img/q(6)_b.png", "img/q(6)_c.png", "img/q(6)_d.png"],
        answer: "img/q(6)_b.png"
    },
    {
        question: "Which of the following is an appropriate description concerning the Java language? ",
        options: [
            "a) It is a markup language used for describing Web pages", 
            "b) It is a language developed for scientific and engineering calculations.", 
            "c) It is an object-oriented language that provides platform-independent portability.", 
            "d) It is a language developed for business-oriented calculations."
        ],
        answer: "c) It is an object-oriented language that provides platform-independent portability."
    },
    {
        question: "Algorithms are important when a computer is used. Which of the following is an appropriate explanation of an algorithm?",
        options: [
            "a) It refers to software for converting a program to a machine language that can be directly run by a computer. ", 
            "b) It refers to a processing procedure for enabling a computer to accomplish a particular purpose.", 
            "c) It refers to a collective term for artificial languages used to give instructions for a series of operations to a computer. ", 
            "d) It refers to the designing of buildings and industrial products by using computers."
        ],
        answer: "b) It refers to a processing procedure for enabling a computer to accomplish a particular purpose."
    },
    {
        question: "Which of the following is a term for a list of instructions to a computer that are written in a human-readable programming language?",
        options: ["a) PIN code ", "b) Source code", "c) Binary code ", "d) Character code"],
        answer: "b) Source code"
    },
    {
        question: " Which of the following is a standard for wireless communication between a PC and peripheral devices?",
        options: ["a) Bluetooth ", "b) IEEE 1394", "c) PCI", "d) USB 3.2 "],
        answer: "a) Bluetooth "
    },
    {
        question: "Which of the following is an appropriate description concerning a touch panel?",
        options: [
            "a) Operations are performed by using a pen-type or mouse-type device for specifying a position on the screen, and a flat-plate input device that detects the position.", 
            "b) Movement of a mouse pointer on the screen or other operations are performed by tracing a flat-panel input device with a finger.", 
            "c) The movement of a finger is detected by a sensor on the surface, and operations are performed by rotating a component called a wheel that is similar to a disc.", 
            "d) There are some types such as resistive or capacitive, and operations are performed on a computer through direct contact with the screen by a finger."
        ],
        answer: "d) There are some types such as resistive or capacitive, and operations are performed on a computer through direct contact with the screen by a finger."
    },
    {
        question: "Which of the following is an appropriate description of a multi-core processor?",
        options: [
            "a) An improvement in the throughput of the entire system is aimed at by simultaneously executing different processing in each core.", 
            "b) An improvement in the reliability of the processing result is aimed at by executing the same processing in several cores.", 
            "c) Several cores are controlled by hardware alone, and the OS is not required to have a special function.", 
            "d) The throughput of the processor depends only on the number of cores, and does not depend on the clock frequency."],
        answer: "a) An improvement in the throughput of the entire system is aimed at by simultaneously executing different processing in each core."
    },
    {
        question: "Which of the following is a plug and play function?",
        options: [
            "a) The automatic playback that is performed when a DVD is inserted" , 
            "b) The automatic installation of a device driver that supports a newly connected peripheral device to the PC", 
            "c) The automatic fault diagnosis for a connected peripheral device", 
            "d) The automatic periodic virus scan of a disk drive"],
        answer: "b) The automatic installation of a device driver that supports a newly connected peripheral device to the PC"
    },
    {
        question: "Which of the following is an explanation of a dual system? ",
        options: [
            "a) It is a computer system in which exactly the same processing is performed in two computers, and its reliability is assured by cross-checking the results. ", 
            "b) It is a computer system that is composed of a primary system used usually and a secondary system kept on standby in preparation for a failure.", 
            "c) It is a distributed processing system with computers connected via a peer-to-peer network.", 
            "d) It is a distributed processing system that has a clear hierarchichy of computers connectedvia a network."],
        answer: "a) It is a computer system in which exactly the same processing is performed in two computers, and its reliability is assured by cross-checking the results. "
    },
    {
        question: "When information processing systems are classified by their processing methods as shown in the figure below, which of the following is an explanation of a horizontal load distribution system?",
        image: "img/q(15).png",
        options: [
            "a) Data is entered and the processing requests and results are displayed at client PCs. The data is processed at the server side and the results are returned as the responses.", 
            "b) A dedicated computer such as a print server or a mail server is provided, in addition to a computer that runs applications for processing business data.", 
            "c) Sales data of a branch office is processed by a computer in each branch office and the results are collected and processed by a computer at the headquarters. ", 
            "d) The same application runs on several computers so that processing is not concentrated in one (1) computer."],
        answer: "d) The same application runs on several computers so that processing is not concentrated in one (1) computer."
    },
    {
        question: "Which of the following is an appropriate description of batch processing?",
        options: [
            "a) A method of processing data all together by collecting the data of a certain duration or a certain quantity ", 
            "b) A method of executing a process immediately when a request for processing of data is made, and returning the result of the process within a short time limit such as a few seconds ", 
            "c) A method of distributing processes to multiple computers or processors, and reducing the time of execution", 
            "d) A method of processing where a computer responds to a request for processing from a user, executes processes and proceeds with activities as if it is having a conversation with the user"],
        answer: "a) A method of processing data all together by collecting the data of a certain duration or a certain quantity "
    },
    {
        question: "Which of the following is the most appropriate purpose of installing a business application software package instead of developing own application software?",
        options: [
            "a) To enhance the environment of development", 
            "b) To reduce the cost of development", 
            "c) To acquire the knowledge of software development methods", 
            "d) To improve the skills of application developers"
        ],
        answer: "b) To reduce the cost of development"
    },
    {
        question: "Which of the following is the most appropriate method for limiting the content of database to be displayed in accordance with its confidentiality and each user’s business needs?",
        options: [
            "a) Setting up access rights based on the combination of data and user" , 
            "b) Distributing a copy of the database limited to each user ", 
            "c) Setting up a set of data items (columns) dedicated to each user ", 
            "d) Setting up a password for each record in order to protect data"],
        answer: "a) Setting up access rights based on the combination of data and user"
    },
    {
        question: " Which of the following is an appropriate description concerning OSs used for PCs?",
        options: [
            "a) Since the interface between an OS and application programs is standardized, the application programs can be developed without regard to the type of OS.", 
            "b) An OS allocates the computer resources, such as the CPU, memory, and auxiliary storage device, to application programs.", 
            "c) Since an OS has the function of automatically converting character set of a text in a file, application programs can display the text properly without regard to the character set.", 
            "d) The source code of an OS is required to be disclosed so that application programs can be free to use the various functions of the OS."
        ],
        answer: "b) An OS allocates the computer resources, such as the CPU, memory, and auxiliary storage device, to application programs."
    },
    {
        question: " Which of the following is an appropriate combination of the terms and explanations Athrough D concerning the file system of a hierarchical directory structure?",
        image:"img/q(20).png",
        options: ["a)", "b)", "c)", "d)"],
        answer: "c)"
    },
    {
        question: "Which of the following is an appropriate explanation of a deadlock? ",
        image: "img/q(21).png",
        options: [
            "a) It is a state in which the processes of a computer are prohibited from getting any access including accidental access to information that must not be accessed." , 
            "b) It is a state in which, if the login attempt of a user fails more than a predefined number of times, the user is prohibited from logging in to the computer for a predefined time period or until a system administrator resets the user account.", 
            "c) It is a state in which, when common resources are exclusively used, two or more processes are endlessly waiting for each other to release a common resource.", 
            "d) It is a state in which processes in the ready state under a multi-programming environment have used up the CPU time allocated by the OS. "],
        answer: "c) It is a state in which, when common resources are exclusively used, two or more processes are endlessly waiting for each other to release a common resource."
    },
    {
        question: " Among the descriptions A through C concerning OSS (Open Source Software), which of the following is the list that contains all appropriate descriptions? ",
        image: "img/q(22).png",
        options: ["a) A ", "b) A, B", "c) B, C ", "d) C"],
        answer: "d) C"
    },
    {
        question: " If data is repeatedly added to and deleted from a hard disk on a PC, data may not be stored in consecutive areas on the hard disk. When no measures are taken, which of the following can most likely occur?",
        options: ["a) Viruses is not detected.", "b) Data is not written correctly. ", "c) Data is not read correctly.", "d) Stored data is not read quickly"],
        answer: "d) Stored data is not read quickly"
    },
    {
        question: "Which of the following is an appropriate explanation of web accessibility?",
        options: [
            "a) It is a marketing technique that utilizes websites.", 
            "b) It is a mechanism that aims at unifying the design of web pages.", 
            "c) It is the extent to which anyone can receive and transmit information by using the web regardless of age or physical condition.",
            "d) It is a mechanism where a web server starts a program and dynamically generates the web contents based on the information sent by the user to a website."
        ],
        answer: "c) It is the extent to which anyone can receive and transmit information by using the web regardless of age or physical condition."
    },
    {
        question: "Which of the following is the most appropriate explanation of virtual reality?",
        options: [
            "a) Improving the GUI not by displaying an image gradually from top to bottom, but by first displaying a coarse mosaic-like image, and then by gradually increasing the sharpness of the image ", 
            "b) Enabling computer-simulated objects and spaces to be perceived like the real world by using computer graphics or other techniques", 
            "c) Conducting computer simulations instead of, among others, the wind-tunnel test used for the design of cars and airplanes", 
            "d) Combining images of separately shot scenery and people to create an image that is different from the real world"
        ],
        answer: "b) Enabling computer-simulated objects and spaces to be perceived like the real world by using computer graphics or other techniques"
    },
    {
        question: "Which of the following is a service that provides disk space on a server connected to the Internet for storing files and allows users to read and write data from anywhere inside or outside their homes? ",
        options: ["a) Archive ", "b) Authoring", "c) Online storage ", "d) Flash memory"],
        answer: "c) Online storage "
    },
    {
        question: " Which of the following is an appropriate purpose of normalizing the data of a relational database? ",
        options: ["a) To improve the compression ratio of data", "b) To retain the consistency of data", "c) To prevent the leakage of data ", "d) To enable the simultaneous access of data "],
        answer: "b) To retain the consistency of data"
    },
    {
        question: "Which of the following is a term for an operation that extracts only the rows (records) with a price of 100 yen or more, from the “Product” table of a relational database?",
        image:"img/q(28).png",
        options: [
            "a) Join",
            "b) Projection",
            "c) Selection",
            "d) Union"
        ],
        answer: "c) Selection"
    },
    {
        question: "When an activity for building a relational database is divided into steps A through Cbelow, which of the following is an appropriate order of the steps?",
        image:"img/q(29).png",
        options: ["a) A → B → C ", "b) A → C → B", "c) B → A → C","d) B → C → A"],
        answer: "a) A → B → C "
    },
    {
        question: " Which of the following is an appropriate combination of the protocols that are used for transmitting and receiving e-mail as shown in the diagram below?",
        image:"img/q(30).png",
        options: ["a) ", "b) ", "c) ","d) "],
        answer: "c) "
    },
    {
        question: "Which of the following is placed between an internal network and an external network in order to prevent unauthorized access from the external network to the internal network?",
        options: ["a) DHCP server", "b) Search engine", "c) Switching hub","d) Firewall"],
        answer: "d) Firewall"
    },
    {
        question: "Which of the following is an appropriate effect of replacing IPv4 with IPv6? ",
        options: [
            "a) Problems no longer occur when two or more devices that can be accessed directly from the Internet have the same IP address.", 
            "b) The shortage of IP addresses that can be used on the Internet is resolved.", 
            "c) It becomes possible to use optical fibers for connecting to the Internet.",
            "d) The communication speed on the Internet is increased."
        ],
        answer: "b) The shortage of IP addresses that can be used on the Internet is resolved."
    },
    {
        question: "Which of the following is a mechanism by which, if an e-mail is sent to a specific e-mail address, the e-mail with the same content is distributed to multiple e-mail addresses that have been registered to the specific address?",
        options: ["a) Web mail ", "b) Chain mail", "c) Mailing list ","d) Reply mail "],
        answer: "c) Mailing list "
    },
    {
        question: "Among the cases of communication between PCs, servers, communication devices, printers, and other devices, which of the following needs to use a WAN?",  
        options: [
            "a) Multiple PCs and a file server are connected to a LAN in Osaka branch office, and files stored in the file server are made to be accessible from any PC connected to the LAN. ", 
            "b) Inside a house, a PC and a printer are connected with Bluetooth, and documents created on the PC are printed on the printer.", 
            "c) Inside a server room, a PC and a web server are connected to a hub, and the web server is maintained from the PC. ",
            "d) A PC connected to the LAN in Kyoto-City sales office accesses the server in Tokyo head office and uploads sales information."],
        answer: "d) A PC connected to the LAN in Kyoto-City sales office accesses the server in Tokyo head office and uploads sales information."
    },
    {
        question: "Which of the following is an appropriate explanation of a keylogger that is a threat to information security? ",  
        options: [
            "a) Stealing information by watching the keyboard input and the display output from behind a PC user", 
            "b) Monitoring and recording the keyboard input on a user’s PC", 
            "c) Identifying a password by using a dictionary of the words that are likely to be used as passwords", 
            "d) Searching for a access point that allows unauthorized access by moving around a town with a PC that can detect the electromagnetic waves of a wireless LAN"],
        answer: "b) Monitoring and recording the keyboard input on a user’s PC"
    },
    {
        question: "Which of the following is the most appropriate explanation of phishing?",  
        options: [
            "a) A computer infected with a virus is controlled without owner’s consent from an external location via a network such as the Internet by the functions of the virus.", 
            "b) A false e-mail is sent, in order to lead the recipient to a fake website or to an imitation of an existing website, and then to illegally obtain personal information.", 
            "c) When user’s data sent to a website is displayed as is, its vulnerabilitiy is exploited in order to embed in a page a malicious script that illegally obtains the information about user who displayes the page." , 
            "d) A resident program is placed on a PC without the knowledge of the users in order to illegally obtain data in files or information about PC operations."
        ],
        answer: "b) A false e-mail is sent, in order to lead the recipient to a fake website or to an imitation of an existing website, and then to illegally obtain personal information."
    },
    {
        question: "Which of the following is a form of direct damage to a server that is caused by a DoS attack?",  
        options: [
            "a) The encrypted data on the server is decrypted", 
            "b) The administrator password of the server is changed. ", 
            "c) The server is infected by a virus. ", 
            "d) The services of a server are interrupted."],
        answer: "d) The services of a server are interrupted."
    },
    {
        question: "Among the countermeasures A through D concerning information security, which of the following is the list that contains all and only the appropriate countermeasures for virus infections?",  
        image:"img/q(38).png",
        options: [
            "a) A, B ", 
            "b) A, B, C", 
            "c) A, D", 
            "d) B, C"
        ],
        answer: "a) A, B "
    },
    {
        question: "Among the descriptions A through C concerning PKI, which of the following is the list that contains all and only the appropriate descriptions concerning a digital signature in e-mail?",  
        image:"img/q(39).png",
        options: [
            "a) A, B ", 
            "b) A, C", 
            "c) B, C", 
            "d) A, B, C"
        ],
        answer: "b) A, C"
    },
    {
        question: "Which of the following is the general name for evil-minded software such as a key logger or worm? ",  
        options: [
            "a) Shareware ",
            "b) Firmware", 
            "c) Malware ", 
            "d) Middleware "
            ],
        answer: "c) Malware "
    },
    {
        question: "In the description below concerning risk management in information security, which of the following is an appropriate combination of words or phrases to be inserted into the blanks A through C?",  
        image: "img/q(41).png",
        options: ["a)", "b)", "c)", "d)"],
        answer: "b)"
    },
    {
        question: "IDs and passwords are leaked from the first website, and the users of this website suffer from a password list attack on the second website. In this case, which of the following is the problem concerning the IDs and passwords for the second website? ",  
        options: ["a) The ID and password are sent via unencrypted communication.", "b) The same IDs and passwords as the first website are set", "c) Password are set with a combination of a small variety of characters.", "d) Short passwords are set."],
        answer: "b) The same IDs and passwords as the first website are set"
    },
    {
        question: "Among the types of authentication I through IV, which of the following is a list that contains all and only biometrics authentication",  
        image: "img/q(43).png",
        options: ["a) I, II, III ", "b) II, III", "c) II, III, IV ", "d) IV "],
        answer: "c) II, III, IV "
    },
    {
        question: "When information security management is based on the PDCA cycle, which of the following corresponds to C? ",  
        options: [
            "a) The objectives, processes, and procedures for information security are established.", 
            "b) Improvement is made through corrective and preventive actions on the basis of an evaluation", 
            "c) Processes and procedures are introduced and operated.", 
            "d) Effectiveness of the processes are measured and evaluated. "
        ],
        answer: "d) Effectiveness of the processes are measured and evaluated. "
    },
    {
        question: "Which of the following is a protocol that is used for encrypted HTTPS communication between a web server and a web browser?",  
        options: ["a) SEO", "b) SPEC ", "c) SQL", "d) TLS"],
        answer: "d) TLS"
    },
    {
        question: "Which of the following is an appropriate explanation of software maintenance?",  
        options: [
            "a) During system development, each program that has been created on the basis of the detailed design is verified and corrected as appropriate if any error is detected.", 
            "b) Programs are corrected or revised for the purpose of the stable system operations and the catch up with the development of information technology and changes in business strategy. ", 
            "c) When a question is asked by a system user, the question is recorded and transferred to the appropriate department, and the final response is recorded. ", 
            "d) From a wide range of perspectives, the system including software is evaluated, and it is determined whether or not the system is contributing to the business operations."
        ],
        answer:  "b) Programs are corrected or revised for the purpose of the stable system operations and the catch up with the development of information technology and changes in business strategy. ",
    },
    {
        question: "When system development progresses in the sequence of system requirements definition, external design, internal design, and programming, which of the following is the most appropriate phase for defining the layout of screens and the format of forms?",  
        options: ["a) External design", "b) Internal design ", "c) Programming", "d) System requirements definition"],
        answer: "a) External design"
    },
    {
        question: "Mr. A, a participant in system testing, has no access to the internal structure of the system or software and prepares input data and output data for common transactions in the department for purpose of verification. Which of the following is the testing technique that Mr. A is going to implement?",  
        options: [
            "a) Inspection", 
            "b) Walk-through", 
            "c) Black-box testing", 
            "d) White-box testing"],
        answer: "c) Black-box testing"
    },
    {
        question: "Among a series of tests of software, which of the following is implemented mainly by the user who orders the development of the software? ",  
        options: [
            "a) Acceptance test", 
            "b) Integration test ", 
            "c) System test", 
            "d) Unit test "],
        answer: "a) Acceptance test"
    },
    {
        question: "Software development models include the waterfall model, spiral model, prototyping model, and RAD, etc. Which of the following is the most appropriate explanation of the waterfall model? ",  
        options: [
            "a) After all activities in each phase in the development are complete, the project proceeds to the next phase.", 
            "b) The functions to be developed are divided, and each function is efficiently and swiftly developed with the use of development tools and parts.", 
            "c) At an early phase in software development, working sample software is created that enables users to visually confirm requirements. ", 
            "d) The functions of software are divided, and the software is gradually completed through repeated design and development for each function so that feedback from users can be incorporated."
        ],
        answer: "a) After all activities in each phase in the development are complete, the project proceeds to the next phase."
    },
    {
        question: "At the beginning phase of a new personnel system development project, in order to clarify the risks, the persons in charge of the planning department, personnel department, and information systems department, who act as the project team members, get together and make a list of the risks that they can think of concerning the project. What is such a method called?",  
        options: [
            "a) Walk-through ", 
            "b) Critical path method", 
            "c) Simulation", 
            "d) Brainstorming"
        ],
        answer:"d) Brainstorming"
    },
    {
        question: "Among the measures A through C for risk treatment to be considered when a new product is developed, which of the following is the list that contains all and only appropriate measures for reducing quality-related risks?",  
        image:"img/q(52).png",
        options: [
            "a) A, B", 
            "b) A, C", 
            "c) A, B, C", 
            "d) B, C"],
        answer: "b) A, C"
    },
    {
        question: "Which of the following is an appropriate description concerning decomposition that is performed to create the WBS of a system development project?",  
        options: [
            "a) It is desirable that decomposition be performed up to the level that the cost and time required to create development deliverables can be estimated and manageable.  ", 
            "b) When system development is outsourced, the customer should entrust all decomposition of deliverables to the developer that creates the deliverables.", 
            "c) Since a project’s progress report meetings are a means of communication, they are not subject to decomposition. ", 
            "d) If the developer has some experiences in developing similar systems, the developer does not need to perform decomposition again."],
        answer:"a) It is desirable that decomposition be performed up to the level that the cost and time required to create development deliverables can be estimated and manageable.  "
    },
    {
        question: "After the start of a project, the scope is defined by collecting the requirements for the project. Which of the following is the most appropriate purpose of defining the scope?",  
        options: [
            "a) To clarify the activities to be implemented in the project ", 
            "b) To create the action plan against the risk that has been realized in the project", 
            "c) To create an action plan for the delay of the project", 
            "d) To clarify the objectives of the project "],
        answer: "a) To clarify the activities to be implemented in the project "
    },
    {    
        question: "A system development project at a company is starting to become delayed. In order to resolve the delay, the project leader proposes to project members that part of the planned work procedure be omitted. The opinion of the project members is divided into those who think that this cannot be avoided and those who are opposed because the quality will decrease. From the perspective of ensuring quality in a project, which of the following is the most appropriate action for a project leader to take?",  
        options: [
            "a) Discussing detailed measures against decrease in quality within the project, and building consensus as a project ", 
            "b) Deciding whether to accept or reject a proposal with a majority decision by highly skilled people from among the project members ", 
            "c) Adopting the project leader’s proposal because the project leader has the most experience ", 
            "d) Replacing project members who cannot agree with the project leader’s proposal"
        ],
        answer:  "a) Discussing detailed measures against decrease in quality within the project, and building consensus as a project "
    },
    {    
        question: "When the management of a project is divided into progress management, quality management, and cost management, which of the following is most appropriate to be checked in progress management?",  
        options: [
            "a) Whether an integration test is conducted exhaustively from a variety of viewpoints", 
            "b) The degree of an increase in cost in the future", 
            "c) The degree of the impact on the entire schedule by a delay in an activity", 
            "d) Whether a procedure has been established for a design review for finding defects in the design "
        ],
        answer: "c) The degree of the impact on the entire schedule by a delay in an activity"
    },
    {    
        question: "There is a project with a development period of 10 months and a labor cost budget for development of 10 million yen. After the elapse of five (5) months, the actual labor cost is recorded as 6 million yen, and 40% of the deliverables is complete. If the development is continued till completion with the same productivity, how much will the excess of the budget for labor cost be? ",  
        options: [
            "a) 1 million yen", 
            "b) 2 million yen ", 
            "c) 2.5 million yen", 
            "d) 5 million yen"
        ],
        answer: "d) 5 million yen"
    },
    {    
        question: "Which of the following is the most appropriate activities of a service desk?",  
        options: [
            "a) Eliminating the root cause of an incident and preventing the recurrence of the incident", 
            "b) Installing updated software in order to prevent the recurrence of an incident", 
            "c) Performing centralized management of changes in a service", 
            "d) Receiving and recording inquiries from users "
        ],
        answer: "d) Receiving and recording inquiries from users "
    },
    {    
        question: "In a certain IT service, four (4) priority levels are set for system changes: urgent, high, medium, and low. Among the proposed system changes, which of the following is the change that should be classified as “urgent”? Here, regular release is scheduled at the end of each month.",  
        image: "img/q(59).png",
        options: [
            "a) System changes related to improving the function of supplementary lookup screens necessary for the launch of new services in two (2) weeks", 
            "b) System changes related to countermeasures to address failures in an electronic conference system that has many corporate users", 
            "c) System changes related to measures to address faults in a disaster information system that is used for making decisions on issuing local evacuation advisories", 
            "d) Fixing of program bugs that can be completed by the processing date in the coming month"
        ],
        answer:"c) System changes related to measures to address faults in a disaster information system that is used for making decisions on issuing local evacuation advisories"
    },
    {    
        question: "Which of the following is an appropriate explanation of facility management?",  
        options: [
            "a) It refers to the monitoring of compliance with SLAs and their periodical reviewing, for the purpose of maintaining and managing IT service levels.", 
            "b) It refers to a method for optimizing ownership, operation, maintenance, etc. of buildings and physical IT infrastructures from a business standpoint.", 
            "c) It refers to the continuous improvement of business processes to increase the quality of products and services.", 
            "d) It refers to sharing and managing information across the departments and the companies that participate in the series of processes from component procurement to manufacturing, distribution, and sales."
        ],
        answer:"b) It refers to a method for optimizing ownership, operation, maintenance, etc. of buildings and physical IT infrastructures from a business standpoint."
    },
    {    
        question: "In order to automatically respond to queries from users of an IT service, it was decided to install a chatbot. Which of the following is the most appropriate management process where such automation by a chatbot is effective?",  
        options: [
            "a) Incident management", 
            "b) Configuration management", 
            "c) Change management", 
            "d) Problem management"
        ],
        answer: "a) Incident management"
    },
    {    
        question: " Which of the following is the appropriate description concerning SLM in an IT service?",  
        options: [
            "a) In SLM, maintaining the service level that is agreed upon in the SLA is the highest-priority issue. Therefore, improving the service quality becomes a secondary activity.", 
            "b) In SLM, in order to measure the level of achievement of the quantitative targets agreed upon in the SLA, the service performance is monitored and reviewed. ", 
            "c) The objective of SLM is to obtain a common understanding of the service, the level of requirements, and other details with customers, and the creation of an SLA is the final objective of the activity. ", 
            "d) In order to make SLM an effective activity, it is important to set the service level agreed upon in the SLA to an easily-attainable level."
        ],
        answer: "b) In SLM, in order to measure the level of achievement of the quantitative targets agreed upon in the SLA, the service performance is monitored and reviewed. "
    },
    {    
        question: " As a part of internal control, access management conforming to the segregation of duties is implemented for the use and operation of an information system. During the development of the information system, which of the following is an appropriate process to start taking access management into account? ",  
        options: [
            "a) Requirements definition", 
            "b) Programming", 
            "c) Test", 
            "d) After operation start "
        ],
        answer:"a) Requirements definition"
    },
    {    
        question: " Types of governance within a company include IT governance and corporate governance. Which of the following is an appropriate explanation of the positioning of IT governance?",  
        options: [
            "a) IT governance and corporate governance are the same concepts.", 
            "b) IT governance and corporate governance are opposing concepts.  ", 
            "c) Corporate governance is one (1) component of IT governance.", 
            "d) IT governance is an indispensable element of corporate governance."
        ],
        answer:  "d) IT governance is an indispensable element of corporate governance."

    },
    {    
        question: "When an external systems auditor conducts a systems audit of a company as an outsourcing service, which of the following is an appropriate action by the external systems auditor?",  
        options: [
            "a) Writing the audit report in such a way that no disadvantage is caused to the managers of the company", 
            "b) Disclosing to the public the entire information obtained by the systems audit ", 
            "c) Concluding a contract that audit fee is paid according to the number of findings, and then conducting an audit", 
            "d) Making audit judgements on the basis of sufficient and appropriate audit evidence"
        ],
        answer:"d) Making audit judgements on the basis of sufficient and appropriate audit evidence"
    },
    {    
        question: " Which of the following has a negative correlation between temperature and total sales?",  
        options: [
            "img/q(66)_a.png", 
            "img/q(66)_b.png", 
            "img/q(66)_c.png", 
            "img/q(66)_d.png"
        ],
        answer:"img/q(66)_b.png"
    },
    {    
        question: " Among the parts of a cash flow statement, which of the following is the part where the income from product sales is reported?",  
        options: [
            "a) Operating activities ", 
            "b) Financing activities ", 
            "c) Investing activities", 
            "d) Administrating activities"
        ],
        answer:"a) Operating activities "
    },
    {    
        question: "Among the senior management positions, which of the following is the highest-ranking person who exercises control over the information systems?",  
        options: [
            "a) CEO", 
            "b) CFO", 
            "c) CIO", 
            "d) COO"
        ],
        answer:"c) CIO"
    },
    {    
        question:" Which of the following is the appropriate combination of words and phrases to be inserted into blanks A and B in the description below, concerning companies of making and receiving investments? ",  
        image:"img/Q(69).png",
        options: [
            "a) ", 
            "b) ", 
            "c) ", 
            "d) "
        ],
        answer:"b) "
    },
    {    
        question:"Among company rules, which of the following is a rule that implements segregation of duties?",  
        options: [
            "a) Rule that defines the management organization that is the foundation of the company", 
            "b) Rule that defines the role, responsibilities, and authority of each department and each employee ", 
            "c) Rule that defines employees' working conditions and other matters related to employment", 
            "d) Rule that defines proper conduct in terms of laws, regulations, and social norms"
        ],
        answer:"b) Rule that defines the role, responsibilities, and authority of each department and each employee ",
    },
    {    
        question:" Which of the following is the appropriate term that refers to a variety of individuals with different sex, age, nationality, experience, and the like? ",  
        options: [
            "a) Glass ceiling", 
            "b) Diversity ", 
            "c) White collar exemption", 
            "d) Work-life balance "
        ],
        answer:"b) Diversity "
    },
    {    
        question:" A certain product’s sales plan and sales result are shown in the table below. What is the ratio in percentage of the profit result to the profit plan? Here, the decimal fractions of the ratio are truncated.",  
        image:"img/q(72).png",
        options: [
            "a) 77 ", 
            "b) 99", 
            "c) 110 ", 
            "d) 129 "
        ],
        answer:"a) 77 "
    },
    {    
        question:"Which of the following is an appropriate combination of the standards and their applicable fields? ",  
        image:"img/q(73).png",
        options: ["a) ", "b) ", "c) ", "d) "],
        answer: "b) "
    },
    {    
        question:" Which of the following is free software that can be copied or modified freely without permission from the author?",  
        options: [
            "a) Shareware", 
            "b) Package software", 
            "c) Public domain software", 
            "d) Utility software"
        ],
        answer:"a) A software package can be used on multiple computers in a designated company or organization. "
    },
    {    
        question:" Which of the following is appropriate as a characteristic of the QR code?",  
        options: [
            "a) The code can contain only single-byte alphanumeric characters and symbols.", 
            "b) The amount of information that can be stored is equivalent to that of a barcode.", 
            "c) The code can be read from any direction including the top, bottom, left, and right.", 
            "d) The code has a two-dimensional structure in which three barcode layers are stacked."
        ],
        answer:"c) The code can be read from any direction including the top, bottom, left, and right."
    },
    {    
        question:"Among the lists of corporate activities A through D, which of the following is the list that contains all activities concerning the establishment of compliance? " ,  
        image:"img/q(76).png",
        options: [
            "a) A, B", 
            "b) A, C", 
            "c) B, D ", 
            "d) C, D"
        ],
        answer:"c) B, D "
    },
    {    
        question:"Which of the following is the most appropriate example of standardization in the manufacturing industry?",  
        options: [
            "a) Daily workload is balanced, and the types and volume of components taken daily in from the previous process are equalized. ", 
            "b) In order to streamline the production process, common components and procedures are used for manufacturing.", 
            "c) In order to improve the speed of a production management program, the optimum algorithm is selected.", 
            "d) Production planning, production processes, and working methods are simplified through a reduction in product types and a review of work details."
        ],
        answer:"b) In order to streamline the production process, common components and procedures are used for manufacturing."
    },
    {    
        question:"Which of the following is the most appropriate description of NDA?",  
        options: [
            "a) It is a specialized organization that monitors and analyzes threats to the information systems in a company, etc.", 
            "b) It is a contract that makes the contracting parties agree to hold and maintain in confidence the confidential information of the other party. ", 
            "c) It is an agreement of an objective quality standard that is concluded between a service provider and the user concerning the service provided.", 
            "d) It is a hierarchical decomposition of the tasks to be implemented in a project." 
        ],
        answer:"b) It is a contract that makes the contracting parties agree to hold and maintain in confidence the confidential information of the other party. "
    },
    {    
        question:"There are two types of performance indexes: one to evaluate the achievement level of a goal and the other to evaluate the method for achieving a goal. When the goal is to “improve the English ability of employees,” which of the following is an appropriate index to represent the achievement level of this goal?",  
        options: [
            "a) The ratio of employees’ awareness of a message from the company president concerning the importance of learning English is 80% or more.", 
            "b) The ratio of employees who get a mark of 650 or higher in an English test is 60% or more.", 
            "c) The ratio of employees who participate in an English test is 90% or more.", 
            "d) The ratio at which a company’s monthly English training course is held as planned is 90% or more."
        ],
        answer:"b) The ratio of employees who get a mark of 650 or higher in an English test is 60% or more."
    },
    {    
        question:"Which of the following is an appropriate example of alliance in corporate strategy?",  
        options: [
            "a) By a merger or acquisition, although confusion and friction arises because of participation of a partner company with a different culture, tangible and intangible resources are acquired.", 
            "b) By outsourcing the non-core activities of a company to some specialized vendors or service providers, the company shifts the staff members to its mission-critical activities.", 
            "c) By technological tie-ups, outsourcing of production and sales, and establishment of joint ventures, several companies strengthen their cooperation while maintaining their independence.", 
            "d) By holding the stocks of group companies, a company is managed and operated in the form of a company that is specialized to function as a headquarters of such companies."
        ],
        answer: "c) By technological tie-ups, outsourcing of production and sales, and establishment of joint ventures, several companies strengthen their cooperation while maintaining their independence."
    },
    {    
        question:"Which of the following is an appropriate explanation of SWOT analysis?",  
        options: [
            "a) It is a technique for deriving the future direction of corporate activities by analyzing opportunities and threats underlying in the external environment surrounding the company, and the strengths and weaknesses of the company.", 
            "b) It is a technique of evaluating and analyzing the business performance of a company in a well-balanced manner, from the perspectives of finance, customer, internal business processes, and learning and growth. ", 
            "c) It is a technique of designing corporate activities from the viewpoint of what kind of value the in-house activities finally generate for customers and whether this satisfies the customers.", 
            "d) It is a technique of plotting a business on a matrix created by the two (2) quantitative values of market growth rate and market share, and then optimizing the allocation of resources. "
        ],
        answer: "a) It is a technique for deriving the future direction of corporate activities by analyzing opportunities and threats underlying in the external environment surrounding the company, and the strengths and weaknesses of the company."
    },
    {    
        question:"As segmentation in marketing, consumers are classified on the basis of the attitude toward product purchase. Which of the following is an appropriate attitude toward product purchase of a consumer called an opinion leader? ",  
        options: [
            "a) Conveying one’s evaluation of a product to friends and acquaintances after the product becomes popular ", 
            "b) Taking into consideration their friends’ evaluation and public opinion when deciding whether to purchase a product", 
            "c) Waiting for the sales of a new product to start, and being eager to acquire it before friends and acquaintances", 
            "d) Purchasing a new product in its initial phase of sale, and conveying information about the product to friends and acquaintances"
        ],
        answer:"d) Purchasing a new product in its initial phase of sale, and conveying information about the product to friends and acquaintances"
    },
    {    
        question:" Which of the following is a marketing technique that seeks to analyze the needs of each individual person and provide products and services that fulfill those needs?",  
        options: ["a) Social marketing","b) Telemarketing ","c) Mass marketing","d) One-to-one marketing "],
        answer:"d) One-to-one marketing "
    },
    {    
        question:"Which of the following is the most appropriate as the underlying concept of CRM?",  
        options: [
            "a) The source of profit is the choice of an area with little competition and the entry into the area before competitors.", 
            "b) The source of profit is the construction and maintenance of a good relationship with the customer.", 
            "c) The source of profit is the shorter product life cycle. ", 
            "d) The source of profit is the obtaining of a large share in a specific market."
        ],
        answer:"b) The source of profit is the construction and maintenance of a good relationship with the customer."
    },
    {    
        question:"In the promotion of technology development, charts such as the one shown below are used for evaluating its progress or for checking its consistency with related technologies. What is the name of this sort of chart that shows on the time axis the route toward progress in required functions, underlying technology, etc. through research and development initiatives?",  
        image:"img/q(85).png",
        options: [
            "a) Control chart ", 
            "b) Cause and effect diagram", 
            "c) Pareto chart", 
            "d) Roadmap"
        ],
        answer:"d) Roadmap"
    },
    {    
        question:"Which of the following shows a method that adheres to compliance, and sends advertisement e-mails and collects personal information only to/from the users who provided an explicit agreement in advance?",  
        options: [
            "a) Activation", 
            "b) Opt-out", 
            "c) Opt-in", 
            "d) Whitelist"
        ],
        answer:"c) Opt-in"
    },
    {    
        question:" Which of the following is the system that is housed in home electric appliances, such as rice cookers and air conditioners, and is used to implement the specific functions of such appliances?",  
        options: ["a) Expert system","b) Enterprise system","c) Embedded system ","d) Simplex system "],
        answer:"c) Embedded system "
    },
    {    
        question:"Which of the following is a form of e-commerce corresponding to an online bookstore or an online shopping mall that is targeted at individuals?",  
        options: ["a) B to B ","b) B to C","c) C to B","d) C to C"],
        answer:"b) B to C"
    },
    {    
        question:"Which of the following is an appropriate explanation of an ERP package? ",  
        options: [
            "a) As it is a system that comprehensively supports business unique to an industry, it is used only for certain industry sectors such as the mobile phone business.", 
            "b) As it is a system specific to the financial accounting process, the function of passing accounting data to the general accounting process must be developed or purchased separately. ", 
            "c) It is an integrated business system that processes various business-related applications, and is used in companies of various sizes in various industry sectors. ", 
            "d) It is a system that integrates sales, purchasing, and financial accounting, and is a system specialized for the use by small company such as individually-owned shops. "
        ],
        answer:"c) It is an integrated business system that processes various business-related applications, and is used in companies of various sizes in various industry sectors. "
    },
    {    
        question:"Which of the following is a general term for techniques or methods for trying to make the homepage of one’s own company to be displayed at a higher rank in the search results of a search engine on the Internet? ",  
        options: ["a) DNS","b) RSS ","c) SEO ","d) SNS "],
        answer:"c) SEO "
    },
    {    
        question:" Which of the following is the most appropriate example of the utilizing artificial intelligence?",  
        options: [
            "a) A system controls the acceleration, steering, and braking of an automobile without intervention by the driver.",
            "b) A person can check occupancy for a conference room or toilet in real time from his or her desk in an office.",
            "c) Approval for a transaction is granted through distributed consensus building technology without the need for a central administrator, such as a bank.",
            "d) A person enters information in advance from a PC at his or her house in order to perform a money transfer automatically without going to the bank. "
        ],
        answer:"a) A system controls the acceleration, steering, and braking of an automobile without intervention by the driver."
    },
    {    
        question:" Crowdfunding can be classified into loan-based, donation-based, purchase-based, or investment-based types, depending on the differences in the form of funding and the way the compensation is received. In order to start a new business, Company A has decided to raise funds through crowdfunding and pay a part of the profits to the funders as dividends. Which of the following is the most appropriate type of crowdfunding used by Company A?",  
        options: [
            "a) Loan-based crowdfunding", 
            "b) Donation-based crowdfunding ", 
            "c) Purchase-based crowdfunding ", 
            "d) Investment-based crowdfunding"
        ],
        answer:"d) Investment-based crowdfunding"
    },
    {    
        question:"Which of the following is the most appropriate characteristic of BPM (Business Process Management)?",  
        options: [
            "a) In order to resolve a business issue, the introduction of a mechanism of management according to international standards is required.", 
            "b) The processes are analyzed, and problems are identified for continuous improvement of the processes.", 
            "c) The efficiency of business processes is promoted by outsourcing some of them to external vendors.", 
            "d) Business processes are fundamentally reviewed and redesigned."
        ],
        answer:"b) The processes are analyzed, and problems are identified for continuous improvement of the processes."
    },
    {    
        question:"Which of the following is the general name of software that has various functions such as e-mail and chat, information sharing, and video conferencing?",  
        options: [
            "a) Groupware", 
            "b) Shareware", 
            "c) Firmware", 
            "d) Freeware"
        ],
        answer:"a) Groupware"
    },
    {    
        question:"Which of the following is the most appropriate description concerning DFD?",
        options: [
            "a) It represents transitions of the state of a system as time passes and the situation changes", 
            "b) It represents the relationship and data structure of the entities handled by a system. ", 
            "c) It represents the attributes of, operations for and relations between the elements that a system is composed of.", 
            "d) It focuses on the flow of data, and represents the relations between the flow and the processing of data."
        ],
        answer:"d) It focuses on the flow of data, and represents the relations between the flow and the processing of data."
    },
    {    
        question:"Which of the following is a company that provides access to the Internet?",  
        options: [
            "a) ASP ", 
            "b) ISP", 
            "c) SaaS", 
            "d) SNS"
        ],
        answer:"b) ISP"
    },
    {    
        question:" Which of the following is an explanation of “acceptance testing” performed for a new system?",  
        options: [
            "a) Checking the estimate submitted by the vendor prior to placing an order based on the result of the check ", 
            "b) Checking whether the deliverables provided by the vendor conform to the requirements specifications ", 
            "c) Requesting the vendor to study and submit the proposal for a new system", 
            "d) Requesting the vendor to provide information for the purpose of collecting information on the technologies that can be applied to a new system"
        ],
        answer:"b) Checking whether the deliverables provided by the vendor conform to the requirements specifications "
    },
    {    
        question:"In the development of a consolidated accounting system, functional requirements and non-functional requirements were classified as shown in the table below. Which of the following is the appropriate requirement to be inserted into blank A?",  
        image:"img/q(98).png",
        options: [
            "a) Annual downtime as a result of failure, etc. totals 10 hours or less ", 
            "b) Slips with entry mistakes are corrected by using a correction slip", 
            "c) Apart from legal forms, data for executives meetings can be automatically extracted", 
            "d) Companies subject to consolidation can be changed every year"
        ],
        answer:"a) Annual downtime as a result of failure, etc. totals 10 hours or less "
    },
    {    
        question:"For the reconstruction of a business system, an RFI is scheduled to request multiple vendors to submit an implementation image of the new system. In that regard, which of the following is appropriate information that the vendors are requested to submit at the same time?",  
        options: [
            "a) Overview of the current system", 
            "b) Aim for system reconstruction", 
            "c) Requirements of the new system", 
            "d) Applicable technology and its trend"
        ],
        answer:"d) Applicable technology and its trend"
    },
    {    
        question:"In an online service, a website with a newly created design and a website with a conventional design were run in parallel experimentally to compare them and find out the one that makes its users more likely to apply for paid services. Which of the following is the most appropriate technique used at this time?",  
        options: [
            "a) A/B test ", 
            "b) ABC analysis ", 
            "c) Cluster analysis", 
            "d) Regression test"
        ],
        answer:"a) A/B test "
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


