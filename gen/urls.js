module.exports = {
    url: `http://libgen.is/search.php?req=`,
    regex: /bgcolor.+<td>(\d+)<\/td>/gm,
    dataUrl: `http://libgen.is/json.php?fields=id,Title,Author,MD5,coverurl,language,filesize,extension,year,publisher&ids=`,
    dlUrl: `http://download.library.lol/main`, // id(rounded)/md5(lower)/Author - Title-Publisher (Year).extension
    coversUrl: `https://www.libgen.is/covers/`
}