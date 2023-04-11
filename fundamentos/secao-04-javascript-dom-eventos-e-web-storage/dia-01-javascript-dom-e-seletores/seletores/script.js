const header = document.getElementById('header-container');
const emergencyTasksBack = document.getElementsByClassName('emergency-tasks');
const noEmergencyTasksBack = document.getElementsByClassName('no-emergency-tasks');
const emergencyTasks = document.querySelectorAll('.emergency-tasks h3');
const noEmergencyTasks = document.querySelectorAll('.no-emergency-tasks h3');
const footer = document.getElementById('footer-container');

document.body.style.backgroundColor = 'rgb(243,243,243)';

header.style.backgroundColor = 'RGB(0 176 105)';

emergencyTasks[0].style.backgroundColor = 'rgb(165,0,243)';
emergencyTasks[1].style.backgroundColor = 'rgb(165,0,243)';

emergencyTasksBack[0].style.backgroundColor = 'rgb(255,159,132)';
noEmergencyTasksBack[0].style.backgroundColor = 'rgb(249,219,94)';


noEmergencyTasks[0].style.backgroundColor = 'rgb(35,37,37)';
noEmergencyTasks[1].style.backgroundColor = 'rgb(35,37,37)';

footer.style.backgroundColor = 'rgb(0,53,51)';