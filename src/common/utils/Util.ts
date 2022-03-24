export const Util = {

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
                case 'communication': return require('../../screens/kids/test/test_questions/24_months/communication.json');
                case 'fine_motor': return require('../../screens/kids/test/test_questions/24_months/fine_motor.json');
                case 'gross_motor': return require('../../screens/kids/test/test_questions/24_months/gross_motor.json');
                case 'individual_social': return require('../../screens/kids/test/test_questions/24_months/individual_social.json');
                case 'problem_solving': return require('../../screens/kids/test/test_questions/24_months/problem_solving.json');
            }
        }
        else {
            if (age < 30) {
                switch (testType) {
                    case 'communication': return require('../../screens/kids/test/test_questions/27_months/communication.json');
                    case 'fine_motor': return require('../../screens/kids/test/test_questions/27_months/fine_motor.json');
                    case 'gross_motor': return require('../../screens/kids/test/test_questions/27_months/gross_motor.json');
                    case 'individual_social': return require('../../screens/kids/test/test_questions/27_months/individual_social.json');
                    case 'problem_solving': return require('../../screens/kids/test/test_questions/27_months/problem_solving.json');
                }
            }
            else {
                if (age < 33) {
                    switch (testType) {
                        case 'communication': return require('../../screens/kids/test/test_questions/30_months/communication.json');
                        case 'fine_motor': return require('../../screens/kids/test/test_questions/30_months/fine_motor.json');
                        case 'gross_motor': return require('../../screens/kids/test/test_questions/30_months/gross_motor.json');
                        case 'individual_social': return require('../../screens/kids/test/test_questions/30_months/individual_social.json');
                        case 'problem_solving': return require('../../screens/kids/test/test_questions/30_months/problem_solving.json');
                    }
                }
                else {
                    if (age < 36) {
                        switch (testType) {
                            case 'communication': return require('../../screens/kids/test/test_questions/33_months/communication.json');
                            case 'fine_motor': return require('../../screens/kids/test/test_questions/33_months/fine_motor.json');
                            case 'gross_motor': return require('../../screens/kids/test/test_questions/33_months/gross_motor.json');
                            case 'individual_social': return require('../../screens/kids/test/test_questions/33_months/individual_social.json');
                            case 'problem_solving': return require('../../screens/kids/test/test_questions/33_months/problem_solving.json');
                        }
                    }
                    else {
                        if (age < 42) {
                            switch (testType) {
                                case 'communication': return require('../../screens/kids/test/test_questions/36_months/communication.json');
                                case 'fine_motor': return require('../../screens/kids/test/test_questions/36_months/fine_motor.json');
                                case 'gross_motor': return require('../../screens/kids/test/test_questions/36_months/gross_motor.json');
                                case 'individual_social': return require('../../screens/kids/test/test_questions/36_months/individual_social.json');
                                case 'problem_solving': return require('../../screens/kids/test/test_questions/36_months/problem_solving.json');
                            }
                        }
                        else {
                            if (age < 48) {
                                switch (testType) {
                                    case 'communication': return require('../../screens/kids/test/test_questions/42_months/communication.json');
                                    case 'fine_motor': return require('../../screens/kids/test/test_questions/42_months/fine_motor.json');
                                    case 'gross_motor': return require('../../screens/kids/test/test_questions/42_months/gross_motor.json');
                                    case 'individual_social': return require('../../screens/kids/test/test_questions/42_months/individual_social.json');
                                    case 'problem_solving': return require('../../screens/kids/test/test_questions/42_months/problem_solving.json');
                                }
                            }
                            else {
                                if (age < 54) {
                                    switch (testType) {
                                        case 'communication': return require('../../screens/kids/test/test_questions/48_months/communication.json');
                                        case 'fine_motor': return require('../../screens/kids/test/test_questions/48_months/fine_motor.json');
                                        case 'gross_motor': return require('../../screens/kids/test/test_questions/48_months/gross_motor.json');
                                        case 'individual_social': return require('../../screens/kids/test/test_questions/48_months/individual_social.json');
                                        case 'problem_solving': return require('../../screens/kids/test/test_questions/48_months/problem_solving.json');
                                    }
                                }
                                else {
                                    if (age < 60) {
                                        switch (testType) {
                                            case 'communication': return require('../../screens/kids/test/test_questions/54_months/communication.json');
                                            case 'fine_motor': return require('../../screens/kids/test/test_questions/54_months/fine_motor.json');
                                            case 'gross_motor': return require('../../screens/kids/test/test_questions/54_months/gross_motor.json');
                                            case 'individual_social': return require('../../screens/kids/test/test_questions/54_months/individual_social.json');
                                            case 'problem_solving': return require('../../screens/kids/test/test_questions/54_months/problem_solving.json');
                                        }
                                    }
                                    else {
                                        if (age < 64) {
                                            switch (testType) {
                                                case 'communication': return require('../../screens/kids/test/test_questions/60_months/communication.json');
                                                case 'fine_motor': return require('../../screens/kids/test/test_questions/60_months/fine_motor.json');
                                                case 'gross_motor': return require('../../screens/kids/test/test_questions/60_months/gross_motor.json');
                                                case 'individual_social': return require('../../screens/kids/test/test_questions/60_months/individual_social.json');
                                                case 'problem_solving': return require('../../screens/kids/test/test_questions/60_months/problem_solving.json');
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