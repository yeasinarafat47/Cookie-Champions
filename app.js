  function  clickBtn(){
    document.getElementById('video_play_btn').style.display = 'none';
    document.getElementById('video_play_image1').style.display = 'none';
    document.getElementById('videoPlay').style.display = 'block';
    
  }
  function  clickBtn2(){
    document.getElementById('video_play_btn2').style.display = 'none';
    document.getElementById('video_play_image2').style.display = 'none';
    document.getElementById('videoPlay2').style.display = 'block';
  }
  function  clickBtn3(){
    document.getElementById('video_play_btn3').style.display = 'none';
    document.getElementById('video_play_image3').style.display = 'none';
    document.getElementById('videoPlay3').style.display = 'block';
  }
  function  clickBtn4(){
    document.getElementById('video_play_btn4').style.display = 'none';
    document.getElementById('video_play_image4').style.display = 'none';
    document.getElementById('videoPlay4').style.display = 'block';
  }



  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

        if (!isActive) {
            item.classList.add('active');
        }
    });
});
// counter up js 

// Select elements
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const counter = document.getElementById('counter');

// Initialize the counter value
let count = 1;

// Function to update the counter display
function updateCounter() {
  counter.textContent = count;
}

// Decrease button functionality
decreaseBtn.addEventListener('click', () => {
  if (count > 1) { // Prevent going below 1
    count--;
    updateCounter();
  }
});

// Increase button functionality
increaseBtn.addEventListener('click', () => {
  count++;
  updateCounter();
});



// shop or chocolate box active

// Select all <a> elements in the container
const linkElements = document.querySelectorAll('.shop_or_chocolate_box a');

linkElements.forEach(link => {
  link.addEventListener('click', (e) => {
    // Only prevent default if you don’t want the navigation to happen
    linkElements.forEach(el => el.classList.remove('active')); // Remove active class
    link.classList.add('active'); // Add active class
  });
});
linkElements.forEach(link => {
  link.addEventListener('click', (e) => {
    if (link.getAttribute('href') === "#") { // Prevent only if href="#"
      e.preventDefault();
    }
    linkElements.forEach(el => el.classList.remove('active'));
    link.classList.add('active');
  });
});




















