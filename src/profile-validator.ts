type UserProfile = {
    id: number;
    username: string;
    settings?: {
        notifications?: boolean;
    };
};

// User with Settings and notifications
let user1: UserProfile = {
    id: 1,
    username: "Dorothy",
    settings: {
        notifications: true
    }
};

// User with No settings
let user2: UserProfile = {
    id: 2,
    username: "Kisormoi"
    
    
};
// User with Settings and without notifications

let user3: UserProfile = {
    id: 3,
    username: "DKisormoi",
    settings: {}
};

function isNotified(user: UserProfile): boolean {
    return user.settings?.notifications ?? false;
}

// Display users
console.log(user1);
console.log(user2);
console.log(user3);

// Test notification status
console.log(`${user1.username}: ${isNotified(user1)}`);
console.log(`${user2.username}: ${isNotified(user2)}`);
console.log(`${user3.username}: ${isNotified(user3)}`);
