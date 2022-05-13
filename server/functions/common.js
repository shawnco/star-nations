class EmailAlreadyExists extends Error {
    constructor() {
        super('Email already exists');
        this.name = 'EmailAlreadyExists';
        this.message = 'Email already exists';
    }
}

class MissingId extends Error {
    constructor() {
        super('Missing id');
        this.name = 'MissingId';
        this.message = 'Missing id';
    }
}

class MissingParams extends Error {
    constructor() {
        super('Missing parameters');
        this.name = 'MissingParams';
        this.message = 'Missing parameters';
    }
}

class PasswordsDontMatch extends Error {
    constructor() {
        super('Passwords Don\'t Match');
        this.name = 'PasswordsDontMatch';
        this.message = 'Passwords Don\'t Match';
    }
}

module.exports = {
    errors: {
        EmailAlreadyExists: EmailAlreadyExists,
        MissingId: MissingId,
        MissingParams: MissingParams,
        PasswordsDontMatch: PasswordsDontMatch,
    }
};