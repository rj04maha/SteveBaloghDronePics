import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/auth/drive.photos.readonly",
  headers: {
    Authorization:
      "Client-ID 273294683312-jprngh4ne39qv25clg0b9cdmquq3bp9g.apps.googleusercontent.com"
  }
});

//client ID 273294683312-jprngh4ne39qv25clg0b9cdmquq3bp9g.apps.googleusercontent.com
//client secret lqUJ1JD3YCOWmyARTpZVLHnC

//{"web":{"client_id":"273294683312-jprngh4ne39qv25clg0b9cdmquq3bp9g.apps.googleusercontent.com","project_id":"steve-drone-pics-1579065533788","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"lqUJ1JD3YCOWmyARTpZVLHnC","javascript_origins":["http://localhost:8000"]}}

//api key AIzaSyCGrSShGvJyaQQgjcdj3cDCja05_EHVVhg
