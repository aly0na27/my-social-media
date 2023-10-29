declare module "*.svg" {
    const path: string;
    export default path;
}

declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}