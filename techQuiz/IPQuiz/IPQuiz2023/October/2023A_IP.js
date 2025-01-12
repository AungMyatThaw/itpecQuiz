const quizData = [
    {
        question: "When three balls are picked out consecutively from a box containing three white balls and four black balls, which of the following is the lowest probability?",
        options: [
            "a) Probability of the balls picked out in order of black, black, black", 
            "b) Probability of the balls picked out in order of black, black, white", 
            "c) Probability of the balls picked out in order of black, white, black", 
            "d) Probability of the balls picked out in order of white, black, black"
        ],
        answer: "a) Probability of the balls picked out in order of black, black, black"
    },
    {
        question: "A search is performed by specifying a character string comprised of multiple alphabetic characters and one delimiter character “.” (period). An “*” (asterisk) represents an arbitrary character string with zero or more characters, and a “?” (question mark) represents an arbitrary single character. Which of the following is a character string that matches the character string represented below?",
        image: "img/q(2).png",
        options: ["a) XY.XYY ", "b) XXX.YY", "c) XYX.YXY ", "d) YXYX.YXY"],
        answer: "c) XYX.YXY "
    },
    {
        question: "When a sound is recorded in a computer file, it is to be stored as a series of 8-bit encoded data. When the same sound source is sampled at the same sampling frequency and then encoded as a series of 16-bit data in lieu of 8-bit data, which of the following is an appropriate description concerning this encoding?",
        options: [
            "a) The amplitude of the sound can be recorded more finely", 
            "b) When the recording time is the same, the amount of data becomes smaller. ", 
            "c) The CPU load required to process the recorded data decreases.", 
            "d) The upper limit of the frequency that can be recorded becomes higher."
        ],
        answer: "a) The amplitude of the sound can be recorded more finely"
    },
    {
        question: "Which of the following is a search condition for the shaded portion of the Venn diagram below? ",
        image: "img/Q(4).png",
        options: ["a) (not A) and (B and C)", "b) (not A) and (B or C)", "c) (not A) or (B and C)", "d) (not A) or (B or C)"],
        answer: "b) (not A) and (B or C)"
    },
    {
        question: "As shown in Figure 1, there is a processing unit which reads two positive integer input values A1 and A2, and then writes two integer output values B1 and B2. B1 is equal to A2, and B2 is the remainder of A1 divided by A2. In Figure 2, two processing units with the same function as the above are connected in series. When A1=15 and A2=6 are given to the lefthand unit in Figure 2, what is the output value of B1 for the right-hand unit?",
        image: "img/q(5).png",
        options: ["a) 0 ","b) 3 ","c) 6","d) 15 "],
        answer: "b) 3 ",
    },
    {
        question: "The data is exchanged between variable A and variable B. When variable TMP is used to temporarily store data, which of the following is the procedure for exchanging data correctly? Here, “x ← y” represents that the data of “x” is replaced with the data of “y”.",
        image: "img/q(6).png",
        options: ["a)", "b)", "c)", "d)"],
        answer: "b)"
    },
    {
        question: "Which of the following is an explanation of a characteristic of hypertext?",
        options: [
            "a) It has a function for the creation and editing of a range of expressions. ", 
            "b) It has a function for the creation and editing of a range of shapes. ", 
            "c) It provides a range of templates, and enables their use.", 
            "d) It has a mechanism that enables relevant information to be accessed by embedding a link in any position in a text."
        ],
        answer: "d) It has a mechanism that enables relevant information to be accessed by embedding a link in any position in a text."
    },
    {
        question: "In the data structure called a queue that is suitable for performing first-in first-out (FIFO) processing, values are stored in the order of “8”, “1”, “6”, and “3”, and then two (2) values are removed consecutively. Which of the following is the last value that is removed?",
        options: ["a) 1", "b) 3", "c) 6", "d) 8"],
        answer: "a) 1"
    },
    {
        question: "When the process that is shown in the flowchart is ended, which of the following is the value of x?",
        image: "img/q(9).png",
        options: ["a) 0", "b) 14", "c) 28", "d) 56"],
        answer: "b) 14"
    },
    {
        question: " Which of the following is an appropriate combination of words that are inserted into blanks A and B in the description below concerning the execution sequence of instructions in a computer?",
        image: "img/q(10).png",
        options: ["a) ", "b) ", "c) ", "d) "],
        answer: "b) "
    },
    {
        question: "Which of the following is a method of writing the same data to multiple hard disks simultaneously and improving reliability rather than performance?",
        options: [
            "a) Striping ", 
            "b) Paging", 
            "c) Interleaving", 
            "d) Mirroring"
        ],
        answer: "d) Mirroring"
    },
    {
        question: "Which of the following is required for an application program to use the peripheral equipment that is connected to a PC?",
        options: [
            "a) Compiler", 
            "b) Device driver", 
            "c) Plug and play", 
            "d) Hot plug"],
        answer: "b) Device driver"
    },
    {
        question: " There is an IoT system that automatically opens and closes the sluice gate for a rice field by measuring the water level in the rice field. Which of the following is the appropriate combination of terms to be inserted into blanks A and B in the figure? ",
        image: "img/q(13).png",
        options: ["a) " , "b) ", "c) ", "d) "],
        answer: "d) "
    },
    {
        question: "Which of the following is an appropriate description concerning a benchmark test? ",
        options: [
            "a) It focuses on input and output instead of the processing structure in the system in order to test if the output are as per the specifications for various input. ", 
            "b) It focuses on the internal processing structure of the system and sets test cases that cover conditions such as branching conditions and repetition conditions in order to test if the behavior of the processing is as intended by the design.", 
            "c) It predicts performance of a system to be created before it is designed, by mathematically modeling the behavior of the system and simulating its behavior by using a pseudo program.", 
            "d) It evaluates performance by performing a standard processing on an actual system and comparing the performance such as the time taken for the processing with other systems. "],
        answer: "d) It evaluates performance by performing a standard processing on an actual system and comparing the performance such as the time taken for the processing with other systems. "
    },
    {
        question: "Among the descriptions A through D concerning measures in a client/server system, which of the following is the list that contains all and only the appropriate items for reducing the response time?",
        image: "img/q(15).png",
        options: ["a) A, B, C ", "b) A, D ", "c) B, C ", "d) C, D"],
        answer: "b) A, D "
    },
    {
        question: "In the specification of the capacity of a battery that is embedded in a device such as an IoT device or a smartphone, which of the following is the appropriate meaning of “100mAh”?",
        options: [
            "a) It can discharge a current of 100mA for one (1) hour ", 
            "b) After it is charged for 100 minutes, it can discharge a current for one (1) hour.", 
            "c) It can discharge a current of 1A for 100 minutes.", 
            "d) After it is charged for one (1) hour, it can discharge a current for 100 minutes. "],
        answer: "a) It can discharge a current of 100mA for one (1) hour "
    },
    {
        question: "Which of the following is an appropriate explanation of the virtualization of a server?",
        options: [
            "a) It is a technique for virtually creating computer-generated worlds or immersive environments that users can interact with. ", 
            "b) It is a technique for virtually operating the GUI of a remote computer connected via a network by using a local computer. ", 
            "c) It is a technique for virtually implementing and operating two or more computers on a single computer.", 
            "d) It is a technique for virtually allocating more memory space than the capacity of main memory by using a particular part of auxiliary storage. "
        ],
        answer: "c) It is a technique for virtually implementing and operating two or more computers on a single computer."
    },
    {
        question: " In the description below concerning a file system, which of the following is an appropriate combination of terms to be inserted into blanks A through C? ",
        image: "img/q(18).png",
        options: ["a) " , "b) ", "c) ", "d) "],
        answer: "d) "
    },
    {
        question: " Which of the following is an appropriate description concerning the OS for PCs?",
        options: [
            "a) Each PC allows only one (1) type of OS to be installed and run on it", 
            "b) There is no OS for PCs equipped with a 64-bit CPU.", 
            "c) When an OS is upgraded to a new version, all of the software operating with the old version of the OS cannot be used any more. ", 
            "d) There exist some OSs for PCs that can be started up by using an external storage device, such as a CD-ROM and USB memory, other than the hard disk."],
        answer: "d) There exist some OSs for PCs that can be started up by using an external storage device, such as a CD-ROM and USB memory, other than the hard disk."
    },
    {
        question: " There is a system where a full backup is made after closing time every Sunday, and an incremental backup is made after closing time on Monday through Saturday. On a Wednesday, a failure happened during business hours, so a decision was made to restore data to the state at the closing time on Tuesday by using backup files. Which of the following lists all and only the necessary backup files for restoring data? Here, an incremental backup file means a backup file that contains only the data that has been modified since the previous backup (a full backup or an incremental backup) was made.",
        options: [
            "a) A full backup file on Sunday, incremental backup files on Monday and Tuesday", 
            "b) A full backup file on Sunday, an incremental backup file on Tuesday", 
            "c) Incremental backup files on Monday and Tuesday", 
            "d) An incremental backup file on Tuesday"],
        answer: "a) A full backup file on Sunday, incremental backup files on Monday and Tuesday"
    },
    {
        question: "Spreadsheet software is to be used to perform a calculation with the monthly sales data for each product shown in the worksheet below. When the expression <b>“COUNTIF(B2:D2,>15000)”</b> is entered in cell E2 and then copied to cell E3 and cell E4, which of the following is the value that is displayed in cell E4?",
        image: "img/q(21).png",
        options: ["a) 0" , "b) 1", "c) 2", "d) 3"],
        answer: "c) 2"
    },
    {
        question: " Which of the following is an Open Source Software (OSS) OS that is used in mobile devices such as smartphones and tablets? ",
        options: ["a) Android", "b) iOS ", "c) Safari ", "d) Windows"],
        answer: "a) Android"
    },
    {
        question: " Which of the following is a device that is used to recognize handwritten characters and convert them into character codes?",
        options: ["a) BD-R", "b) CD-R ", "c) OCR", "d) OMR "],
        answer: "c) OCR"
    },
    {
        question: "Which of the following is an appropriate example of benefits of cookies?",
        options: [
            "a) When a person is registered beforehand as a reader, only e-mails whose content matches the registered genre and preference are delivered automatically.", 
            "b) When a search is performed by an Internet search engine, in addition to the search results, articles and advertisements with related content are displayed.", 
            "c) When a link to another person’s blog is pasted in one's own blog, a notification is sent automatically to the person.",
            "d) When a user accesses a website that he/she has accessed before, the Web page is displayed according to the settings tailored to him/her. "
        ],
        answer: "d) When a user accesses a website that he/she has accessed before, the Web page is displayed according to the settings tailored to him/her. "
    },
    {
        question: " Which of the following is an appropriate description concerning the characteristics of video distribution using streaming? ",
        options: [
            "a) The data to be distributed must be stored on the server beforehand, and videos of events and sports cannot be distributed while they are being shot. ", 
            "b) Deterioration in video quality due to partial loss of data in reception can be completely eliminated. ", 
            "c) Warm-up time is not required for starting playback of a video, and therefore, the viewer can immediately start watching the video. ", 
            "d) Rather than waiting for the entire video data to be downloaded, playback starts as soon as some data has been received."
        ],
        answer: "d) Rather than waiting for the entire video data to be downloaded, playback starts as soon as some data has been received."
    },
    {
        question: "When the “Department,” “Location,” and “Employee” tables are joined to create Table A, which of the following is the “Employee” table that is to be joined? Here, an underline indicates a primary key, and a dotted underline indicates a foreign key.",
        image: "img/q(26).png",
        options: ["a) ", "b) ", "c) ", "d) "],
        answer: "d) "
    },
    {
        question: " From the “Product” table below, products whose supplier is “Company A” and the price is 1.40 dollars or more, and products whose supplier is “Company B” and the price is 1.70 dollars or less are extracted. Which of the following is a list of all of the obtained product names?",
        image: "img/q(27).png",
        options: ["a) Cake, Strawberry, Coffee", "b) Cake, Strawberry, Juice ", "c) Chocolate, Apple, Coffee", "d) Chocolate, Apple, Juice"],
        answer: "c) Chocolate, Apple, Coffee"
    },
    {
        question: "Which of the following is an appropriate search expression for searching for information concerning “men who are younger than 20 years and men who are older than 65 years”? ",
        options: [
            "a) Men AND (less than 20 years AND more than 65 years)",
            "b) Men AND (less than 20 years OR more than 65 years) ",
            "c) Men OR (less than 20 years AND more than 65 years)",
            "d) Men OR (less than 20 years OR more than 65 years) "
        ],
        answer: "b) Men AND (less than 20 years OR more than 65 years) "
    },
    {
        question: "Which of the following is a database model that represents data in a table that is composed of rows and columns?",
        options: ["a) Object model", "b) Hierarchical model", "c) Relational model","d) Network model"],
        answer: "c) Relational model"
    },
    {
        question: " Which of the following is the most appropriate description concerning a VPN that is used, for example, to connect a PC to a workplace network from outside via the Internet?",
        options: [
            "a) It provides several lines for connecting to the Internet and improves availability.", 
            "b) It guarantees the maximum delay time by controlling the timing of transmission.", 
            "c) It guarantees a minimum bandwidth by compressing the communication data.", 
            "d) It performs highly secure communications by using authentication and encryption of the communication data."
        ],
        answer: "d) It performs highly secure communications by using authentication and encryption of the communication data."
    },
    {
        question: "Which of the following is an appropriate description concerning a virus check for an e-mail?",
        options: [
            "a) A virus check is not required for the encrypted e-mail.", 
            "b) A virus check is not required for the received e-mail if the virus check is performed by the sender. ", 
            "c) A virus check is performed even if the attached file has a file extension of “jpg”.", 
            "d) A virus check is performed only for the e-mail sent by an unknown sender."],
        answer: "c) A virus check is performed even if the attached file has a file extension of “jpg”."
    },
    {
        question: "Which of the following is the mechanism that determines the correspondence between domain names and IP addresses on the Internet?",
        options: ["a) DNS", "b) FTP", "c) SMTP","d) Web"],
        answer: "a) DNS"
    },
    {
        question: "Which of the following is the term that describes a network device copying a packet and sending it to multiple destinations?",
        options: ["a) DNS", "b) URL", "c) Multicast ","d) Multilink "],
        answer: "c) Multicast "
    },
    {
        question: "Which of the following is a wireless network that is used for IoT systems, and has power saving properties that enable operation for more than several years with a general battery and wide area properties that enable communication over a maximum distance of tens of kilometers?",  
        options: ["a) LPWA ", "b) MDM", "c) SDN","d) WPA2 "],
        answer: "a) LPWA "
    },
    {
        question: "All employees are registered in an entry control system with biometric authentication, and the employees who are allowed to enter each room within the company are specified. The exit from a room is not controlled. Among the following lists of the descriptions A through D, which is the list that contains all and only the items that can be achieved by the entry control system?",  
        image: "img/q(35).png",
        options: ["a) A, B, C", "b) A, C ", "c) A, D", "d) B, C, D"],
        answer: "b) A, C "
    },
    {
        question: "Which of the following is the most appropriate description concerning an information security policy for an organization?",  
        options: [
            "a) It is a management’s role to implement not only the top-level information security policy, but also the rules and procedures for information security.", 
            "b) It is necessary to publish outside of the company not only the top-level information security policy, but also the rules and procedures for information security. ", 
            "c) While the rules and procedures for information security should be tailored to the organization, the top-level information security policy must be adopted from the industry standard model.", 
            "d) Even when different information security measures are implemented in different departments of an organization, the top-level information security policy is recommended to be unified across the organization."],
        answer: "d) Even when different information security measures are implemented in different departments of an organization, the top-level information security policy is recommended to be unified across the organization."
    },
    {
        question: "Which of the following is an explanation of DRM (Digital Rights Management), which is used for digital content?",  
        options: [
            "a) It is data compression technology for audio and video, and there are multiple standards for the technology according to playback quality.", 
            "b) It is a collective term for technologies for protecting the copyright of content and restricting its use and duplication.", 
            "c) It is an XML-based description language for controlling data broadcasting on digital television.", 
            "d) It is a standard for reproducing realistic sound."],
        answer: "b) It is a collective term for technologies for protecting the copyright of content and restricting its use and duplication."
    },
    {
        question: "Which of the following is the most appropriate explanation of the operation that spyware is meant to perform?",  
        options: [
            "a) To destabilize the operation of the OS and software", 
            "b) To delete files from the file system without user consent", 
            "c) To hijack the web browser and forcefully execute a particular operation", 
            "d) To collect personal and other information without being noticed by users"
        ],
        answer: "d) To collect personal and other information without being noticed by users"
    },
    {
        question: "Which of the following is an appropriate description of S/MIME that is used for e-mails?",  
        options: [
            "a) A service that a user can use from his or her web browser by sending or receiving e-mails on the website", 
            "b) A standard for securely sending and receiving e-mails between e-mail software by using a digital certificate", 
            "c) A protocol for transferring e-mails between e-mail servers", 
            "d) A protocol for e-mail software to receive e-mails"],
        answer: "b) A standard for securely sending and receiving e-mails between e-mail software by using a digital certificate"
    },
    {
        question: "The communication protocol between a web browser and a web server was changed from HTTP to HTTPS. Which of the following does this achieve?",  
        options: [
            "a) Improvement of transfer rate between a client PC and a web server",
            "b) Prevention of computer virus infection", 
            "c) Protection of confidentiality in communication", 
            "d) Improvement of web browser display speed"
            ],
        answer: "c) Protection of confidentiality in communication"
    },
    {
        question: "In a file system that uses the access control methods below, which of the following settings for access rights to file A satisfies the requirements for access control?",  
        image: "img/q(41).png",
        options: ["a)", "b)", "c)", "d)"],
        answer: "d)"
    },
    {
        question: "Which of the following is a term for software that encrypts files on a computer in order to make them unusable, and demands money or other valuables in exchange for the decryption key? ",  
        options: ["a) Keylogger", "b) Ransomware ", "c) Rootkit ", "d) Worm"],
        answer: "b) Ransomware "
    },
    {
        question: "Which of the following is an appropriate combination of terms or phrases to be inserted into A and B in the description below concerning identification of information security risks in ISMS? ",  
        image: "img/q(43).png",
        options: ["a)", "b)", "c)", "d)"],
        answer: "c)"
    },
    {
        question: "In a corporate network, which of the following is a server that should be installed in a corporate LAN rather than in the demilitarized zone (DMZ)?",  
        options: [
            "a) An e-mail server that receives e-mails from outside the company", 
            "b) A DNS server where IP addresses of servers that are open to the public are registered", 
            "c) A file server that stores confidential information of the company", 
            "d) A web server that publishes information to the outside of the company"
        ],
        answer: "c) A file server that stores confidential information of the company"
    },
    {
        question: "An IoT device with a vulnerability was used in large numbers by several companies. One (1) of the devices was infected with malware, and the infection spreads to many other IoT devices. On a certain date at a certain time, the many IoT devices that were infected with the malware attempted many connections to a certain website simultaneously, and this forced the service of the website to stop. Which of the following attacks was made against the website?",  
        options: ["a) DDoS attack", "b) Cross-site scripting", "c) Dictionary attack", "d) Social engineering "],
        answer: "a) DDoS attack"
    },
    {
        question: "Which of the following is the order of the requirements definition phases in the system development?",  
        options: [
            "a) Business requirements definition, system requirements definition, software requirements definition ", 
            "b) Business requirements definition, software requirements definition, system requirements definition", 
            "c) System requirements definition, business requirements definition, software requirements definition", 
            "d) System requirements definition, software requirements definition, business requirements definition "
        ],
        answer: "a) Business requirements definition, system requirements definition, software requirements definition"
    },
    {
        question: "Among the requirements for the design of screens A through D below, which of the following is the list that contains all the items that are to be considered for easy-to-use for system users?",  
        image: "img/q(47).png",
        options: ["a) A, B, C ", "b) A, B, D", "c) A, C, D", "d) B, C, D"],
        answer: "d) B, C, D"
    },
    {
        question: "Which of the following is an activity in software maintenance? ",  
        options: [
            "a) Program modifications that are requested by an ordering party to a developer as a result of an acceptance test for software", 
            "b) Creation of additional code for the functions that are discovered to be lacking in the unit test of a program", 
            "c) Fixing of bugs that are discovered in the unit test of a program", 
            "d) Program modifications to handle a system failure that occurs in actual operation"],
        answer: "d) Program modifications to handle a system failure that occurs in actual operation"
    },
    {
        question: "Which of the following is the appropriate description concerning the black box test?",  
        options: [
            "a) The test is performed for all branches of the program.", 
            "b) The test is performed for all instructions of the program.", 
            "c) The test is performed on the basis of the internal structure of the program.", 
            "d) The test is performed by focusing on the input and the output of the program. "],
        answer: "d) The test is performed by focusing on the input and the output of the program. "
    },
    {
        question: "Which of the following is an appropriate description concerning the characteristics of the prototyping model?",  
        options: [
            "a) Through a trial model in the initial stage of the development process, the user interface is determined and the system performance is verified, in order to reduce the risk of rework in subsequent phases", 
            "b) It is a type of growth model where the system is refined by repeating development processes. In each iteration process, risk is assessed based on development cost and quality, and the process with the lowest risk is adopted", 
            "c) Through a series of system development processes, some functions are completed. The entire system is developed in incremental steps by repeating such a cycle.", 
            "d) It is performed in order of requirements analysis, system design, production, and test. It is suitable for large-scale system development."],
        answer: "a) Through a trial model in the initial stage of the development process, the user interface is determined and the system performance is verified, in order to reduce the risk of rework in subsequent phases"
    },
    {
        question: "In order to achieve the objectives of a project, the roles, responsibilities, and skills required for project team members are determined, and the time periods of their participation are also clarified. Which of the following is the appropriate knowledge area of the project management processes where such activities are classified?",  
        options: [
            "a) Project communication management", 
            "b) Project scope management", 
            "c) Project time management", 
            "d) Project human resource management"
        ],
        answer: "d) Project human resource management"
    },
    {
        question: "The response measure for risks in a project can be classified as avoidance, mitigation, acceptance, and transfer. In a system development project, the design and development process is to be subcontracted to Company A. In a previous system development, Company A suffered a delay for delivery, so it is also possible that a delay will occur in this project. Which of the following is a response measure that corresponds to mitigation of the risk of a delay?",  
        options: [
            "a) The inclusion of causal analysis of the previous delay at Company A, and preventive measures on the basis of this analysis into the development plan", 
            "b) Cancellation of subcontracting to Company A", 
            "c) Inclusion in the contract of the term of the compensation for damages by Company A in the event of a delay ", 
            "d) Inclusion in the project of the cost of measures in response to a delay"],
        answer: "a) The inclusion of causal analysis of the previous delay at Company A, and preventive measures on the basis of this analysis into the development plan"
    },
    {
        question: "When a project is launched, which of the following is created by the project manager to run the project?",  
        options: [
            "a) Request for proposal ", 
            "b) Project implementation report", 
            "c) Project management plan", 
            "d) Requirements definition"],
        answer: "c) Project management plan"
    },
    {
        question: "A system development project has more defects than the quality targets. In order to clarify the issues to prioritize for resolution, the number of defects for each cause is to be investigated and shown with a chart. Which of the following is an appropriate chart to use?",  
        options: ["img/q(54)_a.png", "img/q(54)_b.png", "img/q(54)_c.png", "img/q(54)_d.png"],
        answer: "img/q(54)_b.png"
    },
    {    
        question: "Which of the following is a hierarchical decomposition for the activities of creating project deliverables? ",  
        options: ["a) EVM", "b) RFP ", "c) SLA", "d) WBS"],
        answer:  "d) WBS"
    },
    {    
        question: "In the development of a system, the decision is made to subcontract the development from program implementation to integration testing to a vendor. A contract is concluded with the vendor that has the condition of reporting the progress and quality status at a weekly regular meeting, along with all the details of resolutions to any problem that has an impact on these things. Which of the following is the appropriate activity to confirm that the vendor is complying with the contract conditions?",  
        options: [
            "a) When a problem has occurred on the vendor-side that impacts progress and quality, requesting a report in a regular meeting and confirming the details until the problem is resolved.", 
            "b) For problems that occur on the vendor-side that impact progress and quality, confirming the details of their resolution with a report when the delivery is made. ", 
            "c) For the work on the vendor-side, confirming progress and quality status and all the details of responses to problems that occurred with a report at the regular meeting.", 
            "d) For the work on the vendor-side, requesting a report on progress and quality status and confirming the results of work at the completion of each phase such as program implementation."
        ],
        answer: "c) For the work on the vendor-side, confirming progress and quality status and all the details of responses to problems that occurred with a report at the regular meeting."
    },
    {    
        question: "In a project where 60 programs are created with a budget of 18 million yen, when the status of the project was checked 20 days after the start of the project, it was found that 40 out of the 60 programs have been completed at a cost of 15 million yen. If the project continues to proceed at the same pace, what is the excess of cost over budget? Here, the scale of all programs and productivity are the same.",  
        options: [
            "a) 3 million yen", 
            "b) 4.5 million yen", 
            "c) 6 million yen", 
            "d) 7.5 million yen"
        ],
        answer: "b) 4.5 million yen"
    },
    {    
        question: "Which of the following is the technical term that shows the management cycle in IT service management?",  
        options: ["a) ITIL", "b) PDCA", "c) SLA", "d) SLCP "],
        answer: "b) PDCA"
    },
    {    
        question: "Which of the following is an appropriate explanation concerning proactive countermeasures against various threats that hinder stable operation of information systems? ",  
        options: [
            "a) If unauthorized intrusion from the outside can be prevented completely, that is sufficient as a proactive countermeasure against unauthorized access.", 
            "b) It is difficult to predict natural disasters, so proactive countermeasures should focus on human-caused disasters. ", 
            "c) If all data is backed up, no other proactive countermeasures are required.", 
            "d) Necessary proactive countermeasures should be taken, taking into consideration the trade-off between anticipated losses and costs of countermeasures. "
        ],
        answer:"d) Necessary proactive countermeasures should be taken, taking into consideration the trade-off between anticipated losses and costs of countermeasures. "
    },
    {    
        question: "An SLA contains a written description of arrangements, such as the content of the service agreed upon between a service provider and a service user. Which of the following is an appropriate merit that is obtained by both the service provider and the service user through concluding an SLA?",  
        options: [
            "a) Being able to confirm the validity of the invoiced amount, based on the content of the service performed ", 
            "b) Being able to have shared recognition of the content, scope of provision, and minimum required level of the service ", 
            "c) Being able to negotiate fees when the content of the service is insufficient or incomplete", 
            "d) Being able to perform service operations without excessive demands placed on the content of service "
        ],
        answer:"b) Being able to have shared recognition of the content, scope of provision, and minimum required level of the service "
    },
    {    
        question: " Which of the following is an appropriate role of the service desk handling incident management when a system failure occurs? ",  
        options: [
            "a) Explaining already-known failure events and their workaround to users ", 
            "b) Providing training to the users after handling the system failure", 
            "c) Performing an alternate processing for the business operation where the failure has occurred", 
            "d) Investigating the root cause of the failure "
        ],
        answer:"a) Explaining already-known failure events and their workaround to users "
    },
    {    
        question: " In IT service management, which of the following is the case where a person in charge of the service desk entrusts the resolution of a high-difficulty incident reported to the service desk to secondary support with specialized skills?",  
        options: [
            "a) FAQ", 
            "b) SLA", 
            "c) Escalation", 
            "d) Workaround"
        ],
        answer:"c) Escalation"
    },
    {    
        question: "  Which of the following is a process where a third party inspects and evaluates the security and reliability of the information system of a company, and if necessary, the third party makes suggestions and recommendations to the party being inspected and evaluated.",  
        options: [
            "a) System audit", 
            "b) System management ", 
            "c) System design", 
            "d) System test "
        ],
        answer:"a) System audit"
    },
    {    
        question: " Which of the following is the most appropriate explanation of IT governance? ",  
        options: [
            "a) It is the organizational abilities of a company to control the creation and execution of its IT strategy with the purpose of building competitive superiority, and to lead it in the ideal direction.", 
            "b) It is the implementation and management of a good quality IT service that meets business needs. ", 
            "c) It is an activity that a third party that is not an involved party nor its management verifies that implementation and operation of risk control concerning information systems are appropriate. ", 
            "d) It is the application of the knowledge, skills, tools, and techniques to project activities in order to meet the requirements of the project. "
        ],
        answer: "a) It is the organizational abilities of a company to control the creation and execution of its IT strategy with the purpose of building competitive superiority, and to lead it in the ideal direction."

    },
    {    
        question: "Several functions are implemented for internal control by the system. Which of the following is the appropriate function that the process below implements? ",  
        image:"img/Q(65).png",
        options: [
            "a) Detection of a system failure", 
            "b) Access control by the system ", 
            "c) Grant of access rights to the user", 
            "d) Confirmation of validity of password settings of the user "
        ],
        answer:"b) Access control by the system "
    },
    {    
        question: " Which of the following is the most appropriate measure to lower the break-even sales for Company A that is in the manufacturing and sales industry?",  
        options: [
            "a) Attempting to increase the production volume of a product by building new facilities that are the same as the current ones ", 
            "b) Proceeding with the reduction of labor costs and the restructuring of indirect departments ", 
            "c) Attempting to increase the sales volume of a product while maintaining the sales price at a certain level ", 
            "d) Reducing the sales price of a product while maintaining the sales volume at the current level "
        ],
        answer:"b) Proceeding with the reduction of labor costs and the restructuring of indirect departments "
    },
    {    
        question: " The design quality of software is related to the skills of the designers, the design methods, the design tools, and other factors. Which of the following is an appropriate name for a diagram or a chart that resembles a fishbone and is used for identifying the items that affect the quality? ",  
        options: [
            "a) Arrow diagram ", 
            "b) Cause and effect diagram", 
            "c) Pareto chart", 
            "d) Matrix diagram "
        ],
        answer:"b) Cause and effect diagram"
    },
    {    
        question: "In order to manufacture one (1) unit of a product, 10 kg of the raw material A and 5 kg of the raw material B are needed. If the amount of raw material that can be used in one (1) month is 60 kg of raw material A and 40 kg of raw material B, what is the maximum number of units of the product that can be manufactured in one (1) month?",  
        options: [
            "a) 4", 
            "b) 6", 
            "c) 8", 
            "d) 10"
        ],
        answer:"b) 6"
    },
    {    
        question:" The entire inventory of Warehouse A and Warehouse B is to be sent to Store C and Store D. The inventory volume of Warehouse A and Warehouse B is 35 items and 15 items respectively, and the required volume for Store C and Store D is 20 items and 30 items respectively. The shipment cost for each item from warehouse to store is as shown in the table. Under these conditions, what is the minimum total shipment cost in dollars?",  
        image:"img/Q(69).png",
        options: [
            "a) 8,500", 
            "b) 10,000 ", 
            "c) 11,000", 
            "d) 12,500"
        ],
        answer:"c) 11,000"
    },
    {    
        question:" Which of the following is the most appropriate objective of improving the corporate brand?",  
        options: [
            "a) Providing customers with value that the competitors cannot provide on the basis of the unique skills and technologies of the company ", 
            "b) Bringing about competitive superiority by implicating the quality image of products and services from the company name, etc.", 
            "c) Gaining stakeholders’ empathy by announcing the basic concept of universal values of the company and corporate activities to the society by management executives and companies", 
            "d) Selling unique brands of products with low-price that are developed and produced in association with manufacturers on the basis of the leadership of distributors"
        ],
        answer:"b) Bringing about competitive superiority by implicating the quality image of products and services from the company name, etc."
    },
    {    
        question:" In order to produce one (1) unit of product A, one (1) unit of component B that is procured externally is required. Component B is ordered on the first business day of every month. It is delivered on the last business day of the same month, and used in production from the next month. When the three-month production plan from April for product A is as shown in the table below, what is the minimum number of units of component B that must be ordered on the first business day in May? Here, the stock of component B at the end of March is 6,000 units, and 6,000 units have been ordered on the first business day of April. Products in progress and safety stock do not need to be considered.",  
        image:"img/Q(71).png",
        options: [
            "a) 5,000", 
            "b) 6,000", 
            "c) 7,000", 
            "d) 8,000"
        ],
        answer:"b) 6,000"
    },
    {    
        question:" Which of the following is an expression that calculates gross profit?",  
        options: [
            "a) (Sales) − (Cost of sales)", 
            "b) (Operating profit) + (Non-operating income) − (Non-operating expenses)", 
            "c) (Ordinary profit) + (Extraordinary profit) − (Extraordinary loss)", 
            "d) (Current net profit before tax) − (Corporate tax, local tax, and business tax)"
        ],
        answer:"b) ISO 14001 "
    },
    {    
        question:"Which of the following is an international book code? ",  
        options: ["a) EAN ", "b) ISBN", "c) ITF", "d) UPC"],
        answer: "b) ISBN"
    },
    {    
        question:"  Among the various types of license agreements for a software package, which of the following is an appropriate explanation concerning a site license?",  
        options: [
            "a) A software package can be used on multiple computers in a designated company or organization. ", 
            "b) A software package can be used on a designated computer or a definite number of computers. ", 
            "c) A software package can be installed on a designated server, and can also be used by any clients to access the server. ", 
            "d) A software package can be used by a designated user or a definite number of users regardless of use or purpose. "
        ],
        answer:"a) A software package can be used on multiple computers in a designated company or organization. "
    },
    {    
        question:"  Company S purchases equipment from Company K by using the procedure shown in the diagram below. In this transaction procedure, which of the following is the point where the sales contract is concluded? Here, once the quotation is provided, the content of the transaction does not change throughout the procedure. ",  
        image:"img/Q(75).png",
        options: ["a) A", "b) B", "c) C", "d) D"],
        answer:"b) B"
    },
    {    
        question:"Among cases of sending e-mail, which of the following is the most appropriate from the viewpoint of consideration for the recipients?" ,  
        options: [
            "a) A questionnaire on member satisfaction is sent by e-mail to all the addresses of 100 selected members entered in the “To” (destination) field.", 
            "b) A large-size document presenting a company’s products is sent to a customer as an e-mail attachment without being compressed. ", 
            "c) A reply to an e-mail query from a customer about a product is sent also to those customers who should know about the details, by entering their addresses in the “Cc” (carbon copy) field. ", 
            "d) An e-mail is sent to the limited customers by using the “Bcc” (blind carbon copy) field in order to inform them of the URL of the Web page of a special event."
        ],
        answer:"d) An e-mail is sent to the limited customers by using the “Bcc” (blind carbon copy) field in order to inform them of the URL of the Web page of a special event."
    },
    {    
        question:" Which of the following is a corporate activity of compliance promotion?",  
        options: [
            "a) A mechanism for sharing sales people’s sales know-how, customer information, and negotiation information in the sales department is implemented to improve sales productivity. ", 
            "b) A mechanism for sharing customer information and purchasing history among all departments that come into contact with customers is implemented to increase customer satisfaction. ", 
            "c) Schedules, documents, messages, and meeting room reservation status are shared with groups such as departments and projects in order to prevent loss of communication.", 
            "d) A code of conduct or a conduct manual based on corporate ethics that aims to follow the law is created, and ethical education is implemented to ensure that employees understand them. "
        ],
        answer:"d) A code of conduct or a conduct manual based on corporate ethics that aims to follow the law is created, and ethical education is implemented to ensure that employees understand them. "
    },
    {    
        question:" Which of the following is standardized as ISO (International Organization for Standardization) 27000 series? ",  
        options: [
            "a) Content management system", 
            "b) Information security management system", 
            "c) Talent management system", 
            "d) Knowledge management system" 
        ],
        answer:"b) Information security management system"
    },
    {    
        question:"Which of the following is the type of retailing where the headquarters provides the business right, the right to use the trademark, and know-how about opening and running stores, on the basis of contracts with member stores, and collects royalties in return?",  
        options: [
            "a) Outlet store ", 
            "b) Concept shop", 
            "c) Franchise chain ", 
            "d) Voluntary chain "
        ],
        answer:"c) Franchise chain "
    },
    {    
        question:"Which of the following is an appropriate purpose of CRM?",  
        options: [
            "a) To increase profits by building an excellent relationship with the customer from a long-term perspective", 
            "b) To optimize the delivery time and cost by improving the series of processes from procurement to manufacturing, distribution, and sales across several companies ", 
            "c) To use management resources effectively by integrating and managing the information that is independently controlled in each department ", 
            "d) To determine when and how much of materials required for manufacturing products is to be purchased on the basis of a bill of materials and inventory information"
        ],
        answer:"a) To increase profits by building an excellent relationship with the customer from a long-term perspective"
    },
    {    
        question:"In order to consider near-term strategies, automobile manufacturer Company Aidentified its strengths and weaknesses, as well as the opportunities and threats it faces in the external environment. On the basis of the results, which of the following is appropriate as measures to leverage the company's strengths and overcome the threats?",  
        image:"img/q(81).png",
        options: [
            "a) Extend the retirement age of skilled workers or implement rehiring ", 
            "b) Procure funds at low interest and stockpile large reserves of oil", 
            "c) Conduct research and development and commercialize electric automobiles", 
            "d) Take advantage of brand image to strengthen sales capabilities"
        ],
        answer: "c) Conduct research and development and commercialize electric automobiles"
    },
    {    
        question:"Which of the following is an appropriate description concerning M&A? ",  
        options: [
            "a) The analysis of the flow of business and the chain of value for the production of value of products and services provided by a company ", 
            "b) The increase in autonomy in business strategy making by dividing a company by business or region ", 
            "c) The drastic reform of business processes, and using IT to increase business throughput and cost efficiency", 
            "d) The acceleration of business deployment by fulfilling the functions that the company is lacking from other companies through corporate acquisition, etc. "
        ],
        answer:"d) The acceleration of business deployment by fulfilling the functions that the company is lacking from other companies through corporate acquisition, etc. "
    },
    {    
        question:" Which of the following is an appropriate combination of the management themes and techniques for achieving them?",  
        image:"img/q(83).png",
        options: ["a) ","b) ","c) ","d) "],
        answer:"a) "
    },
    {    
        question:"Which of the following is the purpose of constructing an SCM system?",  
        options: [
            "a) To evaluate the current strengths and weaknesses of a company, and decide the companies to partner with to complement the weaknesses", 
            "b) To reduce the product distribution inventory and improve customer satisfaction by mutually sharing and managing information such as production, inventory, and sales of products between departments and companies related to processes from production to consumption of products ", 
            "c) To clarify where the value provided to customers is generated in the series of corporate activities such as procurement, development, manufacturing, sales, and service", 
            "d) To enable a company that produces and sells many types of products to determine the most efficient and effective combination of manufacturing and selling products in order to maximize profits"
        ],
        answer:"b) To reduce the product distribution inventory and improve customer satisfaction by mutually sharing and managing information such as production, inventory, and sales of products between departments and companies related to processes from production to consumption of products "
    },
    {    
        question:" Which of the following is the most appropriate description of the API economy? ",  
        options: [
            "a) It is a mechanism where services with a higher added value are provided over the Internet by linking the services that are provided by a range of providers.", 
            "b) It is a mechanism for a copyright holder to release the source code for software for free via the Internet, etc.", 
            "c) It is a mechanism for streamlining work such as routine administrative work by using a software robot.", 
            "d) It is a mechanism for the distributed management of transaction history with multiple systems."
        ],
        answer:"a) It is a mechanism where services with a higher added value are provided over the Internet by linking the services that are provided by a range of providers."
    },
    {    
        question:"Which of the following is the situation where an improvement can be expected by installing a Material Requirements Planning (MRP) system?",  
        options: [
            "a) Design drawings are managed on both electronic files and hard copies, so design change history cannot be accurately known.", 
            "b) Information concerning materials and their quantities required for manufacturing is complicated, so it is easy to miscalculate order quantities, and production is being adversely affected.", 
            "c) There are many design changes, so production efficiency does not improve. ", 
            "d) High-mix, low-volume production is adopted, so the cost of installing production equipment is increasing. "
        ],
        answer:"b) Information concerning materials and their quantities required for manufacturing is complicated, so it is easy to miscalculate order quantities, and production is being adversely affected."
    },
    {    
        question:" Which of the following is a technology that is defined by some international standards and used for contactless IC cards, such as tickets for public transport?",  
        options: ["a) IrDA","b) RFID","c) Bluetooth","d) Wi-Fi"],
        answer:"b) RFID"
    },
    {    
        question:"Among the characteristics required for an embedded system, which of the following is the most appropriate terminology used when a certain process must be completed within a given period of time?",  
        options: ["a) Availability ","b) Reliability","c) Real-time ability","d) Serviceability"],
        answer:"c) Real-time ability"
    },
    {    
        question:"Which of the following is an appropriate explanation of CAD? ",  
        options: [
            "a) Education with the use of computers", 
            "b) Manufacturing with the use of computers ", 
            "c) Design and drafting with the use of computers", 
            "d) Software design, development, and maintenance with the use of computers"
        ],
        answer:"c) Design and drafting with the use of computers"
    },
    {    
        question:"The capability of Shogi (Japanese chess game) software is improved until it beats a professional player. Which of the following is the most appropriate technology that acts as the core for improvement of the capability of the Shogi software?",  
        options: ["a) VR ","b) ER ","c) EC ","d) AI "],
        answer:"d) AI "
    },
    {    
        question:" Which of the following is software for performing basic control of hardware mounted on a gaming console, household appliances, etc.? ",  
        options: ["a) Groupware","b) Shareware","c) Firmware ","d) Middleware "],
        answer:"c) Firmware "
    },
    {    
        question:" Which of the following is the most appropriate diagram representing the flow of business operations after concurrent engineering is applied? Here, the arrows in the diagram show the flow of business operations, and each activity name is displayed on top.",  
        options: [
            "img/q(92)_a.png", 
            "img/q(92)_b.png", 
            "img/q(92)_c.png", 
            "img/q(92)_d.png"
        ],
        answer:"img/q(92)_d.png"
    },
    {    
        question:" Which of the following is an appropriate purpose of installing groupware?",  
        options: [
            "a) To provide basic hardware control to such equipment as PCs and peripheral devices", 
            "b) To enhance the overall work efficiency of an organization by providing an environment for collaborative work", 
            "c) To enhance the organization’s Internet security by implementing a solution that combines both hardware and software into a single security product ", 
            "d) To shorten the period of system development and improve the efficiency of maintenance by installing a suite of packaged software "
        ],
        answer:"b) To enhance the overall work efficiency of an organization by providing an environment for collaborative work"
    },
    {    
        question:"Which of the following is the most appropriate description concerning the role of CIO?",  
        options: [
            "a) Making an audit of the company from an objective standpoint in order to check if there is any problem with business operations or IT control works effectively ", 
            "b) Playing a leading role in planning and execution of an information strategy for implementing a business strategy", 
            "c) Establishing a personnel system for implementing a business strategy, and controlling overall administrative operations such as understanding the actual situation of services ", 
            "d) Improving the efficiency of allocating company funds, and ensuring the accuracy of financial accounting"
        ],
        answer:"b) Playing a leading role in planning and execution of an information strategy for implementing a business strategy"
    },
    {    
        question:"Which of the following is a term that means that the development and operation of a system is farmed out to an overseas company or an overseas subsidiary?",
        options: [
            "a) Hosting", 
            "b) Offshore outsourcing", 
            "c) Onshore outsourcing ", 
            "d) System integration "
        ],
        answer:"b) Offshore outsourcing"
    },
    {    
        question:"SOA (Service Oriented Architecture) is a concept of constructing a system by combining services. Which of the following is an appropriate merit of using SOA? ",  
        options: [
            "a) The processing speed of the system is improved.", 
            "b) The security of the system is strengthened.", 
            "c) The system users do not need education or training.", 
            "d) Flexiblility can be achieved for the system."
        ],
        answer:"d) Flexiblility can be achieved for the system."
    },
    {    
        question:" For the procurement of a system, which of the following is an appropriate combination of the words or terms corresponding to blanks A and B?",  
        image:"img/q(97).png",
        options: [
            "a) ", 
            "b) ", 
            "c) ", 
            "d) "
        ],
        answer:"a) "
    },
    {    
        question:"When the software life cycle is divided into the planning process, requirements definition process, development process, and operation process, which of the following is an appropriate activity in the requirements definition process? ",  
        options: [
            "a) Business process and system transition", 
            "b) Computerization planning", 
            "c) Software detailed design", 
            "d) Stakeholders’ needs identification"
        ],
        answer:"d) Stakeholders’ needs identification"
    },
    {    
        question:"Which of the following is an appropriate approver for the optimization plan of the overall information system of a company?",  
        options: [
            "a) CIO", 
            "b) Head of RFP creation department", 
            "c) Head of the business operations department handling the mission-critical system", 
            "d) System development project manager"
        ],
        answer:"a) CIO"
    },
    {    
        question:"Which of the following is the most appropriate term that refers to the goals for development that must be achieved by 2030 adopted by the United Nations in order to achieve a sustainable world? ",  
        options: [
            "a) SDGs ", 
            "b) SDK ", 
            "c) SGA", 
            "d) SGML "
        ],
        answer:"a) SDGs "
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


