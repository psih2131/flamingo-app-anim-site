export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const runtimeConfig = useRuntimeConfig();
    try {
        console.log(runtimeConfig.public.API_BASE_URL);
        let result = await $fetch(`${ runtimeConfig.public.API_BASE_URL}/blogs`, {
            method: "POST",
            // body: { username: body.username, password: body.password },
            headers: { "Content-Type": "application/json" },
        });
        console.log(result);
        return {
            message: "success",
        };
    } catch (err) {
        throw createError({
            message: "Authorization Failed",
            statusCode: 401,
        });
    }

});
