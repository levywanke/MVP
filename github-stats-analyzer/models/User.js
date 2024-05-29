// Example User model

class User {
    constructor({ username, name, bio, followers, following, public_repos, avatar_url, html_url }) {
      this.username = username;
      this.name = name;
      this.bio = bio;
      this.followers = followers;
      this.following = following;
      this.public_repos = public_repos;
      this.avatar_url = avatar_url;
      this.html_url = html_url;
    }
  }
  
  module.exports = User;
  