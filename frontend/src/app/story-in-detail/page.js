import { fetchYears } from "@/lib/fetchYears";
import ClientPage from "@/app/story-in-detail/ClientPage";

export default async function Page() {

    const years = await fetchYears(); // Получаем данные на сервере

    return (
        <ClientPage years={years} />
    );
}