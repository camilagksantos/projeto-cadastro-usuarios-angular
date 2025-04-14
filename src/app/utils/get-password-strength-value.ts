import zxcvbn from "zxcvbn";

export const getPasswordStrengthValue = (password: string): number => {
    if (!password) {
        return 0;
    }

    const result = zxcvbn(password);

    const PASSWORD_IS_WEEK = result.score <= 1;
    const PASSWORD_IS_MEDIUM = result.score <= 3;

    if (PASSWORD_IS_WEEK) {
        return 30;
    } else if (PASSWORD_IS_MEDIUM) {
        return 60;
    } else {
        return 100;
    }
}