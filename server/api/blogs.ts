import { ApiResponse } from "~/types/api_response";
import { BlogsListResponse } from "~/types/blogs_list_response";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    const runtimeConfig = useRuntimeConfig();
    try {
        let { data } = await $fetch<ApiResponse<BlogsListResponse>>(`${ runtimeConfig.private.API_BASE_URL }/blogs`, {
            method: "POST",
            body: { tag_id: (body && body.tag_id) || null, page: (body && body.page ) || 1, per_page : (body && body.per_page ) || 1000  },
            headers: { "Content-Type": "application/json" },
        });

        return data;

    } catch (err) {
        console.error(err);
        throw createError({
            message: "Error occured",
            statusCode: 500,
            // error: err
        });
    }

});
