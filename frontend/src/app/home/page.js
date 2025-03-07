import { fetchHomeScreens } from "@/lib/fetchHomeScreens";
import { fetchPhotoLensSlides } from "@/lib/fetchPhotoLensSlides";
import ClientPage from "@/app/home/ClientPage";

export default async function Page() {
    const homeScreens = await fetchHomeScreens();
    const photoLensSlides = await fetchPhotoLensSlides();

// console.log('constructionFacts?', homeScreens[0].media[0].url)
// console.log('photoLensSlides url:', photoLensSlides.imgs[0].url)
// console.log('photoLensSlides? caption:', photoLensSlides.imgs[0].caption)
// console.log('photoLensSlides? alternativeText:', photoLensSlides.imgs[0].alternativeText)
// console.log('photoLensSlides? alternativeText:', photoLensSlides.imgs)
    return (
        <ClientPage homeScreens={homeScreens} photoLensSlides={photoLensSlides.imgs} />
    );
}