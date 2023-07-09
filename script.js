// Mock candidate data (Replace with actual data)
const candidates = [
    { name: "John Doe", location: "New York", jobRole: "Software Engineer" },
    { name: "Jane Smith", location: "San Francisco", jobRole: "UI/UX Designer" },
    { name: "Alex Johnson", location: "Chicago", jobRole: "Project Manager" },
  ];
  
  function searchCandidates() {
    const locationInput = document.getElementById("location");
    const jobRoleInput = document.getElementById("jobRole");
    const candidatesList = document.getElementById("candidates-list");
  
    // Clear previous search results
    candidatesList.innerHTML = "";
  
    // Filter candidates based on location and job role
    const filteredCandidates = candidates.filter(candidate =>
      candidate.location.toLowerCase().includes(locationInput.value.toLowerCase()) &&
      candidate.jobRole.toLowerCase().includes(jobRoleInput.value.toLowerCase())
    );
  
    // Display filtered candidates
    filteredCandidates.forEach(candidate => {
      const candidateItem = document.createElement("div");
      candidateItem.classList.add("candidate-item");
      candidateItem.innerHTML = `<h3>${candidate.name}</h3>
                                  <p>Location: ${candidate.location}</p>
                                  <p>Job Role: ${candidate.jobRole}</p>
                                  <button onclick="evaluateCandidate('${candidate.name}')">Evaluate</button>`;
      candidatesList.appendChild(candidateItem);
    });
  }
  
  function evaluateCandidate(candidateName) {
    const evaluatedCandidates = document.getElementById("evaluated-candidates");
    const candidate = candidates.find(candidate => candidate.name === candidateName);
  
    // Create evaluated candidate item
    const evaluatedCandidateItem = document.createElement("li");
    evaluatedCandidateItem.textContent = `${candidate.name} - ${candidate.location}, ${candidate.jobRole}`;
  
    evaluatedCandidates.appendChild(evaluatedCandidateItem);
  }
  