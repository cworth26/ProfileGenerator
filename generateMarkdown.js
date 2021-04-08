function generateMarkdown(data) {
    return `
    # ${data.title}
  
  # Description
  ${data.description}
  
  # Table of Contents 
  ${data.name}
  
  ${data.email}
  
  ${data.ID}
  
  ${data.OfficeNumber}
  
  ${data.Role}
  
//   ${data.test}
  
//   ${data.questions}
  
  `;
  }
  
  module.exports = generateMarkdown;