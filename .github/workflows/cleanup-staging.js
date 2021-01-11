'use strict';

const {execSync} = require('child_process');
const fs = require('fs');
const https = require('https');

const getIsPRStillOpen = (prID) => {
  return new Promise((resolve, reject) => {
    https.get(`https://github.com/akeneo/akeneo-design-system/tree/gh-pages${prID}`, function(res) {
      resolve(404 !== res.statusCode);
    }).on('error', function(e) {
      reject(e)
    });
  })
}

const cleanupStagingEnvs = async () => {
  const allFiles = fs.readdirSync('./')

  const branchIdPattern = /^[0-9]{5}$/g;
  const stagingFolders = allFiles.filter(fileName => branchIdPattern.test(fileName))

  for (const stagingfolder of stagingFolders) {
    const isPRStillOpen = await getIsPRStillOpen(stagingfolder);
    if (!isPRStillOpen) {
      fs.rmdirSync(stagingfolder, { recursive: true });
      execSync(`git rm -r ${stagingfolder}`);
    }
  }
}

(() => {
  cleanupStagingEnvs()
})()
