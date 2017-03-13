import gm from 'gm';
import path from 'path';
import mkdirp from 'mkdirp';

function write(instance, out) {
    return new Promise((resolve, reject) => {
        instance.write(out, err => {
            if (err) return reject(err);
            resolve();
        });
    });
}

function makeDir(path) {
    return new Promise((resolve, reject) => {
        mkdirp(path, err => {
            if (err) return reject(err);
            resolve();
        });
    });
}

export default async function createImage(src, out, width, height, quality, strip, interlace) {

    let instance = gm(src);
    if (strip) instance.strip();
    if (interlace) instance.interlace(interlace);
    if (quality) instance.quality(quality);
    instance.resize(width, height, '^');
    instance.gravity('Center');
    instance.crop(width, height);

    await makeDir(path.dirname(out));
    return await write(instance, out);

}
