
export const portfolioHtml = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <style>
        * {
            margin: 0;
            padding-top: 10px;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
        }

        /* Theme Colors */
        :root {
            --primary-color: #007BFF;
            --secondary-color: #343A40;
            --accent-color: #f8f9fa;
        }

        /* Header and Navigation Styling */
        header {
            
            color: white;
            
        }
        header p{
            margin-top: 10px; 
            font-size: 23px; "
        }    

        nav {
            background-color: var(--secondary-color);
            padding: 15px;
            padding-top:0px;
            display: flex;
            width: 100%; 
            position: sticky;
            top: 0; 
            justify-content: center;
            z-index: 1000; 
        }


        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            
        }

        nav ul li {
            margin: 0 20px;
        }

        nav ul li a {
            color: white;
            text-decoration: none;
            font-size: 18px;
            padding: 5px 15px;
        }

        nav ul li a:hover {
            background-color: var(--primary-color);
            border-radius: 5px;
            
        }

        /* Section Styling */
        section {
            padding: 60px 20px;
            margin: 20px 0;
            background-color: var(--accent-color);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        section h2 {
            color: var(--primary-color);
            text-align: center;
            font-size:25px;
            margin-bottom: 20px;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
        }

        /* About Section */
        #about p {
            text-align: center;
            font-size: 18px;
            line-height: 1.6;
        }

        /* Education and Experience Section */
        .education,
        .experience {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .education-item,
        .experience-item {
            background-color: white;
            padding: 20px;
            width: 48%;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        /* Skills Section */
        .skills {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .skill-item {
            width: 30%;
            margin-bottom: 20px;
            padding: 20px;
            background-color: white;
            text-align: center;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        /* Contact Section */
        form {
            max-width: 600px;
            margin: 0 auto;
        }

        .form-group {
            margin-bottom: 15px;
        }

        input,
        textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button {
            background-color: var(--primary-color);
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }

        button:hover {
            background-color: #0056b3;
        }

        /* Footer */
        footer {
            background-color: var(--secondary-color);
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 40px;
        }

        /* Scroll Behavior */
        html {
            scroll-behavior: smooth;
        }

        @media ((min-width:320px) and (max-width: 768px)) {
            header {
            
                color: white;
                
            }
            header p{
                margin-top: 10px; 
                font-size: 18px; "
            }
            nav{
            padding-top:0px;
            }

            nav ul {
                flex-direction: row;
                align-items: center;
            }
            nav {
                background-color: var(--secondary-color);
                padding: 10px 4px;
                display: flex;
                width-100%;
                position: sticky;
                justify-content: center;
            }

                nav ul li {
                margin: 0 0px;
            }

            nav ul li a {
                color: white;
                text-decoration: none;
                font-size: 13px;
                padding: 5px 5px;
            }
            .education,
            .experience {
                flex-direction: column;
            }
            nav ul li a:hover {
                background-color: var(--primary-color);
                border-radius: 5px;
            }

            .education-item,
            .experience-item {
                width: 100%;
            }

            .skills {
                flex-direction: column;
            }

            .skill-item {
                width: 100%;
            }
        }

        /* Footer */
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 40px 20px;
            margin-top: 40px;
        }

        footer h3,
        footer h4 {
            color: white;
        }

        footer p {
            margin: 10px 0;
            font-size: 16px;
        }

        footer a {
            color: #ffcc00;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        footer a:hover {
            color: #007BFF;
        }

        footer .socials a {
            margin: 0 10px;
            font-size: 18px;
        }
    </style>
</head>

<body>

    <!-- Navigation Bar -->
    <nav>
        <div class="container">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <header style="background-color: var(--primary-color); display: flex; flex-direction: column; justify-content: center; align-items: center; height: 280px; text-align: center; padding: 30px;">
        <h1 style="font-size: 30px; margin: 0;"><strong>My Portfolio</strong></h1>
        <p >Web Developer | Designer | Programmer</p>
    </header>

    <!-- About Section -->
    <section id="about">
        <div class="container">
            <h2>About Me</h2>
            <p>
                I am a passionate web developer with experience in creating dynamic and responsive websites using HTML, CSS, and JavaScript. My goal is to deliver engaging digital experiences and innovative solutions for my clients and projects.
            </p>
        </div>
    </section>

    <!-- Education Section -->
    <section id="education">
        <div class="container">
            <h2>Education</h2>
            <div class="education">
                <div class="education-item">
                    <h3>Bachelor of Science in Computer Science</h3>
                    <p>XYZ University, 2022</p>
                </div>
                <div class="education-item">
                    <h3>Diploma in Web Development</h3>
                    <p>ABC Institute, 2020</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Experience Section -->
    <section id="experience">
        <div class="container">
            <h2>Experience</h2>
            <div class="experience">
                <div class="experience-item">
                    <h3>Front-End Developer</h3>
                    <p>Company XYZ, 2022-2023</p>
                    <p>Developed interactive and responsive web applications using React and Tailwind CSS.</p>
                </div>
                <div class="experience-item">
                    <h3>Intern Web Developer</h3>
                    <p>Company ABC, 2021</p>
                    <p>Assisted in designing web pages and implementing features using HTML, CSS, and JavaScript.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills">
        <div class="container">
            <h2>Skills</h2>
            <div class="skills">
                <div class="skill-item">
                    <h3>HTML</h3>
                </div>
                <div class="skill-item">
                    <h3>CSS</h3>
                </div>
                <div class="skill-item">
                    <h3>JavaScript</h3>
                </div>
                <div class="skill-item">
                    <h3>React</h3>
                </div>
                <div class="skill-item">
                    <h3>Next.js</h3>
                </div>
                <div class="skill-item">
                    <h3>TypeScript</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact">
        <div class="container">
            <h2>Contact Me</h2>
            <form>
                <div class="form-group">
                    <input type="text" name="name" placeholder="Your Name">
                </div>
                <div class="form-group">
                    <input type="email" name="email" placeholder="Your Email">
                </div>
                <div class="form-group">
                    <textarea name="message" placeholder="Your Message"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>

     <!-- Contact Section with Footer -->
    <footer id="contact">
        <div class="container">
        <h3>Contact Information</h3>
        <p>Email: <a href="mailto:yourname@example.com">yourname@example.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>

        <h4>Follow Me:</h4>
        <div class="socials">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank">LinkedIn</a> |
            <a href="https://github.com/yourprofile" target="_blank">GitHub</a> |
            <a href="https://twitter.com/yourprofile" target="_blank">Twitter</a>
        </div>

        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </div>
    </footer>

</body>

</html>
;
`;
