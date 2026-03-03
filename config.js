const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'PRINCE-MDX!H4sIAAAAAAAAA5VU2bKiSBD9l3rVaBYBl4gbMYiAiAuIIjoxDyUUUFc2qQKFDv99Au3btx9meu7wVNSSefKck/kdZDkmyEQNmHwHRYlrSFG3pE2BwARMqzBEJeiDAFIIJgCbZDsystCi6GrG6rhS/ORuxMylt9jN3VjSL2119+KT5N3ewKMPiuqcYP83AU0rGPBzbY5MepJi6RZY16vBLutMO6zq0G1P8kLEclistNUbeHQRIS5xFqlFjFJUwsREjQVx+TX4valFWlMKxsVJXDJh3a408w5lLoqc1dI/lU4oqJm3Zc7c/mvwDxfGXdzy1Y232KpIl07rtHfJmh84Uxz3FMftLYrN7pgtFeEFn+AoQ4ERoIxi2nyZ92Y2W0brfJ3XxlpLzNFqSbX1iD1ko0O1KLk9UnVuFowq0/sicCQhhk8d5ryMlu/T5gLp1Fek0S4+RO1ClfWixbkkHKLt7PIrcKv88Mrl//AezTOHnm/v+RT670G4EFP/fHLjuj4Nzu5JWihCaA+TrdNL5K/BD1Y3Vkxbr26nYpEnls6HpNAl3LqcJ56M+WZ3Zpo8iqLW+IQPaVX+DiVqbMezJIukkh6HaHBRkXnZH9SiMe3Y3Y90JsgF45Rhw8W8G2/n5c26xpp0UA/VuJDqE1ruh85RtH3WXOrJfXVMYjl6e1Z0QY0RgAn36IMSRZjQElKcZ90ez/J9AIPaQX6J6JNesJbiVLv2LnW6WLfSbtAbJKq4df1Le0xjo/Xii0wWepH0bOEN9EFR5j4iBAVzTGheNitECIwQAZM//+qDDN3pS7gu3YDrgxCXhO6zqkhyGHyo+nEIfT+vMuo0ma90C1SCCfu5jSjFWUQ6HqsMln6Ma6TEkBIwCWFC0M8KUYkCMKFlhX52rZIHHfGjmTpXB7IC+iB9CoIDMAG8KA6FASewwlCaCOM/yLdbFxYWxbcMUdAHGUyfsjUUsXdNA32QvB6yQ3EwlLgRO2Alie/edgePn5i7FAGiECcETIBiKbubddFVi09Swuq6QiJZiWTwWeOHWV5inNypxuTrcSWZ7r3HvCuNJnCZuvG2bm8xrvRMW0/t/YaR9uTtH4J0Y/OakFWkF3S7NfF5NryPhuMwOS/Gvo+XVZEfJevYG45rY2Qpm2wvi8eIZafruUQY3YSKs/UdLYPBcRxjT0DhMcHuuyy/ddkCVGMf/ZpMcWahjJjivrKwl5WxN1os9lXoCNZ644x0Fo+FKDe9K6qzUFOPTWsOVhu7tTm+jotGs+OSUY6u/a65ArNjONHemu7s9rLxs42SH+MLPw3Wqdf9hhg9p8EPlf5TzRfwznTso/9LjB/z5V96dHpw7W0ozcJzhRM/rIUbidH6dJ8lrBvi8BwX952912Z1L1mCx+OvPigSSMO8TMEEkPQMQR+UedVZ2MjC/DeZFNkwZnZkdGUnkFD5sy12OEWEwrQAE2445EVe4MeD1y2rzIs5JHHHgC7IadV5vJGLwqGQfnQZkLtP9Tjw+Bvj37UogQcAAA==', // 👈👈paste your session id here
    PORT: process.env.PORT || 8000,
    SESSION_NAME: process.env.SESSION_NAME || "auth_info_baileys"
};
