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


//✅ প্রশ্ন সেট – ১ (Medium Level)

//📌 প্রশ্ন ১:

{
    const university = {
        department: [
            {
                name: "Computer Science",
                courses: [
                    { name: "Programming", credits: 3 },
                    { name: "Data Structure", credits: 4 }

                ]

            },
            {
                name: "English",
                courses: [
                    { name: "Literature", credits: 2 },
                    { name: "Writing Skills", credits: 3 }
                ]
            }

        ]
    }
    console.log(university.department[0].courses[1]);
    //the second course of computer department is Data structure and it has tow credits


    console.log(university.department[1].courses[0].credits)
    //the first course of english department is two credits

    console.log(university.department[1].courses[1].name);
    //the name of second english course is writing skills.
}

//📌 প্রশ্ন ২:

{
    const movieTheater = {
        Screen1: {
            Movies: [
                { name: "Inception", ShowTime: "7.00pm" },
                { name: "Interstellar", ShowTime: "9.30pm" }
            ]
        },
        Screen2: {
            Movies: [
                { name: "Avengers", ShowTime: "6:00pm" },
                { name: "Iron Man", ShowTime: "8:30pm" }
            ]
        }

    };
    console.log(movieTheater.Screen1.Movies[1].ShowTime);
    //The ShowTime is second cinema is 9:30pm

    console.log(movieTheater.Screen2.Movies[0].name);
    //the first cinema name of screen 2 is Avengers

    console.log(movieTheater.Screen2.Movies[1].ShowTime);
    //ShowTime of iron man movie is 8:30pm 
}

//📌 প্রশ্ন ৩:

{
    const employeeData = {
        departments: {
            HR: [
                {
                    Employees: [
                        { name: "Salma", Position: "Manager" },

                    ]
                }
            ],
            IT: [
                {
                    Employees: [
                        { name: "Riyad", Position: "Developer" }
                    ]
                }
            ],
            Accounts: [
                {
                    Employees: [
                        { name: "Karim", Position: "Accountant" }
                    ]
                }
            ]
        }
    };
    console.log(employeeData.departments.IT[0].Employees[0].name);
    //the employe of it department is Riyad.

    console.log(employeeData.departments.Accounts[0].Employees[0].name);
    //employee of accountent department is karim

    console.log(employeeData.departments.HR[0].Employees[0].name);
    //the employee name of hr department is salma. 
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.toString())


    document.getElementById("demo").innerHTML = fruits.toString();
}

{
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.length);
    //size of length is 4
}

{
    const emptyArray = [];
    console.log(emptyArray.length);
    //length of empty array is zero

    //length property is riturn length that means size of an array

}
{
    const colors = ["Red", "Green", "Blue"];
    let size = colors.length;
    console.log(size)
    //this property length is 3

    let size2 = colors.push("Yellow");
    console.log(size2);
    //yes push method retuns new array length like this example 4
}

{
    const myArray = ["Pen", "Pencil"];
    myArray[5] = "Eraser";
    console.log(myArray.length);
    console.log(myArray[4]);
    //the value of myArray.length is 6
}
{
    const lgtpd = ["a", "p", "l"];
    console.log(lgtpd[2].length);
    //defines the last element frome an array by using length properties is declare the array name first breaket then use the index number 

}
{
    const data = ["A", "B", "C"];
    data.length = 5;
    console.log(data);
    //this array number is 5. after the two element javascript create some emty array to 5
}
{
    const myArray = [10, 20, 30, 40];
    let terray = myArray.length = 0;
    console.log(myArray)
    console.log(terray);
    //the whay to delete all elements frome array by using lenth method is .length=0 that means this length equal zero then console it length is zero 
}
{
    const numbers = [1, 2, 3, 4, 5];
    const number = numbers.length;
    console.log(number);
    //this code length is 5
}

