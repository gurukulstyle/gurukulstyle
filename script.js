const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})
searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})


modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

//customization


// Function to close sidebar on body touch (excluding sidebar itself)
function closeSidebarOnBodyTouch(event) {
    if (!sidebar.contains(event.target)) {
      sidebar.classList.add("close");
    }
  }
  
  // Event listener for body touch (excluding sidebar)
  body.addEventListener("click", closeSidebarOnBodyTouch);
  



  // Typing effect
 
  
 
  function typeWrite(elementId, texts, typingSpeed) {
    const textContainer = document.getElementById(elementId);
    let currentTextIndex = 0;

    function showText() {
        const text = texts[currentTextIndex];
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                textContainer.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => deleteText(typingSpeed), 1000);
            }
        }, typingSpeed);
    }

    function deleteText(typingSpeed) {
        let textLength = textContainer.textContent.length;
        const deleteInterval = setInterval(() => {
            if (textLength > 0) {
                textContainer.textContent = textContainer.textContent.slice(0, textLength - 1);
                textLength--;
            } else {
                clearInterval(deleteInterval);
                currentTextIndex = (currentTextIndex + 1) % texts.length;
                showText();
            }
        }, typingSpeed);
    }

    showText();
}

// Example usage
const elementId = "text-container";
const texts = ["नमस्कार दोस्तों", "Hello Everyone", "राम राम भाई सरिया ने" ,];
const typingSpeed = 50; // Adjust the speed as desired (milliseconds)

typeWrite(elementId, texts, typingSpeed);
