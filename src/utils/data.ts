import project1 from "../assets/projects.png"
import lantern from "../assets/lantern.png"
import habit from "../assets/habit.png"
import task from "../assets/task.png"
import jobs from "../assets/jobs.png"
import shop from "../assets/shop.png"
import photo from "../assets/photo.png"

import next from "../assets/next-js.256x256.png"
export type project = {
    name: string,
    image: string,
    details: string
}
export const projects:project[] = [
    {"name": "My Projects", image: project1, "details": "Have a look at my works"},
    {
        "name": "Lantern", 
        image: lantern, 
        details: "Lantern is a social media platform where users can create and upload posts, fostering interaction through a built-in chat application. The site encourages community engagement and content sharing. Users can connect, communicate, and share their experiences seamlessly."
    },
    {
        name: "TrackTitan",
        image: habit,
        details: "HabitQuest is a dynamic habit tracker app designed to help users build and maintain positive routines. With customizable habit lists, progress charts, and reminders, it offers an engaging way to stay motivated and track personal growth. The app encourages consistency and celebrates milestones, making habit formation both rewarding and fun."
    },
    {
        name: "TaskMaster",
        image: task,
        details: "TaskMaster is an intuitive task scheduler app designed to streamline your daily planning and organization. It offers features like customizable task lists, priority settings, and real-time notifications to keep you on track. With TaskMaster, managing your time and achieving your goals becomes effortless and efficient."
    },
    {
        name: "CareerPulse",
        image: jobs,
        details: "PlacementPulse is a comprehensive placement cell app designed to streamline student and interview management. It allows you to add and maintain student data, manage interview schedules, and track interview results effortlessly. With PlacementPulse, coordinating placement activities becomes seamless and efficient, ensuring a smooth experience for both students and recruiters."
    },
    {
        name: "BusyBuy",
        image: shop,
        details:"BusyBuy is a dynamic e-commerce platform designed for a seamless shopping experience. It offers a wide range of products, intuitive navigation, and secure payment options, ensuring a hassle-free purchase journey. With BusyBuy, customers can enjoy fast shipping, excellent customer service, and exclusive deals, making online shopping convenient and enjoyable."
    },
    {
        name: "photoFolio",
        image: photo,
        details: "Photofolio is a sleek photo album app that organizes and showcases your memories beautifully. It features customizable albums, easy photo uploads, and sharing options, perfect for preserving and sharing your favorite moments. With Photofolio, reliving and sharing your cherished memories is simple and elegant."
    }
]

export type Tech = {
    name: string
    image: string
}

export type Skills = {
    languages: Tech[],
    technologies: Tech[],
    databases: Tech[]
}

export const Skill : Skills = {
    languages: [
        {name: "JavaScript", image: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png"},
        {name: "TypeScript", image: "https://cdn-icons-png.flaticon.com/128/5968/5968381.png"},
        {name: "Python", image: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png"},
        {name: "C++", image: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png"},
        {name: "Java", image: "https://cdn.iconscout.com/icon/free/png-512/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png?f=webp&w=256"}
    ],
    technologies: [
        {name: "Nodejs", image: "https://cdn.iconscout.com/icon/free/png-512/free-nodejs-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-226035.png?f=webp&w=256"},
        {name: "Expressjs", image: "https://cdn.iconscout.com/icon/free/png-512/free-express-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175170.png?f=webp&w=256"},
        {name: "Reactjs", image: "https://cdn.iconscout.com/icon/premium/png-512-thumb/reactjs-9100811-7403171.png?f=webp&w=256"},
        {name: "Redux", image: "https://cdn.iconscout.com/icon/free/png-512/free-redux-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-10-pack-icons-283024.png?f=webp&w=256"},
        {name: "Flask", image: "https://cdn.iconscout.com/icon/free/png-512/free-flask-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-15-pack-icons-285137.png?f=webp&w=256"},
        {name: "Nextjs", image: `${next}`}
    ],
    databases: [
        {name: "SQL", image: "https://cdn.iconscout.com/icon/premium/png-512-thumb/sql-116626.png?f=webp&w=256"},
        {name: "MongoDB", image: "https://cdn.iconscout.com/icon/free/png-512/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175138.png?f=webp&w=256"},
    ]
}