const LinksSocialMedia = {
  github: 'alanrei',
  youtube: 'renatocariani',
  facebook: 'alan reineri',
  instagram: 'iam.alanr',
  twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => {
      response.json()
    })
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.Bio
      userLink.href = data.html_Url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
