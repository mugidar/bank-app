const SITE_NAME = "BANK APP"
export const getTitle = (title) => {

return title ? `${title} | ${SITE_NAME}` : SITE_NAME

}