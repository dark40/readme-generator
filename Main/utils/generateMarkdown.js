// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![GitHub](https://img.shields.io/badge/license-MIT-blue.svg)';
    case 'APACHE 2.0':
      return '![GitHub](https://img.shields.io/badge/license-APACHE_2.0-blue.svg)';
    case 'GPL 3.0':
      return '![GitHub](https://img.shields.io/badge/license-GPL_3.0-blue.svg)';
    case 'BSD 3':
      return '![GitHub](https://img.shields.io/badge/license-BSD_3.0-blue.svg)';
    case 'None':
      return '';
  }
}


module.exports = renderLicenseBadge;
