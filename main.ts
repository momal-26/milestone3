interface Resume {  
    name: string;  
    email: string;  
    phone: string;  
    experience: string[];  
    education: string[]; 
    skills:string[]; 
}  

document.getElementById("resumeForm")!.addEventListener("submit", function (event) {  
    event.preventDefault();  

    const name = (document.getElementById("name") as HTMLInputElement).value;  
    const email = (document.getElementById("email") as HTMLInputElement).value;  
    const phone = (document.getElementById("phone") as HTMLInputElement).value;  
    const experience = (document.getElementById("experience") as HTMLInputElement).value.split(",").map(exp => exp.trim());  
    const education = (document.getElementById("education") as HTMLInputElement).value.split(",").map(edu => edu.trim());
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",").map(skill => skill.trim()); 


    const resume: Resume = {  
        name,  
        email,  
        phone,  
        experience,  
        education, 
        skills, 
    };  

    displayResume(resume);  
});  

function displayResume(resume: Resume) {  
    const resumeOutput = document.getElementById("resumeOutput")!;  
    resumeOutput.innerHTML = `  
        <h2>${resume.name}</h2>  
        <p>Email: ${resume.email}</p>  
        <p>Phone: ${resume.phone}</p>  
        <h3>Experience</h3>  
        <ul>  
            ${resume.experience.map(exp => `<li>${exp}</li>`).join('')}  
        </ul>  
        <h3>Education</h3>  
        <ul>  
            ${resume.education.map(edu => `<li>${edu}</li>`).join('')}
            </ul>  
    `;  
}  