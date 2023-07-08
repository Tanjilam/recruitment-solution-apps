const mobileMenu = document.querySelector(".mobile-menu");
const mobileClose = document.querySelector(".mobile-close");
const mobileNavigation = document.querySelector(".mobile-navigation");

//events
mobileMenu.addEventListener("click", () => {
  mobileNavigation.classList.add("active");
  mobileClose.classList.add("active");
});

mobileClose.addEventListener("click", () => {
  mobileNavigation.classList.remove("active");
  mobileClose.classList.remove("active");
});
// Sample candidate data
const candidates = [
  { name: "John Doe", location: "New York", jobRole: "Software Developer" },
  { name: "Jane Smith", location: "San Francisco", jobRole: "UI/UX Designer" },
  { name: "Mark Johnson", location: "London", jobRole: "Project Manager" },
  { name: "Emily Wilson", location: "Sydney", jobRole: "Data Analyst" },
];

const searchForm = document.querySelector('form');
const searchBtn = document.getElementById('search-btn');
const candidateList = document.getElementById('candidate-list');

searchBtn.addEventListener('click', handleSearch);

function handleSearch(e) {
  e.preventDefault();

  const locationInput = document.getElementById('location');
  const jobRoleInput = document.getElementById('job-role');
  const location = locationInput.value.toLowerCase();
  const jobRole = jobRoleInput.value.toLowerCase();

  const filteredCandidates = candidates.filter(candidate => {
    const candidateLocation = candidate.location.toLowerCase();
    const candidateJobRole = candidate.jobRole.toLowerCase();

    return candidateLocation.includes(location) && candidateJobRole.includes(jobRole);
  });

  displayCandidates(filteredCandidates);
}

function displayCandidates(candidates) {
  candidateList.innerHTML = '';

  if (candidates.length === 0) {
    candidateList.innerHTML = '<li>No candidates found.</li>';
    return;
  }

  candidates.forEach(candidate => {
    const listItem = document.createElement('li');
    listItem.classList.add('candidate-item');
    listItem.textContent = `${candidate.name} - ${candidate.jobRole}, ${candidate.location}`;
    candidateList.appendChild(listItem);
  });
}
