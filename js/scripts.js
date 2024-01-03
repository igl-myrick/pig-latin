function pigLatin(word) {
  const inputArr = word.split("");
  let output;
  const vowelArr = ["a", "e", "i", "o", "u"]
  for (let i = 0; i < 5; i += 1) {
    if (inputArr[0] === vowelArr[i]) {
      inputArr.push("way");
      output = inputArr.join("");
      break;
    }
  }
  return output;
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const input = document.querySelector("input").value;
    let output = pigLatin(input);
    const result = document.getElementById("results");
    const p = document.createElement("p");
    p.append(output);
    result.append(p);
  });
});