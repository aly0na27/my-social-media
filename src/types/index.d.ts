declare module "*.svg" {
    const path: string;
    export default path;
}
export type PhotosType = {
    small: string | null,
    large: string | null
}