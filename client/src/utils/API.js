import axios from "axios";

export default {
    //########     question API's     #####
    // get era info
    getEra: function () {
        return axios.get("/api/questions/era");
    },
    getEraById: function (eraId) {
        return axios.get("/api/erainfo/" + eraId);
    },
    // get all the questions
    getQuestions: function () {
        return axios.get("/api/questions");
    },
    getSue: function () {
        return axios.get("/api/questions/sue");
    },
    getPres: function () {
        return axios.get("/api/questions/pres");
    },
    getPresByID: function(id) {
        return axios.get("/api/presinfo/" + id);
    },
    // save a question to the database
    saveQuestion: function (question) {
        return axios.post("/api/questions", question)
    },

    //########     external API's     #####
    // get the president data
    getPresData: function (name) {
        return axios.get("https://exploratory.io/public/api/kanaugust/US-Presidents-Data-Jhy7OdW1hE/data?api_key=guest?fo=json")
    },
    // get library of congress articles
    LOC_API: function (name) {
        // return axios.get("https://www.loc.gov/?fo=json&at=trending_content")
        return axios.get("https://www.loc.gov/collections/?fo=json")
    },

    //########     user API's     #####
    //get all users
    getUsers: function () {
        return axios.get("/api/users");
    },
    // get a single user
    getUserById: function (_id) {
        return axios.get("/api/users/" + _id);
    },
    // get a single user
    getUserId: function (email) {
        return axios.post("/api/users/status", email);
    },
    // login user
    loginUser: function (name) {
        return axios.post("api/users/login", name);
    },
    // logout user
    logoutUser: function (logoutUser) {
        console.log("API - logOut a user")
        console.log("api/logout")
    },
    // signup a user
    signUp: function (newUser){
        return axios.post("api/users/register", newUser);
    },

    //########     stats API's     #####
    //save a result
    saveResults: function (results) {
        return axios.post("api/results", results)
    },
    //save stats
    saveStats: function (stats) {
        return axios.post("api/stats", stats)
    },
    getResults: function () {
        return axios.get("api/results")
    },
    findResultsById: function (id) {
        return axios.get("api/results/" + id);
    },
    findUserStatsByID: function (id) {
        return axios.get("api/results/" + id);
    }
};