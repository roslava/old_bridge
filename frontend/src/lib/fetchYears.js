const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

export const fetchYears = async () => {
    try {
        const response = await fetch(
            `${API_URL}/api/years?populate[facts][populate][0]=cover&populate[facts][populate][1]=media&populate[facts][populate][11]=small_detail`,
            {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching years:', error);
        return [];
    }
};