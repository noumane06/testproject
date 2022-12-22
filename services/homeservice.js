import axios from "axios";

const startQuestionnaire = async () => {
    const res = await  axios.get("/api") ;
    return res;
};

export default {
    startQuestionnaire
}