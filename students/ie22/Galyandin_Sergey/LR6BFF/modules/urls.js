import {accessToken, version} from "./consts.js";

class Urls {
    constructor() {
        this.url = 'https://api.vk.com/method'
        this.apiUrl = 'http://localhost:8000/vk-api'
        this.commonInfo = `access_token=${accessToken}&v=${version}`
    }

    getUserInfo(userId) {
        return `${this.url}/users.get?user_ids=${userId}&fields=photo_400_orig&${this.commonInfo}`
    }

    getGroupMembers(groupId, filter) {
        return `${this.url}/groups.getMembers?group_id=${groupId}&fields=photo_400_orig&${this.commonInfo}&filter=${filter}`
    }

    getGroupMembersFromApi() {
        return `${this.apiUrl}`
    }

    getUserInfoFromApi(userId) {
        return `${this.apiUrl}/${userId}`
    }

    getAdminsFromApi() {
        return `${this.apiUrl}/admins`
    }

    getFriendsFromApi() {
        return `${this.apiUrl}/friends`
    }
}

export const urls = new Urls()