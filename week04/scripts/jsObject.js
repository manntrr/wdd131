// Get the current date
const currentYear = new Date().getFullYear();
// Get the documents last modified date
const lastModDate = document.lastModified;

// Get the currentYear element from html
const currentYearElement = document.getElementById("currentyear");
// Get the lastModified element from html
const lastModElement = document.getElementById("lastModified");

// update the html element with the data
if(currentYearElement) {
    currentYearElement.innerHTML = `&copy; ${currentYear}`;
}
// update the html element with the data
if(lastModElement) {
lastModElement.innerHTML = `Last modification:  ${lastModDate}`;
}

let aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
  credits: 2,
  sections: [
    {
        section: "001",
        enrolled:101,
        instructor:"Mr. Smith"
    },{
        section: "002",
        enrolled:20,
        instructor:"Mr. Smith Jr."
    }
  ]
};
function setCourseInformation(course) {
    courseCaptionElement = document.querySelector("#courseName");
    if(courseCaptionElement) {
        courseCaptionElement.innerHTML = `${course.title} - ${course.code}`;
    }
}
function sectionTemplate(section) {
    return `<tr>
                <td>${section.section}</td>
                <td>${section.enrolled}</td>
                <td>${section.instructor}</td>
            </tr>`;
}
function renderSections(sections) {
    courseTableBody = document.querySelector("#sections tbody");
    if(courseTableBody){
        const html = sections.map(sectionTemplate);
        courseTableBody.innerHTML = html.join("");
    }
}
setCourseInformation(aCourse);
renderSections(aCourse.sections);
