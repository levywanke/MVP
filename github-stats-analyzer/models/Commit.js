// Example Commit model

class Commit {
    constructor({ commitId, message, author, date, html_url }) {
      this.commitId = commitId;
      this.message = message;
      this.author = author;
      this.date = date;
      this.html_url = html_url;
    }
  }
  
  module.exports = Commit;
  