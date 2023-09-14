import api from '../services/api';


export const getPosts = async (endpoint:string) => {
	
    try {
		const response = await api.get(endpoint)
		
		if (response.status === 200) {
			return response.data;
		}

	} catch (error) {
		throw new Error("Sucedio un error al obtener los posts");
	}
        
}
export const postMethod = async (endpoint:string, body:{title:string,content:string, authorId:number}) => {
	
    try {
		const response = await api.post(endpoint,body)
		
		if (response.status === 200) {
			return response.data;
		}
	} catch (error) {
		console.log(error)
		throw new Error(error?.response?.data);
		
	}
        
}