{
    const elementArray = ["oneElement", "TwoElement", "ElementThree"];
    const deleted = elementArray.pop();
    console.log(elementArray.length);
    //if we delete the element frome array by pop method then array is 2

}
{
    const items = ["book", "pen"];
    items[4] = "pencil";
    console.log(items.length);
    //out put is here is 5 becouse it self create some emty method bydefault

}
{
    const x = [10, 20, 30];
    const lastElement = x.length - 1;
    const properdy = x[lastElement];
    console.log(properdy);
    //by this way we may solve this problem

}
{
    const arr = [100, 200];
    arr.length = 4;
    console.log(arr[3]);
    //in arr[3] is undefined
}
{
    const a = ["x", "y", "z"];
    const b = a.length = 0;
    console.log(b);
    //i solved this prolem by using this zero methods
}

{
    const b = [1, 2, 3, 4, 5];
    const c = b.length = 2;
    console.log(c);
    //i will manupulate this way javascript not know why not javascript is  fooish
}
{
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const b = a.length = 5;
    console.log(b);
    //
}

{
    let myList = ["Milk", "Bread", "Egg"];
    console.log("Total items:", myList.length);

    myList.push("Butter");
    console.log("New item added. Total items now:", myList.length);

    myList.pop();
    console.log("Last item removed. Total items now:", myList.length);

    myList.length = 2;
    console.log("Truncated list:", myList);

    myList.length = 0;
    console.log("All items deleted. Total items now:", myList.length);

    console.log("Thank you for using Array Manager App");
}

{
    let garden = ["Mango", "Guaba", "Deets", "Agacha"];
    garden.pop();
    console.log(garden);

    garden.push("Banana", "Data", "Pepe");


    console.log(garden.length);
}
{
    // This is a copy of the documentation;
    //  I learned from it. 
    //  Now give me a practice task based on it
}
{
    const colors = ["Red", "Green", "Blue", "Yellow"];
    const color = colors.toString()
    console.log(color);
}
{
    const numbers = [10, 20, 30, 40, 50];
    const number = numbers.toString();
    console.log(number);
}
{
    const mixed = ["Apple", 42, true, "Orange"];
    const mixString = mixed.toString();
    console.log(mixString);
}
{
    const menu = ["greel", "butter nun", "card", "lacchi"];
    const menuTo = menu.toString();
    console.log(menuTo);
}
{
    const arr = [100, 200, 300];
    console.log(arr.toString());
}
{
    const data = ["JavaScript", 2025, true];
    const dataString = data.toString;
}
{
    const mixed = ["String", 100, true];
    const mixString = mixed.toString();
    console.log(mixString);
}
{
    const letters = ["A", "B", "C", "D"];
    const letterString = letters.toString();
    console.log(letterString);
}

//✅ প্র‍্যাকটিস প্রশ্ন (JavaScript Array at())

{
    const colors = ["Red", "Green", "Blue", "Yellow"];
    const color = colors.at(1);
    console.log(color);

    const numbers = [10, 20, 30, 40, 50];
    const number = numbers.at(-1);
    console.log(number);

    const days = ["Sun", "Mon", "Tue", "Web", "Thu"];
    const day = days.at(-2);
    console.log(day);

    const fruits = ["Apple", "Banana", "Orange", "Mango"];
    const fruit = fruits.at(-2);
    console.log(fruit);

    const items = ["Pen", "Pencil", "Eraser"];
    const itme = items.at(100);
    console.log(itme);
    //this is return undefind
}

//✅ প্র্যাকটিস প্রশ্ন (Array.at):

