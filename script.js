const apiURL ="https://job-calendar-backend.onrender.com/api/jobs";


// Load jobs on page load
window.onload = loadJobs;

function loadJobs() {
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      const table = document.getElementById("jobList");
      table.innerHTML = "";

      data.forEach(job => {
        const row = `<tr>
          <td>${job.company}</td>
          <td>${job.role}</td>
          <td>${job.applyDate}</td>
          <td><a href="${job.link}" target="_blank">🔗</a></td>
        </tr>`;
        table.innerHTML += row;
      });
    });
}

// Add job
document.getElementById("jobForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const job = {
    company: document.getElementById("company").value,
    role: document.getElementById("role").value,
    applyDate: document.getElementById("applyDate").value,
    link: document.getElementById("link").value
  };

  fetch(apiURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job)
  })
    .then(res => res.json())
    .then(() => {
      this.reset(); // clear form
      loadJobs();   // reload list
    });
});
