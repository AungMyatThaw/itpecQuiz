const quizData = [
    {
        question: "For an 8-bit binary integer, which of the following sets the least significant bit to 1 while leaving the other bits unchanged?",
        options: ["a) Perform bitwise AND operation with 00000001.",
            "b) Perform bitwise NAND operation with 11111110.",
            "c) Perform bitwise OR operation with 00000001.",
            "d) Perform bitwise XOR operation with 00000001."],
        answer: "c) Perform bitwise OR operation with 00000001."
    },
    {
        question: "Which of the following is an appropriate explanation of the loss of significance?",
        options: ["a) It occurs when the result of an operation exceeds the maximum handle limit and raises an exception.",
            "b) Perform bitwise NAND operation with 11111110.b) It occurs when two nearly equal floating-point numbers are subtracted to produce a result of unacceptably reduced significant digits",
            "c) It refers to a rounding error that occurs when the part smaller than the least significant digit of the result is rounded off, up, or down in floating-point operations.",
            "d) It refers to the case when two floating-point numbers are added, but the less significant digits of either one do not affect the result."],
        answer: "b) It occurs when two nearly equal floating-point numbers are subtracted to produce a result of unacceptably reduced significant digits"
    },
    {
        question: "When two dice are rolled, what is the probability that the sum of the dice is 5? Here, the two dice are fair and independent.",
        options: ["a) 1/18",
            "b) 1/12",
            "c) 1/9",
            "d) 1/6"],
        answer: "c) 1/9"
    },
    {
        question: "",
        image: "img/Q(4).png",
        options: ["a) 0",
            "b) 4",
            "c) 10",
            "d) 18"],
        answer: "d) 18"
    },
    {
        question: "What is the Hamming distance of bit strings 10101 and 11110?",
        options: ["a) 0",
            "b) 2",
            "c) 3",
            "d) 5"],
        answer: "c) 3"
    },
    {
        question: "There are three (3) blue balls and four (4) green balls in a box. When two balls are randomly taken out from the box, what is the probability that both are blue?",
        options: ["a) 2/49",
            "b) 1/15",
            "c) 1/7",
            "d) 9/49"],
        answer: "c) 1/7"
    },
    {
        question: "Five (5) characters, A, C, K, S, and T, are input in this order. When using stacks, what is the minimum number of stacks required to rearrange the characters and output S, T, A, C, and K, in this order? Here, when a pop operation is performed for any stack, the popped character always becomes an output. Also, characters cannot be moved between stacks.",
        options: ["a) 1",
            "b) 2",
            "c) 3",
            "d) 4"],
        answer: "c) 3"
    },
    {
        question: "When a two-dimensional array A(5,5) is mapped to computer memory (i.e. a on-dimensional array) in row-major (row-directional) order or column-major (column-directional) order, how many elements occupy the same memory addresses in both cases? Here, the first element A(1,1) is mapped to the same starting memory address in either case",
        options: ["a) 2",
            "b) 3",
            "c) 4",
            "d) 5"],
        answer: "d) 5"
    },
    {
        question: "Which of the following characterizes the hash method in table search?",
        options: ["a) It determines the storage location using a function of a key",
            "b) It is a method that avoids collisions among storage locations.",
            "c) It is one of the methods that use a binary tree.",
            "d) It takes time almost proportional to the table size for searching"],
        answer: "c) It is one of the methods that use a binary tree."
    },
    {
        question: "Which of the following is a technology used to provide dynamic UI contents without reloading the entire web page by using an asynchronous communication feature of JavaScript?",
        options: ["a) Ajax",
            "b) CSS",
            "c) RSS",
            "d) SNS"],
        answer: "a) Ajax"
    },
    {
        question: "There is a 32-bit microprocessor with 32-bit external data bus, driven by 64 MHz input clock, and the processor takes 8 input clock cycles to complete 1 bus cycle. What is the theoretical maximum data transfer rate in megabytes per second (MB/s) for the external data bus of the processor?",
        options: ["a) 3",
            "b) 32",
            "c) 256",
            "d) 320"],
        answer: "b) 32"
    },
    {
        question: "There is a computer that has an average instruction execution time of 20 nanoseconds. What is the performance of this computer in MIPS?",
        options: ["a) 5",
            "b) 10",
            "c) 20",
            "d) 50"],
        answer: "d) 50"
    },
    {
        question: "There is a disk drive that has a capacity of 8 GB. The drive has five (5) platters with two (2) surfaces: 10,000 tracks per surface and 200 sectors per track. How many bytes are in each sector? Here, 1 GB is 1,000,000,000 bytes.",
        options: ["a) 100",
            "b) 200",
            "c) 400",
            "d) 800"],
        answer: "c) 400"
    },
    {
        question: "Which of the following is a memory device that stores programs or data in factories and only has the read operation for the stored programs or data?",
        options: ["a) DRAM",
            "b) Flash memory",
            "c) Mask ROM",
            "d) SRAM"],
        answer: "c) Mask ROM"
    },
    {
        question: "",
        image: "img/Q(15).png",
        options: ["a) 160",
            "b) 225",
            "c) 250",
            "d) 385"],
        answer: "a) 160"
    },
    {
        question: "",
        image: "img/Q(16).png",
        options: ["a) 0.65",
            "b) 0.81",
            "c) 0.94",
            "d) 0.99"],
        answer: "c) 0.94"
    },
    {
        question: "",
        image: "img/Q(17).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "d)"
    },
    {
        question: "",
        image: "img/Q(18).png",
        options: ["a) 2",
            "b) 3",
            "c) 4",
            "d) 5"],
        answer: "b) 3"
    },
    {
        question: "Which of the following is the standard API (Application Programming Interface) used by a Java application to access a database?",
        options: ["a) HTML",
            "b) Java VM",
            "c) JDBC",
            "d) SQL"],
        answer: "c) JDBC"
    },
    {
        question: "",
        image: "img/Q(20).png",
        options: ["img/Q(20)_a.png",
            "img/Q(20)_b.png",
            "img/Q(20)_c.png",
            "img/Q(20)_d.png"],
        answer: "img/Q(20)_c.png"
    },
    {
        question: "By using a sensor that detects changes in shape, the condition of infrastructure such as elevated highways can be monitored and maintained. Which of the following is a sensor that is used for this purpose?",
        options: ["a) Gyro",
            "b) Hall element",
            "c) Strain gage",
            "d) Thermistor"],
        answer: "c) Strain gage"
    },
    {
        question: "Which of the following uses a flip-flop circuit in a memory cell?",
        options: ["a) DRAM",
            "b) EEPROM",
            "c) SDRAM",
            "d) SRAM"],
        answer: "d) SRAM"
    },
    {
        question: "",
        image: "img/Q(23).png",
        options: ["a) 73940",
            "b) 73941",
            "c) 73944",
            "d) 73947"],
        answer: "a) 73940"
    },
    {
        question: "Which of the following is the most appropriate explanation of augmented reality (AR)?",
        options: ["a) By appealing to the five senses through equipment, such as a head-mounted display, a person can experience locations or worlds that do not exist as if they were real.",
            "b) By constructing a 3D virtual space that is natural to humans and changing the virtual space in accordance with a person’s movement, he or she can feel as if he or she were in that place.",
            "c) By seamlessly interweaving computer-generated information with the physical world, the viewer can perceive it as an immersive aspect of the real environment.",
            "d) By viewing a video recorded in the past, the viewer can feel as if he or she were in that era and at that location."],
        answer: "c) By seamlessly interweaving computer-generated information with the physical world, the viewer can perceive it as an immersive aspect of the real environment."
    },
    {
        question: "Which of the following is an appropriate description of the mapping between a relational model and relational database as its implementation?",
        options: ["a) A domain is mapped to a character type or a character string type",
            "b) A relation is mapped to a table.",
            "c) Attributes and columns are ordered from left to right.",
            "d) Neither tuples nor rows have duplicates"],
        answer: "b) A relation is mapped to a table."
    },
    {
        question: "In a relational database, which of the following is an appropriate purpose for defining a foreign key?",
        options: ["a) To prevent fragmentation in the record storage area due to the repeated deletion and insertion of records",
            "b) To provide a constraint to maintain referential consistency between the records of related tables",
            "c) To restore as many records as possible when they are damaged by failure, based on the mutual relationship between tables",
            "d) To speed up the searching and updating of related tables by storing them closer together"],
        answer: "b) To provide a constraint to maintain referential consistency between the records of related tables"
    },
    {
        question: "",
        image: "img/Q(27).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "b)"
    },
    {
        question: "Which of the following is the purpose of setting an index in the columns of the table of a relational database?",
        options: ["a) To enable efficient access to the storage location of data so that the search speed can be improved",
            "b) To ensure that no value is duplicated in a column",
            "c) To match the value of the column of the foreign key with the value of the primary key of another table",
            "d) To save disk space when a single large table is distributed and saved on several disks"],
        answer: "a) To enable efficient access to the storage location of data so that the search speed can be improved"
    },
    {
        question: "",
        image: "img/Q(29).png",
        options: ["a) Customer-wise received orders by product",
            "b) Customer-wise received orders by the person in charge",
            "c) Person-in-charge-wise received orders by product",
            "d) Product-wise received orders by customer"],
        answer: "b) Customer-wise received orders by the person in charge"
    },
    {
        question: "",
        image: "img/Q(30).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "b)"
    },
    {
        question: "Which of the following is a TCP/IP protocol that is used to find the corresponding MAC address from an IP address?",
        options: ["a) ARP",
            "b) ICMP",
            "c) IP",
            "d) RARP"],
        answer: "a) ARP"
    },
    {
        question: "Which of the following is the subnet mask corresponding to an IP address in slash notation, 192.168.22.31/27?",
        options: ["a) 255.255.255.192",
            "b) 255.255.255.224P",
            "c) 255.255.255.248",
            "d) 255.255.255.252"],
        answer: "b) 255.255.255.224"
    },
    {
        question: "Which of the following protocol supports the congestion control feature?",
        options: ["a) ARP",
            "b) ICMP",
            "c) TCP",
            "d) UDP"],
        answer: "c) TCP"
    },
    {
        question: "Which of the following is a global IPv4 address?",
        options: ["a) 10.10.10.10",
            "b) 129.10.9.7",
            "c) 172.16.1.5",
            "d) 192.168.20.3"],
        answer: "b) 129.10.9.7"
    },
    {
        question: "The three properties of information security are confidentiality, integrity, and availability. Which of the following is an attack on integrity?",
        options: ["a) DDoS",
            "b) Phishing",
            "c) Shoulder surfing",
            "d) Website defacement"],
        answer: "d) Website defacement"
    },
    {
        question: "When a system with a database is being developed, a security requirement states that the data must be encrypted with a key before being saved to the database, and the same key is required for decryption when the data is being read. Which of the following is an appropriate algorithm that can be used to satisfy the security requirement?",
        options: ["a) AES",
            "b) Diffie-Hellman",
            "c) RSA",
            "d) SHA-256"],
        answer: "a) AES"
    },
    {
        question: "Which of the following is a cyber-attack that redirects a victim to a fake website by manipulating DNS to obtain personal information from the victim?",
        options: ["a) Pharming",
            "b) Phishing",
            "c) Spamming",
            "d) Trojan horse"],
        answer: "a) Pharming"
    },
    {
        question: "When security risk management processes incorporate the approach of the PDCA (Plan, Do, Check, Act) cycle, which of the following is a process that belongs to Act?",
        options: ["a) Establish a security policy and develop a security risk management plan",
            "b) Implement the security risk management plan.",
            "c) Maintain and improve the security risk management plan by learning from incidents.",
            "d) Monitor the security risks as planned in the risk management plan."],
        answer: "c) Maintain and improve the security risk management plan by learning from incidents."
    },
    {
        question: "Which of the following is the protocol that is used together with HTTP in HTTPS?",
        options: ["a) SHA",
            "b) SSH",
            "c) TLS",
            "d) VPN"],
        answer: "c) TLS"
    },
    {
        question: "Which of the following is an appropriate term associated with the fraudulent action of impersonating an authorized person?",
        options: ["a) Destruction",
            "b) Falsification",
            "c) Spoofing",
            "d) Tapping"],
        answer: "c) Spoofing"
    },
    {
        question: "An attacker calls a corporate help desk, masquerading as an employee who has forgotten his password. The help desk staff resets the password to the company default “password1. ” The attacker then uses this password to access the company network and information on the server. What is this type of attack called?",
        options: ["a) Buffer overflow attack",
            "b) Denial-of-Service attack",
            "c) Shoulder surfing",
            "d) Social engineering"],
        answer: "d) Social engineering"
    },
    {
        question: "When a biometric authentication system is introduced, which of the following is the most appropriate point to be taken into account?",
        options: ["a) Adjusting the device by considering both the probability of incorrectly rejecting an authorized user and that of incorrectly accepting an unauthorized user",
            "b) Preventing the decrease in the probability of incorrectly rejecting an authorized user by using a product that frequently updates the malware definition file",
            "c) Requesting an entrusted third party to issue a digital certificate for the person to be authenticated",
            "d) Setting the appropriate amount of knowledge for authentication to balance the amounts of knowledge that cannot be easily guessed and that can be memorized by a person to be authenticated"],
        answer: "a) Adjusting the device by considering both the probability of incorrectly rejecting an authorized user and that of incorrectly accepting an unauthorized user"
    },
    {
        question: "Which of the following is the purpose of using a message authentication code?",
        options: ["a) To check the encryption method of a message",
            "b) To check the overview of a message",
            "c) To confirm that there is no falsification of a message",
            "d) To secure the confidentiality of a message"],
        answer: "c) To confirm that there is no falsification of a message"
    },
    {
        question: "Which of the following is an explanation of WAF?",
        options: ["a) It centrally stores and manages operation logs from various systems to quickly detect and analyze an event that can be a security threat.",
            "b) To check the overview of a messageb) It is a standard of encryption methods for wireless LAN, certified by the Wi-Fi Alliance, and supports AES encryption.",
            "c) It is equipped with firewall functions and has antivirus, intrusion detection, and other functions that work together to manage multiple security functions in an integrated manner.",
            "d) It monitors the accesses to a website, and when it detects a pattern that is likely from an attacker, it blocks those accesses."],
        answer: "d) It monitors the accesses to a website, and when it detects a pattern that is likely from an attacker, it blocks those accesses."
    },
    {
        question: "Which of the following is an appropriate description of a UML use case diagram?",
        options: ["a) It shows the behavior during the object’s life cycle using finite state transitions.",
            "b) It shows the exchange of messages among objects and objects’ lifelines in a time series.",
            "c) It shows the flow from one activity to another activity in a system or business process.",
            "d) It shows the scenarios for how actors, i.e., external users or machines, interact with a system."],
        answer: "d) It shows the scenarios for how actors, i.e., external users or machines, interact with a system."
    },
    {
        question: "In UML 2.0, which of the following is a diagram that represents the interactions between objects in time series?",
        options: ["a) Activity diagram",
            "b) Component diagram",
            "c) Sequence diagram",
            "d) State transition diagram"],
        answer: "c) Sequence diagram"
    },
    {
        question: "Which of the following is a structural design pattern that allows classes with incompatible interfaces to work together?",
        options: ["a) Adapter",
            "b) Factory",
            "c) Iterator",
            "d) Singleton"],
        answer: "a) Adapter"
    },
    {
        question: "Which of the following is the most appropriate description of a stack trace that is used for debugging a program?",
        options: ["a) A trace of call stack methods/functions/subroutines",
            "b) Stacking/gathering the traces left by other programs",
            "c) The traces left in memory from a stack data structure",
            "d) Tracing stack data structure that is used in the program"],
        answer: "a) A trace of call stack methods/functions/subroutines"
    },
    {
        question: "Among the software development activities, which of the following corresponds to refactoring that is emphasized in agile development?",
        options: ["a) To improve the maintainability of a program, the internal structure of a program is changed without any change in the external specifications.",
            "b) To improve the quality of a program, two (2) programmers cooperate and perform the coding of one (1) program",
            "c) To obtain feedback from the users, a prototype of the software is created at an early stage.",
            "d) To promptly develop a program, test cases are set in advance, and then the program is coded"],
        answer: "a) To improve the maintainability of a program, the internal structure of a program is changed without any change in the external specifications."
    },
    {
        question: "In eXtreme Programming (XP), which of the following is advocated as a practice?",
        options: ["a) Inspection",
            "b) Pair programming",
            "c) To obtain feedback from the users, a prototype of the software is created at an early stage.",
            "d) To promptly develop a program, test cases are set in advance, and then the program is coded"],
        answer: "b) Pair programming"
    },
    {
        question: "A project consisting of several activities has a single critical path. Which of the following is an appropriate description of critical path activities for the project?",
        options: ["a) Critical path activities can be performed in parallel",
            "b) Critical path activities have a non-zero total float time.",
            "c) For each critical path activity, the early start date equals the late start date",
            "d) The activity with the longest duration in the project is one of the critical path activities."],
        answer: "c) For each critical path activity, the early start date equals the late start date"
    },
    {
        question: "Which of the following is an appropriate description of the Responsibility Assignment Matrix that is used for project human resource management?",
        options: ["a) Allocating work packages to those who are responsible for project work",
            "b) Defining the limits of the project sponsor’s responsibilities",
            "c) Defining the terms of reference of the project",
            "d) Monitoring the current engagement level of stakeholders"],
        answer: "a) Allocating work packages to those who are responsible for project work"
    },
    {
        question: "Which of the following is an appropriate purpose for using a WBS (work breakdown structure) in a software development project?",
        options: ["a) To clarify the time sequence of activities and understand the critical path that should be intensively managed",
            "b) To decompose a development task into smaller sub-tasks with a manageable size and organize them into a hierarchical structure",
            "c) To optimize the total cost when there is a trade-off relationship between the number of days and the costs required for development",
            "d) To show the schedule of activities by using bars and clarify the start dates and end dates of the activities as well as the progress at the current point"],
        answer: "b) To decompose a development task into smaller sub-tasks with a manageable size and organize them into a hierarchical structure"
    },
    {
        question: "Which of the following is an appropriate description for group decision-making techniques used in the estimation process of an activity duration?",
        options: ["a) The estimates created using these techniques may include contingency reserves, sometimes referred to as time reserves or buffers, in the project schedule to account for schedule uncertainty.",
            "b) These are team-based approaches, such as brainstorming, the Delphi, or nominal group techniques, which are useful for engaged team members to improve their estimation accuracy and commit to the estimates.",
            "c) These techniques use statistical relationships between historical data and project parameters to calculate an estimate for project cost, budget, or duration.",
            "d) Using these techniques, a group of experts, guided by historical information, can provide duration estimate information or recommended maximum activity durations from prior similar projects."],
        answer: "b) These are team-based approaches, such as brainstorming, the Delphi, or nominal group techniques, which are useful for engaged team members to improve their estimation accuracy and commit to the estimates."
    },
    {
        question: "Which of the following is an appropriate meaning of a mission-critical system?",
        options: ["a) The estimates created using these techniques may include contingency reserves, sometimes referred to as time reserves or buffers, in the project schedule to account for schedule uncertainty.a) As with an operating system, it is an indispensable system necessary for operating a business system",
            "b) It is a system that has a significant impact on corporate activities and society when a failure occurs.",
            "c) It is a system that is first installed on a trial basis, and if successful, a full-scale installation is implemented.",
            "d) Using these techniques, a group of experts, guided by historical information, can provide duration estimate information or recommended maximum activity durations from prior similar projects."],
        answer: "d) It is a system where the operating performance is close to the limit."
    },
    {
        question: "Which of the following is an appropriate description of the relationship between a record of an incident and a record of a problem in IT service management?",
        options: ["a) A cross-reference to the incident that triggered the record of the problem is included in the record of the problem.",
            "b) If known errors have been identified at the time of ending the record of the problem, the record of the incident that triggered the record of the problem is deleted.",
            "c) One (1) problem record is always associated with one (1) incident record",
            "d) Problems are classified and recorded by a different criterion from the classification of incidents."],
        answer: "a) A cross-reference to the incident that triggered the record of the problem is included in the record of the problem."
    },
    {
        question: "A system is planned to be operational 22 hours per day. However, there are two (2) failures with downtimes of 0.5 hours and 1.5 hours in 100 days. Which of the following is the approximate MTBF of this system during the period in hours?",
        options: ["a) 0.00091",
            "b) 1.0",
            "c) 2.0",
            "d) 1100"],
        answer: "d) 1100"
    },
    {
        question: "When a business continuity plan (BCP) is developed given the possibility of a system failure, which of the following is the item that is implemented as part of business impact analysis?",
        options: ["a) Collectively educating the concerned persons about the alternate procedures and recovery procedures during an information system failure",
            "b) Determining the maximum allowable downtime for the information system",
            "c) Executing a test to verify the effectiveness of BCP",
            "d) Revising the contents of the BCP given changes in the internal and external environment of the information system"],
        answer: "b) Determining the maximum allowable downtime for the information system"
    },
    {
        question: "Which of the following is the most appropriate purpose for which a system auditor exchanges opinions with an audited department concerning the draft version of an audit report?",
        options: ["a) To confirm that there are no factual errors in the findings and recommendations to be described in the audit report",
            "b) To issue the audit report to the audited department before the audit report is submitted to the person who is requesting the audit",
            "c) To receive the approval of the responsible person of the audited department concerning the recommendations described in the audit report",
            "d) Revising the contents of the BCP given changes in the internal and external environment of the information systemd) To substitute with additional auditing activities concerning the part of the audit report for which evidence is insufficient by orally confirming with the audited department"],
        answer: "a) To confirm that there are no factual errors in the findings and recommendations to be described in the audit report"
    },
    {
        question: "Which of the following is the appropriate activity performed by a system auditor who audits access control?",
        options: ["a) Creating and storing the access control records for the software",
            "b) Establishing an access control policy for the network",
            "c) Implementing the access control procedures for hardware",
            "d) Viewing the access control rules for data"],
        answer: "d) Viewing the access control rules for data"
    },
    {
        question: "Which of the following is a description of SOA?",
        options: ["a) It consists of four (4) main concepts; the business scheme, data scheme, application and processing scheme, and technical scheme, and it aims to optimize the business and the system.",
            "b) It makes it easier to address a change in the business by constructing software from components called services.",
            "c) It performs design at the component levels by using a combination of three (3) logical structures; a sequence, selection, and iteration.",
            "d) It uses a data flow diagram and simultaneously creates a model regarding information and a model regarding functions"],
        answer: "b) It makes it easier to address a change in the business by constructing software from components called services."
    },
    {
        question: "Which of the following is an appropriate description of BPR (Business Process Reengineering)?",
        options: ["a) BPR is a management practice used to provide the overall governance of an organization in a business process environment to improve agility and operational performance.",
            "b) BPR is a management strategy used to automate key business processes that helps in saving time, promoting efficiency, and ultimately reducing costs to enhance the value of an organization.",
            "c) BPR is a management system used in marketing and business to automate the sales activities, such as contact management, order taking and fulfillment, information sharing, inventory monitoring, and sales forecast analysis.",
            "d) BPR is a management technique used to redesign and restructure value-creating processes in an organization to gain significant benefits in productivity, profitability, service, and quality through maximizing the potential of individuals and teams."],
        answer: "d) BPR is a management technique used to redesign and restructure value-creating  in an organization to gain significant benefits in productivity, profitability, service, and quality through maximizing the potential of individuals and teams."
    },
    {
        question: "Which of the following is a usage scenario for the adoption of UML as a technique for visualizing business processes?",
        options: ["a) Diagrams are shown by using a data-oriented approach where objects are handled as entities, their attributes, and the relationships among the entities.",
            "b) To represent processes by using data flows, sources and sinks of data, data stores, and data processes are connected with arrows that indicate data flow.",
            "c) To represent processes from multiple viewpoints, some purpose-specific modeling methods are used, and each model is depicted by using standardized notation rules for object modeling.",
            "d) To thoroughly represent the functions of a process, the events that occur in response to a single request are described by using the conditional branch format"],
        answer: "c) To represent processes from multiple viewpoints, some purpose-specific modeling methods are used, and each model is depicted by using standardized notation rules for object modeling."
    },
    {
        question: "Which of the following is a usage scenario for the adoption of UML as a technique for visualizing business processes?",
        options: ["a) Clarifying what roles are assigned to the business and information-system departments when the organizational structure of system development is planned and clarifying the basis of cost calculation for the development, operation, and maintenance when considering the costs ",
            "b) Determining interfaces, such as screens or forms, based on the requirements definition document and describing them in the design document",
            "c) Performing maintenance and management of the system so that it conforms to the business and environment and analyzing details and clarifying the potential impacts of modification requests",
            "d) Performing system startup and shutdown, monitoring, and file maintenance in a planned manner and verifying that business is being carried out smoothly"],
        answer: "a) Clarifying what roles are assigned to the business and information-system departments when the organizational structure of system development is planned and clarifying the basis of cost calculation for the development, operation, and maintenance when considering the costs "
    },
    {
        question: "",
        image: "img/Q(65).png",
        options: ["a) Concluding a contract",
            "b) RFI",
            "c) RFP",
            "d) Selecting a provider"],
        answer: "c) RFP"
    },
    {
        question: "In a growth matrix proposed by Ansoff, which of the following is a strategy for expanding a business with an existing product in an existing market?",
        options: ["a) Diversification",
            "b) Market development",
            "c) Market penetration",
            "d) Product development"],
        answer: "c) Market penetration"
    },
    {
        question: "PEST analysis is used to analyze the external environment in determining a business strategy. Which of the following is an appropriate set of external environmental factors that PEST analysis analyzes?",
        options: ["a) Politics, Economics, Society, Technology",
            "b) Politics, Enterprises, Society, Time",
            "c) Price, Economics, Satisfaction, Technology",
            "d) Price, Enterprises, Safety, Time"],
        answer: "a) Politics, Economics, Society, Technology"
    },
    {
        question: "In a process that aims to produce ideal technology, technology follows an evolutionary process that progresses from the introduction stage, growth stage, maturity stage, and decline stage. Then, it transitions to the next technological phase. Which of the following is used to represent this technological evolution process?",
        options: ["a) Bathtub curve",
            "b) Demand curve",
            "c) Learning curve",
            "d) Technology S-curve"],
        answer: "d) Technology S-curve"
    },
    {
        question: "",
        image: "img/Q(69).png",
        options: ["a)",
            "b)",
            "c)",
            "d)"],
        answer: "a)"
    },
    {
        question: "Which of the following is a characteristic of MRP?",
        options: ["a) The development, designing, and production preparation of a product are performed simultaneously in parallel.",
            "b) The number of required components is calculated on the basis of the standard production plan of a product.",
            "c) The production of a product is initiated after an order from a customer is received.",
            "d) Work instructions and transport instructions are provided by using a worksheet."],
        answer: "b) The number of required components is calculated on the basis of the standard production plan of a product."
    },
    {
        question: "Which of the following is an explanation of the Kanban (just-in-time) system?",
        options: ["a) To improve work efficiency at each operation, parts and semi-finished products having unified specifications are procured.",
            "b) To minimize intermediate stock, parts required for the production line are procured from the previous process on the basis of a production plan.",
            "c) To procure parts efficiently, they are procured from affiliated companies.",
            "d) To procure parts of higher quality, parts are procured via competitive bidding among designated suppliers."],
        answer: "b) To minimize intermediate stock, parts required for the production line are procured from the previous process on the basis of a production plan."
    },
    {
        question: "Which of the following is a description of Online-to-Offline in net business?",
        options: ["a) It is a business model that provides a basic service or product for free and charges a fee for advanced or special functions.",
            "b) It is a mechanism that can prevent trouble in electronic commerce, such as the case where the price is paid but the product is not delivered or the case where the product is sent but the price is not paid.",
            "c) It is a mechanism that leads a customer that uses mobile devices to purchase by guiding the customer from a virtual store to a real store or from a real store to a virtual store",
            "d) It is a scheme that starts production of the final product after receiving the order from a customer, in order to realize customization according to customer specifications."],
        answer: "c) It is a mechanism that leads a customer that uses mobile devices to purchase by guiding the customer from a virtual store to a real store or from a real store to a virtual store"
    },
    {
        question: "A smart meter is a highly functional electricity meter with a function for communications and a function for the management of other devices. Which of the following is not appropriate as the purpose of installing a smart meter?",
        options: ["a) Continuing the power supply for a fixed amount of time by functioning as an auxiliary power source at the time of a power failure",
            "b) Improving the efficiency of meter reading work through automatic meter reading",
            "c) Increasing awareness of power-saving through visualization of the amount of power consumption",
            "d) Restraining peak power through control over power demand by using demand response"],
        answer: "a) Continuing the power supply for a fixed amount of time by functioning as an auxiliary power source at the time of a power failure"
    },
    {
        question: "Which of the following is an explanation of a sharing economy?",
        options: ["a) It is a concept by which efficient management and operation of renewable energy and urban infrastructure are performed by using IT, which leads to an improvement in the quality of people’s lives and helps achieve continuous economic growth.",
            "b) It is a concept by which the productivity of an entire economy increases as a result of utilizing IT, and the demand-and-supply gap is eliminated via the progress of SCM, which leads to sustainable growth free from inflation.",
            "c) It is a mechanism by which over-the-counter and Internet sales are combined in a business transaction, and the strong points of both are utilized and linked to expanding overall sales.",
            "d) It is a mechanism mainly between individuals to share, lend, or borrow idle assets owned by individuals by utilizing the community functions of social media."],
        answer: "d) It is a mechanism mainly between individuals to share, lend, or borrow idle assets owned by individuals by utilizing the community functions of social media."
    },
    {
        question: "Which of the following is a management organization that has the characteristic of both project and functional organizations being able to flexibly respond to changes in the business environment?",
        options: ["a) Divisional organization",
            "b) Hierarchical organization",
            "c) Line and staff organization.",
            "d) Matrix organization"],
        answer: "d) Matrix organization"
    },
    {
        question: "Which of the following is a process of discovering useful patterns and relationships by the analysis of large volumes of data?",
        options: ["a) Brainstorming",
            "b) Data mining",
            "c) Decision tree",
            "d) Document analysis"],
        answer: "b) Data mining"
    },
    {
        question: "Which of the following is a chart that represents values over a period (frequently one year) and shows simultaneously monthly figures (or weekly or daily), cumulative totals, and the moving averages?",
        options: ["a) Pie intersection chart",
            "b) Radar chart",
            "c) SD chart",
            "d) Z chart (Z graph)"],
        answer: "d) Z chart (Z graph)"
    },
    {
        question: "Company A purchased a machine for the original cost of $126,000. The salvage value after 6 years is $6,000. What is the annual depreciation expense (in dollars) by using the straight-line method?",
        options: ["a) 12,000",
            "b) 20,000",
            "c) 21,000",
            "d) 36,000"],
        answer: "b) 20,000"
    },
    {
        question: "",
        image: "img/Q(79).png",
        options: ["a) 4",
            "b) 5",
            "c) 6",
            "d) 7"],
        answer: "c) 6"
    },
    {
        question: "Which of the following is an appropriate description of the scope of software protection under WTO’s Agreement on Trade-Related Aspects of Intellectual Property Rights (TRIPS)?",
        options: ["a) Algorithms and programming languages are protected.",
            "b) Application programs are protected but system programs such as an OS are not, as the value of the right is included in the hardware cost.",
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





