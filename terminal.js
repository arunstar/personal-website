/**
 * Terminal Bio - Interactive Linux-style terminal for personal website
 * Author: Arun
 */

// ==========================================
// Configuration & Bio Data
// ==========================================
const BIO_DATA = {
    name: "Arun",
    title: "Software Engineer",
    location: "Earth",
    email: "hello@example.com",
    website: "https://example.com",
    github: "https://github.com/arunstar",
    linkedin: "https://linkedin.com/in/arun",
    twitter: "https://twitter.com/arun",

    about: `Passionate software engineer with a love for building elegant solutions 
to complex problems. I enjoy working on distributed systems, developer tools, 
and anything that makes developers' lives easier.

When I'm not coding, you'll find me exploring new technologies, contributing 
to open source, or diving deep into system architecture.`,

    skills: {
        languages: ["Python", "JavaScript", "TypeScript", "Go", "Rust", "SQL"],
        frameworks: ["React", "Node.js", "FastAPI", "Django", "Next.js"],
        tools: ["Docker", "Kubernetes", "AWS", "GCP", "Terraform", "Git"],
        databases: ["PostgreSQL", "Redis", "MongoDB", "DynamoDB"],
        other: ["System Design", "CI/CD", "Linux", "Microservices"]
    },

    projects: [
        {
            name: "project-alpha",
            description: "A high-performance distributed cache system",
            tech: ["Go", "Redis", "gRPC"],
            url: "https://github.com/arunstar/project-alpha"
        },
        {
            name: "dev-toolkit",
            description: "CLI tools to boost developer productivity",
            tech: ["Rust", "CLI"],
            url: "https://github.com/arunstar/dev-toolkit"
        },
        {
            name: "cloud-monitor",
            description: "Real-time infrastructure monitoring dashboard",
            tech: ["React", "TypeScript", "WebSocket"],
            url: "https://github.com/arunstar/cloud-monitor"
        }
    ],

    experience: [
        {
            role: "Senior Software Engineer",
            company: "TechCorp",
            period: "2022 - Present",
            description: "Building scalable backend systems"
        },
        {
            role: "Software Engineer",
            company: "StartupXYZ",
            period: "2020 - 2022",
            description: "Full-stack development"
        }
    ]
};

// ASCII Art Logo
const ASCII_LOGO = `
    ___                      
   /   |  _______  ________ 
  / /| | / ___/ / / / __ \\ \\
 / ___ |/ /  / /_/ / / / / /
/_/  |_/_/   \\__,_/_/ /_/ / 
                        /_/  
`;

const TUX_LOGO = `
       _nnnn_
      dGGGGMMb
     @p~qp~~qMb
     M|@||@) M|
     @,----.JM|
    JS^\\__/  qKL
   dZP        qKRb
  dZP          qKKb
 fZP            SMMb
 HZM            MMMM
 FqM            MMMM
__| ".        |\\dS"qML
|    \`.       | \`' \\Zq
_)      \\.___.,|     .'
\\____   )MMMMMP|   .'
     \`-'       \`--'
`;

