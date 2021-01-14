'use strict';

const {execSync, exec} = require('child_process');
const fs = require('fs');

const getIsPRStillOpen = (prID) => {
  return new Promise((resolve, reject) => {
    exec(
      `curl https://api.github.com/repos/akeneo/pim-community-dev/pulls/${prID} --header 'authorization: Bearer ${process.env.CLEANUP_TOKEN}'`, function(error, response) {
      const pullRequest = JSON.parse(response);
      if (undefined === pullRequest.state) {
        reject('Cannot check PR status');
      }

      resolve(undefined !== pullRequest.state && pullRequest.state === 'open')
    })
  })
}

const cleanupStagingEnvs = async () => {
  const allFiles = fs.readdirSync('./')
  const stagingFolders = allFiles.filter(fileName => (/^[0-9]{5}$/g).test(fileName))

  for (const stagingfolder of stagingFolders) {
    try {
      const isPRStillOpen = await getIsPRStillOpen(stagingfolder);
      if (!isPRStillOpen) {
        fs.rmdirSync(stagingfolder, { recursive: true });
        execSync(`git rm -r ${stagingfolder}`);
      }
    } catch (error) {
      console.error(error);
      continue;
    }
  }
}

(() => {
  cleanupStagingEnvs()
})()
