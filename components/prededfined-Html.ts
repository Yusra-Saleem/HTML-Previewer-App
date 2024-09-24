export const predefinedHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Previewer Test</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      color: #333;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #007BFF;
    }
    p {
      line-height: 1.6;
    }
    ul {
      list-style-type: disc;
      margin-left: 20px;
    }
    ol {
      list-style-type: decimal;
      margin-left: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    table, th, td {
      border: 1px solid #ccc;
    }
    th, td {
      padding: 10px;
      text-align: left;
    }
    .image {
      width: 100%;
      max-width: 300px;
      margin: 20px 0;
    }
    .link {
      color: #007BFF;
      text-decoration: none;
    }
    .link:hover {
      text-decoration: underline;
    }
    .form-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
    input, textarea, select {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      background-color: #007BFF;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to HTML Previewer</h1> <br>
    <p>This is a sample HTML document to test the HTML Previewer application. Below are examples of various HTML elements:</p><br>
    
    <h2>Headings</h2>
    <h3>Sub-heading 1</h3>
    <h4>Sub-heading 2</h4>
    <h5>Sub-heading 3</h5>
<br>
    <h2>Paragraphs</h2> 
    <p>This is a simple paragraph. It contains some <strong>bold text</strong>, <em>italic text</em>, and <u>underlined text</u>.</p>
<br>
    <h2>Lists</h2>
    <h3>Unordered List</h3>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <br>
    <h3>Ordered List</h3>
    <ol>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ol>
<br>
    <h2>Table</h2>
    <table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
          <td>Row 1, Cell 3</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
          <td>Row 2, Cell 3</td>
        </tr>
        <tr>
          <td>Row 3, Cell 1</td>
          <td>Row 3, Cell 2</td>
          <td>Row 3, Cell 3</td>
        </tr>
      </tbody>
    </table>
<br>
    <h2>Image</h2>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfbRia-RHZbVqF8xyS8XHQzM9g-7wQSCk4Q&s" alt="Sample Image" class="image">
<br>
    <h2>Link</h2>
    <a href="https://www.youtube.com/watch?v=qz0aGYrrlhU" class="link" target="_blank">Visit Example.com</a>
<br>
    <h2>Forms</h2>
    <form>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email">
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" placeholder="Enter your message"></textarea>
      </div>
      <div class="form-group">
        <label for="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
<br>
    <h2>Buttons</h2>
    <button>Click Me!</button>
    <button disabled>Disabled Button</button>
<br>
    <h2>Iframes</h2>
    <iframe width="100%" height="315" src="https://www.youtube.com/embed/qz0aGYrrlhU" title="HTML Tutorial for Beginners: HTML Crash Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</body>
</html>
`;
