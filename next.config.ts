import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images :{
    remotePatterns :[
      {
        protocol : 'https',
        hostname : 'fakestoreapi.com'
      }
    ]
  }
};

export default nextConfig;
