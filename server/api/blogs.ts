export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const runtimeConfig = useRuntimeConfig();
    try {
        let { data } = await $fetch(`${ runtimeConfig.public.API_BASE_URL }/blogs`, {
            method: "POST",
            body: { tag_id: null },
            headers: { "Content-Type": "application/json" },
        });

        return data;

    } catch (err) {
        console.error(err);
        throw createError({
            message: "Error occured",
            statusCode: 500,
            error: err
        });
    }

});
