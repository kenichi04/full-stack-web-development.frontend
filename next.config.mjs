/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

const rewrites = async () => {
    return [
        {
            source: 'api/:path*',
            destination: 'http://host.docker.internal:8000/api/:path*',
        },
    ];
};

export { rewrites };
