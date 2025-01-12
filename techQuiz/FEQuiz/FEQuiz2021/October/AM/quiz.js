const quizData = [
    {
        question: "What is the octal equivalent value of the hexadecimal number 7B5?",
        options: ["a) 735",
            "b) 3665",
            "c) 7551",
            "d) 7561"],
        answer: "b) 3665"
    },
    {
        question: "For a non-negative integer x, which of the following gives the remainder after division of x by 8 as a result?",
        options: ["a) Performing a bitwise AND operation on x and 7",
            "b) Performing a bitwise AND operation on x and 248",
            "c) Performing a bitwise OR operation on x and 8",
            "d) Performing a bitwise OR operation on x and 15"],
        answer: "a) Performing a bitwise AND operation on x and 7"
    },
    {
        question: "",
        image: "img/Q(3).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "d)"
    },
    {
        question: "",
        image: "img/Q(4).png",
        options: ["img/Q(4)_a.png",
            "img/Q(4)_b.png",
            "img/Q(4)_c.png",
            "img/Q(4)_d.png"],
        answer: "img/Q(4)_d.png"
    },
    {
        question: "",
        image: "img/Q(5).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "b)"
    },
    {
        question: "",
        image: "img/Q(6).png",
        options: ["a) 0001000110",
            "b) 0001001110",
            "c) 0010001000",
            "d) 0011111110"],
        answer: "a) 0001000110"
    },
    {
        question: "",
        image: "img/Q(7).png",
        options: ["a) 1",
            "b) 2",
            "c) 3",
            "d) 4"],
        answer: "b) 2"
    },
    {
        question: "",
        image: "img/Q(8).png",
        options: ["a) Balanced tree",
            "b) Binary search tree",
            "c) Max heap",
            "d) Min heap"],
        answer: "b) Binary search tree"
    },
    {
        question: "",
        image: "img/Q(9).png",
        options: ["a) 81",
            "b) 86",
            "c) 91",
            "d) 96"],
        answer: "c) 91"
    },

    {
        question: "Which of the following is an appropriate description of XML?",
        options: ["a) An exclusive editor is required to produce XML documents",
            "b) It is an integration of the logical structure and document style",
            "c) It is based on HTML and offers more extended functions.",
            "d) The attributes and logical structure of a document can be defined with user-defined tags."],
        answer: "d) The attributes and logical structure of a document can be defined with user-defined tags."
    },
    {
        question: "Which of the following is an appropriate term for a special register that contains the address of the next instruction to be fetched?",
        options: ["a) Accumulator",
            "b) Instruction register",
            "c) Program counter",
            "d) Status register"],
        answer: "c) Program counter"
    },
    {
        question: "",
        image: "img/Q(12).png",
        options: ["a) 0.25",
            "b) 0.35",
            "c) 0.73",
            "d) 0.81"],
        answer: "d) 0.81"
    },
    {
        question: "Which of the following is a computer architecture where each instruction is divided into multiple stages (e.g., fetch, decode, and execute) in the processor and multiple functional units execute two or more instructions in parallel by slightly shifting execution stages of the instructions?",
        options: ["a) Multicore",
            "b) Pipeline",
            "c) RISC",
            "d) VLIW"],
        answer: "b) Pipeline"
    },
    {
        question: "Which of the following is a connection method that is referred to as a daisy chain?",
        options: ["a) A keyboard, a mouse, and a printer are connected to a USB hub, and the USB hub is connected to a PC.",
            "b) A PC and a measuring device are connected with RS-232C, and the PC and a printer are connected by USB.",
            "c) A PC is connected from its own Thunderbolt connection port with a cable to one of the two (2) 4K displays, each of which is equipped with two (2) Thunderbolt connection ports, and the display is connected to the other display with a cable.",
            "d) Several network cameras and PCs are connected to a network hub."],
        answer: "c) A PC is connected from its own Thunderbolt connection port with a cable to one of the two (2) 4K displays, each of which is equipped with two (2) Thunderbolt connection ports, and the display is connected to the other display with a cable."
    },
    {
        question: "Which of the following is the appropriate description of RAID 5?",
        options: ["a) Bit-level striping with a dedicated parity disk",
            "b) Block-level striping with a dedicated parity disk",
            "c) Block-level striping with distributed parity disks",
            "d) Byte-level striping with a dedicated parity disk"],
        answer: "c) Block-level striping with distributed parity disks"
    },
    {
        question: "",
        image: "img/Q(16).png",
        options: ["a) 0.10",
            "b) 0.82",
            "c) 0.90",
            "d) 0.98"],
        answer: "c) 0.90"
    },
    {
        question: "",
        image: "img/Q(17).png",
        options: ["a) 10.75",
            "b) 14.25",
            "c) 15.00",
            "d) 16.75"],
        answer: "d) 16.75"
    },
    {
        question: "There exist methods to obtain backup files for the purpose of recovering files and managing generations. Which of the following is an appropriate description for those methods or procedures?",
        options: ["a) A differential backup contains all files that are modified following the last full backup, while an incremental backup saves all files that are modified after the last full, differential, or incremental backup.",
            "b) A differential backup may take longer to restore files than an incremental backup, because the most recent versions of files are spread across a larger number of backup sets.",
            "c) A multiplexed backup is used as a mixed combination of a full backup, differential backup, and incremental backup.",
            "d) An incremental backup tends to take longer to backup files than a differential backup because more files are copied during each backup"],
        answer: "a) A differential backup contains all files that are modified following the last full backup, while an incremental backup saves all files that are modified after the last full, differential, or incremental backup."
    },
    {
        question: "A processor takes 15 seconds to run an application compiled with an old compiler. A new compiler was released. The same application compiled with the new compiler executes fewer instructions by 40%, but the average clock cycles per instruction (CPI) is increased by 10%. How many seconds does it take for the same processor to run the same application compiled with the new compiler?",
        options: ["a) 4.125",
            "b) 6.6",
            "c) 9.09",
            "d) 9.9"],
        answer: "d) 9.9"
    },
    {
        question: "Which of the following is an appropriate explanation of an actuator?",
        options: ["a) It amplifies weak electrical signals sent from microphones, sensors, and so on.",
            "b) It compares a given target value and a controlled value obtained from a sensor and outputs an operation amount so that the controlled value is matched with the target value.",
            "c) It converts the power from an energy source into rotation, translational motion, or other movements based on the control signals.",
            "d) It detects position, angle, velocity, acceleration, force, temperature, and so on, and converts them into electric information."],
        answer: "c) It converts the power from an energy source into rotation, translational motion, or other movements based on the control signals."
    },
    {
        question: "Which of the following is an appropriate explanation of an actuator?",
        options: ["a) A AND B",
            "b) A AND (A OR B)",
            "c) A OR B",
            "d) B AND (A OR B)"],
        answer: "c) A OR B"
    },
    {
        question: "",
        image: "img/Q(22).png",
        options: ["a) 1,000",
            "b) 1,20",
            "c) 1,500",
            "d) 2,000"],
        answer: "c) 1,500"
    },
    {
        question: "According to ISO 9241-11: 2018, which of the following is defined as the “extent to which a system, product, or service can be used by specified users to achieve specified goals with effectiveness, efficiency, and satisfaction in a specified context of use”?",
        options: ["a) Accessibility",
            "b) Adaptability",
            "c) Availability",
            "d) Usability"],
        answer: "d) Usability"
    },
    {
        question: "Which of the following is an explanation of clipping in 3D graphics processing?",
        options: ["a) It is a process that applies shading to the surface of an object for a more 3D appearance.",
            "b) It is a process that defines a window within the image display area, removes the area outside the window, and cuts out the section visible within the window.",
            "c) It is a process that is performed in the last phase of CG video production and visualizes object data so that it can be rendered on the screen",
            "d) Usability"],
        answer: "d) It is a process to hide the jaggies that occur near the edge of a shape because of the limited number of pixels on the screen."
    },
    {
        question: "",
        image: "img/Q(25).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "b)"
    },
    {
        question: "",
        image: "img/Q(26).png",
        options: ["img/Q(26)_a.png",
            "img/Q(26)_b.png",
            "img/Q(26)_c.png",
            "img/Q(26)_d.png"],
        answer: "img/Q(26)_d.png"
    },
    {
        question: "Which of the following is an appropriate explanation of an E-R diagram?",
        options: ["a) A relationship is expressed by describing the related entity name in the entity type.",
            "b) The relationship between entity types is expressed by an arrow from the referencing side in the direction of the referenced side.",
            "c) There are no attributes in the entity type, but the relationship type has attributes",
            "d) There are several kinds of relationships between entity types such as one-to-many or many-to-many."],
        answer: "d) There are several kinds of relationships between entity types such as one-to-many or many-to-many."
    },
    {
        question: "Which of the following is the main purpose of transaction support in a database management system?",
        options: ["a) To ensure that either all the updates corresponding to a given transaction are made or none of them are made",
            "b) To ensure that only authorized users can access the database",
            "c) To help users update data by providing a graphical user interface",
            "d) To provide an accessible catalog in which descriptions of data items are stored"],
        answer: "a) To ensure that either all the updates corresponding to a given transaction are made or none of them are made"
    },
    {
        question: "Which of the following is an appropriate description of distributed databases?",
        options: ["a) Access to a database server is shared among a globally distributed userbase so that everyone can access the database.",
            "b) It is a database that is distributed to all interested researchers and other users worldwide so that everyone can benefit.",
            "c) It is a NoSQL database instead of a Relational Database Management System (RDBMS).",
            "d) It stores different parts of a database in different locations, and its processing is distributed across those parts."],
        answer: "d) It stores different parts of a database in different locations, and its processing is distributed across those parts."
    },
    {
        question: "In the OSI basic reference model, which of the following is a network device that operates at the network layer?",
        options: ["a) Access point",
            "b) Bridge",
            "c) Repeater",
            "d) Router"],
        answer: "d) Router"
    },
    {
        question: "Which of the following is a mechanism that enables multiple terminals to have private addresses different from each other to connect to the Internet by sharing a single global IP address?",
        options: ["a) DHCP",
            "b) DNS",
            "c) NAPT",
            "d) RADIUS"],
        answer: "c) NAPT"
    },
    {
        question: "Which of the following is a data link layer function that enables a receiver to control the amount of data a sender transmits?",
        options: ["a) Congestion control",
            "b) Error control",
            "c) Flow control",
            "d) Media access control"],
        answer: "c) Flow control"
    },
    {
        question: "In TCP/IP, which of the following is an application layer protocol that enables a server to automatically configure its clients with network information such as IP addresses, the subnet mask, and the default gateway address?",
        options: ["a) ARP",
            "b) DHCP",
            "c) DNS",
            "d) NSLOOKUP"],
        answer: "b) DHCP"
    },
    {
        question: "Which of the following is an appropriate explanation of Software-Defined Networking (SDN) that uses OpenFlow?",
        options: ["a) It is a network technology that logically separates data forwarding and network control, and it is implemented with a combination of network devices specialized for data forwarding function, and a network control software",
            "b) It is a software technology for business operation analysis and visualization that uses data flow diagrams and activity diagrams to discover problems in business processes and make improvements",
            "c) It is an Internet of Things (IoT) technology that uses RFID, and it is a software architecture that optimizes distribution networks.",
            "d) It is an optimum deployment method for servers on a network that was developed to efficiently stream a range of content over the Internet."],
        answer: "a) It is a network technology that logically separates data forwarding and network control, and it is implemented with a combination of network devices specialized for data forwarding function, and a network control software"
    },
    {
        question: "Which of the following is an appropriate description of a Trojan horse?",
        options: ["a) A brute force attack software tool",
            "b) A malicious computer program that presents itself as a legitimate one",
            "c) A malicious user that steals private information from a system",
            "d) A software tool to decrypt an encrypted password"],
        answer: "b) A malicious computer program that presents itself as a legitimate one"
    },
    {
        question: "Which of the following properties for information security defined in ISO/IEC 27000:2018 refers to a guarantee that the message data received is the same as the message data sent?",
        options: ["a) Availability",
            "b) Confidentiality",
            "c) Integrity",
            "d) Non-repudiation"],
        answer: "c) Integrity"
    },
    {
        question: "Which of the following is an example of ransomware?",
        options: ["a) A range of different types of software including adware, spyware, and freeware",
            "b) Malicious software blocking access to a victimized computer and demanding money to unblock it",
            "c) Software that assigns randomized MAC addresses to PCs to ensure user privacy on the Internet",
            "d) Software that generates random numbers needed by computer security application software"],
        answer: "b) Malicious software blocking access to a victimized computer and demanding money to unblock it"
    },
    {
        question: "A typical example of security threats is information leakage when a sender sends data containing important information to a receiver. Which of the following is the most appropriate measure to prevent information leakage?",
        options: ["a) The data is encrypted with a private key before being sent to the receiver via email. In a separate email, the private key is sent to the receiver so that the receiver can decrypt the data.",
            "b) The data is password-locked, and it is attached in an email that includes the password in the text part of the email. Before the email is sent, the receiver address is checked to make sure that the email is sent to the correct address.",
            "c) The receiver creates a pair of public/private keys and sends the public key to the sender. The data is encrypted with the public key and sent to the receiver via email. The receiver then decrypts the data with the private key.",
            "d) The sender compresses the data on a USB memory as much as possible before giving the USB memory to the receiver so that the receiver can utilize the rest of the memory space effectively."],
        answer: "c) The receiver creates a pair of public/private keys and sends the public key to the sender. The data is encrypted with the public key and sent to the receiver via email. The receiver then decrypts the data with the private key."
    },
    {
        question: "Which of the following is a type of malware that embeds itself within a program andinserts its copy into other programs?",
        options: ["a) Backdoor",
            "b) Trojan horse",
            "c) Virus",
            "d) Worm"],
        answer: "c) Virus"
    },
    {
        question: "According to ISO/IEC 27000:2018 (Information security management systems - Overview and vocabulary), which of the following is the definition of “level of risk”?",
        options: ["a) Magnitude of a risk expressed in terms of the combination of consequences and their likelihood",
            "b) Terms of reference for evaluating the significance of a risk",
            "c) The priority order assigned to the risks to be handled",
            "d) Weakness of an asset or control that can be exploited by threats"],
        answer: "a) Magnitude of a risk expressed in terms of the combination of consequences and their likelihood"
    },
    {
        question: "Which of the following is dynamic analysis of malware?",
        options: ["a) Malware is identified by calculating the hash value of the subject for analysis and cross-checking it against a list of known malware hash values that are registered in an online database.",
            "b) On the basis of the file extensions and content of file headers on a hard disk, malicious program files with false extensions are detected.",
            "c) The subject for analysis is extracted from communication data on a network and reverse compiled, and the functions of the subject for analysis are investigated from the code obtained.",
            "d) The subject for analysis is run in a sandbox, and its behavior and external communication are observed."],
        answer: "d) The subject for analysis is run in a sandbox, and its behavior and external communication are observed."
    },
    {
        question: "Which of the following technologies is the most suitable to divide the whole company network into networks by department?",
        options: ["a) DMZ (DeMilitarized Zone)",
            "b) NAT (Network Address Translation)",
            "c) VLAN (Virtual Local Area Network)",
            "d) VPN (Virtual Private Network)"],
        answer: "c) VLAN (Virtual Local Area Network)"
    },
    {
        question: "",
        image: "img/Q(43).png",
        options: ["a) It creates a new user ‘1’.",
            "b) It creates a pop-up box that shows the first username in the “accounts” table.",
            "c) It selects all the records in the “accounts” table and deletes the “accounts” table from the database.",
            "d) It selects one record from the “accounts” table and drops the rest of the records in the table."],
        answer: "c) It selects all the records in the “accounts” table and deletes the “accounts” table from the database."
    },
    {
        question: "To provide a guarantee to its online customers that all credit card information is protected when transferred between their PC and the web service over public networks, which of the following technologies should be used?",
        options: ["a) S/MIME",
            "b) SSH",
            "c) TLS",
            "d) VPN"],
        answer: "c) TLS"
    },
    {
        question: "Which of the following UML diagrams is used to represent the user interactions with the system and the functions of the system?",
        options: ["a) Activity diagram",
            "b) Class diagram",
            "c) Sequence diagram",
            "d) Use case diagram"],
        answer: "d) Use case diagram"
    },
    {
        question: "Which of the following is an appropriate description of an acceptance test?",
        options: ["a) It is conducted by developers to verify response time and other performance items.",
            "b) It is conducted by testers to ensure that the interfaces and linkages between different software parts work properly.",
            "c) It is conducted by the project manager to verify whether users’ functional requirements are met or not.",
            "d) It is conducted by users to confirm that the software is complete and meets the business needs that prompted the software to be developed."],
        answer: "d) It is conducted by users to confirm that the software is complete and meets the business needs that prompted the software to be developed."
    },
    {
        question: "In the development process, which of the following is an activity that should be performed in software architectural design?",
        options: ["a) Analyzing the requirements in incremental steps by arranging them in the form of a chart",
            "b) Describing the specifications so that the program is clarified on a line-by-line basis",
            "c) Obtaining the opinion of the customer and deciding the specifications",
            "d) Transforming the requirements for the software into a design that describes its top-level structure and identifies the software components"],
        answer: "d) Transforming the requirements for the software into a design that describes its top-level structure and identifies the software components"
    },
    {
        question: "Which of the following is an appropriate description concerning test data for black box testing?",
        options: ["a) Test data is created based on branch coverage",
            "b) Test data is created based on condition coverage.",
            "c) Test data is created based on external specifications.",
            "d) Test data is created based on program structures."],
        answer: "c) Test data is created based on external specifications."
    },
    {
        question: "In an agile software development project, when can the customer review the first piece of working software?",
        options: ["a) After the completion of the first epic",
            "b) After the completion of the first few releases",
            "c) After the completion of the first iteration",
            "d) After the completion of the whole project"],
        answer: "c) After the completion of the first iteration"
    },
    {
        question: "According to the Capability Maturity Model Integration, which of the following is the final and highest level of maturity?",
        options: ["a) Auditable",
            "b) Custom",
            "c) Optimizing",
            "d) Quantitatively Managed"],
        answer: "c) Optimizing"
    },
    {
        question: "Which of the following is one of the major responsibilities of a project manager?",
        options: ["a) Coding programs and debugging errors",
            "b) Evaluating the quality of project deliverables",
            "c) Organizing project members to achieve a planned result within a budget and schedule",
            "d) Providing the user requirements at the beginning of the project"],
        answer: "c) Organizing project members to achieve a planned result within a budget and schedule"
    },
    {
        question: "A project is planned to complete in 12 months and the budget for the completion of the project is $100,000. After six months, it is found that $60,000 was spent, but only 40% of the work has been completed. If the Cost Performance Index (CPI) is not changed, what is the estimated amount (in dollars) required to complete the remaining tasks of the project?",
        options: ["a) 40,000",
            "b) 60,000",
            "c) 90,000",
            "d) 150,000"],
        answer: "c) 90,000"
    },
    {
        question: "In project time management, which of the following is the amount of time that the start of a successor activity requires to be delayed after the finish of a predecessor activity?",
        options: ["a) Free float",
            "b) Lag",
            "c) Lead",
            "d) Total float"],
        answer: "b) Lag"
    },
    {
        question: "",
        image: "img/Q(54).png",
        options: ["a) The project duration is not affected",
            "b) The project duration is extended by 1 day.",
            "c) The project duration is extended by 2 days.",
            "d) The project duration is extended by 3 days."],
        answer: "c) The project duration is extended by 2 days."
    },
    {
        question: "Which of the following corresponds to benchmarking in process improvement of service management?",
        options: ["a) The availability, reliability, and performance are measured at the service level, and a report is sent to the customers.",
            "b) The current status of IT service management is analyzed from the viewpoint of strengths, weaknesses, opportunities, and threats.",
            "c) The performance of IT services is measured from the viewpoint of finance, customers, internal processes, and learning and growth, and strategic activities are supported.",
            "d) The service quality and performance level are evaluated in comparison with the best practices within and outside the industry."],
        answer: "d) The service quality and performance level are evaluated in comparison with the best practices within and outside the industry."
    },
    {
        question: "Which of the following is the appropriate description for a system migration plan?",
        options: ["a) A system migration plan must describe the decision criteria for restoring the old system in case the migration fails.",
            "b) Operating the new system and the old system in parallel reduces the cost of migration.",
            "c) Sharing a part of the environment between the new system and the old system makes it easier to verify the migration status.",
            "d) The greater the amount of data to be migrated, the more appropriate it would be to migrate the data in a single batch immediately before the system is switched."],
        answer: "a) A system migration plan must describe the decision criteria for restoring the old system in case the migration fails."
    },
    {
        question: "",
        image: "img/Q(57).png",
        options: ["a) 28,100",
            "b) 120,500",
            "c) 140,500",
            "d) 622,500"],
        answer: "c) 140,500"
    },
    {
        question: "In the event of a disk failure, which of the following is a method for recovering a database by restoring a full backup data onto a disk from a tape, and then reflecting, from logs, post-update copies after the full backup was taken?",
        options: ["a) Checkpoint restart",
            "b) Reboot",
            "c) Roll forward",
            "d) Rollback"],
        answer: "c) Roll forward"
    },
    {
        question: "Which of the following is the most appropriate point to be checked in the audit of a system test?",
        options: ["a) The test cases were created comprehensively",
            "b) The test plan was approved only by the responsible person on the user’s side.",
            "c) The test was performed in an environment where the actual business operations are performed.",
            "d) The test was performed only by the person in charge on the user’s side."],
        answer: "a) The test cases were created comprehensively"
    },
    {
        question: "The director requested a system auditor to audit the operating status of an accounting system that was developed by the information systems department and is operated by the accounting department. Which of the following is the most appropriate description concerning the system auditor for this audit?",
        options: ["a) The system auditor must be a certified public accountant because the accounting system must conform to the various standards of business accounting.",
            "b) The system auditor must be a person who belongs to neither the information systems department nor the accounting department to guarantee independence.",
            "c) The system auditor must report directly to the accounting department manager because the accounting system handles highly confidential information.",
            "d) The system auditor must report directly to the information systems department manager to perform system audits efficiently."],
        answer: "b) The system auditor must be a person who belongs to neither the information systems department nor the accounting department to guarantee independence."
    },
    {
        question: "Which of the following is an appropriate feasibility evaluation when checking whether the lifetime benefits of the proposed information system is greater than its lifetime costs?",
        options: ["a) Economic feasibility",
            "b) Operational feasibility",
            "c) Scheduling feasibility",
            "d) Technical feasibility"],
        answer: "a) Economic feasibility"
    },
    {
        question: "In an evaluation of an IT investment, a preliminary evaluation, an interim evaluation, and a posteriori evaluation are conducted in accordance with the planning, execution, and completion of individual projects. Which of the following is a description of the preliminary evaluation?",
        options: ["a) A variance between the plan and results as well as its cause are analyzed in detail, and it is determined whether a change is required in the investment amount or the effect goal.",
            "b) An effect goal is set on the basis of the investment purpose, and the information that is required to make a decision on whether it is possible to execute is provided to higher-level management.",
            "c) Milestones when the investment effect should be attained and the data collection method that is required for the evaluation are planned in advance, and an evaluation is made at the times of those milestones.",
            "d) The achievement status of the effect goal that was set in advance is evaluated, and improvement measures for achieving the objective is considered when required."],
        answer: "b) An effect goal is set on the basis of the investment purpose, and the information that is required to make a decision on whether it is possible to execute is provided to higher-level management."
    },
    {
        question: "Which of the following is a description of BPO?",
        options: ["a) It refers to a company not having its own server and operating a system by renting a part of the processing capability or the storage capacity of a server that is owned by a communication service provider.",
            "b) It refers to a company not having its own software and using functions of software that an external specialized vendor provides via a network.",
            "c) It refers to the outsourcing of a whole business process of a specific department of the company, such as the administration department or the call center, together with the operation of a business system to an external specialized vendor.",
            "d) The achievement status of the effect goal that was set in advance is evaluated, and improvement measures for achieving the objective is considered when required."],
        answer: "d) It refers to utilizing employees from a staffing company with lower personnel expenditures than those of the company to reduce the cost of software development."
    },
    {
        question: "In computerization investment, which of the following is a technique that is used to create categories on the basis of the similarities of risks and investment values and perform optimum resource allocation?",
        options: ["a) 3C analysis",
            "b) Benchmarking",
            "c) Enterprise architecture",
            "d) IT portfolio"],
        answer: "d) IT portfolio"
    },
    {
        question: "Which of the following is an activity that is performed when non-functional requirements are defined?",
        options: ["a) Clarifying the flows of information (i.e., data) between the functions that constitute business operations",
            "b) Creating technical requirements of development standard according to the programming language used in system development",
            "c) Defining the scope to be implemented as system functions",
            "d) Specifying the interface for exchanging information with other systems"],
        answer: "b) Creating technical requirements of development standard according to the programming language used in system development"
    },
    {
        question: "Which of the following is a technique that is used to identify and evaluate the internal and external factors that are helpful or harmful to the objectives of business organizations or projects?",
        options: ["a) Five forces analysis",
            "b) PPM analysis",
            "c) SWOT analysis",
            "d) Value chain analysis"],
        answer: "c) SWOT analysis"
    },
    {
        question: "The sales prices of products are decided according to different sales price setting methods. Which of the following approaches sets a high sales price by using the consumer psychology that high quality equals to high price?",
        options: ["a) Cost plus pricing",
            "b) Differential pricing",
            "c) Marketing price following pricing",
            "d) Prestige pricing"],
        answer: "d) Prestige pricing"
    },
    {
        question: "",
        image: "img/Q(68).png",
        options: ["a) Among the purchasers of product A, 1,000 people are estimated to purchase the new product Q.",
            "b) Of the prospective purchasers of the new product P, 50% are estimated to be purchasers of product A.",
            "c) The number of new customers of the new product S are estimated to be fewer than the number of people who will purchase the new product S among the purchasers of product C",
            "d) The purchasers of product B are estimated to purchase any one (1) of the new products P, Q, R, and S"],
        answer: "c) The number of new customers of the new product S are estimated to be fewer than the number of people who will purchase the new product S among the purchasers of product C"
    },
    {
        question: "Which of the following is the appropriate explanation for product innovation in the management of technology?",
        options: ["a) Acquiring business profits through achievements of the development of technology",
            "b) Developing new products or products that enable differentiation from other companies",
            "c) Making innovative reforms in business processes",
            "d) Strategically managing business with technology as the core"],
        answer: "b) Developing new products or products that enable differentiation from other companies"
    },
    {
        question: "Among the different business systems supported by technology, which of the following analyzes routes of distribution, tracking and load tendency?",
        options: ["a) LMS",
            "b) OMS",
            "c) TMS",
            "d) WMS"],
        answer: "c) TMS"
    },
    {
        question: "Which of the following is a product that can take advantage of the cell production system?",
        options: ["a) A product that needs to be produced in large quantities to improve productivity",
            "b) A product that requires a division of labor on the basis of standardization, simplification, and specialization",
            "c) A product that requires a variety of types and needs flexible production",
            "d) A product whose specifications do not change over a long period of time"],
        answer: "c) A product that requires a variety of types and needs flexible production"
    },
    {
        question: "",
        image: "img/Q(72).png",
        options: ["a) CAD (Computer Aided Design)",
            "b) CRP (Capacity Requirements Planning)",
            "c) JIT (Just In Time)",
            "d) MRP (Material Requirements Planning)"],
        answer: "d) MRP (Material Requirements Planning)"
    },
    {
        question: "Which of the following is an appropriate description of Initial Coin Offering (ICO)?",
        options: ["a) A crowd-funding method in which backers contribute money toward an idea or a startup and get rewards like physical products",
            "b) A fundraising method that is mainly used by a financially stable company which wants to expand and develop to the public",
            "c) A popular fundraising method that is used primarily by a startup, normally through utilizing cryptocurrency",
            "d) A process of offering shares of a private corporation to the public in a new stock issuance"],
        answer: "c) A popular fundraising method that is used primarily by a startup, normally through utilizing cryptocurrency"
    },
    {
        question: "Which of the following is an appropriate example of utilizing machine learning at a production site?",
        options: ["a) Instead of programming the working method for the production robot in the factory, the robot itself learns, thus improving the efficiency of work.",
            "b) The causes for the occurrence of defects in a factory are decomposed and arranged in a tree shape so that analysts can statistically look for the cause and solution.",
            "c) The production equipment in a factory is connected through high-speed communication so that the host computer can be controlled in real time.",
            "d) The productivity of employees in the factory improves each time the cumulative production volume doubles, and the unit cost reduces at a fixed percentage."],
        answer: "a) Instead of programming the working method for the production robot in the factory, the robot itself learns, thus improving the efficiency of work."
    },
    {
        question: "Which of the following is a management organization that creates a cross-functional team between project and functional organizations to flexibly respond to changes in the business environment?",
        options: ["a) Divisional organization",
            "b) Line and staff organization",
            "c) Matrix organization",
            "d) Project organization"],
        answer: "c) Matrix organization"
    },
    
    {
        question: "Which of the following is an example of Green IT?",
        options: ["a) Development of a powerful in-house data center",
            "b) Development of efficient in-house software",
            "c) Using a desktop PC instead of a thin client laptop",
            "d) Using web conferencing instead of travelling to meetings"],
        answer: "d) Using web conferencing instead of travelling to meetings"
    },
    {
        question: "Which of the following is a description of a CIO?",
        options: ["a) The chief executive that governs the planning and execution of strategies in the area of finances, such as fund-raising or financial reporting",
            "b) The chief executive that governs the planning and execution of strategies regarding information management and information systems",
            "c) The chief executive that governs the planning and execution of technological strategies and R&D plans of the company",
            "d) The chief executive that governs the planning of business strategies and the execution of business"],
        answer: "b) The chief executive that governs the planning and execution of strategies regarding information management and information systems"
    },
    {
        question: "Which of the following is the appropriate description concerning creation and operation of a Business Continuity Plan (BCP)?",
        options: ["a) In addition to natural disasters, device failure in information systems and malware infections are also included in the scope of examination.",
            "b) The planning contents are important matters related to the business strategy and therefore, only senior managers are notified.",
            "c) The planning contents are restricted to those activities performed by the company.",
            "d) The recovery of business processes dependent on IT is prioritized according to technical easiness of recovery."],
        answer: "a) In addition to natural disasters, device failure in information systems and malware infections are also included in the scope of examination."
    },
    {
        question: "",
        image: "img/Q(79).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "d)"
    },
    {
        question: "Which of the following is an appropriate description of the scope of software protection under WTO’s Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS)?",
        options: ["a) Algorithms and programming languages are protected.",
            "b) Application programs are protected but system programs such as an OS are not, as the value of the right is included in the hardware cost",
            "c) Both source programs and object programs are protected.",
            "d) Documents that describe algorithms are protected, but programs created by using the algorithms are not."],
        answer: "c) Both source programs and object programs are protected."
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





