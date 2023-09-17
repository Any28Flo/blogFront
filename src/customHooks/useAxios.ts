import { useState, useEffect } from "react";
import { getPosts } from '../db/api';
import { Post } from "../types";
interface PostRequest{
    posts? : Post[],
    
}
export const useAxios = (url: string) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const getPostsData = async () => {
        setIsLoading(true);
        try {
            const data = await getPosts(url)
            setData(data);
            setIsLoading(false);

        } catch (error) {
            console.log(error);
            setIsLoading(false);
            setError(error);

        }
    }
    useEffect(() => {
        getPostsData()
    }, [])

    return { data, error, isLoading }


}