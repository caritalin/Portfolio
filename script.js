document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector('.loading-screen').style.opacity = 0;
        document.querySelector('.loading-screen').style.pointerEvents = 'none';
    }, 1000);

    setTimeout(function () {
        document.querySelector('.loading-screen').remove();
    }, 2000);
});

function loadContent(section) {
    var mainContent = document.getElementById('main-content');
    var boxContainer = document.querySelector('.box-container');

    document.querySelectorAll('nav a').forEach(a => {
        a.classList.remove('selected');
    });

    event.target.classList.add('selected');

    // Fade out the existing content
    boxContainer.style.opacity = 0;

    // Replace the existing content after the fade-out animation completes
    setTimeout(function () {
        switch (section) {
            case 'Projects':
                mainContent.innerHTML = `
    <ul>
      <li class="project-item">
          <div class="project-box">
              <a class="contactLink" href="https://caritalin.github.io/OldPortfolio/" target="_blank">Previous Portfolio<i class=""></i></a>
              <p class="project-info">2022 | Portfolio</p>
          </div>
      </li>
  </ul>
  <ul>
      <li class="project-item">
          <div class="project-box">
              <a class="contactLink" href="https://caritalin.github.io/weather/" target="_blank">Weather page with online data<i class=""></i> </a>
              <p class="project-info">Made: 2023 | Course Work</p>
          </div>
      </li>
  </ul>
  <ul>
      <li class="project-item">
          <div class="project-box">
              <a class="contactLink" href="https://caritalin.github.io/reactiongame/" target="_blank">Reaction Game<i class=""></i> </a>
              <p class="project-info">Made: 2023 | Course Work</p>
          </div>
      </li>
  </ul>
  <ul>
      <li class="project-item">
          <div class="project-box">
              <a class="contactLink" href="https://caritalin.github.io/weatherstatistics/" target="_blank">Weather page with statistic data<i class=""></i></a>
              <p class="project-info">Made: 2023 | Course Work</p>
          </div>
      </li>
  </ul>
                `;
                break;
            case 'Info':
                mainContent.innerHTML = `
                <div id="contact" class="box-container">


                  <!-- Info Page Content -->
<div id="info" class="box-container">
<p>In my Notion page, you'll find details about my background, expertise in development, technical skills, and academic focus. Take a moment to connect with an enthusiastic IT engineering student, driven by a hunger for knowledge. Every project is a learning journey, and I embrace the opportunity to acquire new skills along the way.</p>
<p>"Repetitio est mater studiorum."</p>

<p>Use the contact form or explore the provided links to connect via Google Form or Notion. Your inquiries and messages are important to me, and I look forward to engaging with you!</p>

<div id="info" class="box-container">
  <a href="https://lean-condition-adc.notion.site/Contact-e6abde466d6748f48792ac3e9471e752" target="_blank">
      <h2>Notion</h2>
      <img src="Notion-logo.svg.png" alt="Notion Logo" height="95">
  </a>

  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWCWW_CGxPDVWyNfwpibW2gFNMC0TQwhzYKWXDr9tz_9FdtQ/viewform?usp=pp_url" target="_blank">
      <h2>Contact</h2>
      <img src="google-forms.webp" alt="Google Forms Logo" height="95">
  </a>
</div>
</div>


           `;
                break;
            case 'Contact':
                mainContent.innerHTML = `
<div id="contact" class="box-container"> 


                    <ul>
                    <a class="contactLink" href="https://www.linkedin.com/in/caritalindfors" target="_blank"><i class="fa-brands fa-linkedin fa-2x"></i></a>
                    </ul>
                    <ul>
                    <a class="contactLink" href="https://github.com/caritalin" target="_blank"><i class="fa-brands fa-git fa-2x"></i> </a>
                    </ul>
                    </div>
                `;
                break;
            default:
                mainContent.innerHTML = `
                    <p>An aspiring IT engineer with a passion for turning ideas into innovative solutions. This portfolio is a glimpse into my journey, showcasing projects that reflect my skills in web development, programming, and more.</p>
                    <p>As a continuous learner, I am driven to explore new technologies and embrace challenges. From crafting responsive web interfaces to delving into diverse tech domains, I am dedicated to creating meaningful and impactful solutions.</p>
                    <p>Feel free to explore my projects, and don't hesitate to reach out if you have any questions or if you're interested in cooperation. Let's build something great together!</p>
                `;
                break;
        }

        // Fade in the new content
        boxContainer.style.opacity = 1;
    }, 500); // 500 milliseconds (0.5 seconds) fade-out time
}