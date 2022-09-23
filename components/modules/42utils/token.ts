export const checkToken = async (token: string) => {
    const response = await fetch('https://api.42.fr/oauth/token/info', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    console.log({response});
}