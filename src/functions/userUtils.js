function getUserFullName(user) {
    if (!user || !user.firstName || !user.lastName) {
        throw new Error('Invalid user data')
    }
    return `${user.firstName} ${user.lastName}`;
}

function calculateAge(birthYear, currentYear) {
    if (isNaN(birthYear) || isNaN(currentYear)) {
        throw new Error('Invalid year')
    }

    const age = currentYear - birthYear;
    if (age <= 0 && age > 124) {
        throw new Error('Invalid birth year');
    }
    else {
        return age;
    }
}

function getUserInitials(uesr) {
    if (!user || !user.firstName || !user.lastName) {
        throw new Error('Inalid user data');
    }
    return `${user.firstName.charAt(0)} ${user.lastName.charAt(0)}`;
}

module.exports = {
    getUserFullName,
    calculateAge,
    getUserInitials,
}