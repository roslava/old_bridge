const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

export const fetchHomeScreens = async () => {
    try {
        const response = await fetch(
            `${API_URL}/api/home-screens?populate=media`,
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
        console.error('Error fetching Home Screens:', error);
        return [];
    }
};