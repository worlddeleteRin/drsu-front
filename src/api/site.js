import apiClient from './api_client';

class APISiteClass {
    async getCommonInfo() {
        const response = await apiClient.get(
            "site/common-info"
        ).catch((error) => {
            console.log('catch error', error.response.data)
            return error.response
        });
        return response
    }
    async getHeaderLinks() {
        const response = await apiClient.get(
            "site/header-links"
        ).catch((error) => {
            console.log('catch error', error.response.data)
            return error.response
        });
        return response
    }
}

export const APISite = new APISiteClass()
