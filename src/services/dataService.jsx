// src/services/dataService.js

export default class DataService {
  _data = {
    projectRepo: 'https://github.com/ripleyzhang/ripleyzhang.github.io',
    react95Repo: 'https://github.com/React95/React95',

    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
            'Hi! I am Ripley Zhang, a computer engineering student interested in computer architecture, operating systems, storage systems, and hardware-software co-design.',
            'I enjoy building systems projects that connect software and hardware, from Java simulations and storage systems to OS kernel synchronization and RISC-V CPU design.',
          ],
        },
      },
      {
        id: 'projects',
        name: 'Projects.txt',
        icon: 'flying_through_space_100',
        content: {
          projects: [
            {
              title: 'GUI-Based Factory Simulation System',
              description:
                'A Java-based factory simulation system with GUI, client-server architecture, DTO-based save/load, construction logic, drones, waste handling, and command-driven simulation.',
              myRole:
                'Implemented modular services, data synchronization, testing workflows, and project-level engineering features.',
              techStack:
                'Java, Gradle, JUnit, Mockito, GUI, Client-Server Architecture',
              repo: '',
            },
            {
              title: 'SSD + S3 Hybrid Storage Architecture',
              description:
                'A FUSE-based hybrid file system exposing remote AWS-compatible object storage as a local file system with SSD-backed block cache.',
              myRole:
                'Built caching, metadata persistence, dirty-block tracking, asynchronous write-back, and eviction logic.',
              techStack:
                'Go, FUSE, Linux, AWS/MinIO, Caching, Asynchronous Write-Back',
              repo: '',
            },
            {
              title: 'Read-Copy-Update in xv6',
              description:
                'Implemented RCU synchronization in the xv6 kernel to improve scalability for read-heavy workloads.',
              myRole:
                'Designed per-CPU reader tracking, grace-period detection, and deferred memory reclamation.',
              techStack:
                'C, xv6, Synchronization, Concurrency, Kernel Debugging',
              repo: '',
            },
            {
              title: 'NEMU / Computer System from Scratch',
              description:
                'Built and studied a computer system stack including NEMU emulator, Abstract Machine runtime, Nanos-lite OS services, and Navy-app workloads.',
              myRole:
                'Implemented and debugged low-level system components across emulator, runtime, OS, and user applications.',
              techStack:
                'C, RISC-V, NEMU, Operating Systems, Emulator',
              repo: '',
            },
          ],
        },
      },
      {
        id: 'skills',
        name: 'Skills.txt',
        icon: 'progman_11',
        content: {
          hard: [
            {
              name: 'Java',
              progress: 90,
            },
            {
              name: 'C',
              progress: 85,
            },
            {
              name: 'Go',
              progress: 80,
            },
            {
              name: 'React',
              progress: 70,
            },
            {
              name: 'Operating Systems',
              progress: 80,
            },
            {
              name: 'Computer Architecture',
              progress: 75,
            },
          ],
          soft:
            'Teamwork, technical communication, debugging, independent learning, system-level thinking',
        },
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
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
      react95Repo: this._data.react95Repo,
    };
  }
}