// ==========================================
// Command Definitions
// ==========================================
const COMMANDS = {
    help: {
        description: "Show available commands",
        usage: "help [command]",
        execute: (args) => {
            if (args.length > 0) {
                const cmd = args[0].toLowerCase();
                if (COMMANDS[cmd]) {
                    return `<span class="highlight-cyan">${cmd}</span> - ${COMMANDS[cmd].description}
<span class="highlight-muted">Usage: ${COMMANDS[cmd].usage || cmd}</span>`;
                }
                return `<span class="highlight-pink">Command not found: ${cmd}</span>`;
            }

            let output = `<span class="highlight-bright">Available Commands:</span>\n\n`;
            const cmdList = Object.entries(COMMANDS)
                .map(([name, cmd]) => `  <span class="highlight-green">${name.padEnd(12)}</span> ${cmd.description}`)
                .join('\n');
            output += cmdList;
            output += `\n\n<span class="highlight-muted">Tip: Use Tab for autocomplete, ↑↓ for history</span>`;
            return output;
        }
    },

    whoami: {
        description: "Display user information",
        execute: () => {
            return `<span class="highlight-green">${BIO_DATA.name}</span> - ${BIO_DATA.title}
<span class="highlight-muted">📍 ${BIO_DATA.location}</span>`;
        }
    },

    about: {
        description: "Learn more about me",
        execute: () => {
            return `<span class="highlight-bright">About Me</span>
<span class="highlight-muted">━━━━━━━━━━</span>

${BIO_DATA.about}`;
        }
    },

    neofetch: {
        description: "Display system info (bio style)",
        execute: () => {
            const colors = ['#ff5f56', '#ffbd2e', '#27ca3f', '#79c0ff', '#d2a8ff', '#ffa657'];
            const colorBlocks = colors.map(c => `<span class="color-block" style="background:${c}"></span>`).join('');

            return `<div class="neofetch-output">
    <pre class="neofetch-logo">${TUX_LOGO}</pre>
    <div class="neofetch-info">
        <span><span class="highlight-green">${BIO_DATA.name.toLowerCase()}</span>@<span class="highlight-green">portfolio</span></span>
        <div class="neofetch-separator"></div>
        <span><span class="label">OS:</span> <span class="value">Human 1.0</span></span>
        <span><span class="label">Host:</span> <span class="value">${BIO_DATA.location}</span></span>
        <span><span class="label">Kernel:</span> <span class="value">${BIO_DATA.title}</span></span>
        <span><span class="label">Uptime:</span> <span class="value">A few decades</span></span>
        <span><span class="label">Shell:</span> <span class="value">zsh + curiosity</span></span>
        <span><span class="label">Terminal:</span> <span class="value">This one!</span></span>
        <span><span class="label">CPU:</span> <span class="value">Caffeinated Brain</span></span>
        <span><span class="label">Memory:</span> <span class="value">Lots of ideas / Some debugging needed</span></span>
        <div class="neofetch-separator"></div>
        <div class="color-blocks">${colorBlocks}</div>
    </div>
</div>`;
        }
    },

    skills: {
        description: "List my technical skills",
        execute: () => {
            let output = `<span class="highlight-bright">Technical Skills</span>\n<span class="highlight-muted">━━━━━━━━━━━━━━━━</span>\n\n`;

            Object.entries(BIO_DATA.skills).forEach(([category, items]) => {
                output += `<span class="highlight-purple">${category.charAt(0).toUpperCase() + category.slice(1)}:</span>\n`;
                output += items.map(item => `  <span class="highlight-cyan">▸</span> ${item}`).join('\n');
                output += '\n\n';
            });

            return output.trim();
        }
    },

    projects: {
        description: "View my projects",
        execute: () => {
            let output = `<span class="highlight-bright">Featured Projects</span>\n<span class="highlight-muted">━━━━━━━━━━━━━━━━━</span>\n\n`;
            output += '<div class="project-list">';

            BIO_DATA.projects.forEach(project => {
                const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
                output += `<div class="project-item">
    <span class="project-name">📁 ${project.name}</span>
    <div class="project-desc">${project.description}</div>
    <div class="project-tech">${techTags}</div>
    <a href="${project.url}" target="_blank" class="terminal-link" style="font-size:0.85rem">View on GitHub →</a>
</div>`;
            });

            output += '</div>';
            return output;
        }
    },

    experience: {
        description: "View my work experience",
        execute: () => {
            let output = `<span class="highlight-bright">Work Experience</span>\n<span class="highlight-muted">━━━━━━━━━━━━━━━━</span>\n\n`;

            BIO_DATA.experience.forEach((exp, index) => {
                output += `<span class="highlight-green">${exp.role}</span> @ <span class="highlight-cyan">${exp.company}</span>
<span class="highlight-muted">${exp.period}</span>
${exp.description}\n`;
                if (index < BIO_DATA.experience.length - 1) output += '\n';
            });

            return output;
        }
    },

    contact: {
        description: "Get my contact information",
        execute: () => {
            return `<span class="highlight-bright">Get In Touch</span>
<span class="highlight-muted">━━━━━━━━━━━━</span>

<span class="highlight-purple">📧 Email:</span>    <a href="mailto:${BIO_DATA.email}" class="terminal-link">${BIO_DATA.email}</a>
<span class="highlight-purple">🌐 Website:</span>  <a href="${BIO_DATA.website}" target="_blank" class="terminal-link">${BIO_DATA.website}</a>
<span class="highlight-purple">💻 GitHub:</span>   <a href="${BIO_DATA.github}" target="_blank" class="terminal-link">${BIO_DATA.github}</a>
<span class="highlight-purple">💼 LinkedIn:</span> <a href="${BIO_DATA.linkedin}" target="_blank" class="terminal-link">${BIO_DATA.linkedin}</a>
<span class="highlight-purple">🐦 Twitter:</span>  <a href="${BIO_DATA.twitter}" target="_blank" class="terminal-link">${BIO_DATA.twitter}</a>

<span class="highlight-muted">Feel free to reach out! I'm always open to interesting conversations.</span>`;
        }
    },

    social: {
        description: "Open social links",
        usage: "social [github|linkedin|twitter]",
        execute: (args) => {
            const links = {
                github: BIO_DATA.github,
                linkedin: BIO_DATA.linkedin,
                twitter: BIO_DATA.twitter
            };

            if (args.length === 0) {
                return `Usage: social [github|linkedin|twitter]
Example: social github`;
            }

            const platform = args[0].toLowerCase();
            if (links[platform]) {
                window.open(links[platform], '_blank');
                return `<span class="highlight-green">Opening ${platform}...</span>`;
            }

            return `<span class="highlight-pink">Unknown platform: ${platform}</span>`;
        }
    },

    clear: {
        description: "Clear the terminal",
        execute: () => {
            document.getElementById('output').innerHTML = '';
            return null;
        }
    },

    echo: {
        description: "Echo a message",
        usage: "echo [message]",
        execute: (args) => args.join(' ') || ''
    },

    date: {
        description: "Show current date and time",
        execute: () => new Date().toString()
    },

    pwd: {
        description: "Print working directory",
        execute: () => '/home/arun/portfolio'
    },

    ls: {
        description: "List directory contents",
        execute: () => {
            return `<span class="highlight-cyan">about.md</span>    <span class="highlight-cyan">projects/</span>    <span class="highlight-green">skills.sh</span>
<span class="highlight-cyan">contact.md</span>  <span class="highlight-cyan">experience/</span>  <span class="highlight-muted">.secrets</span>`;
        }
    },

    cat: {
        description: "Display file contents",
        usage: "cat [filename]",
        execute: (args) => {
            if (args.length === 0) return 'Usage: cat [filename]';

            const file = args[0].toLowerCase();
            const files = {
                'about.md': COMMANDS.about.execute(),
                'contact.md': COMMANDS.contact.execute(),
                'skills.sh': COMMANDS.skills.execute(),
                '.secrets': '<span class="highlight-pink">Nice try! 😄</span>'
            };

            if (files[file]) return files[file];
            return `<span class="highlight-pink">cat: ${file}: No such file or directory</span>`;
        }
    },

    history: {
        description: "Show command history",
        execute: () => {
            if (commandHistory.length === 0) return 'No commands in history';
            return commandHistory.map((cmd, i) => `  ${(i + 1).toString().padStart(3)} ${cmd}`).join('\n');
        }
    },

    banner: {
        description: "Display the welcome banner",
        execute: () => getWelcomeBanner()
    },

    fortune: {
        description: "Get a random fortune",
        execute: () => {
            const fortunes = [
                '"The only way to do great work is to love what you do." - Steve Jobs',
                '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
                '"First, solve the problem. Then, write the code." - John Johnson',
                '"Experience is the name everyone gives to their mistakes." - Oscar Wilde',
                '"In order to be irreplaceable, one must always be different." - Coco Chanel',
                '"Simplicity is the soul of efficiency." - Austin Freeman',
                '"Make it work, make it right, make it fast." - Kent Beck'
            ];
            return `<span class="highlight-yellow">🔮 ${fortunes[Math.floor(Math.random() * fortunes.length)]}</span>`;
        }
    },

    sudo: {
        description: "Execute with superuser privileges",
        execute: (args) => {
            if (args.length === 0) return 'usage: sudo command';
            if (args.join(' ').includes('rm -rf')) {
                return `<span class="highlight-pink">Nice try! I'm not falling for that one. 😏</span>`;
            }
            return `<span class="highlight-orange">[sudo] password for arun: </span>
<span class="highlight-pink">Sorry, user arun is not allowed to execute commands as root.</span>
<span class="highlight-muted">(This is just a portfolio, not a real terminal!)</span>`;
        }
    },

    matrix: {
        description: "Enter the matrix (visual effect)",
        execute: () => {
            return `<span class="highlight-green">Wake up, Neo...
The Matrix has you...
Follow the white rabbit.

<span class="highlight-muted">🐰 Knock, knock.</span></span>`;
        }
    },

    coffee: {
        description: "Get some coffee",
        execute: () => {
            return `<span class="highlight-orange">
   ( (
    ) )
  ........
  |      |]
  \\      /
   \`----'

<span class="highlight-bright">Here's your coffee! ☕</span>
<span class="highlight-muted">Fuel for coding sessions...</span></span>`;
        }
    },

    exit: {
        description: "Exit the terminal (just kidding)",
        execute: () => {
            return `<span class="highlight-muted">There is no escape... just kidding! 
This is a web terminal, refresh the page to restart.</span>`;
        }
    }
};

