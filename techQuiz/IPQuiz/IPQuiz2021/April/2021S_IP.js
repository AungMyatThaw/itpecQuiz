const quizData = [
    {
        question: "A search is performed by specifying a character string comprised of multiple alphabetic characters and one delimiter character “.” (period). An “*” (asterisk) represents an arbitrary character string with zero or more characters, and a “?” (question mark) represents an arbitrary single character. Which of the following character strings matches the character string represented below?",
        image: "img/Q(1).png",
        options: ["a) XY.XYY", "b) XXX.YY", "c) XYX.YXY", "d) YXYX.YXY"],
        answer: "c) XYX.YXY"
    },
    {
        question: "There are five (5) lamps arranged in line. Each of them can be turned on and off independently. How many patterns are there where two (2) or more lamps are turned on? Here, the pattern where all lamps are turned on is counted as one (1) and the pattern where any one of them is turned on is counted as five (5).",
        image: "img/Q(2).png",
        options: ["a) (not A) and B and C", "b) (not A) and (B or C)", "c) (not A) or (B and C)", "d) (not A) or (B or C)"],
        answer: "a) (not A) and B and C"
    },
    {
        question: "Which of the following is obtained by multiplying the binary value 10110 by three (3)?",
        options: ["a) 111010", "b) 111110", "c) 1000010", "d) 10110000"],
        answer: "c) 1000010"
    },
    {
        question: "When a sound is recorded in a computer file, it is to be stored as a series of 8-bit encoded data. When the same sound source is sampled at the same sampling frequency and then encoded as a series of 16-bit data in lieu of 8-bit data, which of the following is an appropriate description concerning this encoding",

        options: ["a) The amplitude of the sound can be recorded more finely. ",
            "b) When the recording time is the same, the amount of data becomes smaller.",
            "c) The CPU load required to process the recorded data decreases ",
            "d) The upper limit of the frequency that can be recorded becomes higher."],
        answer: "a) The amplitude of the sound can be recorded more finely.  "
    },
    {
        question: "There is a program that displays text in accordance with the specifications below. When the original text described below is displayed, in what point size does the program display the underlined character string? Here, the first character of the original text is displayed in 10 points",
        image: "img/Q(5).png",
        options: ["a) 10", "b) 11", "c) 12", "d) 13"],
        answer: "d) 13"
    },
    {
        question: ". Among the program control structures, which of the following is classified as a “while-type” loop structure?",
        options: ["img/Q(6)a.png", "img/Q(6)b.png", "img/Q(6)c.png", "img/Q(6)d.png"],
        answer: "img/Q(6)c.png"
    },
    {
        question: ". A stack is a first-in last-out data structure. By using the stack, a device changes the order of data received from the right side and sends it to the left side, as shown in the figure below. There are three types of operations available on the device, as described below.",
        image: "img/Q(7).png",
        options: ["a) X, Z, Y", "b) Y, Z, X", "c) Z, X, Y", "d) Z, Y, X"],
        answer: "c) Z, X, Y"
    },
    {
        question: "Among the items A through C described below about programming languages, which of the following is the list that contains all of the appropriate items?",
        image: "img/Q(8).png",
        options: ["a) A ", "b) A, C ", "c) B ", "d) B, C"],
        answer: "d) B, C"
    },
    {
        question: "There is a desk that can hold at most four (4) files. On this desk, six (6) files A through F are used for a job. When the fifth file needs to be put on the desk, the file with the longest time since the last use among the four (4) will be put in a drawer. If the files are put on the desk and referenced in order of A, B, C, D, E, C, B, D, F, B, which of the following is the last file to be put in the drawer?",

        options: ["a) A", "b) B", "c) D", "d) E"],
        answer: "d) E"
    },
    {
        question: " Which of the following is the most appropriate description concerning a multi-core processor?",
        options: ["a) Several microprocessors are installed in one PC with the purpose of improving the reliability of the processing results by performing the same processing at the same time in each processor.",
            "b) If the structure and clock frequency of the arithmetic logical unit are the same, a quad core processor has four times as much processing power as a dual core processor",
            "c) The clock frequency is temporarily increased according to the load of the processing so as to achieve high-speed processing.",
            "d) A single CPU has several processing circuits that perform operations, and each processing circuit performs different processing at the same time with the purpose of improving the processing power."],
        answer: "a) Several microprocessors are installed in one PC with the purpose of improving the reliability of the processing results by performing the same processing at the same time in each processor."
    },
    {
        question: "Which of the following is an appropriate explanation of a hot plug?",
        options: [
            "a) It is an index that shows the throughput of a CPU in terms of how many billions of instructions it can execute per second",
            "b) It is a frequency signal that synchronizes the arithmetic processing of CPUs.",
            "c) It is a storage unit that is placed between a CPU and a main memory, and has a higher reading and writing speed than the main storage unit.",
            "d) It is an arithmetic logical unit that is used instead of a CPU to accelerate processing such as image processing for 3D graphics."
        ],
        answer: "d) It is an arithmetic logical unit that is used instead of a CPU to accelerate processing such as image processing for 3D graphics."
    },
    {
        question: " Which of the following is an appropriate explanation of GPU? ",
        options: [
            "Which of the following is an appropriate description concerning CPU performance?",
            "b) It is a frequency signal that synchronizes the arithmetic processing of CPUs.",
            "c) It is a storage unit that is placed between a CPU and a main memory, and has a higher reading and writing speed than the main storage unit.",
            "d) It is an arithmetic logical unit that is used instead of a CPU to accelerate processing such as image processing for 3D graphics"],
        answer: "c) It is a storage unit that is placed between a CPU and a main memory, and has a higher reading and writing speed than the main storage unit."
    },
    {
        question: "  Which of the following is an appropriate description concerning CPU performance?",
        options: ["a) Compared with a 64-bit CPU, a 32-bit CPU is able to process a longer data at one time",
            "b) The less the capacity of cache memory in the CPU, the faster the processing speedb",
            "c) For a CPU of a given architecture, raising the clock frequency increases processing speed",
            "d) A dual core CPU can perform a greater number of processes simultaneously than a quad core CPU can."],
        answer: "d) A dual core CPU can perform a greater number of processes simultaneously than a quad core CPU can."
    },
    {
        question: "When the processing speed of the system overall is constrained because of slow processing speed in one of the components, which of the following is a term for the component of a system that is causing the problem?",
        options: [
            "a) Throughput",
            "b) Defragmentation",
            "c) Flowchart",
            "d) Bottleneck"],
        answer: "a) Throughput"
    },
    {
        question: "Which of the following is an appropriate characteristic of a dual system?",

        options: ["a) It provides two (2) sets of systems that perform the same processing and checks the correctness of the processing by comparing the results. If one of the systems fails, it isolates the failed system and continues the processing.",
            "b) The same two (2) devices are used, so that the processing capability can be increased to double that of a simplex system. ",
            "c) It provides a currently used system for performing online processing and also a backup system that is made on standby while performing batch processing. In the event of a failure in the currently used system, it switches to the backup system, starts the online processing on it, and continues the service",
            "d) It connects multiple devices in series and configures them in such a way that the load of each function is distributed among them, so that processing capability is high. But if any one of the devices fails, it becomes unable to provide the service."],
        answer: "a) It provides two (2) sets of systems that perform the same processing and checks the correctness of the processing by comparing the results. If one of the systems fails, it isolates the failed system and continues the processing. "
    },
    {
        question: "Which of the following is an appropriate explanation of parallel processing?",
        options: ["a) It is the division of a series of processing into processing units that can be executed simultaneously, and the execution of these on multiple CPUs.",
            "b) It is the execution of multiple related processes that are grouped together as a single process.",
            "c) It is the performing of business logic and database processes on the server side, and the performing of user interface processes on the client side.",
            "d) It is the division of processing time for a single CPU into short units, and the sequential allocation of these to multiple applications for execution."],
        answer: "a) It is the division of a series of processing into processing units that can be executed simultaneously, and the execution of these on multiple CPUs."
    },
    {
        question: "Which of the following is a purpose of the virtual memory system that is one of the functions provided by an OS?",

        options: ["a) To prevent an application program from accessing the protected area on main memory             used by the OS",
            "b) To reduce electricity consumption during the idle state, by stopping the power supply after data is written from main memory to external storage",
            "c) To make it possible to execute a program even if the program requires more storage capacity than main memory",
            "d) To accelerate CPU processing with the assistance of a higher speed storage device than main memory"],
        answer: "c) To make it possible to execute a program even if the program requires more storage capacity than main memory"
    },
    {
        question: " Which of the following is an appropriate explanation of the virtualization of a server?",
        options: [
            "a) It is a technique for virtually creating computer-generated worlds or immersive environments that users can interact with.",
            "b) It is a technique for virtually operating the GUI of a remote computer connected via a network by using a local computer.",
            "c) It is a technique for virtually implementing and operating two or more computers on a single computer.",
            "d) It is a technique for virtually allocating more memory space than the capacity of main memory by using a particular part of auxiliary storage."
        ],
        answer: "c) It is a technique for virtually implementing and operating two or more computers on a single computer."
    },
    {
        question: "Which of the following is an appropriate combination of the terms and explanations Athrough D concerning the file system of a hierarchical directory structure?",
        image: "img/Q(19).png",
        options: [
            "a)",
            "b)",
            "c)",
            "d)"],
        answer: "c), "
    },
    {
        question: "Which of the following is an appropriate description concerning the use of OSS (Open Source Software)?",

        options: [
            "a) OSS users have an obligation to pay the developer the fee for the software.",
            "b) OSS users are allowed neither to sell the OSS nor to distribute it at no fee.",
            "c) OSS cannot be used in the field of genetic research.",
            "d) Software derived from the published OSS can be made available as OSS."],
        answer: "d) Software derived from the published OSS can be made available as OSS."
    },
    {
        question: "Which of the following is an appropriate explanation concerning a deadlock?",
        options: [
            "a) It is a state in which the processes of a computer are prohibited from getting intentional or accidental access to information that usually must not be accessed",
            "b) It is a state in which, if the authentication of a user fails more than the limited number of times, the user is prohibited from accessing the computer",
            "c) It is a state in which, when shared resources are exclusively used, two or more processes are endlessly waiting for each other to release the lock of a shared resource.",
            "d) It is a state in which processes in the ready state under a multi-programming environment have used up the CPU time allocated by the OS."],
        answer: "c) It is a state in which, when shared resources are exclusively used, two or more processes are endlessly waiting for each other to release the lock of a shared resource."
    },
    {
        question: "here is a system where a full backup is made after closing time every Sunday, and an incremental backup is made after closing time on Monday through Saturday. On a Wednesday, a failure happened during business hours, so a decision was made to restore data to the state at the time of closing on Tuesday by using backup files. Which of the following lists all the necessary backup files for restoring data? Here, an incremental backup file means a backup file that contains only the data that has been modified since the previous backup file (a full backup file or an incremental backup file) was made.",

        options: ["a) A full backup file on Sunday, incremental backup files on Monday and Tuesda",
            "b) A full backup file on Sunday, an incremental backup file on Tuesday",
            "c) Incremental backup files on Monday and Tuesday",
            "d) An incremental backup file on Tuesday"],
        answer: "a) A full backup file on Sunday, incremental backup files on Monday and Tuesda"
    },
    {
        question: " . If data is repeatedly added to and deleted from a hard disk on a PC, data may not be stored in consecutive areas on the hard disk. When no measures are taken, which of the following can occur?",
        options: [
            "a) Viruses cannot be detected",
            "b) Data cannot be written correctly.",
            "c) Data cannot be read correctly",
            "d) Stored data cannot be read quickly"],
        answer: "d) Stored data cannot be read quickly"
    },
    {

        question: " Which of the following is an appropriate concept of universal design?",
        options: [
            "a) Ensuring that, once a product is designed, the design remains usable without being changed for a long period of time",
            "b) Ensuring that products keep the same levels of performance and quality regardless of where they are manufactured in the world",
            "c) Making the design as simple and easy as possible in order to reduce the manufacturing cost",
            "d) Making products usable to many people regardless of differences in age, culture, and ability as well as whether disability is present"],
        answer: "d) Making products usable to many people regardless of differences in age, culture, and ability as well as whether disability is present"
    },
    {
        question: "Which of the following is an appropriate description concerning the characteristics of video distribution using streaming?",
        options: [
            "a) The data to be distributed must be stored on the server beforehand, and videos of events and sports cannot be distributed while they are being shot.",
            "b) Deterioration in video quality due to partial loss of data in reception can be completely eliminated.",
            "c) Warm-up time is not required for starting playback of a video, and therefore, the viewer can immediately start watching the video.",
            "d) Rather than waiting for the entire video data to be downloaded, playback starts as soon as some data has been received"
        ],
        answer: "d) Rather than waiting for the entire video data to be downloaded, playback starts as soon as some data has been received"
    },
    {
        question: "In DBMS, which of the following is a function for maintaining consistency of data by preventing the occurrence of conflicts due to simultaneous access to the data ? ",

        options: ["a) Normalization ", "b) Deadlock", "c) Exclusive control", "d) Restore "],
        answer: "c) Exclusive control"
    },
    {
        question: "Which of the following is an appropriate description concerning foreign keys in a relational database?",

        options: ["a) A property held by the foreign key is called a unique constraint",
            "b) Duplicate values cannot be set in the fields that are set as foreign keys.",
            "c) Multiple foreign keys can be defined in a single table",
            "d) Multiple fields cannot be collectively set as a single foreign key"],
        answer: "c) Multiple foreign keys can be defined in a single table"
    },
    {
        question: "The result of the Information-Technology Engineers Examination by some of the employees of a company is shown below. In order to manage this table with a relational database, which of the following is an appropriate method to partition the table into two (2) tables? Here, this company has employees with the same name.",
        image: "img/Q(28).png",
        options: ["img/Q(28)a.png", "img/Q(28)b.png", "img/Q(28)c.png", "img/Q(28)d.png"],
        answer: "img/Q(28)a.png"
    },
    {
        question: "In a relational database, when (A B) and (A B) are performed on table A and table B shown below, which of the following is an appropriate combination of the resulting two tables among the three tables P, Q, and R? Here, (A B) shows the union of A and B, and (A B) shows the intersection of A and B.",
        image: "img/Q(29).png",
        options: [
            "a)",
            "b) ",
            "c)  ",
            "d) "
        ],
        answer: "c) "
    },
    {
        question: " Three PCs and an Internet-capable TV (television) set are to be connected to the Internet by using a hub and a router that has a firewall function. Which of the following is an appropriate connection that enables the firewall function of the router to be used for all the traffic between the devices and the Internet? Here, “FW” in the figure indicates the firewall function.",
        options: ["img/Q(30)a.png", "img/Q(30)b.png ", "img/Q(30)c.png ", "img/Q(30)d.png "],
        answer: "img/Q(30)a.png"
    },
    {
        question: "Which of the following is an appropriate effect of replacing IPv4 with IPv6?",
        options: [
            "a) Problems no longer occur when two or more devices that can be accessed directly from the Internet have the same IP address.",
            "b) The shortage of IP addresses that can be used on the Internet is resolved",
            "c) It becomes possible to use optical fibers for connecting to the Internet.",
            "d) The communication speed on the Internet is increased."
        ],
        answer: "b) The shortage of IP addresses that can be used on the Internet is resolved"
    },
    {
        question: "Which of the following is a mechanism by which, if an e-mail is sent to a specific e-mail address, the e-mail with the same content is distributed to multiple e-mail addresses that have been registered to the specific address?",
        options: ["a) Web mail",
            "b) Chain mail",
            "c) Mailing list",
            "d) Reply mail"],
        answer: "c) Mailing list"
    },
    {
        question: " Mr. A specifies the destinations for an e-mail as below and sends it. Mr. Y receives this e-mail, and sends a reply to all the recipients and the sender listed in the received e-mail. Among Mr. A, Mr. X, and Mr. Z, which of the following is the list that includes all and only the destinations of the e-mail that Mr. Y sends?",
        image: "img/Q(33).png",
        options: ["a) A", "b) A, X", "c) A, X, Z", "d) X, Z"],
        answer: "b) A, X "
    },
    {
        question: "Which of the following is the most appropriate explanation of a WAN?",
        options: ["a) It is a virtual private network that uses the Internet",
            "b) It is a network that connects countries, rather than a network that connects various regions within a country. ",
            "c) It is a network that uses a network service from a network operator for connecting geographically separated locations, for example, a head office and branch offices.",
            "d) It is a brand name that is granted only to devices where interconnectivity has been confirmed, by the industrial association that promotes products that support the IEEE 802.11 standard for wireless LANs."],
        answer: ") It is a network that uses a network service from a network operator for connecting geographically separated locations, for example, a head office and branch offices."
    },
    {
        question: "Which of the following is an appropriate example of biometric authentication?",
        options: [
            "a) Authentication by drawing a line connecting some of the nine (9) dots displayed on a screen",
            "b) Authentication by a password and a user ID that is unique for each individual",
            "c) Authentication by recognizing the shape of a signature, the stroke order and pen pressure used in signing, etc. using a reader device",
            "d) Authentication by selecting, from among multiple illustrations, a combination of illustrations that the user memorizes"],
        answer: "c) Authentication by recognizing the shape of a signature, the stroke order and pen pressure used in signing, etc. using a reader device"
    },
    {
        question: "The authentication technology is classified into three (3) types, namely authentication based on one’s possession, authentication based on physical characteristics, and authentication based on one’s memory. Which of the following is an appropriate combination of the implementation examples (1) through (3) and their classifications?",
        image: "img/Q(36).png",
        options: [
            "a)",
            "b)",
            "c) ",
            "d)"
        ],
        answer: "b) "
    },
    {
        question: " Which of the following is appropriate as the characteristic of single sign-on?",
        options: [
            "a) It is an effective countermeasure for information leakage because data is processed and stored on a server side, and data does not remain on devices.",
            "b) It implements high availability because when the data is saved, it is automatically distributed and stored on multiple disks",
            "c) It implements high confidentiality because it employs authentication that uses fingerprint and iris in addition to a password.",
            "d) It implements high convenience because once a user is authenticated, he or she is allowed to use multiple services without any more authentication."],
        answer: "d) It implements high convenience because once a user is authenticated, he or she is allowed to use multiple services without any more authentication."
    },
    {
        question: "Among descriptions A through D concerning how to conduct information security education to employees, which of the following contains all and only the appropriate descriptions?",
        image: "img/Q(38).png",
        options: ["a) A, B, D",
            "b) A, C, D",
            ") A, D",
            ") A, D"],
        answer: "a) A, B, D"
    },
    {
        question: "When information security measures are grouped into three (3) categories of technical security measures, human security measures, and physical security measures, which of the following is an appropriate example of physical security measures?",

        options: ["a) Making a non-disclosure agreement with employees",
            "b) Attaching a digital signature to an e-mail when it is sent",
            "c) Storing a notebook PC in a place that can be locked",
            "d) Recommending password change on a regular basis"],
        answer: "c) Storing a notebook PC in a place that can be locked"
    },
    {
        question: ". Which of the following is an authentication method where a user uses information that differs each time and is generated with a device called a token or other such device?",
        options: ["a) Digital signature", "b) Password cracking", "c) Password policy", "d) One time password"],
        answer: "d) One time password"
    },
    {
        question: "Which of the following is a technique for taking advantage of psychological weaknesses or carelessness in order to, for example, improperly obtain confidential information?",
        options: [
            "a) DoS attack",
            "b) SQL injection",
            "c) Social engineering",
            "d) Buffer overflow"
        ],
        answer: "c) Social engineering"
    },
    {
        question: "Which of the following is a term for software that encrypts files on a computer in order to make them unusable, and demands money or other valuables in exchange for the decryption key?",
        options: [
            "a) Keylogger",
            "b) Ransomwar",
            "c) Rootkit",
            "d) Worm"],
        answer: "b) Ransomwar"
    },
    {
        question: "Which of the following is an appropriate description concerning password management?",

        options: [
            "a) A password that is used for a business system should not be used for any private Internet services.",
            "b) The initial password should not be changed until a user becomes familiar with the operation of login to the system ",
            "c) Several passwords should be prepared and used in rotation.",
            "d) A password should be stored in a plaintext file and saved on a PC."
        ],
        answer: "a) A password that is used for a business system should not be used for any private Internet services. "
    },
    {
        question: " Which of the following is an appropriate description concerning a scheme for authenticating a user of a system?",

        options: ["a) A scheme where authentication is accomplished by utilizing a password that can be used only once is called a single sign-on. ",
            "b) A scheme where the use of multiple servers or applications is authorized by being authenticated once is called a one time password.",
            "c) A scheme where a sequence of numbers or characters that are placed on positions that the user remembers within a table on the screen is entered as a password is called a matrix authentication",
            "d) A scheme where authentication of the user is accomplished by using fingerprints, voiceprint, or other physical characteristics is called a challenge-response authentication"],
        answer: "c) A scheme where a sequence of numbers or characters that are placed on positions that the user remembers within a table on the screen is entered as a password is called a matrix authentication"
    },
    {
        question: "When information is classified and managed according to the protection level in information security, which of the following lists all and only the appropriate methods for the management?",
        image: "img/Q(45).png",
        options: ["a) I, III", "b) I, IV", "c) II, III ", "dd) II, I"],
        answer: "c) II, III "
    },
    {
        question: "A system migration plan was created for the migration from an existing system to a new system. Which of the following is an appropriate item to be described in the system migration plan?",
        options: ["a) System selection policy", "b) Schedule for parallel operation of the old and new systems", "c) Evaluation criteria for the quality of the deliverables", "d) The work history of project members "],
        answer: "b) Schedule for parallel operation of the old and new systems"
    },
    {
        question: "Mr. A, a participant in system testing, has no access to the internal structure of the system or software and prepares terminal input data and form output data for major transactions in the department for purpose of verification. Which of the following is the testing technique that Mr. A is going to implement?",
        options: [") Inspection",
            "b) Walk-through",
            "c) Black-box testing ",
            "d) White-box testing"],
        answer: "c) Black-box testing "
    },
    {
        question: "The processes of system development include system requirements definition, systems architecture design, system integration testing, and software acceptance. Which of the following is an activity that is performed in system requirements definition?",
        options: ["a) The party to which development is outsourced uses the software under the same conditions as the actual production environment in order to determine if it runs correctly.",
            "b) A system test plan is created, and a test environment is prepared.",
            "c) The functions and performance required of the system are clarified",
            "d) A program is created and test results are reviewed according to the evaluation criteria"],
        answer: "c) The functions and performance required of the system are clarified"
    },
    {
        question: "Which of the following corresponds to software maintenance?",

        options: ["a) A response time that was measured in a system test did not satisfy the requirement, so tuning was performed on the software",
            "b) As a result of a software acceptance test, a fault was found, so the orderer requested the developer to fix the software",
            "c) A function was found missing in a unit test of a program, so the function was added to the program.",
            "d) A defect was reported on software that is running on a production system, so the software was modified."],
        answer: "d) A defect was reported on software that is running on a production system, so the software was modified."
    },
    {
        question: "When system development is conducted sequentially from upstream to downstream processes, a significant amount of rework might arise in the test phase that is performed by the system user. For the purpose of preventing such rework, which of the following is the method that is used to create trial models in an early stage and clarify user requirements?",

        options: ["a) Object-oriented approach", "b) Spiral model", "c) Data oriented approach ", "d) Prototyping"],
        answer: "d) Prototyping"
    },
    {
        question: "Among the following lists of descriptions A through D, which is the set that contains all appropriate descriptions concerning quality management in information systems?",
        image: "img/Q(51).png",
        options: [
            "a) A, B, D",
            "b) A, C",
            "c) A, C, D",
            "d) C, D"],
        answer: "c) A, C, D "
    },
    {
        question: "After the start of a project, the scope is defined by collecting the requirements for the project. Which of the following is the most appropriate purpose of defining the scope?",
        options: [
            "a) To clarify the activities to be implemented in the project",
            "b) To create the action plan against the risk that has been realized in the project",
            "c) To create an action plan for the delay of the project",
            "d) To create the objectives of the project"],
        answer: "a) To clarify the activities to be implemented in the project"
    },
    {
        question: "When the system development activities are implemented, a plan is set up to complete the activities in 20 days by six (6) members having the same productivity. However, the plan is changed to have the activities finished in 15 days, and new members are added. When the productivity of the new members is half of the initially planned members, what is the minimum number of new members necessary for finishing the activities in 15 days?",
        options: ["a) 1", "b) 2", "c) 4", "d) 6"],
        answer: "c) 4"
    },
    {
        question: "The response measure for risks in a project can be classified as avoidance, mitigation, acceptance, and transfer. In a system development project, the design and development process is to be subcontracted to Company A. In a previous system development, Company A suffered a delay for delivery, so it is also possible that a delay will occur in this project. Which of the following is a response measure that corresponds to mitigation of the risk of a delay?",
        options: [
            "a) The inclusion of causal analysis of the previous delay at Company A, and preventive measures on the basis of this analysis into the development plan",
            "b) Cancellation of subcontracting to Company A",
            "c) Inclusion in the contract of the term of the compensation for damages by Company A in the event of a delay",
            "d) Inclusion in the project of the cost of measures in response to a delay"
        ],
        answer: "a) The inclusion of causal analysis of the previous delay at Company A, and preventive measures on the basis of this analysis into the development plan"
    },
    {
        question: "In a project where 60 programs are created with a budget of 18 million yen, when the status of the project was checked 20 days after the start of the project, it was found that 40 out of the 60 programs have been completed at a cost of 15 million yen. If the project continues to proceed at the same pace, what is the excess of cost over budget? Here, the scale of all programs and productivity are the same ",
        options: [
            "a) 3 million yen",
            "b) 4.5 million yen ",
            "c) 6 million yen",
            "d) 7.5 million yen"],
        answer: "b) 4.5 million yen "
    },
    {
        question: "When the management of a project is divided into progress management, quality management, and cost management, which of the following is most appropriate to be confirmed in progress management?",
        options: [
            "a) Whether an integration test is conducted exhaustively with a variety of viewpoints",
            "b) The degree that an increase in cost is expected in the future",
            "c) The degree of the impact that is made on the entire schedule by a delay in an activity",
            "d) Whether a procedure has been established for a design review for finding defects in the design"],
        answer: "c) The degree of the impact that is made on the entire schedule by a delay in an activity"
    },
    {
        question: " In an activity that is performed in the planning phase of a project, which of the following is a method that identifies all of the activities that need to be performed in the project and organizes them in a hierarchical structure, as well as clarifying the work units to be managed in the project?",

        options: ["a) CRM", "b) ERP", "c) PPM", "d) WBS"],
        answer: "d) WBS"
    },
    {
        question: "Which of the following is an appropriate explanation of facility management?",
        options: [
            "a) It refers to the monitoring of compliance with SLAs and their periodical reviewing, for the purpose of maintaining and managing IT service levels.",
            "b) It refers to a method for optimizing ownership, operation, maintenance, etc. of buildings and physical IT infrastructures from a business standpoint. ",
            "c) It refers to the continuous improvement of business processes to increase the quality of products and services.",
            "d) It refers to sharing and managing information across the departments and the companies that participate in the series of processes from component procurement to manufacturing, distribution, and sales."],
        answer: "b) It refers to a method for optimizing ownership, operation, maintenance, etc. of buildings and physical IT infrastructures from a business standpoint. "
    },
    {
        question: "In release management of IT service management, the items which have been planned and approved according to the change management are implemented in the production environment. Which of the following is an appropriate description concerning release management?",
        options: ["a) Information may be provided after the completion of release to users and operation managers concerned with changes.",
            "b) During release planning, cases when activities cannot be completed within the planned time period are also taken into account.",
            "c) Since there is no possibility of new failures after release, it is not necessary to make preparations.",
            "d) Regardless of the scale of release, the release is implemented simultaneously for all users."],
        answer: "b) During release planning, cases when activities cannot be completed within the planned time period are also taken into account."
    },
    {
        question: "Which of the following is the most appropriate explanation of what a service desk implements?",
        options: [
            "a) It eliminates the root cause of an incident and prevents the recurrence of the incident",
            "b) It installs updated software in order to prevent the recurrence of an incident. ",
            "c) It performs centralized management of changes in a service",
            "d) It receives and records inquiries from users"
        ],
        answer: "d) It receives and records inquiries from users"
    },
    {
        question: "In order to provide a service that meets customer needs, which of the following is an appropriate approach in which an organization performs maintenance, management, and continuous improvement for operation of an information system?",

        options: [
            "a) IT governance",
            "b) IT service management",
            "c) Service desk",
            "d) Project management"
        ],
        answer: "b) IT service management"
    },
    {
        question: "In service level management concerning the degree of customer satisfaction with a service desk, which of the following is an action that falls under the “A” of the PDCA cycle?",
        options: [
            "a) The degree of customer satisfaction is surveyed in accordance with a plan.",
            "b) The method of measurement and the target value for the degree of customer satisfaction are defined.",
            "c) The variance between the measured value of the degree of customer satisfaction and its target value is analyzed.",
            "d) Improvement measures are performed on factors that the target is not achieved for."
        ],
        answer: "d) Improvement measures are performed on factors that the target is not achieved for."
    },
    {
        question: " Which of the following is the term for the assignment of employees’ role that applies mutual restraint among employees for the purpose of reducing the risk of misconduct or errors in work from the standpoint of internal control?",
        options: [
            "a) Delegation of authority",
            "b) Segregation of duties",
            "c) Monitoring",
            "d) Diversification of risk"
        ],
        answer: "b) Segregation of duties"
    },
    {
        question: " During a systems audit, systems auditors who are independent of the audit target inspect and evaluate the information systems comprehensively from an objective viewpoint. As a result of the systems audit requested by the management of a company, some problems are found in the effectiveness of the current information systems. Who are the most appropriate persons to whom the systems auditor gives advice and makes recommendations?",

        options: [
            "a) Stockholders",
            "b) Jurisdictional authority",
            "c) Management",
            "d) System users"
        ],
        answer: "c) Management"
    },
    {
        question: " Which of the following is an appropriate measure to implement internal controls function?",
        options: [
            "a) Avoiding creating a job description indicating the scope of work and roles ",
            "b) Avoiding creating a work handover document for a successor",
            "c) Avoiding processing purchasing and payment by the same person",
            "d) Avoiding separating team members for system development and system operation"
        ],
        answer: "c) Avoiding processing purchasing and payment by the same person"
    },
    {
        question: " A person wishes to start at point X, pass through all of points A, B, and C, and arrive at point Y. When the routes and the required times between points are as shown in the figure and the table, what is the shortest time in minutes from point X to point Y? Here, the points A, B, and C may be passed through in any order.",
        image: "img/Q(66).png",
        options: [
            "a) 110",
            "b) 130",
            "c) 140",
            "d) 150"
        ],
        answer: "b) 130"
    },
    {
        question: " Which of the following examples of capacity building and guidance for subordinates is classified as OJT?",

        options: [
            "a) A company made subordinates set career goals and make plans for achieving them",
            "b) With subordinates' careers in mind, a company made subordinates attend a manager development course hosted by the Personnel Department",
            "c) A company made subordinates take part in a new development project to improve their design capabilities.",
            "d) A company selected an externally hosted seminar matched to subordinates' fields of expertise and careers, and made the subordinates attend it."
        ],
        answer: "c) A company made subordinates take part in a new development project to improve their design capabilities."
    },
    {
        question: "An implementation plan for a company-wide information system that is consistent with the business strategy is to be created. Which of the following is the most appropriate person to take responsibility for this activity?",

        options: [
            "a) CIO",
            "b) CTO",
            "c) Head of the core business department ",
            "d) Person in charge of planning in the information systems department "
        ],
        answer: "a) CIO"
    },
    {
        question: "  Data of the defects and faults of products, complaints from customers, etc. are prepared and categorized according to their cause and situation. Which of the following represents the number of data in each category in descending order on a bar graph and the cumulative total on a line graph?",
        options: [
            "a) Control chart",
            "b) Tree diagram",
            "c) Pareto chart",
            "d) Matrix chart"
        ],
        answer: "c) Pareto chart"
    },
    {
        question: "  Which of the following is an appropriate way to brainstorm?",

        options: [
            "a) Asking participants to present feasible ideas and refrain from generating unrestrained ideas",
            "b) Proceeding with the session without blaming any member who creates an improved idea that takes advantage of another member’s idea ",
            "c) Proceeding with the session while selecting the ideas that are suitable to the theme",
            "d) Encouraging the criticism of ideas to pursue quality rather than quantity of ideas"
        ],
        answer: "b) Proceeding with the session without blaming any member who creates an improved idea that takes advantage of another member’s idea "
    },
    {
        question: "There are activities A, B, and C that use machines X and Y, and it is required in all activities that the machines are used in the sequence of machine X, machine Y. When the use times of machines X and Y in each activity are as shown in the table below, which of the following is the sequence of the activities where the total time required to complete the three (3) activities becomes minimum? Here, machines X and Y can be used in parallel as shown in the figure below, but two (2) or more tasks cannot be performed simultaneously with any machine.",
        image: "img/Q(71).png",
        options: [
            "a) A → B → C",
            "b) A → C → B",
            "c) C → A → B",
            "d) C → B → A "
        ],
        answer: "c) C → A → B"
    },
    {
        question: " A certain product’s sales plan and sales result are shown in the table below. What is the ratio in percentage of the profit result to the profit plan? Here, the decimal fractions of the ratio are truncated.",
        image: "img/Q(72).png",
        options: [
            "a) 77",
            "b) 99",
            "c) 110 ",
            "d) 129"
        ],
        answer: "a) 77"
    },
    {
        question: " Which of the following is the right to protect the content of user guides attached to software packages?",

        options: [
            "a) Industrial design right",
            "b) Trademark right",
            "c) Copyright",
            "d) Patent right "
        ],
        answer: "b) Trademark right"
    },
    {
        question: "  According to the ISO 9000 family, quality is defined as the “degree to which a set of inherent characteristics fulfills requirements.” When products are evaluated on the basis of this definition, which of the following is most appropriate as a product with good quality",
        image: "img/Q(74).png",
        options: [
            "a) ",
            "b) ",
            "c) ",
            "d) "
        ],
        answer: "b) "
    },
    {
        question: "According to the ISO 9000 family, quality is defined as the “degree to which a set of inherent characteristics fulfills requirements.” When products are evaluated on the basis of this definition, which of the following is most appropriate as a product with good quality?",
        options: [
            "a) A product having no customer complaints and a high level of customer satisfaction",
            "b) A product that a company produces in-house without outsourcing",
            "c) A product designed and manufactured using CAD and CAM",
            "d) A product utilizing materials and components of high quality"
        ],
        answer: "a) A product having no customer complaints and a high level of customer satisfaction"
    },
    {
        question: "Which of the following is appropriate as a characteristic of the QR code?",
        options: [
            "a) The code can contain only single-byte alphanumeric characters and symbols.",
            "b) The amount of information that can be stored is equivalent to that of a barcode",
            "c) The code can be read from any direction including the top, bottom, left, and right ",
            "d) The code has a two-dimensional structure in which three barcode layers are stacked."
        ],
        answer: "ac) The code can be read from any direction including the top, bottom, left, and right"
    },
    {
        question: " Among the lists of corporate activities A through D, which of the following is the list that contains all activities concerning the establishment of compliance?",
        image: "img/Q(77).png",
        options: [
            "a) A, B",
            "b) A, C ",
            "c) B, D",
            "d) C, D"
        ],
        answer: "c) B, D"
    },
    {
        question: "  From the viewpoint of corporate governance, which of the following is the most appropriate method of strengthening the functions of monitoring and supervising the decision-making process of the management?",
        options: [
            "a) Installing a camera for monitoring the entry and exit of the president’s office",
            "b) Periodically requesting a private detective to investigate the conduct of the management",
            "c) Appointing some outside directors",
            "d) Employing law school graduates as members of the internal audit departmen"
        ],
        answer: "c) Appointing some outside directors"
    },
    {
        question: " Which of the following is an appropriate description concerning the Balanced Scorecard (BSC)?",
        options: [
            "a) It analyzes what activities generate the value of products and services that are provided to customers. ",
            "b) It creates strategy and evaluates performance from four (4) viewpoints: financial, customer, internal business processes, and learning and growth.",
            "c) It records entries in a ledger in order to ensure that the amounts of credits and debits are always in balance.",
            "d) It scores and evaluates the creditworthiness of business partners through such means as financial indicators."
        ],
        answer: "b) It creates strategy and evaluates performance from four (4) viewpoints: financial, customer, internal business processes, and learning and growth."
    },
    {
        question: " Among the business management systems, which of the following has an objective of maximizing customer lifetime value? Here, customer lifetime value is the amount of profit expected to be brought into a company by a customer throughout his/her lifetime.",

        options: [
            "a) CRM system ",
            "b) ERP system ",
            "c) HRM system",
            "d) MRP system"
        ],
        answer: "a) CRM system "
    },
    {
        question: " As segmentation in marketing, consumers are classified on the basis of the attitude toward product purchase. Which of the following is an appropriate attitude toward product purchase of a consumer called an opinion leader?",
        options: [
            "a) Conveying one’s evaluation of a product to friends and acquaintances after the product becomes popular",
            "b) Taking into consideration their friends’ evaluation and public opinion when deciding whether to purchase a product ",
            "c) Waiting for the sales of a new product to start, and being eager to acquire it before friends and acquaintances",
            "d) Purchasing a new product in its initial phase of sale, and conveying information about the product to friends and acquaintances"
        ],
        answer: "d) Purchasing a new product in its initial phase of sale, and conveying information about the product to friends and acquaintances"
    },
    {
        question: "Which of the following is an appropriate example of vertical integration in corporate business development?",
        options: [
            "a) An apparel manufacturer outsources product inspection at factories to a partner company.",
            "b) A major trading company makes a major retailer its subsidiary with the aim of expanding sales of products that it purchases overseas.",
            "c) A bank acquires another bank through an M&A with the aim of increasing its size",
            "d) Many PC assembling companies use the semiconductors and OS of a specific manufacturer."
        ],
        answer: "b) A major trading company makes a major retailer its subsidiary with the aim of expanding sales of products that it purchases overseas."
    },
    {
        question: "Which of the following is an appropriate combination of the management themes and techniques for achieving them?",
        image: "img/Q(83).png",
        options: [
            "a) ",
            "b) ",
            "c)  ",
            "d) "
        ],
        answer: "a)  "
    },
    {
        question: "A middle-sized electrical manufacturer company A divides the products into groups in accordance with their potential and competitive strength in order to determine the priority of investing funds among their lineup. Which of the following is the most appropriate method of analysis for this purpose?",

        options: [
            "a) Cluster analysis regarding the prices and the customer bases of the company’s products",
            "b) RFM analysis regarding the customers that purchase the company’s products",
            "c) PPM analysis regarding the shares and the market growth rates of the company’s products",
            "d) Principle component analysis regarding the cause of faults in the company’s products"
        ],
        answer: "c) PPM analysis regarding the shares and the market growth rates of the company’s products"
    },
    {
        question: "Which of the following is the most appropriate explanation of a patent strategy of crosslicensing?",
        options: [
            "a) It is the acquisition of patents held by a company through absorption-style merger, to gain that company’s technology. ",
            "b) It is implementation of joint research with other organizations, to complement a company’s own technologies and apply for patents.",
            "c) It is granting a company’s own patents to other companies and obtaining royalties commensurate with their value",
            "d) It is mutual consent between patent holders on the use of each other’s patents."
        ],
        answer: "d) It is mutual consent between patent holders on the use of each other’s patents. "
    },
    {
        question: "When the spreadsheet shown below is converted into CSV format, which of the following is an appropriate list of data that is generated by spreadsheet software? Here, records are separated by the carriage return code “CR”. The expression in a cell is automatically recalculated, and the resulting value is written back into that cell. Although the entered expressions are shown in row 3 and column C below, the resulting values are actually displayed on the screen.",
        image: "img/Q(86).png",
        options: [
            "a) 2 , 6 , 8 CR 7 , 4 , 11 CR 6 , 13 , 24 C",
            "b) 2 , 6 , 8 CR 7 , 4 , 11 CR 9 , 10 , 19 CR",
            "c) 2 , 7 , 6 CR 6 , 4 , 13 CR 8 , 11 , 24 C",
            "d) 2 , 7 , 9 CR 6 , 4 , 10 CR 8 , 11 , 19 CR "
        ],
        answer: "c) 2 , 7 , 6 CR 6 , 4 , 13 CR 8 , 11 , 24 C"
    },
    {
        question: "An ERP package is a suite of fully integrated software applications that are used to perform administrative business processes, such as financial management, procurement, personnel, and payroll administration. Which of the following is the most appropriate description concerning such an ERP package?",
        options: [
            "a) An ERP package can be installed with relative ease because the business processes of a company do not need to be analyzed.",
            "b) An ERP package should be maintained by individual user departments after its installation.",
            "c) An ERP package should be installed after the business processes of a company are verified and standardized",
            "d) An ERP package is an integrated type of system software that is designed especially for the domestic business processes."
        ],
        answer: "c) An ERP package should be installed after the business processes of a company are verified and standardized"
    },
    {
        question: " Which of the following is the system that is used to record sales information when a sales transaction was made at the store, and also to collect, accumulate, and analyze sales information for each item sold? ",
        options: [
            "a) ECR",
            "b) QR",
            "c) EOS",
            "d) POS"
        ],
        answer: "d) POS"
    },
    {
        question: "Among the characteristics required for an embedded system, which of the following is the most appropriate terminology used when a certain process must be completed within a given period of time?",
        options: [
            "a) Availability",
            "b) Reliability",
            "c) Real-time ability",
            "d) Serviceability"
        ],
        answer: "c) Real-time ability "
    },
    {
        question: " Which of the following is an appropriate explanation of CAD, as used in the manufacturing industry?",
        options: [
            "a) It calculates the required quantity of materials for a product production plan and orders materials.",
            "b) It manages information about the components, semi-finished products, quantities, etc. required for the manufacture of products",
            "c) It performs unified management of information such as product blueprints and component tables, from design to manufacturing.",
            "d) It uses computers in product design to improve the productivity and reliability of design specifications."
        ],
        answer: "d) It uses computers in product design to improve the productivity and reliability of design specifications. "
    },
    {
        question: ". Which of the following systems can be realized through the use of RFID?",
        options: [
            "a) Providing medical care by transmitting images and voice data of patients from a remote site via a network",
            "b) Depositing and withdrawing money from a bank ATM by using an ATM card",
            "c) Reading product information from the barcodes on products, and performing sales management and order processing at the time of sale in stores",
            "d) Setting an electronic tag on a delivery parcel, and checking information related to the shipping history of the parcel"
        ],
        answer: "d) Setting an electronic tag on a delivery parcel, and checking information related to the shipping history of the parcel"
    },
    {
        question: " When build-to-order production is compared to build-to-stock production, which of the following is an appropriate characteristic of build-to-order production?",
        options: [
            "a) Shipment is not possible immediately when an order is received, but there is no risk of an excessive number of products in the inventory",
            "b) It is required to increase the accuracy of order forecast, and maintain the optimum inventory volume of products",
            "c) It brings the risk of the loss of sales opportunities through insufficient product inventory",
            "d) Products are produced according to a production plan that is proposed on the basis of order forecast."
        ],
        answer: "a) Shipment is not possible immediately when an order is received, but there is no risk of an excessive number of products in the inventory "
    },
    {
        question: "When system development is outsourced, which of the following is an appropriate item to be considered?",
        options: [
            "a) Making the acceptance test simple when placing an order with a reliable outsourcee ",
            "b) Monitoring the progress of development in order to find and resolve problems early",
            "c) Entrusting all tasks, including the determination of the specifications of business processes, to an outsourcee who is familiar with the business processes",
            "d) Giving detailed instructions on outsourced tasks down to each staff member, even if the outsourcee is reliable"
        ],
        answer: "b) Monitoring the progress of development in order to find and resolve problems early "
    },
    {
        question: "Which of the following is the most appropriate description concerning DFD?",
        options: [
            "a) It represents transitions of the state of a system as time passes and the situation changes",
            "b) It relates entities handled by a system, and represents the data structure",
            "c) It represents the attributes of, operations for and relations between the elements that a system is composed of",
            "d) It focuses on the flow of data, and represents the relations between the flow and the processing of business data."
        ],
        answer: "d) It focuses on the flow of data, and represents the relations between the flow and the processing of business data."
    },
    {
        question: "Which of the following is the term that expresses the disparity in the quality and quantity of information that can be obtained, or in income that can be earned between people who can handle information devices such as computers and those who cannot?",

        options: [
            "a) Social networking service",
            "b) Digital signage",
            "c) Digital divide",
            "d) Digital native"
        ],
        answer: "c) Digital divide"
    },
    {
        question: "Which of the following is a business operator that provides access to the Internet?",
        options: [
            "a) ASP",
            "b) ISP",
            "c) SaaS",
            "d) SNS "
        ],
        answer: "b) ISP"
    },
    {
        question: "Which of the following is an appropriate approver for the optimization plan of the overall information system of a company?",

        options: [
            "a) CIO ",
            "b) Head of RFP creation department",
            "c) Head of the business operations department handling the mission-critical system",
            "d) System development project manager"
        ],
        answer: "a) CIO"
    },
    {
        question: "Company A runs a securities business and Company B is a system developer. Company A outsources a project to develop a stock ordering system to Company B from the start of the project. During the operational test of the project, a defect is discovered. The defect is caused because Company A did not inform Company B of the “Exceptional rule for approval of the responsible person during ordering of stocks.” Which of the following is the phase where such a rule should be clearly explained to Company B?",
        options: [
            "a) Definition of business requirements",
            "b) Definition of software requirements ",
            "c) Definition of system requirements",
            "d) Definition of system test requirements"
        ],
        answer: "a) Definition of business requirements "
    },
    {
        question: "Which of the following is an appropriate procedure for selecting a contractor for system development?",
        image: "img/Q(99).png",
        options: [
            "a) A → C → D → B",
            "b) A → D → C → B",
            "c) C → A → B → D",
            "d) C → B → A → D"
        ],
        answer: "b) A → D → C → B "
    },
    {
        question: "When the software life cycle in the figure below is classified into the operation process, development process, planning process, maintenance process, and requirements definition process, which of the following corresponds to A? Here, each of “Development,” “Planning,” “Maintenance,” and “Requirements definition” goes into one of A and the shaded blocks.",
        image: "img/Q(100).png",
        options: [
            "a) Development",
            "b) Planning",
            "c) Maintenance",
            "d) Requirements definition"
        ],
        answer: "b) Planning"
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
    const data = { score };
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


