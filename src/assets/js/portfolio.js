import seattleImg from '../media/cleanupseattle.png';
import studyImg from '../media/studybuddy.png';
import questionImg from '../media/question.png';
import foodplanner from '../media/foodplanner.png';
import bmiImg from '../media/bmi.png';
import cameoImg from '../media/cameo.png';
import travelImg from '../media/taiwantravel.png';
import reactImg from '../media/reactproject.png';
import smileImg from '../media/smiles.jpg';
import blstoreImg from '../media/blstore.png';

const projects = [
    {
        id: 1,
        title: "Clean up Seattle",
        category: "Angular",
        imgUrl: seattleImg,
        link: 'https://clean-up-seattle.firebaseapp.com/', 
        content: " Angular Js, Google Map api"

    },
    {
        id: 2,
        title: "Study Buddy",
        category: 'Ruby',
        imgUrl: studyImg,
        link: 'https://study-budddy.herokuapp.com/', 
        content: "Ruby, Postgres SQL"
    },
    {
        id: 3,
        title: "Miles of Smile",
        category: 'Ruby',
        imgUrl: smileImg,
        link: 'https://miles-of-smiles.herokuapp.com/', 
        content: "Ruby on Rails, Restful API, SQL"
    },
    {
        id: 4,
        title: "B & L Clothing Store",
        category: 'Ruby',
        imgUrl: blstoreImg,
        link: 'https://blshop.herokuapp.com/', 
        content: "Ruby on Rails"
    },
    {
        id: 5,
        title: "3 in 1 React Project",
        category: 'React',
        imgUrl: reactImg,
        link: 'http://react-projects.surge.sh/', 
        content: "React, Redux, Restful API, Ajax"
    },
    {
        id: 6,
        title: "Taiwan Travel Site",
        category: 'JavaScript',
        imgUrl: travelImg,
        link: 'https://txbluebee.github.io/kaohsiung_taiwan_travel/', 
        content: "Vanilla JavaScript"
    },
    {
        id: 7,
        title: "BMI Calculator",
        category: 'JavaScript',
        imgUrl: bmiImg,
        link: 'https://txbluebee.github.io/bmi-calculator/', 
        content: "Vanilla JavaScript"
    },
    {
        id: 8,
        title: "Bootstrap Landing Page",
        category: 'JavaScript',
        imgUrl: cameoImg,
        link: 'https://txbluebee.github.io/bootstrap4-landing-page/', 
        content: "HTML, CSS, Bootstrap"
    },
    {
        id: 9,
        title: "Question Channel",
        category: 'JavaScript',
        imgUrl: questionImg,
        link: 'https://question-channel.firebaseapp.com/', 
        content: "Ember JS, Bootstrap 4, Firebase"
    },
    {
        id: 10,
        title: "Food Planner",
        category: 'JavaScript',
        imgUrl: foodplanner,
        link: 'https://benjpac.github.io/food_planner/', 
        content: "JavaScript, HTML, CSS"
    }
];




const projectAll = document.querySelector('.projects');


function displayProject(project){
    return `
    <div class="col-12 col-md-6 mb-md-3 mb-4">
        <a href=${project.link} target="_blank">
        <div class="project-block">
            <div class="project-title">${project.title}</div>
            <div class="project-body">
            <img  src=${project.imgUrl} alt="seattle" class="img-fluid">
            </div>
            <div class="project-footer">
            ${project.content}
            </div>
        </div>
        </a>
    </div>
    `
}

function defaultProjects(){
    let defaultProjects = "";
    projects.forEach(project =>{
        if (parseInt(project.id)<5){
            defaultProjects += displayProject(project);
    
        } 
    })
    projectAll.innerHTML = defaultProjects;
}

defaultProjects();

const defaultLink = document.querySelector('.default-link');

defaultLink.addEventListener('click', showDefaultProjects);

function showDefaultProjects(e){
    e.preventDefault();
    let defaultProjects = "";
    projects.forEach(project =>{
        if (parseInt(project.id)<5){
            defaultProjects += displayProject(project);
    
        } 
    })
    projectAll.innerHTML = defaultProjects;
}

// show projects by clicked link

const projectLink = document.querySelector('.project-link');

projectLink.addEventListener('click', displayClickProject);

function displayClickProjects(value){
    console.log(value);
    let projectString = "";
    projects.forEach(project =>{
        if (project.category === value){
            projectString += displayProject(project);
    
        } 
    })
    projectAll.innerHTML = projectString;
}

function displayClickProject(e){
    e.preventDefault();
    if (e.target.nodeName !== "A"){return};
    const clickValue = e.target.innerText;
    displayClickProjects(clickValue);
}


