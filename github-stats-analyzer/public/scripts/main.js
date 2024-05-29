// Main JavaScript file for GitHub Stats Analyzer

// Function to fetch and display user profile information
async function getUserProfile(username) {
    try {
      const response = await fetch(`/api/github/stats/${username}`);
      const userData = await response.json();
      
      // Update user info in the HTML
      const userInfo = document.getElementById('user-info');
      userInfo.innerHTML = `
        <img src="${userData.avatar_url}" alt="${userData.username}'s avatar" />
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Username:</strong> ${userData.username}</p>
        <p><strong>Bio:</strong> ${userData.bio}</p>
        <p><strong>Followers:</strong> ${userData.followers}</p>
        <p><strong>Following:</strong> ${userData.following}</p>
        <p><strong>Public Repositories:</strong> ${userData.public_repos}</p>
        <p><a href="${userData.html_url}" target="_blank">View on GitHub</a></p>
      `;
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  
  // Function to fetch and display user repositories
  async function getUserRepositories(username) {
    try {
      const response = await fetch(`/api/github/repositories/${username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const repositories = await response.json();
      
      // Update repositories list in the HTML
      const repositoriesList = document.getElementById('repositories');
      repositoriesList.innerHTML = repositories.map(repo => `
        <li>
          <h3>${repo.name}</h3>
          <p>${repo.description}</p>
          <p><strong>Language:</strong> ${repo.language}</p>
          <p><strong>Stars:</strong> ${repo.stars}</p>
          <p><strong>Forks:</strong> ${repo.forks}</p>
          <p><a href="${repo.html_url}" target="_blank">View on GitHub</a></p>
        </li>
      `).join('');
    } catch (error) {
      console.error('Error fetching repositories:', error);
    }
  }
  
  // Function to fetch and display commits for a repository
  async function getRepositoryCommits(repositoryId) {
    try {
      const response = await fetch(`/api/github/commits/${repositoryId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const commits = await response.json();
      
      // Update commits list in the HTML
      const commitsList = document.getElementById('commits');
      commitsList.innerHTML = commits.map(commit => `
        <li>
          <h3>${commit.message}</h3>
          <p><strong>Author:</strong> ${commit.author}</p>
          <p><strong>Date:</strong> ${new Date(commit.date).toLocaleString()}</p>
          <p><a href="${commit.html_url}" target="_blank">View on GitHub</a></p>
        </li>
      `).join('');
    } catch (error) {
      console.error('Error fetching commits:', error);
    }
  }
  
  // Initial data load (optional)
  getUserProfile('your-username');
  getUserRepositories('your-username');
  getRepositoryCommits('your-repository-id');
  