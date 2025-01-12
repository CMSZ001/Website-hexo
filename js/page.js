hexo.extend.filter.register('theme_inject', function(injects) {
  injects.header.file('video-banner', 'source/_inject/header.ejs', { key: 'value' }, -1);
});
