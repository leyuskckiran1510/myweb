let platformDetails = null 
let battry = null
let ips = null
let DIR_CURRENT =['/']

no_in_console = () => {
    navigator.userAgentData.getHighEntropyValues(["architecture", 
        "platform", "platformVersion", "model", "bitness", "uaFullVersion"]).then(x => platformDetails = x);
    navigator.getBattery().then(x => battry = x)
    fetch("https://api.db-ip.com/v2/free/self").then(x => x.json()).then((x) => {
        ips = x
    }
    )
}
const FILES = [
    {
        "type": "directory", "name": ".", "contents": [
            { "type": "file", "name": "404.md" },
            {
                "type": "directory", "name": "aboutme", "contents": [
                    { "type": "file", "name": "certs.html" },
                    { "type": "file", "name": "codecorner.html" },
                    { "type": "file", "name": "github.html" },
                    { "type": "file", "name": "index.html" },
                    { "type": "file", "name": "others.html" },
                    { "type": "file", "name": "profile.html" }
                ]
            },
            { "type": "file", "name": "CNAME" },
            {
                "type": "directory", "name": "desktop", "contents": [
                    { "type": "file", "name": "files.html" },
                    { "type": "file", "name": "projects.html" },
                    { "type": "file", "name": "terminal.html" }
                ]
            },
            {
                "type": "directory", "name": "dynamic", "contents": [
                    { "type": "file", "name": "files.json" }
                ]
            },
            { "type": "file", "name": "favicon.ico" },
            { "type": "file", "name": "index.html" },
            { "type": "file", "name": "README.md" },
            { "type": "file", "name": "serviceworker.js" },
            {
                "type": "directory", "name": "static", "contents": [
                    {
                        "type": "directory", "name": "css", "contents": [
                            {
                                "type": "directory", "name": "aboutme", "contents": [
                                    { "type": "file", "name": "style.css" }
                                ]
                            },
                            { "type": "file", "name": "home.css" },
                            { "type": "file", "name": "icons.css" }
                        ]
                    },
                    {
                        "type": "directory", "name": "fonts", "contents": [
                            { "type": "file", "name": "fa-brands-400.woff2" },
                            { "type": "file", "name": "fa-regular-400.ttf" }
                        ]
                    },
                    {
                        "type": "directory", "name": "img", "contents": [
                            {
                                "type": "directory", "name": "certs", "contents": [
                                    { "type": "file", "name": "100_challanges.jpg" },
                                    { "type": "file", "name": "DjangoAndMongo.jpg" },
                                    { "type": "file", "name": "downUnderCtf.jpg" },
                                    { "type": "file", "name": "ethicalHacking.jpg" },
                                    { "type": "file", "name": "hackerrank_basic_python.jpg" },
                                    { "type": "file", "name": "hackerrank_problem_solving.jpg" },
                                    { "type": "file", "name": "low_res_100_challanges.jpg" },
                                    { "type": "file", "name": "w3school_python.jpg" }
                                ]
                            },
                            { "type": "file", "name": "directory.png" },
                            { "type": "file", "name": "file.png" },
                            { "type": "file", "name": "folder.png" },
                            { "type": "file", "name": "low_side_pp.jpeg" },
                            { "type": "file", "name": "projects.jpg" },
                            { "type": "file", "name": "side_pp.jpeg" },
                            { "type": "file", "name": "terminal.jpg" },
                            { "type": "file", "name": "wallpaper.jpg" }
                        ]
                    },
                    {
                        "type": "directory", "name": "js", "contents": [
                            {
                                "type": "directory", "name": "aboutme", "contents": [
                                    { "type": "file", "name": "codec.js" },
                                    { "type": "file", "name": "git.js" },
                                    { "type": "file", "name": "others.js" },
                                    { "type": "file", "name": "profile.js" }
                                ]
                            },
                            { "type": "file", "name": "lilhx.js" },
                            { "type": "file", "name": "s.js" }
                        ]
                    },
                    { "type": "directory", "name": "others" }
                ]
            }
        ]
    }
    ,
    { "type": "report", "directories": 12, "files": 43 }
]

var __cat__ = (...args) => {
    console.log("[cat]", ...args) 
    return "[cat]"
}

let detect_public_ip = () => {
    if (ips == null) {
        return "AdBlocker Prevented from loading Ip"
    } else {
        return `${ips.ipAddress}[${ips.countryName}/${ips.stateProv}/${ips.city}]`
    }
}

var __sysinfo__ = () => {
    return `<div class="message">
<span>OS:</span><text> ${platformDetails.platform}</text></br>
<span>Kernel Version:</span><text> ${platformDetails.platformVersion}</text></br>
<span>Screen Resolution:</span><text> ${screen.availWidth}X${screen.availHeight} [${screen.orientation.type}] </text></br>
<span>CPU:</span><text> ${platformDetails.architecture}[${platformDetails.bitness} BIT] Cores[${navigator.hardwareConcurrency}]</text></br>
<span>Memory:</span><text> ${navigator.deviceMemory}GB</text></br>
<span>Browser:</span><text> ${platformDetails.brands.map(x => x.brand).join(" -> ")}</text></br>
<span>Battery0:</span><text> ${battry.level * 100}% [${battry.charging ? "Charging" : "Not Charging"} ]</text></br>
<span>Public IP:</span><text> ${detect_public_ip()}</text></br>
<span>Locale:</span><text> ${navigator.language}</text></br>
    </div>`



} 

var __help__ = () => {
    const message = ``
    return message
}

var __whoami__ = () => {
    return `Hi! My name is Kiran Raj Dhakal[leyuskc],<a href="/aboutme/" target="_blank">Read more</a>`
}

let MODDED_LIST = new Object()
let modFileList = (json, add_to) => {
    if (json == null && json) {
        return null
    }
    add_to[json.name] = new Object()
    if (json.type == "directory" && json.contents) {
        json.contents.map(_x => {
            add_to[json.name][_x.name] = modFileList(_x, add_to[json.name])
        })
    } else {
        add_to[json.name] = null
    }
    return add_to[json.name]
}
modFileList(FILES[0], MODDED_LIST)
MODDED_LIST["/"] = MODDED_LIST["."]
MODDED_LIST["."] = null

var __clear__ = (arg) => {
    document.querySelector(".terminal.st .body").innerHTML = ""
    return "[cleared]"
}

var __cls__ = __clear__


let current_dir_object = (current) => {
    let __temp = JSON.parse(JSON.stringify(MODDED_LIST))
    current.forEach(x => {
        __temp = __temp[x]
    })
    return __temp
}


var __cd__ = (arg) => {
    let _cur
    
    return "[cd]"
}
var __ls__ = (...arg) => {
    if (arg.length < 1) {
        Object.keys(current_dir_object(DIR_CURRENT)).forEach(x => {
            console.log(x)
        })
    } else {
        switch (true) {
            case arg[0][0] == "-R": {
                let _print_all = (obj,padding) => {
                    Object.keys(obj).forEach(x => {
                        console.log(padding,x)
                        if (obj[x] != null) {
                            _print_all(obj[x],padding+padding)
                        }
                    })
                }
                _print_all(current_dir_object(DIR_CURRENT),"|-")
                break
            }
        }
    }
    return "l"
}

var ask = function () {
    rl.question("~$", (command) => {
        if (command == "q") {
            exit();
        }
        else if (command == "ls") {
            __ls__();
        }
        else {
            const _command = command.split(" ").slice(1)
            __ls__(_command)
        }
        ask()
    })
}




const { exit } = require("process");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
ask()