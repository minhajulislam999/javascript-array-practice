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
    const result = joningar.join("-");
    console.log(result);
}

//Ans:10
{
    const reverted = [1, 2, 3, 4,];
    reverted.reverse();
    console.log(reverted);
}

{
    const student = {
        name: "Minhaj",
        class: 10,
        marks: {
            math: 90,
            science: 85,
            english: 88
        }
    };
    console.log(student.marks.science);//এখানে সাইন্সের নম্বর ডট নোটেশন ব্যবহার করে বের করা হয়েছে 
}

//Nasting

{
    const library = {
        name: "Central Library",
        books: [
            { title: "JavaScript Basics", author: "John Doe" },
            { title: "HTML & CSS", author: "Jane Smith" }
        ]
    };
    console.log(library.books[1].title);//Second book's name: HTML & CSS
}

{
    const shop = {
        name: "Fresh Mart",
        products: [
            { name: "Apple", prices: [10, 15, 20] },
            { name: "Banana", prices: [5, 7, 9] }
        ]
    };
    console.log(shop.products[0].prices[2]); //third apple price: 20
}

//Exaple 4
{
    const data = [
        { id: 1, name: "A", hobbies: ["reading", "coding"] },
        { id: 2, name: "B", hobbies: ["writing", "traveling"] }
    ];
    console.log(data[0].hobbies[0]); //The first hobby of the second person is reading
}

//Example 5
{
    const school = {
        teachers: [
            {
                name: "Mr. Rahim",
                subjects: ["Math", "Physics"]
            },
            {
                name: "Ms. Karim",
                subjects: ["English", "Biology"]
            }
        ]
    };
    console.log(school.teachers[1].subjects[1]);// the second subject of the second teacher is biology
}

//Neting practice Example 1

const company = {
    name: "TechZone",
    departments: [
        {
            name: "Development",
            employees: [
                { name: "Alice", skills: ["JavaScript", "React"] },
                { name: "Bob", skills: ["Python", "Django"] }
            ]
        },
        {
            name: "Marketing",
            employees: [
                { name: "Charlie", skills: ["SEO", "Content"] }
            ]
        }


    ]



};

console.log(company.departments[0].employees[1].skills[1])
//bob's second skill is Django

console.log(company.departments[1].employees);
//there is one employee in the marketing department

console.log(company.departments[0].employees[0])
//the name of first employee in the development department is Alice

const university = {
    faculties: [
        {
            name: "Science",
            courses: [
                { name: "Physics", credits: 3 },
                { name: "Chemistry", credits: 4 }
            ]
        },
        {
            name: "Arts",
            courses: [
                { name: "History", credits: 2 }
            ]
        }
    ]
};
console.log(university.faculties[0].courses[1]);
//the name of the second course in the science is Chemistry

console.log(university.faculties[1].courses[0].credits)
//there are 2 credits in the first course in the Arts faculty.

console.log(university.faculties)

//The total number of faculties is 2

//Example 3:

{
    const travel = {
        countries: [
            {
                name: "Japan",
                cities: ["Tokyo", "Kyoto", "Osaka"]
            },
            {
                name: "USA",
                cities: ["New York", "Los Angeles", "Chicago"]
            }

        ]
    };

    console.log(travel.countries[1].cities[1])
    //the name of the second city in the usa is los angeles

    //i can't do loops
}

{
    const student = {
        name: "Rahim",
        exams: {
            midterm: {
                math: 80,
                english: 75
            },
            final: {
                math: 85,
                english: 78
            }
        }
    };
    console.log(student.exams.final.english)
    //the final number of english is 78

    console.log(student.exams.midterm.math + student.exams.final.math)
    //the total number of midturm and final math is 165

    // console.log(student.exams.final.math + student.exams.)

    // console.log(student)
}

//Example 5

{
    const shop = [
        {
            category: "Fruits",
            items: [
                { name: "Apple", price: 30 },
                { name: "Banana", price: 10 }
            ]
        },
        {
            category: "Vegetables",
            items: [
                { name: "Carrot", price: 15 }
            ]
        }
    ];

    console.log(shop[0].items[1]);
    //name and price of fruits categories is Banana , 10

    console.log(shop[1].items.length)
    //one item is in vegetables category


}

