class User {
    id: number;
    username: string;
    email: string;
    password: string;
    profilePicture: string;
    constructor(id: number, username: string, email: string, password: string, profilePicture: string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
    }
}

export default User;