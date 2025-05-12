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