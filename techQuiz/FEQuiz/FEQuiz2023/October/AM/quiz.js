const quizData = [
    {
        question: "In a school class, 13 students play basketball and 19 play football. Among them, 8 students play both. Further, 7 students play neither. How many students are there in the class?",
        options: ["a) 17", "b) 31", "c) 33", "d) 47"],
        answer: "b) 31"
    },
    {
        question: "n is a binary integer represented in two’s complement. Which of the following operations get the value 7 × n using only bit shifting and an addition or subtraction operation?",
        options: ["a) Shift n 2 bits to the left, then add n to the result.",
            "b) Shift n 2 bits to the left, then subtract n from the result",
            "c) Shift n 3 bits to the left, then add n to the result.",
            "d) Shift n 3 bits to the left, then subtract n from the result"],
        answer: "d) Shift n 3 bits to the left, then subtract n from the result"
    },
    {
        question: "A parking lot has 10 parking spaces in a row, and 7 cars are parked at random parking spaces. What is the probability that the three empty places are adjacent to each other?",
        options: ["img/Q(3)_a.png", "img/Q(3)_b.png", "img/Q(3)_c.png", "img/Q(3)_d.png"],
        answer: "img/Q(3)_c.png"
    },
    {
        question: "What is the sum of two binary fractions 1.0101 and 1.0111 expressed in decimal form?",
        options: ["a) 2.5", "b) 2.75", "c) 2.875", "d) 2.9375"],
        answer: "b) 2.75"
    },
    {
        question: "Which of the following expressions in postfix notation is equivalent to the expression 2+5×3+4 in infix notation? Here, the operator “×” has higher precedence than “+”.",
        options: ["a) 2 5 3 4 × + +", "b) 2 5 + 3 4 × +", "c) 2 5 3 + × 4 +", "d) 2 5 3 × + 4 +"],
        answer: "d) 2 5 3 × + 4 +"
    },
    {
        question: "",
        image: "img/Q(6).png",
        options: ["a) 001", "b) 010", "c) 101", "d) 110"],
        answer: "d) 110"
    },
    {
        question: "",
        image: "img/Q(7).png",
        options: ["a) 2", "b) 3", "c) 4", "d) 6"],
        answer: "c) 4"
    },
    {
        question: "",
        image: "img/Q(8).png",
        options: ["a) Left child of 16",
            "b) Left child of 23",
            "c) Right child of 3",
            "d) Right child of 10"],
        answer: "d) Right child of 10"
    },
    {
        question: "",
        image: "img/Q(9).png",
        options: ["a) A, B, D",
            "b) A, C, D",
            "c) B, E",
            "d) D, E"],
        answer: "c) B, E"
    },
    {
        question: "Which of the following is an appropriate description concerning XML?",
        options: ["a) It is based on HTML and expands its functions",
            "b) It requires a dedicated editor for writing XML documents.",
            "c) It integrates the logical structure and display style of documents.",
            "d) It enables users to define the attribute information and logical structure of documents by using the user’s own tags."],
        answer: "d) It enables users to define the attribute information and logical structure of documents by using the user’s own tags."
    },
    {
        question: "In a CPU, which of the following is a special register that contains the address of the next instruction to be fetched?",
        options: ["a) Accumulator",
            "b) Index register",
            "c) Instruction register",
            "d) Program counter"],
        answer: "d) Program counter"
    },
    {
        question: "Which of the following is an appropriate CPU operation associated with cache memory?",
        options: ["a) When a cache hit occurs, the CPU fetches data from ROM.",
            "b) When a cache hit occurs, the CPU fetches data from the main memory.",
            "c) When a cache miss occurs, the CPU fetches data from the cache memory",
            "d) When a cache miss occurs, the CPU fetches data from the main memory"],
        answer: "d) When a cache miss occurs, the CPU fetches data from the main memory"
    },
    {
        question: "Which of the following is a computer architecture in which a processor executes the same instruction on multiple data?",
        options: ["a) MIMD",
            "b) MISD",
            "c) SIMD",
            "d) SISD"],
        answer: "c) SIMD"
    },
    {
        question: "ECC is used for error detection and correction in memory. When n+2 redundant bits are required for a data bus having a width of 2nbits, what is the number of redundant bits that are required for a data bus having a width of 128 bits?",
        options: ["a) 3",
            "b) 8",
            "c) 9",
            "d) 10"],
        answer: "c) 9"
    },
    {
        question: "Which of the following is the most appropriate explanation of grid computing?",
        options: ["a) A computing task is distributed to several computers in the network to attain computational capacity.",
            "b) Physical devices such as computers or network devices are emulated to circumvent compatibility constraints and attain software portability and flexibility",
            "c) Requirements are stated as constraints on response time and/or on the temporal validity of sensory data.",
            "d) Sensing devices are connected to a network to provide feedback and control through personal mobile devices."],
        answer: "a) A computing task is distributed to several computers in the network to attain computational capacity."
    },
    {
        question: "Which of the following is an RAID configuration that deploys two parity records to different disk drives enabling two simultaneous disk drive failures in the same RAID group to be recovered?",
        options: ["a) RAID0",
            "b) RAID1",
            "c) RAID5",
            "d) RAID6"],
        answer: "d) RAID6"
    },
    {
        question: "Which of the following occurs when a program attempts to access a page that is mapped in the virtual address space but is not located in the main memory? Here, the OS supports paging",
        options: ["a) Fatal error",
            "b) Page fault",
            "c) Scheduling error",
            "d) Segmentation fault"],
        answer: "b) Page fault"
    },
    {
        question: "Which of the following is an appropriate description concerning the round robin process scheduling method?",
        options: ["a) CPU resources are allocated to each process in order of priority specified in advance when a particular event occurs.",
            "b) CPU resources are allocated to each process in order of processing time from shortest to longest",
            "c) CPU resources are allocated to the first executable process in the queue when an interval-timer interrupt is generated.",
            "d) CPU resources are allocated to the process that needs to start immediately when some kind of interrupt is generated."],
        answer: "c) CPU resources are allocated to the first executable process in the queue when an interval-timer interrupt is generated."
    },
    {
        question: "Which of the following is an explanation of the function of an archiver that is one of the data management utilities?",
        options: ["a) Compiling several files into one file or reconstructing the original files in order to perform data backup and distribution",
            "b) Creating both an area for recording data and an area for managing data on a single hard disk",
            "c) Keeping data secure through file protection for safeguarding data from unauthorized use and destruction, and also through copy protection for preventing unauthorized copying",
            "d) Rearranging a file into contiguous areas, to the extent possible, on a hard disk in which fragmentation has occurred"],
        answer: "a) Compiling several files into one file or reconstructing the original files in order to perform data backup and distribution"
    },
    {
        question: "Which of the following is a sequential circuit that has two stable states?",
        options: ["a) Adder circuit",
            "b) Capacitor",
            "c) Flip-flop",
            "d) NAND gate"],
        answer: "c) Flip-flop"
    },
    {
        question: "",
        image: "img/Q(21).png",
        options: ["img/Q(21)_a.png",
            "img/Q(21)_b.png",
            "img/Q(21)_c.png",
            "img/Q(21)_d.png"],
        answer: "img/Q(21)_c.png"
    },
    {
        question: "A power supply unit has a rated output power of 500 watts and an efficiency of 80%. In order to obtain an output power of 500 watts from this power supply unit, how many watts is the minimum input power?",
        options: ["a) 100",
            "b) 400",
            "c) 625",
            "d) 900"],
        answer: "c) 625"
    },
    {
        question: "",
        image: "img/Q(23).png",
        options: ["a) Duplicate check",
            "b) Format check",
            "c) Logical check",
            "d) Sequence check"],
        answer: "c) Logical check"
    },
    {
        question: "Which of the following is a process in PCM to capture analog values from audio signals at a regular interval?",
        options: ["a) Encoding",
            "b) Reverse quantization",
            "c) Quantization",
            "d) Sampling"],
        answer: "d) Sampling"
    },
    {
        question: "In a DBMS, which of the following is a function that decides the schema?",
        options: ["a) Definition function",
            "b) Maintenance function",
            "c) Recovery function",
            "d) Security function"],
        answer: "a) Definition function"
    },
    {
        question: "Which of the following is an appropriate method used to remove data redundancy in relational database systems?",
        options: ["a) Entity-relationship",
            "b) Functional dependency",
            "c) Hierarchical",
            "d) Normalization"],
        answer: "d) Normalization"
    },
    {
        question: "Which of the following is the most appropriate description concerning the primary role of an SQL query optimizer?",
        options: ["a) It determines the most efficient way to execute a query",
            "b) It minimizes the number of rows in a result set.",
            "c) It parses a query and improves it for efficient network transmission.",
            "d) It stores the results of frequently used queries in a cache."],
        answer: "a) It determines the most efficient way to execute a query"
    },
    {
        question: "",
        image: "img/Q(28).png",
        options: ["a) StudentNumber HAVING AVG(Score) >= 80",
            "b) StudentNumber HAVING AVG(Score) >= 80",
            "c) Subject HAVING AVG(Score) >= 80",
            "d) Subject WHERE Score >= 80"],
        answer: "a) StudentNumber HAVING AVG(Score) >= 80"
    },
    {
        question: "Which of the following is a file in which values before and after an update of the database are written and saved as the update history of the database?",
        options: ["a) Backup file",
            "b) Checkpoint file",
            "c) Dump file",
            "d) Log file"],
        answer: "d) Log file"
    },
    {
        question: "Which of the following is the most appropriate information for a router to determine the destination of an incoming packet?",
        options: ["a) Destination IP address",
            "b) Destination MAC address",
            "c) Source IP address",
            "d) Source MAC address"],
        answer: "a) Destination IP address"
    },
    {
        question: "Which of the following is a feature of a switching hub (layer 2 switch) network device?",
        options: ["a) It breaks a received packet into smaller pieces (fragments) in the network layer.",
            "b) It dynamically allocates an IP address for a terminal connected to its LAN port",
            "c) It forwards a received packet only to its LAN port connected to a device with the packet’s destination MAC address",
            "d) It forwards a received packet to all its LAN ports (broadcast)."],
        answer: "c) It forwards a received packet only to its LAN port connected to a device with the packet’s destination MAC address"
    },
    {
        question: "When a PC connected to a LAN is starting up, which of the following protocols is used to automatically assign an IP address to the PC??",
        options: ["a) DHCP",
            "b) DNS",
            "c) FTP",
            "d) PPP"],
        answer: "a) DHCP"
    },
    {
        question: "In telecommunication, which of the following is a standard for wireless broadband communication for mobile devices and data terminals?",
        options: ["a) IEEE 802.11",
            "b) LTE",
            "c) NFC",
            "d) UWB"],
        answer: "b) LTE"
    },
    {
        question: "Which of the following is a multicast IPv4 address?",
        options: ["a) 10.1.1.1",
            "b) 192.0.2.0",
            "c) 203.0.113.4",
            "d) 224.0.0.5"],
        answer: "d) 224.0.0.5"
    },
    {
        question: "Which of the following is a method for embedding a malicious java script code in the content sent to a victim’s web browser from a vulnerable website?",
        options: ["a) Cross-site request forgery",
            "b) Cross-site scripting",
            "c) OGNL injection",
            "d) SQL injection"],
        answer: "b) Cross-site scripting"
    },
    {
        question: "Mr. A encrypts a message to be sent to Mr. B using an asymmetric key encryption method so that only Mr. B can decrypt the message. Which of the following is(are) the private key(s) used to decrypt the message?",
        options: ["a) A third party’s",
            "b) Both Mr. A’s and Mr. B’s",
            "c) Only Mr. A’s",
            "d) Only Mr. B’s"],
        answer: "d) Only Mr. B’s"
    },
    {
        question: "Which of the following is an attack using a trial-and-error method to obtain confidential information such as a user password or personal identification number (PIN)?",
        options: ["a) Brute force",
            "b) Denial of service",
            "c) Man-in-the-middle",
            "d) Sniffing"],
        answer: "a) Brute force"
    },
    {
        question: "When information, such as an e-mail or a document file, is sent and received with a digital signature via the Internet, which of the following is an appropriate combination of security properties that ensure that such information is from the signer and has not been altered or tampered with during transmission?",
        options: ["a) Atomicity and consistency",
            "b) Authenticity and integrity",
            "c) Availability and confidentiality",
            "d) Durability and isolation"],
        answer: "b) Authenticity and integrity"
    },
    {
        question: "Which of the following is an example of a behavior of a key logger?",
        options: ["a) It interrupts the communication between two parties and then collects and falsifies the information being exchanged.",
            "b) When Internet banking is used, it collects the password entered by the user.",
            "c) When the user browses movies on a web browser, it arbitrarily displays unintended advertisements for the user.",
            "d) When the web browser is started, it arbitrarily displays a tool bar that the user has not installed."],
        answer: "b) When Internet banking is used, it collects the password entered by the user."
    },
    {
        question: "Which of the following is a role of a PKI certification authority as a reliable third party?",
        options: ["a) Adding a digital signature to an e-mail body as requested by a user",
            "b) Enabling the synchronization of time by returning an accurate time to a user’s request",
            "c) Issuing a digital certificate that certifies the private key of a user or server",
            "d) Issuing a digital certificate that certifies the public key of a user or server"],
        answer: "d) Issuing a digital certificate that certifies the public key of a user or server"
    },
    {
        question: "",
        image: "img/Q(41).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "b)"
    },
    {
        question: "Companies usually provide a means for their mobile workforce to access the corporate network securely over the Internet through insecure channels such as open wireless networks in hotels or coffee shops. Which of the following is the appropriate technology that can be used for this purpose?",
        options: ["a) DMZ (DeMilitarized Zone)",
            "b) SNMP (Simple Network Management Protocol)",
            "c) VoIP (Voice over Internet Protocol)",
            "d) VPN (Virtual Private Network)"],
        answer: "d) VPN (Virtual Private Network)"
    },
    {
        question: "Which of the following is a technique that attempts to intrude into the system in order to detect security-related vulnerabilities of the computer or network?",
        options: ["a) Penetration test",
            "b) Regression test",
            "c) Software inspection",
            "d) Walk-through"],
        answer: "a) Penetration test"
    },
    {
        question: "Which of the following is a key that the SSL/TLS certificate of a website contains?",
        options: ["a) The encrypted private-key of the website",
            "b) The encrypted public-key of the website",
            "c) The unencrypted private-key of the website",
            "d) The unencrypted public-key of the website"],
        answer: "d) The unencrypted public-key of the website"
    },
    {
        question: "Which of the following is a description concerning a decision table that is one of the design techniques used in system development?",
        options: ["a) It represents a combination of conditions and the corresponding operations",
            "b) It represents entities by rectangles and their relationship through connecting lines.",
            "c) It represents the flow of controls, such as a process or selection, by straight lines or arrows.",
            "d) It represents the flow of data between an external interface, processes, and data store."],
        answer: "a) It represents a combination of conditions and the corresponding operations"
    },
    {
        question: "The integration test for software composed of modules arranged in a hierarchical structure is performed from a high-level module. In such a case, which of the following is a test module that is used as a substitute for a low-level module?",
        options: ["a) Driver",
            "b) Emulator",
            "c) Simulator",
            "d) Stub"],
        answer: "d) Stub"
    },
    {
        question: "Which of the following is the most appropriate feature of polymorphism in objectoriented programming?",
        options: ["a) Developers are allowed to define classes incrementally by reusing classes defined previously as the basis for new classes.",
            "b) Only the information required to use a software module is published to the module user.",
            "c) The processes and data are combined into a single object.",
            "d) The same message can be interpreted differently by different classes of objects"],
        answer: "d) The same message can be interpreted differently by different classes of objects"
    },
    {
        question: ". Which of the following is approved by the customer when the external design of a system is completed?",
        options: ["a) Physical database specification",
            "b) Program flowchart",
            "c) Screen layout",
            "d) System development plan"],
        answer: "c) Screen layout"
    },
    {
        question: "Which of the following is an appropriate description of an extreme programming (XP) practice?",
        options: ["a) After the code is created, and it is confirmed that it can be integrated, test cases are created.",
            "b) Integration of the code and testing are continuously repeated",
            "c) The code that passed the tests is not refactored until the next iteration.",
            "d) The customer is responsible for the specification of unit tests"],
        answer: "b) Integration of the code and testing are continuously repeated"
    },
    {
        question: "Which of the following is a method that uses a modeling tool to create a design document described with E-R diagrams or other representations from the definition information in an active database?",
        options: ["a) Concurrent engineering",
            "b) Forward engineering",
            "c) Reverse engineering",
            "d) Social engineering"],
        answer: "c) Reverse engineering"
    },
    {
        question: "",
        image: "img/Q(51).png",
        options: ["a) 12",
            "b) 21",
            "c) 22",
            "d) 42g"],
        answer: "b) 21"
    },
    {
        question: "In order to determine the quality condition in a test process, it is necessary to analyze and evaluate the relationship between the number of completed test items and the cumulative number of bugs. Which of the following is a graph that indicates that the quality is becoming stable?",
        options: ["img/Q(52)_a.png",
            "img/Q(52)_b.png",
            "img/Q(52)_c.png",
            "img/Q(52)_d.png"],
        answer: "img/Q(52)_d.png"
    },
    {
        question: "",
        image: "img/Q(53).png",
        options: ["a) 8",
            "b) 9",
            "c) 12",
            "d) 13"],
        answer: "b) 9"
    },
    {
        question: "",
        image: "img/Q(54).png",
        options: ["a) A → B → E → I → L",
            "b) A → C → D → E → H → K",
            "c) A → C → F → I → L",
            "d) A → C → G → J → L"],
        answer: "d) A → C → G → J → L"
    },
    {
        question: "Which of the following is an appropriate policy for creating an SLA?",
        options: ["a) Setting a compensation as a penalty for every item that has a service level",
            "b) Setting a service level for every item that can be taken into consideration",
            "c) Setting a service level that is maintained into the future without any changes",
            "d) Setting a service level under the cost and needs of a service provider and its customers"],
        answer: "d) Setting a service level under the cost and needs of a service provider and its customers"
    },
    {
        question: "Which of the following is the most appropriate characteristic of the “big bang” or all-at-once migration method that is one of the system migration methods?",
        options: ["a) Additional operational costs are incurred because of parallel operations.",
            "b) An additional application is required for connecting the old and new systems.",
            "c) The old and new systems operate in parallel, and migration to the new system is performed at a particular point of time.",
            "d) The problems that occur during migration to the new system have a big impact."],
        answer: "d) The problems that occur during migration to the new system have a big impact."
    },
    {
        question: ". In IT service management, which of the following is a problem management activity that is performed proactively?",
        options: ["a) Analyzing the occurrence trend of incidents and proposing measures that prevent an incident from occurring in the future",
            "b) Classifying problems that have been detected and recorded, and setting the response priority",
            "c) Evaluating the effectiveness of a resolution to a critical problem",
            "d) Monitoring whether an incident occurs again or not for a certain period of time after the problem is resolved"],
        answer: "a) Analyzing the occurrence trend of incidents and proposing measures that prevent an incident from occurring in the future"
    },
    {
        question: "Which of the following is a method that restores the system to its initial state and restarts it when a system failure occurs, that does not accompany preprocessing of a copy before/after an update, and that is also called initial program load?",
        options: ["a) Cold start",
            "b) Rollback",
            "c) Rollforward",
            "d) Warm start"],
        answer: "a) Cold start"
    },
    {
        question: "Which of the following is an explanation of an audit work paper?",
        options: ["a) A compilation of the information security promissory letter that is presented to the audited department when the auditor implements an audit",
            "b) A compilation of the standards and guidelines used by the auditor for implementing an audit",
            "c) A document that must be disclosed along with the audit report to prove that the auditor has fulfilled his or her obligations with proper attention",
            "d) An execution record of the auditing procedure by an auditor, and it forms the basis of the audit opinion"],
        answer: "d) An execution record of the auditing procedure by an auditor, and it forms the basis of the audit opinion"
    },
    {
        question: "Which of the following is an appropriate description concerning a system audit team?",
        options: ["a) For an audit of the development progress in an information systems department, the audit team consists of members of the information systems department who are familiar with the details of the development",
            "b) In order to enable the person requesting the audit to issue improvement instructions on the basis of the audit report, the system audit team reports the audit results to the person requesting the audit",
            "c) When an audit of the information system is performed as a part of the business operations audit, the audit team is formed by the members of the user’s department.",
            "d) When the system audit team accepts the help of an expert, the decisions concerning the range of support, methods, and audit results is the responsibility of the expert."],
        answer: "b) In order to enable the person requesting the audit to issue improvement instructions on the basis of the audit report, the system audit team reports the audit results to the person requesting the audit"
    },
    {
        question: "",
        image: "img/Q(61).png",
        options: ["a) It is necessary for A and B to make the same amount of annual profit.",
            "b) It is necessary for A to make twice as much as the annual profit than that of B.",
            "c) It is necessary for B to make 1.5 times as much as the annual profit than that of A.",
            "d) It is necessary for B to make twice as much as the annual profit than that of A."],
        answer: "d) It is necessary for B to make twice as much as the annual profit than that of A."
    },
    {
        question: "Which of the following is a purpose of Business Process Management (BPM) in corporate activities?",
        options: ["a) Analysis and effective use of information resources",
            "b) Conservation and analysis of customer information",
            "c) Continuous improvement of business processes",
            "d) Effective use of management resources"],
        answer: "c) Continuous improvement of business processes"
    },
    {
        question: "Which of the following is a scheme where the user establishes a connection to the system of a service provider via the Internet and makes online use of only the necessary functions of the applications provided by the service provider at the necessary time?",
        options: ["a) ERP",
            "b) SaaS",
            "c) SCM",
            "d) XBRLs"],
        answer: "b) SaaS"
    },
    {
        question: "Which of the following is an appropriate example of utilizing Business Intelligence (BI)?",
        options: ["a) Analyzing a large volume of data stored on a business system to evaluate business performance and develop a business strategy",
            "b) Computerizing daily routine works, such as decision requests, to ensure that such procedures are carried out without fail and to enable their swift completion",
            "c) Enabling employees to use computerized learning materials via a network and managing their learning and performance",
            "d) Obtaining publications, such as annual reports issued by competitors, to understand their business strategies and financial situations"],
        answer: "a) Analyzing a large volume of data stored on a business system to evaluate business performance and develop a business strategy"
    },
    {
        question: "The RFP is presented to each vendor that has responded to an RFI. Which of the following should be done beforehand to proceed fairly with the future vendor selection processes??",
        options: ["a) Aside from the items of an RFP, giving a high evaluation to a vendor who is familiar with the current system to select that vendor easily",
            "b) Establishing processes of selection such as setting evaluation standards or weighting rules of conformity to the requested items",
            "c) Issuing unofficial agreements to all vendors to whom the RFP has been presented and requesting them to prepare a contract and a statement of work to accelerate the conclusion of the contract after the vendor selection",
            "d) Preparing a bailout for a vendor who received a high evaluation on the response to the RFI, in case it fails in the selection"],
        answer: "b) Establishing processes of selection such as setting evaluation standards or weighting rules of conformity to the requested items"
    },
    {
        question: "A company has products that are at the peak of profitability and sales. As a result, many competitors develop similar products to the market. Therefore, a company must develop new products to meet new demands and market opportunities. Which of the following is a state of such events in the product life cycle?",
        options: ["a) Decline stage",
            "b) Growth stage",
            "c) Introduction stage",
            "d) Maturity stage"],
        answer: "d) Maturity stage"
    },
    {
        question: "Which of the following is an explanation of benchmarking that is used for corporate management?",
        options: ["a) It refers to a qualitative and quantitative understanding of a company’s own products, services, and operation through comparison with those of competitors or advanced companies.",
            "b) It refers to drastically reforming the quality and structure of a company by redesigning its business processes from a customer viewpoint and by taking full advantage of information technology",
            "c) It refers to the ability to plan and manage the allocation of company-wide management resources in an effective and integrated manner and to achieve an improvement in management efficiency",
            "d) It refers to the concentration of management resources on the unique skills and technologies of a company that can generate profit and that are superior to those of other companies."],
        answer: "a) It refers to a qualitative and quantitative understanding of a company’s own products, services, and operation through comparison with those of competitors or advanced companies."
    },
    {
        question: "Which of the following is a business management technique that is used to develop specific targets and measures to implement a planned strategy, in consideration of the appropriate mutual relationships among four perspectives (i.e., financial, customer, business process, and learning and growth)?",
        options: ["a) Balanced scorecard",
            "b) Growth matrix",
            "c) Product portfolio management",
            "d) SWOT analysis"],
        answer: "a) Balanced scorecard"
    },
    {
        question: "Which of the following is the purpose of SCM?",
        options: ["a) To construct favorable customer relationships through unified management, including customer information, purchasing history, and complaints, and also through meticulous customer response",
            "b) To improve management efficiency through integrated management of all information concerning core business operations such as production, sales, inventory, and accounting",
            "c) To improve the efficiency of sales activity through unified management of customer information, business meeting schedules, and business meeting status including progress status",
            "d) To reduce costs and shorten delivery periods through integrated management of information across multiple companies or organizations from procurement to sales"],
        answer: "d) To reduce costs and shorten delivery periods through integrated management of information across multiple companies or organizations from procurement to sales"
    },
    {
        question: "Which of the following is an explanation of the IoT (Internet of Things)?",
        options: ["img/Q(70)_a.png",
            "img/Q(70)_b.png",
            "img/Q(70)_c.png",
            "img/Q(70)_d.png"],
        answer: "img/Q(70)_d.png"
    },
    {
        question: "Which of the following is an explanation of a smart grid?",
        options: ["img/Q(71)_a.png",
            "img/Q(71)_b.png",
            "img/Q(71)_c.png",
            "img/Q(71)_d.png"],
        answer: "img/Q(71)_a.png"
    },
    {
        question: "Which of the following is an explanation of CAD?",
        options: ["a) Evaluating product performance and functions using computers, without using the actual product to perform testing or experimentation",
            "b) Using a computer to convert product design drawings to process design information, and support automation of machine processing, etc.",
            "c) Using a computer to create product design drawings from attribute data concerning product shape, composition, etc.",
            "d) Using a computer to derive the required volumes and timing of materials from a production schedule, a BOM (bill of materials), inventory volumes, etc."],
        answer: "c) Using a computer to create product design drawings from attribute data concerning product shape, composition, etc."
    },
    {
        question: "Which of the following is an explanation of an e-marketplace?",
        options: ["a) It is a method in which many sellers and buyers meet in a market set up on the Internet and trade directly without an intermediate distributor.",
            "b) It is a method that aims for overall optimization from material procurement to product distribution by sharing information such as ordering, inventory, sales, and logistics between a company and its business partners.",
            "c) It is a method that converts information concerning business transactions into a standardized format and electronically exchanges data such as estimation, ordering, shipment and delivery, and payment between companies",
            "d) It is a method that runs a sales promotion campaign on the Internet and then draws customers to a real store to encourage them to make purchases."],
        answer: "a) It is a method in which many sellers and buyers meet in a market set up on the Internet and trade directly without an intermediate distributor."
    },
    {
        question: "Which of the following is a characteristic of an IC tag (RFID)?",
        options: ["a) It handles a large amount of information. Thus it uses an external storage device for storing information",
            "b) It is stain-resistant, and recorded information can be read from the outside of the package.",
            "c) It is used by inserting the tag into a dedicated magnetic reader.",
            "d) It uses GPS to display location information or attribute information about the current location."],
        answer: "b) It is stain-resistant, and recorded information can be read from the outside of the package."
    },
    {
        question: "Which of the following is an officer whose primary responsibility is the security of a company’s information and data?",
        options: ["a) CCO",
            "b) CIO",
            "c) CISO",
            "d) COO"],
        answer: "c) CISO"
    },
    {
        question: "Which of the following is a method of education and training in which trainees engage in simulated business activities, interact with other people to develop experiences, and try out different strategies?",
        options: ["a) Case study",
            "b) Debate",
            "c) In-basket",
            "d) Roll-playing"],
        answer: "d) Roll-playing"
    },
    {
        question: "Which of the following is a method of education and training in which trainees engage in simulated business activities, interact with other people to develop experiences, and try out different strategies?",
        image: "img/Q(77).png",
        options: ["a) S1",
            "b) S2",
            "c) S3",
            "d) S4"],
        answer: "a) S1"
    },
    {
        question: "",
        image: "img/Q(78).png",
        options: ["a) 7,080",
            "b) 7,600",
            "c) 7,800",
            "d) 8,000"],
        answer: "b) 7,600"
    },
    {
        question: "Which of the following is the type of financial statement that shows a company’s assets, liabilities, and shareholders’ equity at a particular point of time?",
        options: ["a) Balance sheet",
            "b) Statement of cash flows",
            "c) Statement of changes in equity",
            "d) Statement of profit or loss"],
        answer: "a) Balance sheet"
    },
    {
        question: "When a single-license software package is purchased by a company, which of the following is an activity that is usually permitted in conformity with the concept of the WTO’s Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS)?",
        options: ["a) Installing the software package on a large number of computers that are used for the company’s business",
            "b) Making a backup copy of software for limited purposes, such as the licensee’s personal use or a temporary copy for maintenance",
            "c) Modifying the software package for the company’s internal use and using it on a large number of computers within the company",
            "d) Placing the software package on the company’s internal website so that staff members can download and install it"],
        answer: "b) Making a backup copy of software for limited purposes, such as the licensee’s personal use or a temporary copy for maintenance"
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





