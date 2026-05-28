// src/services/dataService.js
import aboutIcon from '../assets/w98_help_question_mark.ico';
import resumeIcon from '../assets/w98_notepad_file.ico';
import projectsIcon from '../assets/w98_console_prompt.ico';
import skillsIcon from '../assets/w98_paint_old.ico'
import contactIcon from '../assets/w98_address_book_user.ico';
export default class DataService {
  _data = {
    projectRepo: 'https://github.com/ripleyzhang/ripleyzhang.github.io',
    css98Repo: 'https://github.com/jdan/98.css',

    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: aboutIcon,
        content: {
          paragraphs: [ 
            "Hi! I am an graduate student studying Electrical and Computer Engineering at Duke University, with an undergraduate background in Computer Science.",
            "I believe that friendly and respectful communication within a team is key to the company's success. With my experience in software development and system-level engineering, I think I would be a valuable asset to your project.",
            "The main technology I have been using is low-level software engineering. I am in a good relationship with OS kernel. But recently I fell in love with React/Javascripts (this website runs on React btw), and makes some side-projects. I am also fascinated by Computer Architecture and Embedded Systems.",
            "Outside studying, I am creating my own independent games. As a non-binary lesbian, I am pursuing to make contributions to Gender and Sexuality Diversity.",
          ],
          education: [
            {
              credit: 'Master of Engineering in Electrical and Computer Engineering',
              place: 'Duke University, United States, Durham',
              period: 'Aug 2025 - May 2027',
            },
            {
              credit: 'Bachelor in Computer Science',
              place: 'Huazhong University of Science and Technology, China, Wuhan',
              period: 'Sept 2020 - June 2024',
            },
          ],
        },
      },
      {
        id: 'projects',
        name: 'Projects.txt',
        icon: projectsIcon,
        content: {
          projects: [
            {
              title: 'GUI-Based Factory Simulation System',
              description:
                'A Java-based factory simulation system with GUI, client-server support, buildings and roads construction logic, resource production, delivery routing, drones transport, waste handling, and DTO-based save/load functionality.',
              myRole:
                'I worked efficiently in parallel with teammates by defining clear module boundaries, coordinating through Git workflows, and integrating features through code reviews and CI/CD validation.',
              techStack:
                'Java, Gradle, JUnit, Mockito, Git, CI/CD, GUI, Client-Server Architecture',
              repo: 'https://github.com/ripleyzhang/GUI-Based-Factory-Simulation-System',
            },
            {
              title: 'SSD + S3 Hybrid Storage Architecture',
              description:
                'A hybrid storage system exposing remote AWS-compatible object storage as a local file system based on FUSE with SSD-backed block cache.',
              myRole:
                'Implemented metadata persistence, block-level caching, dirty-block tracking, asynchronous write-back, and capacity-based eviction to support reliable large-file read/write workloads.',
              techStack:
                'Go, FUSE, Linux, AWS, Caching, Asynchronous Write-Back',
              repo: 'https://github.com/ripleyzhang/SSD-S3-Hybrid-Storage-Architecture',
            },
            {
              title: 'Read-Copy-Update in xv6',
              description:
                'Implemented RCU synchronization in the xv6 kernel to improve scalability for read-heavy workloads.',
              myRole:
                'Designed per-CPU reader tracking, grace-period detection, and deferred memory reclamation.',
              techStack:
                'C, xv6, Synchronization, Concurrency, Kernel Debugging',
              repo: 'https://github.com/ripleyzhang/RCU-in-xv6',
            },
            {
              title: 'Proxy Kernel Environment OS Lab',
              description:
                'Built and studied a computer system stack including NEMU emulator, Abstract Machine runtime, Nanos-lite OS services, and Navy-app workloads.',
              myRole:
                'Implemented and debugged low-level system components across emulator, runtime, OS, and user applications.',
              techStack:
                'C, RISC-V, NEMU, Operating Systems, Emulator',
              repo: 'https://github.com/ripleyzhang/Proxy-Kernel-Environment-OS-Lab',
            },
            {
              title: 'Pong Game on an FPGA in Verilog',
              description:
                'Built a Pong game on an FPGA-based processor platform using Verilog, integrating VGA display output and PS/2 keyboard input through memory-mapped I/O.',
              myRole:
                'Implemented modular RTL components for input handling, display control, game logic, and processor-peripheral communication.',
              techStack:
                'Verilog, FPGA, VGA, PS/2, Memory-Mapped I/O',
              repo: 'https://github.com/ripleyzhang/Pong-Game-on-an-FPGA-in-Verilog',
            },
          ],
        },
      },
      {
  id: 'skills',
  name: 'Skills.txt',
  icon: skillsIcon,
  content: {
    categories: [
      {
        name: 'Software Engineering',
        skills: [
          'Java',
          'Go',
          'Python',
          'React',
          'JavaScript',
          'TypeScript',
          'SQL',
          'AWS',
          'Docker',      
        ],
      },
      {
        name: 'Firmware Engineering',
        skills: [
          'C/C++',
          'RTOS',
          'Linux',
          'low-level software engineering',
          'Assembly',
          'communication protocols',
          'embedded systems(ESP32, OrangePi/RasberryPi)',
          'FPGA'
        ],
      },
      {
        name: 'Hardware Engineering',
        skills: [
          'Verilog/SystemVerilog',
          'RISC-V',
          'FPGA',
          'RTL Design',
          'Verilog simulation',
          'testbenches',
        ],
      },
      {
        name: 'Tools',
        skills: [
          'Git',
          'Github Action',
          'CI/CD',
        ],
      },
    ],
    soft:
      'Teamwork, technical communication, debugging, independent learning, system-level thinking',
  },
  },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: contactIcon,
        content: {
          emailText: 'You can reach me at ',
          email: 'nz75@duke.edu',
          socialText: 'You can also find me here:',
          social: [
            {
              name: 'FaGithub',
              link: 'https://github.com/ripleyzhang',
            },
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/ningjing-zhang-788a3129b/',
            },
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((item) => item.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      css98Repo: this._data.css98Repo,
    };
  }
}