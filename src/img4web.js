import getFiles from './get-files';
import createImage from './create-image';
import path from 'path';

export async function conver(options) {
    let { srcDir, srcExt, outDir, outFormat } = options;
    let files = await getFiles(srcDir, srcExt);

    return await Promise.all(files.map(src => {
        let srcExt = path.extname(src);
        let srcWithoutExt = src.replace(srcExt, '');

        return Promise.all(Object.keys(outFormat).map(id => {
            let ext = outFormat[id].ext ? '.' + outFormat[id].ext : srcExt;
            let out = srcWithoutExt.replace(srcDir, outDir) + '-' + id + ext;
            let options = [
                outFormat[id].width, outFormat[id].height,
                outFormat[id].quality, outFormat[id].strip,
                outFormat[id].interlace
            ];
            return createImage(src, out, ...options);
        }));

    }));

};
