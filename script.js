const courses = [
    {
        name: "Complete ReactJS Course",
        price: "2.3",
    },
    {
        name: "Complete Angular Course",
        price: "2.1"
    },
    {
        name: "Complete MERN Course",
        price: "2.7"
    },
    {
        name: "Complete C++ Course",
        price: "2.8",
    },
]; 
{/* <li class="list-group-item">
    Complete C++ course
    <span class="float=right">$ 2.8 </span>
</li>; */}



function generateLIST() {
    const ul = document.querySelector('.list-group') // here we grab the ul by the class name
    ul.innerHTML = "";
    courses.forEach((course) => {   // here we save all the courses inside course
        // forEach allows you to have a call back so in every single call back you would have access to every single element called course

        const li = document.createElement('li');  // here we create new html element and added the class name
        li.classList.add("list-group-item")

        const name = document.createTextNode(course.name)  //here we create textNode to grab the course
        li.appendChild(name); // here we say the list we want to append a child in you which is name

        const span = document.createElement('span')
        span.classList.add('float-right')

        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price)

        li.appendChild(span);
        ul.appendChild(li);
    });

    
}

// generateLIST()

window.addEventListener('load', generateLIST);
const butt = document.querySelector('.sor-btn')
butt.addEventListener('click', ()=>{
    courses.sort( (a, b)=> b.price - a.price)
    generateLIST()
});

const button = document.querySelector('.sort-btn')
button.addEventListener('click', ()=>{
    courses.sort( (a, b)=> a.price - b.price)
    generateLIST()
});


// sorting means comparing it takes two parameter so it is comparing a to b and arranging them in ascending order
