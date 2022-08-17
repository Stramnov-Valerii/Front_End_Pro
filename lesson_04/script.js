let threeWords = confirm(`Tell me three most important words 💚`);
    finalString = ``;
    i = 1;
const COUNT_OF_WORDS = 3;
    switch (threeWords) {
        case false:
            break;  
        case true:
            while (i<=COUNT_OF_WORDS){
                i++ ;
                threeWords = prompt(`Please input your word`);
                while (!threeWords || threeWords === null || !isNaN(threeWords) || threeWords.includes(0) || threeWords.includes(1) || threeWords.includes(2) || threeWords.includes(3) || threeWords.includes(4) || threeWords.includes(5) || threeWords.includes(6) || threeWords.includes(7) || threeWords.includes(8) || threeWords.includes(9)) {
                    threeWords = prompt(`Please input your word`);
                };
                let chooseFormat = prompt(`Please choose format type: uppercase/lowercase/capitalize`);
                while (!chooseFormat || chooseFormat === null || chooseFormat !== `uppercase` && chooseFormat !== `lowercase` && chooseFormat !== `capitalize`) {
                    chooseFormat = prompt(`Please choose format type: uppercase/lowercase/capitalize`);
                };
                switch (chooseFormat) {
                    case `uppercase`:
                        threeWords = threeWords.toUpperCase();
                        break;
                    case `lowercase`:
                        threeWords = threeWords.toLowerCase();
                        break;
                    case `capitalize`:
                        threeWords = threeWords.charAt(0).toUpperCase() + threeWords.slice(1).toLowerCase();
                        break;
                };
                finalString += threeWords;
                if(i === (COUNT_OF_WORDS + 1)){
                    finalString += `!`
                } else{
                    finalString += ` `;
                }
            };
    }
    console.log (finalString);