const countries = ["Bangladesh", "Pakistan", "Afghanistan"];


console.log(countries[0]);


const fruits = ["apple", "orange", "lemon", "grape", "banana"];

fruits[2] = "pineapple";

fruits.push("watermelon");

console.log(fruits);


//✅ Example 1: সরাসরি অ্যারে তৈরি করা (Array Literal)
//javascript
//Copy code

{
    const fruits = ["apple", "banana", "orange"];
    console.log(fruits);

}

{
    //✅ Example 2: একের পর এক লাইনে লেখা (Multiple lines)

    const animals = [
        "cat",
        "dog",
        "cow"
    ];
    console.log(animals);

}

{
    //✅ Example 3: প্রথমে খালি অ্যারে, পরে ভ্যালু দেওয়া
    //javascript
    //Copy code

    const vegetables = [];
    vegetables[0] = "carrot";
    vegetables[1] = "tomato";
    vegetables[2] = "onion";
    console.log(vegetables);

}

{
    //✅ Example 4: সংখ্যা দিয়ে অ্যারে
    //javascript
    //Copy code

    const numbers = [10, 20, 30, 40, 50];
    console.log(numbers);
}

{
    //✅ Example 5: মিশ্র মান (Mixed Values)
    //javascript
    //Copy code



    const mixed = ["apple", 10, true, null];
    console.log(mixed);
}

{
    //✅ Example 6: একই অ্যারেতে নতুন মান যোগ (push)


    const colors = ["red", "green", "blue"];
    colors.push("yellow");
    console.log(colors);

}

{
    //✅ Example 7: অ্যারে থেকে শেষের মান বাদ দেওয়া (pop)


    const cities = ["Dhaka", "chittagong", "Sylhet"];
    cities.pop();
    console.log(cities);
}

{
    //✅ Example 8: অ্যারে থেকে প্রথম মান বাদ দেওয়া (shift)


    const bikes = ["Yamaha", "Honda", "Suzuki"];
    bikes.shift();
    console.log(bikes);
}

{
    //✅ Example 9: অ্যারেতে প্রথমে মান যোগ করা (unshift)


    const drinks = ["Coke", "Pepsi"];
    drinks.unshift("Sprite");
    console.log(drinks);
}

{
    //✅ Example 10: অ্যারে আইটেম গোনা (length)


    const mobiles = ["iPhon", "Samsung", "Realme", "Oppo"];
    console.log(mobiles.length);
}

{
    //✅ Example 11: নির্দিষ্ট index থেকে মান বের করা


    const animals = ["cat", "dog", "cow", "goat"];
    console.log(animals[2]);
}

{
    //✅ Example 12: নির্দিষ্ট index এর মান পরিবর্তন করা


    const birds = ["sparrow", "parrot", "pigeon"];
    birds[1] = "eagle";
    console.log(birds);
}

{
    //✅ Example 13: অ্যারের সব আইটেম একসাথে যোগ (join)


    const letters = ["A", "B", "C", "D"];
    const result = letters.join("+");
    console.log(result);
}

{
    //✅ Example 14: অ্যারে উল্টে দেওয়া (reverse)


    const nums = [1, 2, 3, 4, 5];
    nums.reverse();
    console.log(nums);
}

{

    //✅ Example 15: অ্যারে সাজানো (sort)


    const names = ["Minhaj", "Rafi", "Jamal", "Arif"];
    names.sort();
    console.log(names);
}

//-----------------

{
    const fruits = ["apple", "banana", "orange"];
    console.log(fruits);
}

{
    const fruits = [
        "lemon",
        "grape",
        "peanut"
    ]
    console.log(fruits);
}

{
    const bikes = [];
    bikes[0] = "car";
    bikes[1] = "bike";
    bikes[2] = "bus";
    console.log(bikes);
}

{
    const numbers = [10, 20, 30, 40, 50];
    console.log(numbers);
    const a = new Array(10, 20);
    console.log(a);

}
{
    const mixed = ["string", 10, true, null, undefined];
    console.log(mixed);
}

{
    const villages = ["hakim akhtar", "shah akhtar", "thanbi nagar"];
    console.log(villages[1]);
}

{
    const animals = ["dog", "cat", "cow"];
    animals[0] = "tiger";
    console.log(animals);
}

{
    const countries = ["Bangladesh", "Pakistan", "Madina"];
    console.log(countries[0]);
}

{
    const onlyMangoes = [];
    onlyMangoes[0] = "langra";
    onlyMangoes[1] = "Himsagar";
    onlyMangoes[2] = "Fazli";
    console.log(onlyMangoes);
}

//Ans: 3

{
    const mixed = ["string", 10, false, null];
    console.log(mixed)
}

//Ans: 4
{
    const arrayPush = ["string", "number", "boolian", "null", "undefined"]
    arrayPush.push("pushMathod");
    console.log(arrayPush);
}

//Ans: 5
{
    const mobiles = ["Symphony", "itel", "chinaPhon", "iPhone"];
    mobiles.pop();
    console.log(mobiles);
}


//Ans: 6
{
    const countries = ["india", "Pakistan", "Bangladesh"];
    countries.shift();
    console.log(countries);
}

//Ans: 7
{
    const countries = ["India", "Pakistan"];
    countries.unshift("Bangladesh");
    console.log(countries);
}

//Ans: 8

{
    const count = [12, 23, 34, 56,];
    console.log(count.length);
}

//Ans:9
{
    const joningar = ["a", "b", "c", "d",];
    const result =joningar.join("-");
    console.log(result);
}

//Ans:10
{
    const reverted=[1,2,3,4,];
    reverted.reverse();
    console.log(reverted);
}