export const validateFullname = (value) => {
    return value.trim().length > 0;
};

export const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
};

export const validatePhoneNumber = (value) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(value) && value.length == 10;
};

export const validateDocumentNumber = (value) => {
    const numberRegex = /^\d+$/;
    const stringValue = typeof value === 'number' ? value.toString() : value;

    return numberRegex.test(stringValue);
};

export const validateOccupation = (value) => {
    return value.trim().length > 0;
};

export const validateTermsConditions = (isChecked) => {
    return isChecked;
};

export const validatePrivacity = (isChecked) => {
    return isChecked;
};

export const validateTypeDoc = (value) => {
    return value !== null && value.trim().length > 0;
};

export const validateGender = (value) => {
    return value !== null && value.trim().length > 0;
};
