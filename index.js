const subjects = ['You', 'I', 'They', 'We', 'He', 'She']
const verbs = ['love', 'hate', 'dislike', 'enjoy']
const objectives = ['running', 'coding', 'reading', 'playing', 'swimming']

const generateMessage = () => {
    const randomSubject = subjects[Math.floor(Math.random()* subjects.length)];
    const randomVerb = verbs[Math.floor(Math.random()* verbs.length)];
    const randomObjective = objectives[Math.floor(Math.random()* objectives.length)];
    
    return `${randomSubject} ${randomVerb} ${randomObjective}.`;
}

const randomMessage = generateMessage();
console.log(randomMessage)