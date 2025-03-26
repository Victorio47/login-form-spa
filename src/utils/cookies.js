export const getCookie = (key) => {
    return document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${key}=`))
        ?.split("=")[1] || null;
};
export const setCookie = (key, value, maxAgeSeconds = 31536000) => {
    document.cookie = `${key}=${value}; path=/; max-age=${maxAgeSeconds}`;
};
