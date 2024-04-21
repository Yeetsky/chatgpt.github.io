<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MoversPrime - Your Trusted Moving Company</title>
<style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0; /* Solid color of your choice */
  }
  header {
    background-color: #333; /* Header background color */
    color: #fff;
    padding: 10px;
    text-align: center;
  }
  nav a {
    color: #fff;
    text-decoration: none;
    margin: 0 10px;
  }
  .container {
    max-width: 1200px;
    margin: 20px auto;
    padding: 0 20px;
  }
  .services {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .service {
    width: 30%;
    margin-bottom: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  .service h3 {
    margin-top: 0;
  }
  .questions {
    margin-top: 40px;
  }
  .question-form input[type="text"],
  .question-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  .question-form button {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
</head>
<body>
  <header>
    <h1>MoversPrime</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#questions">Questions</a>
    </nav>
  </header>
  <div class="container">
    <section id="home">
      <h2>Welcome to MoversPrime</h2>
      <p>Your trusted moving company for all your relocation needs.</p>
      <img src="moving_truck_image.jpg" alt="Moving Truck">
    </section>
    <section id="services">
      <h2>Our Services</h2>
      <div class="services">
        <div class="service">
          <h3>Residential Moving</h3>
          <p>We help you move your household items safely and efficiently.</p>
        </div>
        <div class="service">
          <h3>Commercial Moving</h3>
          <p>Relocate your office or business with minimal downtime.</p>
        </div>
        <div class="service">
          <h3>Long-Distance Moving</h3>
          <p>Move across cities or states with our reliable long-distance moving services.</p>
        </div>
      </div>
    </section>
    <section id="questions" class="questions">
      <h2>Have Questions?</h2>
      <form class="question-form">
        <input type="text" placeholder="Your Name">
        <input type="text" placeholder="Your Email">
        <textarea placeholder="Your Question"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  </div>
  <script>
    // JavaScript code can be added here for form submission handling or other interactive features
  </script>
</body>
</html>
