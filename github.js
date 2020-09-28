class GitHub {
  constructor() {
    this.client_id = '1bdf77874d539b78c9ed',
    this.client_secret = '4a1769b47ff7b03618226f664593537acba3e3ba'
    this.repo_count = 5
    this.repos_sort = 'created at: asc'
  }

  async getUser(user) {
    const userProfileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const userRepoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const profile = await userProfileResponse.json()
    const repos = await userRepoResponse.json()
    return { profile, repos }
  }
}