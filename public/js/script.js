const answers_no = {
    english: [
        "No",
        "Are you sure?",
        "Are you really sure??",
        "Are you really realy sure???",
        "Think again?",
        "Don't believe in second chances?",
        "Why are you being so cold?",
        "Maybe we can talk about it?",
        "I am not going to ask again!",
        "Ok now this is hurting my feelings!",
        "You are now just being mean!",
        "Why are you doing this to me?",
        "Please give me a chance!",
        "I am begging you to stop!",
        "Ok, Let's just start over.."
    ],
    Kannada: [
        "Illa",
        "Nimage sure aa?",
        "Nijavaagi sure aa?",
        "Nijavaagi nijavaagi sure aa???",
        "Innondu sala think maadi?",
        "Second chance mele nambike illa aa?",
        "Yaake ishtu cold aagi idiya?",
        "Maybe adanna maathadi nodbahuda?",
        "Naan innu kelalla!",
        "Okay, idu nanna feelings ge hurt aagtha ide!",
        "Iga neenu full mean aagi behave maadtha idiya!",
        "Yaake nange heege maadtha idiya?",
        "Please nanige ondu chance kodi!",
        "Naan nimmanna beg maadtha idini, stop maadi!",
        "Okay, matte first inda start maadona.."
    ],
    Tamil: [
        "இல்லை",
        "உறுதியா?",
        "நிஜமாவே உறுதியா?",
        "நிஜமாவே நிஜமாவே உறுதியா???",
        "இன்னொரு முறை யோசிச்சுப் பாரு",
        "இரண்டாவது வாய்ப்பில் நம்பிக்கை இல்லையா?",
        "ஏன் இவ்வளவு குளிர்ச்சியா இருக்கிறாய்?",
        "இதைப் பற்றி பேசலாமா?",
        "நான் மீண்டும் கேட்க மாட்டேன்!",
        "சரி, இப்போ இது என் உணர்ச்சிகளை ரொம்பவே காயப்படுத்துகிறது!",
        "இப்போ நீ ரொம்பவே கடுமையாக நடந்து கொள்கிறாய்!",
        "எனக்கு ஏன் இப்படிச் செய்கிறாய்?",
        "தயவு செய்து எனக்கு ஒரு வாய்ப்பு கொடு!",
        "நான் உன்னைக் கெஞ்சிக் கேட்கிறேன், நிறுத்து!",
        "சரி, மறுபடியும் புதிதாக ஆரம்பிப்போம்.."
    ]
};

answers_yes = {
    "english": "Yes",
    "Kannada": "Haudu",
    "Tamil": "ஆம்"
}

let language = "english"; // Default language is English
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "public/images/no.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "public/images/yes.gif";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    const selectedLanguage = selectElement.value;
    language = selectedLanguage;

    // Update question heading
    const questionHeading = document.getElementById("question-heading");
    if (language === "Kannada") {
        questionHeading.textContent = "Neenu nanna gandana aagthiya🫣?";
    } else if (language === "Tamil") {
        questionHeading.textContent = "நீ என் வாழ்க்கை துணையாக இருப்பாயா🫣?";
    } else {
        questionHeading.textContent = "Will you be my Li purush🫣?";
    }

    // Reset yes button text
    yes_button.innerHTML = answers_yes[language];

    // Reset button text to first in the new language
    if (clicks === 0) {
        no_button.innerHTML = answers_no[language][0];
    } else {
        no_button.innerHTML = answers_no[language][clicks];
    }

    // Update success message
    const successMessage = document.getElementById("success-message");
    if (language === "Kannada") {
        successMessage.textContent = "Yepppieee! Thumba happy, see you soon aaa😍! :3";
    } else if (language === "Tamil") {
        successMessage.textContent = "யேப்பீ! சீக்கிரமே பார்க்கலாம் 😍 :3";
    } else {
        successMessage.textContent = "Yepppie, see you sooonnn😍 :3";
    }
}