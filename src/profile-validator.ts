type UserProfile = {
    id: number;
    username: string;
    settings?: {
        notifications: boolean;
    };
};

// User with Settings and notifications
let userWithNotifications: UserProfile = {
    id: 1,
    username: "Dorothy",
    settings: {
        notifications: true
    }
};

// User with No settings
let userWithoutSettings: UserProfile = {
    id: 2,
    username: "Kisormoi"
    
    
};
// User with Settings and without notifications

let settingsWithoutNotifications: UserProfile = {
    id: 3,
    username: "DKisormoi",
    settings: {
        notifications: false
    }
};

function isNotified(user: UserProfile): boolean {
    return user.settings?.notifications ?? false;
}

// Display users
console.log(userWithNotifications);
console.log(userWithoutSettings);
console.log(settingsWithoutNotifications);

// Test notification status
console.log("Dorothy notified:", isNotified(userWithNotifications));
console.log("Kisormoi notified:", isNotified(userWithoutSettings));
console.log("DKisormoi notified:", isNotified(settingsWithoutNotifications));

