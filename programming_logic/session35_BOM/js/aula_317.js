/*
   fixme Aula 317 ==> BOM
   * innerWidth / innerHeight
   * outerWidth / outerHeight
   * opener
   * pageXOffset / pageYOffset
   * screenX / screenY

   fixme ==> BOM --> Object History
   ! History
   * .length,
   * .go(),
   * .back(),
   * .forward()

   fixme ==> BOM --> Object Location
   ! Location
   * .hash,
   * .host,
   * .hostname,
   * .href,
   * .pathname,
   * .port,
   * .protocol,
   * .search
   ! Location
   *  .assign(url)
   *  .reload(),
   *  .replace(url)

   fixme ==> BOM --> Object Navigator
   ! Navigator
   *  .appName,
   *  .appVersion,
   *  .userAgent
   *  .platform
   *  .cookieEnabled
   *  .language
   *  .mimeTypes
   *  .plugins

   fixme ==> BOM --> Object Screen
   * screen
   *  .availableWidth / availableHeight
   *  .width / height

   fixme ==> BOM --> Method
   *  alert(), confirm(), prompt(),
   *  open(), close(),
   *  scrollTo(x,y), scrollTo(dx, dy),
   *  print()

   fixme ==> BOM --> Event
   ? load
   ? error
   ? Resize
   ? scroll
   ? unload
   ? beforeUnload
*/
// fixme AULA 316
// line

window.addEventListener('load', () => {
   console.log('load actived!');
});

window.addEventListener('DOMContentLoaded', () => {
   console.log('DOMContentLoaded actived');
});

window.addEventListener('resize', e => {
   // console.log('resize actived');
   // console.log(e);
});

window.addEventListener('scroll', e => {
   // console.log('scroll actived!');
   // console.log(e);
   // console.log(`scroll Y, ${pageYOffset}`);
});

window.addEventListener('unload', () => {
   console.log('unload actived!');
   // debugger;
});
window.addEventListener('beforeunload', () => {
   console.log('beforeunload actived');
   // debugger;
});