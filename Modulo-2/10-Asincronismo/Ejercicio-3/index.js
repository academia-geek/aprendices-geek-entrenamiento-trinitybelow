const card = document.querySelector('.card');

const getInfoGithubAccount = async (githubAccount) => {
    const response = await fetch(`https://api.github.com/users/${githubAccount}`)
    const data = await response.json();
    return data
}

const render = (info) => {
    const infoCard = `
    <div class="card-body">
        <h5 class="card-title">${info.login}</h5>
        <p><b>id: </b>${info.id}</p>
        <p><b>url: </b><a href='${info.url}'>${info.url}</a></p>
        <p><b>followers: </b>${info.followers}</p>
        <p><b>following: </b>${info.following}</p>
        <p><b>public_repos: </b>${info.public_repos}</p>
    </div>
    `
    card.innerHTML = infoCard;
}

getInfoGithubAccount('samuVillegas').then(res => render(res)).catch(err => console.log(res))
