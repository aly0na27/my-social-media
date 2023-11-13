export type PhotosType = {
    small: string | null,
    large: string | null
}

export type UserType = {
    id: number,
    name: string,
    photos: PhotosType,
    status: null | string,
    followed: boolean,
}


export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}

export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType;
    aboutMe: string
}

export type MessageType = {
    id: number,
    message: string
}

export type DialogType = {
    id: number,
    name: string,
    avatar: string
}

export type NewsItemType = {
    article_id: string
    title: string
    description: string,
    link: string
    keywords: Array<string>
    creator: Array<string>
    video_url: null | string,
    content: string
    pubDate: string
    image_url: string
    source_id: string
    source_priority: number
    country: Array<string>
    category: Array<string>
    language: string
}