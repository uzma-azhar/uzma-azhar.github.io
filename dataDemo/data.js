/*
    JS is Loose-Typed like Python

    python declaration
        num = 1             - num is an integer
        letter = 'A'        - letter is a string / char

    JS declaration
        variables: 

        var num = 1;
        -or-                - num is an integer
        let num = 1;

        var letter = 'A';
        -or-                - letter is a char
        let letter = 'A';

        constants:          - can't make these in python

        const NUM2 = 10;    - NUM2 is an integer that cannot change value

    In JavaScript, var and let are used to declare variables, but they have 
    some differences in terms of their scope and behavior.
    The main difference between var and let is their scope. var has function-level scope, 
    which means that a variable declared with var is accessible throughout the entire function, 
    including any nested blocks. However, if a variable is declared with var outside of a function, 
    it will be accessible globally.
*/

// declar a variable to hold a name
let name = 'Pac-Man';

// display the value of name to the console
console.log(`${name} evades ghosts on boards of dots and fruits`)

// JS objects - store values in value / key pairs
let inky = {
    name: 'Inky',
    color: 'Blue'
};

let pinky = {
    name: 'Pinky',
    color: 'Pink'
};

let blinky = {
    name: 'Blnky',
    color: 'Red'
};

let clyde = {
    name: 'Clyde',
    color: 'Orange'
};

// display key value from an object
console.log(`${inky.name} is ${inky.color}`)

// arrays in JS can be made in two ways:

// 1. initialization lists
let values = [1, 2, 3, 4, 5];

// 2. empty array where values are pushed
let group2Teams = [];
// use the .push() command to add to an array - similar to append
group2Teams.push('Team Alpha');
group2Teams.push('Team Beta');
group2Teams.push('Team Gamma');
group2Teams.push('Team Delta');
group2Teams.push('Team Epsilon');
group2Teams.push('Team Zeta');
group2Teams.push('Team Eta');
group2Teams.push('Team Theta');

// display the info from the arrays
// don't need to add `` unless we add extra text
// also don't really need ; at the end of code in JS anymore
// indentation doesn't matter in JS butlooks nice

console.log(values);

console.log(group2Teams)

/*
    // use relational operations to implement decisions

    >   - greater than
    <   - less than
    >=  - greater than or equal 
    <=  - less than or equal 
    ==  - is equal (loose comparison) 1 == '1' - true (will ignore data type)
    === - is equal to (strict comparison does not include the data type)
            1 === '1' - false
    !   - logical not (flip the value of a boolean)
    !=  - is not equal
    &&  - logical and (inclusive)
    ||  - logical or (optional)

    // single alternative decisions - has () but no : and curly braces are needed for multiple statements
    if (condition)
    {
        statement(s);
    }

    // dual alternative
    if (condition)
    {
        statement(s);
    }
    else
    {
        statement(s);
    }

    // multiple alternative
    if (condition)
    {
        statement(s);
    }
    else if(condition)
    {
        statement(s);
    }
    else
    {
        statement(s);
    }

    // switch statements used for very specific values - specify an individual case for each value
    // not great to use for large values
    // anything you can do with a switch statement you can do with an if else if statement
    switch(variable)
    {
        case value:
            statement(s);
            break;
        case anotherValue:
            statement(s);
            break;
        default:
            statement(s);
            break;
    }
*/

/*
    // looping

    // pretest and posttest loops

    // while - pretest

    while (condition)
    {
        statement(s);
    }

    // for - pretest

    for (start, condition, amount to change)
    {
        statement(s);
    }

    // do-while - posttest - will execute statement and then check for condition so use it when
    // you want the execution to happen one more time before condition is changed

    do
    {
        statement(s);
    }while(condition);
*/

// use a for loop to access and display the contents of the arrays one-by-one
for (var i = 0; i < group2Teams.length; i++)
{
    console.log(group2Teams[i]);
}