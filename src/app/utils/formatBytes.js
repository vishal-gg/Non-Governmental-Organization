export const formatBytes = (bytes) => {
    let size = bytes;
    let unit = 'B';

    switch (true) {
        case size < 1024:
            break;
        case size < 1024 * 1024:
            size /= 1024;
            unit = 'KB';
            break;
        case size < 1024 * 1024 * 1024:
            size /= 1024 * 1024;
            unit = 'MB';
            break;
        default:
            size /= 1024 * 1024 * 1024;
            unit = 'GB';
            break;
    }

    return size.toFixed(2) + ' ' + unit;
}