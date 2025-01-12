const quizData = [
    {
        question: "",
        image: "img/Q(1).png",
        options: ["img/Q(1)_a.png", "img/Q(1)_b.png", "img/Q(1)_c.png", "img/Q(1)_d.png"],
        answer: "img/Q(1)_d.png"
    },
    {
        question: "When the hexadecimal value ABCD in a 32-bit register is logically shifted right by two bits, which of the following is the resulting value in hexadecimal?",
        options: ["a)2AF3", "b)6AF3", "c)AF34", "d)EAF3"],
        answer: "a)2AF3"
    },
    {
        question: "What is the probability that at least three coins land heads up when four unbiased coins are tossed simultaneously?",
        options: ["a) 1/4", "b) 5/16", "c) 3/8", "d) 5/8"],
        answer: "b) 5/16"
    },
    {
        question: "Random(n) is a function that returns an integer of 0 or more and less than n with a uniform probability. When the series of procedures below is run on the integer type variables A, B, and C, what is the probability that the value of C will be 0?",
        options: [
            "a) 1/100",
            "b) 1/20",
            "c) 1/10",
            "d) 1/5"
        ],
        image: "img/Q(4).png",
        answer: "c) 1/10"
    },
    {
        question: "Which of the following matches the <variable-name> defined below in BNF?",
        options: [
            "a) _B39",
            "b) 246",
            "c) 3E5",
            "d) F5_1"
        ],
        image: "img/Q(5).png",
        answer: "d) F5_1",

    },
    {
        question: "Which of the following is an error detection method where, on the sender side, the data sent accompanies a remainder of the data bit sequence divided by a specific generator polynomial, while on the receiver side, error detection is performed by checking if the received bit sequence is divisible by the same polynomial?",
        options: ["a) CRC", "b) Hamming code", "c) Horizontal parity check", "d) Vertical parity check"],

        answer: "a) CRC"
    },
    {
        question: "Which of the following is the pre-order traversal of the tree below?",
        options: ["a) 1, 3, 4, 6, 7, 9, 10, 13, 14", "b) 1, 4, 7, 6, 3, 13, 14, 10, 9", "c) 9, 3, 1, 6, 4, 7, 10, 14, 13", "d) 9, 3, 10, 1, 6, 14, 4, 7, 13"],
        image: "img/Q(7).png",
        answer: "c) 9, 3, 1, 6, 4, 7, 10, 14, 13"
    },
    {
        question: "",
        options: ["a) 1", "b) 2", "c) 5", "d) 6"],
        image: "img/Q(8).png",
        answer: "c) 5"
    },
    {
        question: "",
        options: ["a) 1", "b) 2", "c) 7", "d) 11"],
        image: "img/Q(9).png",
        answer: "b) 2"
    },
    {
        question: "Which of the following is a program that achieves dynamic processing in a web environment and operates only on a web server?",
        options: ["a) JavaScript", "b) Java applet", "c) Java servlet", "d) VBScript"],
        answer: "c) Java servlet"
    },
    {
        question: "When a CPU has a special register used in push and pop instructions, which of the following is an appropriate term for this register?",
        options: ["a) Instruction register", "b) Program counter", "c) Stack pointer", "d) Status register"],
        answer: "c) Stack pointer"
    },
    {
        question: "Which of the following is classified as an internal interrupt?",
        options: ["a) Interrupt caused by an abnormal power condition, such as a momentary loss of commercial power supply", "b) Interrupt caused by performing a divide-by-zero operation", "c) Interrupt caused by the completion of input or output", "d) Interrupt caused by the occurrence of a memory parity error"],
        answer: "b) Interrupt caused by performing a divide-by-zero operation"
    },
    {
        question: "Which of the following is the technique that minimizes the number of write operations to the main memory by updating the data only in the cache memory and updating into the mainmemory later?",
        options: ["a) Overlay", "b) Write back", "c) Write protected", "d) Write through"],
        answer: "b) Write back"
    },
    {
        question: "Which of the following is an appropriate description of a 3D printer’s function?",
        options: ["a) It detects the shape of three-dimensional objects and produces output of 3D data.", "b) It functions by pushing the pins of a high temperature printing head onto heat-sensitive paper.", "c) It makes three-dimensional objects using methods such as fused filament fabrication.", "d) It projects computer graphics onto uneven three-dimensional objects such as buildings and furniture."],

        answer: "c) It makes three-dimensional objects using methods such as fused filament fabrication."
    },
    {
        question: "Which of the following is the RAID configuration for achieving the highest speed disk access at the cost of reliability?",
        options: ["a) RAID 0", "b) RAID 1", "c) RAID 5", "d) RAID 6"],
        answer: "a) RAID 0"
    },
    {
        question: "When system availabilities of a cold standby system, a simplex system, and a dual system are compared, which of the following shows the order arranged from highest to lowest? Here a computer or computers that compose each system are all the same.",
        options: ["a) Cold standby system, dual system, simplex system", "b) Cold standby system, simplex system, dual system", "c) Dual system, cold standby system, simplex system", "d) Simplex system, cold standby system, dual system"],
        answer: "c) Dual system, cold standby system, simplex system"
    },
    {
        question: "A printer prints 400 characters per second. The printer uses interrupt-driven I/O and each character printed requires an interrupt that takes 50 microseconds. What percentage of the printer's CPU is available to do other work during printing? Here, other overhead time for the CPU can be ignored",
        options: ["a) 98", "b) 96", "c) 4", "d) 2"],
        answer: "a) 98"
    },
    {
        question: "",
        options: ["a)3.0", "b)4.75", "c)5.5", "d)10.25"],
        image: "img/Q(18).png",
        answer: "b)4.75"
    },
    {
        question: "Among the different types of backup methods, which of the following is incremental backup? Here, in the first backup, all files are backed up and the information that indicates a file update managed by the operating system is reset.",
        options: ["a) All files are backed up regardless of information indicating a file update, and the information indicating a file update is left unchanged.", "b) All files are backed up regardless of information indicating a file update, and the information indicating a file update is reset.", "c) Only files with information indicating a file update are backed up, and the information indicating a file update is left unchanged.) An employee can have at most one dependent.", "d) Only files with information indicating a file update are backed up, and the information indicating a file update is reset."],
        answer: "d) Only files with information indicating a file update are backed up, and the information indicating a file update is reset."
    },
    {
        question: "Which of the following is the logic circuit that is equivalent to the logical expression 𝐴̅𝐵𝐶 + 𝐴𝐶?",
        options: ["img/Q(20)_a.png", "img/Q(20)_b.png", "img/Q(20)_c.png", "img/Q(20)_d.png"],
        answer: "img/Q(20)_c.png"
    },
    {
        question: "",
        image: "img/Q(21).png",
        options: ["img/Q(21)_a.png", "img/Q(21)_b.png", "img/Q(21)_c.png", "img/Q(21)_d.png"],
        answer: "img/Q(21)_c.png"
    },
    {
        question: "",
        image: "img/Q(22).png",
        options: ["a) 63", "b) 8D", "c) B1", "d) C6"],
        answer: "b) 8D"
    },
    {
        question: "Which of the following is a case where outline fonts rather than bitmap fonts are suitable for use?",
        options: ["a) To display characters as quickly as possible ", "b) To display characters in monospace", "c) To display single-byte and double-byte characters at the same time", "d) To enlarge characters by a given scale factor"],
        answer: "d) To enlarge characters by a given scale factor"
    },
    {
        question: "What is the approximate minimum required bandwidth for delivering a 30-frames/second  video in 800 x 600 pixel and 24-bit full color? Here, the data is not compressed during communication",
        options: ["a) 350 kbps", "b) 3.5 Mbps", "c) 35 Mbps", "d) 350 Mbps"],
        answer: "d) 350 Mbps"
    },
    {
        question: "Which of the following is an appropriate explanation of a relational database?",
        options: ["a) It connects a parent record and a child record by using a pointer.", "b) It represents data in the form of a two-dimensional table.", "c) It represents the structure and meaning of data by using tags.", "d) It retains data and procedures in an integrated (or encapsulated) form."],
        answer: "b) It represents data in the form of a two-dimensional table."
    },
    {
        question: "Which of the following is the network utility that is used to check detailed TCP connection information of the host?",
        options: ["a) MO", "b) MS", "c) OP", "d) OS"],
        image: "img/Q(26).png",
        answer: "d) OS"
    },
    {
        question: "Which of the following is an appropriate description of keys in a relational database?",
        options: ["a) A primary key can be assigned as a composite key and must contain a column that is defined as a foreign key.", "b) The values of the primary and foreign keys cannot be duplicated and cannot be null.", "c) The values of the primary key must be unique, and the values of the foreign key must match the values of the related table’s primary key and can be duplicated.", "d) The values of the primary key need to match the values of the related table’s primary key, but the values of the foreign key do not need to match the values of the related table’s primary key."],
        answer: "c) The values of the primary key must be unique, and the values of the foreign key must match the values of the related table’s primary key and can be duplicated."
    },
    {
        question: "",
        options: ["a) A department cannot exist without any employees.", "b) An employee can belong to multiple departments at the same time.", "c) An employee does not have to belong to a department.", "d) The total number of employees and the total number of departments match"],
        image: "img/Q(28).png",
        answer: "b) An employee can belong to multiple departments at the same time."
    },
    {
        question: "",
        options: ["a)", "b)", "c)", "d)"],
        image: "img/Q(29).png",
        answer: "a)"
    },
    {
        question: "Which of the following is the purpose of setting an index in the columns of the table of a relational database by a user?",
        options: ["a) To enable economization of disk space when a single large table is distributed and saved on several disks.", "b) To enable efficient access to the storage location of data in order to improve the search speed", "c) To ensure that no value is duplicated in a column.", "d) To match the value of the foreign key column with the value of the primary key of another table."],
        answer: "b) To enable efficient access to the storage location of data in order to improve the search speed"
    },
    {
        question: "Which of the following is a role of DNS in a TCP/IP network?",
        options: [
            "a) A private IP address is translated into a global IP address in order to access the Internet.",
            "b) A program in a server can be invoked only by its name without taking the server’s IP address into consideration.",
            "c) Domain names, host names, and other such information are mapped to IP addresses.",
            "d) In response to an assignment request for an IP address from a PC or a printer, an unused address is chosen from the addresses registered in the server."
        ],

        answer: "c) Domain names, host names, and other such information are mapped to IP addresses"
    },
    {
        question: "In the same subnet, which of the following is the devices that will receive the data when the destination address is set to 255.255.255.255?",
        options: ["a) All devices in the same subnet", "b) All devices using the same DNS server", "c) Only the default gateway of the subnet", "d) Only the device sending the data to itself"],
        answer: "a) All devices in the same subnet"
    },
    {
        question: "How many host addresses are there in the network 192.168.10.0/26?",
        options: ["a) 30", "b) 62", "c) 126", "d) 254"],
        answer: "b) 62"
    },
    {
        question: "In a TCP/IP network, which of the following is a protocol used to match the clocks of the server and the client?",
        options: ["a) ARP", "b) ICMP", "c) NTP", "d) RIP"],
        answer: "c) NTP"
    },
    {
        question: "As for the use of e-mails over the Internet, which of the following is a standard that extends the header field and can handle not only text but also audio and images?",
        options: ["a) HTML", "b) MHS", "c) MIME", "d) SMTP"],
        answer: "c) MIME"
    },
    {
        question: "Which of the following is malware that is activated by attackers to launch attacks on other computers?",
        options: ["a) Bot", "b) Rootkit", "c) Trojan Horse", "d) Worm"],
        answer: "a) Bot"
    },
    {
        question: "Which of the following is considered a violation of confidentiality?",
        options: ["a) Denial of services to a website handling confidential information by generating fake heavy traffic in the network", "b) Destruction of server hardware storing personal information caused by high voltage due to failure of voltage stabilizer", "c) Disturbing communication by destroying ciphertext of confidential information", "d) Tricking a user into providing personal information to a fake website"],
        answer: "d) Tricking a user into providing personal information to a fake website"
    },
    {
        question: "Which of the following is an appropriate description of “asymmetric encryption,” used for encrypting and decrypting messages for secure communication?",
        options: ["a) A ciphertext message is shorter than its original plaintext message.", "b) A message receiver’s public key is used to encrypt the message and his/her private key is used to decrypt the message.", "c) A message sender’s private key is open to everyone and is used to encrypt the message, and each message receiver’s public key is used to decrypt the message.", "d) A secret key needs to be shared among those who need to receive the message."],
        answer: "b) A message receiver’s public key is used to encrypt the message and his/her private key is used to decrypt the message."
    },
    {
        question: "Which of the following is a method of social engineering used in a targeted e-mail attack?",
        options: ["a) “Unsolicited advertising” is shown in the subject", "b) Content that appears to be related to the work of the recipient is shown in the subject or body text.", "c) In order to make the recipients access a bogus website, the sender pretends to be a financial institution and sends e-mails indiscriminately.", "d) In order to make the recipients transfer a fee that they do not need to pay, the sender pretends to be a collection agency and sends e-mails indiscriminately."],
        answer: "b) Content that appears to be related to the work of the recipient is shown in the subject or body text."
    },
    {
        question: "In information security, which of the following is a back door?",
        options: ["a) A LAN port that is incorporated into a switch in order to obtain network communication packets and inspect details of the communication", "b) A tool that searches for an open TCP port on a server on the Internet, and identifies running services", "c) A URL that enables access to a website without going through the official procedures such as password authentication that are normally required for access", "d) An attack that causes a program to crash by entering a string with a length that exceeds the size of an area of memory acquired by the program, causing an overflow"],
        answer: "c) A URL that enables access to a website without going through the official procedures such as password authentication that are normally required for access"
    },
    {
        question: "An asset valued at $200,000 has an exposure factor of 20% and an annual rate of occurrence of 0.5 for the risk of malware infection. How much (in dollars) is the annual loss expectancy of the asset due to malware infection?",
        options: ["a) 20,000", "b) 40,000", "c) 80,000", "d) 100,000"],
        answer: "a) 20,000"
    },
    {
        question: "Which of the following is residual risk?",
        options: ["a) Amount of risk that is reduced by implementing risk treatment",
            "b) Risk that exists prior to performing any risk management activities",
            "c) Risk that is identified prior to implementing risk treatment",
            "d) Risk that remains after implementing risk treatment"],
        answer: "d) Risk that remains after implementing risk treatment"
    },
    {
        question: "Which of the following is a security measure that allows users to run potentially malicious programs on a system with the purpose of observing their behavior, while restricting the programs from accessing outside of the system?",
        options: ["a)Firewall", "b)Honeypot", "c)IPS", "d)Sandbox"],
        answer: "d)Sandbox"
    },
    {
        question: "",
        image: "img/Q(44).png",
        options: ["a)", "b)", "c)", "d)"],
        answer: "c)"
    },
    {
        question: "When a sender from domain A sends an e-mail to a recipient in domain B, which of the following is used by the mail server in domain A for authenticating the sender?",
        options: ["a) APOP", "b) POP3S", "c) S/MIME", "d) SMTP-AUTH"],
        answer: "d) SMTP-AUTH"
    },
    {
        question: "",
        options: ["a) Activity",
            "b) Data flow",
            "c) Data store",
            "d) Process"],
        image: "img/Q(46).png",
        answer: "d) Process"
    },
    {
        question: "Among the definitions of software quality characteristics, which of the following characteristics refers to the ease of modifying a program for a certain computer so that it can run on a different architecture?",
        options: ["a) Changeability", "b) Interoperability", "c) Portability", "d) Usability"],
        answer: "c) Portability"
    },
    {
        question: "In the error embedding method, when the number of embedded errors is S, the number of discovered errors from the embedded errors is m, the number of latent errors before the start of testing not including embedded errors is T, and the total number of discovered errors is n, which of the following expresses the relationship of S, T, m, and n?",
        options: ["img/Q(48)_a.png", "img/Q(48)_b.png", "img/Q(48)_c.png", "img/Q(48)_d.png"],
        answer: "img/Q(48)_a.png"
    },
    {
        question: "",
        image: "img/Q(49).png",
        options: ["img/Q(49)_a.png", "img/Q(49)_b.png", "img/Q(49)_c.png", "img/Q(49)_d.png"],
        answer: "img/Q(49)_c.png"
    },
    {
        question: "Which of the following is the appropriate term for referring to activities such as creating a class diagram in UML from a program?",
        options: ["a) Backtracking", "b) Forward engineering", "c) Reengineering", "d) Reverse engineering"],
        answer: "d) Reverse engineering"
    },
    {
        question: "As for software development activities, which of the following is refactoring?",
        options: ["a) In order to improve the maintainability of a program, its internal structure is modified without any change to the external specifications.",
            "b) In order to improve the quality of a program, two programmers cooperate to perform the coding of a single program.",
            "c) In order to obtain feedback from users, the prototype of a program to be provided is created at an early stage.",
            "d) In order to promptly develop a program to be operated, test cases are set in advance and the program is then coded."
        ],
        answer: "a) In order to improve the maintainability of a program, its internal structure is modified without any change to the external specifications."
    },
    {
        question: "Which of the following is an appropriate description of the stakeholders involved in a project?",
        options: ["a) Some stakeholders receive the project result advantageously and others disadvantageously.",
            "b) The stakeholders are individually identified people, such as project managers",
            "c) The stakeholders belong within the organization and do not exist outside of it.",
            "d) The stakeholders participate directly in the project; they are not limited to indirect involvement."],
        answer: "a) Some stakeholders receive the project result advantageously and others disadvantageously."
    },
    {
        question: "",
        options: ["a) Communication", "b) Procurement", "c) Risk", "d) Scope"],
        image: "img/Q(53).png",
        answer: "d) Scope"
    },
    {
        question: "",
        options: ["a)", "b)", "c)", "d)"],
        image: "img/Q(54).png",
        answer: "b)"
    },
    {
        question: "Which of the following is an appropriate explanation of the Function Point method for creating an estimate for software development?",
        options: ["a) It is a method for estimating the overall workload, where the development work is broken down into units of work items. The cumulative total of the workload for each item is then calculated based on a predefined standard value for the workload that is applied to each individual work item.",
            "b) It is a method for estimating the person-hours and development duration, on the assumption that the development scale is known. It can be applied to all fields, not just to the business field",
            "c) It is a method for estimating the scale and person-hours of development based on some past experience of similar software, where similarities and differences of software are analyzed while past data is used for the similarities and past experience for the differences",
            "d) It is a method for estimating the scale of software, where the functions of the software are quantitatively measured using elements such as the number of I/O data items and the number of files, and an adjustment is performed based on the complexity"],
        answer: "d) It is a method for estimating the scale of software, where the functions of the software are quantitatively measured using elements such as the number of I/O data items and the number of files, and an adjustment is performed based on the complexity"
    },
    {
        question: "When an IT service is discontinued, it is important to comprehensively identify the assets that were used and appropriately remove or free surplus assets. Which of the following is an event that may occur due to mistaken removal of assets that should remain, but does not occur because of the removal of assets that should be removed?",
        options: ["a) Occurrence of incidents involving other IT services that share assets with the discontinued IT service",
            "b) Overpaying software or hardware maintenance charges",
            "c) Wasting money on software licenses",
            "d) Wasting space that becomes unused on magnetic disks"
        ],
        answer: "a) Occurrence of incidents involving other IT services that share assets with the discontinued IT service"
    },
    {
        question: "As for activities in capacity management to estimate a service’s capacity, capability, and performance, which of the following is trend analysis?",
        options: ["a) As the first phase of modeling, creating a model that accurately reflects the current performance",
            "b) Generating simulated transactions and predicting the response time and throughput of a service",
            "c) Understanding the chronological usage of a specific resource and predicting usage changes in the future",
            "d) Using mathematical techniques, such as queueing theory, and predicting the response time and throughput of a service"],
        answer: "c) Understanding the chronological usage of a specific resource and predicting usage changes in the future"
    },
    {
        question: "Which of the following is an appropriate description concerning system operation?",
        options: ["a) Disconnecting failed components to continue the system’s more important functions is called fall back operation.",
            "b) Re-executing a program using data recorded at a checkpoint is called rebooting",
            "c) Recording transactions for the purpose of restoring a database to its condition prior to changes is called data logging.",
            "d) Regularly saving files to another recording media for the purpose of restoration in the event of failure is called restoring"],
        answer: "a) Disconnecting failed components to continue the system’s more important functions is called fall back operation."
    },
    {
        question: "In the system design phase, when an audit is performed on the control to reduce the risk of user requirements not being met, which of the following is a point to be checked?",
        options: ["a) Whether programming is performed in accordance with the specified conventions and standards",
            "b) Whether the program specifications are created based on the system design documents",
            "c) Whether the test plan is created based on the system test requirements, and the manager’s approval of the system operations department is obtained",
            "d) Whether the user department participates in the review of the system design documents"
        ],
        answer: "d) Whether the user department participates in the review of the system design documents"
    },
    {
        question: "When an information system department enters data sheets issued by a business operations department, which of the following is an appropriate task executed by the information system department?",
        options: ["a) The data sheets are retained in the information system department until the due date for processing, and the number of sheets received is checked and confirmed just before the due date.",
            "b) To enable the business operations department to check the processing results of each data sheet, the processing results list is sent to that department.",
            "c) To prevent unauthorized use or leakage of confidential information, data sheets are disposed of immediately after data entry is completed.",
            "d) When the data sheet contains an obvious error, the data sheet is corrected, and an entry is made at the discretion of the person in charge of data entry."],
        answer: "b) To enable the business operations department to check the processing results of each data sheet, the processing results list is sent to that department."
    },
    {
        question: "Which of the following is an example of RPA that is used to proceed with business innovation with the aim of resolving management issues, such as a shortage of staff members?",
        options: ["a) A recipient who obtains the derivative work must be strictly prohibited from redistributing copies.a) Deploying robots for assembly work instead of employees engaged in the assembly of components on the manufacturing line.",
            "b) Processing standardized routine activities such as data input, and cross-checking of the business system by software instead of the clerical staff members.",
            "c) Replacing manned stores with unmanned stores run by cameras and an electronic payment system for analysis of IC tags and images.",
            "d) Replacing transfer of stored products through manual operations by using a forklift or something similar with an automated warehouse system where computer control has rendered human labor obsolete."],
        answer: "b) Processing standardized routine activities such as data input, and cross-checking of the business system by software instead of the clerical staff members."
    },
    {
        question: "Which of the following is a system where the use of a state transition diagram is appropriate when the system is designed?",
        options: ["a) Electricity charge calculation system that calculates charges based on the amount of power usage from power meter readings",
            "b) Greenhouse control system that keeps the environment in a greenhouse optimal based on the data of an installed sensor.",
            "c) Inventory control system that performs the collection and aggregation of inventory assets at the end of every month and at the time of settlement.",
            "d) System that measures the operational status of the system resources and creates a report."],
        answer: "b) Greenhouse control system that keeps the environment in a greenhouse optimal based on the data of an installed sensor."
    },
    {
        question: "Which of the following is an explanation of the digital divide?",
        options: ["a) It refers to an economic or social gap that occurs due to differences in abilities and opportunities to use PCs and communications.",
            "b) It refers to communications and broadcast services that any citizen can access with standard charges, without any differences between regions.",
            "c) It refers to the ability of citizens to participate directly in the policies of government and autonomous bodies by using the Internet",
            "d) It refers to the provision of all services in a single place for each event of the daily life of citizens or each field of corporate activity"],
        answer: "a) It refers to an economic or social gap that occurs due to differences in abilities and opportunities to use PCs and communications"
    },
    {
        question: "",
        options: ["a) Company A",
            "b) Company B",
            "c) Company C",
            "d) Company D"],
        image: "img/Q(64).png",
        answer: "c) Company C"
    },
    {
        question: "Which of the following is an explanation of green procurement (sustainable procurement)?",
        options: ["a) It refers to a certificate that enables commercial trading of green power that is generated from natural energy such as sunlight, biomass, wind power, and geothermal heat.",
            "b) It refers to a mass promotion of environmental protection activities and fund raising from investors for the environmental protection",
            "c) It refers to a preferential purchase of products and services that exert a lower environmental burden.",
            "d) It refers to international standards that employ labels to certify that a product contributes to environmental protection."],
        answer: "c) It refers to a preferential purchase of products and services that exert a lower environmental burden.",
    },
    {
        question: "Among the mechanisms that are utilized on the Internet, which of the following is an explanation of crowdfunding?",
        options: ["a) It refers to a company placing an order with a person who is judged to be qualified to outsource work to an unspecified number of people on the website through prior notification of business operations.",
            "b) It refers to a web service for individuals that displays information on the account transactions of multiple financial institutions at once by a single authentication through prior registration of multiple account information",
            "c) It refers to payment from an advertiser to a website operator when a person who is browsing the website purchases a product from the EC site by using the link from the published advertisement.",
            "d) It refers to raising money from an unspecified number of individuals who support a business project that is published on the website, and who expect to obtain products and rights in return."],
        answer: "d) It refers to raising money from an unspecified number of individuals who support a business project that is published on the website, and who expect to obtain products and rights in return."
    },
    {
        question: "Which of the following is a characteristic of the maturity stage in the product life cycle?",
        options: ["a) Demand decreases and some companies start withdrawing. A company determines whether it can be a strong player in this stage and considers advancing into alternative markets.",
            "b) Demand grows, and the product differentiation and segmentation of the market become evident. Competition intensifies, and it becomes important to add new models and reduce cost.",
            "c) Demand is partial, and cultivation of new demand is the key to success or failure. It is necessary to persuade specific targets with conviction.",
            "d) The market begins to understand the value of a product. Both the product line and the channel must be expanded. Sales increase, but investment is also needed in this stage"],
        
        answer: "b) Demand grows, and the product differentiation and segmentation of the market become evident. Competition intensifies, and it becomes important to add new models and reduce cost."
    },
    {
        question: "Which of the following is mostly tacit knowledge?",
        options: ["a) A list of countries and their capitals",
            "b) An inventory of assets",
            "c) Contents of a washing machine manual",
            "d) How to ride a bicycle"],
        answer: "d) How to ride a bicycle"
    },
    {
        question: "Which of the following is an appropriate example of a core technology for the creation of competitive advantage?",
        options: ["a) It is a development technology that combines general components with the purpose of fast-track development and fast-track market introduction of products.",
            "b) It is a device technology that employs the same CPU core as that of competitors and enhances the portability of software.",
            "c) It is an idle reduction technology of an automobile engine that cannot be imitated by competitors.",
            "d) It is an interface technology whose purpose is to create standard interfaces by forming an alliance and use them commonly."],
        answer: "c) It is an idle reduction technology of an automobile engine that cannot be imitated by competitors."
    },
    {
        question: "",
        options: ["a) A",
            "b) B",
            "c) C",
            "d) D"],
        image: "img/Q(70).png",
        answer: "c) C"
    },
    {
        question: "Which of the following is an explanation of cryptocurrency mining that is enabled by block chain?",
        options: ["a) Making payments or settlements by using cryptocurrency in brick-and-mortar stores",
            "b) Obtaining capital gain by buying and selling cryptocurrency",
            "c) Obtaining cryptocurrency as a reward for participation in checking or record calculation of cryptocurrency transactions",
            "d) Transferring money to an individual or organization in cryptocurrency"],
        answer: "c) Obtaining cryptocurrency as a reward for participation in checking or record calculation of cryptocurrency transactions"
    },
    {
        question: "Which of the following is an explanation of a sharing economy?",
        options: ["a) It is a concept by which efficient management and operation of renewable energy and urban infrastructure are performed by using IT, which leads to an improvement in the quality of peoples’ lives and helps achieve continuous economic growth.",
            "b) It is a concept by which the productivity of an entire economy increases as a result of utilizing IT, and the supply and demand gap is eliminated via the progress of SCM, which leads to sustainable growth free from inflation",
            "c) It is a mechanism by which sales both over-the-counter and through the Internet are combined in a business transaction, and the benefits of both are utilized and linked to expand overall sales.",
            "d) It is a mechanism mainly between individuals by which the community function and other functions of social media are utilized to share, lend, or borrow unused assets owned by individuals"],
        answer: "d) It is a mechanism mainly between individuals by which the community function and other functions of social media are utilized to share, lend, or borrow unused assets owned by individuals"
    },
    {
        question: "Which of the following is an appropriate explanation of digital signage?",
        options: ["a) A technology to embed identification information in data to prevent abuse",
            "b) An economic or social gap among regions or individuals, arising from lack of opportunities and abilities to utilize information technology",
            "c) An electronic billboard that displays information such as images and characters",
            "d) An electronic signature that is used to ensure the validity of information"],
        answer: "c) An electronic billboard that displays information such as images and characters"
    },
    {
        question: "Which of the following is an appropriate description of the constituent elements of IoT?",
        options: ["a) They cover all items that can connect to the Internet or a closed network.",
            "b) They cover all tangible objects except humans and living things",
            "c) They cover digital type devices, and do not cover analog type devices",
            "d) They cover only devices that autonomously collect data and perform data analysis."],
        answer: "a) They cover all items that can connect to the Internet or a closed network"
    },
    {
        question: "Which of the following is a characteristic of OJT?",
        options: ["a) A dedicated approach to education is possible outside of the workplace.",
            "b) Because the boss or senior accosiates provide education in hands-on knowledge and technical skills by staying close to practical affairs, the required competency can be acquired.",
            "c) Education that focuses on generalized knowledge and technology can be acquired",
            "d) Regardless of the ability of the boss or senior associates, occupational knowledge of a specific standard can be acquired"],
        answer: "b) Because the boss or senior accosiates provide education in hands-on knowledge and technical skills by staying close to practical affairs, the required competency can be acquired."
    },
    {
        question: "To secure transparency in business administration, which of the following is a concept that supervises and monitors a company’s activities from the perspective of questions such as for whom the company runs its business, how top management is structured, and whether the organization has self-improvement capabilities?",
        options: ["a) Core competence",
            "b) Corporate governance",
            "c) Corporate identity",
            "d) Stakeholder analysis"],
        answer: "b) Corporate governance"
    },
    {
        question: "Which of the following is a description of the ABC analysis?",
        options: ["a) It analyzes a region in more detail on the basis of various data (population, purchasing power, etc.) by dividing the region into a grid with multiple sections.",
            "b) It arranges products in order of high sales or high gross profit, divides them into levels on the basis of the cumulative ratio, and then plans to increase the volume of product sales at high levels.",
            "c) It classifies and aggregates multiple parts of the survey data by factor, and analyzes the sales capacity and status of purchasing the same products.",
            "d) It repeatedly surveys the same panelist (respondent) many times. This data is used to understand regional trends or changes in the purchasers."],
        answer: "b) It arranges products in order of high sales or high gross profit, divides them into levels on the basis of the cumulative ratio, and then plans to increase the volume of product sales at high levels."
    },
    {
        question: "There are several quality control tools that are used primarily for manufacturing and inspection departments. Which of the following is a graph where appropriate units or attributes for the data are set on the vertical and horizontal axes correspondingly and measured values are plotted accordingly?",
        options: ["a) Control chart",
            "b) Histogram",
            "c) Pareto chart",
            "d) Scatter diagram"],
        answer: "d) Scatter diagram"
    },
    {
        question: "A company plans to provide a product with a fixed cost of $128,000, a variable cost per unit of $48, and a selling price per unit of $80. Which of the following is the point of sales (in dollars) to become break-even?",
        options: ["a) 240,000",
            "b) 320,000",
            "c) 480,000",
            "d) 560,000"],
        answer: "b) 320,000"
    },
    {
        question: "In developing new products that are expected to be employed by government agencies of WTO member countries, which of the following are the appropriate standards to be applied?",
        options: ["a) ANSI standards",
            "b) FCC standards",
            "c) IEEE standards",
            "d) ISO standards"],
        answer: "d) ISO standards"
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





