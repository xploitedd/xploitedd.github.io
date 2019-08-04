$(document).ready(function() {
    $.ajax({
        url: "https://api.github.com/users/xploitedd/repos",
        contentType: "application/json"
    }).done(function(data) {
        data.forEach(repo => {
            let name = repo.name
            if (name.length > 20)
                name = name.substring(0, 17) + "..."

            $("#github-projects")
                .append('<a class="repo" href="' + repo.html_url + '"><div class="block-item"><h2 class="title">' + name + 
                        '</h2><span class="language ' + repo.language.toLowerCase().replace('#', 'sharp') + '">' + repo.language + 
                        '</span>' + (repo.description != null ? '<p class="description">' + repo.description + '</p>' : '') + '</div></a>')
        });
    })
})