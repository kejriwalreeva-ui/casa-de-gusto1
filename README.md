# casa-de-gusto1
[index.html](https://github.com/user-attachments/files/22709521/index.html)
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Casa — Authentic Italian</title>
  <meta name="description" content="Casa - Experience Italy in every bite. Restaurant demo site for hackathon." />
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="site-header" id="top">
    <div class="container header-inner">
      <div class="brand">
        <h1>Casa</h1>
        <p class="tagline">Experience Italy in every bite</p>
      </div>
      <nav class="main-nav" aria-label="Main Navigation">
        <a href="#menu">Menu</a>
        <a href="#reservation">Reservation</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
      <button class="btn btn-primary" id="reserve-cta">Reserve</button>
    </div>
  </header>

  <main>
    <!-- Hero -->
    <section class="hero" aria-label="Hero section">
      <div class="container hero-grid">
        <div class="hero-content">
          <h2>Authentic Italian Flavours</h2>
          <p>Savour the aromas, flavours, and timeless dishes of authentic Italian cooking.</p>
          <div class="cta-row">
            <a class="btn btn-primary" href="#reservation">Book a Table</a>
            <a class="btn btn-outline" href="#menu">View Menu</a>
          </div>
        </div>
        <div class="hero-media" role="img" aria-label="Delicious Italian food">
          <img src="assets/HOMEPAGE.jpg" alt="Signature dish on wooden table" />
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="stats container" aria-label="Statistics">
      <div class="stat">
        <div class="stat-number">10+</div>
        <div class="stat-label">Years of Cooking</div>
      </div>
      <div class="stat">
        <div class="stat-number">1500+</div>
        <div class="stat-label">Happy Guests</div>
      </div>
      <div class="stat">
        <div class="stat-number">50+</div>
        <div class="stat-label">Dishes</div>
      </div>
    </section>

    <!-- Menu -->
    <section id="menu" class="menu container" aria-label="Menu">
      <h2 class="section-title">Our Menu</h2>
      <p class="section-sub">Handpicked dishes — traditional and contemporary.</p>
      <div class="menu-grid">
        <article class="menu-card">
          <img src="assets/MENU.jpg" alt="Pasta dish" />
          <h3>Pasta Carbonara</h3>
          <p class="desc">Creamy sauce, guanciale, pecorino cheese.</p>
          <div class="price">₹ 320</div>
        </article>
        <article class="menu-card">
          <img src="assets/Frame_3.jpg" alt="Pizza" />
          <h3>Wood-fired Pizza</h3>
          <p class="desc">Thin crust, fresh basil, mozzarella.</p>
          <div class="price">₹ 420</div>
        </article>
        <article class="menu-card">
          <img src="assets/reservation.jpg" alt="Dessert" />
          <h3>Molten Chocolate Cake</h3>
          <p class="desc">Warm cake, rich chocolate center.</p>
          <div class="price">₹ 180</div>
        </article>
      </div>
    </section>

    <!-- Reservation -->
    <section id="reservation" class="reservation container" aria-label="Reservation">
      <div class="res-grid">
        <div class="res-info">
          <h2>Reserve Your Table</h2>
          <p>Book a table and enjoy an unforgettable dining experience.</p>
          <ul>
            <li>Open daily: 12:00 PM - 11:00 PM</li>
            <li>Walk-ins welcome</li>
            <li>Private events on request</li>
          </ul>
        </div>
        <form id="reservationForm" class="res-form" novalidate>
          <label for="name">Full name</label>
          <input id="name" name="name" type="text" placeholder="Your name" required>

          <label for="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="10-digit phone" pattern="\d{10}" required>

          <label for="date">Date</label>
          <input id="date" name="date" type="date" required>

          <label for="time">Time</label>
          <input id="time" name="time" type="time" required>

          <label for="guests">Guests</label>
          <select id="guests" name="guests" required>
            <option value="">Select</option>
            <option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
          </select>

          <button class="btn btn-primary" type="submit">Confirm Reservation</button>
          <p id="resMessage" class="res-message" aria-live="polite"></p>
        </form>
      </div>
    </section>

    <!-- Gallery -->
    <section id="gallery" class="gallery container" aria-label="Gallery">
      <h2 class="section-title">Gallery</h2>
      <div class="gallery-grid">
        <a href="assets/HOMEPAGE.jpg" class="gallery-item"><img src="assets/HOMEPAGE.jpg" alt="Dining table"></a>
        <a href="assets/MENU.jpg" class="gallery-item"><img src="assets/MENU.jpg" alt="Menu plate"></a>
        <a href="assets/Frame_3.jpg" class="gallery-item"><img src="assets/Frame_3.jpg" alt="Pizza"></a>
        <a href="assets/reservation.jpg" class="gallery-item"><img src="assets/reservation.jpg" alt="Dessert"></a>
      </div>
    </section>

    <!-- Contact/Footer -->
    <footer id="contact" class="site-footer">
      <div class="container footer-grid">
        <div class="footer-about">
          <h3>Casa</h3>
          <p>Authentic Italian — cozy ambience, unforgettable flavours.</p>
          <p><strong>Address:</strong> 123 Food Lane, City</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
        </div>
        <div class="footer-newsletter">
          <h3>Newsletter</h3>
          <form id="newsletterForm" class="newsletter-form" novalidate>
            <label for="email" class="visually-hidden">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required>
            <button class="btn btn-primary" type="submit">Subscribe</button>
            <p id="newsMessage" class="res-message" aria-live="polite"></p>
          </form>
        </div>
      </div>
      <div class="copyright">
        © Casa — Built for Hackathon
      </div>
    </footer>
  </main>

  <script src="script.js"></script>
</body>
</html>
