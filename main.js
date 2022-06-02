let subjects = ['Van Gogh', 'Elvis Presley', 'Leonardo Da Vinci', 'Marlon Brando', 'Henry VIII', 'Luis XIV', 'Alexander the Great', 'Julius Caesar', 'George Washington'];
let actions = ['ate', 'gave a speech in', 'drank from', 'conquered', 'declared', 'lost a game of', 'filled up a', 'thought about buying', 'danced to the sound of', 'fought against' /
'smelled like', 'conducted an investigation on', 'ratified the treaty about', 'married a large', 'ensured the protection of', 'looked like', 'experienced', 'is dealing with', 'found his way out of a big'];
let objects = ['a bag of chips', 'a pair of sandals', 'slice of bread', 'bankrupcy', 'tuna', 'ice cream', 'various birds', 'an old chunk of coal', 'free geese', 'treasury bills', 'debt', 'alcohol', 'dispair', 'cheese', 'upset stomach', 'a sandwich', 'a small mental breakdown'];

for (let i = 0; i < actions.length; i++) {
    actions[i] = ' ' + actions[i] + ' ';
}

let randomComponentGenerator = function(subjectArray, actionArray, objectArray) {
    let subject_index = Math.floor(Math.random() * (subjectArray.length - 1));
    let actions_index = Math.floor(Math.random() * (actionArray.length - 1));
    let objects_index = Math.floor(Math.random() * (objectArray.length - 1));

    let subjectComponent = subjectArray[subject_index];
    let actionComponent = actionArray[actions_index];
    let objectComponent = objectArray[objects_index];
    return [subjectComponent, actionComponent, objectComponent];
}

function randomMessageGenerator(subjectArray, actionArray, objectArray) {
    let generatedMessage = randomComponentGenerator(subjectArray, actionArray, objectArray).join('');
    return generatedMessage;
}



console.log(randomMessageGenerator(subjects, actions, objects));