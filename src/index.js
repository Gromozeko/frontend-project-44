const ansCheck = (userAnswer, rightAnswer, name) => {
    if(userAnswer===rightAnswer){
        console.log('Correct!');
        return true;
    }

        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${question.hiddenValue}'.`);
        console.log(`Let's try again, ${name}!`);
        return false;

}
