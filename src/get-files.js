import recursiveReaddir from 'recursive-readdir';
import path from 'path';

export default async function getFiles(dir = './', extList = []) {

    return new Promise((resolve, reject) => {

        recursiveReaddir(dir, [(file, stats) => {
            let accept = extList.some(item => {
                return path.extname(file) === '.' + item;
            });
            if (stats.isFile() && !accept) return true;
        }], (err, files) => {
            if (err) return reject(err);
            resolve(files.map(item => path.resolve(item)));
        })

    });

}
