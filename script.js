const apiURL = "https://job-calender-tracker.onrender.com/api/jobs";
const adminPassword = "admin123";

document.getElementById("loginBtn").onclick = () => {
  const pass = prompt("Enter admin password:");
  if (pass === adminPassword) {
    document.getElementById("adminForm").classList.remove("hidden");
  } else {
    alert("Access denied!");
  }
};

function fetchJobs() {
  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector("#jobTable tbody");
      tbody.innerHTML = "";
      data.forEach(job => {
        const row = `<tr>
          <td>${job.company}</td>
          <td>${job.role}</td>
          <td>${job.applyDate}</td>
          <td>${job.status || "Open"}</td>
          <td><button onclick="deleteJob(${job.id})">Delete</button></td>
        </tr>`;
        tbody.innerHTML += row;
      });
    });
}

function addJob() {
  const job = {
    company: document.getElementById("company").value,
    role: document.getElementById("role").value,
    applyDate: document.getElementById("applyDate").value,
    link: document.getElementById("jobURL").value
  };

  fetch(apiURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job)
  })
  .then(() => {
    alert("Job added!");
    fetchJobs();
  });
}

function deleteJob(id) {
  fetch(`${apiURL}/${id}`, { method: "DELETE" })
    .then(() => fetchJobs());
}

fetchJobs();
