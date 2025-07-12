const apiURL = "https://job-calender-tracker.onrender.com/api/jobs";
// const adminPassword = "admin123";

// document.getElementById("loginBtn").onclick = () => {
//   const pass = prompt("Enter admin password:");
//   if (pass === adminPassword) {
//     document.getElementById("adminForm").classList.remove("hidden");
//   } else {
//     alert("Access denied!");
//   }
// };

function fetchJobs() {
  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      // Populate job table
      const tbody = document.querySelector("#jobTable tbody");
      tbody.innerHTML = "";
      const calendarEvents = [];

      data.forEach(job => {
        const row = `<tr>
          <td>${job.company}</td>
          <td>${job.role}</td>
          <td>${job.applyDate}</td>
          <td>${job.status || "Open"}</td>
          <td><button onclick="deleteJob(${job.id})">Delete</button></td>
        </tr>`;
        tbody.innerHTML += row;

        // Add event to calendar
        calendarEvents.push({
          title: `${job.company} (${job.role})`,
          date: job.applyDate
        });
      });

      // Load calendar
      renderCalendar(calendarEvents);
    });
}

function renderCalendar(events) {
  const calendarEl = document.getElementById('calendar');
  calendarEl.innerHTML = ''; // clear previous render

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    height: 500,
    events: events
  });

  calendar.render();
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
