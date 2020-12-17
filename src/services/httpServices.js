const apiURL = "https://opentdb.com/api.php?";

const makeHttpService = async (requestType, endPoint) => {
    if(requestType === "get") {
        const fetchQuizQuestions = await fetch(`${apiURL}${endPoint}`);

        return fetchQuizQuestions.json();
    }
};

export { makeHttpService }