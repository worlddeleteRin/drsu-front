import apiClient from './api_client';

class APIServicesClass {
    getServicePage = async(slug) => {
        const { data } = await apiClient.get(
            "site/services/" + slug
        );
        return data
    }
}

export const APIServices = new APIServicesClass()
