"use strict";
const userData = document.getElementById("user-data");
const resume = document.getElementById("resume");
// targeting inputs
let fullNameInput = document.getElementById("full-name");
let titleInput = document.getElementById('title');
let phoneNumberInput = document.getElementById('phone-number');
let emailInput = document.getElementById('email');
let addressInput = document.getElementById('address');
let githubInput = document.getElementById('github');
let linkedinInput = document.getElementById('linkedin');
let aboutInput = document.getElementById('about');
let skillOneInput = document.getElementById('skill1');
let skillTwoInput = document.getElementById('skill2');
let skillThreeInput = document.getElementById('skill3');
let skillFourInput = document.getElementById('skill4');
let skillFiveInput = document.getElementById('skill5');
let skillSixInput = document.getElementById('skill6');
let skillSevenInput = document.getElementById('skill7');
let skillEightInput = document.getElementById('skill8');
let skillNineInput = document.getElementById('skill9');
let skillTenInput = document.getElementById('skill10');
let positionInput = document.getElementById('position');
let companyInput = document.getElementById('company');
let pointOneInput = document.getElementById('point1');
let pointTwoInput = document.getElementById('point2');
let pointThreeInput = document.getElementById('point3');
let pointFourInput = document.getElementById('point4');
let uniInput = document.getElementById('uni');
let uniCourseInput = document.getElementById('uni-course');
let collegeInput = document.getElementById('college');
let collegeMajorInput = document.getElementById('college-major');
// targeting divs
let resumeFullName = document.getElementById('resume-full-name');
let resumeTitle = document.getElementById('resume-title');
let resumePhoneNumber = document.getElementById('resume-phone-number');
let resumeEmail = document.getElementById('resume-email');
let resumeAddress = document.getElementById('resume-address');
let resumeGithub = document.getElementById('resume-github');
let resumeLinkedin = document.getElementById('resume-linkedin');
let resumeAbout = document.getElementById('resume-about');
let skillOne = document.getElementById('resume-skill1');
let skilltwo = document.getElementById('resume-skill2');
let skillThree = document.getElementById('resume-skill3');
let skillFour = document.getElementById('resume-skill4');
let skillFive = document.getElementById('resume-skill5');
let skillSix = document.getElementById('resume-skill6');
let skillSeven = document.getElementById('resume-skill7');
let skillEight = document.getElementById('resume-skill8');
let skillNine = document.getElementById('resume-skill9');
let skillTen = document.getElementById('resume-skill10');
let resumePosition = document.getElementById('resume-position');
let resumeCompany = document.getElementById('resume-company');
let resumePointOne = document.getElementById('resume-point1');
let resumePointTwo = document.getElementById('resume-point2');
let resumePointThree = document.getElementById('resume-point3');
let resumePointFour = document.getElementById('resume-point4');
let resumeUni = document.getElementById('resume-uni');
let resumeUniCourse = document.getElementById('resume-uni-course');
let resumeCollege = document.getElementById('resume-college');
let resumeCollegeMajor = document.getElementById('resume-college-major');
// capture other elements as well and set its value as well like name 
const submit = document.getElementById("submit");
// selecting the form instead of button this event will be triggered when the form is submitted
userData.addEventListener('submit', (e) => {
    e.preventDefault();
    //setting fullname
    resumeFullName.innerHTML = fullNameInput.value;
    //setting title
    resumeTitle.innerHTML = titleInput.value;
    resumePhoneNumber.innerHTML = phoneNumberInput.value;
    resumeEmail.innerHTML = emailInput.value;
    resumeAddress.innerHTML = addressInput.value;
    resumeGithub.innerHTML = githubInput.value;
    resumeLinkedin.innerHTML = linkedinInput.value;
    resumeAbout.innerText = aboutInput.value;
    skillOne.innerText = skillOneInput.value;
    skilltwo.innerText = skillTwoInput.value;
    skillThree.innerText = skillThreeInput.value;
    skillFour.innerText = skillFourInput.value;
    skillFive.innerText = skillFiveInput.value;
    skillSix.innerText = skillSixInput.value;
    skillSeven.innerText = skillSevenInput.value;
    skillEight.innerText = skillEightInput.value;
    skillNine.innerText = skillNineInput.value;
    skillTen.innerText = skillTenInput.value;
    resumePosition.innerText = positionInput.value;
    resumeCompany.innerText = companyInput.value;
    resumePointOne.innerText = pointOneInput.value;
    resumePointTwo.innerText = pointTwoInput.value;
    resumePointThree.innerText = pointThreeInput.value;
    resumePointFour.innerText = pointFourInput.value;
    resumeUni.innerText = uniInput.value;
    resumeUniCourse.innerText = uniCourseInput.value;
    resumeCollege.innerText = collegeInput.value;
    resumeCollegeMajor.innerText = collegeMajorInput.value;
    // will add and display more elemnts here like about, skills etc
    // default behaviour of resume is hidden but whn clicked on generate it will remove the class resume-hidden from it.
    resume.classList.remove('resume-hidden');
    // and add hidden class to user data
    userData.classList.add('hidden');
});
// ------------------------------------------------------------------------------------------------------------------
// Logic just for the resume See More Button
let seeMore = false;
let seeMoreBtn = document.getElementById('see-more-btn');
let seeMoreContent = document.getElementById('see-more-content');
seeMoreBtn.addEventListener('click', () => {
    if (seeMore) {
        seeMoreContent.classList.add('hidden');
        seeMoreBtn.textContent = "See More";
    }
    else {
        seeMoreContent.classList.remove("hidden");
        seeMoreBtn.textContent = "See Less";
    }
    seeMore = !seeMore;
});