// Command aliases
const ALIASES = {
    'h': 'help',
    '?': 'help',
    'cls': 'clear',
    'c': 'clear',
    'hi': 'whoami',
    'hello': 'whoami',
    'me': 'about',
    'bio': 'neofetch',
    'info': 'neofetch',
    'skill': 'skills',
    'tech': 'skills',
    'project': 'projects',
    'work': 'experience',
    'exp': 'experience',
    'email': 'contact',
    'links': 'contact'
};

// ==========================================
// Terminal State
// ==========================================
let commandHistory = [];
let historyIndex = -1;

// ==========================================
// Welcome Banner
// ==========================================
function getWelcomeBanner() {
    return `<pre class="ascii-art">${ASCII_LOGO}</pre>
<span class="highlight-bright">Welcome to my interactive portfolio!</span>
<span class="highlight-muted">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</span>

<span class="highlight-green">Type</span> <span class="highlight-cyan">help</span> <span class="highlight-green">to see available commands</span>
<span class="highlight-green">Try:</span> <span class="highlight-purple">neofetch</span>, <span class="highlight-purple">about</span>, <span class="highlight-purple">skills</span>, <span class="highlight-purple">projects</span>, <span class="highlight-purple">contact</span>

`;
}

// ==========================================
// Terminal Functions
// ==========================================
function addOutput(content, isCommand = false, commandText = '') {
    const output = document.getElementById('output');
    const line = document.createElement('div');
    line.className = 'output-line';

    if (isCommand) {
        line.innerHTML = `<span class="prompt">arun@portfolio:~$</span><span class="command">${commandText}</span>`;
    } else if (content !== null) {
        line.innerHTML = `<span class="result">${content}</span>`;
    }

    output.appendChild(line);
    scrollToBottom();
}

