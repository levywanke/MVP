// API utility functions for GitHub Stats Analyzer

// Example function to search for jobs using GitHub Jobs API
async function searchJobs(parameters) {
    try {
      const response = await fetch('/api/user/job-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(parameters)
      });
      const jobResults = await response.json();
      console.log('Job search results:', jobResults);
      return jobResults;
    } catch (error) {
      console.error('Error searching for jobs:', error);
      return [];
    }
  }
  
  // Example usage (optional)
  // const searchParameters = { location: 'Remote', description: 'Developer' };
  // searchJobs(searchParameters);
  