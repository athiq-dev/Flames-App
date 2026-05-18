function normalize(name){
      return name.replace(/\s+/g,'').toLowerCase();
    }
          // Create floating circles dynamically
    for (let i = 0; i < 25; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");

        const size = Math.random() * 200 + 100;
        circle.style.width = size + "px";
        circle.style.height = size + "px";
        circle.style.left = Math.random() * window.innerWidth + "px";
        circle.style.animationDuration = (Math.random() * 20 + 10) + "s";
        circle.style.animationDelay = Math.random() * 5 + "s";

        document.body.appendChild(circle);
    }
    function resetForm(){
      document.getElementById("boyName").value = "";
      document.getElementById("girlName").value = "";
      document.getElementById("result").innerHTML = "";
    } 
    
    function calculateFlames(){

      const boyName = document.getElementById("boyName").value.trim();
      const girlName = document.getElementById("girlName").value.trim();

      if(boyName === "" || girlName === ""){
        alert("Please enter both names");
        return;
      }

      let steps = [];

      let boy = normalize(boyName).split('');
      let girl = normalize(girlName).split('');

      steps.push("Boy Name: " + boyName);
      steps.push("Girl Name: " + girlName);

      // Remove common characters
      for(let i=0; i<boy.length; i++){

        for(let j=0; j<girl.length; j++){

          if(boy[i] === girl[j]){

            steps.push("Common Character Removed: " + boy[i]);

            boy.splice(i,1);
            girl.splice(j,1);

            i--;
            break;
          }
        }
      }

      steps.push("Remaining Boy Letters: " + boy.join(''));
      steps.push("Remaining Girl Letters: " + girl.join(''));

      let count = boy.length + girl.length;

      steps.push("Remaining Count: " + count);

      let flames = ['F','L','A','M','E','S'];

      let index = 0;

      while(flames.length > 1){

        index = (index + count - 1) % flames.length;

        steps.push("Removing Letter: " + flames[index]);

        flames.splice(index,1);

        steps.push("Current FLAMES: " + flames.join(' '));
      }

      let result = "";

      switch(flames[0]){

        case 'F':
          result = "😄FRIENDS😄";
          break;

        case 'L':
          result = "💖LOVE💖";
          break;

        case 'A':
          result = "😊AFFECTION😊";
          break;

        case 'M':
          result = "🤵MARRIAGE👰";
          break;

        case 'E':
          result = "😠ENEMY😠";
          break;

        case 'S':
          result = "💞SIBLINGS💞";
          break;

        default:
          result = "🤔UNKNOWN🤔";
      }

      steps.push("Final Result: " + result);

      // Display Output
      let output = `
        <div class="result-box">
          <div class="final-result">
            🔥 ${result} 🔥
          </div>

          <h2 class="result-title">FLAMES Calculation</h2>
          `;

      steps.forEach(step => {
        output += `<div class="step">${step}</div>`;
      });
      output += `<button onclick="resetForm()">Once More</button>`;
      output += `</div>`;

      document.getElementById("result").innerHTML = output;
    }