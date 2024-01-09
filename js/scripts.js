function pigLatin(word) {
  let userArr = word.toLowerCase().split("");
  const vowelArr = ["a", "e", "i", "o", "u"];
  const consonantArr = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  let newArr = [];

  if (vowelArr.includes(userArr[0])) {
    userArr.push("way");
    return userArr.join("");
  } else if ((userArr[0] === "q") && (userArr[1] === "u")) {
    userArr.splice(0, 2);
    userArr.push("quay");
    return userArr.join("")
  } else if ((userArr.join("").includes("qu")) && (userArr.indexOf("q") !== 0)) {
    for (let i = 0; i < userArr.length; i += 1) {
      if ((userArr[i] === "q") || (vowelArr.includes(userArr[i]))) {
        newArr = userArr.toSpliced(i);
        newArr.forEach(function(element) {
          userArr.push(element);
        });
        userArr.push("ay");
        userArr.splice(0, i);
        return userArr.join("");
      }
    }
  } else if (consonantArr.includes(userArr[0])) {
    for (let i = 0; i < userArr.length; i += 1) {
      if (vowelArr.includes(userArr[i])) {
        newArr = userArr.toSpliced(i);
        newArr.forEach(function(element) {
          userArr.push(element);
        });
        userArr.push("ay");
        userArr.splice(0, i);
        return userArr.join("");
      }
    }
  }
}

function handlePhrase(input) {
  let inputArr = input.split(" ");
  let outputArr = [];
  inputArr.forEach(function(element) {
    outputArr.push(pigLatin(element));
  });
  return outputArr.join(" ");
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const input = document.querySelector("input").value;
    const output = handlePhrase(input);
    const results = document.getElementById("results");
    const p = document.createElement("p");
    p.append(output);
    results.append(p);
  });
});