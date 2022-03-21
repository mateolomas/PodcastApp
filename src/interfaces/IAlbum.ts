// Generated by https://quicktype.io

export interface AlbumType {
    window:      number;
    version:     number;
    timestamp:   number;
    api_warning: string;
    body:        BodyAlbum;
}

export interface BodyAlbum {
    totals:      Totals;
    audio_clips: AudioClip[];
}

export interface AudioClip {
    id:                    number;
    season_number:         null;
    episode_number:        null;
    title:                 string;
    description:           string;
    formatted_description: string;
    updated_at:            string;
    user:                  User;
    link_style:            LinkStyle;
    channel:               Channel;
    duration:              number;
    mp3_filesize:          number;
    uploaded_at:           string;
    recorded_at:           string;
    uploaded_at_ts:        number;
    recorded_at_ts:        number;
    can_comment:           boolean;
    can_embed:             boolean;
    category_id:           number;
    counts:                Counts;
    urls:                  AudioClipUrls;
    image_attachment:      number;
}

export interface Channel {
    id:    number;
    title: Title;
    urls:  ChannelUrls;
}

export enum Title {
    RealGhostStoriesOnline = "Real Ghost Stories Online",
}

export interface ChannelUrls {
    detail:     string;
    logo_image: Image;
}

export interface Image {
    original: string;
}

export interface Counts {
    comments: number;
    likes:    number;
    plays:    number;
}

export enum LinkStyle {
    Channel = "channel",
}

export interface AudioClipUrls {
    detail:     string;
    high_mp3:   string;
    image:      string;
    post_image: Image;
    wave_img:   string;
}

export interface User {
    id:       number;
    username: Username;
    urls:     UserUrls;
}

export interface UserUrls {
    profile:       string;
    image:         string;
    profile_image: Image;
}

export enum Username {
    Ghoststories = "ghoststories",
}

export interface Totals {
    count:  number;
    offset: number;
}