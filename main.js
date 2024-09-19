document.getElementById("resumeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var experience = document.getElementById("experience").value.split(",").map(function (exp) { return exp.trim(); });
    var education = document.getElementById("education").value.split(",").map(function (edu) { return edu.trim(); });
    var skills = document.getElementById("skills").value.split(",").map(function (skill) { return skill.trim(); });
    var resume = {
        name: name,
        email: email,
        phone: phone,
        experience: experience,
        education: education,
        skills: skills,
    };
    displayResume(resume);
});
function displayResume(resume) {
    var resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = "  \n        <h2>".concat(resume.name, "</h2>  \n        <p>Email: ").concat(resume.email, "</p>  \n        <p>Phone: ").concat(resume.phone ? resume.phone : 'N/A', "</p>  \n        <h3>Experience</h3>  \n        <ul>  \n            ").concat(resume.experience.map(function (exp) { return "<li>".concat(exp, "</li>"); }).join(''), "  \n        </ul>  \n        <h3>Education</h3>  \n        <ul>  \n            ").concat(resume.education.map(function (edu) { return "<li>".concat(edu, "</li>"); }).join(''), "\n            </ul>  \n    ");
}
