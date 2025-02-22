console.log('custom.js loaded');
     const servicesDiv = document.querySelectorAll('.services-group');
     for(let i = 1; i < servicesDiv.length; i++) {
          const newElement = document.createElement('div');
          newElement.classList.add('resume');
          newElement.innerHTML = '<h2>Titre</h2><p>Service description</p>';
          servicesDiv[i].appendChild(newElement);
     }

     let descriptions = document.querySelectorAll('.resume p');
     let title = document.querySelectorAll('.resume h2');

     if (title.length > 0) {
          title[0].textContent = " MIOUM MIOUM MIOUM";
          descriptions[0].textContent = "Pantagruweb a bien mangé et se sent un peu ballonné, mais cela ne le gêne pas, au contraire : il est convaincu que l'accumulation de gaz dans son estomac finira par lui permettre de s'envoler, telle une bulle de savon. En attendant, il a fait le serment de conserver, de valoriser et de rendre accessible au plus grand nombre les exquis morceaux de web dont il s'est régalé.";
     }

     if (title.length > 1) {
          title[1].textContent = " Pantagruweb a faim";
          descriptions[1].textContent = "Pris d'une fringale impitoyable et vieille comme le siècle, Pantagruweb dévore internet avec paresse et minutie.Son ventre - à - bière, ce poisson - globe aérobique, gonfle, mais jamais n’éclate.Cet abdomen distendu, nous l'appellerons Unser Bierbauch, Car nous sommes Pantagruweb.";
     }
