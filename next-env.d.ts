/// <reference types="next" />
/// <reference types="next/types/global" />
declare module '*.css' {
    const content: string;
    export default content;
}

declare module "*.svg" {
    const content: any;
    export default content;
}