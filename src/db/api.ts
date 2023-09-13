import api from '../services/api';


export const getPosts = async (endpoint:string) => {
	
    try {
		const response = await api.get(endpoint)
		
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		console.log(error)
		throw new Error(error?.response?.data);
		
	}
        
}
