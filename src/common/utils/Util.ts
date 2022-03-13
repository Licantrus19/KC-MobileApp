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
    }

}