{
    const letters = ["A", "B", "C", "D", "E"];
    const letter = letters.at(-3);
    console.log(letter);
    //this a one way 
    const letter1 = letters.at(2);
    console.log(letter1);
    //this is another method.

    const scores = [45, 55, 65, 75, 85];
    const score = scores.at(-1);
    console.log(score);

    const mix = ["Apple", 10, true, null, "End"];
    console.log(mix.at(-2));
    //will get 4th index that is null 


    const emptyArray = [];
    const emty = emptyArray.at(0);
    console.log(emty);
    //emty will return undefined 


    const data = ["X", "Y", "Z"];
    const d = data.at(5);
    console.log(d);
    //this method also return undefined

    const months = ["Jan", "Feb", "Mar", "Apr", "May"];
    const month = months.at(-3);
    console.log(month);
    //this method will return "mar", because it is third frome the end.


    const custom = ["First", "Second", "Third", "Fourth"];
    const cust = custom.at(-1);
    console.log(cust);

}
{
    //✅ Practice 1:


    const names = ["Minhajul", "Islam", "Hero"];
    const joining = names.join(" ");
    console.log(joining);


    //✅ Practice 2:

    const numbers = [10, 20, 30, 40];
    const number = numbers.join("-");
    console.log(number);

    //✅ Practice 3:

    const vowels = ["A", "E", "I", "O", "U"];
    const vowels1 = vowels.join("|")
    console.log(vowels1);


    //✅ Practice 4:

    const mix = ["Apple", 100, true, "Orange"];
    const mixed = mix.join("")
    console.log(mixed);


    //✅ Practice 5 (Bonus):

    const emptyArray = [];
    const emty = emptyArray.join(",");
    console.log(emptyArray);
    //this emty array return also empty array written in the array lenth 0

}
{
    const animals = ["Tiger", "Lion", "Elephant"];
    animals.pop();
    console.log(animals);

    //the last item elephent will be removed, and tigar and lion will remain.




    //✅ Practice 2:

    const colors = ["Red", "Green", "Blue"];
    const removed = colors.pop();
    console.log("Removed:", removed);
    console.log("Now:", colors);
    //blue will remove and new array will be red, green


    //✅ Practice 3:


    const books = ["Math", "Science"];
    books.push("English");
    console.log(books);
    //english book will join and return as new array lenth


    //✅ Practice 4:

    const scores = [90, 85];

    let newLength = scores.push(75);

    console.log("Length:", newLength);
    console.log("Scores:", scores);
    //75 will add in the array, and the will return new array lenth is 3
    //75 will be added to the array, and it will return the new array length as 3.



    //✅ Practice 5 (Mix):



    const foods = ["Burger", "Pizza"];
    foods.push("Pasta");
    foods.pop();
    console.log(foods);
    //will only remain  pizz and pasta will be added then will be removed.

}

{
    const languages = ["JavaScript", "Python", "C++", "Java"];
    const language = languages.shift();
    console.log("Removed:", language);
    //becouse of using shift, the first item "JavaScript" has been removed.

    console.log("Now:", languages);
    //now this three remain:"Python", "C++", "Java"


    const newArrayLength = languages.unshift("HTML");
    console.log("New Length:", newArrayLength)
    console.log("Updated:", languages);
    //i followed your instruction. check how it lokks



}
{
    const countries = ["Bangladesh", "Nepal", "Bhutan", "Maldives"];
    const remove = countries.shift();
    const remo = countries.shift();
    console.log("removed 2countries:", remove, remo);
    console.log("Now:", countries);
    //I used the method to delete the first two items.

    const lengthArray = countries.unshift("Japan", "Korea");
    console.log(lengthArray);
    //using unshift i added japan ana korea to the beginning of the array, now length 4.





}
{
    const countries = ["India", "China", "Thailand", "Vietnam"];
    const countryShift = countries.shift();
    console.log("removed:", countryShift);
    //using shift method first index removed.

    const pushing = countries.push("Singapore");
    console.log("added a country in last index:", pushing);
    //pushed a new country

    const unshifting = countries.unshift("Sri Lanka");
    console.log("A new country unshifed in first index:", unshifting);
    //a new country unshifed in the first index


    const poping = countries.pop();
    console.log("last index item removed:", poping);
    //last item removed
    console.log("total countries:", countries, "total length:", countries.length);
    //total countries consoled and lengthed
}
{
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
    fruits.shift();
    fruits.shift();
    console.log(fruits);
    //first two item removed

    fruits.unshift("Fig", "Grapes");
    console.log(fruits);
    //added two item in first index

    fruits.push("Honeydew", "Indian Fig");
    console.log(fruits);
    //added two items in the last index

    fruits.pop();
    console.log(fruits);
    //one item removed from the last index

    console.log(fruits);
    //total array index.

    console.log(fruits.length);
    //final array length


}
{
    const books = ["Math", "English", "Biology", "Chemistry", "Physics"];
    books.shift();
    console.log(books);
    //removed the first index using shift methods

    books.unshift("Bangla", "ICT");
    console.log(books);
    //added two elements in first indexes

    books.push("Economics", "Psychology");
    console.log(books);
    //added two items in the last indexes

    books.pop();
    books.pop();
    console.log(books);
    //two elements delete frome last index

    const book = books.join("|");
    console.log(book);
    //done based on your requerment

}

