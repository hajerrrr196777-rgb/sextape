export const VOICE_CHANNEL_DENIAL = 'يجب أن تكون في نفس الروم الصوتي الموجود فيه البوت.';

export function requireVoiceChannel(member) {
    return member.voice?.channel != null;
}

export function canControlMusic(member, player) {
    if (!requireVoiceChannel(member)) return false;
    if (!player) return true;
    return member.voice.channel.id === player.voiceChannel;
}
