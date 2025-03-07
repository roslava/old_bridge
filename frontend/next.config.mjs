/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbopack: false, // Отключите Turbopack
    },
    images: {
        domains: ['localhost', 'localhost:1337/uploads/'], // Разрешите загрузку изображений с localhost
    },
    async rewrites() {
        return [
            {
                source: "/uploads/:path*",
                destination: `${process.env.API_URL}/uploads/:path*`,
            },
            {
                source: '/',
                destination: '/home',
            },

        ];
    },
};

export default nextConfig;