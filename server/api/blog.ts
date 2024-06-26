import { ApiResponse } from "~/types/api_response";
import { BlogItemResponse } from "~/types/blog_item_response";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const runtimeConfig = useRuntimeConfig();
    try {
        let { data } = await $fetch<ApiResponse<BlogItemResponse>>(`${ runtimeConfig.private.API_BASE_URL }/blogitem`, {
            method: "POST",
            body: { blog_id: body && body.blog_id ? body.blog_id : null },
            headers: { "Content-Type": "application/json" },
        });

        return data;

    } catch (err) {
        console.error(err);
        throw createError({
            message: "Error occured",
            statusCode: 500
        });
    }

});
