import moment from 'moment';

export const Util = {

    getFormatedDate(date: Date) {
        return (moment(date)).format('DD-MM-YYYY')
    },

    avatarImage(avatarImage: any) {
        switch (avatarImage) {
            // avatar profile
            case "avatar_profile_1.png":
                return require('../../assets/avatars/profile/avatar_profile_1.png');
            case "avatar_profile_2.png":
                return require('../../assets/avatars/profile/avatar_profile_2.png');
            case "avatar_profile_3.png":
                return require('../../assets/avatars/profile/avatar_profile_3.png');
            case "avatar_profile_4.png":
                return require('../../assets/avatars/profile/avatar_profile_4.png');
            case "avatar_profile_5.png":
                return require('../../assets/avatars/profile/avatar_profile_5.png');
            case "avatar_profile_6.png":
                return require('../../assets/avatars/profile/avatar_profile_6.png');

            // kids profile
            case "avatar_kid_1.png":
                return require('../../assets/avatars/kids/avatar_kid_1.png');
            case "avatar_kid_2.png":
                return require('../../assets/avatars/kids/avatar_kid_2.png');
            case "avatar_kid_3.png":
                return require('../../assets/avatars/kids/avatar_kid_3.png');
            case "avatar_kid_4.png":
                return require('../../assets/avatars/kids/avatar_kid_4.png');
            case "avatar_kid_5.png":
                return require('../../assets/avatars/kids/avatar_kid_5.png');
            case "avatar_kid_6.png":
                return require('../../assets/avatars/kids/avatar_kid_6.png');

            default:
                return require('../../assets/avatars/profile/avatar_profile_1.png');
        }
    },

    fromAgeToQuestionnaire(age: number, testType: string) {
        if (age < 27) {
            switch (testType) {
                case 'communication': return require('../../screens/kids/test/test_questions/24_months/communication.ts');
                case 'fine_motor': return require('../../screens/kids/test/test_questions/24_months/fine_motor.ts');
                case 'gross_motor': return require('../../screens/kids/test/test_questions/24_months/gross_motor.ts');
                case 'individual_social': return require('../../screens/kids/test/test_questions/24_months/individual_social.ts');
                case 'problem_solving': return require('../../screens/kids/test/test_questions/24_months/problem_solving.ts');
            }
        }
        else {
            if (age < 30) {
                switch (testType) {
                    case 'communication': return require('../../screens/kids/test/test_questions/27_months/communication.ts');
                    case 'fine_motor': return require('../../screens/kids/test/test_questions/27_months/fine_motor.ts');
                    case 'gross_motor': return require('../../screens/kids/test/test_questions/27_months/gross_motor.ts');
                    case 'individual_social': return require('../../screens/kids/test/test_questions/27_months/individual_social.ts');
                    case 'problem_solving': return require('../../screens/kids/test/test_questions/27_months/problem_solving.ts');
                }
            }
            else {
                if (age < 33) {
                    switch (testType) {
                        case 'communication': return require('../../screens/kids/test/test_questions/30_months/communication.ts');
                        case 'fine_motor': return require('../../screens/kids/test/test_questions/30_months/fine_motor.ts');
                        case 'gross_motor': return require('../../screens/kids/test/test_questions/30_months/gross_motor.ts');
                        case 'individual_social': return require('../../screens/kids/test/test_questions/30_months/individual_social.ts');
                        case 'problem_solving': return require('../../screens/kids/test/test_questions/30_months/problem_solving.ts');
                    }
                }
                else {
                    if (age < 36) {
                        switch (testType) {
                            case 'communication': return require('../../screens/kids/test/test_questions/33_months/communication.ts');
                            case 'fine_motor': return require('../../screens/kids/test/test_questions/33_months/fine_motor.ts');
                            case 'gross_motor': return require('../../screens/kids/test/test_questions/33_months/gross_motor.ts');
                            case 'individual_social': return require('../../screens/kids/test/test_questions/33_months/individual_social.ts');
                            case 'problem_solving': return require('../../screens/kids/test/test_questions/33_months/problem_solving.ts');
                        }
                    }
                    else {
                        if (age < 42) {
                            switch (testType) {
                                case 'communication': return require('../../screens/kids/test/test_questions/36_months/communication.ts');
                                case 'fine_motor': return require('../../screens/kids/test/test_questions/36_months/fine_motor.ts');
                                case 'gross_motor': return require('../../screens/kids/test/test_questions/36_months/gross_motor.ts');
                                case 'individual_social': return require('../../screens/kids/test/test_questions/36_months/individual_social.ts');
                                case 'problem_solving': return require('../../screens/kids/test/test_questions/36_months/problem_solving.ts');
                            }
                        }
                        else {
                            if (age < 48) {
                                switch (testType) {
                                    case 'communication': return require('../../screens/kids/test/test_questions/42_months/communication.ts');
                                    case 'fine_motor': return require('../../screens/kids/test/test_questions/42_months/fine_motor.ts');
                                    case 'gross_motor': return require('../../screens/kids/test/test_questions/42_months/gross_motor.ts');
                                    case 'individual_social': return require('../../screens/kids/test/test_questions/42_months/individual_social.ts');
                                    case 'problem_solving': return require('../../screens/kids/test/test_questions/42_months/problem_solving.ts');
                                }
                            }
                            else {
                                if (age < 54) {
                                    switch (testType) {
                                        case 'communication': return require('../../screens/kids/test/test_questions/48_months/communication.ts');
                                        case 'fine_motor': return require('../../screens/kids/test/test_questions/48_months/fine_motor.ts');
                                        case 'gross_motor': return require('../../screens/kids/test/test_questions/48_months/gross_motor.ts');
                                        case 'individual_social': return require('../../screens/kids/test/test_questions/48_months/individual_social.ts');
                                        case 'problem_solving': return require('../../screens/kids/test/test_questions/48_months/problem_solving.ts');
                                    }
                                }
                                else {
                                    if (age < 60) {
                                        switch (testType) {
                                            case 'communication': return require('../../screens/kids/test/test_questions/54_months/communication.ts');
                                            case 'fine_motor': return require('../../screens/kids/test/test_questions/54_months/fine_motor.ts');
                                            case 'gross_motor': return require('../../screens/kids/test/test_questions/54_months/gross_motor.ts');
                                            case 'individual_social': return require('../../screens/kids/test/test_questions/54_months/individual_social.ts');
                                            case 'problem_solving': return require('../../screens/kids/test/test_questions/54_months/problem_solving.ts');
                                        }
                                    }
                                    else {
                                        if (age < 64) {
                                            switch (testType) {
                                                case 'communication': return require('../../screens/kids/test/test_questions/60_months/communication.ts');
                                                case 'fine_motor': return require('../../screens/kids/test/test_questions/60_months/fine_motor.ts');
                                                case 'gross_motor': return require('../../screens/kids/test/test_questions/60_months/gross_motor.ts');
                                                case 'individual_social': return require('../../screens/kids/test/test_questions/60_months/individual_social.ts');
                                                case 'problem_solving': return require('../../screens/kids/test/test_questions/60_months/problem_solving.ts');
                                            }
                                        }
                                        else {
                                            return require('../../screens/kids/test/test_questions/60_months/communication.json');
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    getRatingLimits(age: number, testType: string) {
        if (age < 27) {
            switch (testType) {
                case 'communication': return { one: 25.17, second: 35.5 };
                case 'gross_motor': return { one: 38.07, second: 43 };
                case 'fine_motor': return { one: 35.16, second: 44 };
                case 'problem_solving': return { one: 29.79, second: 39.5 };
                case 'individual_social': return { one: 31.54, second: 41.5 };
            }
        }
        else {
            if (age < 30) {
                switch (testType) {
                    case 'communication': return { one: 24.02, second: 35.5 };
                    case 'gross_motor': return { one: 28.01, second: 39.5 };
                    case 'fine_motor': return { one: 18.42, second: 31.5 };
                    case 'problem_solving': return { one: 27.62, second: 39.5 };
                    case 'individual_social': return { one: 25.31, second: 36.0 };
                }
            }
            else {
                if (age < 33) {
                    switch (testType) {
                        case 'communication': return { one: 33.30, second: 44.0 };
                        case 'gross_motor': return { one: 36.14, second: 44.5 };
                        case 'fine_motor': return { one: 19.25, second: 34.5 };
                        case 'problem_solving': return { one: 27.08, second: 38.5 };
                        case 'individual_social': return { one: 32.01, second: 42.0 };
                    }
                }
                else {
                    if (age < 36) {
                        switch (testType) {
                            case 'communication': return { one: 25.36, second: 35.5 };
                            case 'gross_motor': return { one: 34.80, second: 44.5 };
                            case 'fine_motor': return { one: 12.28, second: 26.5 };
                            case 'problem_solving': return { one: 26.92, second: 38.0 };
                            case 'individual_social': return { one: 28.96, second: 39.0 };
                        }
                    }
                    else {
                        if (age < 42) {
                            switch (testType) {
                                case 'communication': return { one: 30.99, second: 42.0 };
                                case 'gross_motor': return { one: 36.99, second: 45.5 };
                                case 'fine_motor': return { one: 18.07, second: 33.5 };
                                case 'problem_solving': return { one: 30.29, second: 41.5 };
                                case 'individual_social': return { one: 35.33, second: 44.5 };
                            }
                        }
                        else {
                            if (age < 48) {
                                switch (testType) {
                                    case 'communication': return { one: 25.17, second: 35.5 };
                                    case 'gross_motor': return { one: 38.07, second: 43 };
                                    case 'fine_motor': return { one: 35.16, second: 44 };
                                    case 'problem_solving': return { one: 29.79, second: 39.5 };
                                    case 'individual_social': return { one: 31.54, second: 41.5 };
                                }
                            }
                            else {
                                if (age < 54) {
                                    switch (testType) {
                                        case 'communication': return { one: 30.72, second: 41.0 };
                                        case 'gross_motor': return { one: 32.78, second: 43.0 };
                                        case 'fine_motor': return { one: 15.81, second: 30.5 };
                                        case 'problem_solving': return { one: 31.30, second: 41.5 };
                                        case 'individual_social': return { one: 26.60, second: 38.5 };
                                    }
                                }
                                else {
                                    if (age < 60) {
                                        switch (testType) {
                                            case 'communication': return { one: 31.85, second: 43.5 };
                                            case 'gross_motor': return { one: 35.18, second: 44.8 };
                                            case 'fine_motor': return { one: 17.32, second: 31.5 };
                                            case 'problem_solving': return { one: 28.12, second: 39.5 };
                                            case 'individual_social': return { one: 32.33, second: 43.5 };
                                        }
                                    }
                                    else {
                                        if (age < 64) {
                                            switch (testType) {
                                                case 'communication': return { one: 33.19, second: 44.5 };
                                                case 'gross_motor': return { one: 31.28, second: 42.5 };
                                                case 'fine_motor': return { one: 26.54, second: 38.5 };
                                                case 'problem_solving': return { one: 29.99, second: 41.5 };
                                                case 'individual_social': return { one: 39.07, second: 46.4 };
                                            }
                                        }
                                        else {
                                            return require('../../screens/kids/test/test_questions/60_months/communication.json');
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}