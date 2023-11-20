let api_repoes = "https://api.github.com/users/{user_name}/repos?per_page={per_page}&sort={sort}&page={page}"
    let api_readme = `https://api.github.com/repos/{user_name}/{repo_name}/readme`
    let details = {
        "user_name": "leyuskckiran1510",
        "repo_name": "",
        "per_page": 100,
        "page": 1,
        "sort": "created"// created, updated, pushed, full_name
    }
    if(DEBUGG){
        api_repoes = "./sample_git.json"
        api_readme = "./sample_git_readme.json"
    }

    let template_path = "./github.html"
    let all_repos = {};
    let template = ""

    fetch_git_template = () => {
        fetch(template_path).then(x => {
            x.text().then(text => {
                template = text
            }).finally(() => {
                console.log("Template loaded")
            })
        }).catch(err => {
            console.log(err, "Happned")
        }).finally(() => {
            console.log("Template Fetch Completed Sucessfully")
        })
    }


    generate_html = () => {
        let repo_doms = [];
        document.querySelector(".content-title").innerHTML = "<h1>GitHub</h1>"
        let content_div = document.querySelector(".content");
        content_div.classList=[]
        content_div.className="content"
        content_div.innerHTML = "";
        for (a of all_repos) {
            let repo_dom = document.createElement("div");
            repo_dom.className = "git_repo";
            repo_dom.innerHTML = template.format(a);
            content_div.appendChild(repo_dom)
            repo_doms.push(repo_dom)
        }
        toggle_sidebar();
    }
    repos_update = () => {
        if (all_repos.length === undefined) {
            fetch(api_repoes.format(details)).then(x => {
                x.text().then(y => {
                    all_repos = JSON.parse(y)
                }).catch(err => {
                    console.log("Couldnot Parse Text from Respnose")
                })
            }).catch(x => {
                console.log(x, "Happned")
            }).finally(() => {
                console.log("Fetch Completed")
            })
        } else {
            generate_html();
        }
    }
    /*slowly prefetch some background content*/
    fetch_git_template();
    repos_update();