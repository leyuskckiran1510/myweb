() => {

    let _hr_err = (err) => {
        /*handle the fetch error*/
        console.log(err)
    }
    {
        // ------------------- HAKER RANK -------------------
        /*https://www.hackerrank.com/profile/leyuskc*/
        let user = "leyuskc"
        let api_HR_badges = "https://www.hackerrank.com/rest/hackers/{user}/badges".format({ user: user })
        let api_HR_certf = "https://www.hackerrank.com/community/v1/test_results/hacker_certificate?username={user}".format({ user: user })
        let api_HR_solved = "https://www.hackerrank.com/rest/hackers/{user}/recent_challenges?limit=20&cursor=&response_version=v2".format({ user: user })
    
        /*CROS anywhere for now as a proxy server*/
        api_HR_solved = "https://cors-anywhere.herokuapp.com/https://www.hackerrank.com/rest/hackers/{user}/recent_challenges?limit=20&cursor=&response_version=v2".format({ user: user })
    

        if (DEBUGG) {
            api_HR_badges = "./sample_hr_badges.json"
            api_HR_certf = "./sample_hr_cert.json"
            api_HR_solved = "./sample_hr_solved.json"
        }
        fetch(api_HR_solved).then((x) => {
            if (x.statusText == "OK") {
                console.log("Sucessfully loaded HackerRank solved chalanges")
                return x.text()
            } else {
                console.log(x)
                throw "Error:-\n Code:-{status}\n Text:- {statusText}".format(x)
            }
        }, _hr_err).then((x) => {
            let solveds = JSON.parse(x)
            console.log(solveds)

        }, _hr_err).catch(_hr_err).finally()

    }

    {
        // -------------- LEETCODE -------------------
        /*https://leetcode.com/leyuskc/*/

        let api_LC_solved = "https://leetcode.com/graphql/";
        fetch(`https://cors-anywhere.herokuapp.com/${api_LC_solved}`, {
            "referrer": "https://leetcode.com/leyuskc/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"query\":\"\\n    query recentAcSubmissions($username: String!, $limit: Int!) {\\n  recentAcSubmissionList(username: $username, limit: $limit) {\\n    id\\n    title\\n    titleSlug\\n    timestamp\\n  }\\n}\\n    \",\"variables\":{\"username\":\"leyuskc\",\"limit\":15},\"operationName\":\"recentAcSubmissions\"}",
            "method": "POST",
        }).then((x) => {
            if (x.statusText == "OK") {
                console.log("Sucessfully loaded LEETCODE solved chalanges")
                return x.text()
            } else {
                throw "Error:-\n Code:-{status}\n Text:- {statusText}".format(x)
            }
        }, _hr_err).then((x) => {
            let solveds = JSON.parse(x)
            print(solveds)

        }, _hr_err).catch(_hr_err).finally();
    }

}