function scrollToBottom() {
    const terminal = document.getElementById('terminal');
    terminal.scrollTop = terminal.scrollHeight;
}

function processCommand(input) {
    const trimmed = input.trim();
    if (!trimmed) return;

    // Add to history
    commandHistory.push(trimmed);
    historyIndex = commandHistory.length;

    // Parse command and arguments
    const parts = trimmed.split(/\s+/);
    let cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    // Check for alias
    if (ALIASES[cmd]) {
        cmd = ALIASES[cmd];
    }

    // Display the command
    addOutput(null, true, trimmed);

    // Execute command
    if (COMMANDS[cmd]) {
        const result = COMMANDS[cmd].execute(args);
        if (result !== null) {
            addOutput(result);
        }
    } else {
        addOutput(`<span class="highlight-pink">Command not found: ${cmd}</span>
<span class="highlight-muted">Type 'help' to see available commands</span>`);
    }
}

function autocomplete(input) {
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return null;

    // Get all command names including aliases
    const allCommands = [...Object.keys(COMMANDS), ...Object.keys(ALIASES)];

    // Find matching commands
    const matches = allCommands.filter(cmd => cmd.startsWith(trimmed));

    if (matches.length === 1) {
        return ALIASES[matches[0]] || matches[0];
    } else if (matches.length > 1) {
        // Show all matches
        addOutput(null, true, trimmed);
        addOutput(matches.join('  '));
        return null;
    }

    return null;
}

// ==========================================
// Event Listeners
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('command-input');
    const terminal = document.getElementById('terminal');

    // Display welcome banner
    addOutput(getWelcomeBanner());

    // Focus input on click anywhere in terminal
    terminal.addEventListener('click', () => {
        input.focus();
    });

    // Handle input
    input.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'Enter':
                processCommand(input.value);
                input.value = '';
                break;

            case 'Tab':
                e.preventDefault();
                const completed = autocomplete(input.value);
                if (completed) {
                    input.value = completed + ' ';
                }
                break;

            case 'ArrowUp':
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    input.value = commandHistory[historyIndex];
                }
                break;

            case 'ArrowDown':
                e.preventDefault();
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    input.value = commandHistory[historyIndex];
                } else {
                    historyIndex = commandHistory.length;
                    input.value = '';
                }
                break;

            case 'l':
                if (e.ctrlKey) {
                    e.preventDefault();
                    COMMANDS.clear.execute();
                }
                break;
        }
    });

    // Keep focus on input
    input.addEventListener('blur', () => {
        setTimeout(() => input.focus(), 10);
    });
});

// Konami code easter egg
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        addOutput(`<span class="highlight-yellow">🎮 KONAMI CODE ACTIVATED! 🎮</span>
<span class="highlight-green">You found the secret! You're awesome!</span>`);
        konamiCode = [];
    }
});
