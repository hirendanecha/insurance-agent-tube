// const frontendUrl = 'http://localhost:4200/';
// const backendUrl = 'http://localhost:8080/';
// const loginUrl = 'http://localhost:4200/login';

const frontendUrl ='https://video.insuranceagent.tube/';
const backendUrl =  'https://api.insuranceagent.tube/';
const loginUrl = 'https://www.insuranceagent.tube/login';
const wasabiUrl = 'https://freedom-social.s3.us-east-1.wasabisys.com/';
const logoutUrl = 'https://www.insuranceagent.tube/logout';;



export const environment = {
  production: true,
  frontendUrl: frontendUrl,
  backendUrl: backendUrl,
  loginUrl: loginUrl,
  apiUrl: `${backendUrl}api/v1/`,
  domain: '.insuranceagent.tube',
  wasabiUrl: wasabiUrl,
  socketUrl: `${backendUrl}`,
  conferenceUrl: 'https://meet.facetime.tube/',
  logoutUrl: logoutUrl
};

