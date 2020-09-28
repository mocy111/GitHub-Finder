class UI {
  constructor() {
    this.profile = document.querySelector('#profile')
    this.alert = document.querySelector('#alert-container')
  }

  showProfile(user, repos) {
    let reposOutput = ''

    repos.forEach(repo => {
      reposOutput +=
        `<a href="${repo.html_url}" target="_blank" class="list-group-item list-group-item-action">${repo.name}</a>`
    })

    this.profile.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="card">
            <img class="card-img-top" src="${user.avatar_url}" alt="User Profile Image">
            <div class="card-body">
              <h5 class="card-title text-color">${user.login}</h5>
              ${user.bio !== null ? `<p class="card-text">${user.bio}</p>` : ``}
              <a href="${user.html_url}" target="_blank" class="btn btn-dark btn-block">View GitHub</a>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="card profile-details">
            <div class="card-inner">
              <div class="badges">
                <span class="badge badge-dark">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-dark">Followers: ${user.followers}</span>
                <span class="badge badge-dark">Following: ${user.following}</span>
              </div>
              <div class="repos">
                <h3 class="mt-5 mb-3">Latest Repos</h3>
                <div class="list-group">
                  ${reposOutput.length > 1 ? reposOutput : '<p>No repositories</p>'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }

  showNotFound(userInput) {
    this.profile.innerHTML = `
      <div class="text-light">No user with the name <strong>${userInput}</strong> was found</div>
    `
  }

  showError() {
    this.alert.innerHTML = `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      Please enter a user
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    `
  }
}
