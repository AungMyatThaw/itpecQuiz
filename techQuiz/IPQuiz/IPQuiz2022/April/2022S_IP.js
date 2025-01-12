const quizData = [
    {
        question: "As shown in the figure below, decimal numbers 2, 5, 10, and 21 are represented using five (5) squares that are black or white.",
        image: "img/Q(1).png",
        options: ["a) 12", "b) 20", "c) 24", "d) 30"],
        answer: "c) 24"
    },
    {
        question: "There are five (5) lamps arranged in line. Each of them can be turned on and off independently. How many patterns are there where two (2) or more lamps are turned on? Here, the pattern where all lamps are turned on is counted as one (1) and the pattern where any one of them is turned on is counted as five (5).",
        
        options: ["a) 4", "b) 10", "c) 26", "d) 32 "],
        answer: "c) 26"
    },
    {
        question: "Which of the following is the binary number that is obtained by adding the binary numbers 01011010 and 01101011? Here, the binary numbers are expressed as positive 8-bit values.",
        options: ["a) 00110001", "b) 01111011", "c) 10000100", "d) 11000101"],
        answer: "d) 11000101"
    },
    {
        question: "Which of the following is the combination of terms or phrases to be inserted into blanks A through C in the description below concerning a method for representing information?",
        image: "img/Q(4).png",
        options: ["a) ", "b) ", "c) ", "d) "],
        answer: "b) "
    },
    {
        question: "The procedure described below is sequentially performed for two (2) variables x and y, starting with step (1). When the procedure is completed, what is the resulting value of x?",
        image: "img/Q(5).png",
        options: ["a) 4","b) 5","c) 7","d) 8"],
        answer: "b) 5"
    },
    {
        question: "Which of the following is the method for describing the logical structure of a sentence in XML?",
        options: ["a) Enclosing the sentence, clauses, and other elements by using double quotes (“”)", "b) Separating the sentence, clauses, and other elements by using commas", "c) Enclosing the sentence, clauses, and other elements by using tags", "d) Separating the sentence, clauses, and other elements by using tab characters"],
        answer: "c) Enclosing the sentence, clauses, and other elements by using tags"
    },
    {
        question:"A stack is a first-in last-out data structure. By using a stack, a device receives data from the right side, changes their order and sends them to the left side, as shown in the figure below. There are three (3) types of operations available on the device, as described below.",
        image: "img/Q(7).png",
        options: ["a) X, Z, Y", "b) Y, Z, X", "c) Z, X, Y", "d) Z, Y, X"],
        answer: "c) Z, X, Y"
    },
    {
        question: "There exist four (4) states numbered 1 through 4. The four (4) states are connected as shown in the figure below, and the state transition occurs in a clockwise or counter-clockwise direction",
        image: "img/Q(8).png",
        options: ["a) 1 ", "b) 2 ", "c) 3 ", "d) 4"],
        answer: "d) 4 "
    },
    {
        question: "There is a desk that can hold at most four (4) files. On this desk, six (6) files A through F are used for a job. When the fifth file needs to be put on the desk, the file with the longest time since the last use among the four (4) will be put in a drawer. If the files are put on the desk and referenced in order of A, B, C, D, E, C, B, D, F, B, which of the following is the last file to be put in the drawer?",
        
        options: ["a) A", "b) B", "c) D", "d) E"],
        answer: "d) E"
    },
    {
        question: " Which of the following is an appropriate description concerning CPU performance?",
        options: ["a) Compared with a 64-bit CPU, a 32-bit CPU is able to process a longer data at one time.",
                  "b) The less the capacity of cache memory in the CPU, the faster the processing speed.",
                  "c) For a CPU of a given architecture, raising the clock frequency increases processing speed.", 
                  "d) A dual core CPU can perform a greater number of processes simultaneously than a quad core CPU can."],
        answer: "c) For a CPU of a given architecture, raising the clock frequency increases processing speed."
    },
    {
        question: "Which of the following is an appropriate description concerning the cache memory of a CPU?",
        options: [
            "a) It provides communications across a short distance of approximately 10 cm, and is used for reading and writing data on an IC card or IC tag", 
            "b) It can provide communications across an area of tens of meters, and is used in wireless LANs.", 
            "c) It provides communications by using infrared rays, and is used for data exchange on mobile phones.", 
            "d) It can receive electromagnetic waves from multiple artificial satellites, and is used for positioning on a car navigation system."
        ],
        answer: "b) It can provide communications across an area of tens of meters, and is used in wireless LANs."
    },
    {
        question: "Which of the following is an appropriate description concerning NFC? ",
        options: [
            "a) It provides communications across a short distance of approximately 10 cm, and is used for reading and writing data on an IC card or IC tag.", 
            "b) It can provide communications across an area of tens of meters, and is used in wireless LANs.", 
            "c) It provides communications by using infrared rays, and is used for data exchange on mobile phones.", 
            "d) It can receive electromagnetic waves from multiple artificial satellites, and is used for positioning on a car navigation system."],
        answer: "a) It provides communications across a short distance of approximately 10 cm, and is used for reading and writing data on an IC card or IC tag."
    },
    {
        question: " Which of the following storage units has the shortest access time? ",
        options: ["a) HDD" , "b) SSD ", "c) Cache memory", "d) Main memory"],
        answer: "c) Cache memory"
    },
    {
        question: "Which of the following is an appropriate explanation of the hot standby system? ",
        options: [
            "a) It is a system configuration where a collection of various types of hardware, software, and data on the Internet is provided to the user", 
            "b) It is a system configuration where a high level of reliability can be obtained by simultaneously operating the two (2) sets of equipment and by always performing the same processing while cross-checking the results.", 
            "c) It is a system configuration where a backup machine is always kept ready in an operable state and is immediately switched into operation at the occurrence of a failure.", 
            "d) It is a system configuration where a backup machine is arranged, and at the occurrence of a failure, the operator in charge starts up the backup machine and switches it into operation."],
        answer: "c) It is a system configuration where a backup machine is always kept ready in an operable state and is immediately switched into operation at the occurrence of a failure."
    },
    {
        question: "When the processing speed of the system overall is constrained because of slow processing speed in one of the components, which of the following is a term for the component that is causing the problem?",
        image: "img/Q(15).png",
        options: ["a) Throughput ", "b) Defragmentation ", "c) Flowchart ", "d) Bottleneck "],
        answer: "d) Bottleneck "
    },
    {
        question: "The life cycle of a device is divided in terms of failures into three (3) periods, namely, the initial failure period, the random failure period, and the wear-out failure period, as time goes by. In the first initial failure period, the failure rate decreases as time goes by. Then, the device reaches a stable state, and the failure rate is effectively constant in the subsequent random failure period while time goes by. In the final wear-out failure period, the failure rate increases as time goes by, and the life of the device eventually ends. Which of the following is a representation of the relation between the failure rate and time?",
        options: ["a) Gantt chart", "b) Reliability growth curve", "c) Bathtub curve", "d) Radar chart "],
        answer: "c) Bathtub curve "
    },
    {
        question: "Which of the following is an appropriate explanation of multitasking?",
        image: "img/Q(17).png",
        options: ["a) Several computers connected via a network work together to achieve a high-performance system. ", "b) Several processor cores composed of arithmetic circuits and other control circuits are implemented in a single CPU.", "c) The CPU processing time is allocated to several processes in turn so that the processes can be executed simultaneously", "d) Fn.txt at (4)"],
        answer: "c) The CPU processing time is allocated to several processes in turn so that the processes can be executed simultaneously"
    },
    {
        question: " The types of programs that are running when a PC is started are broadly classified into three (3) categories, namely BIOS (Basic Input Output System), OS, and resident application programs. Which of the following is the order of execution of the programs?",
        options: [
            "a) BIOS, OS, resident application programs", 
            "b) OS, BIOS, resident application programs", 
            "c) OS, resident application programs, BIOS", 
            "d) Resident application programs, BIOS, OS"
        ],
        answer: "a) BIOS, OS, resident application programs "
    },
    {
        question: "When a record in a file is modified, which of the following is an appropriate way of identifying the modified contents?",
        options: [
            "a) Keeping a record of the size and the modified date of a file", 
            "b) Keeping a copy of a file and comparing it to the modified one later", 
            "c) Keeping a record of the number of records into the file ", 
            "d) Keeping records sorted in ascending order of the key field "],
        answer: "b) Keeping a copy of a file and comparing it to the modified one later "
    },
    {
        question: " Which of the following is an appropriate combination of software that includes only OSS (Open Source Software)?",
        image: "img/Q(20).png",
        options: [
            "a) Microsoft Word, Linux, PostgreSQL", 
            "b) Microsoft Word, PostgreSQL, Windows", 
            "c) Firefox, Linux, Thunderbird", 
            "d) Firefox, Thunderbird, Windows"],
        answer: "c) Firefox, Linux, Thunderbird"
    },
    {
        question: "Which of the following is a term that means the validation of a software license by using the product ID and the user’s hardware information, in order to prevent unauthorized use of the software?",
        options: [
            "a) Activation", 
            "b) Cloud computing", 
            "c) Streaming", 
            "d) Fragmentation"],
        answer: "a) Activation"
    },
    {
        question: " Sales data by month for each branch is evaluated. In the “Evaluation” field for each branch by month, if the amount of sales at the branch is below the average sales amount of branches A through C for the month, the symbol “X” is to be displayed, and if the amount is above or equal to the average, the symbol “O” is to be displayed. Which of the following is an appropriate expression to be entered in cell C3? Here, the expression that is entered in cell C3 is copied and used in cell D3, cell E3, cells C5 through E5, and cells C7 through E7.",
        image: "img/Q(22).png",
        options: ["a) IF($C2 < AVERAGE(C2 : E2) , 'O' , 'X')", "b) IF($C2 < AVERAGE(C2 : E2) , 'X' , 'O') ", "c) IF(C2 < AVERAGE($C2 : $E2) , 'O' , 'X')", "d) IF(C2 < AVERAGE($C2 : $E2) , 'X' , 'O')"],
        answer: "d) IF(C2 < AVERAGE($C2 : $E2) , 'X' , 'O')"
    },
    {
        question: " Which of the following is an appropriate typical example of a system operating on a super computer?",
        options: [
            "a) An SCM system that is required for linkage between enterprises", 
            "b) A global climate change prediction system that requires large-scale scientific and technical computing ", 
            "c) A banking system that requires a high reliability ", 
            "d) An engine control system of a vehicle that requires advanced real-time control"],
        answer: "b) A global climate change prediction system that requires large-scale scientific and technical computing "
    },
    {
        question: "Which of the following is an appropriate description of AR (Augmented Reality)?",
        options: [
            "a) A technology that creates memory space beyond the amount of memory actually installed and makes this available as main memory", 
            "b) A technology that overlays and displays computer-generated information on live video or other content that captures real environments", 
            "c) A technology that analyzes and digitizes the human voice by using a computer in order to utilize it for commanding a computer, entering characters, and so on.",
            "d) A science or a technology for emulating human intellectual activity such as inference, learning, and ability to understand language, by using a computer"
        ],
        answer: "b) A technology that overlays and displays computer-generated information on live video or other content that captures real environments"
    },
    {
        question: "Which of the following is a technique that can be used to compress both video and audio data?",
       
        options: ["a) BMP", "b) GIF", "c) JPEG", "d) MPEG"],
        answer: "d) MPEG "
    },
    {
        question: "In DBMS, which of the following is a function for maintaining consistency of data by preventing the occurrence of conflicts due to simultaneous access to the data ? ",
      
        options: ["a) Normalization ", "b) Deadlock", "c) Exclusive control", "d) Restore "],
        answer: "c) Exclusive control"
    },
    {
        question: "By joining tables “Employees in charge”, “Regions”, and “Customers” that are managed in a relational database, the table A that is shown below is obtained. Which of the following is the table “Customers” that is used for the joining? Here, a solid underline indicates a primary key and a dotted underline indicates a foreign key",
        image: "img/Q(27).png",
        options: ["a)", "b)", "c)", "d)"],
        answer: "d)"
    },
    {
        question: "A customer name and his or her address, a product name and its unit price, the products and quantities ordered by the customer, and the date of order are managed by using a relational database. Which of the following is an appropriate table after normalization? Here, the underline represents primary keys, and there are same customer names and product names.",
        image: "img/Q(28).png",
        options: ["a)", "b)", "c)", "d)"],
        answer: "a)"
    },
    {
        question: "When conditions (i) through (iv) are all fulfilled, which of the following is the E-R diagram that indicates the relationship between publishing companies, authors, and books? Here, the notation for the E-R diagram is as below.",
        image: "img/Q(29).png",
        options: [
            "a)", 
            "b) ", 
            "c)  ", 
            "d) "
        ],
        answer: "a)"
    },
    {
        question: " Which of the following is an appropriate role of a subnet mask?",
        options: ["a) Identifying a MAC address on an Ethernet from an IP address", "b) Separating a network address included in an IP address and a host address of the individual computer that belongs to the network ", "c) Associating a private IP address with a global IP address when communication is relayed between an internal network and the Internet", "d) Associating a domain name of destination with an IP address"],
        answer: "b) Separating a network address included in an IP address and a host address of the individual computer that belongs to the network "
    },
    {
        question: "Which of the following is an appropriate explanation of the POP communications protocol?",
        options: [
            "a) It is a protocol for the remote control of a computer from a terminal that is in a different location.",
            "b) It is a protocol for file transfer",
            "c) It is a protocol for sending e-mails to a mail server.",
            "d) It is a protocol that e-mail software uses in order to receive e-mails from a mail server."
        ],
        answer: "d) It is a protocol that e-mail software uses in order to receive e-mails from a mail server."
    },
    {
        question: "Which of the following is a WAN?",
        options: ["a) A network that uses a company’s own communication lines, and connects buildings within the same premises", "b) A network that connects the floors in a company’s building","c) A network that uses a communications service provider’s communication lines, and connects a head office with branch offices.","d) A network that connects the PCs on one floor"],
        answer: "c) A network that uses a communications service provider’s communication lines, and connects a head office with branch offices."
    },
    {
        question: " When setting up PC1 for connecting it to the Internet, an IP address is set in “default gateway” that is one of the network settings of PC1. Which of the following devices has this IP address?",
        image: "img/Q(33).png",
        options: ["a) Router", "b) Firewall", "c) DHCP server", "d) Proxy server"],
        answer: "a) Router "
    },
    {
        question: "Which of the following is used for communication in activities such as the gathering of data from IoT devices, and has long range and power saving characteristics that enable wireless communication over a distance of tens of kilometers?",
        options: ["a) BLE", "b) LPWA ", "c) MDM", "d) MVNO "],
        answer: "b) LPWA "
    },
    {
        question: "Among the following lists consisting of the information security terms availability, integrity, confidentiality, and vulnerability, which is a complete list of properties of information that information security is to preserve?",
        options: [
            "a) Availability, Integrity", 
            "b) Availability, Integrity, Confidentiality", 
            "c) Integrity, Confidentiality", 
            "d) Integrity, Confidentiality, Vulnerability"],
        answer: "b) Availability, Integrity, Confidentiality"
    },
    {
        question: "During the use of a PC in workplace, a message was displayed stating that antivirus software had detected a virus. Which of the following is an appropriate action that should be taken immediately?",
        options: [
            "a) Reboot of the PC", 
            "b) Notification to the workplace by e-mail from the PC", 
            "c) Disconnection of the PC from networks ", 
            "d) Backup of files on the PC"
        ],
        answer: "c) Disconnection of the PC from networks "
    },
    {
        question: " Among the threats and vulnerabilities in information security, which of the following is a vulnerability? ",  
        options: [
            "a) Computer virus", 
            "b) Social engineering ", 
            "c) Tapping of communications data", 
            "d) Inappropriate password management "],
        answer: "d) Inappropriate password management "
    },
    {
        question: " Which of the following is an appropriate description concerning a scheme for authenticating a user of a system?",  
        options: ["a) A scheme where authentication is accomplished by utilizing a password that can be used only once is called a single sign-on.",
 "b) A scheme where the use of multiple servers or applications is authorized by being authenticated once is called a one time password.", 
 "c) A scheme where a sequence of numbers or characters that are placed on positions that the user remembers within a table on the screen is entered as a password is called a matrix authentication.", 
 "d) A scheme where authentication of the user is accomplished by using fingerprints, voiceprint, or other physical characteristics is called a challenge-response authentication."],
        answer: "c) A scheme where a sequence of numbers or characters that are placed on positions that the user remembers within a table on the screen is entered as a password is called a matrix authentication."
    },
    {
        question: "Which of the following is the list that contains all appropriate features of chain mail?",  
        image: "img/Q(39).png",
        options: ["a) A, C ", "b) A, D ", "c) B, C", "d) B, D"],
        answer: "d) B, D "
    },
    {
        question: "One of the methods of cracking a password is a brute force attack that involves attempting all character combinations. When the number of characters of a password that is composed of 26 types of characters from A through Z is increased from four (4) to six (6) characters, by what factor is the maximum number of attempts to decode the password with the brute force attack increased?",  
        options: ["a) 2 ", "b) 24", "c) 52", "d) 676"],
        answer: "c) 52"
    },
    {
        question: "In e-commerce transactions, which of the following is the most appropriate request to be made to the other party in order to prevent denial of the fact of order placement and details thereof?",  
        options: [
            "a) Letting the other party set the login password of the OS in the computer used by the other party for conducting the transaction", 
            "b) Letting the other party take measures against virus in the intranet of the other party", 
            "c) Letting the other party add a digital signature to the order data", 
            "d) Letting the other party send the order data after encrypting it"
        ],
        answer: "a) Letting the other party set the login password of the OS in the computer used by the other party for conducting the transaction"
    },
    {
        question: " Which of the following is an appropriate example of ransomware?",  
        options: [
            "a) It is a software program that encrypts the files in a computer, makes them unusable, and demands money in exchange for a key with which to decrypt them", 
            "b) It is a software program that records keyboard input illegally", 
            "c) It is a software program that makes itself difficult to find by altering the system log.", 
            "d) It is a software program that has the function of spreading by itself via networks."],
        answer: "b) It is a software program that records keyboard input illegally"
    },
    {
        question: "Which of the following is the most appropriate combination of the measures against password theft and brute force attack respectively on websites having a login function?",  
        image: "img/Q(43).png",
        options: [
            "a)  ",
            "b)  ", 
            "c)  ", 
            "d)  "
            ],
        answer: "c)  "
    },
    {
        question: " Which of the following is the appropriate combination of terms or phrases to be inserted into blanks A and B in the description below concerning authentication accuracy in biometric authentication?",  
        image: "img/Q(44).png",
        options: ["a) ", "b) ", "c) ", "d) "],
        answer: "b) "
    },
    {
        question: "In ISMS risk assessment, which of the following is performed first?",  
        options: ["a) Risk treatment ", "b) Risk identification", "c) Risk evaluation ", "d) Risk analysis"],
        answer: "b) Risk identification"
    },
    {
        question: "A system migration plan was created for the migration from an existing system to a new system. Which of the following is an appropriate item to be described in the system migration plan?",  
        options: ["a) System selection policy", "b) Schedule for parallel operation of the old and new systems", "c) Evaluation criteria for the quality of the deliverables", "d) The work history of project members "],
        answer: "c) Evaluation criteria for the quality of the deliverables"
    },
    {
        question: "The processes of system development include software requirements definition, software architecture design, software integration test, software installation, and software acceptance. Which one of the following activities is implemented during software acceptance? Here, the persons concerned with system development are divided into developers and users. ",  
        options: ["a) The developers deploy the software for which development is complete to the production environment.", "b) The developers interview the users for clarification of the functions and performance required of the software", "c) The users confirm that the software satisfies the requirements and is at a usable level. ", "d) The developers perform a review to confirm that the definition of software requirements satisfies the needs of the users."],
        answer: "d) The developers perform a review to confirm that the definition of software requirements satisfies the needs of the users."
    },
    {
        question: "Which of the following corresponds to software maintenance?",  
        options: ["a) A response time that was measured in a system test did not satisfy the requirement, so tuning was performed on the software.", "b) As a result of a software acceptance test, a fault was found, so the orderer requested the developer to fix the software.", 
"c) A function was found missing in a unit test of a program, so the function was added to the program","d) A defect was reported on software that is running on a production system, so the software was modified."],
        answer: "a) A response time that was measured in a system test did not satisfy the requirement, so tuning was performed on the software."
    },
    {
        question: "It has been decided that a department will participate in the test of a newly developed business system as the user department. Which of the following is an appropriate matter that should be confirmed by the user department?",   
      
        options: ["a) Business requirements are satisfied.", "b) Individual programs run according to the program specifications.", "c) The network that is used by the system can be monitored according to the predetermined procedure ", "d) Data is exchanged between the programs as specified in the design document."],
        answer: "a) Business requirements are satisfied."
    },
    {
        question: " In a project where a general waterfall model is used for the development, graphs are drawn below regarding the number of staff members required as the project progresses, and regarding the cost of each correction work required for a change or error. Which of the following is an appropriate combination?",  
        image: "img/Q(50).png",
        options: ["a) ", "b) ", "c)  ", "d) "],
        answer: "c)  "
    },
    {
        question: "Which of the following is appropriate to be prepared in order to select the delivering party for a product or service? ",  
        options: [
            "a) A communication management plan", 
            "b) A test case", 
            "c) Evaluation standards", 
            "d) A project charter"],
        answer: "d) A project charter "
    },
    {
        question: "Which of the following is a method that organizes all of the activities that need to be performed in the project in a hierarchical structure, and clarifies the work units to be managed in the project? ",  
        options: [
            "a) CRM ", 
            "b) ERP", 
            "c) PPM", 
            "d) WBS"],
        answer: "c) PPM"
    },
    {
        question: "In a project team that is required to communicate information on a one-to-one basis, when the members increase from six (6) people to ten (10) people, by how many times does the number of paths that are required for communicating information increase?",  
        options: ["a) 1.5", "b) 2.5", "c) 3", "d) 6"],
        answer: "a) 1.5"
    },
    {
        question: "Which of the following is the most appropriate description of stakeholders in a system development project? ",  
        options: [
            "a) They are individuals and organizations such as users of the developed system and managers in the development division.", 
            "b) They are sponsors who bear the cost of system development.",
            "c) They are events that may negatively affect the project and other events that may positively affect the project", 
            "d) They are project deliverables and tasks that are performed to create the deliverables."
        ],
        answer: "d) They are project deliverables and tasks that are performed to create the deliverables."
    },
    {
        question: "When a system development project is started, it is foreseen that the progress of the project may be affected by a large number of requests for specification change that come from users during the course of development. Which of the following is the most appropriate measure for ensuring that there is no deterioration in quality or delay in delivery date? ",  
        options: [
            "a) Declaring to the customer that requests for change cannot be accepted after the completion of design", 
            "b) Shortening the test period by skipping tests when a delay occurs during the course of the project ", 
            "c) Including in the plan that the implementation of a function will be called off if there are a large number of requests for change", 
            "d) Reaching an agreement with the customer concerning the priority scheduling method of requests for change and their scope of handling"],
        answer: "d) A schedule that aggregates the main deliverables and activities of the entire project"
    },
    {
        question: "The processes of project management include project cost management, project communications management, project resources management, project schedule management, and the like. In a system development project, which of the following is the most appropriate activity in project cost management when members are added for implementing a test?",  
        options: [
            "a) Updating the mailing list, etc. so that information can be efficiently transmitted to the newly participating members ", 
            "b) Requesting a vendor to provide training on the testing tool to the newly participating members ", 
            "c) Adding tasks to be handled by the newly participating members, and changing the schedule", 
            "d) Estimating the personnel expenses of the newly participating members, and changing the planning"],
        answer: "d) Estimating the personnel expenses of the newly participating members, and changing the planning"
    },
    {
        question: " The PC on one’s desk and the printer in a shared space are started by a single person under the conditions shown in the figure below. It is only possible for the operations and processing of the PC and printer and the movement of the person to be performed sequentially, but during automatic processing of one device, it is possible for the person to move or operate the other device, or for the other device to perform automatic processing. What is the required time (in seconds) for the person to start the PC startup at his/her desk, then move and start and end the printer startup, return to his/her desk, and end the PC startup?",  
        image: "img/Q(57).png",
        options: ["a) 223", "b) 256, (iv)", "c) 286", "d) 406 "],
        answer: "a) 223"
    },
    {    
        question: "Which of the following is an appropriate management system that improves the efficiency of the management of IT operations and the quality of services including availability?",  
        options: [
            "a) IT technical strategy management", 
            "b) IT service management ", 
            "c) IT project scope management", 
            "d) IT project time management"],
        answer:  "b) IT service management "
    },
    {    
        question: "In IT service management, which of the following is an appropriate process for resolving the fundamental causes of incidents and preventing their recurrence?",  
        options: ["a) Incident management", "b) Change management", "c) Problem management", "d) Release and deployment management"],
        answer: "c) Problem management"
    },
    {    
        question: "When service desk, reliability, and data management are among the items of an SLA of an application hosting and operation service, which of the following is the appropriate combination of the indexes A through C of the service level, and the items of the SLA?",  
        options: [
            "a) Measurement of response time", 
            "b) Monitoring of failure occurrence ", 
            "c) Management of the server configuration used by the organization", 
            "d) Recording of the modification history of a program"
        ],
        answer: "b) Monitoring of failure occurrence "
    },
    {    
        question: "When service desk, reliability, and data management are among the items of an SLA of an application hosting and operation service, which of the following is the appropriate combination of the indexes A through C of the service level, and the items of the SLA?",  
        image: "img/Q(61).png",
        options: [
            "a) ", 
            "b)", 
            "c) ", 
            "d) "
        ],
        answer: "c) "
    },
    {    
        question: "Which of the following is the most appropriate example of implementation of agile development?",  
        options: [
            "a) Conducting a trial before undertaking development in order to verify the prediction accuracy of an AI system, and selecting an effective algorithm", 
            "b) Outsourcing development to vendors who have the technology in order to widely adopt various technologies of IoT", 
            "c) Proceeding with the development of a large-scale IoT system in a sequential manner while approving the completion in each process from the upstream processes up to the downstream processes", 
            "d) Adding the functions of an analysis program while repeating fixed short-period cycles in order to improve the accuracy of analysis in the development of an analysis system"
        ],
        answer:"d) Adding the functions of an analysis program while repeating fixed short-period cycles in order to improve the accuracy of analysis in the development of an analysis system"
    },
    {    
        question: " Which of the following is an appropriate measure to implement internal controls function? ",  
        options: [
            "a) Avoiding creating a job description indicating the scope of work and roles", 
            "b) Avoiding creating a work handover document for a successor", 
            "c) Avoiding processing purchasing and payment by the same person", 
            "d) Avoiding separating team members for system development and system operation "
        ],
        answer:"c) Avoiding processing purchasing and payment by the same person"
    },
    {    
        question: "  Which of the following is the appropriate combination of terms or phrases to be inserted into blanks A and B in the description below concerning the purpose of system audits? ",  
        image: "img/Q(64).png",
        options: [
            "a) ", 
            "b) ", 
            "c)  ", 
            "d)  "
        ],
        answer:"d)  "
    },
    {    
        question: "  Among the activities A through D concerning the information system of a company, which of the following is the list that contains all and only the appropriate activities that are performed from the viewpoint of the business continuity plan (BCP)? ",  
        options: [
            "a) A, B, C ", 
            "b) A, B, C, D", 
            "c) A, D", 
            "d) B, C, D"
        ],
        answer:"b) A, B, C, D"
    },
    {    
        question: "  Which of the following is a concept that forms the basis of corporate activities and perceives and tackles social issues such as contribution to society and protection of the global environment, rather than simply pursues profit?",  
        options: [
            "a) BCP", 
            "b) CSR", 
            "c) M&A", 
            "d) MBO"
        ],
        answer:"b) CSR "
    },
    {    
        question: " Which of the following examples of capacity building and guidance for subordinates is classified as OJT?",  
        
        options: [
            "a) A manager made subordinates set career goals and make plans for achieving them.", 
            "b) With subordinates' careers in mind, a manager made subordinates attend a manager development course hosted by the Personnel Department.", 
            "c) A manager made subordinates take part in a new development project to improve their design capabilities.", 
            "d) A manager selected an externally hosted seminar matched to subordinates' fields of expertise and careers, and made the subordinates attend it."
        ],
        answer:"c) A manager made subordinates take part in a new development project to improve their design capabilities."
    },
    {    
        question: "An implementation plan for a company-wide information system that is consistent with the business strategy is to be created. Which of the following is the most appropriate person to take responsibility for this activity? ",  
        
        options: [
            "a) CIO", 
            "b) CTO", 
            "c) Head of the core business department ", 
            "d) Person in charge of planning in the information systems department "
        ],
        answer:"a) CIO"
    },
    {    
        question: "  Which of the following is an appropriate way to brainstorm?",  
        options: [
            "a) Asking participants to present feasible ideas and refrain from generating unrestrained ideas", 
            "b) Proceeding with the session without blaming any member who creates an improved idea that takes advantage of another member’s idea", 
            "c) Proceeding with the session while selecting the ideas that are suitable to the theme", 
            "d) Encouraging the criticism of ideas to pursue quality rather than quantity of ideas"
        ],
        answer:"b) Proceeding with the session without blaming any member who creates an improved idea that takes advantage of another member’s idea"
    },
    {    
        question: "  The operating profit when the sales quantity of a product is 700 units is as shown in the table below. When the unit sales price is reduced by 20% to expand sales, the sales quantity increases by 20%. How much, in yen, is the operating profit at this time? Here, the variable cost per one (1) unit of the product does not change.",  
        image: "img/Q(70).png",
        options: [
            "a) 200,000", 
            "b) 204,000 ", 
            "c) 260,000 ", 
            "d) 320,000"
        ],
        answer:"b) 204,000 "
    },
    {    
        question: "Company A is a large company with multiple offices nationwide, and it created BCP that envisaged the total destruction of the head office building in a large natural disaster. In consideration of the purpose of the BCP, which of the following is Company A’s most appropriate BCP?",  
        options: [
            "a) In order to prevent damage by a fire that occurs after a disaster, replacing curtains and other such things with flame-resistant products and planning regular checks of fire prevention equipment", 
            "b) In order to swiftly respond to instructions from the head office when a disaster occurs, establishing a procedure to completely halting work at all offices and have all employees standby until an instruction is received from the head office", 
            "c) In order to continue business after a natural disaster, specifying an office to take over the functions of the head office, narrowing down the important work that needs to be dealt with, and establishing an implementation procedure for this work", 
            "d) Incorporating insurance premiums for the head office building into the annual budget, and preparing for a relocation to a building with the same scale as the current head office "
        ],
        answer:"c) In order to continue business after a natural disaster, specifying an office to take over the functions of the head office, narrowing down the important work that needs to be dealt with, and establishing an implementation procedure for this work"
    },
    {    
        question:" Which of the following is the most appropriate terminology for referring to a method that uses AI, IoT, and other such IT for personnel-related work such as personnel evaluations and recruitment with aims including the improvement of a company’s personnel functions and achieving reform in working styles?",  
        options: [
            "a) e-Learning", 
            "b) Fintech", 
            "c) HR Tech ", 
            "d) Competency"
        ],
        answer:"c) HR Tech "
    },
    {    
        question:" Which of the following is the right that belongs to a purchaser of a PC software package provided by means of CD-ROM??",  
        options: [
            "a) Right to use the program stored in the CD-ROM", 
            "b) Copyright of the program stored in the CD-ROM", 
            "c) Design right of the CD-ROM storing the program", 
            "d) Copyright of the CD-ROM storing the program"
        ],
        answer:"a) Right to use the program stored in the CD-ROM"
    },
    {    
        question:"  Among actions concerning the creation of a computer program, which of the following is a copyright violation?",  
        options: [
            "a) Creating another Web page by using the source of HTML that was downloaded from the Internet", 
            "b) Creating a program based on an idea that was discussed on a bulletin board on the Internet", 
            "c) Creating a program to increase a company’s operational efficiency by using a program that was created during one’s school days", 
            "d) Creating a program based on a flowchart in a purchased book"
        ],
        answer:"a) Creating another Web page by using the source of HTML that was downloaded from the Internet"
    },
    {    
        question:" From the viewpoint of corporate governance, which of the following is the most appropriate method of strengthening the functions of monitoring and supervising the decision-making process of the management?",  
        options: [
            "a) Installing a camera for monitoring the entry and exit of the president’s office", 
            "b) Periodically requesting a private detective to investigate the conduct of the management ", 
            "c) Appointing some outside directors ", 
            "d) Employing law school graduates as members of the internal audit department"
        ],
        answer:"c) Appointing some outside directors "
    },
    {    
        question:" Which of the following is the most appropriate as an example of an enhancement activity for compliance? ",  
        options: [
            "a) Expansion of a program to support the community service activities of employees", 
            "b) Education for employees concerning laws and rules that must be followed ", 
            "c) Acquisition of another company’s business for swift business deployment ", 
            "d) Withdrawal from businesses where it is difficult to make profit"
        ],
        answer: "b) Education for employees concerning laws and rules that must be followed "
    },
    {    
        question:"  Which of the following is an international standardization organization that engages in standardization of information security management systems and quality management systems?",  
        options: [
            "a) ANSI", 
            "b) CEN", 
            "c) ISO", 
            "d) JIS"
        ],
        answer:"c) ISO"
    },
    {    
        question:"  Which of the following is a code that stores information in a vertical and horizontal two-dimensional pattern?",  
        options: [
            "a) ASCII code ", 
            "b) G-code", 
            "c) EAN code", 
            "d) QR code"
        ],
        answer:"d) QR code"
    },
    {    
        question:" The business operations of the entire company, such as production, sale, procurement, accounting, and human resources are to be managed in an integrated manner, and the management resources of the entire enterprise are to be optimized. Which of the following is an appropriate information system for implementing this objective?",  
        
        options: [
            "a) CRM system ", 
            "b) ERP system ", 
            "c) HRM system", 
            "d) MRP system"
        ],
        answer:"b) ERP system "
    },
    {    
        question:" Which of the following is an appropriate description concerning the Balanced Scorecard (BSC)? ",  
        options: [
            "a) It analyzes what activities generate the value of products and services that are provided to customers.", 
            "b) It creates strategy and evaluates performance from four (4) viewpoints: financial, customer, internal business processes, and learning and growth. ", 
            "c) It records entries in a ledger in order to ensure that the amounts of credits and debits are always in balance. ", 
            "d) It scores and evaluates the creditworthiness of business partners through such means as financial indicators."
        ],
        answer:"b) It creates strategy and evaluates performance from four (4) viewpoints: financial, customer, internal business processes, and learning and growth. "
    },
    {    
        question:"A middle-sized electrical manufacturer company A divides the products into groups in accordance with their potential and competitive strength in order to determine the priority of investing funds among their lineup. Which of the following is the most appropriate method of analysis for this purpose?",  
        options: [
            "a) Cluster analysis regarding the prices and the customer bases of the company’s products", 
            "b) RFM analysis regarding the customers that purchase the company’s products", 
            "c) PPM analysis regarding the shares and the market growth rates of the company’s products ", 
            "d) Principal component analysis regarding the cause of faults in the company’s products"
        ],
        answer:"c) PPM analysis regarding the shares and the market growth rates of the company’s products "
    },
    {    
        question:"Which of the following is a system that centrally manages the process from materials procurement to product sales, and aims for the optimization of supply?",  
        options: [
            "a) ASP ", 
            "b) CRM", 
            "c) ERP ", 
            "d) SCM"
        ],
        answer:"d) SCM"
    },
    {    
        question:"Which of the following is the appropriate explanation of benchmarking used for corporate management?",  
        options: [
            "a) It refers to the promotion of continual improvement of business processes by applying the PDCA cycle.", 
            "b) It refers to the best sample for comparison and analysis when improvements are to be made.", 
            "c) It refers to the unique skills and technologies for securing superiority over competitors.", 
            "d) It refers to the measurement of the products and services of one’s company, and their comparison with other superior competitors. "
        ],
        answer:"d) It refers to the measurement of the products and services of one’s company, and their comparison with other superior competitors. "
    },
    {    
        question:"Several companies want to collaborate on research and development to develop a new business. Which of the following is an appropriate organization for a new company that is formed through collaborative investment?",  
    
        options: [
            "a) M&A", 
            "b) Cross-license", 
            "c) Joint venture", 
            "d) d) Spin-off"
        ],
        answer:"c) Joint venture"
    },
    {    
        question:" Which of the following is the appropriate explanation of a technology road map?",  
        options: [
            "a) It is a description of the required technology for the implementation of the shortest route search function that is used in systems such as a car navigation system. ", 
            "b) It is a list of software technology that is used in the development process for a business system.", 
            "c) It is a description of the technology that the human resources of an information system department should learn for each career path ", 
            "d) It is a description of technology in the relevant field that is anticipated to be implemented and its implementation timeline."
        ],
        answer:"d) It is a description of technology in the relevant field that is anticipated to be implemented and its implementation timeline. "
    },
    {    
        question:" Which of the following systems can be realized through the use of RFID?",  
        options: [
            "a) Providing medical care by transmitting images and voice data of patients from a remote site via a network", 
            "b) Depositing and withdrawing money from a bank ATM by using an ATM card", 
            "c) Reading product information from the barcodes on products, and performing sales management and order processing at the time of sale in stores ", 
            "d) Setting an electronic tag on a delivery parcel, and checking information related to the shipping record of the parcel "
        ],
        answer:"d) Setting an electronic tag on a delivery parcel, and checking information related to the shipping record of the parcel "
    },
    {    
        question:"When build-to-order production is compared to build-to-stock production, which of the following is an appropriate characteristic of build-to-order production?",  
        options: [
            "a) Shipment is not possible immediately when an order is received, but there is no risk of an excessive number of products in the inventory", 
            "b) It is required to increase the accuracy of order forecast, and maintain the optimum inventory volume of products.", 
            "c) It brings the risk of the loss of sales opportunities through insufficient product inventory.", 
            "d) Products are produced according to a production plan that is proposed on the basis of order forecast."
        ],
        answer:"a) Shipment is not possible immediately when an order is received, but there is no risk of an excessive number of products in the inventory"
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
        question:" Which of the following goal can be expected to be achieved by the introduction of Just In Time?",  
        options: [
            "a) Improving the productivity of the sales department", 
            "b) Building a long-term relationship with customers ", 
            "c) Understanding the sales status for each individual product unit", 
            "d) Reducing semi-manufactured goods and the number of components in inventory "
        ],
        answer:"d) Reducing semi-manufactured goods and the number of components in inventory  "
    },
    {    
        question:" Which of the following is an appropriate explanation of CAD? ",  
        options: [
            "a) Which of the following is an appropriate explanation of CAD?", 
            "b) It refers to the use of computers in the design of buildings and industrial products. ", 
            "c) It is an imaging element that converts light to an electrical signal.", 
            "d) It refers to the combination of characters, images, audio, and other data in order to create a single piece of content."
        ],
        answer:"b) It refers to the use of computers in the design of buildings and industrial products. "
    },
    {    
        question:". Which of the following is a term that refers to something that is modeled on the mechanism of a human brain and imitated with a computer program?",  
        options: [
            "a) Social network", 
            "b) Digital transformation", 
            "c) Neural network", 
            "d) Brainstorming"
        ],
        answer:"c) Neural network"
    },
    {    
        question:" Which of the following is the most appropriate description concerning deep learning?",  
        options: [
            "a) It is a mechanism that integrates information and the workflow between departments that are involved with customers, such as sales, marketing, and after-sales service.", 
            "b) It is a form of education, learning, and training that is implemented by using digital devices such as computers, and communication networks.", 
            "c) It is a mechanism for the knowledge and knowhow possessed by each individual in an organization to be shared and effectively utilized by the organization as a whole. ", 
            "d) It is a technology where a computer itself identifies and learns the characteristics of data by analyzing a large volume of data with a model that imitates the neural circuits of a human being."
        ],
        answer:"d) It is a technology where a computer itself identifies and learns the characteristics of data by analyzing a large volume of data with a model that imitates the neural circuits of a human being. "
    },
    {    
        question:" Which of the following corresponds to information literacy?",  
        options: [
            "a) Knowledge of new PC products and each model’s performance ", 
            "b) The ability to perceive the impacts of technological innovations on society", 
            "c) The ability to search for data necessary for business and use it in accordance with goals. ", 
            "d) The ability to use high-level programming languages and develop software "
        ],
        answer:"c) The ability to search for data necessary for business and use it in accordance with goals. "
    },
    {    
        question:" Which of the following is the most appropriate purpose of implementing gamification by taking full advantage of the game elements such as points and badges?",  
        options: [
            "a) Deciding one’s own strategy in a game according to the strategy of the opponent ", 
            "b) Providing motivation to help achieve the goals of the customers and employees", 
            "c) Collecting user evaluation concerning new network games", 
            "d) Analyzing large volume of data to detect useful facts and relationships"
        ],
        answer:"b) Providing motivation to help achieve the goals of the customers and employees"
    },
    {    
        question:"When a guest arrives at a certain restaurant, their name is registered in a visitor list. When the guest is allocated a seat, both the guest list and seating availability are referenced. Which of the following is the most appropriate DFD to represent this series of actions? ",  
        image: "img/Q(95).png",
        options: [
            "a) ", 
            "b)", 
            "c) ", 
            "d) "
        ],
        answer:"d) "
    },
    {    
        question:" . Which of the following is the most appropriate description of teleworking?",  
        options: [
            "a) It is a flexible way of working that uses IT and is not restricted by location", 
            "b) It is an increase in the number of people assigned to a certain task, and the division of the task into smaller subtasks for allocation", 
            "c) It is the use of an individual’s own PC or smart device for work at an office with the permission of the company.", 
            "d) It is an attempt to balance working time with non-working time. "
        ],
        answer:"a) It is a flexible way of working that uses IT and is not restricted by location"
    },
    {    
        question:" Which of the following is an appropriate procedure for selecting a contractor for system development?",  
        image: "img/Q(97).png",
        options: [
            "a) A → C → D → B ", 
            "b) A → D → C → B", 
            "c) C → A → B → D", 
            "d) C → B → A → D"
        ],
        answer:"b) A → D → C → B"
    },
    {    
        question:"Which of the following is the most appropriate description of IoT?",  
        options: [
            "a) It is a learning mechanism in artificial intelligence.", 
            "b) It is a mechanism where devices or control units equipped with a sensor connect to the Internet and exchange a variety of information via the Internet. ", 
            "c) It is a group of functions and procedures that are made public in order to enable some of the features of a piece of software to be used by other programs.", 
            "d) It is a tool that uses a software robot to streamline routine work."
        ],
        answer:"b) It is a mechanism where devices or control units equipped with a sensor connect to the Internet and exchange a variety of information via the Internet. "
    },
    {    
        question:" Which of the following is the appropriate combination of terms or phrases to be inserted into blanks A through C in the description below concerning a request for proposal?",  
        image: "img/Q(99).png",
        options: [
            "a) ", 
            "b) ", 
            "c) ", 
            "d) "
        ],
        answer:"a) "
    },
    {    
        question:"When the software lifecycle is divided into the planning process, the requirements definition process, the development process, and the operation process, which of the following is the process where the system functions that users and stakeholders require are clarified and consensus is built on the basis of a computerization plan?",  
        options: [
            "a) Planning process", 
            "b) Requirements definition process", 
            "c) Development process", 
            "d) Operation process"
        ],
        answer:"b) Requirements definition process"
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


