console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    const dogImageContainer = document.getElementById("dog-image-container");
    const dogBreedsList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");
  
    // Challenge 1
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const imgElement = document.createElement("img");
          imgElement.src = imageUrl;
          dogImageContainer.appendChild(imgElement);
        });
      });
  
    // Challenge 2
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const liElement = document.createElement("li");
          liElement.textContent = breed;
          dogBreedsList.appendChild(liElement);
        });
      });
  
    // Challenge 3
    dogBreedsList.addEventListener("click", event => {
      if (event.target.nodeName === "LI") {
        event.target.style.color = "blue";
      }
    });
  
    // Challenge 4
    breedDropdown.addEventListener("change", event => {
      const selectedLetter = event.target.value;
      const lis = dogBreedsList.getElementsByTagName("li");
      for (let i = 0; i < lis.length; i++) {
        const breed = lis[i].textContent;
        if (breed.startsWith(selectedLetter)) {
          lis[i].style.display = "";
        } else {
          lis[i].style.display = "none";
        }
      }
    });
  });
  