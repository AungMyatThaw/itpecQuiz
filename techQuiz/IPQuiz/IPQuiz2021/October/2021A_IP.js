const quizData = [
    {
        question: "When three balls are picked out consecutively from a box containing three white balls and four black balls, which of the following is the lowest probability?",
        options: ["a) Probability of picking out the balls in order of black, black, black",
            "b) Probability of picking out the balls in order of black, black, white",
            "c) Probability of picking out the balls in order of black, white, black",
            "d) Probability of picking out the balls in order of white, black, black"],
        answer: "a) Probability of picking out the balls in order of black, black, black"
    },
    {
        question: "Which of the following is an appropriate description concerning the characteristics of EUC (End User Computing)?",
        options: ["a) EUC enables users to directly access, reference, and manipulate data that they need for business operations.",
            "b) EUC gives priority to system operation and maintenance, so it causes backlogs to increase in the information systems department.",
            "c) EUC requires more development staff members in the information systems department, so it often leads to an increase in the operating costs of the department.",
            "d) EUC allows the information systems department to take a leadership role in application development, so it can reduce the workload of users."],
        answer: "a) EUC enables users to directly access, reference, and manipulate data that they need for business operations."
    },
    {
        question: "",
        image: "img/Q(3).png",
        options: ["a) The output of “Agree” is generated at all times when one or more inputs are “Agree.”",
            "b) The output of “Agree” is generated at all times when two or more inputs are “Agree.”",
            "c) The output of “Disagree” is generated only when two or more inputs are “Disagree.”",
            "d) The output of “Agree” is generated only when all three inputs are “Agree.”"],
        answer: "d) The output of “Agree” is generated only when all three inputs are “Agree.”"
    },
    {
        question: "Which of the following represents the decimal number 155 in binary?",
        options: ["a) 10011011",
            "b) 10110011",
            "c) 11001101",
            "d) 11011001"],
        answer: "a) 10011011"
    },
    {
        question: "On a desk that is only large enough to place 4 files at the same time, 6 files, A through F, are used to perform a task. When 4 files are already placed on the desk, the least recently used file must be placed back into the drawer before the fifth file can be placed on the desk. When the files are used in the sequence A, B, C, D, B, A, E, A, B, F, which of the following is the last file placed back into the drawer?",
        options: ["a) A",
            "b) B",
            "c) D",
            "d) E"],
        answer: "c) D",
    },
    {
        question: "Which of the following is a term for a list of instructions to a computer that are written in a human-readable programming language?",
        options: ["a) PIN code",
            "b) Source code",
            "c) Binary code",
            "d) Character code"],
        answer: "b) Source code"
    },
    {
        question: "In the data structure called a queue that is suitable for performing first-in first-out (FIFO) processing, values are stored in the order of “8”, “1”, “6”, and “3”, and then two (2) values are removed consecutively. Which of the following is the last value that is removed?",
        options: ["a) 1",
            "b) 3",
            "c) 6",
            "d) 8"],
        answer: "a) 1"
    },
    {
        question: "",
        image: "img/Q(8).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "b)"
    },
    {
        question: "In a markup language, with the purpose of displaying on a screen and printing, it is possible to directly embed not only the document content, but also the document structure and layout information, and the character font and size information. Which of the following is classified into such a markup language?",
        options: ["a) C",
            "b) HTML",
            "c) SQL",
            "d) URL"],
        answer: "b) HTML"
    },
    {
        question: "Which of the following is designed to virtually reduce the time for the CPU to access the main memory, in order to improve the processing efficiency of a PC?",
        options: ["a) SSD",
            "b) Virtual memory5",
            "c) Cache memory",
            "d) Defragmentation"],
        answer: "c) Cache memory"
    },
    {
        question: "Which of the following is the most appropriate description concerning a compatible CPU?",
        options: ["a) It can run the OS or the application software that can be run on the original CPU.",
            "b) It must not be developed nor manufactured as long as the patents of the original CPU are valid.",
            "c) A compatible CPU for single-core CPU has been developed, while one for multi-core CPU does not exist.",
            "d) It is a CPU that is intended to improve the performance of an outdated PC, and is not adopted for a new model of PC."],
        answer: "a) It can run the OS or the application software that can be run on the original CPU."
    },
    {
        question: "Which of the following is an appropriate description about a device driver?",
        options: ["a) Software for controlling and operating peripherals that are connected to a PC",
            "b) Software that is started immediately after a PC is turned on, and enables basic input/output to the hard disk and the keyboard before the OS starts",
            "c) Software to be embedded in a web browser for displaying pages that contain video",
            "d) Software that combines files into one (1) file and restores the original files from the file"],
        answer: "a) Software for controlling and operating peripherals that are connected to a PC"
    },
    {
        question: "",
        image: "img/Q(13).png",
        options: ["a) (i), (ii)",
            "b) (i), (iii)",
            "c) (ii), (iv)",
            "d) (iii), (iv)"],
        answer: "b) (i), (iii)"
    },
    {
        question: "Two (2) HDDs are connected to a server for storing data. When at least one (1) of the HDDs is working, stored data needs to be available. Which of the following is an appropriate configuration that should be used for the HDDs?",
        options: ["a) Striping",
            "b) Data mining",
            "c) Tethering",
            "d) Mirroring"],
        answer: "d) Mirroring"
    },
    {
        question: "",
        image: "img/Q(15).png",
        options: ["img/Q(15)_a.png",
            "img/Q(15)_b.png",
            "img/Q(15)_c.png",
            "img/Q(15)_d.png"],
        answer: "img/Q(15)_d.png"
    },
    {
        question: "",
        image: "img/Q(16).png",
        options: ["a) A, B, C",
            "b) A, D",
            "c) B, C",
            "d) C, D"],
        answer: "b) A, D"
    },
    {
        question: "Which of the following is an appropriate explanation of plug-in software?",
        options: ["a) Plug-in software bridges differences between OSs, and provides more advanced and specific functions than the OSs.",
            "b) Plug-in software does not work as a standalone program, but can be integrated into applications, such as a web browser, to enhance their functions.",
            "c) Plug-in software is often included in applications such as a spreadsheet, and allows the users to record and replay the series of operations performed.",
            "d) Plug-in software is provided to replace part of a program for the purpose of modifying functions or fixing bugs."],
        answer: "b) Plug-in software does not work as a standalone program, but can be integrated into applications, such as a web browser, to enhance their functions."
    },
    {
        question: "",
        image: "img/Q(18).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "b)"
    },
    {
        question: "Which of the following is an appropriate description concerning Open Source Software (OSS)?",
        options: ["a) Source code can be edited and then redistributed.",
            "b) Source code is free of charge, but maintenance and support are charged.",
            "c) Copyrights are waived, so it can be used without permission.",
            "d) If the copyright is not waived, the operability must be warranted."],
        answer: "a) Source code can be edited and then redistributed."
    },
    {
        question: "Which of the following is an appropriate description concerning OSs used for PCs?",
        options: ["a) Since the interface between an OS and application programs is standardized, the application programs can be developed without regard to the type of OS.",
            "b) An OS allocates the computer resources, such as the CPU, memory, and auxiliary storage device, to application programs.",
            "c) Since an OS has the function of automatically converting character set of a file, application programs can access the file without regard to the character set.",
            "d) The source code of an OS is required to be disclosed so that application programs can be free to use the various functions of the OS."],
        answer: "b) An OS allocates the computer resources, such as the CPU, memory, and auxiliary storage device, to application programs."
    },
    {
        question: "Which of the following is an appropriate description about the function keys of a PC?",
        options: ["a) They are the keys where specific functions are assigned for each application and OS.",
            "b) They display a keyboard shape on a screen and enable input processing with software.",
            "c) They have a security role and are keys for performing encryption and decryption.",
            "d) They are information to identify specific lines uniquely in a database."],
        answer: "a) They are the keys where specific functions are assigned for each application and OS."
    },
    {
        question: "",
        image: "img/Q(22).png",
        options: ["a) 0",
            "b) 1",
            "c) 2",
            "d) 3"],
        answer: "c) 2"
    },
    {
        question: "Which of the following is a computer that is used for tasks such as global scale environmental simulations and DNA analysis, and was developed with the objective of processing a large amount of calculations at ultra high speed?",
        options: ["a) Virtual computer",
            "b) Super computer",
            "c) General purpose computer",
            "d) Microcomputer"],
        answer: "b) Super computer"
    },
    {
        question: "Which of the following is the term for the design that is intended to provide comfortable usability to as many people as possible, regardless of their culture, language, age, gender, presence or absence of disability, or capability?",
        options: ["a) Barrier-free design",
            "b) Fail-safe",
            "c) Foolproof",
            "d) Universal design"],
        answer: "d) Universal design"
    },
    {
        question: "Which of the following is the most appropriate explanation of virtual reality?",
        options: ["a) Improving the GUI not by displaying an image gradually from top to bottom, but by first displaying a coarse mosaic-like image, and then by gradually increasing the sharpness of the image",
            "b) Enabling computer-simulated objects and spaces to be perceived like the real world by using computer graphics or other techniques",
            "c) Conducting computer simulations instead of, among others, the wind-tunnel test used for the design of cars and airplanes",
            "d) Combining images of separately shot scenery and people to create an image that is different from the real world"],
        answer: "b) Enabling computer-simulated objects and spaces to be perceived like the real world by using computer graphics or other techniques"
    },
    {
        question: "Which of the following is a service that provides disk space on a server connected to the Internet for storing files and allows users to read and write data from anywhere inside or outside their homes?",
        options: ["a) Archive",
            "b) Authoring",
            "c) Online storage",
            "d) Flash memory"],
        answer: "c) Online storage"
    },
    {
        question: "Which of the following is an appropriate effect obtained through the normalization of data in a relational database?",
        options: ["a) Securing of data compatibility between different types of computers",
            "b) Improvement of storage efficiency through data compression",
            "c) Elimination of redundancy and inconsistency of data",
            "d) Elimination of the need for backups that are necessary in preparation for the failure of devices storing data"],
        answer: "c) Elimination of redundancy and inconsistency of data"
    },
    {
        question: "",
        image: "img/Q(28).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "c)"
    },
    {
        question: "",
        image: "img/Q(29).png",
        options: ["a) I",
            "b) I, II",
            "c) II, III, IV",
            "d) III, IV"],
        answer: "a) I"
    },
    {
        question: "When another network such as the Internet is accessed from a network in an office or a household, which of the following fulfills the role of an entrance or an exit to the other network?",
        options: ["a) Splitter",
            "b) Default gateway",
            "c) Hub",
            "d) Repeater"],
        answer: "b) Default gateway"
    },
    {
        question: "Among the cases of communication between PCs, servers, communication devices, printers, and other devices, which of the following needs a WAN?",
        options: ["a) Multiple PCs and a file server are connected to a LAN in Osaka branch office, and files stored in the file server are made to be accessible from any PC connected to the LAN.",
            "b) Inside a house, a PC and a printer are connected with Bluetooth, and documents created on the PC are printed on the printer.",
            "c) Inside a server room, a PC and a web server are connected to a hub, and the web server is maintained from the PC.",
            "d) A PC connected to the LAN in Kyoto-City sales office accesses the server in Tokyo head office and uploads sales information"],
        answer: "d) A PC connected to the LAN in Kyoto-City sales office accesses the server in Tokyo head office and uploads sales information"
    },
    {
        question: "Which of the following is an appropriate explanation of SSID that is used in wireless LANs?",
        options: ["a) The MAC address of an access point",
            "b) The channel number of radio waves in use",
            "c) The IP address of an access point that is used as the default gateway",
            "d) A character string used to identify the wireless network"],
        answer: "d) A character string used to identify the wireless network"
    },
    {
        question: "Which of the following is an appropriate description concerning communications protocols?",
        options: ["a) There are no communications protocols that are used in analog communication.",
            "b) They are developed only by international organizations, and those developed independently by manufacturers are not called communications protocols.",
            "c) In communications protocols, only the normal cases are defined.",
            "d) Devices that are provided by different manufacturers or have different OS can communicate with each other if they use the same communications protocol."],
        answer: "d) Devices that are provided by different manufacturers or have different OS can communicate with each other if they use the same communications protocol."
    },
    {
        question: "",
        image: "img/Q(34).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "a)"
    },
    {
        question: "Which of the following is an appropriate explanation of the keylogger that is a threat to information security?",
        options: ["a) Stealing information by watching the keyboard input and the display output from behind a PC user",
            "b) Monitoring and recording the keyboard input on a user’s PC",
            "c) Analyzing a password by using dictionary of all the words that are likely to be used as passwords",
            "d) Searching for a free access point by moving around a town with a PC that can detect the electromagnetic waves of a wireless LAN"],
        answer: "b) Monitoring and recording the keyboard input on a user’s PC"
    },
    {
        question: "Which of the following is a DoS attack?",
        options: ["a) Interrupting a network service by sending a large number of requests",
            "b) Spying on the data of other people on a communication path",
            "c) Trying various combinations of letters or numbers to unlock an account",
            "d) Using a service on a network illegally by pretending to be another person"],
        answer: "a) Interrupting a network service by sending a large number of requests"
    },
    {
        question: "",
        image: "img/Q(37).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "d)"
    },
    {
        question: "",
        image: "img/Q(38).png",
        options: ["a) A, B)",
            "b) A, B, C",
            "c) A, D",
            "d) B, C"],
        answer: "a) A, B"
    },
    {
        question: "Which of the following is a protocol that is used for encrypted communication between a web server and a web browser that are connected through HTTPS?",
        options: ["a) SEO",
            "b) SPEC",
            "c) SQL",
            "d) TLS"],
        answer: "d) TLS"
    },
    {
        question: "",
        image: "img/Q(40).png",
        options: ["a) I, II, III",
            "b) II, III",
            "c) II, III, IV",
            "d) IV"],
        answer: "c) II, III, IV"
    },
    {
        question: "When information security management is based on the PDCA cycle, which of the following corresponds to C?",
        options: ["a) The objectives, processes, and procedures for information security are established.",
            "b) Improvement is made through corrective and preventive actions on the basis of an evaluation.",
            "c) Processes and procedures are introduced and operated.",
            "d) Effectiveness of the processes are measured and evaluated"],
        answer: "d) Effectiveness of the processes are measured and evaluated"
    },
    {
        question: "ID and password information is leaked from a web site, and the users of this web site suffer from a password list attack on a different web site. In this case, which of the following is considered to be a description of the problem concerning the ID and password that are used on the second web site?",
        options: ["a) Transactions with the ID and password are performed by using communication that is not encrypted.",
            "b) The same ID and password as the other web site are set.",
            "c) A password is set with a combination of a small variety of types of characters.",
            "d) A short password is set."],
        answer: "b) The same ID and password as the other web site are set."
    },
    {
        question: "When a document file attached to a received e-mail is opened, a PC begins to behave abnormally. Which of the following is an appropriate suspected attack?",
        options: ["a) SQL injection",
            "b) Cross-site scripting",
            "c) Shoulder hacking",
            "d) Macro virus"],
        answer: "d) Macro virus"
    },
    {
        question: "Which of the following is a physical countermeasure for information security where depending on the importance of the information that is handled, an office or other such space is physically divided and separated into areas such as an open area, a security area, and a handover area?",
        options: ["a) Sanitizing",
            "b) Social engineering",
            "c) Zoning",
            "d) Hacking"],
        answer: "c) Zoning"
    },
    {
        question: "In public key cryptography, a key for encryption and a key for decryption are required. If four (4) people want to encrypt communication and send it to each other, a total of eight (8) keys are required. Of these, how many of these keys are not made public?",
        options: ["a) 1",
            "b) 2",
            "c) 4",
            "d) 6"],
        answer: "c) 4"
    },
    {
        question: "Which of the following is an appropriate explanation concerning software maintenance?",
        options: ["a) During system development, each program that has been created on the basis of the detailed design is verified, and also corrected as appropriate if any significant error or inaccuracy is detected.",
            "b) Programs are corrected or revised for the purpose of maintaining the stable system operations and also keeping pace with the development of information technology and changes in business strategy",
            "c) When a question is asked by a system user, the question is recorded and transferred to the appropriate department, and the final response is recorded.",
            "d) From a wide range of perspectives, the system including software is investigated, and it is determined whether or not the system is contributing to the business operations."],
        answer: "b) Programs are corrected or revised for the purpose of maintaining the stable system operations and also keeping pace with the development of information technology and changes in business strategy"
    },
    {
        question: "",
        image: "img/Q(47).png",
        options: ["a) A, B, C",
            "b) A, B, D",
            "c) A, C, D",
            "d) B, C, D"],
        answer: "d) B, C, D"
    },
    {
        question: "In the process of system requirements definition, which of the following is an appropriate evaluation criteria for system requirements?",
        options: ["a) Consistency with results of system integration test",
            "b) Consistency with needs of the customer",
            "c) Appropriateness of the design method used",
            "d) Coverage of test cases"],
        answer: "b) Consistency with needs of the customer"
    },
    {
        question: "Among a series of tests of software, which of the following is implemented mainly by the user who orders the development of the software?",
        options: ["a) Acceptance test",
            "b) Integration test",
            "c) System test",
            "d) Unit test"],
        answer: "a) Acceptance test"
    },
    {
        question: "Software development models include the waterfall model, spiral model, prototyping model, and RAD, etc. Which of the following is the most appropriate explanation of the waterfall model?",
        options: ["a) After all activities in each phase in the development are complete, the project proceeds to the next phase.",
            "b) The functions to be developed are divided, and each function is efficiently and swiftly developed with the use of development tools and parts.",
            "c) At an early phase in software development, a prototype is created that enables users to visually confirm requirements.",
            "d) The functions of software are divided, and the software is gradually completed through repeated design and development for each function so that feedback from users can be incorporated."],
        answer: "a) After all activities in each phase in the development are complete, the project proceeds to the next phase."
    },
    {
        question: "",
        image: "img/Q(51).png",
        options: ["a) A, B",
            "b) A, C",
            "c) A, B, C",
            "d) B, C"],
        answer: "b) A, C"
    },
    {
        question: "Which of the following is an appropriate description of component decomposition that is performed to create the WBS of a system development project?",
        options: ["a) It is desirable that decomposition be performed up to the level that the cost and time required to create development deliverables can be estimated and manageable.",
            "b) When system development is outsourced, the customer should entrust all decomposition of deliverables to the developer that creates the deliverables.",
            "c) Since a project’s progress report meetings are a means of communication, they are not subject to decomposition.",
            "d) If the developer has some experiences in developing similar systems, the developer does not need to perform decomposition again."],
        answer: "a) It is desirable that decomposition be performed up to the level that the cost and time required to create development deliverables can be estimated and manageable."
    },
    {
        question: "Which of the following is an appropriate index or indicator that is used to evaluate the quality of deliverables in a system development project?",
        options: ["a) External procurement ratio",
            "b) Test coverage",
            "c) Total number of staff assigned",
            "d) Number of days spent on the project"],
        answer: "b) Test coverage"
    },
    {
        question: "Project management includes project cost management, project scope management, project time management, and project integration management. Which of the following is an item that is created in project integration management in a software development project?",
        options: ["a) Development schedule for the entire project",
            "b) List of deliverables for the entire project",
            "c) Budget document for the entire project",
            "d) Planning document for executing, monitoring, and controlling the entire project"],
        answer: "d) Planning document for executing, monitoring, and controlling the entire project"
    },
    {
        question: "Which of the following is an appropriate activity for project human resources management in a system development project?",
        options: ["a) Determining the type of deliverables to be created in external design phase",
            "b) Creating a schedule for the integration test",
            "c) Estimating personnel costs for defining system requirements",
            "d) Conducting training to improve programming skills"],
        answer: "d) Conducting training to improve programming skills"
    },
    {
        question: "In a system development project, the project manager must appropriately communicate with project members. Which of the following is an appropriate item to be considered concerning communication with project members?",
        options: ["a) The method of communication should be selected according to the information to be communicated, for example, when confidentiality is emphasized, a meeting with limited project members should be held, and when efficiency is emphasized, a broadcast e-mail message should be sent",
            "b) As efficiency should be emphasized over urgency and confidentiality, communication methods such as e-mail and electronic bulletin boards should always be used.",
            "c) In order to maintain fairness, the same communication method and materials must be used for both external project stakeholders and project members",
            "d) When information is sent to project members, there is no need to confirm that the information is received as the project members have a duty to receive the information."],
        answer: "a) The method of communication should be selected according to the information to be communicated, for example, when confidentiality is emphasized, a meeting with limited project members should be held, and when efficiency is emphasized, a broadcast e-mail message should be sent"
    },
    {
        question: "After the detailed design of an information system is complete, it is decided to outsource programming to an outsourcing contractor with clearly defined specifications, deliverables, and scope of work. Which of the following is the most appropriate management activity of the project manager of the ordering company?",
        options: ["a) Checking the quality of the completed program along with requesting the outsourcing contractor for periodic progress reports",
            "b) Checking the details of activities performed by the outsourcing contractor and requesting the substitution of staff members with a low productivity",
            "c) Managing the clock-in and clock-out of staff members at the workplace of the outsourcing contractor, and checking the operation status",
            "d) Directly requesting staff members to perform the programming activities associated with the change in specifications, if there are surplus staff members with the outsourcing contractor"],
        answer: "a) Checking the quality of the completed program along with requesting the outsourcing contractor for periodic progress reports"
    },
    {
        question: "Which of the following is a framework that describes a collection of best practices of IT service management?",
        options: ["a) ISO 14001",
            "b) ISO/IEC 27001",
            "c) ITIL",
            "d) PMBOK"],
        answer: "c) ITIL"
    },
    {
        question: "Which of the following is an appropriate description concerning reliability?",
        options: ["a) The availability of the device increases if the MTBF and MTTR are lengthened.",
            "b) The availability of the device increases if the MTBF is lengthened and the MTTR is shortened.",
            "c) If the MTBF is lengthened, the MTTR is shortened.",
            "d) If the MTTR is shortened, the MTBF is lengthened."],
        answer: "b) The availability of the device increases if the MTBF is lengthened and the MTTR is shortened."
    },
    {
        question: "An organization is going to set up a service desk to respond to information system users. Which of the following is the most appropriate description concerning incident handling by the service desk?",
        options: ["a) In response to fault reports from users, the service desk provides information to them after a resolution method has been formally decided.",
            "b) The service desk responds to fault reports from users with the primary aim of restoration of service, not investigation of the causes of faults.",
            "c) For receipt of user inquiries, the service desk standardizes on a single method such as e-mail, telephone, or FAX, regardless of conditions in users’ organizations.",
            "d) The service desk keeps records of only the user inquiries that are not able to be quickly resolved."],
        answer: "b) The service desk responds to fault reports from users with the primary aim of restoration of service, not investigation of the causes of faults."
    },
    {
        question: "For confidential information that is managed in an information system, which of the following is an appropriate measure that is taken from the facility management perspective to prevent information leakage?",
        options: ["a) Installation of antivirus software",
            "b) Entrance and exit control for a building that has a computer room",
            "c) ID and password management for information systems",
            "d) Encryption of electronic documents"],
        answer: "b) Entrance and exit control for a building that has a computer room"
    },
    {
        question: "The IT department of Company A plans to extend inquiry hours to 24 hours in order to improve the availability of the help desk. Company A agrees to the proposal by Company B that offers 24-hour support through automatic response during overnight hours by a chatbot. Which of the following is an appropriate document to be used for this agreement?",
        options: ["a) BCP",
            "b) NDA",
            "c) RFP",
            "d) SLA"],
        answer: "d) SLA"
    },
    {
        question: "Which of the following is the most appropriate explanation of IT governance?",
        options: ["a) It is the organizational abilities of a company to control the creation and execution of its IT strategy with the purpose of building competitive superiority, and to lead it in the ideal direction.",
            "b) It is the implementation and management of a good quality IT service that meets business needs.",
            "c) It is an activity that a third party that is not an involved party nor its management verifies that implementation and operation of risk control concerning information systems are appropriate.",
            "d) It is the application of the knowledge, skills, tools, and techniques to project activities in order to meet the requirements of the project."],
        answer: "a) It is the organizational abilities of a company to control the creation and execution of its IT strategy with the purpose of building competitive superiority, and to lead it in the ideal direction."
    },
    {
        question: "A food manufacturer is conducting business in accordance with safety standards that are specified by the food industry. As the safety standards are revised, the internal standards of the company are also revised accordingly. Which of the following four (4) objectives of internal control corresponds to this action?",
        options: ["a) Effectiveness and efficiency of business",
            "b) Reliability of financial reporting",
            "c) Compliance with laws and regulations that are related to business operations",
            "d) Protection of assets"],
        answer: "c) Compliance with laws and regulations that are related to business operations"
    },
    {
        question: "When an external systems auditor conducts a systems audit of a company as an outsourcing service, which of the following is an appropriate action by the external systems auditor?",
        options: ["a) Writing the audit report in such a way that no disadvantage is caused to the managers of the company",
            "b) Disclosing to the public the entire information obtained by the systems audit",
            "c) Concluding a contract that audit fee is paid according to the number of findings, and then conducting an audit",
            "d) Making audit judgements on the basis of sufficient and appropriate audit evidence"],
        answer: "d) Making audit judgements on the basis of sufficient and appropriate audit evidence"
    },
    
    {
        question: "Which of the following is an explanation of a functional organization?",
        options: ["a) It is an organization that is formed only for a fixed period of time by collecting only the functions necessary for resolving a problem, and is dissolved when the problem is resolved.",
            "b) It is an organization in which business operations are divided into expert functions, and each function is configured as a unit",
            "c) It is an organization that is configured to bear the profit responsibility of the business with a product or region as a unit.",
            "d) It is an organization that is formed to have a vertical and a horizontal structure by combining together units such as the products and functions"],
        answer: "c) It is an organization that is configured to bear the profit responsibility of the business with a product or region as a unit."
    },
    {
        question: "",
        image: "img/Q(67).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "b)"
    },
    {
        question: "Among the senior management positions, which of the following is the highest-ranking person who exercises control over the information system?",
        options: ["a) CEO",
            "b) CFO",
            "c) CIO",
            "d) COO"],
        answer: "c) CIO"
    },
    {
        question: "Which of the following is a method of education and training by which the techniques and knowledge required for working are mastered through daily work experience?",

        options: ["a) CDP",
            "b) e-learning",
            "c) Off-JT",
            "d) OJT"],
        answer: "d) OJT"
    },
    {
        question: "Which of the following is an appropriate rule for “brainstorming” that is a method of resolving problems?",
        options: ["a) Participants should select and present only high-quality ideas among their own ideas.",
            "b) Participants should criticize another participant’s ideas without hesitation",
            "c) Participants should avoid presenting better ideas based on another participant’s",
            "d) Participants should listen to free-wheeling opinions, including unique ideas"],
        answer: "d) Participants should listen to free-wheeling opinions, including unique ideas"
    },
    {
        question: "Which of the following is the appropriate term that represents a variety of individuals with different sex, age, nationality, experience, and the like?",
        options: ["a) Glass ceiling",
            "b) Diversity",
            "c) White collar exemption",
            "d) Work-life balance"],
        answer: "b) Diversity"
    },
    {
        question: "Which of the following represents the “E” in ROE that is an index for the measurement of a company’s profitability?",
        options: ["a) Earnings",
            "b) Employee",
            "c) Enterprise",
            "d) Equity"],
        answer: "d) Equity"
    },
    {
        question: "Which of the following is the coding scheme that can encode a large amount of information into a small area and has an error correction function that enables the code to be read out correctly even when the code cannot be partially read out?",
        options: ["a) ISBN code",
            "b) ITF code",
            "c) QR code",
            "d) Unicode"],
        answer: "c) QR code"
    },
    {
        question: "Which of the following is a case example where Bluetooth is used as a standard protocol of wireless communications for cellular phones, household electric appliances, or such other devices?",
        options: ["a) Connecting two controllers to one home video game console without any cables",
            "b) Receiving signals from some GPS satellites into a car navigation system",
            "c) Reading a QR code by using a cellular phone",
            "d) Reading the information or data on an IC card ticket at an automatic ticket gate"],
        answer: "a) Connecting two controllers to one home video game console without any cables"
    },
    {
        question: "Which of the following is standardized as ISO (International Organization for Standardization) 27000 series?",
        options: ["a) Content management system",
            "b) Information security management system",
            "c) Talent management system",
            "d) Knowledge management system"],
        answer: "b) Information security management system"
    },
    {
        question: "Which of the following is an academic organization in the USA that promotes standardization activities concerning Ethernet LAN and wireless LAN, etc.?",
        options: ["a) ICANN",
            "b) IEEE",
            "c) ISO",
            "d) W3C"],
        answer: "b) IEEE"
    },
    {
        question: "Which of the following corporate activities is related to compliance promotion?",
        options: ["a) A mechanism for sharing sales people’s sales know-how, customer information, and negotiation information in the sales department is implemented to improve sales productivity",
            "b) A mechanism for sharing customer information and purchasing history among all departments that come into contact with customers is implemented to increase customer satisfaction.",
            "c) Schedules, documents, messages, and meeting room reservation status are shared with groups such as departments and projects in order to prevent loss of communication.",
            "d) A code of conduct or a conduct manual based on corporate ethics that aims to follow the law is created, and ethical education is implemented to ensure that employees understand them."],
        answer: "d) A code of conduct or a conduct manual based on corporate ethics that aims to follow the law is created, and ethical education is implemented to ensure that employees understand them."
    },
    {
        question: "Which of the following is the most appropriate example of standardization in the manufacturing industry?",
        options: ["a) Workload is balanced, and the types and volume of components taken in from the previous process are equalized.",
            "b) In order to rationalize production activities, the components and procedures that are required for manufacturing are unified.",
            "c) In order to improve the execution speed of a production management program, the optimum algorithm is selected.",
            "d) Production planning, production processes, and working methods are simplified through a reduction in product types and a review of work details."],
        answer: "b) In order to rationalize production activities, the components and procedures that are required for manufacturing are unified."
    },
    {
        question: "",
        image: "img/Q(79).png",
        options: ["a) Extend the retirement age of skilled workers or implement rehiring",
            "b) Procure funds at low interest and stockpile large reserves of oil",
            "c) Conduct research and development and commercialize electric automobiles",
            "d) Take advantage of brand image to strengthen sales capabilities"],
        answer: "c) Conduct research and development and commercialize electric automobiles"
    },
    {
        question: "",
        image: "img/Q(80).png",
        options: ["a) 1",
            "b) 2",
            "c) 3",
            "d) 4"],
        answer: "d) 4"
    },
    {
        question: "In order to reduce the number of in-process or in-stock items between processes, production is carried out in each process according to the requests from the subsequent process and only the required number of the required items are supplied at the required time to the subsequent process. Which of the following performs this type of production?",
        
        options: ["a) Just-in-time production system",
            "b) Cell production system",
            "c) Build-to-stock production system",
            "d) Lot production system"],
        answer: "a) Just-in-time production system"
    },
    {
        question: "Which of the following information is necessary for CRM?",
        options: ["a) Customer data and customer purchasing history",
            "b) Blueprint data",
            "c) Data of experts' knowledge",
            "d) Day and time of sales, shop, product sold, and quantity sold"],
        answer: "a) Customer data and customer purchasing history"
    },
    {
        question: "Which of the following is a marketing technique that seeks to analyze the needs of each individual person and provide products and services that fulfill those needs?",
        options: ["a) Social marketing",
            "b) Telemarketing",
            "c) Mass marketing",
            "d) One-to-one marketing"],
        answer: "d) One-to-one marketing"
    },
    {
        question: "Which of the following is the most appropriate explanation of user experience (UX)?",
        options: ["a) The design of a software product with consideration that it is easy to use for as many people as possible, including mainly elderly people and disabled people",
            "b) A method identifying customer on the basis of analysis of customer data, and deepening relationships with customers by using channels such as call centers and the Internet",
            "c) A software product’s capability that enables efficient use by a user under specified conditions",
            "d) People’s feelings and responses that are gained through the use of a product, system, or service"],
        answer: "d) People’s feelings and responses that are gained through the use of a product, system, or service"
    },
    {
        question: "",
        image: "img/Q(85).png",
        options: ["a) Control chart",
            "b) Cause and effect diagram",
            "c) Pareto chart",
            "d) Roadmap"],
        answer: "d) Roadmap"
    },
    {
        question: "Which of the following is supported by a CAD system?",
        options: ["a) Process designing",
            "b) Production planning",
            "c) Product designing",
            "d) Delivery planning"],
        answer: "c) Product designing"
    },
    {
        question: "Which of the following is the situation where an improvement can be expected by installing an MRP (Material Requirements Planning) system?",
        options: ["a) Drawing information is managed using electronic files and hard copies, so the design change history cannot be accurately known",
            "b) Information concerning materials necessary for manufacturing and their required quantities is insufficient or incorrect, so production is adversely affected",
            "c) There are too many design change requests, so production efficiency does not increase.",
            "d) High-mix, low-volume production is adopted, so the cost of installing production equipment is increasing."],
        answer: "b) Information concerning materials necessary for manufacturing and their required quantities is insufficient or incorrect, so production is adversely affected"
    },
    {
        question: "Which of the following is a system that collects information that is required for sales management or inventory control by reading or keying in a product code or a buyer’s attribute at the time of a sale?",
        options: ["a) ETC",
            "b) GPS",
            "c) POS",
            "d) SCM"],
        answer: "c) POS"
    },
    {
        question: "When the processes from product development to shipment are divided into development, production planning, production, and shipment, which of the following is an appropriate process that can result in labor saving and improved efficiency by the introduction of the Flexible Manufacturing System (FMS)?",
        options: ["a) Development",
            "b) Production planning",
            "c) Production",
            "d) Shipment"],
        answer: "c) Production"
    },
    {
        question: "Which of the following is an appropriate explanation of a banner advertisement that is a form of Internet advertisement?",
        options: ["a) When a Web site is being browsed, an advertisement from an advertiser is automatically displayed in another new window.",
            "b) When a Web page is accessed from another page, a page with an advertisement is briefly shown before the accessed page is displayed",
            "c) When an advertisement image that is placed on part of a Web page is clicked, an advertiser page is displayed.",
            "d) When keywords are entered into a search service site, an advertisement related to the keywords is displayed on the page showing the search results."],
        answer: "c) When an advertisement image that is placed on part of a Web page is clicked, an advertiser page is displayed."
    },
    {
        question: "Which of the following is a general term for techniques or methods for trying to make the homepage of one’s own company to be displayed at a higher rank in the search results of a search engine on the Internet?",
        options: ["a) DNS",
            "b) RSS",
            "c) SEO",
            "d) SNS"],
        answer: "c) SEO"
    },
    {
        question: "Which of the following is the most appropriate example of a use of a wearable device?",
        options: ["a) Using a PC or tablet computer, and receiving diagnosis from a doctor over a network",
            "b) Acquiring blood pressure, body temperature, and other such measurement data with a smartwatch, and detecting abnormalities at an early stage",
            "c) Managing the computerized data of patient records from multiple hospitals in the cloud, and sharing the data",
            "d) Installing a human presence sensor in a bed, and sending a notification if the sensor does not respond for a certain length of time"],
        answer: "b) Acquiring blood pressure, body temperature, and other such measurement data with a smartwatch, and detecting abnormalities at an early stage"
    },
    {
        question: "Which of the following is a term that means that the development and operation of a system is farmed out to an overseas company or an overseas subsidiary?",
        options: ["a) Hosting",
            "b) Offshore outsourcing",
            "c) Onshore outsourcing",
            "d) System integration"],
        answer: "b) Offshore outsourcing"
    },
    {
        question: "Which of the following is the general name of software that has various functions such as e-mail and electronic bulletin board-based communication, information sharing, and electronic conferencing, and provides an environment for joint working?",
        options: ["a) Groupware",
            "b) Shareware",
            "c) Firmware",
            "d) Freeware"],
        answer: "a) Groupware"
    },
    {
        question: "Training on how to use a sales forecast system is planned for the persons in charge of business across the country. Which of the following is a merit that is obtained by using e-learning in training?",
        options: ["a) The person in charge of business can be directly lectured about the system from the person in charge of design, and raise questions then and there.",
            "b) The person in charge of business can use his/her own free time and undergo training at any suitable time.",
            "c) Several persons in charge of business can participate together and exchange their opinions on how to use the system.",
            "d) The persons in charge of business can be asked to assemble together in a room and training can be given simultaneously."],
        answer: "b) The person in charge of business can use his/her own free time and undergo training at any suitable time."
    },
    {
        question: "Which of the following is an appropriate term that represents a method for achieving automation and improved efficiency by replacing humans with a software robot to perform routine office work?",
        options: ["a) ROA",
            "b) RPA",
            "c) SFA",
            "d) SOA"],
        answer: "b) RPA"
    },
    {
        question: "Which of the following is a process that clarifies the business functions to be newly constructed or reconstructed, and on the basis of the business functions, specifies the scope of computerization and the functions in system development?",
        options: ["a) External design",
            "b) Internal design",
            "c) Programming",
            "d) Requirements definition"],
        answer: "d) Requirements definition"
    },
    {
        question: "Which of the following is an appropriate explanation of an ASP?",
        options: ["a) A business operator or a form of service that provides communication lines for connecting to the Internet",
            "b) A service on the Internet for creating a closed community that is accessible to the members of the community",
            "c) A business operator or a form of service that provides users with application software on a server via the Internet",
            "d) An approach of constructing an information system from the viewpoint of a service, rather than from the viewpoint of a product such as hardware and software"],
        answer: "c) A business operator or a form of service that provides users with application software on a server via the Internet"
    },
    {
        question: "Which of the following is a document that is presented by a user to vendors upon procurement of an information system for requesting their proposals and that describes the overview and procurement conditions for the information system?",
        options: ["a) RFC",
            "b) RFI",
            "c) RFID",
            "d) RFP"],
        answer: "d) RFP"
    },
    {
        question: "Which of the following is the most appropriate as a use case of IoT?",
        options: ["a) Making one’s own profile public on the Internet in order to expand one’s communication network",
            "b) Displaying advertisements for similar products when a certain product is searched for on an online sales website",
            "c) Recording video of a class or lecture at a school or other such place in advance, and distributing it on the Internet",
            "d) Remotely monitoring the operational status of electricity generation facilities via the Internet for performance management, fault detection, and maintenance and repair for the electricity generation facilities"],
        answer: "d) Remotely monitoring the operational status of electricity generation facilities via the Internet for performance management, fault detection, and maintenance and repair for the electricity generation facilities"
    },

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


