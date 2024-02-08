const ansCheck = (userAnswer, rightAnswer, name) => {
    if(userAnswer===rightAnswer){
        console.log('Correct!');
        return true;
    }
    else{
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        return false;
    }
}

export default ansCheck;
