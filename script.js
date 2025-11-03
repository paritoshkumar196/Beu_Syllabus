document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for all navigation links and CTA button
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Function to create a detailed syllabus section based on provided content
    function createSyllabusDetail(id, title, modules) {
        const syllabusSection = document.getElementById('syllabus');
        const detailSection = document.createElement('section');
        detailSection.id = id;
        detailSection.classList.add('syllabus-detail');
        detailSection.style.display = 'none'; // Initially hidden

        let htmlContent = `<div class="container"><h4>${title}</h4>`;
        modules.forEach(module => {
            htmlContent += `
                <div class="module">
                    <h5>${module.title}</h5>
                    <p>${module.content}</p>
                </div>
            `;
        });
        htmlContent += `<button class="back-button">Back to Subjects</button></div>`;
        detailSection.innerHTML = htmlContent;
        
        // Append the new section after the subject cards container
        const subjectCardsContainer = syllabusSection.querySelector('.subject-cards');
        if (subjectCardsContainer) {
            subjectCardsContainer.parentNode.insertBefore(detailSection, subjectCardsContainer.nextSibling);
        }

        // Add event listener for the back button
        detailSection.querySelector('.back-button').addEventListener('click', () => {
            detailSection.style.display = 'none';
            document.querySelector('.subject-cards').style.display = 'grid'; // Show subject cards
            document.querySelector('#syllabus h3').style.display = 'block'; // Show "Syllabus Overview" title
            document.querySelector('#syllabus').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Event listener for "View Details" buttons
    document.querySelectorAll('.details-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1); 

            // Hide main subject cards and title
            document.querySelector('.subject-cards').style.display = 'none';
            document.querySelector('#syllabus h3').style.display = 'none';

            // Hide any currently visible detail sections
            document.querySelectorAll('.syllabus-detail').forEach(detail => {
                detail.style.display = 'none';
            });

            // Show the target detail section
            const targetDetail = document.getElementById(targetId);
            if (targetDetail) {
                targetDetail.style.display = 'block';
                targetDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    
    // **Compiler Design** createSyllabusDetail('compiler-design-details', 'Compiler Design', [
    createSyllabusDetail('compiler-design-details', 'Compiler Design', [ { title: 'Objectives of the course', content: 'To understand and list the different stages in the process of compilation. Identify different methods of lexical analysis. Design top-down and bottom-up parsers. Identify synthesized and inherited attributes. Develop syntax directed translation schemes. Develop algorithms to generate code for a target machine. To study the underlying theories in designing of a compiler. The study especially consider the imperative languages.' },
        { title: 'Module 1 Lecture: 6 hrs. Introduction', content: 'Phases of compilation and overview. Lexical Analysis (scanner): Regular languages, finite automata, regular expressions, from regular expressions to finite automata, scanner generator (lex, flex).' },
        { title: 'Module 2 Lecture: 9 hrs. Syntax Analysis (Parser)', content: 'Context-free languages and grammars, push-down automata, LL(1) grammars and top-down parsing, operator grammars, LR(0), SLR(1), LR(1), LALR(1) grammars and bottom-up parsing, ambiguity and LR parsing, LALR(1) parser generator (yacc, bison).' },
        { title: 'Module 3 Lecture: 10 hrs. Semantic Analysis', content: 'Attribute grammars, syntax directed definition, evaluation and flow of attribute in a syntax tree. Symbol Table: Its structure, symbol attributes and management. Run-time environment: Procedure activation, parameter passing, value return, memory allocation, and scope.' },
        { title: 'Module 4 Lecture: 10 hrs. Intermediate Language Generation', content: 'Translation of different language features, different types of intermediate forms. Code improvement (optimization) Analysis: control-flow, data-flow dependencies, etc. Code improvement: local optimization, global optimization, loop optimization, peep-hole optimization etc. Architecture dependent code improvement: instruction scheduling (for pipelines), loop optimization (for cache memory) etc. Register allocation and target code generation.' },
        { title: 'Module 5 Lecture: 5 hrs. Advanced topics', content: 'Type systems, data abstraction, compilation of Object Oriented features and non-imperative programming languages.' }
    ]);

    // **Computer Networks**
    createSyllabusDetail('computer-networks-details', 'Computer Networks', [
        { title: 'Objectives of the course', content: 'To develop an understanding of modern network architectures from a design and performance perspective. To introduce the student to the major concepts involved in wide-area networks (WANs), local area networks (LANs) and Wireless LANs (WLANs). To provide an opportunity to do network programming. To provide a WLAN measurement ideas.' },
        { title: 'Module 1 Lecture 8 hrs. Data Communication Components', content: 'Representation of data and its flow Networks - Various Connection Topology, Protocols and Standards, OSI model, Transmission Media, LAN, Wired LAN, Wireless LANs. Connecting LAN and Virtual LAN. Techniques for Bandwidth utilization: Multiplexing – Frequency division, Time division and Wave division, Concepts on spread spectrum.' },
        { title: 'Module 2 Lecture 8 hrs. Data Link Layer and Medium Access Sub Layer', content: 'Error Detection and Error Correction - Fundamentals, Block coding, Hamming Distance, CRC; Flow Control and Error control protocols - Stop and Wait, Go back - N ARQ, Selective Repeat ARQ, Sliding Window, Piggybacking, Random Access, Multiple access protocols - Pure ALOHA, Slotted ALOHA, CSMA/CD,CDMA/CA' },
        { title: 'Module 3 Lecture 8 hrs. Network Layer', content: 'Switching, Logical addressing - IPv4, IPv6; Address mapping - ARP, RARP, BOOTP and DHCP- Delivery, Forwarding and Unicast Routing protocols.' },
        { title: 'Module 4 Lecture 8 hrs. Transport Layer', content: 'Process to Process Communication, User Datagram Protocol (UDP), Transmission Control Protocol (TCP), SCTP Congestion control; Quality of Service, QoS improving techniques: Leaky Bucket and Token Bucket algorithm.' },
        { title: 'Module 5 Lecture 8 hrs. Application Layer', content: 'Domain Name Space (DNS), DDNS, TELNET, EMAIL, File Transfer Protocol (FTP), WWW, HTTP, SNMP, Bluetooth, Firewalls, Basic concepts of Cryptography.' }
    ]);
// **Machine Learning**
    createSyllabusDetail('machine-learning-details', 'Machine Learning', [
        { title: 'Objectives of the course', content: 'To learn the concept of how to learn patterns and concept from data. Design and analyze various machine learning algorithms and their applications in recent trends. Evaluate the various factors of machine learning to measure the performance. Understand basic of machine learning’s application in recent trend of technology.' },
        { title: 'Module 1 (Lecture 8 hrs.) Introduction', content: 'Basic definitions, Linear Algebra, Statistical learning theory, types of learning, hypothesis space and inductive bias, evaluation and cross validation, Optimization.' },
        { title: 'Module 2 (Lecture 8 hrs.) Statistical Decision Theory', content: 'Bayesian Learning (ML, MAP, Bayes estimates, Conjugate priors), Linear Regression, Ridge Regression, Lasso, Principal Component Analysis, Partial Least Squares.' },
        { title: 'Module 3 (Lecture 8 hrs.) Linear Classification', content: 'Logistic Regression, Linear Discriminant Analysis, Quadratic Discriminant Analysis, Perceptron, Support Vector Machines + Kernels, Artificial Neural Networks + Back Propagation, Decision Trees, Bayes Optimal Classifier, Naive Bayes.' },
        { title: 'Module 4 (Lecture 8 hrs.) Hypothesis testing', content: 'Ensemble Methods, Bagging Adaboost Gradient Boosting Clustering, K-means, K-medoids, Density-based Hierarchical, Spectral.' },
        { title: 'Module 5 (Lecture 8 hrs.) Expectation Maximization', content: 'GMMs, Learning theory intro to Reinforcement Learning, Bayesian Networks.' }
    ]);
    // **Web and Internet Technology**
    createSyllabusDetail('web-internet-details', 'Web and Internet Technology', [
        { title: 'Module 1 Lectures: 5 hrs. Web Basics', content: 'Introduction, Concept of Internet- History of Internet, Internet Governance, WWW, Wide Web, URL, Web Server, Web browser. Recent Web technologies. A study especially on web 2.0 etc., Client/Server Computing: C/S Computing, Window-based client for C/S computing. Web Page Architecture; Markup-language: Markup Languages and DTD. Resources, HTML, CSS, XML, XSL, Query Languages for XML.' },
        { title: 'Module 2 Lectures: 4 hrs. HTML', content: 'Introduction, History of HTML, Structure of HTML documents, HTML elements and attributes, HTML document: Images and Multimedia, Links and webs, Formatting HTML with Cascading Style Sheet- HTML & style sheet features, Creating Forms, Frames and Tables.' },
        { title: 'Module 3 Lectures: 3 hrs. Dynamic HTML', content: 'Introduction of DHTML- HTML vs. DHTML, Advantages of DHTML, CSS of DHTML, Event Handling, Data Binding, Browser Object Models.' },
        { title: 'Module 4 Lectures: 6 hrs. XML', content: 'XML Introduction and programming: Introduction of XML- Some current applications of XML, Advantages of XML, Anatomy of an XML document, The XML Declaration, Element tags, Nesting elements, Attributes, Text and other formatting element, Table element, Mark-up Element and Document: Document Type Definition (DTD), types. XML Programming- XML Objects, Checking Validity, Understanding XML: Xpointer, Event-driven Programming, XML Scripting.' },
        { title: 'Module 5 Lectures: 5 hrs. XML Processors & Technology', content: 'XML Processor: Introduction, XML with Style Sheet -CSS,XSL,XML scheme, XML Schema, Importance of XML schema, Creating Element in XML Processor, XML element, Introduction of XML Processor- Components of XML processor, Document Object Model SAX, Introduction of Java Script, JavaScript characteristics, Object in Java Script, Dynamic HTML with Java Script.' },
        { title: 'Module 6 Lectures: 5 hrs. XMLHttpRequest', content: 'Introduction, XMLHttpRequest, The XMLHttpRequest object, Events for the XMLHttpRequest object, Request Object for XMLHttpRequest, Response Object for XMLHttpRequest.' },
        { title: 'Module 7 Lectures: 3 hrs. AJAX Introduction', content: 'AJAX introduction, AJAX advantages, HTML with AJAX, Dynamic HTML with AJAX, CSS to Define Look and Feel, Understand XML with AJAX, XML XMLHttpRequest.' },
        { title: 'Module 8 Lectures: 4 hrs. AJAX using XML and XML Http Request', content: 'Introduction, AJAX using XML and XML Http Request: Introduction, AJAX using XML and XML Http Request, Accessing, Creating and Modifying XML Nodes, Loading XML Data into an HTML page, Receiving XML Responses, Handling Response XML.' },
        { title: 'Module 9 Lectures: 4 hrs. PHP and Database & AJAX with Database', content: 'PHP Introduction, Structure of PHP, PHP Functions; AJAX with PHP and Database, The Complete AJAX Example, AJAX Database, Working of AJAX, PHP-AJAX: AJAX PHP Database Form, AJAX PHP MySQL Select Query.' },
        { title: 'Module 10 Lectures: 4 hrs. ASP and ASP Database Connectivity', content: 'Introduction, Introduction of ASP, ASP – Variables, ASP Control Structure, ASP Objects’ Properties and Methods, ASP Components, ASP Database Connection, ASP Scripting Components.' }
    ]);
    // **Introduction to Java Programming** (from Image 4)
    createSyllabusDetail('java-programming-details', 'Introduction to Java Programming', [
        { title: 'Module 1 Lectures: 12 hrs. Introduction to Java', content: 'Feature to Java, Java Virtual Machine, Differences between C++ and Java, Introduction of Java, Add document starting a Java Program. Important Classes, Formatting the Output and Input, Control Statements and Data Types, Naming Conventions in Java. Data Types in Java, Literals. Operators: Control Statements in Java: Arithmetic Operators, Unary Operators, Relational Operators, Logical Operators, Boolean Operators, Bitwise Operators, Ternary Operators, New Operator, Cast Operator, If --- else statement, Switch Statement. Break Statement, Continue statement, Return statement, do --- while loop, while loop, for loop. Input and Output: Accepting Input from the keyboard, Taking Input in Java, Util, Scanner, Using displaying output with system.out.print(), Displaying formatted output with string.Format.' },
        { title: 'Module 2 Lectures: 8 hrs. Arrays and String', content: 'Arrays and Types of Arrays, Array name, Length, Command Line Arguments, Creating String, String Class, Methods, String Comparison, Immutability of Strings, Creating String Buffer Objects, String Buffer Class, Methods, String Builder Class, String Builder Class Methods. Wrapper Classes: Number class, Character class, Byte class, Short class, Integer class, Long class, Float class, Double class, Boolean class, Math class. Introduction to Object Oriented: A procedure oriented approach, Features of Object Oriented programming system, Object creation, Initializing the instance variable, Constructors.' },
        { title: 'Module 3 Lectures: 10 hrs. Methods of Java', content: 'Method Prototype, Method Body, Calling a Method, Method Specific Syntax, Static Block, The keyword ‘this’, Instance Methods, Passing Primitive Data Types to Methods, Passing Objects to Methods, Passing Arrays to Methods, Recursion, Factory Methods. Inheritance and Polymorphism: Inheritance, The Keyword ‘super’, The Protected Specified, Types of Inheritance, Polymorphism with variables, Polymorphism using methods, Polymorphism with classes, Polymorphism with private Methods, Abstract Classes. Interfaces: Usage, Different types of Packages, Interface in a Package, Access Specifies In Java.' },
        { title: 'Module 4 Lectures: 10 hrs. Exception Handling', content: 'Errors in Java Program, Exceptions throws and throw clause, Types of exceptions, Re-throwing an exception. Threads: Single and Multi-tasking, Creating and terminating the thread, Single and Multi-tasking using thread, Deadlock of threads, Thread communication. Introduction to AWT and Applets: AWT components, Creating and closing the frame, Drawing in the frame, Displaying data and text in the frame, Event Handling, Layouts, Swing Models, Creating and uses of Applets. An applet with swing components, Applet lifecycle. Introduction on Java database connectivity: Database servers, Types of drivers, Connection, a Database, Stored Procedures and Callable Statement, Storing file and Image into database, Retrieving a file and Images from database, Types of JDBC drivers.' }
    ]);
});