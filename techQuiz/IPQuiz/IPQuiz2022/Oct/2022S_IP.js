const quizData = [
    {
        question: "Japanese restaurants in Sapporo and Japanese restaurants in Hakodate are to be searched for together. Which of the following is the logical expression that represents the search condition?",
        
        options: ["a) (“Sapporo” AND “Hakodate”) AND “Japanese restaurant”",
             "b) (“Sapporo” AND “Hakodate”) OR “Japanese restaurant”",
              "c) (“Sapporo” OR “Hakodate”) AND “Japanese restaurant”",
               "d) (“Sapporo” OR “Hakodate”) OR “Japanese restaurant”"],
        answer: "c) (“Sapporo” OR “Hakodate”) AND “Japanese restaurant”"
    },
    {
        question: "Which of the following is always true for two (2) sets A and B? Here, (X Y) represents the set that contains only the elements that are in both X and Y (intersection set), and (X Y) represents the set that contains all of the elements that are in at least one of X or Y (union set).",
        
        options: ["a) (A B) is a subset of the complement of (A B).",
             "b) (A B) is a subset of A.",
              "c) (A B) is a subset of (A B).",
               "d) (A B) is a subset of the complement of A."],
        answer: "c) (A B) is a subset of (A B)."
    },
    {
        question: "Which of the following is the binary result of the multiplication of binary 1011 and binary 101?",
        options: ["a) 1111", "b) 10000", "c) 101111", "d) 110111"],
        answer: "d) 110111"
    },
    {
        question: "Q4. When a chairperson and a secretary are selected from three (3) candidates with a method that allows dual roles, there are three (3) ways for the selection of a single chairperson and three (3) ways for the selection of a secretary, so in total, there are nine (9) combinations for the selection of a chairperson and a secretary. When a chairperson and a secretary are selected from five (5) candidates with a method that allows dual roles, how many combinations for the selection are there?",
       
        options: ["a) 5", "b) 10", "c) 20", "d) 25"],
        answer: "d) 25"
    },
    {
        question: "In a queue, three (3) elements 33, 27, and 12 are enqueued in this order. After the element 45 is enqueued to this queue, two (2) elements are retrieved (or dequeued). Which of the following is the second element to be retrieved?",
        
        options: ["a)12","b)27","c)33","d)45"],
        answer: "b)27"
    },
    {
        question: "Which of the following is an appropriate description concerning HTML?",
        options: ["a) It is a markup language that can specify the logical structure and layout of a web page by using tags.",
 "b) It is a script language that can describe the program or processing steps executed on a web browser.",
 "c) It is a communication protocol that is used between a web browser and a web server",
  "d) It is a markup language that enables users to describe the meaning and structure of data by defining their own unique tags."],
        answer: "a) It is a markup language that can specify the logical structure and layout of a web page by using tags."
    },
    {
        question:"Which of the following represents a processing procedure of a program graphically?",
      
        options: ["a) Gantt chart", "b) Data flow diagram", "c) Flowchart", "d) Radar chart"],
        answer: "c) Flowchart"
    },
    {
        question: "Which of the following is an appropriate description concerning machine language?",
       
        options: ["a) A program that is written in Fortran or C is converted into machine language and then executed. ",
 "b) Machine language is a high-level language.",
  "c) Machine language expresses a program with sequences of decimal numbers.",
   "d) Most of application software is still programmed in machine language."],
        answer: "a) A program that is written in Fortran or C is converted into machine language and then executed.  "
    },
    {
        question: "As shown in Figure 1, there is a box that generates two (2) numerical values B1 and B2 when two (2) positive integers A1 and A2 are entered. B1 has the same value as A2, and B2 is the remainder of A1 divided by A2. As shown in Figure 2, when two (2) boxes are connected, and 49 is entered as A1 and 11 is entered as A2 in the left box, what is the value of B2 generated from the right box?",
        image: "img/Q(9).png",
        options: ["a) 1", "b) 2", "c) 4", "d) 5"],
        answer: "a) 1 "
    },
    {
        question: " Which of the following is an appropriate description of a dual-core processor?",
        options: ["a) Two (2) types of OS are installed on a single PC, and the PC is configured so that either OS can be booted.",
                  "b) Two (2) displays are connected to a single PC in order to have a single continuous wide display area across the two (2) displays.",
                  "c) Two (2) strips of memory with the same standard and capacity are combined, and the effective speed of data transfer is increased by accessing each strip concurrently.", 
                  "d) The integrated circuits of two (2) processors are implemented on a single LSI package, and the two (2) processors can execute separate instructions concurrently"],
        answer: "d) The integrated circuits of two (2) processors are implemented on a single LSI package, and the two (2) processors can execute separate instructions concurrently"
    },
    {
        question: "Which of the following is an appropriate description concerning the primary and secondary cache memory that a CPU is equipped with?",
        options: [
            "a) The primary cache memory has larger capacity than the secondary cache memory.", 
            "b) The secondary cache memory is slower than the main memory in writing and reading.", 
            "c) When the CPU reads data, it first accesses the primary cache memory, and then it accesses the secondary cache memory if the data is not available.", 
            "d) All of the data that is required for a process needs to be present on the primary or secondary cache memory when a program starts."
        ],
        answer: "c) When the CPU reads data, it first accesses the primary cache memory, and then it accesses the secondary cache memory if the data is not available."
    },
    {
        question: "Which of the following is an appropriate description concerning a device driver that enables the use of peripheral devices with a PC?",
        options: [
            "a) When a hard disk drive is initialized and the operating system is reinstalled, it is necessary to reinstall device drivers that were installed separately to the operating system.", 
            "b) When new application software is installed, it is necessary to reinstall all device drivers that this software uses.", 
            "c) Even if a device driver is no longer required, a user cannot delete the device driver once it is installed.", 
            "d) It is only necessary to install one (1) device driver for a printer to use all printers regardless of manufacturer or model."],
        answer: "a) When a hard disk drive is initialized and the operating system is reinstalled, it is necessary to reinstall device drivers that were installed separately to the operating system."
    },
    {
        question: " Which of the following is a chip that is used in image processing in devices such as PCs and smartphones, and is also used for large amount of calculation processing in AI?",
        options: ["a) AR " , "b) DVI", "c) GPU", "d) MPEG"],
        answer: "c) GPU"
    },
    {
        question: "The system configurations A through C are made up by connecting multiple identical devices. Which of the following is a list where A through C are sorted in descending order of availability? Here, represents a device. The parallel connection requires only one (1) of the devices to be functional, while the series connection requires all devices to be functional.",
        image: "img/Q(14).png",
        options: [
            "a) A, B, C", 
            "b) B, A, C", 
            "c) C, A, B", 
            "d) C, B, A"],
        answer: "d) C, B, A"
    },
    {
        question: "Which of the following includes all the appropriate measures to enable the normal execution of processing even in the event of a failure in part of a system?",
        image: "img/Q(15).png",
        options: ["a) (1), (3)", "b) (1), (4) ", "c) (2), (3)", "d) (2), (4)"],
        answer: "b) (1), (4)  "
    },
    {
        question: "Among the methods I through III for handling multiple hard disks as one (1) logical disk, which of the following lists all and only the methods that can recover data even if one of the constituent hard disks fails?",
        image: "img/Q(16).png",
        options: ["a) I, II", "b) I, II, III", "c) I, III", "d) II, III"],
        answer: "c) I, III "
    },
    {
        question: ". Spreadsheet software is used to predict sales according to the weather. The probability for the weather type (sunny, cloudy, rainy) on the day to be predicted and the predicted sales amount by weather type for each product is entered into the worksheet below. An expression is entered in cell E4 to calculate the predicted sales amount on the day for Product A, and this is copied to cells E5 through E6 and used. Under these conditions, which of the following is an appropriate expression to be entered in cell E4? Here, to obtain the predicted sales amount on the day for each product, the probability for each weather type is multiplied by the predicted sales amount for each of weather type, and then these values are added up",
        image: "img/Q(17).png",
        options: ["a) B2*B4+C2*C4+D2*D4", "b) B$2*B4+C$2*C4+D$2*D4", "c) $B2*B$4+$C2*C$4+$D2*D$4", "d) $B$2*$B$4+$C$2*$C$4+$D$2*$D$4"],
        answer: "b) B$2*B4+C$2*C4+D$2*D4"
    },
    {
        question: " Which of the following is an OS function that executes multiple application programs concurrently on a single PC, such as when a file is downloaded from a web site while data is processed with spreadsheet software?",
        options: [
            "a) Virtual reality", 
            "b) Dual core", 
            "c) Dual system", 
            "d) Multitasking"
        ],
        answer: "d) Multitasking"
    },
    {
        question: "Which of the following is an advantage of using OSS (Open Source Software)?",
        options: [
            "a) Technical support is provided free of charge from the developer at the time of installation.", 
            "b) The software is not prone to infection of viruses, as the source code is not released", 
            "c) Compensation can be received for damages caused by defects in the software. ", 
            "d) The source code can be modified to fit the environment of the user in accordance with the license conditions."],
        answer: "d) The source code can be modified to fit the environment of the user in accordance with the license conditions."
    },
    {
        question: " Multiple files stored on a hard disk are used in work, from Monday to Friday. In order to handle failure of the hard disk, the data is backed up to another hard disk after the end of each day’s work. When the backup has following conditions, what is the total time required (in minutes) to perform backups of data from Monday to Friday?",
        image: "img/Q(20).png",
        options: [
            "a) 25", 
            "b) 35", 
            "c) 50", 
            "d) 150"],
        answer: "c) 50"
    },
    {
        question: "The tax-inclusive prices of products A and B are calculated by using two (2) tax rates that are set in cells D2 and E2 below. The correct expression that should be entered in cell D4 is $B4*(1.0+D$2), but a wrong expression $B4*(1.0+$D$2) was entered. When the expression that was entered in cell D4 is copied to cells D5, E4, and E5, which of the following is the numeric value that is displayed in cell E5?",
        image: "img/Q(21).png",
        options: [
            "a) 525", 
            "b) 550", 
            "c) 630", 
            "d) 660"],
        answer: "c) 630"
    },
    {
        question: " . When directories d1 and d2 are placed on a web server as shown in the figure, which of the following descriptions specifies the reference of the web page file f2.html on directory d2 from the web page file f1.html on directory d1 (current directory)? Here, the reference method of files is as follows",
        image: "img/Q(22).png",
        options: ["a) ./d2/f2.html", "b) ./f2.html ", "c) ../d2/f2.html", "d) d2/../f2.html"],
        answer: "c) ../d2/f2.html"
    },
    {
        question: " Which of the following is an appropriate description of a blade server?",
        options: [
            "a) It uses multiple board-type computers equipped with CPU and memory, housed in a dedicated body", 
            "b) It enables the use of office software, e-mail software, etc. as web services over the Internet. ", 
            "c) It is embedded in equipment such as home appliances or automobiles.", 
            "d) It supports handwriting input function by using a liquid crystal display with a touch panel."],
        answer: "a) It uses multiple board-type computers equipped with CPU and memory, housed in a dedicated body"
    },
    {
        question: "With regard to the colors printed by a printer, theoretically, what color is formed when cyan, magenta, and yellow are mixed together by subtractive color mixing?",
        options: [
            "a) Blue", 
            "b) Red", 
            "c) Black",
            "d) Green"
        ],
        answer: "c) Black"
    },
    {
        question: "Which of the following is an appropriate description of raster graphics, which is a method of handling the graphics that is used as a collection of points called pixels in painting software?",
       
        options: ["a) It is widely used in CAD.",
             "b) The color and brightness can be adjusted for each pixel.",
              "c) The file size is constant regardless of the level of resolution.",
               "d) No jaggies are visible at the edges of shapes even upon enlargement."],
        answer: "b) The color and brightness can be adjusted for each pixel."
    },
    {
        question: "Which of the following is an appropriate description of a rollback in transaction processing? ",
      
        options: ["a) When a transaction attempts to update shared data, it prohibits another transaction from updating that data.",
 "b) When a transaction has been successfully processed, it commits an update to the database.",
 "c) When a transaction failed for some reason, it reverts the database to the state before the transaction was started.",
  "d) It combines multiple tables into one (1) table by using mutually related columns as keys."],
        answer: "c) When a transaction failed for some reason, it reverts the database to the state before the transaction was started."
    },
    {
        question: "There is the “Employee” table and the “Department” table in a relational database. The “Employee” table and the “Department” table are joined, and employees who live in prefectures different from the prefectures that their departments are located in are extracted. How many employees are extracted?",
        image: "img/Q(27).png",
        options: ["a) 1", "b) 2", "c) 3", "d) 4"],
        answer: "b) 2"
    },
    {
        question: "Which of the following is an appropriate purpose of conducting data normalization when a relational database is constructed?",
        
        options: ["a) Providing redundancy to data in order to detect data errors",
             "b) Eliminating data inconsistencies and duplications in order to make it easy to maintain and manage the data",
              "c) Unifying the character code of data in order to improve data reliability and storage efficiency",
 "d) Losslessly compressing data in order to improve access efficiency"],
        answer: "b) Eliminating data inconsistencies and duplications in order to make it easy to maintain and manage the data"
    },
    {
        question: "In a relational database, which of the following is the reason for a primary key being specified?",
        
        options: [
            "a) To clearly indicate that something is not subject to an arithmetic operation", 
            "b) To enable the search of the column that is specified as the primary key", 
            "c) To prevent another table from referencing the table ", 
            "d) To enable any record in the table to be uniquely identified"
        ],
        answer: "d) To enable any record in the table to be uniquely identified"
    },
    {
        question: " Which of the following is a protocol that is used for synchronization of the internal clock of a computer via a network with a server that holds a reference clock?",
        options: ["a) FTP", "b) NTP ", "c) POP", "d) SMTP"],
        answer: "b) NTP  "
    },
    {
        question: "Which of the following is an appropriate description of online storage?",
        options: [
            "a) A virtual private network that is established via the Internet",
            "b) A service that lends disk space for saving data via the Internet",
            "c) Software that is distributed or sold via the Internet",
            "d) A computer game that multiple users can simultaneously play via the Internet"
        ],
        answer: "b) A service that lends disk space for saving data via the Internet"
    },
    {
        question: "Which of the following mobile communication systems not only offers higher communication speed than LTE, but also allows more devices to connect and has less lag time?",
        options: ["a) Block chain", "b) MVNO","c) 8K","d) 5G"],
        answer: "d) 5G"
    },
    {
        question: "Which of the following is the appropriate combination of terms or phrases to be inserted into blanks A and B in the description below concerning NAT?",
        image: "img/Q(33).png",
        options: ["a)", "b) ", "c) ", "d) "],
        answer: "b) "
    },
    {
        question: "Which of the following is an appropriate characteristic of LPWA?",
        options: ["a)It is a technology concerning AI, and it enables a computer to acquire new knowledge, rules, and other such things from entered data without any explicit programming of rules nor other such things.",
             "b) It is a wireless network that covers a broad area while consuming only small electrical power, and although its communication speed is lower than a cellphone system, its low electricity consumption enables it to run on common batteries for several years and its broad area coverage enables communication of up to several kilometers.", 
             "c) It is a distributed ledger technology that creates a sequence of data item containing transaction records and embeds in each data item the hash value of the previous data item in order to associate data items with each other and make it difficult to tamper with them without causing any inconsistencies, and therefore increases the reliability of data.", 
             "d) It is an encryption method for wireless LANs, and is recommended for use instead of WEP because WEP is known to have vulnerabilities."],
        answer: "b) It is a wireless network that covers a broad area while consuming only small electrical power, and although its communication speed is lower than a cellphone system, its low electricity consumption enables it to run on common batteries for several years and its broad area coverage enables communication of up to several kilometers. "
    },
    {
        question: "Which of the following is an appropriate description concerning biometric authentication?",
        options: [
            "a) If margin for error in matching with the authentication data is made larger, both the possibility of rejecting an authorized person and the possibility of accepting an unauthorized person become smaller.", 
            "b) It eliminates the need to remember IDs and passwords for authentication, and the need to carry keys or cards.", 
            "c) It cannot be used with other authentication methods such as passwords or tokens.", 
            "d) The effective period in which retina pattern and finger vein pattern can be used for authentication is short because they change greatly over years."],
        answer: "b) It eliminates the need to remember IDs and passwords for authentication, and the need to carry keys or cards."
    },
    {
        question: "Which of the following is an explanation of spyware?",
        options: [
            "a) It is a scam where money is demanded just by viewing a web site or clicking an image on it.", 
            "b) It is a mechanism where an attacker packages attack tools such as log removal or a back door and hides them in a PC so that the attacker can use them after intrusion.", 
            "c) It is a program that infects a large number of PCs and performs actions such as simultaneous attacks by illegitimately operating the PCs as instructed over a network ", 
            "d) It is a program that is installed without the user knowing and collects information such as the user’s personal information and access history"
        ],
        answer: "d) It is a program that is installed without the user knowing and collects information such as the user’s personal information and access history "
    },
    {
        question: " Which of the following is an appropriate disposal method for media that stores confidential information to ensure that information leakage does not occur?",  
        options: [
            "a) CDs and DVDs are destroyed and then are disposed of.", 
            "b) A PC is disposed of with its CPU being destroyed. ", 
            "c) USB memory is disposed of with its files and folders being deleted.", 
            "d) Paper documentation is not reused as memo paper and is sealed in a confidential envelope and then is disposed of together with general trash. "],
        answer: "a) CDs and DVDs are destroyed and then are disposed of."
    },
    {
        question: " Among confidentiality, integrity, and availability, which of the following is the list that contains all and only the properties that are lost in the information security incident below?",  
        image: "img/Q(38).png",
        options: ["a) Confidentiality",
 "b) Confidentiality, integrity", 
 "c) Integrity, availability", 
 "d) Availability"],
        answer: "c) Integrity, availability"
    },
    {
        question: "When a user accessed the URL in the body of an e-mail message with a PC, the message shown in the figure appeared on the screen and the PC was locked. Which of the following is used in this attack?",  
        image: "img/Q(39).png",
        options: ["a) Keylogger", "b) Spyware", "c) Bot", "d) Ransomware"],
        answer: "d) Ransomware"
    },
    {
        question: "Which of the following is an appropriate example of activities conducted in A (Act) in the organizations that operate ISMS on the basis of the PDCA model?",  
        options: ["a) Changing the server monitoring method as a corrective action for the results of the business operations audit ",
             "b) Objectively evaluating the server administrator’s work details by a third party",
              "c) Identifying the information assets in the server room",
               "d) Monitoring the operation of the server according to the defined operational procedure"],
        answer: "a) Changing the server monitoring method as a corrective action for the results of the business operations audit "
    },
    {
        question: ". It is reported that WEP suffers from the problem that ciphers are decoded in a short time. Which of the following is a stronger wireless LAN encryption method?",  
        options: [
            "a) ESSID", 
            "b) HTTPS", 
            "c) S/MIME", 
            "d) WPA2"
        ],
        answer: "d) WPA2"
    },
    {
        question: " When a smartphone is used, which of the following is an appropriate preventive measure for shoulder surfing?",  
        options: [
            "a) Always using the latest OS", 
            "b) Turning off the GPS function", 
            "c) Affixing a privacy screen protector on the screen", 
            "d) Attaching a strap to prevent fall and thef"],
        answer: "c) Affixing a privacy screen protector on the screen"
    },
    {
        question: "Which of the following is used to confirm that there is no falsification of the content of an e-mail?",  
       
        options: [
            "a) IMAP",
            "b) SMTP", 
            "c) Information security policy", 
            "d) Digital signature"
            ],
        answer: "d) Digital signature"
    },
    {
        question: " Which of the following is not an appropriate security control concerning human resources as a security risk treatment in ISMS?",  
        
        options: ["a) Performing background checks and other such checks for all candidates for recruitment in accordance with the relevant laws, regulations, and ethics ",
             "b) Defining official disciplinary proceedings for employees who violate information security, and ensuring employees’ awareness of them",
              "c) Requesting that all employees at a company comply with information security according to organizational policies and procedures, but not making any request to companies that work is outsourced to", 
              "d) For employees who are leaving a company, defining obligations concerning information security valid after they leave the company, informing the employees about their obligations, and having them fulfill their obligations after they leave"],
        answer: "c) Requesting that all employees at a company comply with information security according to organizational policies and procedures, but not making any request to companies that work is outsourced to"
    },
    {
        question: "A document file that is stored on a file server is directly edited on a PC and then an attempt is made to overwrite the file, but the message “You do not have permission, so the file cannot be saved” is displayed. Which of the following is the appropriate combination of permissions that were set for the document file and the folder that it is stored in?",  
        image: "img/Q(45).png",
        options: ["a) ", "b) ", "c)  ", "d) "],
        answer: "b) "
    },
    {
        question: ". Mr. A, a developer, is analyzing and verifying the internal structure of a program in order to determine whether input data is processed as intended. Which of the following is the test that Mr. A is currently conducting?",  
        options: ["a) System test", "b) Top-down test", "c) Black box test", "d) White box test"],
        answer: "d) White box test"
    },
    {
        question: ". Estimation methods for system development include the analogy-based method, the bottom-up method, and the FP (Function Point) method. Which of the following is an appropriate explanation of the FP method?",  
        options: ["a) It is a method for the estimation of person-hours for an overall system on the basis of an estimation of person-hours for each activity identified with WBS.",
 "b) It is a method for the estimation of system scale by measurement of the number of functions on the basis of factors such as number of input screens, output reports and files that are processed by the system.",
 "c) It is a method for the estimation of the total person-hours for development from the standard lines of code to be developed per person per month after the estimation of the lines of code of a system’s programs",
  "d) It is a method for the estimation of the person-hours for system development that takes into account the differences with similar systems developed in the past."],
        answer: "b) It is a method for the estimation of system scale by measurement of the number of functions on the basis of factors such as number of input screens, output reports and files that are processed by the system."
    },
    {
        question: "Which of the following is an appropriate test for a user to confirm by himself/herself whether the delivered software satisfies the requirements?",  
        options: ["a) Acceptance test",
             "b) Integration test", 
"c) System test",
"d) Unit test"],
        answer: "a) Acceptance test"
    },
    {
        question: "A company contracted to develop an accounting system and held meetings with the customer to clarify the types of required financial statements and the target processing time from accounting data confirmation to the output of the financial statements. Which of the following is the appropriate process for this activity?",   
      
        options: ["a) System test", "b) System requirements definition", "c) Software detailed design", "d) Software architecture design"],
        answer: "b) System requirements definition"
    },
    {
        question: " Which of the following is an appropriate characteristic of agile development?",  
        
        options: ["a) Suitable for development with a large project team", "b) Preparing detailed documents with focus on the design document ", "c) Focusing on contract negotiation rather than cooperation in terms of relationship with customers", "d) Flexibly responding to changes in requests as compared with waterfall development"],
        answer: "d) Flexibly responding to changes in requests as compared with waterfall development"
    },
    {
        question: "Project management knowledge areas are classified into project cost management, project scope management, project quality management, project risk management and other areas. Which of the following is an appropriate activity performed in project quality management?",  
        options: [
            "a) To define and manage necessary work procedures and the measure of performance level in order to comply with deliverable acceptance criteria", 
            "b) To manage a project so that it can be completed within the budget", 
            "c) To identify potential events that may have negative impact on a project, analyze them, plan responses, and conduct monitoring and control", 
            "d) To define and manage works that need to be performed for the success of a project"],
        answer: "a) To define and manage necessary work procedures and the measure of performance level in order to comply with deliverable acceptance criteria"
    },
    {
        question: "In an arrow diagram that shows system development, if activities A and D are delayed for three (3) days in total, what is the delay in the entire project?",  
        image: "img/Q(52).png",
        options: [
            "a)1", 
            "b) 2", 
            "c) 3", 
            "d) 4"],
        answer: "a)1"
    },
    {
        question: "There are negative and positive risks in a project. Among the treatment of risks in scheduling, which of the following corresponds to a treatment of a positive risk?",  
        options: ["a) Having all members receive vaccination before influenza spreads to prevent the members from not being able to work",
             "b) Reducing the entire project duration by carrying out tasks for creating software programs in parallel when the overall cost can be reduced by advancing the schedule",
              "c) Securing replacement staff in advance in preparation for delay due to unexpected withdrawal of staff",
               "d) Purchasing insurance in preparation for payment of a penalty due to delivery delay"],
        answer: "b) Reducing the entire project duration by carrying out tasks for creating software programs in parallel when the overall cost can be reduced by advancing the schedule"
    },
    {
        question: "In a development project for a system, there is a plan to create 36 programs with the same size. It was first planned to assign only Mr. A who can create six (6) programs per week, but the plan was changed and it was decided to assign two (2) people: Mr. A, and Mr. B who has half the productivity of Mr. A. When the cost per week for Mr. A and Mr. B is 300 thousand yen and 200 thousand yen respectively, how much is the change in the cost as compared to the original plan? Here, Mr. A and Mr. B perform activities in parallel, and the efficiency of Mr. A and Mr. B are always fixed.",  
        options: [
            "a) A decrease of 800 thousand yen", 
            "b) A decrease of 300 thousand yen",
            "c) An increase of 200 thousand yen", 
            "d) An increase of 1,200 thousand yen"
        ],
        answer: "c) An increase of 200 thousand yen"
    },
    {
        question: "Activities in project management include project time management, project cost management, and project human resource management, and also include project integration management that coordinates those activities. In a system development project, which of the following is an appropriate action in project integration management in a case where it has been decided that the delivery should be advanced?",  
        options: [
            "a) Considering a change in the sequence of tasks in order to shorten the critical path", 
            "b) Comparing and considering a staff increase and the cost for reducing the scheduled duration, as well as the number of days that can be reduced", 
            "c) Estimating the impact on the cost for a case where the scheduled duration is reduced", 
            "d) Reviewing timings when staff members are assigned and revising the staff plan"],
        answer: "b) Comparing and considering a staff increase and the cost for reducing the scheduled duration, as well as the number of days that can be reduced"
    },
    {
        question: "When the outsourced development project of a system has passed beyond its halfway mark, there is a request from the outsourcer for adding a function to the system. Which of the following is the most appropriate action of the project manager?",  
        options: [
            "a) Accepting the request and securing the budget and staff members", 
            "b) Declining the request by explaining that changes after halfway mark are generally not accepted", 
            "c) Taking into account the impact on the cost and schedule, and following the procedure of change management", 
            "d) Quickly updating the baseline of scope since only the project scope will be affected"],
        answer: "c) Taking into account the impact on the cost and schedule, and following the procedure of change management"
    },
    {
        question: " A company orders information system to an overseas vendor under a contract for work. Which of the following is an appropriate activity that is performed as project procurement management by the company?",  
        
        options: ["a) When a defect is found after the acceptance of delivery, even if not indicated in the contract, the company instructs the vendor to examine not only the defect but similar defects and fix them.", "a) When a defect is found after the acceptance of delivery, even if not indicated in the contract, the company instructs the vendor to examine not only the defect but similar defects and fix them.", "c) After the start of development, the company has the procurement detail such as the development scope, specifications, and work contents, etc. agreed upon by the vendor in writing.", "d) At the time of signing the contract, the company agrees upon in writing with the vendor the documents to be delivered and the rules for changing specifications during development."],
        answer: "d) At the time of signing the contract, the company agrees upon in writing with the vendor the documents to be delivered and the rules for changing specifications during development."
    },
    {    
        question: ". When the operation of an information system is outsourced, which of the following is created in order to agree on the quality level for the service to be provided between the outsourcing party and the contractor?",  
        options: [
            "a) ASP", 
            "b) ISP", 
            "c) RFP", 
            "d) SLA"],
        answer:  "d) SLA "
    },
    {    
        question: "Which of the following is an appropriate measure of facility management that maintains and protects facilities and equipment of information systems?",  
        options: ["a) Reviewing the fuel replenishment plan in order to maintain the appropriate duration that power can be generated with a private power generation system", 
            "b) Introducing asset management software in order to manage all the company’s software centrally", 
            "c) Standardizing how to set a screen saver in order to prevent unauthorized use of the PCs", 
            "d) Reviewing the network firewall settings in order to enhance the prevention of unauthorized network access to the information systems"],
        answer: "a) Reviewing the fuel replenishment plan in order to maintain the appropriate duration that power can be generated with a private power generation system"
    },
    {    
        question: "Which of the following is the purpose of incident management?",  
        options: [
            "a) Ensuring that activities are performed for migrating new software that is used in an IT service to a production environment", 
            "b) Managing a series of activities for handling a change request about an IT service", 
            "c) Recovering an IT service immediately when any disruption to the IT service occurs, and making the impact to business as small as possible", 
            "d) Managing the information on the items that are required for providing an IT service and on their combinations"
        ],
        answer: "c) Recovering an IT service immediately when any disruption to the IT service occurs, and making the impact to business as small as possible"
    },
    {    
        question: ". In the PDCA cycle of service level management, which of the following is implemented as C (Check)?",  
       
        options: [
            "a) Providing services on the basis of the SLA", 
            "b)Preparing an improvement plan for services on the basis of the report and review of service provision results", 
            "c) Agreeing upon the desired service quality on the basis of the service requirements and the service improvement plan, and preparing an SLA", 
            "d) Agreeing upon the desired service quality on the basis of the service requirements and the service improvement plan, and preparing an SLA"
        ],
        answer: "d) Agreeing upon the desired service quality on the basis of the service requirements and the service improvement plan, and preparing an SLA"
    },
    {    
        question: "For a system that accepts a query from a user in the input area on the web site, which of the following is the most appropriate mechanism to efficiently and promptly respond to the query in an interactive and automated manner?",  
        options: [
            "a) Recommendation", 
            "b) Chatbot", 
            "c) Escalation", 
            "d) FAQs"
        ],
        answer:"b) Chatbot"
    },
    {    
        question: " Which of the following is the most appropriate control on the development and implementation of an information systems strategy for improving the competitiveness of a company? ",  
        options: [
            "a) IT governance", 
            "b) Compliance", 
            "c) Systems audit", 
            "d) Pr oject management "
        ],
        answer:"a) IT governance"
    },
    {    
        question: " Which of the following is an appropriate explanation of monitoring in internal control?",  
       
        options: [
            "a) It is a process of continuously evaluating if internal control is working effectively.", 
            "b) It is a process of promoting compliance to the laws and other regulations concerning internal control.", 
            "c) It is a process of constructing an organization for internal control. ", 
            "d) It is a process of analyzing the risks that hinder internal control."
        ],
        answer:"a) It is a process of continuously evaluating if internal control is working effectively."
    },
    {    
        question: " . With the purpose of shortening the business processing time, the throughput of a business system was improved. When a systems audit is performed to evaluate if the improvement is effective, which of the following is the appropriate information to be requested by the system auditor to the operations department? ",  
        options: [
            "a) Operation statistics material", 
            "b) System operations organization", 
            "c) System operations manual", 
            "d) User manual"
        ],
        answer:"a) Operation statistics material"
    },
    {    
        question: "  Which of the following refers to a technique by which several persons come together and give their ideas freely with prioritizing quantity over quality of ideas without criticizing each other so as to solve a problem?",  
        options: [
            "a) Brainstorming", 
            "b) Benchmarking", 
            "c) Role playing", 
            "d) Work design"
        ],
        answer:"a) Brainstorming"
    },
    {    
        question: " Which of the following is the scope that the CFO, one of the positions involved in corporate management, bears responsibility for?",  
        
        options: [
            "a) Technology", 
            "b) Finance", 
            "c) Information", 
            "d) Personnel"
        ],
        answer:"b) Finance"
    },
    {    
        question: "Among the phases of the PDCA cycle in corporate business operations, which of the following measures and evaluates the status of execution of operations on the basis of KPI?",  
        
        options: [
            "a) P", 
            "b) D", 
            "c) C ", 
            "d) A"],
        answer:"c) C "
    },
    {    
        question: " Retail company A is teaching the general distribution process for food products in an easily understandable manner at elementary schools near the company’s distribution center. Which of the following is an idea behind these activities by company A?",  
        options: [
            "a) CSR", 
            "b) Alliance", 
            "c) Core competence", 
            "d) Corporate governance"
        ],
        answer:"a) CSR"
    },
    {    
        question: "  The table below is a part of the ingredients table of a steamed meat dumplings lunch box. How many grams of meat is necessary to prepare 100 steamed meat dumplings lunch boxes? Here, the steamed meat dumplings lunch boxes do not contain any dish that uses meat other than the steamed meat dumplings, and there is no loss of ingredients in the preparing process.",  
        image: "img/Q(70).png",
        options: [
            "a) 1,200", 
            "b) 3,000 ", 
            "c) 6,000 ", 
            "d) 30,000"
        ],
        answer:"c) 6,000  "
    },
    {    
        question: "If risk assessment is divided into three (3) processes, which of the following is the third process besides risk identification and risk evaluation?",  
        options: [
            "a) Risk transfer", 
            "b) Risk avoidance", 
            "c) Risk reduction", 
            "d) Risk analysis"
        ],
        answer:"d) Risk analysis"
    },
    {    
        question:" Which of the following is an expression that calculates operating profit?",  
        options: [
            "a) (Gross profit) − (Selling, general, and administrative expense)", 
            "b) (Sales) − (Cost of sales)", 
            "c) (Current profits) + (Extraordinary profit) − (Extraordinary loss)", 
            "d) (Current net profit before tax) − (Corporate tax, residential tax, and business tax)"
        ],
        answer:"a) (Gross profit) − (Selling, general, and administrative expense) "
    },
    {    
        question:" Which of the following is an appropriate example of an initiative based on the Green IT concept?",  
        options: [
            "a) Use of displays that reduce eye fatigue from blue LED light", 
            "b) Installation of air shower at the server room entrance and exit", 
            "c) Construction of backup systems in preparation for disasters", 
            "d) Setting a policy of viewing materials on PC screens, limiting their printing on paper"
        ],
        answer:"d) Setting a policy of viewing materials on PC screens, limiting their printing on paper"
    },
    {    
        question:"  Which of the following is an example of a Non-Disclosure Agreement (NDA)?",  
        options: [
            "a) A contract specifying the service content to be provided, which is agreed between the service provider and the customer before the provision of the IT service", 
            "b) A contract specifying that the vendor of computer equipment bears the responsibility of transferring the property right, and that the buyer bears the responsibility of paying the charges.", 
            "c) A contract, specifying the obligation of the outsourcer and outsourcee to maintain confidentiality of the secret information of a party that becomes known to the other party during system development", 
            "d) A contract specifying that an outsourcee to whom the installation of a general-purpose software package has been outsourced performs the task at the outsourcee’s own discretion and responsibility, and receives payment upon the completion of the task"
        ],
        answer:"c) A contract, specifying the obligation of the outsourcer and outsourcee to maintain confidentiality of the secret information of a party that becomes known to the other party during system development"
    },
    {    
        question:"Which of the following is appropriate as an expected advantage of the adoption of ISO 9001 by companies?",  
        options: [
            "a) The companies' trade procedures will be standardized, leading to increased efficiency and the avoidance of non-tariff barriers.", 
            "b) Technical specifications will be standardized in the industry, and increase in product quality and expansion of markets will move forward. ", 
            "c) Methods for handling information assets will be standardized and the quality of information security will increase.", 
            "d) Business operations concerning quality management will be standardized, and the quality and efficiency of management will increase."
        ],
        answer:"d) Business operations concerning quality management will be standardized, and the quality and efficiency of management will increase."
    },
    {    
        question:" Which of the following is an international standard for environmental management systems developed by ISO?",  
        options: [
            "a) ISO 9000", 
            "b) ISO 14001", 
            "c) ISO/IEC 20000", 
            "d) ISO/IEC 27000"
        ],
        answer: "b) ISO 14001"
    },
    {    
        question:"  Which of the following examples of the sending of e-mail is inappropriate from the standpoint of the protection of personal information?",  
        options: [
            "a) In responding to an e-mail asking questions about a product, you placed the e-mail addresses of multiple customers in the “CC” field as you want these customers to read the response.", 
            "b) You created one (1) e-mail message for each of your top 10 customers with the largest amount of mail-order purchases, in order to inform each customer of a corresponding prize.", 
            "c) You sent an e-mail message with information on an alumni meeting, and addressed the message to the e-mail addresses of all members listed in the alumni association directory that is distributed to all members.", 
            "d) When you were arranging a special spring exhibition, you placed the e-mail addresses of selected members in the “BCC” field of an e-mail message and sent the message soliciting exhibits."
        ],
        answer:"a) In responding to an e-mail asking questions about a product, you placed the e-mail addresses of multiple customers in the “CC” field as you want these customers to read the response."
    },
    {    
        question:"  Mr. X stores images taken by a digital camera in a storage medium, inserts the storage medium in a printer, and prints them. It is possible to print the images without taking into consideration the manufacturer of the digital camera. Which of the following is the technical premise concerning image data that enables this?",  
        options: [
            "a) Commoditization ", 
            "b) Networking", 
            "c) Standardization", 
            "d) Ubiquity"
        ],
        answer:"c) Standardization"
    },
    {    
        question:" . In Company X, the experience and know-how of employees who have managed drainage treatment in the facility over a long period of time is documented and accumulated, and the accumulated experience and know-how is utilized on daily drainage treatment activities and design of new processing equipment. Which of the following is appropriate as a concept of this example?",  
        
        options: [
            "a) ERP ", 
            "b) SFA ", 
            "c) Supply chain management", 
            "d) Knowledge management"
        ],
        answer:"d) Knowledge management "
    },
    {    
        question:". Which of the following is a technique that analyzes the value of a product or service through the relationship between functionality and cost, and enhances that value through reduction in cost and increase in functionality and quality?",  
        options: [
            "a) Supply chain management", 
            "b) Knowledge management", 
            "c) Value engineering ", 
            "d) Reverse engineering"
        ],
        answer:"c) Value engineering  "
    },
    {    
        question:"As a method for a company to utilize the business resources of another company, there is a corporate acquisition and a corporate alliance. Which of the following lists all and only the general demerits of a corporate alliance in comparison with a corporate acquisition?",  
        image: "img/Q(81).png",
        options: [
            "a) I", 
            "b) I, II, III", 
            "c) I, III", 
            "d) II"
        ],
        answer:"d) II"
    },
    {    
        question:"Which of the following is an appropriate explanation of 3C analysis that is used to analyze a business environment?",  
        options: [
            "a) The analysis is performed from the three (3) perspectives of the customers, the competitors, and the company.", 
            "b) The analysis is performed from the three (3) perspectives of last purchase date, purchase frequency, and purchase amount.", 
            "c) The analysis is performed by decomposition into the three (3) elements of era, age, and generation. ", 
            "d) The analysis is performed by categorization into three (3) groups in descending order of total sales."
        ],
        answer:"a) The analysis is performed from the three (3) perspectives of the customers, the competitors, and the company."
    },
    {    
        question:"Which of the following is an appropriate description concerning a balanced scorecard (BSC)?",  
        options: [
            "a) It is a business management technique that converts a company or organization’s vision and strategy into specific actions from four (4) viewpoints (“financial viewpoint,” “customer viewpoint,” “business process viewpoint,” and “growth and learning viewpoint”).", 
            "b) It is an approach where the corporate activities of providing a product or service to customers are viewed as a chain of activities of procurement, development, manufacturing, sales, and service that adds and builds up value and costs in a sequential manner and produces the final “value” for the customer.", 
            "c) It is a business analysis technique for a company that produces and sells a wide variety of products and is involved in several businesses to determine the products and businesses’ combination that has the most efficient and effective distribution of management resources from a strategic perspective.", 
            "d) It is a business strategy technique for use in the evaluation of strengths, weaknesses, opportunities, and threats in projects, venture businesses, and other such activities by organizations and individuals that perform decision making in order to achieve a target."
        ],
        answer:"a) It is a business management technique that converts a company or organization’s vision and strategy into specific actions from four (4) viewpoints (“financial viewpoint,” “customer viewpoint,” “business process viewpoint,” and “growth and learning viewpoint”). "
    },
    {    
        question:"Which of the following often uses a chart with relative market share for the horizontal axis and market growth rate for the vertical axis, and analyzes the strategic positioning of a company’s products or business?",  
    
        options: [
            "a) ABC analysis", 
            "b) PPM", 
            "c) SWOT analysis", 
            "d) Value chain analysis"
        ],
        answer:"b) PPM"
    },
    {    
        question:" Which of the following is an appropriate purpose of Management Of Technology (MOT)?",  
        options: [
            "a) To improve the productivity by using mathematics and natural science in business administration and production management", 
            "b) To grow a company by effectively connecting technical innovation with the business of the company", 
            "c) To improve the quality of a company by ensuring that the employees put in efforts systematically to improve the quality of products", 
            "d) To improve the business process efficiency by acquiring the necessary techniques and knowledge from senior employees through actual business operations at the workplace"
        ],
        answer:"b) To grow a company by effectively connecting technical innovation with the business of the company"
    },
    {    
        question:" Which of the following is an appropriate case example that corresponds to traceability?",  
        options: [
            "a) Taking advantage of the Internet and web technology for the use of computers in education", 
            "b) Outsourcing all development to an external specialized company without placing any development department within one’s own company", 
            "c) Sharing knowledge and information among employees across the entire organization, and utilizing it effectively to improve business performance", 
            "d) Being able to check the history from production up to sales on the basis of the labels pasted on meat and fish products"
        ],
        answer:"d) Being able to check the history from production up to sales on the basis of the labels pasted on meat and fish products "
    },
    {    
        question:"Which of the following is a business objective that becomes possible to achieve with “the introduction of a POS system”?",  
        options: [
            "a) Improvement in the work productivity of salespersons and organizational strength of the sales department", 
            "b) Reduction in inventory volume of component parts and partly finished goods", 
            "c) Optimization of the series of processes from procurement to manufacturing, shipment, and sales", 
            "d) Improvement in the product lineup at each store and streamlining of ordering and inventory control"
        ],
        answer:"d) Improvement in the product lineup at each store and streamlining of ordering and inventory control"
    },
    {    
        question:" Which of the following is the most appropriate example of crowdfunding?",  
        options: [
            "a) A company provides a service that enables use of virtual storage on the Internet", 
            "b) A company collects investments from a large number of persons over the Internet.", 
            "c) A company provides monetary compensation for losses caused by cloudy and rainy weather.", 
            "d) A company develops a technique for discovering desired information from within large volumes of information, with a high degree of accuracy"
        ],
        answer:"b) A company collects investments from a large number of persons over the Internet."
    },
    {    
        question:" Which of the following corresponds to the lean production system of efficiently performing high-mix, high-volume production by incorporating production activities such as “just in time” and “kanban,” etc.?",  
        options: [
            "a) Not having a production line in one’s own company, and outsourcing production to another company", 
            "b) Ordering the components required in the production line such that they can be obtained at the time of their requirement, and thus maintaining an appropriate quantity of the in-process items", 
            "c) Producing the components for the delivery in excess of their predicted demand, and thus eliminating the unnecessary waiting time until delivery", 
            "d) Having one (1) person in charge of all processes from the start to the completion of manufacturing of a single product, and thus eliminating the transfer of in-process items during manufacturing"
        ],
        answer:"b) Ordering the components required in the production line such that they can be obtained at the time of their requirement, and thus maintaining an appropriate quantity of the in-process items"
    },
    {    
        question:" Which of the following terminologies refers to an initiative to develop unprecedented and innovative services by utilizing IT in the field of finance, such as a service provided by a bank where AI manages depositors’ assets automatically?",  
        options: [
            "a) FA", 
            "b) Fintech", 
            "c) OA", 
            "d) Sharing economy"
        ],
        answer:"b) Fintech "
    },
    {    
        question:"Which of the following is one of the technologies used in deep learning, and represents a mathematical model of the circuits in the human brain?",  
        options: [
            "a) Content delivery network", 
            "b) Storage area network", 
            "c) Neural network", 
            "d) Ubiquitous network"
        ],
        answer:"c) Neural network"
    },
    {    
        question:"Which of the following is an appropriate effect of CAD?",  
        options: [
            "a) It can identify the required volume of material, and place the optimum order.", 
            "b) It can automate production processes and remove the need for human work", 
            "c) It can manage the series of production processes in an integrated manner.", 
            "d) It can reuse design data and simplify the streamlining of work."
        ],
        answer:"d) It can reuse design data and simplify the streamlining of work. "
    },
    {    
        question:" Which of the following is an appropriate description of “cloud computing”?",  
        options: [
            "a) A communication protocol of the Internet", 
            "b) A service model for providing computer resources", 
            "c) A method of software development that can flexibly support changes in the specification", 
            "d) A standard of electronic data exchange that is used in electronic commercial transactions"
        ],
        answer:"b) A service model for providing computer resources"
    },
    {    
        question:" Which of the following is the most appropriate term for information in large quantities and in diverse forms that has real-timeness and is expected to help obtain knowledge useful for decision-making?",  
        options: [
            "a) Big data", 
            "b) Diversity", 
            "c) Core competence", 
            "b) Diversity"
        ],
        answer:"a) Big data"
    },
    {    
        question:"Attempts are being made to streamline the functions and services of cities and regions and make them more advanced with the use of ICT in order to solve regional problems, and vitalize regions. Which of the following is the most appropriate term to describe such a solution for community development? ",  
        
        options: [
            "a) Capacity", 
            "b) Smart city", 
            "c) Diversity", 
            "d) University"
        ],
        answer:"b) Smart city"
    },
    {    
        question:" Which of the following is a term for a model where through a service or mechanism matching users and providers, idle assets, such as vehicles, residences, and clothes, that are owned by individuals or companies are lent to others, or services such as providers doing shopping on behalf of another person or giving language lessons in their spare time are provided?",  
        options: [
            "a) Cloud computing ", 
            "b) Sharing economy", 
            "c) Telework", 
            "d) Work-sharing"
        ],
        answer:"b) Sharing economy"
    },
    {    
        question:" The table below shows the evaluated scores of the proposals of four (4) vendors from the viewpoints of management, technology, and price. When each score of the management viewpoint, technology viewpoint, and price viewpoint is weighted, and the vendor with the highest total score is selected as the supplier, which of the following vendors is selected?",  
        image: "img/Q(97).png",
        options: [
            "a) Vendor A ", 
            "b) Vendor B", 
            "c) Vendor C", 
            "d) Vendor D"
        ],
        answer:"a) Vendor A "
    },
    {    
        question:"When the system life cycle is divided into the planning process, requirements definition process, development process, and operation/maintenance process, which of the following is the appropriate process to clarify the functions of the system for the implementation of business operations?",  
        options: [
            "a) Planning process", 
            "b) Requirements definition process ", 
            "c) Development process", 
            "d) Operation/maintenance process"
        ],
        answer:"b) Requirements definition process  "
    },
    {    
        question:"At power companies, the amount of electricity consumed by each household is measured remotely by communicating with electrical meters that are connected to the Internet, instead of measured by meter readings by a person. Which of the following is a term that represents the mechanism where a range of devices are connected to the Internet and utilize information in cases such as this?",  
       
        options: [
            "a) EDI", 
            "b) IoT", 
            "c) ISP", 
            "d) RFID"
        ],
        answer:"b) IoT"
    },
    {    
        question:"Which of the following are international development targets that are composed of 17 objectives set by the United Nations in order to achieve a sustainable world?",  
        options: [
            "a) COP21", 
            "b) SDGs", 
            "c) UNESCO", 
            "d) WHO"
        ],
        answer:"b) SDGs"
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


