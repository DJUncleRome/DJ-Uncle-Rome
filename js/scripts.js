/* ---------------------------
   General Font & Colors
----------------------------*/
body {
  font-family: 'system-ui', sans-serif;
  color: #e1a302;
  background-color: #fff; /* default background for site sections */
}

h1 {
  font-family: 'Design System D W01 700R', sans-serif;
  color: #e1a302;
}

.lead {
  color: #e1a302;
}

/* Hero Section */
#hero {
  position: relative;
  overflow: hidden;
  color: #e1a302; /* logo/gold text color */
  text-align: center;
}

#hero video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 1;
}

#hero .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(157, 25, 25, 0.6); /* red with 60% opacity */
  z-index: 2;
}

#hero .hero-content {
  position: relative;
  z-index: 3;
}
/* ---------------------------
   Connect With Me Section
----------------------------*/
#contact {
  background-color: #9d1919;
  color: #e1a302;
  padding: 3rem 0;
  text-align: center;
  background-image:
    repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 6px),
    repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 6px);
  background-size: 20px 20px;
}

#contact h2 {
  margin-bottom: 1rem;
  font-family: 'Design System D W01 700R', sans-serif;
}

#contact p {
  margin-bottom: 2rem;
}

/* ---------------------------
   Contact Form Styling
----------------------------*/
#contactForm {
  max-width: 500px;
  margin: 0 auto;
}

#contactForm .form-control {
  border-color: #e1a302;
  background-color: #9d1919;
  color: #e1a302;
}

#contactForm .form-control:focus {
  border-color: #e1a302;
  box-shadow: 0 0 0 0.2rem rgba(225, 163, 2, 0.25);
  background-color: #9d1919;
  color: #e1a302;
}

#contactForm .btn {
  background-color: #e1a302;
  color: #9d1919;
  font-weight: bold;
  border: none;
  transition: all 0.3s ease;
}

#contactForm .btn:hover {
  background-color: #ffd24d;
  color: #9d1919;
}

.btn-animate:hover {
  animation: pulse 1s;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.25);
  background-color: #e1a302;
  color: #9d1919;
  font-weight: bolder;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.magic-sparkle {
  position: absolute;
  pointer-events: none;
  border-radius: 50%;
  mix-blend-mode: screen;
  z-index: 9999;
}

#about {
  background-image:
    repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 6px),
    repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 6px);
  background-size: 20px 20px;
  padding: 1em
}

.ticker {
  width: 100%;
  background-color: #222; /* dark but visible */
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  font-weight: bold;
  font-size: 0.9rem;
  position: relative;
  z-index: 9999;
}

.ticker p {
  display: inline-block;
  padding-left: 100%;
  animation: ticker-scroll 15s linear infinite;
  margin: 0;
}

@keyframes ticker-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

