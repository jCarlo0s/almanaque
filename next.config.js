/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GAME_API_URL: process.env.GAME_API_URL,
    PLAYER_API_URL: process.env.PLAYER_API_URL,
  },
}

module.exports = nextConfig
