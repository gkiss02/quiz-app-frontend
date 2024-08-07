class User {
    id: number;
    name: string;
    email: string;
    password: string;
    profilePicture: string;
    constructor(id: number, name: string, email: string, password: string, profilePicture: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
    }
}

export default User;