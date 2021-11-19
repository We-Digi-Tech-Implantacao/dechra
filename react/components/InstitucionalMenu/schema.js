export const CONTENT_SCHEMA = {
    title: "Content",
    description: "Content",
    type: "object",
    properties: {
        data: {
            type: "array",
            title: "Páginas Institucionais",
            items: {
                type: "object",
                title: "Páginas Institucional",
                properties: {
                    title: {
                        title: "Nome da Página",
                        type: "string",
                        default: ""
                    },
                    link: {
                        title: "link do menu",
                        type: "string",
                        default: ""
                    },
                    hasChildren: {
                        title: "Submenu?",
                        type: "string"
                    }
                }
            }
        }
    }
}