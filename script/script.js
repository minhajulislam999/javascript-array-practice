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

//Nesting practice Example 1

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

//practce 1:

{
    const restaurant = {
        FastFood: {
            items: ["Burger", "Pizza"]
        },

        Drinks: {
            items: ["Coke", "Juice"]
        }
    }
}

//🧠 Practice 2:

{
    const student = {
        exams: {
            midterm: {
                math: [90],
                english: [65]

            },
            final: {
                math: [70],
                english: [40]

            }

        }
    }
}

//🧠 Practice 3:

{
    const hospital = {
        departments: [
            {
                name: "Cardiology",
                doctors: [
                    {
                        name: "jahangir kabir",
                        experience: 40
                    }
                ]
            },
            {
                name: "medicine",
                doctors: [
                    {
                        name: "tawhid",
                        experience: 5
                    }
                ]
            },
            {
                name: "nurology",
                doctors: [
                    {
                        name: "jamil",
                        experience: 8
                    }
                ]
            }

        ]
    }
    console.log(hospital);
}

//✅ Practice Set 1:

{
    const hospital = {
        departments: [
            {
                name: "Cardiology",
                doctor: {
                    name: "nasrullah",
                    experience: 40

                }
            },
            {
                name: "Medicine",
                doctor: {
                    name: "asif mahmud",
                    experience: 30
                }
            },
            {
                name: "Neurology",
                doctor: {
                    name: "Ahmadullah",
                    experience: 7
                }
            }
        ]
    };
    console.log(hospital.departments[0].doctor.name)
    //cardiology doctor name is nasrullah

    console.log(hospital.departments[1].name)
    //asif mahmud's department is medicine

    console.log(hospital.departments[2].doctor.experience)
    //neurology doctor's experience is 7 years
}

//📌 প্রশ্ন ২:

{
    const university = {
        faculties: [
            {
                name: "Science",
                courses: [
                    {
                        name: "Physics",
                        credits: 3
                    },
                    {
                        name: "Chemistry",
                        credits: 4
                    }
                ]

            },
            {
                name: "Arts",
                courses: [
                    {
                        name: "history",
                        credits: 2
                    }

                ]


            }
        ]
    }
    console.log(university.faculties[0].courses[0])
    //3 credits for physics

    console.log(university.faculties[0].courses[1].name)
    //chemistry is second faculty in since department


    console.log(university.faculties[1].courses[0].credits)
    //2 credits in arts faculty

}

//📌 প্রশ্ন ৩:

{
    student = {
        name: "Rahim",
        exams: [
            {
                midterm: {
                    english: 34,
                    math: 30
                },
                final: {
                    english: 89,
                    math: 90
                }
            }
        ]
    }

    console.log(student.exams[0].final.english)
    //the final result of english is 89

    console.log(student.exams[0].midterm.math)
    //midterm result is 30

    console.log(student.exams[0].final.math)
    //final result of math is 90

    console.log(student.exams[0].midterm.english)
    //the result is 34
}

//📌 প্রশ্ন ৪:

{
    const travel = {
        countries: [
            {
                name: "Japan",
                cities: [
                    "Tokyo", "Kyoto", "Osaka"
                ]
            },
            {
                name: "USA",
                cities: [
                    "New York", "Los Angeles", "Chicago"
                ]
            }
        ]
    };

    console.log(travel.countries[0].cities[1]);
    //the second citie of japan is kyoto
    console.log(travel.countries[1].cities[2])
    //the third citie of usa is chicago
}

{
    const shop = {
        category: [
            {
                name: "Fruits",
                items: [
                    { name: "Apple", price: 30 },
                    { name: "Banana", price: 10 }
                ]
            },
            {
                name: "Vegetables",
                items: [
                    { name: "Carrot", price: 10 }
                ]
            },
        ]
    };
    console.log(shop.category[0].items[1]);
    //the first item is banana in shop category

    console.log(shop.category[1].items.length)
    //there is one item in the second category of the shop
}

//✅ প্রশ্ন সেট (তুমি নিজে কোড লিখবে)

//📌 প্রশ্ন ১:

{
    const school = {
        class: [
            {
                name: "Class 7",
                students: [
                    { name: "Arif", roll: 9 },
                    { name: "Ahamad", roll: 8 }
                ]
            },
            {
                name: "Class 8",
                students: [
                    { name: "Jamal", roll: 5 },
                    { name: "Rimon", roll: 6 }
                ]
            }
        ]
    };
    console.log(school.class[1].students[0].name);
    //the student name of second class is jamal
}

//📌 প্রশ্ন ২:

{
    const library = {
        section1: [
            {
                name: "Fiction",
                books: [
                    { title: "1984", author: "George Orwell" },
                    { title: "To Kill a Mockingbird", author: "Harper Lee" }
                ]
            },

        ],
        section2: [
            {
                name: "Non Fiction",
                books: [
                    { title: "Atomic Habits", author: "James Clear" },
                    { title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki" },
                ]
            }

        ]
    };
    console.log(library.section1[0].books[1].title);
    //the second book name is To  kill a mockngbird in section 1
}

//📌 প্রশ্ন ৩:

{
    const restaurant = {
        menuCategory: [
            {
                name: "Main Course",
                items: [
                    { name: "Kacchi biriyani", price: 300 },
                    { name: "Jali kabab", price: 100 }
                ]
            },
            {
                name: "Drink",
                items: [
                    { name: "Burhani", price: 80 },
                    { name: "Cold coffe", price: 200 }
                ]
            }
        ]
    };
    console.log(restaurant.menuCategory[0].items[1].price);
    //the second item price is 100 tk in the main course
}