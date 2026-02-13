 let lastIndex = -1; // to prevent same name twice

        function startLove() {
            // Floating emojis
            let emojis = ["❤️", "💖", "💘", "😍", "😌", "🥰", "😂"];
            for (let i = 0; i < 30; i++) {
                let heart = document.createElement("div");
                heart.classList.add("float");
                heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
                heart.style.left = Math.random() * window.innerWidth + "px";
                heart.style.animationDuration = (4 + Math.random() * 3) + "s";
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 7000);
            }

            // Random names (max 3 words)
            let names = [
                "Elle 💕",
                "Diva 😌",
                "Crampy Legs 😂",
                "Future RPh 👀",
                "Sunshine Girl ☀️",
              
                
            ];

            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * names.length);
            } while (randomIndex === lastIndex);
            lastIndex = randomIndex;

            // Display glowing name
            let nameDiv = document.createElement("div");
            nameDiv.classList.add("glow-name");
            nameDiv.innerHTML = names[randomIndex];
            let container = document.getElementById("nameContainer");
            container.innerHTML = "";
            container.appendChild(nameDiv);
        }