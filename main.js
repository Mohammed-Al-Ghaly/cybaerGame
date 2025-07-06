// Get to DOM elements
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user-result img"),
  cpuResult = document.querySelector(".cpu-result img"),
  result = document.querySelector(".result"),
  optionsImages = document.querySelectorAll(".option-image");

optionsImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait....";
    // Loop through each option image again
    optionsImages.forEach((imaga2, index2) => {
      // if the current index doesn't match the clicked index,
      // Remove the "active" class from the other option images
      index !== index2 && imaga2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // set a timeout to delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // Get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // Set the user image to the clicked option image
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image options
      let cpuImages = [
        "images/rock.png",
        "images/paper.png",
        "images/scissors.png",
      ];
      // Set the CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNumber];
      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["R", "P", "S"][index];
      // Create an object with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "Cpu",
        PS: "User",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };
      // look up the outcome value based on user and CPU options
      let outComeValue = outcomes[userValue + cpuValue];
      // Display the result
      result.textContent =
        userValue === cpuValue ? "Match Draw" : `${outComeValue} Win!!`;
    }, 2500);
  });
});
