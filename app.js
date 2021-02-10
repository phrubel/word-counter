// get Id
const textArea = document.getElementById("textArea");
const wordCount = document.getElementById("wordCount");
const clearBtn = document.getElementById("clearBtn");

// Function For Word Count
const countWords = () => {
  let textInput = textArea.value;
  textInput = textInput.trim();
  const words = textInput.split(" ");
  if ((words[0] === "")) {
    wordCount.innerText = 0;
  } 
  else {
    wordCount.innerText = words.length;
  }
};

// Clear Button Handler
clearBtn.addEventListener('click',()=>{
  textArea.value="";
  countWords();
})




