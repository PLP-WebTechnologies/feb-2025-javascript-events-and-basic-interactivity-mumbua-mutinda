document.getElementById("clickButton").addEventListener("click", function() {
    this.textContent = "You clicked me!";
    this.style.backgroundColor = "lightblue";
  });
  

  const hoverImage = document.getElementById("hoverImage");
  
  hoverImage.addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
  });
  
  hoverImage.addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
  });
  

  document.getElementById("inputField").addEventListener("keypress", function(event) {
    console.log("Key pressed: " + event.key);
  });
  
 
  let timer;
  document.getElementById("clickButton").addEventListener("dblclick", function() {
    alert("You found the secret!");
  });
  
  document.getElementById("clickButton").addEventListener("mousedown", function() {
    timer = setTimeout(function() {
      alert("Long press detected!");
    }, 1000);
  });
  
  document.getElementById("clickButton").addEventListener("mouseup", function() {
    clearTimeout(timer);
  });
  

  document.getElementById("clickButton").addEventListener("click", function() {
    this.textContent = "Text Changed!";
    this.style.backgroundColor = "orange";
  });
  

  let currentIndex = 0;
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
  const galleryImage = document.getElementById("galleryImage");
  
  document.getElementById("nextBtn").addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImage.src = images[currentIndex];
  });
  
  document.getElementById("prevBtn").addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    galleryImage.src = images[currentIndex];
  });
  

  function showTab(tabId) {
    document.querySelectorAll(".tabContent").forEach(tab => {
      tab.style.display = "none";
    });
    document.getElementById(tabId).style.display = "block";
  }
  

  
  document.getElementById("myForm").addEventListener("submit", function(event) {
    if (document.getElementById("username").value.trim() === "") {
      alert("Username is required!");
      event.preventDefault(); 
    }
  });
  

  document.getElementById("myForm").addEventListener("submit", function(event) {
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address!");
      event.preventDefault();
    }
  });
  

  document.getElementById("myForm").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value;
    if (password.length < 8) {
      alert("Password must be at least 8 characters long!");
      event.preventDefault();
    }
  });
  
 
  document.getElementById("password").addEventListener("input", function() {
    const feedback = document.getElementById("passwordFeedback");
    if (this.value.length < 8) {
      feedback.textContent = "Password is too short!";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Password is long enough.";
      feedback.style.color = "green";
    }
  });
  