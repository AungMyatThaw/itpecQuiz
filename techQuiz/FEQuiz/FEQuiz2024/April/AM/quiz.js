const quizData = [
    {
        question: "What is the decimal representation of the hexadecimal number 123.4?",
        options: ["a) 83.25", "b) 83.5", "c) 291.25", "d) 291.5"],
        answer: "c) 291.25"
    },
    {
        question: "Five people are sitting at a table in a restaurant. Two of them ordered coffee, and the other three ordered tea. The waiter forgets who ordered what and puts the drinks in a random order for the five persons. What is the probability that every person gets the correct drink?",
        options: ["a) 1/30", "b) 1/20", "c) 1/10", "d) 3/10"],
        answer: "c) 1/10"
    },
    {
        question: "The expression below is represented in postfix notation. What is the resulting value of this expression? 100 5 6 2 + * 12 4 / − − 36 −",
        options: ["a) 5", "b) 18", "c) 21", "d) 27"],
        answer: "d) 27"
    },
    {
        question: "Which of the following is an appropriate explanation of feedback control?",
        options: [
            "a) It performs control in a predetermined order.",
            "b) It performs control to keep the output in line with the target value.",
            "c) It performs control to prevent external disturbances from affecting the output.",
            "d) It performs control without using the output."
        ],

        answer: "b) It performs control to keep the output in line with the target value."
    },
    {
        question: "Which of the following represents the post-order traversal of the tree below?",
        options: [
            "a) 2, 3, 4, 7, 8, 10, 13, 15, 18",
            "b) 2, 4, 8, 7, 3, 15, 18, 13, 10",
            "c) 10, 3, 2, 7, 4, 8, 13, 18, 15",
            "d) 10, 3, 13, 2, 7, 18, 4, 8, 15"
        ],
        image: "img/Q(5).png",
        answer: "b) 2, 4, 8, 7, 3, 15, 18, 13, 10",

    },
    {
        question: "The flowchart below shows an algorithm. Which of the following is an expression to be inserted in blank A?",
        options: ["a) i ≥ 2N - 1", "b) i ≥ 2N + 1", "c) x ≥ 2N - 1", "d) x ≥ 2N + 1"],
        image: "img/Q(6).png",
        answer: "b) i ≥ 2N + 1"
    },
    {
        question: "How many swaps are required in bubble sort when N elements in the array are already sorted in reverse order?",
        options: ["a) N(N-1) ÷ 2", "b) N 2 ÷ 2", "c) N(N-1)", "d) N 2"],
        answer: "a) N(N-1) ÷ 2"
    },
    {
        question: "There are two microprocessors: a 32-bit CPU capable of executing each of 32-bit, 16-bit, and 8-bit long instructions in 1 cycle, and a 16-bit CPU capable of executing each of 16-bit and 8-bit long instructions in 1 cycle. Additionally, the 16-bit CPU can execute a 32-bit long instruction in 2 cycles. When the appearance ratio of 32-bit long instructions is 40%, of 16-bit long instructions is 40%, and of 8-bit long instructions is 20% respectively, what is the percentage improvement in total execution time with the 32-bit CPU compared to the 16-bit CPU? Here, both the 32-bit and 16-bit CPU operate at the same clock speed and have the same performance except for the executable instruction length in 1 cycle.sorted in reverse order?",
        options: ["a) 28.57", "b) 40", "c) 50", "d) 71.43"],
        answer: "a) 28.57"
    },
    {
        question: "When an HDD has the specifications below, what is the average access time for an HDD to transfer 1 MB of data in ms? Here, the average access time can be calculated as the sum of the average seek time, controller overhead, rotational latency, and transfer time. Other overheads can be ignored",
        options: ["a) 21.93", "b) 26.67", "c) 27.92", "d) 33.92"],
        image: "img/Q(9).png",
        answer: "c) 27.92"
    },
    {
        question: "Which of the following is the port that can theoretically connect up to 127 peripheral devices, controlled by a PC?",
        options: ["a) Displayport", "b) HDMI", "c) SATA", "d) USB"],
        answer: "d) USB"
    },
    {
        question: "Which of the following is the design for securing safety and reliability known as “foolproof”?",
        options: ["a) A redundant configuration, such as duplication, can be used so that even when a device failure occurs, the functions of the overall system are not affected.", "b) Even when the user performs an incorrect operation, a problem does not occur in the system.", "c) When a device failure occurs, damage can be minimized by enabling the system to stop safely.", "d) When a device failure occurs, the system runs even if the usable functions are restricted, and the processing efficiency is reduced."],
        answer: "b) Even when the user performs an incorrect operation, a problem does not occur in the system."
    },
    {
        question: "There is a system where the operating status is continuously monitored. Which of the following is an appropriate sequence of work items in capacity planning that is conducted when a new task is applied to the system after several years of operation? [Work items in capacity planning] (i) Evaluate the proposed system configuration, assess its appropriateness, and conduct a review if necessary. (ii) Consider a proposal for the necessary system configuration based on the system characteristics, including factors such as the number of servers and whether parallel distributed processing is performed. (iii) Understand the performance information of the hardware or the environment inherent to the system based on the operating status of the system. (iv) Conduct a meeting with users to gather information about the new task, understand requirements such as the estimated number of processes, and determine the time required for processes.",
        options: ["a) (iii), (ii), (iv), (i)", "b) (iii), (iv), (ii), (i)", "c) (iv), (ii), (i), (iii)", "d) (iv), (iii), (i), (ii)"],
        answer: "b) (iii), (iv), (ii), (i)"
    },
    {
        question: "An operating system adopts the priority scheduling algorithm for scheduling processes. There are five processes A, B, C, D and E arriving at the same time with estimated running times of 10, 6, 2, 4, and 8 milliseconds, respectively. Their priorities are 3, 5, 2, 1, and 4, where 1 is the highest priority. What is the mean process turnaround time?",
        options: ["a) 14", "b) 16", "c) 20", "d) 22"],
        answer: "b) 16"
    },
    {
        question: "Data is continuously sent for T seconds from the sending task to the receiving task in the diagram below. When the volume of data sent in 1 second is S and the volume of data received in 1 second is R, which of the following is the appropriate relational expression indicating the buffer size L to prevent buffer overflow? Here, the sending task has a higher transfer speed than the receiving task, and there is a sufficient time interval until the start of the next transfer.",
        options: ["a) L < ( R - S ) x T", "b) L < ( S - R ) x T", "c) L ≧ ( R - S ) x T", "d) L ≧ ( S - R ) x T"],
        image: "img/Q(14).png",
        answer: "d) L ≧ ( S - R ) x T"
    },
    {
        question: "Which of the following is the appropriate explanation of ideal hashing used during a data search?",
        options: ["a) It is advanced search technology that determines the intention of a user's search request by adding recognition and decision functions to an object that combines data and its processing.", "b) It is data search technology that is fast and highly scalable, in which values converted from data with a specific algorithm are used for storage addresses of the data.", "c) It is technology and techniques for searching a large volume of accumulated data to identify trends, correlations, patterns, and other information required for management and marketing", "d) It is technology created with the aim of increasing the hit ratio for keyword searches and preventing omissions in searches by using a list of synonyms and equivalent words."],
        answer: "b) It is data search technology that is fast and highly scalable, in which values converted from data with a specific algorithm are used for storage addresses of the data."
    },
    {
        question: "Which of the following is equivalent to the circuit below?",
        options: ["img/Q(16)_a.png", "img/Q(16)_b.png", "img/Q(16)_c.png", "img/Q(16)_d.png"],
        image: "img/Q(16).png",
        answer: "img/Q(16)_d.png"
    },
    {
        question: "In the process of creating animation, which of the following is used to record the natural movement of objects, humans, and animals by using sensors and video cameras?",
        options: ["a) Key frame method", "b) Morphing", "c) Motion capture", "d) Pixel shader"],
        answer: "c) Motion capture"
    },
    {
        question: "Which of the following is a critical step in creating a relational database?",
        options: ["a) Building a network diagram", "b) Creating entity-relationship diagrams", "c) Designing a flowchart", "d) Programming in C++"],
        answer: "b) Creating entity-relationship diagrams"
    },
    {
        question: "Which of the following is the appropriate interpretation of the E-R model shown below?",
        options: ["a) A department has many employees, and employees can have multiple dependents.", "b) A department has many employees, where each employee has exactly one dependent", "c) An employee can have at most one dependent.", "d) An employee can work in two departments."],
        image: "img/Q(19).png",
        answer: "a) A department has many employees, and employees can have multiple dependents."
    },
    {
        question: "From the figure below, which of the following is an appropriate set of attributes for the “CatalogProduct” class table?",
        options: ["a) CatalogID, Price, SpecialPrice", "b) CatalogID, ProductID, Price, SpecialPrice", "c) Price, SpecialPrice", "d) ProductID, Price, SpecialPrice"],
        image: "img/Q(20).png",
        answer: "b) CatalogID, ProductID, Price, SpecialPrice"
    },
    {
        question: "Which of the following is a clause that is inserted into blank A of the SQL statement below that calculates the average scores for each class and subject from the “MidtermTest” table and displays them in ascending order of class and subject?",
        image: "img/Q(21).png",
        options: ["a)", "b)", "c)", "d)"],
        answer: "c)"
    },
    {
        question: "Which of the following can change the deadlock state of the transaction back to the normal state?",
        options: ["a) Commit", "b) Drop", "c) Rollback", "d) Roll Forward"],
        answer: "c) Rollback"
    },
    {
        question: "Which of the following is the network device that makes a forwarding decision on the basis of the destination MAC address in the frame header?",
        options: ["a) Patch cable", "b) Repeater hub", "c) Router", "d) Switching hub"],
        answer: "d) Switching hub"
    },
    {
        question: "Which of the following is the broadcast address of the network 192.168.10.0/23?",
        options: ["a) 192.168.10.0", "b) 192.168.10.255", "c) 192.168.10.511", "d) 192.168.11.255"],
        answer: "d) 192.168.11.255"
    },
    {
        question: "Which of the following is the name of a communication standard that is used in mobile phone networks and has the three characteristics described below? (1) All communications are processed with a packet switching scheme. (2) It is possible to use a communication scheme called MIMO that uses multiple antennas. (3) It has been standardized in the international standardization project 3GPP (3rd Generation Partnership Project)",
        options: ["a) LTE (Long Term Evolution)", "b) MAC (Media Access Control)", "c) MDM (Mobile Device Management)", "d) VoIP (Voice over Internet Protocol)"],
        answer: "a) LTE (Long Term Evolution)"
    },
    {
        question: "Which of the following is the network utility that is used to check detailed TCP connection information of the host?",
        options: ["a) arp", "b) ipconfig", "c) netstat", "d) ping"],
        answer: "c) netstat"
    },
    {
        question: "Which of the following describes a brute force attack aimed at finding the key of symmetric encryption?",
        options: ["a) Finding the key by observing the ciphertext change when the plaintext is altered by a certain amount", "b) Finding the key by testing all key combinations sequentially when a set of plaintext and ciphertext is given", "c) Finding the key by using the algebraic expression representing the relationship between the plaintext, ciphertext, and key as a clue", "d) Finding the key by using the statistical correlation between a part of the information of the plaintext and part of the information of the ciphertext as a clue"],
        answer: "b) Finding the key by testing all key combinations sequentially when a set of plaintext and ciphertext is given"
    },
    {
        question: "Which of the following is a package of unauthorized programs and tools that has functions such as creating a backdoor on a server and hiding the evidence of intrusion inside the server?",
        options: ["a) RFID", "b) Rootkit", "c) TKIP", "d) Web beacon"],
        answer: "b) Rootkit"
    },
    {
        question: "Which of the following is a public-key cryptography algorithm whose security depends on the difficulty of factoring extremely large numbers into primes?",
        options: ["a) AES", "b) DH", "c) DSA", "d) RSA"],
        answer: "d) RSA"
    },
    {
        question: "Which of the following is the name of an attack where manipulation is employed to place a malicious website near the top of the search results on a search engine?",
        options: ["a) Cross-site scripting", "b) DNS cache poisoning", "c) SEO poisoning", "d) Social engineering"],
        answer: "c) SEO poisoning"
    },
    {
        question: "Which of the following is an explanation of the timestamp service in information security?",
        options: [
            "a) It is a service that authenticates biometric information, such as fingerprints, voice prints, vein patterns, retina, and iris, by using the date and time when the information is registered in the authentication system.",
            "b) It is a service that certifies that electronic data certainly exists on a particular date and time and that the data has not been modified since that date and time.",
            "c) It is a service that securely verifies that the date and time information is not falsified midway for setting the clocks of the PCs and servers on the network.",
            "d) It is a web service that securely displays the global date and time information used in official records by using encrypted communication."
        ],

        answer: "b) It is a service that certifies that electronic data certainly exists on a particular date and time and that the data has not been modified since that date and time."
    },
    {
        question: "Which of the following is an appropriate term for an organized and highly skilled team whose mission is to continuously monitor and improve an organization’s security posture while preventing, detecting, analyzing, and responding to cybersecurity incidents, utilizing both technology and well-defined processes and procedures?",
        options: ["a) Cybersecurity", "b) Incident Management Center (IMC)", "c) Network Operations Center (NOC)", "d) Security Operations Center (SOC)"],
        answer: "d) Security Operations Center (SOC)"
    },
    {
        question: "In an OS where permissions for reading, writing, or executing a file can be independently set as attributes of the file, one bit is allocated for each of these three (3) permissions to determine whether they are allowed or not. When these three bits are configured using an octal value from 0 through 7, the trial results below are obtained. Which of the following is an appropriate trial result?      [Trial results] (1) When 0 is set, reading, writing, and execution can no longer be performed. (2) When 3 is set, reading and writing can be performed, but execution cannot. (3) When 7 is set, reading, writing, and execution can be performed.",
        options: ["a) When 2 is set, reading and execution can be performed.", "b) When 4 is set, only execution can be performed.", "c) When 5 is set, only writing can be performed.", "d) When 6 is set, reading and writing can be performed."],
        answer: "b) When 4 is set, only execution can be performed."
    },
    {
        question: "Which of the following are components of a UML2.x (including 2.0 and later versions) state diagram?",
        options: ["a) Message and Activity", "b) Message and Transition", "c) State and Message", "d) State and Transition"],
        answer: "d) State and Transition"
    },
    {
        question: "Which of the following represents the appropriate combination of a class and an object in Object Oriented Programming?",
        image: "img/Q(35).png",
        options: ["a) ", "b) ", "c)", "d)"],
        answer: "a) "
    },
    {
        question: "Which of the following is the most appropriate description of polymorphism in object-oriented design?",
        options: ["a) It allows developers to define classes incrementally by reusing classes defined previously as the basis for new classes.", "b) It allows the analyst to focus on the important dimensions while ignoring nonessential dimensions.", "c) It combines processes and data into a single object.", "d) It is the provision of a single interface to entities of different types."],
        answer: "d) It is the provision of a single interface to entities of different types."
    },
    {
        question: "There is a program module that is executed only when the integer value of integer x is 25 ≤ 𝑥 < 50. When testing this module using boundary value analysis, which of the following is an appropriate combination of values to be tested?",  
        options: ["a) 24, 25, 49, 50", "b) 24, 25, 50, 51", "c) 25, 26, 49, 50", "d) 25, 26, 50, 51"],
        answer: "a) 24, 25, 49, 50"
    },
    {
        question: "Which of the following is an appropriate testing type to ensure that the interfaces and linkages between different parts of programs work properly?",  
        options: ["a) Acceptance test", "b) Integration test", "c) Qualification test", "d) Unit test"],
        answer: "b) Integration test"
    },
    {
        question: "Which of the following is an explanation of the reverse engineering of software?",  
        options: ["a) The entire software is reconstructed after the existing software is analyzed and understood.", "b) The existing software is analyzed, and its specification and structure are clarified.", "c) The internal structure of the software is changed without any change to the externally observed behavior.", "d) The source code is automatically generated from the design information by a development support tool"],
        answer: "b) The existing software is analyzed, and its specification and structure are clarified"
    },
    {
        question: "Which of the following is the appropriate order of the six phases in the SDLC (Software Development Life Cycle) model?",  
        options: ["a) Requirements Analysis -> Design -> Programming -> Deployment -> Testing -> Maintenance", "b) Requirements Analysis -> Design -> Programming -> Testing -> Deployment -> Maintenance", "c) Requirements Analysis -> Design -> Programming -> Testing -> Maintenance -> Deployment", "d) Requirements Analysis -> Programming -> Testing -> Design -> Maintenance -> Deployment"],
        answer: "b) The existing software is analyzed, and its specification and structure are clarified"
    },
    {
        question: "The activities and milestones of a project are shown in the arrow diagram below. Which of the following is an appropriate description of the project if the duration of activity B is increased by 5 days?",  
        image: "img/Q(41).png",
        options: ["a) The earliest start time of activity G is delayed by 5 days.", "b) The latest start time of activity F is delayed by 5 days.", "c) The project’s minimum completion time does not change.", "d) The project’s minimum completion time is increased by 5 days."],
        answer: "c) The project’s minimum completion time does not change."
    },
    {
        question: "What is the Cost Performance Index (CPI) of the project under the conditions listed below?",  
        image: "img/Q(42).png",
        options: ["a) 0.25", "b) 0.8", "c) 1.0", "d) 1.25"],
        answer: "d) 1.25"
    },
    {
        question: "In ITIL 2011 edition, which of the following is the appropriate order for the service lifecycle stages?",  
        options: ["a) Service design -> Continual service improvement -> Service strategy -> Service operation -> Service transition", "b) Service design -> Service strategy -> Service operation -> Service transition -> Continual service improvement", "c) Service strategy -> Service design -> Service operation -> Service transition -> Continual service improvement", "d) Service strategy -> Service design -> Service transition -> Service operation -> Continual service improvement"],
        answer: "d) Service strategy -> Service design -> Service transition -> Service operation -> Continual service improvement"
    },
    {
        question: "In IT service management, which of the following is an activity performed for the management of incidents and service requests?",  
        options: ["a) Evaluating if customer satisfaction with the service desk meets the agreed service targets and performing a review to identify improvement opportunities", "b) Examining measures wherein the amount of free space on a disk is near its threshold", "c) Investigating the impact of changes made to a program", "d) Receiving a failure report from a user and checking to see if it corresponds to a known error"],
        answer: "d) Receiving a failure report from a user and checking to see if it corresponds to a known error"
    },
    {
        question: "Which of the following is the most appropriate description concerning an interview conducted by a system auditor?",  
        options: ["a) The administrator of the audited department, who has experience in auditing tasks, is selected as the interviewee.", "b) The entire interview is conducted by one (1) system auditor, as discrepancies may occur in the record if multiple auditors are involved.", "c) The system auditor instructs the audited department to take improvement measures for deficiencies found during the interview.", "d) The system auditor makes an effort to obtain documents and records that support the information obtained from the audited department during the interview."],
        answer: "d) The system auditor makes an effort to obtain documents and records that support the information obtained from the audited department during the interview."
    },
    {
        question: "Which of the following is a case that enables the customer support operations at a call center to improve quality by applying a pattern recognition function or machine learning function to the accumulated data?",  
        options: ["a) Deriving the most appropriate response in real time from related materials and all the previous support history according to the content of the inquiry made by a customer", "b) Displaying the digital content of a response manual or basic customer information on a pop-up window of a screen for responding to requests from the operators", "c) Repeatedly providing role play training to new operators from an experienced operator who serves as a lecturer by using the response manual as the teaching material", "d) Transferring a phone call or the relevant support screen to an experienced operator or a dedicated staff when the operator who is responding to a customer over the phone is unable to provide an answer"],
        answer: "a) Deriving the most appropriate response in real time from related materials and all the previous support history according to the content of the inquiry made by a customer"
    },
    {
        question: "Which of the following is a description of knowledge management?",  
        options: ["a) Conduct business by a flat organizational structure that has as few hierarchical levels as possible for quick decision making.", "b) Conduct business by utilizing its core strength in know-how and technology that are unique to the company and cannot be imitated by others.", "c) Conduct business that enhances overall capabilities to solve problems by sharing knowledge that is scattered throughout the company.", "d) Implement management innovation in the company on the basis of a comparative analysis with companies that have achieved superior performance."],
        answer: "c) Conduct business that enhances overall capabilities to solve problems by sharing knowledge that is scattered throughout the company."
    },
    {
        question: "Which of the following is an appropriate description of an RFI?",  
        options: ["a) It is a document describing the basic policy for the system, including a summary of the system, purpose, necessary functions, system requirements, and contract matters.", "b) It is a document that is created after an RFP.", "c) It is a document used by companies looking for the implementation of computerization to request specific system proposals from prospective suppliers such as system vendors.", "d) It is a document used to request information concerning computerization from prospective suppliers such as system vendors."],
        answer: "d) It is a document used to request information concerning computerization from prospective suppliers such as system vendors."
    },
    {
        question: "Which of the following is a strategy that concentrates resources in the segment of a specific customer or specific product in order to achieve specialization?",  
        options: ["a) Challenger strategy", "b) Follower strategy", "c) Leader strategy", "d) Niche strategy"],
        answer: "d) Niche strategy"
    },
    {
        question: "Which of the following is an explanation of core competence that is adopted in business administration?",  
        options: ["a) It refers to a qualitative and quantitative understanding of its products, services, and operations through comparisons with the strongest competitor or advanced companies.", "b) It refers to dramatical improvements in the costs, quality, service, and speed of a company by fundamentally reviewing and radically redesigning its business processes.", "c) It refers to the company’s unique skills, technologies, and other strenghts that are superior to other companies, which serve as a source of competitive advantage.", "d) It refers to the management of the allocation of company-wide management resources in an effective and integrated manner so as to achieve an improvement in management efficiency."],
        answer: "c) It refers to the company’s unique skills, technologies, and other strenghts that are superior to other companies, which serve as a source of competitive advantage."
    },
    {
        question: "Which of the following is an appropriate explanation of telemarketing?",  
        options: ["a) It refers to direct marketing that includes calling people at home and asking for donations, opinions, or purchases.", "b) It refers to direct marketing that sells products and services and builds customer relationships over the Internet.", "c) It refers to direct marketing that sends offers, announcements, reminders, or other items to a person at a particular address.", "d) It refers to direct marketing that sends sales alerts, links to website updates, appointments, or delivery reminders to large groups of people."],
        answer: "a) It refers to direct marketing that includes calling people at home and asking for donations, opinions, or purchases."
    },
    {
        question: "Which of the following is an appropriate explanation of the technology S curve?",  
        options: ["a) It represents the diffusion process of a new technology. It shows that the growth rate of the penetration rate gradually decreases as products applying the technology penetrate the market, by using a frequency distribution curve.", "b) It represents the maturing process of technology. It shows that during the time until the new technology is actually spread, the degree of awareness changes as time passes.", "c) It represents the process of technological progress. It shows that technology advances slowly at the beginning, then advances rapidly, and thereafter, slowly stagnates.", "d) It represents the relationship between production volume and unit cost. It shows the course of reduction in unit cost with an increase in cumulative production volume."],
        answer: "c) It represents the process of technological progress. It shows that technology advances slowly at the beginning, then advances rapidly, and thereafter, slowly stagnates"
    },
    {
        question: "Which of the following is an appropriate computing concept that describes the idea of physical objects, such as devices, vehicles, and buildings, that are connected to the Internet and are able to identify themselves to other devices?",  
        options: ["a) Computer networks", "b) Deep learning", "c) Internet of things", "d) Network topology"],
        answer: "c) Internet of things"
    },
    {
        question: "A factory manufactures the three products that are shown in the table below. Which of the following is the maximum possible profit in dollars? Here, there is an upper limit to the monthly demand volume for each product. Also, the factory can only use up to 200 hours per month for the manufacturing process and cannot manufacture more than one products in parallel.",  
        options: ["a) 26,250", "b) 30,000", "c) 31,500", "d) 33,000"],
        answer: "d) 33,000"
    },
    {
        question: "Which of the following is an example of Consumer Generated Media (CGM)?",  
        options: ["a) A website of a company through which the company publishes information about its management and financial status, as well as performance trends for individual investors", "b) A website of a company through which the company transmits information about the characteristics and usage methods of its products to the general consumers", "c) A website of a government organization through which the organization publishes information about its policies and administrative services to the general public", "d) A website such as a blog and SNS, etc. through which an individual transmits information to an unspecified number of people about the evaluation of products, etc. that the person has used"],
        answer: "d) A website such as a blog and SNS, etc. through which an individual transmits information to an unspecified number of people about the evaluation of products, etc. that the person has used"
    },
    {
        question: "Which of the following is the maximum value of Z from the constraints that are shown below? x + y ≤4 x ≥ 0, y ≥ 0 Z= 3x + 4y",  
        options: ["a) 12", "b) 14", "c) 16", "d) 18"],
        answer: "c) 16"
    },
    {
        question: "When a company wants to earn a profit of $42,000, which of following is the number of units that the company must sell under the conditions shown in the table below?",  
        image: "img/Q(57).png",
        options: ["a) 12", "b) 14", "c) 16", "d) 18"],
        answer: "c) 16"
    },
    {
        question: "Which of the following is part of total quality management?",  
        options: ["a) Designing products and services that meet or exceed customers’ expectations", "b) Focusing on the appointment of staff with long-term work experience in a similar environment", "c) Prioritizing central decisions rather than empowerment to ensure the quality of products and services", "d) Promoting the capability of each department to work independently in a competitive manner"],
        answer: "a) Designing products and services that meet or exceed customers’ expectations"
    },
    {    
        question: "When a relation between the list price of a product and the demand for the product is defined as a linear equation, which of the following is the appropriate numerical value to be inserted into blank A below?",  
        image: "img/Q(59).png",
        options: ["a) 30,000", "b) 35,000", "c) 40,000", "d) 45,000"],
        answer: "d) 45,000"
    },
    {    
        question: "When OSS that is released under GPL is modified and distributed, which of the following is an appropriate action to comply with the GPL?",  
        options: ["a) A recipient who obtains the derivative work must be strictly prohibited from redistributing copies.", "b) The source code of a separate application that is statically linked to the derivative work does not need to be disclosed.", "c) When the software is modified and distributed, the source code of the distributed copies is made availabe to the recipients.", "d) When the source code of the derivative work is disclosed, compensation such as related costs cannot be demanded."],
        answer: "c) When the software is modified and distributed, the source code of the distributed copies is made availabe to the recipients."
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





