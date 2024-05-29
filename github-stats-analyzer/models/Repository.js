// Example Repository model

class Repository {
    constructor({ repoId, name, description, language, stars, forks, html_url }) {
      this.repoId = repoId;
      this.name = name;
      this.description = description;
      this.language = language;
      this.stars = stars;
      this.forks = forks;
      this.html_url = html_url;
    }
  }
  
  module.exports = Repository;
  