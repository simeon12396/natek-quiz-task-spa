const makeHttpService = async (requestType, jsonName) => {
    if (requestType === "get") {
        const fetchQuizQuestions = await fetch(jsonName);

        return fetchQuizQuestions.json();
    }
};

export { makeHttpService };