{

    //✅ চ্যালেঞ্জ ১:

    const countries = ["Bangladesh", "India", "Nepal"];
    countries[countries.length] = "Vutan";

    console.log(countries);
    //added a new country by using length property


    //✅ চ্যালেঞ্জ ২:

    const friends = ["Abu Bakar", "Omar", "Usman", "Ali"];
    friends[friends.length] = "Belal";
    friends[friends.length] = "Abu Hanifa";
    console.log(friends);
    //added two friends name by using length property



}
{
    const animals = [];
    animals[animals.length] = "Cat";
    animals[animals.length] = "Dog";
    animals[animals.length] = "Rabbit";
    animals[animals.length] = "Munkey";
    console.log(animals);

    const numbers = [10, 20, 30];
    numbers[numbers.length] = 40;
    numbers[numbers.length] = 50;
    numbers[numbers.length] = 60;
    console.log(numbers);
    //full array printed

    console.log(numbers.length);
    //array length is 6


    const evenNumbers = [];
    evenNumbers[evenNumbers.length] = "2";
    evenNumbers[evenNumbers.length] = "4";
    evenNumbers[evenNumbers.length] = "6";
    evenNumbers[evenNumbers.length] = "8";
    evenNumbers[evenNumbers.length] = "10";
    console.log(evenNumbers);
    //i printed the numbers on your instruction

}
{
    //✅ চ্যালেঞ্জ ১: দুইটা অ্যারে merge করো

    let fruits1 = ["Apple", "Banana"];
    let fruits2 = ["Mango", "Pineapple"];

    const allFruits = fruits1.concat(fruits2);
    console.log(allFruits);
    //your requarement done


    //✅ চ্যালেঞ্জ ২: তিনটা অ্যারে merge করো

    const breakfast = ["Porota", "Dal", "Vaji", "Nehari"];
    const lunch = ["Biriyani", "Kacchi", "KalaVuna"];
    const dinner = ["Cheaken Chap", "greel", "Halim"];
    const allMenu = breakfast.concat(lunch, dinner);
    console.log(allMenu);
    //i hobe all is done


    //✅ চ্যালেঞ্জ ৩: অ্যারেতে নতুন string যুক্ত করো

    const colors = ["white", "black", "blue"];
    const allColors = colors.concat("Red", "Green");
    console.log(allColors);
    //i hobe wine this chanllenge!
}

{
    const animals = ["Cat", "Dog", "Rabbit", "Monkey"];
    animals.copyWithin(2, 0);
    console.log(animals);
    //may be this is right

    const numbers = [1, 2, 3, 4, 5, 6];
    numbers.copyWithin(3, 0)
    console.log(numbers);


    const alphabets = ["A", "B", "C", "D", "E", "F"];
    console.log(alphabets)
    const alpha = alphabets.copyWithin(1, 3);
    console.log(alpha);


    const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri",];
    console.log(days);

    const copyDays = days.copyWithin(4, 0, 3);
    console.log(copyDays);
    //may be my answer is right on your requerments


}
