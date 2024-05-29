#reate project directory
project_dir="github-stats-analyzer"
mkdir -p "$project_dir"

# Create server.js
cat <<EOF > "$project_dir/server.js"
// Your server.js content here
EOF

# Create routes directory
mkdir -p "$project_dir/routes"
touch "$project_dir/routes/githubRoutes.js"
touch "$project_dir/routes/userRoutes.js"

# Create controllers directory
mkdir -p "$project_dir/controllers"
touch "$project_dir/controllers/githubController.js"
touch "$project_dir/controllers/userController.js"

# Create models directory
mkdir -p "$project_dir/models"
touch "$project_dir/models/User.js"
touch "$project_dir/models/Repository.js"
touch "$project_dir/models/Commit.js"

# Create public directory
mkdir -p "$project_dir/public"
touch "$project_dir/public/index.html"

# Create styles directory
mkdir -p "$project_dir/public/styles"
touch "$project_dir/public/styles/style.css"

# Create scripts directory
mkdir -p "$project_dir/public/scripts"
touch "$project_dir/public/scripts/main.js"
touch "$project_dir/public/scripts/api.js"

# Create images directory
mkdir -p "$project_dir/public/images"
# Place your logo.png here
# cp logo.png "$project_dir/public/images/logo.png"

# Create package.json
cat <<EOF > "$project_dir/package.json"
{
  "name": "github-stats-analyzer",
  "version": "1.0.0",
  "description": "GitHub Stats Analyzer",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "author": "",
  "license": "MIT",
  "dependencies": {}
}
EOF

# Create package-lock.json
touch "$project_dir/package-lock.json"

# Create .gitignore
cat <<EOF > "$project_dir/.gitignore"
node_modules/
.env
EOF

# Create .env
touch "$project_dir/.env"

# Create README.md
cat <<EOF > "$project_dir/README.md"
## GitHub Stats Analyzer

This is a project to analyze GitHub statistics.

### Getting Started

Follow these instructions to get the project up and running on your local machine.

\`\`\`bash
# Installation
npm install

# Start the server
npm start
\`\`\`

### Directory Structure

\`\`\`text
github-stats-analyzer/
│
├── server.js
├── routes/
│   ├── githubRoutes.js
│   └── userRoutes.js
├── controllers/
│   ├── githubController.js
│   └── userController.js
├── models/
│   ├── User.js
│   ├── Repository.js
│   └── Commit.js
├── public/
│   ├── index.html
│   ├── styles/
│   │   └── style.css
│   ├── scripts/
│   │   ├── main.js
│   │   └── api.js
│   └── images/
│       └── logo.png
├── package.json
├── package-lock.json
├── .gitignore
├── .env
└── README.md
\`\`\`
EOF

# Create LICENSE
cat <<EOF > "$project_dir/LICENSE"
MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
EOF

# Create mockups directory
mkdir -p "$project_dir/mockups"
# Place your mockup images here
# cp home_page_mockup.png "$project_dir/mockups/home_page_mockup.png"
# cp user_profile_stats_mockup.png "$project_dir/mockups/user_profile_stats_mockup.png"

echo "Project structure created successfully in $project_dir!"

