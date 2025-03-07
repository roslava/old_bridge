const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

export async function fetchPhotoLensSlides() {
    if (!API_URL || !API_TOKEN) {
        throw new Error('API_URL or API_TOKEN is not defined in environment variables');
    }


    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // Тайм-аут 5 секунд

        const response = await fetch(
            `${API_URL}/api/photo-lens-slider?populate=*`,
            {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
                },
                signal: controller.signal,
                cache: 'no-store', // Отключаем кэширование
            }
        );

        clearTimeout(timeoutId);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        // console.log(data, 'slides999');
        return data.data || [];
    } catch (error) {
        console.error('Error fetching photo lens sliders:', error);
        return [];
    }
}







