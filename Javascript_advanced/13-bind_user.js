class user {
    constructor(
    ) {
        this.hobby = "Calligraphy";
        this.favoriteSport = "Hockey";
        this.astrologicalSign = "Aries";
        this.firstName = "Guillaume";
        this.lastName = "Johns";
        this.location = "Netherlands";
        this.occupation = "Engineer";
    }
}
    function logWelcomeUser(welcomeString) {
        console.log(`${welcomeString}, ${this.firstName}, Your occupation is: ${this.occupation}`);
    }

const bindLogWelcomeUser = logWelcomeUser.bind(new user());

bindLogWelcomeUser("Welcome");

bindLogWelcomeUser("Hello");