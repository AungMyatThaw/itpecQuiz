const quizData = [
    {
        question: "",
        image: "img/Q(1).png",
        options: ["img/Q(1)_a.png", "img/Q(1)_b.png", "img/Q(1)_c.png", "img/Q(1)_d.png"],
        answer: "img/Q(1)_a.png"
    },
    {
        question: "For non-negative integer A, which of the following has the same value as (A mod 32) + 64? Here, mod, +, AND, and OR are remainder-after-division, arithmetic addition, bitwise-AND, and bitwise-OR operators, respectively.",
        options: ["a) (A AND 31) OR 64",
            "b) (A AND 32) OR 32",
            "c) (A OR 31) AND 64",
            "d) (A OR 64) AND 32"],
        answer: "a) (A AND 31) OR 64"
    },
    {
        question: "Which of the following is an appropriate explanation of normal distribution?",
        options: ["a) A continuous, bathtub-shaped distribution that is used to express the failure rate",
            "b) A continuous, bell-shaped distribution that is symmetric about its mean",
            "c) A discrete distribution that expresses the probability of an event occurring a given number of times in a fixed interva",
            "d) A discrete distribution where all events have the same probability to occur"],
        answer: "b) A continuous, bell-shaped distribution that is symmetric about its mean"
    },
    {
        question: "",
        image: "img/Q(4).png",
        options: ["a) 3 4 5 × −",
            "b) 4 5 − 3 ×",
            "c) 5 3 4 − ×",
            "d) 5 4 3 − ×"],
        answer: "c) 5 3 4 − ×"
    },
    {
        question: "",
        image: "img/Q(5).png",
        options: ["a) +0010",
            "b) −1",
            "c) 12.2",
            "d) 9.△"],
        answer: "c) 12.2"
    },
    {
        question: "Which of the following is an appropriate explanation of feedback control?",
        options: ["a) It detects disturbance and takes a corrective action to prevent its influence.",
            "b) It is vulnerable to disturbance and the influence of the disturbance is amplified.",
            "c) It predicts disturbance and takes a corrective action accordingly.",
            "d) It takes a corrective action after detecting the influence of a disturbance."],
        answer: "a) It detects disturbance and takes a corrective action to prevent its influence."
    },
    {
        question: "For two-dimensional integer array A, whose (i, j)-th element A[i, j] is 2 × i + j, what is the value of element A[A[1, 1] × 2, A[2, 2] + 1]?",
        options: ["a) 12",
            "b) 13",
            "c) 18",
            "d) 19"],
        answer: "d) 19"
    },
    {
        question: "",
        image: "img/Q(8).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "a)"
    },
    {
        question: "Which of the following is an appropriate description of a binary search?",
        options: ["a) A binary search is always faster than a linear search.",
            "b) In a binary search, searching starts from the beginning of the data.",
            "c) The data upon which the binary search is to be performed must be sorted.",
            "d) The number of comparisons that need to be performed during the search is proportional to log2N, where N is the number of data items."],
        answer: "c) The data upon which the binary search is to be performed must be sorted"
    },
    {
        question: "",
        image: "img/Q(10).png",
        options: ["a) 7",
            "b) 8",
            "c) 9",
            "d) 10"],
        answer: "c) 9"
    },
    {
        question: "Which of the following is the average cycles per instruction (CPI) of a computer that can execute 1 billion instructions per second at a clock rate of 2.4 GHz?",
        options: ["a) 0.04",
            "b) 0.12",
            "c) 2.4",
            "d) 25"],
        answer: "c) 2.4"
    },
    {
        question: "",
        image: "img/Q(12).png",
        options: ["a) 11.67",
            "b) 12.87",
            "c) 15.83",
            "d) 25"],
        answer: "b) 12.87"
    },
    {
        question: "",
        image: "img/Q(13).png",
        options: ["a) A, B, C, D",
            "b) A, D, B, C",
            "c) C, D, A, B",
            "d) D, C, A, B"],
        answer: "b) A, D, B, C"
    },
    {
        question: "A 12-point character is to be displayed on a 96-dpi display in bitmap. How many dots is the height of a square font? Here, 1 point is 1/72 inch.",
        options: ["a) 8",
            "b) 9",
            "c) 12",
            "d) 16"],
        answer: "d) 16"
    },
    {
        question: "Which of the following is a characteristic of an HA (High Availability) cluster configuration based on a hot standby method when it is compared to a load distribution cluster configuration that uses a load balancer?",
        options: ["a) A server that has the same specifications is necessary as the secondary server, but since the secondary server takes over the processes in the event of the failure of the primary server, the throughput can be maintained even in the event of a failure.",
            "b) Given that processes are distributed to other operational servers in the event of a failure, the load on the servers in operation increases, and the throughput decreases.",
            "c) Given that processes can be distributed uniformly, server machines can be utilized effectively, and expandability is ensured, even if the amount of processing increases in the future.",
            "d) Given that processes must be consistent among multiple servers in operation, it is necessary to share a database."],
        answer: "a) A server that has the same specifications is necessary as the secondary server, but since the secondary server takes over the processes in the event of the failure of the primary server, the throughput can be maintained even in the event of a failure."
    },
    {
        question: "Which of the following is the system configuration that has the highest availability? Here, when systems are connected in parallel, the systems are considered to be operational if at least one (1) of them is operating.",
        options: ["a) A single system with an availability of 99%",
            "b) Four (4) identical systems, each with an availability of 70%, are connected in parallel",
            "c) Three (3) identical systems, each with an availability of 80%, are connected in parallel.",
            "d) Two (2) identical systems, each with an availability of 90%, are connected in parallel"],
        answer: "c) Three (3) identical systems, each with an availability of 80%, are connected in parallel."
    },
    {
        question: "",
        image: "img/Q(17).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "a)"
    },
    {
        question: "Which of the following is an appropriate reason for using a real-time OS in an embedded system?",
        options: ["a) A graphical user interface is provided from an ease-of-use perspective with a real-time OS.",
            "b) A real-time OS guarantees the highest levels of system security and reliability",
            "c) No data is lost even if an application program hangs up with a real-time OS.",
            "d) With a real-time OS, there is a mechanism available to respond within a limited time"],
        answer: "d) With a real-time OS, there is a mechanism available to respond within a limited time"
    },
    {
        question: "Which of the following is software that can be used without charge but has restrictions on modification and redistribution?",
        options: ["a) Freeware",
            "b) Package software",
            "c) Public domain software",
            "d) Shareware"],
        answer: "a) Freeware"
    },
    {
        question: "Which of the following is an appropriate explanation of the function of an actuator?",
        options: ["a) It changes an analog electrical signal into a digital electrical signal, which a computer can process.",
            "b) It changes an electrical control signal that a computer supplies into a mechanical motion.",
            "c) It identifies a physical quantity and changes it into an electrical signal.",
            "d) It is used in devices such as keyboards or touch panels to enter data into a computer."],
        answer: "b) It changes an electrical control signal that a computer supplies into a mechanical motion."
    },
    {
        question: "Which of the following is the Exclusive-NOR logic function that is implemented with two-input NOR gates?",
        options: ["img/Q(21)_a.png",
            "img/Q(21)_b.png",
            "img/Q(21)_c.png",
            "img/Q(21)_d.png"],
        answer: "img/Q(21)_d.png"
    },
    {
        question: "Which of the following is the Exclusive-NOR logic function that is implemented with two-input NOR gates?",
        image: "img/Q(22).png",    
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "d)"
    },
    {
        question: "",
        image: "img/Q(23).png",    
        options: ["a) Duplication check",
            "b) Format check",
            "c) Logical check",
            "d) Sequence check"],
        answer: "c) Logical check"
    },
    {
        question: "Which of the following is the appropriate explanation of attributes in the relational model?",
        options: ["a) It is possible to define attributes that have no name.",
            "b) The domains of definition for attributes within a relation must not overlap",
            "c) The same name can be given to two (2) or more attributes in a relation.",
            "d) There is no meaning in the order of attributes within a relation, and the relation is the same even if the order is changed."],
        answer: "d) There is no meaning in the order of attributes within a relation, and the relation is the same even if the order is changed."
    },
    {
        question: "When an ER diagram is translated into a set of tables in a relational database, which of the following is an appropriate method to translate a many-to-many relationship between two entities?",
        options: ["a) Combine two entities and create a single table.",
            "b) Create a table for each entity and import the primary key from a table of smaller size to a table of larger size.",
            "c) Create a table for each entity and import the primary key from one table to another table, and vice versa.",
            "d) Create a table for each entity and then create a new table and import the primary keys from both entities to the new table."],
        answer: "d) Create a table for each entity and then create a new table and import the primary keys from both entities to the new table."
    },
    {
        question: "",
        image: "img/Q(26).png",    
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "b)"
    },
    {
        question: "",
        image: "img/Q(27).png",    
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "c)"
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
        question: "When a storage location is calculated from a key value, which of the following is the method that can produce the same calculation results from different key values?",
        options: ["a) B+ tree index",
            "b) Bitmap index",
            "c) Hash index",
            "d) Inverted index"],
        answer: "c) Hash index"
    },
    {
        question: "",
        image: "img/Q(30).png",
        options: ["a) DHCP",
            "b) NAPT (IP masquerade)",
            "c) Packet filtering",
            "d) PPPoE"],
        answer: "b) NAPT (IP masquerade)"
    },
    {
        question: "Audio data of 2.4 Mbytes encoded at 192 kbit/s is to be downloaded and played back without interruptions over a network with a communication speed of 128 kbit/s. What is the minimum number of seconds required as the data buffering time before the start of playback?",
        options: ["a) 50",
            "b) 100",
            "c) 150",
            "d) 250"],
        answer: "a) 50"
    },
    {
        question: "There exists a system that connects a head office to a factory via a leased line and sends form data. The size of each form is 2,000 bytes, and header data totaling 400 bytes is attached to every two (2) forms to be sent through this system. On average, 100,000 forms per hour are generated. When the line speed is 1 Mbit/s, what is the line’s utilization rate in percentage?",
        options: ["a) 6.1",
            "b) 44",
            "c) 49",
            "d) 53"],
        answer: "c) 49"
    },
    {
        question: "In IPv4, what is the maximum number of IP addresses that can be assigned to hosts in the network of 172.16.64.0/23? Here, the decimal number after the slash (/) is the number of bits used for the network prefix",
        options: ["a) 254",
            "b) 256",
            "c) 510",
            "d) 512"],
        answer: "c) 510"
    },
    {
        question: "Which of the following is the broadcast address of the network with the address 192.168.128.0/26? Here, the decimal number after the slash (/) is the number of bits used for the network prefix.",
        options: ["a) 192.168.128.63",
            "b) 192.168.128.127",
            "c) 192.168.128.252",
            "d) 192.168.128.255"],
        answer: "a) 192.168.128.63"
    },
    {
        question: "Which of the following is an Internet standard that is used to convert IP addresses to the corresponding MAC addresses?",
        options: ["a) ARP",
            "b) ICMP",
            "c) RARP",
            "d) RIP"],
        answer: "a) ARP"
    },
    {
        question: "Which of the following is a direct result of SQL injection to a company’s web server?",
        options: ["a) Data packets to and from the web server are modified.",
            "b) Data that is on the web server but is not accessible via the web application is retrieved or modified.",
            "c) Every key stroke a user makes in the network is captured",
            "d) The IP headers of packets in the network are captured and modified."],
        answer: "b) Data that is on the web server but is not accessible via the web application is retrieved or modified."
    },
    {
        question: "Which of the following is a program that is designed to block access to a computer or encrypt most of the data on that computer until a sum of money is paid?",
        options: ["a) Adware",
            "b) Ransomware",
            "c) Rootkit",
            "d) Spyware"],
        answer: "b) Ransomware"
    },
    {
        question: "In a PKI system, which of the following is an algorithm that creates a key pair?",
        options: ["a) Hashing algorithm",
            "b) Key generation algorithm",
            "c) Signature verification algorithm",
            "d) Signing algorithm"],
        answer: "b) Key generation algorithm"
    },
    {
        question: "Which of the following is an appropriate description of a command and control (C&C) server?",
        options: ["a) A computer controlled and used by an attacker to send commands to other compromised computers",
            "b) A computer on a cloud service used to securely control the movement of data between on-premise storage and cloud storage using encrypted communication",
            "c) A computer used to control the authentication of all users and computers in an organization",
            "d) A computer used to control the distribution of processing among different computers in a high-performance computing environment, so that processing is not affected by cyber attacks"],
        answer: "a) A computer controlled and used by an attacker to send commands to other compromised computers"
    },
    {
        question: "Which of the following is an appropriate description of an advanced persistent threat (APT)?",
        options: ["a) It is a malware attack that keeps recreating malicious files even after repeated deletions.",
            "b) It is an attack that uses sophisticated techniques and goes undetected over a long time, e.g., months or years",
            "c) It is an attack using malware in computer BIOS, affecting multiple operating systems on a computer that allows multi-booting",
            "d) It is an attack using malware that disables all of a company’s computers and is difficult to delete."],
        answer: "b) It is an attack that uses sophisticated techniques and goes undetected over a long time, e.g., months or years"
    },
    {
        question: "Which of the following is an appropriate description of footprinting in computer security?",
        options: ["a) Digital forensic analysis to find the hacker after a hacking incident",
            "b) Gathering information about an organization and its systems in preparation for an attack",
            "c) Listing all affected files in the system in order to assess the impact of an attack",
            "d) Setting up an intrusion detection system in order to detect when an attacker breaks into the internal network"],
        answer: "b) Gathering information about an organization and its systems in preparation for an attack"
    },
    {
        question: "",
        image: "img/Q(42).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "b)"
    },
    {
        question: "When a mirror port is prepared to allow a LAN analyzer to be used for measurement in order to investigate the cause of a network failure, which of the following is a point to consider?",
        options: ["a) In preparation for a failure, it is necessary to inform network users of the storage location and usage method about the LAN analyzer.",
            "b) Since LAN cables must be temporarily disconnected during measurement, it is necessary to give network users advance notice of the measurement date and time.",
            "c) Since the LAN analyzer can display the packets that pass through the network, it is necessary to pay attention to misuse or abuse, such as wiretapping.",
            "d) Since the LAN analyzer disposes of packets, it is necessary to restrict the use of the non-target computers during measurement."],
        answer: "c) Since the LAN analyzer can display the packets that pass through the network, it is necessary to pay attention to misuse or abuse, such as wiretapping."
    },
    {
        question: "",
        image: "img/Q(44).png",
        options: ["a) The web server and the database server are installed in the DMZ",
            "b) The web server and the database server are installed in the internal segment.",
            "c) The web server is installed in the DMZ and the database server is installed in the internal segment.",
            "d) The web server is installed in the external segment and the database server is installed in the DMZ."],
        answer: "c) The web server is installed in the DMZ and the database server is installed in the internal segment."
    },
    {
        question: "Which of the following is a system or network that is intentionally made vulnerable in order to investigate the behavior of an intruder or malware?",
        options: ["a) Botnet",
            "b) DMZ",
            "c) Honey pot",
            "d) SIEM"],
        answer: "c) Honey pot"
    },
    {
        question: "Among UML 2.x (including 2.0 and later versions) diagrams, which of the following is the most appropriate diagram that gives a graphic overview of the actors involved in a system, the different functions those actors need to perform, and how these different functions interact?",
        options: ["a) Activity diagram",
            "b) Communication diagram",
            "c) Interaction overview diagram",
            "d) Use case diagram"],
        answer: "d) Use case diagram"
    },
    {
        question: "Which of the following is an appropriate explanation of encapsulation in object orientation?",
        options: ["a) Abstraction and grouping of several objects that have common properties",
            "b) Bundling of data and the procedures operating on the data as a single object and concealment of their implementation inside the object",
            "c) Creation of a base class by extracting the properties that are common among classes",
            "d) Inheritance of the properties of a base class by a subclass"],
        answer: "b) Bundling of data and the procedures operating on the data as a single object and concealment of their implementation inside the object"
    },
    {
        question: "Which of the following is a technique that embeds logical expressions that hold true for the relations or conditions between variables at specific points in the execution of a program and verifies the validity of the program?",
        options: ["a) Assertion check",
            "b) Code trace",
            "c) Snapshot dump",
            "d) Test coverage analysis"],
        answer: "a) Assertion check"
    },
    {
        question: "Which of the following is an appropriate test type that is conducted to ensure that the interfaces and linkages between different software parts work properly?",
        options: ["a) Acceptance test",
            "b) Functional test",
            "c) Integration test",
            "d) Performance test"],
        answer: "c) Integration test"
    },
    {
        question: "Which of the following is a software development model that repeats the development processes from requirements analysis to implementation?",
        options: ["a) Prototyping model",
            "b) Relational model",
            "c) Spiral model",
            "d) Waterfall model"],
        answer: "c) Spiral model"
    },
    {
        question: "The software reengineering process can be divided into four sub-processes: program modularization, program structure improvement, reverse engineering, and source code translation. Which of the following is a process that focuses on functional analysis and information extraction?",
        options: ["a) Program modularization",
            "b) Program structure improvement",
            "c) Reverse engineering",
            "d) Source code translation"],
        answer: "c) Reverse engineering"
    },
    {
        question: "Which of the following is an appropriate tool that implements a deliverable-oriented decomposition of a project into smaller components?",
        options: ["a) Critical path method (CPM)",
            "b) Gantt chart (Gantt)",
            "c) Program evaluation and review technique (PERT)",
            "d) Work breakdown structure (WBS)"],
        answer: "d) Work breakdown structure (WBS)"
    },
    {
        question: "Which of the following is an appropriate description of scope management?",
        options: ["a) The process of determining and documenting a list of all project goals, tasks, deliverables, deadlines, and budgets as a part of the planning process",
            "b) The process of identifying, analyzing, and responding to any risk that arises over the life cycle of a project to help the project remain on track and achieve its goal",
            "c) The process of planning, estimating, budgeting, and controlling project costs",
            "d) The process of wisely managing the amount of time allocated to a project in order to meet the scheduled delivery date and conclude all work by or before the project completion date"],
        answer: "a) The process of determining and documenting a list of all project goals, tasks, deliverables, deadlines, and budgets as a part of the planning process"
    },
    {
        question: "",
        image: "img/Q(54).png",
        options: ["a) 4",
            "b) 5",
            "c) 6",
            "d) 7"],
        answer: "c) 6"
    },
    {
        question: "",
        image: "img/Q(55).png",
        options: ["a) 20",
            "b) 24",
            "c) 25",
            "d) 26"],
        answer: "d) 26"
    },
    {
        question: "",
        image: "img/Q(56).png",
        options: ["a) 1.2",
            "b) 3.0",
            "c) 4.8",
            "d) 7.2"],
        answer: "c) 4.8"
    },
    {
        question: "In the capacity management process of IT service management, which of the following is an appropriate precaution to observe when the utilization of an online system’s capacity is monitored?",
        options: ["a) Focus only on the maximum value of performance data in each time interval and check deviation from the management limit.",
            "b) Measure the performance during offline hours to avoid a decline in service level during online hours.",
            "c) Monitor multiple measurement items such as response time and CPU utilization on a regular basis.",
            "d) Record incidents concerning capacity and performance."],
        answer: "c) Monitor multiple measurement items such as response time and CPU utilization on a regular basis."
    },
    {
        question: "In IT service management, which of the following is the most appropriate functional organization that provides a single point of contact and tries to rapidly restore normal service operations to users?",
        options: ["a) Service desk",
            "b) Service management",
            "c) Service provider",
            "d) Supplier"],
        answer: "a) Service desk"
    },
    {
        question: "Which of the following is an appropriate description of a checkpoint during the audit of a control for reducing the risk of system trouble regarding the application of a software patch?",
        options: ["a) A database administrator is appointed and master data management procedures are specified",
            "b) Capacity planning procedures are set out",
            "c) Hardware maintenance records are created and managed by system administrators",
            "d) The system’s operation status is properly checked before commencing full-timeoperations."],
        answer: "d) The system’s operation status is properly checked before commencing full-timeoperations."
    },
    {
        question: "Which of the following is subject to system audits that evaluate and verify internal controls related to IT?",
        options: ["a) Methods for ensuring accuracy when the sales department inputs into and updates the database",
            "b) The process by which the business planning department leads the creation of a mid-term business plan",
            "c) The results of employee personnel evaluations led by the personnel department",
            "d) The status of production equipment review conducted by the manufacturing department for the purpose of reducing defects"],
        answer: "a) Methods for ensuring accuracy when the sales department inputs into and updates the database"
    },
    {
        question: "Which of the following is an explanation of enterprise architecture (EA)?",
        options: ["a) It is a technique to abstract and express business processes with the four (4) basic elements of data flow, process, file, and data sources and absorption.",
            "b) It is a technique to analyze each business operation and information system through the four (4) systems of business, data, application, and technology, and reexamine it from the viewpoint of total optimization.",
            "c) It is a technique to analyze or design a system by using schematic diagrams such as a class diagram, and it is developed by integrating and standardizing various methods that support an object-oriented design.",
            "d) It is a technique to clarify the data structure and the relationship between data items by expressing the conceptual data model with entities and relationships."],
        answer: "b) It is a technique to analyze each business operation and information system through the four (4) systems of business, data, application, and technology, and reexamine it from the viewpoint of total optimization."
    },
    {
        question: "When a workflow system is used for business improvement, which of the following is an appropriate effect that can be expected?",
        options: ["a) Improved processing speed for office procedures, from document submission to approval",
            "b) The provision of a standard protocol used for data exchange between a company and its customers",
            "c) The provision of services such as a discount according to the amount of the customer’s purchase",
            "d) Warehouse automation of shipping and receipt of stocked products"],
        answer: "a) Improved processing speed for office procedures, from document submission to approval"
    },
    {
        question: "In computerization investment planning, which of the following is an explanation of ROI as an evaluation index for investment value?",
        options: ["a) ROI is a measure that indicates market competitiveness in the event that a project is not implemented",
            "b) ROI is a measure that is calculated by dividing the profit generated through factors such as sales increase and cost reduction by the investment amount.",
            "c) ROI is a measure that is calculated by subtracting the current value of cash outflow from the current value of cash inflow",
            "d) ROI is a measure that is obtained by comparing some parameters, such as the sales to investment ratio and the amount of investment per employee, with that of other companies."],
        answer: "b) ROI is a measure that is calculated by dividing the profit generated through factors such as sales increase and cost reduction by the investment amount."
    },
    {
        question: "Which of the following is a description that corresponds to CSR procurement?",
        options: ["a) Choosing the product with the lowest price to minimize costs",
            "b) Having multiple suppliers to avoid situations in which procurement is impossible, such as after a disaster",
            "c) Indicating procurement standards that consider the environment, human rights, etc., and requesting that suppliers comply with these",
            "d) Using EDI to purchase goods in order to perform prompt and accurate procurement"],
        answer: "c) Indicating procurement standards that consider the environment, human rights, etc., and requesting that suppliers comply with these"
    },
    {
        question: "Which of the following is an explanation of the core competence?",
        options: ["a) Corporate activities that comply with laws, various regulations, and social norms for managing business",
            "b) The business domain decided from the viewpoint of the market, technology, and products (or services)",
            "c) The overall business and system optimization methods for achieving the purpose of organizational activities",
            "d) The predominant abilities in the company’s business area, which competitors cannot imitate"],
        answer: "d) The predominant abilities in the company’s business area, which competitors cannot imitate"
    },
    {
        question: "Companies are classified on the basis of their competitive position in the market. There are typically four types: leader, challenger, follower, and nicher. Which of the following is the most appropriate characteristic of a leader’s strategy?",
        options: ["a) Applying a differentiation strategy to all aspects of products, services, advertising, price and distribution channels or indirectly attacking the competitor’s weaknesses or the gaps in the competitor’s market coverage",
            "b) Capturing a specific market that high-ranking companies do not target and concentrating management resources in order to secure and maintain predominance in the market",
            "c) Determining the challenger company’s real ability in the market and prioritize securing stable profits over expanding the market share by doing as the leader company does",
            "d) Proposing a new product and its usage method to consumers in order to increase the total demand while maintaining or expanding the market share"],
        answer: "d) Proposing a new product and its usage method to consumers in order to increase the total demand while maintaining or expanding the market share"
    },
    {
        question: "Which of the following is an explanation of the introduction stage of the product life cycle?",
        options: ["a) It is the stage at which companies sell products to early adopters. Companies adopt strategies to enhance product recognition.",
            "b) It is the stage at which growth in demand slows. Companies try to maintain their market share and secure profits through various means, such as improving product quality",
            "c) It is the stage at which sales and profit gradually decline. Companies refrain from making additional investments and consider withdrawing from the market.",
            "d) It is the stage at which sales increase rapidly. The market becomes active and competition intensifies because of new market participants."],
        answer: "a) It is the stage at which companies sell products to early adopters. Companies adopt strategies to enhance product recognition."
    },
    {
        question: "Which of the following is the purpose of CRM?",
        options: ["a) Acquisition of customer loyalty and maximization of customer lifetime value",
            "b) Ascertainment of the sales information for each product at the time of sales",
            "c) Determination of the order quantity and order timing of material requirred for manufacturing",
            "d) Reduction in loss of sales opportunities due to inventory shortage"],
        answer: "a) Acquisition of customer loyalty and maximization of customer lifetime value"
    },
    {
        question: "Which of the following is the appropriate description of process innovation?",
        options: ["a) Development of an innovative new product on the basis of an original and high technology",
            "b) Development of innovative manufacturing procedures that improve the quality of a product",
            "c) Outsourcing manufacturing to another company that has a semiconductor manufacturing process",
            "b) Wide adoption after passing the competition, resulting in the establishment of a de facto standard"],
        answer: "b) Development of innovative manufacturing procedures that improve the quality of a product"
    },
    {
        question: "",
        image: "img/Q(70).png",
        options: ["a) Abnormal value judgment tool",
            "b) Display for work instructions",
            "c) Temperature seunsor for equipment",
            "d) Wireless communication within the factory"],
        answer: "c) Temperature sensor for equipment"
    },
    {
        question: "",
        image: "img/Q(71).png",
        options: ["a) Bill of materials (configuration and requirements of each component in the final product)",
            "b) Inventory status (inventory amount, residual orders, in-process quantity)",
            "c) Ordering policy (lot organization method, ordering method, safety stock)",
            "d) Standard schedule (completion period, number of days of lead time)"],
        answer: "b) Inventory status (inventory amount, residual orders, in-process quantity)"
    },
    {
        question: "Which of the following is an appropriate description of an RFID system?",
        options: ["a) Multiple RF Tags that are within range communicate with each other, and create a mesh network.",
            "b) RF readers/writers generate an electromagnetic field that charges the RF tags within range to allow transmission of information.",
            "c) RF tags process unique positioning information by using multiple satellites, allowing for item tracking by longitude and latitude coordinates.",
            "d) RF tag transmission does not provide error correcting codes but still acquires high reliability through a wired connection."],
        answer: "b) RF readers/writers generate an electromagnetic field that charges the RF tags within range to allow transmission of information."
    },
    {
        question: "Among the IoT application examples, which of the following is an explanation of HEMS?",
        options: ["img/Q(73)_a.png",
            "img/Q(73)_b.png",
            "img/Q(73)_c.png",
            "img/Q(73)_d.png"],
        answer: "img/Q(73)_a.png"
    },
    {
        question: "Which of the following is a case using deep learning in order to improve the performance of an in-car device?",
        options: ["a) An accelerometer detects the collision of the vehicle against a wall and causes the air bag to inflate, thus protecting the passenger from injury.",
            "b) By acquiring and processing numerous images, the driver assistance system can more reliably distinguish between a pedestrian and a vehicle.",
            "c) By installing equipment that automatically performs idling stops, the fuel efficiency improves as compared with a very experienced driver operating a vehicle.",
            "d) The navigation system updates the software via a mobile phone line and refreshes the map."],
        answer: "b) By acquiring and processing numerous images, the driver assistance system can more reliably distinguish between a pedestrian and a vehicle."
    },
    {
        question: "Which of the following is an explanation of accountability at the executive managerial level?",
        options: ["a) A company has a responsibility to explain the content and performance of business activities to shareholders and other interested parties.",
            "b) A company quantifies the cost of environmental maintenance and its effects and announces them periodically as financial information.",
            "c) Investors and analysts must be provided with accurate information that is necessary for investment decisions in a timely manner and on an ongoing basis",
            "d) Rules, manuals, and verification systems are established on the basis of corporate ethics, and corporate management is performed in accordance with the relevant laws."],
        answer: "a) A company has a responsibility to explain the content and performance of business activities to shareholders and other interested parties."
    },
    {
        question: "Which of the following can secure employment and create employment opportunities across an entire society by shortening work hours per employee?",
        options: ["a) Cafeteria plan",
            "b) Free agent system",
            "c) Work sharing",
            "d) Work-life balance"],
        answer: "c) Work sharing"
    },
    {
        question: "",
        image: "img/Q(77).png",
        options: ["a) A",
            "b) B",
            "c) C",
            "d) D"],
        answer: "b) B"
    },
    {
        question: "",
        image: "img/Q(78).png",
        options: ["img/Q(78)_a.png",
            "img/Q(78)_b.png",
            "img/Q(78)_c.png",
            "img/Q(78)_d.png"],
        answer: "img/Q(78)_d.png"
    },
    {
        question: "In financial statements, which of the following shows the company’s assets, liabilities, and net assets at a certain point in time and indicates the company’s financial situation?",
        options: ["a) Balance sheet",
            "b) Statement of cash flows",
            "c) Statement of changes in equity",
            "d) Statement of profit or loss"],
        answer: "a) Balance sheet"
    },
    {
        question: "Which of the following is an action that is taken in order to improve the cash flow?",
        options: ["a) Pay the notes payable on a shorter timeline.",
            "b) Receive payment on the notes receivable on a longer timeline.",
            "c) Shorten the time period for collecting accounts receivable.",
            "d) Shorten the time period for making payments on accounts payable"],
        answer: "c) Shorten the time period for collecting accounts receivable."
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



