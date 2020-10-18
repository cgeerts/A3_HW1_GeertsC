var classData = {
    coursename: "Oil & Gas",
    coursecode: "BCU-1001",
    profname: "Fname Lname",
    classtime: ["Tues 1PM", "Fri 9AM"],
    profimg: "eEdu_prof.jpg",

    coursedesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus incidunt provident officiis eligendi excepturi dolor perspiciatis amet, cupiditate soluta similique culpa possimus magnam molestias natus mollitia, repellat aliquid, quisquam! Numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid similique dolor, repudiandae quo quae voluptatibus ipsa, doloribus possimus ratione natus dicta voluptatem distinctio libero reprehenderit iure minima id architecto corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nemo, voluptas voluptate modi dolorum maxime sunt ipsum fuga quas numquam deserunt dolorem labore voluptatum est at cumque consectetur! Laborum, numquam.",
    coursecontent: ["Lecture Materials", "Tutorials & Labs", "Quizzes", "Discussion Groups"]
};

import classData from "./data/classData.json";

(() => {
    // select our user elements and load the content
    // set up the XMLHttp object
    let myReq = new XMLHttpRequest;

    // make sure we can handle whatever data comes back, or any errors
    myReq.addEventListener("readystatechange", handleRequest);

    // open a request and pass through the URL of the data that we want
    myReq.open('GET', '../classData.json');

    // actually make the request
    myReq.send();

    // handleRequest function goes here
    function handleRequest() {
        //debugger;

        if (myReq.readyState === XMLHttpRequest.DONE) {
            //debugger;
            // check status here and proceed
            if (myReq.status === 200) {
                // 200 means done and dusted, ready to go with the dataset!
                handleclassData(myReq.responseText);

            } else {
                // probably got some kind of error code, so handle that 
                // a 404, 500 etc... can render appropriate error messages here
                console.error(`${myReq.status} : something done broke, son`);
            }

        } else {
           // debugger;
            // request isn't ready yet, keep waiting...
            console.log(`Request state: ${myReq.readyState}. Still processing...`);
        }

    }

    let userSection = document.querySelector(".user-section"),
        userTemplate = document.querySelector("#profs-template").content;

    function handleclassData(data) {
        //debugger;

        for (let user in data) {

            // make a copy of our template here and then populet the children (text elements) with the static date from team object
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].innerHTML = data[user].coursename;
            currentUserText[2].innerHTML = data[user].coursecode;
            currentUserText[3].innerHTML = data[user].profname;

            userSection.appendChild(currentUser);
        }
    }
    
    console.log(data);

})();