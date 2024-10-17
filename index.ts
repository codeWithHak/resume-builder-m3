const userData = document.getElementById("user-data") as HTMLElement
const resume = document.getElementById("resume") as HTMLElement
// targeting inputs
let fullNameInput = document.getElementById("full-name") as HTMLInputElement
let titleInput = document.getElementById('title') as HTMLInputElement  
let phoneNumberInput = document.getElementById('phone-number') as HTMLInputElement
let emailInput = document.getElementById('email') as HTMLInputElement
let addressInput = document.getElementById('address') as HTMLInputElement
let githubInput = document.getElementById('github') as HTMLInputElement
let linkedinInput = document.getElementById('linkedin') as HTMLInputElement
let aboutInput = document.getElementById('about') as HTMLInputElement
let skillOneInput = document.getElementById('skill1') as HTMLInputElement
let skillTwoInput = document.getElementById('skill2') as HTMLInputElement
let skillThreeInput = document.getElementById('skill3') as HTMLInputElement
let skillFourInput = document.getElementById('skill4') as HTMLInputElement
let skillFiveInput = document.getElementById('skill5') as HTMLInputElement
let skillSixInput = document.getElementById('skill6') as HTMLInputElement
let skillSevenInput = document.getElementById('skill7') as HTMLInputElement
let skillEightInput = document.getElementById('skill8') as HTMLInputElement
let skillNineInput = document.getElementById('skill9') as HTMLInputElement
let skillTenInput = document.getElementById('skill10') as HTMLInputElement
let positionInput = document.getElementById('position') as HTMLInputElement
let companyInput = document.getElementById('company') as HTMLInputElement
let pointOneInput = document.getElementById('point1') as HTMLInputElement
let pointTwoInput = document.getElementById('point2') as HTMLInputElement
let pointThreeInput = document.getElementById('point3') as HTMLInputElement
let pointFourInput = document.getElementById('point4') as HTMLInputElement
let uniInput = document.getElementById('uni') as HTMLInputElement
let uniCourseInput = document.getElementById('uni-course') as HTMLInputElement
let collegeInput = document.getElementById('college') as HTMLInputElement
let collegeMajorInput = document.getElementById('college-major') as HTMLInputElement
// targeting divs
let resumeFullName = document.getElementById('resume-full-name') as HTMLElement
let resumeTitle = document.getElementById('resume-title') as HTMLElement
let resumePhoneNumber = document.getElementById('resume-phone-number') as HTMLElement
let resumeEmail = document.getElementById('resume-email') as HTMLElement
let resumeAddress = document.getElementById('resume-address') as HTMLElement
let resumeGithub = document.getElementById('resume-github') as HTMLElement
let resumeLinkedin = document.getElementById('resume-linkedin') as HTMLElement
let resumeAbout = document.getElementById('resume-about') as HTMLElement
let skillOne = document.getElementById('resume-skill1') as HTMLElement
let skilltwo = document.getElementById('resume-skill2') as HTMLElement
let skillThree = document.getElementById('resume-skill3') as HTMLElement
let skillFour = document.getElementById('resume-skill4') as HTMLElement
let skillFive = document.getElementById('resume-skill5') as HTMLElement
let skillSix = document.getElementById('resume-skill6') as HTMLElement
let skillSeven = document.getElementById('resume-skill7') as HTMLElement
let skillEight = document.getElementById('resume-skill8') as HTMLElement
let skillNine = document.getElementById('resume-skill9') as HTMLElement
let skillTen = document.getElementById('resume-skill10') as HTMLElement
let resumePosition = document.getElementById('resume-position') as HTMLElement
let resumeCompany = document.getElementById('resume-company') as HTMLElement
let resumePointOne = document.getElementById('resume-point1') as HTMLElement
let resumePointTwo = document.getElementById('resume-point2') as HTMLElement
let resumePointThree = document.getElementById('resume-point3') as HTMLElement
let resumePointFour = document.getElementById('resume-point4') as HTMLElement
let resumeUni = document.getElementById('resume-uni') as HTMLElement
let resumeUniCourse = document.getElementById('resume-uni-course') as HTMLElement
let resumeCollege = document.getElementById('resume-college') as HTMLElement
let resumeCollegeMajor = document.getElementById('resume-college-major') as HTMLElement

// capture other elements as well and set its value as well like name 
const submit = document.getElementById("submit") as HTMLButtonElement

// selecting the form instead of button this event will be triggered when the form is submitted
userData.addEventListener('submit',(e)=>{
    e.preventDefault()
    //setting fullname
    resumeFullName.innerHTML = fullNameInput.value;
    //setting title
    resumeTitle.innerHTML = titleInput.value
    resumePhoneNumber.innerHTML = phoneNumberInput.value
    resumeEmail.innerHTML = emailInput.value
    resumeAddress.innerHTML = addressInput.value
    resumeGithub.innerHTML = githubInput.value
    resumeLinkedin.innerHTML = linkedinInput.value
    resumeAbout.innerText = aboutInput.value
    skillOne.innerText = skillOneInput.value
    skilltwo.innerText = skillTwoInput.value
    skillThree.innerText = skillThreeInput.value
    skillFour.innerText = skillFourInput.value
    skillFive.innerText = skillFiveInput.value
    skillSix.innerText = skillSixInput.value
    skillSeven.innerText = skillSevenInput.value
    skillEight.innerText = skillEightInput.value
    skillNine.innerText = skillNineInput.value
    skillTen.innerText = skillTenInput.value
    resumePosition.innerText = positionInput.value
    resumeCompany.innerText = companyInput.value
    resumePointOne.innerText = pointOneInput.value
    resumePointTwo.innerText = pointTwoInput.value
    resumePointThree.innerText = pointThreeInput.value
    resumePointFour.innerText = pointFourInput.value
    resumeUni.innerText = uniInput.value
    resumeUniCourse.innerText = uniCourseInput.value
    resumeCollege.innerText = collegeInput.value
    resumeCollegeMajor.innerText = collegeMajorInput.value


    // will add and display more elemnts here like about, skills etc

    // default behaviour of resume is hidden but whn clicked on generate it will remove the class resume-hidden from it.
    resume.classList.remove('resume-hidden')
    // and add hidden class to user data
    userData.classList.add('hidden')
})

// ------------------------------------------------------------------------------------------------------------------

// Logic just for the resume See More Button
let seeMore = false;
let seeMoreBtn = document.getElementById('see-more-btn') as HTMLButtonElement
let seeMoreContent = document.getElementById('see-more-content') as HTMLElement

seeMoreBtn.addEventListener('click',()=>{
    if(seeMore){
        seeMoreContent.classList.add('hidden')
        seeMoreBtn.textContent="See More"
    }
    else{
        seeMoreContent.classList.remove("hidden")
        seeMoreBtn.textContent="See Less"
    }

    seeMore = !seeMore;
    
});
