const quizData = [
    {
        question: "",
        image: "img/Q(1).png",
        options: ["a)", "b)", "c)", "d)"],
        answer: "b)"
    },
    {
        question: "Which of the following is a decimal that is represented as a finite digit octal fraction?",
        options: ["a) 0.3", "b) 0.4", "c) 0.5", "d) 0.8"],
        answer: "c) 0.5"
    },
    {
        question: "",
        image: "img/Q(3).png",
        options: ["a) 3", "b) 4", "c) 6", "d) 7"],
        answer: "b) 4"
    },
    {
        question: "",
        image: "img/Q(4).png",
        options: ["a) From the slope and the y-intercept of the regression line, the tendency is to obtain a higher score for the current year than the previous year",
            "b) From the slope of the regression line and the correlation coefficient, the exam of the current year is of high quality.",
            "c) From the slope of the regression line, the average score for the current year is 1.1 times that of the previous year.",
            "d) From the y-intercept of regression line, those who get zero for the current year can get a score as high as 10 for the previous year."],
        answer: "a) From the slope and the y-intercept of the regression line, the tendency is to obtain a higher score for the current year than the previous year"
    },
    {
        question: "",
        image: "img/Q(5).png",
        options: ["a) +0010",
            "b) −1",
            "c) 12.2",
            "d) 9.0"],
        answer: "c) 12.2"
    },
    {
        question: "Which of the following is an appropriate description of parity check (vertical parity) that handles transmission errors on a communication line?",
        options: ["a) A parity check can correct 1-bit and 2-bit errors.",
            "b) A parity check can detect a 1-bit error.",
            "c) An odd parity check can detect a 1-bit error, but an even parity check cannot even detect a 1-bit error.",
            "d) An odd parity check can detect any odd number of bit errors, and an even parity check can detect any even number of bit errors."],
        answer: "b) A parity check can detect a 1-bit error."
    },
    {
        question: "When a sequence of data, A, B, C, D, arrives in this order, which of the following is a possible sequence that can be produced using a single stack?",
        options: ["a) A, D, B, C",
            "b) B, D, A, C",
            "c) C, B, D, A",
            "d) D, C, A, B"],
        answer: "c) C, B, D, A"
    },
    {
        question: "",
        image: "img/Q(8).png",
        options: ["a) 1, 2, 4, 7, 8, 5, 3, 6, 9",
            "b) 6, 9, 3, 1, 5, 2, 8, 4, 7",
            "c) 7, 4, 8, 2, 5, 1, 3, 9, 6",
            "d) 7, 8, 4, 5, 2, 9, 6, 3, 1"],
        answer: "c) 7, 4, 8, 2, 5, 1, 3, 9, 6"
    },
    {
        question: "Which of the following explains the objective of a recursive call?",
        options: ["a) To allow a function to use itself from within its body",
            "b) To execute processes in an event-driven way rather than in a predetermined order",
            "c) To retain a function in memory for reuse after its execution",
            "d) To undo an execution of a process when it fails"],
        answer: "a) To allow a function to use itself from within its body"
    },
    {
        question: "Which of the following is a technology that provides a dynamic user interface without page transition using an asynchronous communication in JavaScript?",
        options: ["a) Ajax",
            "b) CSS",
            "c) RSS",
            "d) SNS"],
        answer: "a) Ajax",
    },
    {
        question: "Which of the following is a special register that contains the address of the next instruction to be fetched?",
        options: ["a) Accumulator",
            "b) Program Counter (PC)",
            "c) Stack Pointer",
            "d) Timer"],
        answer: "b) Program Counter (PC)"
    },
    {
        question: "",
        image: "img/Q(12).png",
        options: ["a) 0.04",
            "b) 0.25",
            "c) 4",
            "d) 25"],
        answer: "c) 4"
    },
    {
        question: "Which of the following is a computer system or architecture where the CPU sequentially reads and executes the programs that are stored in the main memory?",
        options: ["a) Addressing system",
            "b) DMA control architecture",
            "c) Stored program architecture",
            "d) Virtual memory system"],
        answer: "c) Stored program architecture"
    },
    {
        question: "Which of the following is an appropriate description of USB 3.0?",
        options: ["a) It is a serial interface that adopts isochronous transmission that is suitable for audio or video, and has a broadcast transmission mode.",
            "b) It is a serial interface that has a data transmission mode of 5 Gbit/s that is called super speed.",
            "c) It is a serialized ATA specification that connects a PC to a peripheral device.",
            "d) It is an interface that uses four (4) pairs of signal lines transmitting two (2) bits of information in one (1) clock and has a maximum throughput of 1 Gbit/s."],
        answer: "b) It is a serial interface that has a data transmission mode of 5 Gbit/s that is called super speed."
    },
    {
        question: "Which of the following is the RAID level where the entire stored data is lost when one of the multi-disks is damaged?",
        options: ["a) RAID 0",
            "b) RAID 1",
            "c) RAID 5",
            "d) RAID 6"],
        answer: "a) RAID 0"
    },
    {
        question: ". Which of the following is the approximate availability of a system in percentage when theMTBF is 30 days and the MTTR is 6 hours?",
        options: ["a) 0.83",
            "b) 83.33",
            "c) 98.36",
            "d) 99.17"],
        answer: "d) 99.17"
    },
    {
        question: "",
        image: "img/Q(17).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "c)"
    },
    {
        question: "Among the page replacement methods in virtual memory management, which of the following is the LRU control method?",
        options: ["a) Each page is managed by appending a reference flag and a change flag, and pages without reference or change are replaced with higher priority.",
            "b) One of the pages in main memory is randomly chosen with the same probability and then replaced.",
            "c) The page that has been stored in the main memory for the longest time is replaced.",
            "d) The page that has not been referenced the longest time is replaced."],
        answer: "d) The page that has not been referenced the longest time is replaced."
    },
    {
        question: "Which of the following is an appropriate function of a linker?",
        options: ["a) To load a load module to the main memory ahead of execution",
            "b) To monitor the execution of a program and to record the execution results for each step",
            "c) To perform a resolution of cross references and to create one (1) load module from multiple object modules",
            "d) To register a created program in a library"],
        answer: "c) To perform a resolution of cross references and to create one (1) load module from multiple object modules"
    },
    {
        question: "Which of the following is the appropriate explanation of sequence control for controlling industrial devices?",
        options: ["a) It is based on fuzziness, such as “slightly more” or “slightly less.”",
            "b) It is resistant to unexpected disturbances because it continuously detects the amount of control and reflects it on the control.",
            "c) It steps through each phase of control one after another according to a predefined orderor set of conditions.",
            "d) It takes corrective action in advance by assuming the occurrence of disturbances when disturbances can be expected."],
        answer: "c) It steps through each phase of control one after another according to a predefined orderor set of conditions."
    },
    {
        question: "",
        image: "img/Q(21).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "a)"
    },
    {
        question: "Which of the following is not an implementation of the function F = A•B + C•D? Here, “•” represents the logic AND operation, and “+” represents the logic OR operation in the expression.",
        options: ["img/Q(22)_a.png",
            "img/Q(22)_b.png",
            "img/Q(22)_c.png",
            "img/Q(22)_d.png"],
        answer: "img/Q(22)_c.png"
    },
    {
        question: "Which of the following is an appropriate purpose of check digit?",
        options: ["a) To detect an error that an alphabet or a symbol is contained in a numeric item field",
            "b) To detect an error that the number of digits of an entered code is incorrect",
            "c) To detect an error that the value of an entered code is incorrect",
            "d) To detect an error that the value of an entered data is not within a specified range"],
        answer: "c) To detect an error that the value of an entered code is incorrect"
    },
    {
        question: "Which of the following explains a drawing software?",
        options: ["a) It can create a picture on a screen using the mouse as a brush that can be saved to a bitmap image file.",
            "b) It can create a scenario-based content by editing and arranging several materials, such as text, images, video, and sound.",
            "c) It can create a simple movie from a series of still images by gradually changing the differences among images.",
            "d) It can create vector graphics composed of lines and curves defined mathematically with geometric characteristics that can then be transformed or combined."],
        answer: "d) It can create vector graphics composed of lines and curves defined mathematically with geometric characteristics that can then be transformed or combined."
    },
    {
        question: "Which of the following is an appropriate explanation of a relational database?",
        options: ["a) Data is represented as a table, and the tables are linked to one another using the column values of these tables.",
            "b) Each attribute is represented as a pair of the attribute value and the storage location of the record having that value and used as an index.",
            "c) The relationship among records is represented by a data structure using links that can represent both tree and network structures.",
            "d) The relationship among records is represented by a data structure using pointers that are limited to representing a tree structure."],
        answer: "a) Data is represented as a table, and the tables are linked to one another using the column values of these tables."
    },
    
    {
        question: "Which of the following is performed periodically to prevent a decline in the access efficiency of a database?",
        options: ["a) Backup",
            "b) Database dump",
            "c) Reorganization",
            "d) Rollback"],
        answer: "c) Reorganization"
    },
    {
        question: "",
        image: "img/Q(27).png",
        options: ["a) SELECT * FROM Student WHERE name LIKE ’%A’;",
            "b) SELECT * FROM Student WHERE name LIKE ‘%A_’;",
            "c) SELECT * FROM Student WHERE name LIKE ‘A_’;",
            "d) SELECT * FROM Student WHERE name LIKE ‘A%’;"],
        answer: "d) SELECT * FROM Student WHERE name LIKE ‘A%’;"
    },
    {
        question: "",
        image: "img/Q(28).png",
        options: ["a) Searching for sales with a sales amount of 100 dollars or more. <sales amount>",
            "b) Searching for sales with the product name beginning with ‘DB’. <product name>",
            "c) Searching for sales with the sales date as the current month. <sales date>",
            "d) Searching for sales with the user ID as ‘1001’. <user ID>"],
        answer: "d) Searching for sales with the user ID as ‘1001’. <user ID>"
    },
    {
        question: "Which of the following is the appropriate explanation of the key value store that is used in the processing of big data?",
        options: ["a) It is represented by a two-dimensional table with rows and columns based on the set theory.",
            "b) It represents the relationship among nodes with the three (3) elements, i.e., “node,” “relationship,” and “property.”",
            "c) It saves the desired data together with a value that enables this data to be uniquely identified as a pair.",
            "d) The data for one (1) case is called a “document,” and the data structure of each document is unrestricted and can be changed whenever data is added"],
        answer: "c) It saves the desired data together with a value that enables this data to be uniquely identified as a pair."
    },
    {
        question: "",
        image: "img/Q(30).png",
        options: ["a) 1.4",
            "b) 3.8",
            "c) 5.0",
            "d) 5.8"],
        answer: "d) 5.8"
    },
    {
        question: "Which of the following is an appropriate transmission operation of a node connected to a CSMA/CD LAN?",
        options: ["a) All nodes are connected in a ring topology, where a special frame is circulated around to control transmission rights. Only the node that has the special frame can transmit data.",
            "b) Each node is logically ordered, a transmission right is passed along in order, and only the node that has received the right can transmit data",
            "c) Each node waits for the medium to be idle before transmitting data. When collision occurs, it waits for a random backoff time before retransmission.",
            "d) Only the node that has a time slot assigned can transmit data."],
        answer: "c) Each node waits for the medium to be idle before transmitting data. When collision occurs, it waits for a random backoff time before retransmission."
    },
    {
        question: "In a TCP/IP environment, which of the following is a protocol for synchronizing the clocks of multiple computers with that of a time server?",
        options: ["a) FTP",
            "b) NNTP",
            "c) NTP",
            "d) RTP"],
        answer: "c) NTP"
    },
    {
        question: "Which of the following is an appropriate explanation of DHCP?",
        options: ["a) It is a protocol for accessing a directory service",
            "b) It is a protocol for automatically assigning an IP address",
            "c) It is a protocol for converting a private IP address to a global IP address.",
            "d) It is a protocol for forwarding an e-mail"],
        answer: "b) It is a protocol for automatically assigning an IP address"
    },
    {
        question: "Which of the following is classified as a web beacon?",
        options: ["a) A potential error of an application program used for a website",
            "b) A technique to collect user information, such as access trends, by embedding a small image in a web page",
            "c) A virus that is downloaded from a website that deletes image files on a PC",
            "d) An abusive method of using a malicious script that is harmful to both client PC and web server"],
        answer: "b) A technique to collect user information, such as access trends, by embedding a small image in a web page"
    },
    {
        question: "When risk treatment is classified as risk avoidance, risk reduction, risk acceptance, and risk sharing, which of the following risk treatments is risk avoidance?",
        options: ["a) Applying appropriate controls to lower a risk",
            "b) Discontinuing some operations that have a risk",
            "c) Knowingly and objectively not taking any action on a risk",
            "d) Transferring a risk to other parties"],
        answer: "b) Discontinuing some operations that have a risk"
    },
    {
        question: "Which of the following is installed into an in-house network or server by an intruder to enter through an access path other than the normal path?",
        options: ["a) Backdoor",
            "b) Forensic",
            "c) Strict routing",
            "d) Thin client agent"],
        answer: "a) Backdoor"
    },
    {
        question: "Biometric authentication includes a verification method that extracts physical characteristics and another verification method that extracts behavioral characteristics. Which of the following is the method that uses behavioral characteristics?",
        options: ["a) Performing authentication by extracting characteristics from pen speed and pressure when a signature is provided",
            "b) Performing authentication by extracting characteristics from the bifurcation angle of the bifurcation point of a blood vessel or from the distance between adjacent bifurcation points",
            "c) Performing authentication by extracting the characteristic point called minutia from the pattern formed by ridges",
            "d) Performing authentication by extracting the characteristics of chaotic wrinkles in the eye from the pupil to the outside"],
        answer: "a) Performing authentication by extracting characteristics from pen speed and pressure when a signature is provided"
    },
    {
        question: "Which of the following is an encryption method that can be used for encrypting data managed in a database using the same key for encryption and decryption?",
        options: ["a) AES",
            "b) PKI",
            "c) RSA",
            "d) SHA-256"],
        answer: "a) AES"
    },
    {
        question: "",
        image: "img/Q(39).png",
        options: ["a) Administrator right",
            "b) Reference right",
            "c) Update right",
            "d) Update right and reference right"],
        answer: "b) Reference right"
    },
    {
        question: "A cybersecurity incident response plan is defined as a set of instructions to aid the cybersecurity team to detect, respond to, and recover from cybersecurity incidents. The cybersecurity incident response plan resolves issues, such as cybercrime, data loss, and service outages that threaten daily work. Which of the following is part of the cybersecurity incident response plan?",
        options: ["a) Attacking systems with scripts",
            "b) Containment",
            "c) Social engineering activities",
            "d) Stealing user credentials"],
        answer: "b) Containment"
    },
    {
        question: "Between a client and web server, which of the following is used for inspecting the data that is sent from the client to the web server and blocking attacks, such as SQL injections?",
        options: ["a) Cluster configuration",
            "b) Load balancing function",
            "c) SSL-VPN function",
            "d) WAF"],
        answer: "d) WAF"
    },
    {
        question: "Which of the following is an appropriate description of SSH?",
        options: ["a) It cannot use public key pairs, and it uses a password for authentication.",
            "b) It helps in securely loading web site pages over HTTPS.annel for server maintenance over a public network.",
            "c) It provides a secure channel for server maintenance over a public network.",
            "d) Its use is required in the Intranet."],
        answer: "c) It provides a secure channel for server maintenance over a public network."
    },
    {
        question: "Which of the following is an appropriate description concerning Sender Policy Framework (SPF) for email communication?",
        options: ["a) It is a policy of the public relations department to designate a specific person to send emails.",
            "b) It is an email sent from a spoofed email address without authorization.",
            "c) It matches the sender mail server IP address with the information from the domain server and accepts or rejects email.",
            "d) It sends an email to the address of a specific person instead of sending them to multiple email addresses."],
        answer: "c) It matches the sender mail server IP address with the information from the domain server and accepts or rejects email."
    },
    {
        question: "Which of the following is an appropriate explanation of OP25B for email communication?",
        options: ["a) Blocking communication to port 25 to reduce mass-scale delivery of spam or junk emails",
            "b) Blocking emails that are sent to more than 25 recipients at once due to organizational policy",
            "c) Blocking Simple Mail Transfer Protocol (SMTP) communication except those sent to port 25",
            "d) Blocklisting email addresses that send spams by monitoring email communication to port 25"],
        answer: "a) Blocking communication to port 25 to reduce mass-scale delivery of spam or junk emails"
    },
    {
        question: "Which of the following is the UML class diagram that shows a generalization relation?",
        options: ["img/Q(45)_a.png",
            "img/Q(45)_b.png",
            "img/Q(45)_c.png",
            "img/Q(45)_d.png"],
        answer: "img/Q(45)_c.png"
    },
    {
        question: "",
        image: "img/Q(46).png",
        options: ["a) Activity",
            "b) Data flow",
            "c) Data store",
            "d) Process"],
        answer: "d) Process"
    },
    {
        question: "Which of the following is an appropriate relationship between classes and instances in object orientation?",
        options: ["a) An instance defines the specifications of a class.",
            "b) An instance is created based on the definition of a class.",
            "c) Multiple classes correspond to a single instance."
            ,"d) Only one (1) instance exists for a single class."],
        answer: "b) An instance is created based on the definition of a class."
    },
    {
        question: "Which of the following is the weakest module coupling?",
        options: ["a) To implement as many functions as possible with a single module",
            "b) To pass arguments that control another module’s logic when the module is called",
            "c) To pass only required data items as arguments between two (2) modules",
            "d) To use a global area to share data items with other modules"],
        answer: "c) To pass only required data items as arguments between two (2) modules"
    },
    {
        question: "Which of the following tests verifies the interfaces between two (2) modules orsubsystems?",
        options: ["a) Acceptance test",
            "b) Integration test",
            "c) Operational test",
            "d) Unit test"],
        answer: "b) Integration test"
    },
    {
        question: "Which of the following is an appropriate explanation of a comprehensive patent cross-license?",
        options: ["a) An agreement to share the necessary costs for patent registration is concluded",
            "b) The source code is published free of charge on the Internet or other places, and anyone may improve and redistribute the software.",
            "c) The use of patent rights is mutually licensed among companies in the specified fields of technologies or products.",
            "d) To ensure that a company’s patent rights are not violated, the right to stop a counterpart’s manufacturing is exercised."],
        answer: "c) The use of patent rights is mutually licensed among companies in the specified fields of technologies or products."
    },
    {
        question: "Based on the definition of project management process groups in ISO 21500, which of the following is an activity that is to be implemented in the planning process group among the project management processes?",
        options: ["a) To define scope",
            "b) To develop a project charter",
            "c) To identify stakeholders",
            "d) To perform quality assurance"],
        answer: "a) To define scope"
    },
    {
        question: "In project time management, which of the following descriptions is appropriate for “slack time”?",
        options: ["a) It is the amount of time between the earliest start time and earliest finish time of an activity or between the latest start time and latest finish time of an activity.",
            "b) It is the amount of time for which a non-critical path activity can be deferred without delaying the project.",
            "c) It is the amount of time that an activity can be deferred without delaying the earliest start time of any succeeding activity or violating a schedule constraint",
            "d) It is the amount of time that an activity can be delayed past its latest start time or latest finish time"],
        answer: "b) It is the amount of time for which a non-critical path activity can be deferred without delaying the project."
    },
    {
        question: "When the duration for painting a house is estimated, which of the following is an appropriate technique that estimates the duration on the basis of the actual duration of a similar painting job in the past of the same house or other historical data from similar work?",
        options: ["a) Analogous estimate",
            "b) Parametric estimate",
            "c) Reserve analysis",
            "d) Three-point estimate"],
        answer: "a) Analogous estimate"
    },
    {
        question: "",
        image: "img/Q(54).png",
        optionss: [
            "a) 16",
            "b) 40",
            "c) 64",
            "d) 160"],
        answer: "b) 40"
    },
    {
        question: "",
        image: "img/Q(55).png",
        options: [
            "a) 0.3",
            "b) 2.1",
            "c) 3.0",
            "d) 3.6"],
        answer: "b) 2.1"
    },
    {
        question: "Which of the following is the main purpose of a migration test for a system?",
        options: [
            "a) To confirm that a new system possesses all of the required functions",
            "b) To confirm that sufficient performance can be derived from the new system using a copy of the actual data from the existing system",
            "c) To confirm the compatibility of the interface between a program of another existing system and a newly developed program",
            "d) To confirm the switch procedure from the existing system to the new system and the problems that the switch can cause from the perspective of reliability and efficiency"],
        answer: "d) To confirm the switch procedure from the existing system to the new system and the problems that the switch can cause from the perspective of reliability and efficiency"
    },
    {
        question: "In IT service management, which of the following is handled by incident management?",
        options: [
            "a) Inquiry regarding the function or usage of the IT service or system",
            "b) Long delay in an application response",
            "c) Request for providing the IT service to a new business site",
            "d) Request for training of recruits on the IT service"],
        answer: "b) Long delay in an application response"
    },
    {
        question: "When the PDCA methodology is applied to a service management system, which of the following corresponds to Act?",
        options: [
            "a) Establishing, documenting, and agreeing the service management system",
            "b) Implementing and operating the service management system for the design, transition, delivery, and improvement of services",
            "c) Monitoring, measuring, and reviewing the service management system and services against the policies, objectives, plans, and service requirements, and reporting the results",
            "d) Taking actions to continually improve the performance of the service management system and services"],
        answer: "d) Taking actions to continually improve the performance of the service management system and services"
    },
    {
        question: "In the system design stage, which of the following is the point to be checked during the audit of control for reducing the risk of non-fulfillment of user requirements?",
        options: [
            "a) All programming should be performed in accordance with the specified standards and conventions.",
            "b) The program specifications should be created on the basis of the system design documents",
            "c) The test plan should be created on the basis of the system test requirements and must also be approved by the responsible person of the system operations department.",
            "d) The user department should participate in the review of system design."],
        answer: "d) The user department should participate in the review of system design."
    },
    {
        question: "When IT controls are classified into preventive controls and detective controls, which of the following is to be classified as a detective control?",
        options: [
            "a) A data entry manual is created, and the persons in charge of data entry are trained",
            "b) A data entry screen is designed so that operation errors are unlikely to occur.",
            "c) Access rights are assigned only to the person in charge of data entry.",
            "d) An output list resulting from data entry is cross-checked with the input form."],
            answer: "d) An output list resulting from data entry is cross-checked with the input form."
    },
    {
        question: "Which of the following is an explanation of CRM?",
        options: [
            "a) A data entry manual is created, and the persons in charge of data entry are traineda) It is a business approach for significantly improving the efficiency of the entire supply chain through the real time exchange of information regarding production, inventory, procurement, sales, distribution, etc.",
            "b) It is a concept to optimize customer loyalty by sharing information throughout all customer channels within a company and improving customer satisfaction by raising thelevel of service.",
            "c) It is a method for improving business efficiency by planning and managing business resources throughout the company effectively and comprehensively.",
            "d) It is a method for wholesale dealers or manufacturers to increase business transactions with retail stores by supporting their business activities, and increasing their sales and profits."],
        answer: "b) It is a concept to optimize customer loyalty by sharing information throughout all customer channels within a company and improving customer satisfaction by raising the level of service."
    },
    {
        question: "Which of the following is an explanation of BPO?",
        options: [
            "a) A company outsources all work processes of a specific department, such as management section or call center and its work system operation, to an external provider.",
            "b) A company reduces software development costs by using employees of a temporary employment agency with lower personnel expenses.",
            "c) A company rents a portion of the processing and storage capacities of servers owned by a telecommunications service provider and operates systems without owning its own servers.",
            "d) A company uses software functions provided by an external provider over a network without owning the software."],
        answer: "a) A company outsources all work processes of a specific department, such as management section or call center and its work system operation, to an external provider."
    },
    {
        question: "Which of the following is an appropriate description of chatbot?",
        options: [
            "a) A software that uses image processing techniques and is employed for applications to describe image details to a human",
            "b) A software that uses natural language processing techniques and is employed for applications to communicate with a human",
            "c) A software that uses signal processing techniques and is employed for applications to convert a human’s voice into texts",
            "d) A software that uses speech processing techniques and is employed for applications to generate subtitles automatically for a human to read while watching videos"],
        answer: "b) A software that uses natural language processing techniques and is employed for applications to communicate with a human"
    },
    {
        question: "Which of the following is a technique that performs the optimum resource allocation for computerization investment in each category classified by the similarities of risks and investment value?",
        options: [
            "a) 3C analysis",
            "b) Benchmarking",
            "c) Enterprise architecture",
            "d) IT portfolio"],
        answer: "d) IT portfolio"
    },
    {
        question: "In the verification of stakeholder requirements, which of the following indicates the ability to keep track of the process until the implementation of a change request?",
        options: [
            "a) Interoperability",
            "b) Maintainability",
            "c) Traceability",
            "d) Usability"],
        answer: "c) Traceability"
    },
    {
        question: "Which of the following is an explanation of core competence?",
        options: [
            "a) The basic mindset and action guidelines behind management activities",
            "b) The business opportunities and threats in the environment around a company",
            "c) The management resources that form the source of competitive advantage over other companies",
            "d) The objectives to be achieved through the execution of a business strategy"],
        answer: "c) The management resources that form the source of competitive advantage over other companies"
    },
    {
        question: "In a product life cycle, which of the following is a stage where the withdrawal of some companies is observed when the demand peaks, and decision-making is necessary to determine whether it is possible to gain a strong foothold?",
        options: [
            "a) Decline stage",
            "b) Growth stage",
            "c) Introduction stage",
            "d) Maturity stage"],
        answer: "d) Maturity stage"
    },
    {
        question: "When an IT vendor uses a “Balanced Scorecard” to promote a solution business, which of the following is an example of the learning and growth KPI goal? Here, “solution” means “to support a customer through information technology and professional services that are offered by experts so that the customer can achieve its management objectives.",
        options: [
            "a) To increase the number of customer proposals by a factor of 1.5 over that of the previous year by preparing an environment for reusing proposals to augment the number of registered solution cases",
            "b) To increase the sales volume in the consulting business for information strategy planningand system planning for it to account for 15% or more of the total sales of the company",
            "c) To set an average satisfaction score of 3.5 out of five (5) or more in a satisfaction survey of customers for whom a service is offered",
            "d) To train 30 employees as IT professionals in order to focus on the consulting services in the information strategy"],
        answer: "d) To train 30 employees as IT professionals in order to focus on the consulting services inthe information strategy"
    },
    {
        question: "Which of the following is an appropriate explanation of concurrent engineering?",
        options: [
            "a) A new product development technique that sequentially executes processes, such as product design, manufacturing, and sales activities",
            "b) A technique that analyzes a target system and clarifies its specifications",
            "c) A technique that executes processes, such as product design and production planning, in parallel during the new product development procedure",
            "d) A technique that tries to figure out the optimal combination of functions and cost and to improve value through systematic procedures"],
        answer: "c) A technique that executes processes, such as product design and production planning, in parallel during the new product development procedure"
    },
    {
        question: "Which of the following is the appropriate description of telemedicine?",
        options: [
            "a) Caring for patients by using computer technologies when the physician and patients are physically together in a hospital",
            "b) Caring for patients by using electronic communication technologies when the physician and patients are not in the same location",
            "c) Caring for patients by using electronic communication technologies when the physician and patients are physically together at the patients’ house",
            "d) Caring for patients without using computer technologies when the physician and patients are physically together at the physician’s clinic"],
        answer: "b) Caring for patients by using electronic communication technologies when the physician and patients are not in the same location"
    },

    {
        question: "",
        image: "img/Q(71).png",
        options: [
            "a) 15",
            "b) 20",
            "c) 25",
            "d) 30"],
        answer: "c) 25"
    },
    {
        question: "",
        image: "img/Q(72).png",
        options: [
            "a) Notice of payment deposit",
            "b) Notice of product receipt",
            "c) Shipment of product",
            "d) Transfer of payment"],
        answer: "b) Notice of product receipt"
    },
    {
        question: "Which of the following is an appropriate explanation of HEMS?",
        options: [
            "a) It is a system that connects multiple home appliances through a network to visualize the power and perform optimum control of power consumption.",
            "b) It is a system that converts the electricity produced by a solar power generation system and a residential-use fuel cell for the electricity to be useable in households, etc.",
            "c) It is a system that recycles the useful parts of home appliances discarded by general households and offices to reduce the amount of waste materials and promote the effective use of resources",
            "d) It is an electric hot water supply system that generates a considerable quantity of heat with a relatively small amount of energy by using a heat pump."],
        answer: "a) It is a system that connects multiple home appliances through a network to visualize the power and perform optimum control of power consumption."
    },
    {
        question: "When real-time systems are classified into hard real-time and soft real-time systems, which of the following is in the category of a hard real-time system?",
        options: [
            "a) Airbag control system",
            "b) Bank ATM system.",
            "c) Functional organization",
            "d) Project organization"],
        answer: "a) Airbag control system"
    },
    {
        question: "Which of the following is an organizational structure of a corporation that is temporarily structured by specialists from each department to reach a specific goal over a limited period and operates independently from all other standing organizations?",
        options: [
            "a) Company system organization",
            "b) Divisional system organization",
            "c) Functional organization",
            "d) Project organization"],
        answer: "d) Project organization"
    },

    {
        question: "There are several quality control tools that have been used primarily for manufacturing and inspection departments. Which of the following is a combined graph containing a bar graph that shows the numeric values of individual items in descending order, and a line graph that shows the cumulative total of the composition ratios of these numeric values?",
        options: [
            "a) Control chart",
            "b) Histogram",
            "c) Pareto chart",
            "d) Scatter diagram"],
        answer: "c) Pareto chart"
    },
    {
        question: "In a sampling inspection, which of the following can be used to ascertain the probability of acceptance of a lot with a certain defective ratio?",
        options: [
            "a) Bathtub curve",
            "b) Gompertz curve",
            "c) Logistic curve",
            "d) OC curve"],
        answer: "d) OC curve"
    },
    {
        question: "Which of following is an expression for calculating the cost of goods sold (or cost of sales) of a manufacturing company?",
        options: [
            "a) Material cost in current period + Labor cost in current period + Expense in current period",
            "b) Product inventory at beginning of period + Product manufacturing cost in current period − Product inventory at end of period",
            "c) Product inventory at beginning of period + Product manufacturing cost in current period − Work in process inventory at end of period",
            "d) Work in process inventory at beginning of period + Product manufacturing cost in current period − work in process inventory at end of period"],
        answer: "b) Product inventory at beginning of period + Product manufacturing cost in current period − Product inventory at end of periode"
    },
    {
        question: "",
        image: "img/Q(79).png",
        options: [
            "a) 4",
            "b) 8",
            "c) 12",
            "d) 16"],
        answer: "c) 12"
    },
    {
        question: "Which of the following is the intellectual property right that does not require registration for protection in the World Trade Organization (WTO) member states?",
        options: [
            "a) Copyright",
            "b) Industrial design",
            "c) Patent",
            "d) Trademark"],
        answer: "a) Copyright"
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
const maxVisiblePages = 6;

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
                optionImage.style.maxWidth = "70%";
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





