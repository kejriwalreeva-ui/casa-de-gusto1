// script.js - basic interactions and form validation

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      // allow normal behaviour for external links
      var href = this.getAttribute('href');
      if (!href.startsWith('#')) return;
      e.preventDefault();
      var target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });

  // Reservation form handling
  var form = document.getElementById('reservationForm');
  var resMsg = document.getElementById('resMessage');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Simple client-side validation
    var name = form.name.value.trim();
    var phone = form.phone.value.trim();
    var date = form.date.value;
    var time = form.time.value;
    var guests = form.guests.value;
    if (!name || !phone || !date || !time || !guests) {
      resMsg.style.color = 'red';
      resMsg.textContent = 'Please fill all required fields.';
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      resMsg.style.color = 'red';
      resMsg.textContent = 'Enter a valid 10-digit phone number.';
      return;
    }
    // Simulate success (in a real app you'd send to a server)
    resMsg.style.color = 'green';
    resMsg.textContent = 'Reservation confirmed! We will call to confirm details.';
    form.reset();
  });

  // Newsletter
  var nf = document.getElementById('newsletterForm');
  var nm = document.getElementById('newsMessage');
  nf.addEventListener('submit', function (e) {
    e.preventDefault();
    var email = nf.email.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nm.style.color = 'red';
      nm.textContent = 'Please enter a valid email.';
      return;
    }
    nm.style.color = 'green';
    nm.textContent = 'Thanks for subscribing!';
    nf.reset();
  });
});
