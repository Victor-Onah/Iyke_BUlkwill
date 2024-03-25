/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "export",
	images: {
        unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www-konga-com-res.cloudinary.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
