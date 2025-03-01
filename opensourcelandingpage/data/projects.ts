// Steps to Add a Project Detail:  

// 1. **Fork & Clone the Repo**:  
//    - Fork the repository and clone it to your local machine.  

// 2. **Create a New Branch**:  
//    - Use `git checkout -b your-branch-name`.  

// 3. **Add Project Details**:  
//    - Copy an existing project detail block.  
//    - Change the `id`, `name`, `description`, and `githubUrl` (only update the folder name).  

// 4. **Upload Image to Cloudinary**:  
//    - Upload the project image to [Cloudinary](https://cloudinary.com/).  
//    - Copy the image URL and update it in the `image` field.  
//    - Reference a tutorial video on using Cloudinary (provide the link).  

// 5. **Commit & Push Changes**:  
//    - Run `git add .`, `git commit -m "Added new project"`, and `git push origin your-branch-name`.  

// 6. **Create a Pull Request**:  
//    - Open GitHub, navigate to your forked repo, and create a PR to merge your branch.  


export const projectsData = [
  {
    id: 1,
    name: "Book Review System",
    description: "This project is a web-based application designed to manage books and reviews. It allows users to add, edit, delete, and view books and their reviews. The system is built using PHP and MySQL.",
    image: "https://github.com/zahidrahimoon/webopensource/blob/master/Book-Review-System/screenshots/book.PNG?raw=true",
    technologies: ["HTML", "CSS", "PHP", "MYSQL"],
    githubUrl: "https://github.com/zahidrahimoon/webopensource/tree/master/Book-Review-System",
  },
  {
    id: 2,
    name: "Card",
    description: "This React component displays a collection of models using a visually appealing Card layout. Each card showcases a model's name, description, and image. Designed with simplicity and ease of use in mind, this component is perfect for projects requiring a stylish presentation of individual profiles or items.",
    image: "https://res.cloudinary.com/dzr3drmyk/image/upload/v1740762269/cardreact_jxi9d0.png",
    technologies: ["REACT", "TAILWIND CSS", "RESPONSIVE"],
    githubUrl: "https://github.com/example/beta-framework",
  },
  {
    id: 3,
    name: "Color Picker",
    description: "This project is a simple color picker created using HTML, CSS, and JavaScript. It allows users to select a color from a palette and see its code. The project is designed with simplicity and ease of use in mind, making it perfect for beginners and projects requiring a color selection tool.",
    image: "data:image/jpeg;base64,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",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    githubUrl: "https://github.com/zahidrahimoon/webopensource/tree/master/Color%20Picker",
  },
  {
    id: 4,
    name: "Color Changer",
    description: "This project is a simple React app that allows you to change the background color by clicking on buttons. It's designed to be user-friendly and easy to understand, making it a great starting point for beginners looking to explore React and its capabilities.",
    image: "https://res.cloudinary.com/dzr3drmyk/image/upload/v1740763015/color_aubkhe.png",
    technologies: ["REACT", "TAILWIND CSS", "HOOKS"],
    githubUrl: "https://github.com/zahidrahimoon/webopensource/tree/master/Colorchanger",
  },
  {
    id: 5,
    name: "Dictionary App",
    description: "This project is a comprehensive dictionary application built using React, allowing users to search and view definitions of words. It features a user-friendly interface, making it easy for users to navigate and find the information they need.",
    image: "https://cdn.dribbble.com/users/3614936/screenshots/18387783/media/076086f2de763d3ff1fd3c69251562a0.png?format=webp&resize=400x300&vertical=center",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    githubUrl: "https://github.com/zahidrahimoon/webopensource/tree/master/Dictionary%20App",
  },
  {
    id: 6,
    name: "Friend Sync",
    description: "This project is a comprehensive dictionary application built using React, allowing users to search and view definitions of words. It features a user-friendly interface, making it easy for users to navigate and find the information they need.",
    image: "",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    githubUrl: "https://github.com/zahidrahimoon/webopensource/tree/master/FriendSync",
  },
  {
    id: 7,
    name: "Furniture Website",
    description: "This project is a collection of multiple furniture websites built using React, showcasing a variety of furniture designs and styles. Each website features a user-friendly interface, making it easy for users to navigate and find the furniture they need.",
    image: "",
    technologies: ["HTML", "CSS", "JAVASCRIPT", "SCSS"],
    githubUrl: "https://github.com/zahidrahimoon/webopensource/tree/master/Furniture",
  },
  {
    id: 8,
    name: "IconInteract",
    description: "This project features interactive social media icons designed using React, providing a visually appealing and engaging user experience. The icons are designed to be user-friendly, making it easy for users to navigate and interact with social media platforms.",
    image: "",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    githubUrl: "https://github.com/zahidrahimoon/webopensource/tree/master/IconInteract",
  },
  {
    id: 9,
    name: "ImageSlider",
    description: "This project is an interactive image slider built using React, providing a visually appealing and engaging user experience. It's designed to be user-friendly, making it easy for users to navigate and interact with the images.",
    image: "",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    githubUrl: "https://github.com/zahidrahimoon/webopensource/tree/master/ImageSlider",
  },
  {
    id: 10,
    name: "ImageSlider2",
    description: "A refined interactive image slider built with React, offering an enhanced visual experience and user engagement. Designed for intuitive navigation and interaction with images.",
    image: "",
    technologies: ["HTML", "CSS", "JAVASCRIPT"],
    githubUrl: "https://github.com/zahidrahimoon/webopensource/tree/master/ImageSlider2",
  },
  // Add more projects here...
]

